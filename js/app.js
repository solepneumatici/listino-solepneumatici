document.addEventListener('DOMContentLoaded', () => {
    const NOMI_GIORNI = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
    let listinoData = null;
    let currentCategoryIndex = 0;
    let secondsElapsed = 0;
    let carouselInterval = null;
    let isPaused = false;
    let cachedMeteoData = null;
    let lastMeteoFetchTime = null;

    const mainContent = document.getElementById('main-content');
    const brandSlogan = document.getElementById('brand-slogan');
    const datetimeDisplay = document.getElementById('datetime-display');
    const pageIndicator = document.getElementById('page-indicator');
    const progressBar = document.getElementById('progress-bar');

    // Orologio in tempo reale (Data + Ora)
    function updateClock() {
        if (!datetimeDisplay) return;
        const ora = new Date();
        
        const giorni = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
        const mesi = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'];

        const nomeGiorno = giorni[ora.getDay()];
        const giornoNum = ora.getDate();
        const mese = mesi[ora.getMonth()];
        const ore = String(ora.getHours()).padStart(2, '0');
        const minuti = String(ora.getMinutes()).padStart(2, '0');

        const testoAvviso = testoAvvisoIntestazione();
        const avvisoMini = testoAvviso ? `<div class="avviso-chiusura-mini">${testoAvviso}</div>` : '';

        datetimeDisplay.innerHTML = `${nomeGiorno} ${giornoNum} ${mese} &nbsp;|&nbsp; <span style="font-size: 2rem; color: #FFFFFF;">${ore}:${minuti}</span>${avvisoMini}`;
    }

    updateClock();
    setInterval(updateClock, 1000);
    setInterval(() => aggiornaSchedaOrari(), 1000);

    function loadData() {
        if (typeof LISTINO_DATA !== 'undefined') {
            listinoData = LISTINO_DATA;
            inializzaVetrina();
            return;
        }

        fetch(`data/listino.json?t=${new Date().getTime()}`)
            .then(res => res.json())
            .then(data => {
                listinoData = data;
                inializzaVetrina();
            })
            .catch(err => {
                console.error("Errore caricamento dati:", err);
            });
    }

    // PERIODI DI VISIBILITA' DI UNA SCHEDA
    // In listino_data.js una scheda può avere:  "periodi": [ { "dal": "01/10", "al": "30/11" } ]
    // (formato GG/MM). Fuori dal periodo la scheda è nascosta. Si possono mettere più periodi.
    // Se "dal" è dopo "al" il periodo passa a cavallo dell'anno (es. dal 15/12 al 10/01).
    function giornoMese(t) {
        const m = String(t || '').match(/^(\d{1,2})\/(\d{1,2})$/);
        return m ? (+m[2]) * 100 + (+m[1]) : null;
    }
    function dentroPeriodi(cat, data) {
        if (!cat.periodi || !cat.periodi.length) return true;
        const oggiGM = (data.getMonth() + 1) * 100 + data.getDate();
        return cat.periodi.some(p => {
            const dal = giornoMese(p.dal), al = giornoMese(p.al);
            if (dal === null || al === null) return true; // scritto male: meglio mostrare che nascondere
            return dal <= al ? (oggiGM >= dal && oggiGM <= al) : (oggiGM >= dal || oggiGM <= al);
        });
    }

    // Una promo è scaduta quando è passato il giorno indicato in "scadenza_promo_data"
    // (formato AAAA-MM-GG). La promo resta valida fino alle 23:59 di quel giorno.
    function promoScaduta(servizio) {
        if (!servizio || !servizio.scadenza_promo_data) return false;
        const parti = String(servizio.scadenza_promo_data).split('-').map(Number);
        if (parti.length !== 3 || parti.some(isNaN)) return false;
        const fineGiorno = new Date(parti[0], parti[1] - 1, parti[2], 23, 59, 59);
        return new Date() > fineGiorno;
    }


    // =========================================================================
    // STATO DI APERTURA (aperti / stiamo per chiudere / chiusi / festivo)
    // Legge gli orari dalla scheda "orari_prenotazione" in listino_data.js.
    // Campi facoltativi di quella scheda:
    //   "giorni_aperti": [1,2,3,4,5,6]            (0=domenica ... 6=sabato)
    //   "orari_speciali": { "6": { "etichetta": "Sabato", "orari": ["08:30 - 12:15"] } }
    //   "chiusure_straordinarie": [ { "da": "2026-08-10", "a": "2026-08-23", "motivo": "Ferie estive" } ]
    //   "avviso_chiusura_minuti": 10               (da quanti minuti avvisare)
    //   "avviso_festivita_giorni_prima": 14         (quanti giorni prima avvisare)
    //   "avviso_chiusura_su_tutte_le_schede": true
    // Le festività rosse italiane sono calcolate in automatico (Pasquetta compresa).
    // =========================================================================
    const MESI_ESTESI = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];

    function due(n) { return String(n).padStart(2, '0'); }
    function oraTesto(min) { return due(Math.floor(min / 60)) + ':' + due(min % 60); }
    function dataIt(d) { return NOMI_GIORNI[d.getDay()] + ' ' + d.getDate() + ' ' + MESI_ESTESI[d.getMonth()]; }
    function soloGiorno(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
    function aggiungiGiorni(d, n) { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }
    function unisciE(arr) { return arr.length < 2 ? arr.join('') : arr.slice(0, -1).join(', ') + ' e ' + arr[arr.length - 1]; }
    function maiuscola(t) { return t.charAt(0).toUpperCase() + t.slice(1); }
    function accorcia(t, n) { return t.length > n ? t.slice(0, n - 1) + '…' : t; }
    function daStringa(t) { const p = String(t).split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); }

    // Data della Pasqua (algoritmo standard del calendario gregoriano)
    function pasqua(anno) {
        const a = anno % 19, b = Math.floor(anno / 100), c = anno % 100;
        const d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25);
        const g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30;
        const i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7;
        const m = Math.floor((a + 11 * h + 22 * l) / 451);
        const mese = Math.floor((h + l - 7 * m + 114) / 31);
        const giorno = ((h + l - 7 * m + 114) % 31) + 1;
        return new Date(anno, mese - 1, giorno);
    }

    const AUGURI = {
        'Capodanno': 'Buon Anno!', 'Epifania': 'Buona Epifania!', 'Pasqua': 'Buona Pasqua!',
        'Pasquetta': 'Buona Pasqua!', 'Ferragosto': 'Buon Ferragosto!',
        'Natale': 'Buon Natale e buone feste!', 'Santo Stefano': 'Buon Natale e buone feste!'
    };

    // Festività rosse italiane: nome completo e nome breve (per l'avviso piccolo)
    function festivitaAnno(anno) {
        const p = pasqua(anno);
        return [
            [new Date(anno, 0, 1), 'Capodanno', 'Capodanno'],
            [new Date(anno, 0, 6), 'Epifania', 'Epifania'],
            [p, 'Pasqua', 'Pasqua'],
            [aggiungiGiorni(p, 1), "Lunedì dell'Angelo (Pasquetta)", 'Pasquetta'],
            [new Date(anno, 3, 25), 'Festa della Liberazione', 'Liberazione'],
            [new Date(anno, 4, 1), 'Festa dei Lavoratori', 'Lavoratori'],
            [new Date(anno, 5, 2), 'Festa della Repubblica', 'Repubblica'],
            [new Date(anno, 7, 15), 'Ferragosto', 'Ferragosto'],
            [new Date(anno, 10, 1), 'Ognissanti', 'Ognissanti'],
            [new Date(anno, 11, 8), 'Immacolata Concezione', 'Immacolata'],
            [new Date(anno, 11, 25), 'Natale', 'Natale'],
            [new Date(anno, 11, 26), 'Santo Stefano', 'Santo Stefano']
        ].map(x => ({ da: x[0], a: x[0], nome: x[1], breve: x[2], festivo: true, augurio: AUGURI[x[2]] || '' }));
    }

    function leggiOrari() {
        if (!listinoData || !listinoData.categorie) return null;
        const cat = listinoData.categorie.find(c => c.is_info_page);
        if (!cat) return null;

        const leggiFasce = (lista) => {
            const fasce = [];
            (lista || []).forEach(txt => {
                const m = String(txt || '').match(/(\d{1,2}):(\d{2})\s*[-–]\s*(\d{1,2}):(\d{2})/);
                if (m) fasce.push({ inizio: (+m[1]) * 60 + (+m[2]), fine: (+m[3]) * 60 + (+m[4]) });
            });
            return fasce;
        };

        const fasceBase = leggiFasce([cat.orario_mattina, cat.orario_pomeriggio]);
        if (!fasceBase.length) return null;

        // Orari diversi per un giorno della settimana, con mesi facoltativi (1=gennaio ... 12=dicembre)
        const speciali = {};
        Object.keys(cat.orari_speciali || {}).forEach(k => {
            const e = cat.orari_speciali[k];
            speciali[k] = { fasce: leggiFasce(e.orari), mesi: (Array.isArray(e.mesi) && e.mesi.length) ? e.mesi : null };
        });

        const straordinarie = (cat.chiusure_straordinarie || []).map(c => ({
            da: daStringa(c.da), a: daStringa(c.a || c.da),
            nome: c.motivo || 'Chiusura', breve: (c.breve !== undefined ? c.breve : accorcia(c.motivo || 'Chiusura', 22)), festivo: false, augurio: c.augurio || ''
        }));

        const anno = new Date().getFullYear();
        const annuali = [];
        // Chiusure che si ripetono ogni anno: un solo giorno oppure un periodo (anche a cavallo
        // dell'anno, es. dal 31/12 al 6/01). Gli anni da controllare sono 3 per coprire il cambio d'anno.
        (cat.chiusure_annuali || []).forEach(c => {
            [anno - 1, anno, anno + 1].forEach(y => {
                const da = new Date(y, c.mese - 1, c.giorno);
                let a = da;
                if (c.fino_giorno && c.fino_mese) {
                    const annoFine = (c.fino_mese < c.mese || (c.fino_mese === c.mese && c.fino_giorno < c.giorno)) ? y + 1 : y;
                    a = new Date(annoFine, c.fino_mese - 1, c.fino_giorno);
                }
                annuali.push({ da: da, a: a, nome: c.motivo || 'Chiusura', breve: (c.breve !== undefined ? c.breve : accorcia(c.motivo || 'Chiusura', 22)),
                               festivo: false, augurio: c.augurio || '' });
            });
        });
        return {
            fasceBase: fasceBase,
            speciali: speciali,
            giorni: Array.isArray(cat.giorni_aperti) ? cat.giorni_aperti : [1, 2, 3, 4, 5, 6],
            soglia: cat.avviso_chiusura_minuti || 10,
            giorniPrima: cat.avviso_festivita_giorni_prima || 14,
            slideGiorni: (cat.slide_festivita_giorni_prima !== undefined ? cat.slide_festivita_giorni_prima : 3),
            suTutte: cat.avviso_chiusura_su_tutte_le_schede !== false,
            chiusure: festivitaAnno(anno).concat(festivitaAnno(anno + 1), straordinarie, annuali)
        };
    }

    function chiusuraDelGiorno(d, o) {
        const g = soloGiorno(d).getTime();
        const trovate = o.chiusure.filter(c => g >= soloGiorno(c.da).getTime() && g <= soloGiorno(c.a).getTime());
        if (!trovate.length) return null;
        trovate.sort((x, y) => (soloGiorno(y.a) - soloGiorno(y.da)) - (soloGiorno(x.a) - soloGiorno(x.da)));
        return trovate[0];
    }
    // Giorno di apertura "normale": giorno della settimana giusto e, se previsto, mese giusto
    function aperturaOrdinaria(d, o) {
        if (!o.giorni.includes(d.getDay())) return false;
        const sp = o.speciali[d.getDay()];
        if (sp && sp.mesi && !sp.mesi.includes(d.getMonth() + 1)) return false;
        return true;
    }
    function giornoAperto(d, o) { return aperturaOrdinaria(d, o) && !chiusuraDelGiorno(d, o); }
    function fasceDelGiorno(d, o) { const sp = o.speciali[d.getDay()]; return sp ? sp.fasce : o.fasceBase; }

    // Prossimo giorno di apertura dopo "da" (escluso)
    function prossimaApertura(da, o) {
        for (let n = 1; n <= 400; n++) {
            const g = aggiungiGiorni(da, n);
            if (giornoAperto(g, o)) {
                const f = fasceDelGiorno(g, o)[0];
                // "domani" solo se è davvero il giorno dopo OGGI (non il giorno dopo la chiusura)
                const domani = aggiungiGiorni(soloGiorno(new Date()), 1).getTime();
                return { minuto: f.inizio, quando: soloGiorno(g).getTime() === domani ? 'domani' : dataIt(g) };
            }
        }
        return null;
    }

    function statoApertura() {
        const o = leggiOrari();
        if (!o) return null;
        const ora = new Date();
        const oggi = soloGiorno(ora);
        const minuti = ora.getHours() * 60 + ora.getMinutes() + ora.getSeconds() / 60;

        // Oggi è festa o chiusura straordinaria
        const ch = chiusuraDelGiorno(oggi, o);
        if (ch) {
            const next = prossimaApertura(oggi, o);
            return { tipo: 'chiuso', motivo: ch.nome, breve: ch.breve, riapre: next ? next.minuto : null,
                     quando: next ? next.quando : '', suTutte: o.suTutte };
        }

        if (aperturaOrdinaria(oggi, o)) {
            const fasce = fasceDelGiorno(oggi, o);
            const speciale = !!o.speciali[oggi.getDay()];
            for (let i = 0; i < fasce.length; i++) {
                const f = fasce[i];
                if (minuti >= f.inizio && minuti < f.fine) {
                    const mancano = f.fine - minuti;
                    let riapre = null, quando = '';
                    if (fasce[i + 1]) { riapre = fasce[i + 1].inizio; quando = 'oggi'; }
                    else { const n = prossimaApertura(oggi, o); if (n) { riapre = n.minuto; quando = n.quando; } }
                    return { tipo: mancano <= o.soglia ? 'chiusura' : 'aperto', indice: i, fine: f.fine,
                             mancano: mancano, riapre: riapre, quando: quando, speciale: speciale, suTutte: o.suTutte };
                }
            }
            const prossima = fasce.find(f => f.inizio > minuti);
            if (prossima) return { tipo: 'chiuso', riapre: prossima.inizio, quando: 'oggi', suTutte: o.suTutte };
        }
        const n = prossimaApertura(oggi, o);
        return { tipo: 'chiuso', riapre: n ? n.minuto : null, quando: n ? n.quando : '', suTutte: o.suTutte };
    }

    // Prossima chiusura (festa o ferie) nei prossimi N giorni, in un giorno in cui saremmo aperti
    function prossimaChiusura(giorniMax) {
        const o = leggiOrari();
        if (!o) return null;
        const oggi = soloGiorno(new Date());
        for (let n = 1; n <= giorniMax; n++) {
            const g = aggiungiGiorni(oggi, n);
            const ch = chiusuraDelGiorno(g, o);
            if (ch && aperturaOrdinaria(g, o)) {
                const next = prossimaApertura(ch.a, o);
                return { n: n, giorno: g, chiusura: ch,
                         riapre: next, soglia: o.giorniPrima, suTutte: o.suTutte };
            }
        }
        return null;
    }

    function testoMinuti(mancano) {
        const m = Math.ceil(mancano);
        if (mancano < 1) return 'meno di un minuto';
        return m === 1 ? 'ancora 1 minuto' : 'ancora ' + m + ' minuti';
    }

    // "riapriamo alle 14:30" / "riapriamo domani alle 08:30" / "riapriamo lunedì 26 ottobre alle 08:30"
    function testoRiapertura(st) {
        if (st.riapre === null || st.riapre === undefined) return '';
        const quando = (st.quando && st.quando !== 'oggi') ? st.quando + ' ' : '';
        return 'riapriamo ' + (st.quando === 'oggi' ? 'oggi ' : '') + quando + 'alle ' + oraTesto(st.riapre);
    }

    // Avviso che compare nell'intestazione (accanto all'orologio) su tutte le schede
    function testoAvvisoIntestazione() {
        const st = statoApertura();
        if (!st || !st.suTutte) return '';
        if (st.tipo === 'chiusura') return '⏰ Chiusura tra ' + Math.max(1, Math.ceil(st.mancano)) + ' min';
        if (st.tipo === 'chiuso' && st.motivo) return '📅 Oggi chiusi' + (st.breve ? ' • ' + st.breve : '');
        const pc = prossimaChiusura(1);
        if (pc && pc.n === 1) return '📅 Domani chiusi' + (pc.chiusura.breve ? ' • ' + pc.chiusura.breve : '');
        return '';
    }

    // Aggiorna la scheda degli orari (se è in primo piano)
    function aggiornaSchedaOrari() {
        const el = document.getElementById('stato-apertura');
        const card = document.getElementById('card-orari');
        const avv = document.getElementById('avviso-festivita');
        if (!el || !card) return;
        const st = statoApertura();
        if (!st) { el.style.display = 'none'; return; }

        el.style.display = '';
        card.classList.remove('card-orari-chiusura');
        document.querySelectorAll('.fascia, .orario-speciale').forEach(f => f.classList.remove('fascia-attiva', 'fascia-spenta'));

        if (st.tipo === 'chiuso') {
            el.className = 'stato-apertura stato-chiuso';
            if (st.motivo) {
                el.className = 'stato-apertura stato-festivo';
                el.innerHTML = '📅 CHIUSI OGGI <span class="stato-sub">' + st.motivo +
                    (st.riapre !== null ? ' • ' + testoRiapertura(st) : '') + '</span>';
            } else {
                el.innerHTML = 'CHIUSI ORA <span class="stato-sub">' + testoRiapertura(st) + '</span>';
            }
        } else {
            const dow = new Date().getDay();
            if (st.speciale) {
                document.querySelectorAll('.fascia').forEach(f => f.classList.add('fascia-spenta'));
                document.querySelectorAll('.orario-speciale').forEach(f => {
                    f.classList.add(String(f.dataset.giorno) === String(dow) ? 'fascia-attiva' : 'fascia-spenta');
                });
            } else {
                document.querySelectorAll('.fascia').forEach((f, i) => {
                    f.classList.add(i === st.indice ? 'fascia-attiva' : 'fascia-spenta');
                });
            }

            if (st.tipo === 'aperto') {
                el.className = 'stato-apertura stato-aperto';
                el.innerHTML = '<span class="stato-pallino"></span>APERTI ORA <span class="stato-sub">chiudiamo alle ' + oraTesto(st.fine) + '</span>';
            } else {
                card.classList.add('card-orari-chiusura');
                el.className = 'stato-apertura stato-chiusura';
                el.innerHTML = '⏰ STIAMO PER CHIUDERE <span class="stato-sub">' + testoMinuti(st.mancano) +
                    (st.riapre !== null ? ' • ' + testoRiapertura(st) : '') + '</span>';
            }
        }

        // Prossima festività / ferie
        if (avv) {
            const pc = (st.tipo === 'chiuso' && st.motivo) ? null : prossimaChiusura(14);
            const o = leggiOrari();
            const entro = pc && o && pc.n <= o.giorniPrima;
            if (entro) {
                const ch = pc.chiusura;
                const quando = (soloGiorno(ch.da).getTime() === soloGiorno(ch.a).getTime())
                    ? 'chiusi ' + dataIt(pc.giorno)
                    : 'chiusi da ' + dataIt(pc.giorno) + ' a ' + dataIt(ch.a);
                avv.style.display = '';
                avv.innerHTML = '📅 ' + quando.toUpperCase() + '<span class="stato-sub">' + ch.breve +
                    (pc.riapre ? ' • riapriamo ' + pc.riapre.quando + ' alle ' + oraTesto(pc.riapre.minuto) : '') + '</span>';
            } else {
                avv.style.display = 'none';
            }
        }
    }

    // Mesi in forma breve: [4,5,6,10,11,12] -> "Apr–Giu e Ott–Dic"
    function mesiTesto(mesi) {
        const brevi = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'];
        const m = Array.from(new Set(mesi)).sort((x, y) => x - y);
        const gruppi = [];
        m.forEach(n => {
            const ultimo = gruppi[gruppi.length - 1];
            if (ultimo && ultimo[1] === n - 1) ultimo[1] = n; else gruppi.push([n, n]);
        });
        return unisciE(gruppi.map(g => g[0] === g[1] ? brevi[g[0] - 1] : brevi[g[0] - 1] + '–' + brevi[g[1] - 1]));
    }

    // Righe sotto agli orari (sabato, domenica e festivi) per la scheda orari
    function righeOrariExtra(cat) {
        let html = '';
        const sp = cat.orari_speciali || {};
        const meseOra = new Date().getMonth() + 1;
        const giorni = Array.isArray(cat.giorni_aperti) ? cat.giorni_aperti.slice() : [1, 2, 3, 4, 5, 6];
        Object.keys(sp).forEach(k => {
            const e = sp[k];
            const etichetta = e.etichetta || maiuscola(NOMI_GIORNI[k]);
            const mesi = (Array.isArray(e.mesi) && e.mesi.length) ? e.mesi : null;
            if (mesi && !mesi.includes(meseOra)) {
                // Fuori stagione: la riga non si mostra e il giorno finisce tra i "chiusi"
                const i = giorni.indexOf(+k);
                if (i >= 0) giorni.splice(i, 1);
                return;
            }
            const orari = (e.orari || []).join(' <span style="color: var(--primary-orange);">•</span> ');
            html += '<div class="orario-speciale" data-giorno="' + k + '"><b>' + etichetta + '</b> ' + orari + '</div>';
        });
        return html;
    }

    // Slide dedicata: compare solo da N giorni prima di una festività rossa
    // (o chiusura straordinaria) che cade in un giorno in cui saremmo aperti.
    function creaSlideFestivita() {
        const o = leggiOrari();
        if (!o || !o.slideGiorni) return null;
        const oggi = soloGiorno(new Date());
        const limite = aggiungiGiorni(oggi, o.slideGiorni);
        const voci = o.chiusure.filter(c => {
            const da = soloGiorno(c.da), a = soloGiorno(c.a);
            if (a < oggi || da > limite) return false;
            for (let g = da; g <= a; g = aggiungiGiorni(g, 1)) {
                if (aperturaOrdinaria(g, o)) return true;
            }
            return false;
        }).filter((v, i, arr) => !arr.some((w, j) => j !== i &&
            soloGiorno(w.da) <= soloGiorno(v.da) && soloGiorno(w.a) >= soloGiorno(v.a) &&
            ((soloGiorno(w.a) - soloGiorno(w.da)) > (soloGiorno(v.a) - soloGiorno(v.da)) ||
             ((soloGiorno(w.a) - soloGiorno(w.da)) === (soloGiorno(v.a) - soloGiorno(v.da)) && j < i))
        )).sort((x, y) => x.da - y.da).slice(0, 3);
        if (!voci.length) return null;
        let fine = soloGiorno(voci[0].a);
        voci.forEach(v => { if (soloGiorno(v.a) > fine) fine = soloGiorno(v.a); });
        const next = prossimaApertura(fine, o);
        return {
            id: 'avviso_festivita', titolo: 'Avviso di chiusura', durata_sec: 6, attivo: true,
            is_festivita_page: true, voci: voci, riapertura: next
        };
    }

    // Prezzo mancante ("DA_CONFIGURARE" o vuoto)
    function prezzoMancante(valore) {
        return !valore || valore === "DA_CONFIGURARE" || valore.toString().trim() === "";
    }

    function inializzaVetrina() {
        if (!listinoData) return;

        const oggi = new Date();

        // 1. Ordina le categorie in base al campo 'ordine'
        if (listinoData.categorie) {
            listinoData.categorie.sort((a, b) => (a.ordine || 99) - (b.ordine || 99));
        }

        // 2. Filtra le categorie mantenendo quelle attive
        listinoData.categorie = listinoData.categorie.filter(cat => {
            if (!cat.attivo) return false;
            if (!dentroPeriodi(cat, oggi)) return false;
            if (cat.is_info_page || cat.is_meteo_page) return true;

            // Controllo Servizi Stagionali
            if (cat.is_stagionale) {
                const meseCorrente = oggi.getMonth() + 1;
                const inizio = cat.MeseInizio;
                const fine = cat.MeseFine;

                if (inizio > fine) {
                    if (meseCorrente < inizio && meseCorrente > fine) return false;
                } else {
                    if (meseCorrente < inizio || meseCorrente > fine) return false;
                }
            }

            if (cat.is_promo_spot && cat.servizi && cat.servizi[0] && promoScaduta(cat.servizi[0])) {
                return false;
            }

            // Scheda "dopo la promo": si vede solo quando la promo indicata è scaduta
            if (cat.dopo_scadenza_di) {
                const promo = listinoData.categorie.find(x => x.id === cat.dopo_scadenza_di);
                if (promo && promo.servizi && promo.servizi[0] && !promoScaduta(promo.servizi[0])) return false;
            }

            return cat.is_promo_spot || cat.is_stagionale || (cat.servizi && cat.servizi.some(s => s.attivo));
        });

        // Slide festività: solo nei giorni vicini a una chiusura, prima della scheda orari
        const slideFest = creaSlideFestivita();
        if (slideFest) {
            const idxInfo = listinoData.categorie.findIndex(c => c.is_info_page);
            if (idxInfo >= 0) listinoData.categorie.splice(idxInfo, 0, slideFest);
            else listinoData.categorie.push(slideFest);
        }

        if (listinoData.azienda && listinoData.azienda.slogan) {
            brandSlogan.textContent = listinoData.azienda.slogan;
        }

        renderCurrentCategory();
        // Se c'è l'intro animata, il carosello parte quando finisce (o dopo 15 s al massimo)
        if (window.CRVIEW_INTRO) {
            let partito = false;
            const parti = () => { if (!partito) { partito = true; startCarousel(); } };
            window.CRVIEW_INTRO.dopo(parti);
            setTimeout(parti, 15000);
        } else {
            startCarousel();
        }
        setupPauseControls();
    }

    // Mappatura codici meteo Open-Meteo -> Icone e Descrizioni Italiane
    function getMeteoDetails(code) {
        switch (code) {
            case 0:
                return { desc: "Sereno", icon: "☀️", color: "#FFB300" };
            case 1:
            case 2:
                return { desc: "Poco Nuvoloso", icon: "⛅", color: "#FFA000" };
            case 3:
                return { desc: "Coperto", icon: "☁️", color: "#78909C" };
            case 45:
            case 48:
                return { desc: "Nebbia", icon: "🌫️", color: "#90A4AE" };
            case 51:
            case 53:
            case 55:
                return { desc: "Pioggerella", icon: "🌦️", color: "#4FC3F7" };
            case 61:
            case 63:
            case 65:
                return { desc: "Pioggia", icon: "🌧️", color: "#0288D1" };
            case 71:
            case 73:
            case 75:
                return { desc: "Neve", icon: "❄️", color: "#29B6F6" };
            case 80:
            case 81:
            case 82:
                return { desc: "Rovesci di Pioggia", icon: "🌧️", color: "#0277BD" };
            case 95:
            case 96:
            case 99:
                return { desc: "Temporale", icon: "🌩️", color: "#5C6BC0" };
            default:
                return { desc: "Variabile", icon: "🌤️", color: "#FFB300" };
        }
    }

    function fetchMeteoData(callback) {
        const now = new Date();
        if (cachedMeteoData && lastMeteoFetchTime && (now - lastMeteoFetchTime < 15 * 60 * 1000)) {
            callback(cachedMeteoData);
            return;
        }

        // Coordinate dell'officina (si impostano nel pannello). Se mancano: Mappano (TO)
        const az = (listinoData && listinoData.azienda) || {};
        const lat = (typeof az.lat === 'number') ? az.lat : 45.1481;
        const lon = (typeof az.lon === 'number') ? az.lon : 7.7051;
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Europe%2FRome`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                cachedMeteoData = data;
                lastMeteoFetchTime = new Date();
                callback(data);
            })
            .catch(err => {
                console.error("Errore fetch meteo:", err);
                callback(null);
            });
    }

    function renderCurrentCategory() {
        if (!listinoData || !listinoData.categorie || listinoData.categorie.length === 0) return;

        if (currentCategoryIndex >= listinoData.categorie.length) {
            currentCategoryIndex = 0;
        }

        const category = listinoData.categorie[currentCategoryIndex];
        let html = "";

        if (category.is_meteo_page) {
            const indiceMeteo = currentCategoryIndex;
            fetchMeteoData((meteoData) => {
                // Se nel frattempo la scheda è cambiata, non fare nulla
                if (currentCategoryIndex !== indiceMeteo) return;

                // Nessun dato meteo (internet assente): salta alla scheda successiva
                if (!meteoData || !meteoData.current_weather) {
                    if (listinoData.categorie.length > 1) {
                        secondsElapsed = 0;
                        currentCategoryIndex = (currentCategoryIndex + 1) % listinoData.categorie.length;
                        renderCurrentCategory();
                    }
                    return;
                }

                const giorni = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
                const agg = lastMeteoFetchTime || new Date();
                const oraStr = `${String(agg.getHours()).padStart(2, '0')}:${String(agg.getMinutes()).padStart(2, '0')}`;

                const tempAttuale = `${Math.round(meteoData.current_weather.temperature)}°C`;
                const condizione = getMeteoDetails(meteoData.current_weather.weathercode);
                let forecastHtml = "";

                if (meteoData.daily && meteoData.daily.time) {
                    for (let i = 0; i < Math.min(3, meteoData.daily.time.length); i++) {
                        const p = String(meteoData.daily.time[i]).split('-').map(Number);
                        const dateObj = new Date(p[0], p[1] - 1, p[2]);
                        const isOggi = i === 0;
                        const dayName = isOggi ? "OGGI" : giorni[dateObj.getDay()].toUpperCase();
                        const code = meteoData.daily.weathercode[i];
                        const det = getMeteoDetails(code);
                        const max = Math.round(meteoData.daily.temperature_2m_max[i]);
                        const min = Math.round(meteoData.daily.temperature_2m_min[i]);
                        const prob = meteoData.daily.precipitation_probability_max
                            ? meteoData.daily.precipitation_probability_max[i] : null;

                        // Tipo di allerta in base al codice meteo
                        let allerta = null; // { classe, testo }
                        if ([95, 96, 99].includes(code)) {
                            allerta = { classe: 'meteo-allerta-temporale', testo: '⚡ TEMPORALE • PRUDENZA' };
                        } else if ([71, 73, 75].includes(code)) {
                            allerta = { classe: 'meteo-allerta-neve', testo: '❄️ NEVE • GOMME INVERNALI' };
                        } else if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) {
                            allerta = { classe: 'meteo-allerta-pioggia', testo: '☔ PIOGGIA • STRADA BAGNATA' };
                        }

                        const classi = ['meteo-box'];
                        if (isOggi) classi.push('meteo-oggi');
                        if (allerta) classi.push(allerta.classe);

                        const probHtml = (prob !== null && prob !== undefined && prob >= 20)
                            ? `<div class="meteo-prob">💧 ${Math.round(prob)}%</div>` : '';
                        const allertaHtml = allerta
                            ? `<div class="meteo-allerta-striscia">${allerta.testo}</div>` : '';

                        forecastHtml += `
                            <div class="${classi.join(' ')}">
                                <div class="meteo-giorno">${dayName}</div>
                                <div class="meteo-icona">${det.icon}</div>
                                <div class="meteo-temp">${max}° <span>/ ${min}°</span></div>
                                ${probHtml}
                                ${allertaHtml}
                            </div>
                        `;
                    }
                }

                html = `
                    <h2 class="category-title">${category.titolo || 'Meteo Locale'}</h2>
                    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                        <div style="display: flex; align-items: center; justify-content: space-between; gap: 2rem; background: var(--card-bg); border: 2px solid var(--primary-orange); border-radius: 0.9rem; padding: 1.6rem 2.5rem;">
                            <div style="font-size: 6rem; line-height: 1;">${condizione.icon}</div>
                            <div style="display: flex; flex-direction: column;">
                                <div style="font-size: 4.5rem; font-weight: 900; color: var(--text-main); line-height: 1;">${tempAttuale}</div>
                                <div style="font-size: 2rem; font-weight: 800; color: var(--primary-orange); margin-top: 0.4rem;">${condizione.desc}</div>
                                <div style="font-size: 1rem; color: var(--text-muted); margin-top: 0.4rem;">Aggiornato alle ${oraStr}</div>
                            </div>
                            <div style="max-width: 20rem; border-left: 3px solid var(--primary-orange); padding-left: 1.5rem;">
                                <div style="font-size: 1.3rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.4rem;">🚘 Consiglio per la sicurezza</div>
                                <div style="font-size: 1.15rem; color: var(--text-muted); line-height: 1.4;">
                                    Con gli sbalzi di temperatura verifica la pressione delle gomme e le spazzole del tergicristallo.
                                </div>
                            </div>
                        </div>
                        <div style="display: flex; gap: 1.5rem;">
                            ${forecastHtml}
                        </div>
                    </div>
                `;

                mainContent.classList.remove('fade-in');
                void mainContent.offsetWidth;
                mainContent.innerHTML = html;
                mainContent.classList.add('fade-in');
                updateIndicatorText();
            });
            return;
        }

        if (category.is_festivita_page) {
            const oggiF = soloGiorno(new Date());
            const carte = category.voci.map(c => {
                const da = soloGiorno(c.da), a = soloGiorno(c.a);
                const stessoGiorno = da.getTime() === a.getTime();
                const giorniAl = Math.round((da - oggiF) / 86400000);
                const tag = giorniAl <= 0 ? (stessoGiorno ? 'OGGI' : 'IN CORSO')
                          : giorniAl === 1 ? 'DOMANI' : 'FRA ' + giorniAl + ' GIORNI';
                const quando = stessoGiorno ? dataIt(da) : 'dal ' + dataIt(da) + ' al ' + dataIt(a);
                return `
                    <div class="festa-card">
                        <div>
                            <div class="festa-nome">${c.nome}</div>
                            <div class="festa-data">CHIUSI ${quando.toUpperCase()}</div>
                        </div>
                        <div class="promo-badge-large festa-tag">${tag}</div>
                    </div>`;
            }).join('');
            const rip = category.riapertura
                ? `<div class="festa-riapertura">Riapriamo ${category.riapertura.quando} alle ${oraTesto(category.riapertura.minuto)}</div>` : '';
            const aug = (category.voci.find(c => c.augurio) || {}).augurio;
            const augurio = aug ? `<div class="festa-augurio">${aug}</div>` : '';
            html = `<h2 class="category-title">${category.titolo}</h2>` + carte + rip + augurio;
        } else if (category.is_info_page) {
            html = `
                <div style="display: flex; flex-direction: row; width: 100%; height: 100%; align-items: center; justify-content: space-between; gap: 2.5rem; padding: 0.5rem 2rem;">
                    <div style="display: flex; flex-direction: column; gap: 1rem; flex: 1.3;">
                        <div style="background-color: var(--card-bg); border: 2px solid var(--primary-orange); border-radius: 14px; padding: 1.3rem 2rem; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.5);" id="card-orari">
                            <div style="font-size: 1.5rem; color: var(--primary-orange); font-weight: 800; margin-bottom: 0.5rem; text-transform: uppercase;">Orari di Apertura Officina</div>
                            ${category.etichetta_orario_base ? `<div class="etichetta-orario">${category.etichetta_orario_base}</div>` : ''}
                            <div style="font-size: 2.6rem; font-weight: 800; color: var(--text-main); white-space: nowrap;">
                                <span class="fascia">${category.orario_mattina}</span> <span style="color: var(--primary-orange); margin: 0 0.5rem;">•</span> <span class="fascia">${category.orario_pomeriggio}</span>
                            </div>
                            ${righeOrariExtra(category)}
                            <div id="stato-apertura" class="stato-apertura" style="display:none;"></div>
                            <div id="avviso-festivita" class="stato-apertura stato-festivo avviso-festivita" style="display:none;"></div>
                        </div>

                        <div style="background-color: var(--card-bg); border: 2px solid var(--primary-orange); border-radius: 14px; padding: 1.2rem 2rem; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                            <div style="font-size: 1.3rem; color: var(--text-muted); margin-bottom: 0.4rem; text-transform: uppercase; font-weight: 600;">Prenota il tuo appuntamento online su</div>
                            <div style="font-size: 2.6rem; color: var(--primary-orange); font-weight: 800;">${category.sito_web}</div>
                        </div>
                    </div>

                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: var(--card-bg); border: 2px solid var(--primary-orange); border-radius: 14px; padding: 2.5rem 2rem; text-align: center; flex: 0.9; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                        <div style="font-size: 1.4rem; color: var(--text-main); font-weight: 700; margin-bottom: 1.5rem; line-height: 1.4;">
                            📱 Inquadra per prenotare in 30 secondi dal tuo telefono!
                        </div>
                        ${category.qr_code_img ? `<div style="background: white; padding: 14px; border-radius: 12px; display: inline-block;">
                            <img src="${category.qr_code_img}" alt="QR Code" style="width: 11.25rem; height: 11.25rem; display: block;" />
                        </div>` : `<div style="font-size: 1.8rem; color: var(--primary-orange); font-weight: 800;">${category.sito_web || ''}</div>`}
                    </div>
                </div>
            `;
        } else if (category.is_promo_spot) {
            const servizio = category.servizi && category.servizi[0] ? category.servizi[0] : {};
            const scadenzaTesto = servizio.scadenza_promo ? `<div style="font-size: 1.1rem; color: var(--primary-orange); font-weight: 600; margin-top: 0.5rem;">📅 ${servizio.scadenza_promo}</div>` : '';
            
            html = `
                <h2 class="category-title">${category.titolo}</h2>
                <div class="promo-spot-card" style="background-color: var(--card-bg); border: 2px solid var(--primary-orange); border-radius: 12px; padding: 3rem 3.5rem; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 10px 30px rgba(0,0,0,0.5); position: relative; margin-top: 1rem;">
                    <div class="service-info" style="max-width: 60%;">
                        <div class="service-name" style="font-size: 2.6rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.8rem;">${servizio.nome || ''}</div>
                        <div class="service-desc" style="font-size: 1.4rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1.5rem;">${servizio.descrizione || ''}</div>
                        <div style="font-size: 1.3rem; color: var(--text-main); font-weight: 600; margin-bottom: 0.5rem;">
                            Prezzo: ${prezzoMancante(servizio.prezzo) ? '' : `<span style="text-decoration: line-through; color: #888; margin-right: 0.5rem;">${formatPrice(servizio.prezzo)}</span>`}
                            <span style="color: var(--primary-orange); font-size: 1.8rem; font-weight: 800;">${formatPrice(servizio.prezzo_promo)}</span> ${servizio.unita || ''}
                        </div>
                        ${scadenzaTesto}
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding-right: 2rem;">
                        <div class="promo-badge-large">
                            ${servizio.testo_badge || 'PROMO'}
                        </div>
                    </div>
                </div>
            `;
        } else {
            const activeServices = category.servizi.filter(s => s.attivo);

            html = `<h2 class="category-title">${category.titolo}</h2>`;
            html += `<div class="services-list${activeServices.length >= 5 ? ' compatta' : ''}">`;

            activeServices.forEach(servizio => {
                // La promo vale solo se non è scaduta
                const isPromo = servizio.promozione && !promoScaduta(servizio);
                const cardClass = (isPromo ? "service-card promo-active" : "service-card") + (servizio.evidenzia ? " evidenza" : "");

                let priceDisplay = "";
                if (isPromo && servizio.prezzo_promo) {
                    // Il prezzo barrato si mostra solo se esiste davvero
                    const prezzoVecchio = prezzoMancante(servizio.prezzo) ? '' :
                        `<span class="price-old">${formatPrice(servizio.prezzo)}</span>`;
                    priceDisplay = `
                        <span class="promo-badge">PROMOZIONE</span>
                        <div>
                            ${prezzoVecchio}
                            <span class="price-main" style="color: var(--primary-orange);">${formatPrice(servizio.prezzo_promo)}</span>
                        </div>
                    `;
                } else {
                    const wa = servizio.whatsapp ? `<svg class="wa-icon" viewBox="0 0 32 32" aria-hidden="true"><path fill="#25D366" d="M16 2C8.3 2 2 8.2 2 15.9c0 2.5.7 4.9 1.9 7L2 30l7.3-1.9c2 1.1 4.3 1.7 6.7 1.7 7.7 0 14-6.2 14-13.9S23.700 2 16 2z"/><path fill="#fff" d="M23.100 19.400c-.4-.2-2.300-1.100-2.600-1.200-.4-.1-.6-.2-.9.200-.3.400-1 1.200-1.200 1.400-.2.300-.4.300-.8.100-1.100-.5-2.300-1.300-3.300-2.600-.8-1-1.400-2-1.600-2.400-.2-.4 0-.6.200-.8l.6-.7c.2-.2.200-.4.400-.6.100-.3.100-.5 0-.7-.1-.2-.9-2.100-1.200-2.900-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.100-1.100.5-.4.400-1.400 1.400-1.400 3.400s1.500 3.900 1.700 4.200c.2.300 2.900 4.500 7.100 6.300 1 .4 1.800.7 2.400.9 1 .3 1.900.3 2.600.2.800-.1 2.300-.9 2.700-1.800.3-.9.300-1.700.2-1.800-.1-.2-.4-.3-.8-.5z"/></svg>` : '';
                    priceDisplay = `<span class="price-main">${wa}${formatPrice(servizio.prezzo)}</span>`;
                }

                html += `
                    <div class="${cardClass}">
                        <div class="service-info">
                            <div class="service-name">${servizio.nome}</div>
                            <div class="service-desc">${servizio.descrizione || ''}</div>
                        </div>
                        <div class="service-price-box">
                            ${priceDisplay}
                            <span class="price-unit">${servizio.unita || ''}</span>
                        </div>
                    </div>
                `;
            });

            html += `</div>`;
        }

        mainContent.classList.remove('fade-in');
        void mainContent.offsetWidth;
        mainContent.innerHTML = html;
        mainContent.classList.add('fade-in');

        updateIndicatorText();
        aggiornaSchedaOrari();
    }

    function updateIndicatorText() {
        if (!pageIndicator || !listinoData || !listinoData.categorie) return;

        const category = listinoData.categorie[currentCategoryIndex];
        const currentDuration = category.durata_sec || (listinoData.azienda && listinoData.azienda.intervallo_rotazione_sec) || 4;
        
        const remainingSec = Math.max(0, Math.ceil(currentDuration - secondsElapsed));

        if (isPaused) {
            pageIndicator.innerHTML = `Scheda ${currentCategoryIndex + 1} di ${listinoData.categorie.length} &nbsp;<strong style="color: var(--primary-orange);">[PAUSA]</strong>`;
        } else {
            pageIndicator.innerHTML = `Scheda ${currentCategoryIndex + 1} di ${listinoData.categorie.length} &nbsp;<span style="color: var(--primary-orange); font-weight: 700;">(${remainingSec}s)</span>`;
        }
    }

    function formatPrice(valore) {
        if (!valore || valore === "DA_CONFIGURARE" || valore.toString().trim() === "") {
            return "Tariffa in sede";
        }
        if (typeof valore === 'number' || !isNaN(valore)) {
            return `€ ${parseFloat(valore).toFixed(2).replace('.', ',')}`;
        }
        return valore;
    }

    let pauseTimeout = null;
    function togglePause() {
        isPaused = !isPaused;
        updateIndicatorText();
        // Dopo 60 secondi di pausa il listino riparte da solo
        if (pauseTimeout) clearTimeout(pauseTimeout);
        if (isPaused) {
            pauseTimeout = setTimeout(() => {
                isPaused = false;
                updateIndicatorText();
            }, 60000);
        }
    }

    function setupPauseControls() {
        document.addEventListener('click', () => {
            togglePause();
        });

        // Tasti: spazio o OK del telecomando = pausa/ripresa; frecce = scheda dopo/prima
        function vaiScheda(passo) {
            if (!listinoData || !listinoData.categorie || !listinoData.categorie.length) return;
            const n = listinoData.categorie.length;
            currentCategoryIndex = (currentCategoryIndex + passo + n) % n;
            secondsElapsed = 0;
            renderCurrentCategory();
            // Mentre guardi una scheda il listino resta fermo 60 secondi
            isPaused = true;
            updateIndicatorText();
            if (pauseTimeout) clearTimeout(pauseTimeout);
            pauseTimeout = setTimeout(() => { isPaused = false; updateIndicatorText(); }, 60000);
        }

        document.addEventListener('keydown', (e) => {
            const k = e.code || e.key;
            if (k === 'Space' || k === 'Enter' || k === 'NumpadEnter' || e.key === 'Enter' || e.key === ' ' || e.keyCode === 23 || e.keyCode === 13) {
                e.preventDefault();
                togglePause();
            } else if (k === 'ArrowRight' || e.key === 'ArrowRight' || e.keyCode === 39) {
                e.preventDefault();
                vaiScheda(1);
            } else if (k === 'ArrowLeft' || e.key === 'ArrowLeft' || e.keyCode === 37) {
                e.preventDefault();
                vaiScheda(-1);
            }
        });
    }

    function startCarousel() {
        if (carouselInterval) clearInterval(carouselInterval);

        function runStep() {
            if (isPaused) return;

            const category = listinoData.categorie[currentCategoryIndex];
            const currentDuration = category.durata_sec || (listinoData.azienda && listinoData.azienda.intervallo_rotazione_sec) || 4;

            secondsElapsed += 0.1;
            const percentage = (secondsElapsed / currentDuration) * 100;
            if (progressBar) progressBar.style.width = `${Math.min(percentage, 100)}%`;

            updateIndicatorText();

            if (secondsElapsed >= currentDuration) {
                secondsElapsed = 0;
                currentCategoryIndex = (currentCategoryIndex + 1) % listinoData.categorie.length;
                renderCurrentCategory();
            }
        }

        secondsElapsed = 0;
        carouselInterval = setInterval(runStep, 100);
    }

    loadData();

    // Piccolo logo CRview in basso a sinistra (si spegne dal pannello)
    function mettiFirmaSlide() {
        const info = document.querySelector('.footer-info');
        if (!info || info.querySelector('.firma-slide')) return;
        const intro = (typeof LISTINO_DATA !== 'undefined' && LISTINO_DATA.intro) || {};
        if (intro.firma_slide === false) return;
        const img = document.createElement('img');
        img.className = 'firma-slide';
        img.src = 'images/crview-firma.png';
        img.alt = 'CRview';
        const sx = document.createElement('div');
        sx.className = 'footer-sx';
        const primo = info.firstElementChild;
        info.insertBefore(sx, primo);
        sx.appendChild(img);
        if (primo) sx.appendChild(primo);
    }
    mettiFirmaSlide();

    // Ricarica la pagina ogni 30 minuti: così i prezzi aggiornati su GitHub
    // arrivano sul TV entro mezz'ora, e il browser resta "fresco".
    const MINUTI_RICARICA = 1;
    // Prima di ricaricare controlla che internet funzioni: se manca la connessione
    // NON ricarica (altrimenti il TV mostrerebbe una pagina di errore) e riprova dopo.
    setInterval(() => {
        fetch(`index.html?t=${Date.now()}`, { cache: 'no-store' })
            .then(res => { if (res.ok) location.reload(); })
            .catch(() => { /* niente internet: si riprova al prossimo giro */ });
    }, MINUTI_RICARICA * 60 * 1000);
});
