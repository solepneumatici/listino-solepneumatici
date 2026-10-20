document.addEventListener('DOMContentLoaded', () => {
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

        datetimeDisplay.innerHTML = `${nomeGiorno} ${giornoNum} ${mese} &nbsp;|&nbsp; <span style="font-size: 2rem; color: #FFFFFF;">${ore}:${minuti}</span>`;
    }

    updateClock();
    setInterval(updateClock, 1000);

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

            if (cat.is_promo_spot && cat.servizi && cat.servizi[0] && cat.servizi[0].scadenza_promo_data) {
                const dataScadenza = new Date(cat.servizi[0].scadenza_promo_data);
                if (oggi > dataScadenza) {
                    return false;
                }
            }

            return cat.is_promo_spot || cat.is_stagionale || (cat.servizi && cat.servizi.some(s => s.attivo));
        });

        if (listinoData.azienda && listinoData.azienda.slogan) {
            brandSlogan.textContent = listinoData.azienda.slogan;
        }

        renderCurrentCategory();
        startCarousel();
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

        // Coordinate di Mappano (TO)
        const lat = 45.1481;
        const lon = 7.7051;
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FRome`;

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
            fetchMeteoData((meteoData) => {
                const ora = new Date();
                const giorni = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
                const mesi = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'];
                const dataStr = `${giorni[ora.getDay()]} ${ora.getDate()} ${mesi[ora.getMonth()]}`;
                const oraStr = `${String(ora.getHours()).padStart(2, '0')}:${String(ora.getMinutes()).padStart(2, '0')}`;

                let tempAttuale = "--°C";
                let condizionI = getMeteoDetails(-1);
                let forecastHtml = "";

                if (meteoData && meteoData.current_weather) {
                    tempAttuale = `${Math.round(meteoData.current_weather.temperature)}°C`;
                    condizionI = getMeteoDetails(meteoData.current_weather.weathercode);

                    if (meteoData.daily && meteoData.daily.time) {
                        for (let i = 0; i < Math.min(3, meteoData.daily.time.length); i++) {
                            const dateObj = new Date(meteoData.daily.time[i]);
                            const dayName = i === 0 ? "OGGI" : giorni[dateObj.getDay()].toUpperCase();
                            const code = meteoData.daily.weathercode[i];
                            const det = getMeteoDetails(code);
                            const max = Math.round(meteoData.daily.temperature_2m_max[i]);
                            const min = Math.round(meteoData.daily.temperature_2m_min[i]);

                            forecastHtml += `
                                <div style="flex: 1; background: #FFFFFF; border: 2px solid #E0E0E0; border-radius: 12px; padding: 1.2rem; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
                                    <div style="font-size: 1.2rem; font-weight: 800; color: #111111; margin-bottom: 0.5rem;">${dayName}</div>
                                    <div style="font-size: 3rem; margin: 0.4rem 0;">${det.icon}</div>
                                    <div style="font-size: 1.3rem; font-weight: 700; color: #E65100;">${max}° <span style="color: #555555; font-weight: 500;">/ ${min}°</span></div>
                                </div>
                            `;
                        }
                    }
                }

                html = `
                    <div style="background-color: #F8F9FA; border-radius: 16px; padding: 2rem 2.5rem; height: 100%; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 10px 30px rgba(0,0,0,0.15); border: 3px solid #E65100;">
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #E0E0E0; padding-bottom: 1rem;">
                            <div style="display: flex; align-items: center; gap: 1.5rem;">
                                <img src="images/logo.png" alt="Logo Sole Pneumatici" style="height: 55px; width: auto; display: block;" />
                                <div style="font-size: 2rem; font-weight: 900; color: #111111; text-transform: uppercase; letter-spacing: 0.5px;">
                                    METEO LOCALE • MAPPANO (TO)
                                </div>
                            </div>
                            <div style="font-size: 1.2rem; font-weight: 700; color: #E65100; background: #FFF3E0; padding: 0.5rem 1rem; border-radius: 20px;">
                                Aggiornato il ${dataStr} alle ${oraStr}
                            </div>
                        </div>

                        <div style="display: flex; align-items: center; justify-content: space-around; margin: 1.5rem 0;">
                            <div style="font-size: 8rem; line-height: 1;">${condizionI.icon}</div>
                            <div style="display: flex; flex-direction: column;">
                                <div style="font-size: 5rem; font-weight: 900; color: #111111; line-height: 1;">${tempAttuale}</div>
                                <div style="font-size: 2.2rem; font-weight: 800; color: #E65100; margin-top: 0.5rem;">${condizionI.desc}</div>
                            </div>
                            <div style="background: #FFFFFF; border: 2px solid #E65100; border-radius: 12px; padding: 1.5rem; text-align: left; box-shadow: 0 4px 15px rgba(0,0,0,0.05); max-width: 320px;">
                                <div style="font-size: 1.2rem; font-weight: 800; color: #111111; margin-bottom: 0.5rem;">🚘 Consigli per la Sicurezza:</div>
                                <div style="font-size: 1.1rem; color: #333333; line-height: 1.4;">
                                    Verifica la pressione delle gomme e l'efficienza delle spazzole tergicristallo con le variazioni termiche!
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

        if (category.is_info_page) {
            html = `
                <div style="display: flex; flex-direction: row; width: 100%; height: 100%; align-items: center; justify-content: space-between; gap: 3rem; padding: 1rem 2rem;">
                    <div style="display: flex; flex-direction: column; gap: 2rem; flex: 1.3;">
                        <div style="background-color: var(--card-bg); border: 2px solid var(--primary-orange); border-radius: 14px; padding: 2.5rem 2rem; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                            <div style="font-size: 1.8rem; color: var(--primary-orange); font-weight: 800; margin-bottom: 1rem; text-transform: uppercase;">Orari di Apertura Officina</div>
                            <div style="font-size: 2.8rem; font-weight: 800; color: var(--text-main); white-space: nowrap;">
                                ${category.orario_mattina} <span style="color: var(--primary-orange); margin: 0 0.5rem;">•</span> ${category.orario_pomeriggio}
                            </div>
                        </div>

                        <div style="background-color: var(--card-bg); border: 2px solid var(--primary-orange); border-radius: 14px; padding: 2.2rem 2rem; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                            <div style="font-size: 1.4rem; color: var(--text-muted); margin-bottom: 0.6rem; text-transform: uppercase; font-weight: 600;">Prenota il tuo appuntamento online su</div>
                            <div style="font-size: 2.6rem; color: var(--primary-orange); font-weight: 800;">${category.sito_web}</div>
                        </div>
                    </div>

                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: var(--card-bg); border: 2px solid var(--primary-orange); border-radius: 14px; padding: 2.5rem 2rem; text-align: center; flex: 0.9; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                        <div style="font-size: 1.4rem; color: var(--text-main); font-weight: 700; margin-bottom: 1.5rem; line-height: 1.4;">
                            📱 Inquadra per prenotare in 30 secondi dal tuo telefono!
                        </div>
                        <div style="background: white; padding: 14px; border-radius: 12px; display: inline-block;">
                            <img src="${category.qr_code_img || 'images/qr-code.png'}" alt="QR Code Sole Pneumatici" style="width: 180px; height: 180px; display: block;" />
                        </div>
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
                            Prezzo: <span style="text-decoration: line-through; color: #888; margin-right: 0.5rem;">${formatPrice(servizio.prezzo)}</span>
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
            html += `<div class="services-list">`;

            activeServices.forEach(servizio => {
                const isPromo = servizio.promozione;
                const cardClass = isPromo ? "service-card promo-active" : "service-card";
                
                let priceDisplay = "";
                if (isPromo && servizio.prezzo_promo) {
                    priceDisplay = `
                        <span class="promo-badge">PROMOZIONE</span>
                        <div>
                            <span class="price-old">${formatPrice(servizio.prezzo)}</span>
                            <span class="price-main" style="color: var(--primary-orange);">${formatPrice(servizio.prezzo_promo)}</span>
                        </div>
                    `;
                } else {
                    priceDisplay = `<span class="price-main">${formatPrice(servizio.prezzo)}</span>`;
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

    function togglePause() {
        isPaused = !isPaused;
        updateIndicatorText();
    }

    function setupPauseControls() {
        document.addEventListener('click', () => {
            togglePause();
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                togglePause();
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

    // =========================================================================
    // ANTI-SCREENSAVER PER LG webOS
    // Video a tutto schermo DIETRO il listino (stesso colore dello sfondo,
    // quindi quasi invisibile). Il TV vede un video grande in riproduzione.
    // =========================================================================
    (function antiScreensaver() {
        const video = document.createElement('video');
        video.src = 'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAABXrbW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAAJxAAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAABvx0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAJxAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAUAAAAC0AAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAACcQAAAAAAABAAAAAAZ0bWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAA8AAACWABVxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAAGH21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAABd9zdGJsAAAAu3N0c2QAAAAAAAAAAQAAAKthdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAUAAtABIAAAASAAAAAAAAAABFUxhdmM2MC4zMS4xMDIgbGlieDI2NAAAAAAAAAAAAAAAGP//AAAAMWF2Y0MBQsAe/+EAGWdCwB7ZAUGfnwEQAAADABAAAAMB4PFi5IABAAVoy4PLIAAAABBwYXNwAAAAAQAAAAEAAAAUYnRydAAAAAAAAAfCAAAHwgAAABhzdHRzAAAAAAAAAAEAAACWAAAEAAAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAmxzdHN6AAAAAAAAAAAAAACWAAADTAAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAAsAAAALAAACaHN0Y28AAAAAAAAAlgAAFjAAABmEAAAZkwAAGaYAABm1AAAZyAAAGdcAABnqAAAZ+QAAGggAABobAAAaKgAAGj0AABpMAAAaXwAAGm4AABp9AAAakAAAGp8AABqyAAAawQAAGtQAABrjAAAa9gAAGwUAABsUAAAbJwAAGzYAABtJAAAbWAAAG2sAABt6AAAbiQAAG5wAABurAAAbvgAAG80AABvgAAAb7wAAG/4AABwRAAAcIAAAHDMAABxCAAAcVQAAHGQAABx3AAAchgAAHJUAAByoAAActwAAHMoAABzZAAAc7AAAHPsAAB0KAAAdHQAAHSwAAB0/AAAdTgAAHWEAAB1wAAAdgwAAHZIAAB2hAAAdtAAAHcMAAB3WAAAd5QAAHfgAAB4HAAAeFgAAHikAAB44AAAeSwAAHloAAB5tAAAefAAAHosAAB6eAAAerQAAHsAAAB7PAAAe4gAAHvEAAB8EAAAfEwAAHyIAAB81AAAfRAAAH1cAAB9mAAAfeQAAH4gAAB+XAAAfqgAAH7kAAB/MAAAf2wAAH+4AAB/9AAAgDAAAIB8AACAuAAAgQQAAIFAAACBjAAAgcgAAIIUAACCUAAAgowAAILYAACDFAAAg2AAAIOcAACD6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AABzAAAAAQAAAAEAAAB0AAAAAgAAAAEAAAB1AAAAAQAAAAEAAAB3AAAAAgAAAAEAAAB4AAAAAQAAAAEAAAB5AAAAAgAAAAEAAAB6AAAAAQAAAAEAAAB7AAAAAgAAAAEAAAB8AAAAAQAAAAEAAAB9AAAAAgAAAAEAAAB+AAAAAQAAAAEAAACAAAAAAgAAAAEAAACBAAAAAQAAAAEAAACCAAAAAgAAAAEAAACDAAAAAQAAAAEAAACEAAAAAgAAAAEAAACFAAAAAQAAAAEAAACHAAAAAgAAAAEAAACIAAAAAQAAAAEAAACJAAAAAgAAAAEAAACKAAAAAQAAAAEAAACLAAAAAgAAAAEAAACMAAAAAQAAAAEAAACOAAAAAgAAAAEAAACPAAAAAQAAAAEAAACQAAAAAgAAAAEAAACRAAAAAQAAAAEAAACSAAAAAgAAAAEAAACTAAAAAQAAAAEAAACUAAAAAgAAAAEAAACVAAAAAQAAAAEAAACXAAAAAgAAAAEAAAN4c3RzegAAAAAAAAAAAAAA2QAAABUAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQA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';
        video.loop = true;
        video.muted = true;
        video.autoplay = true;
        video.playsInline = true;
        video.setAttribute('muted', '');
        video.setAttribute('playsinline', '');
        video.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;' +
            'object-fit:cover;z-index:0;pointer-events:none;background:#0b0b0b;';
        document.body.insertBefore(video, document.body.firstChild);

        // Il listino sta sopra al video
        const container = document.querySelector('.container');
        if (container) { container.style.position = 'relative'; container.style.zIndex = '1'; }

        // Avviso visibile solo se il video NON sta girando
        const avviso = document.createElement('div');
        avviso.textContent = '\u25B6 Premi OK sul telecomando per attivare lo schermo sempre acceso';
        avviso.style.cssText = 'position:fixed;bottom:60px;left:50%;transform:translateX(-50%);' +
            'background:#FFA500;color:#000;font-weight:800;font-size:1.4rem;padding:0.8rem 1.6rem;' +
            'border-radius:10px;z-index:999999;display:none;white-space:nowrap;';
        document.body.appendChild(avviso);

        function avvia() {
            const p = video.play();
            if (p && p.catch) p.catch(err => console.log('Autoplay bloccato:', err));
        }
        function aggiornaAvviso() {
            avviso.style.display = (video.paused || video.ended) ? 'block' : 'none';
        }
        video.addEventListener('playing', aggiornaAvviso);
        video.addEventListener('pause', aggiornaAvviso);
        video.addEventListener('error', () => {
            avviso.textContent = '\u26A0 Video non supportato dal TV';
            avviso.style.display = 'block';
        });

        // Se il video è fermo, il primo tasto/clic lo avvia SENZA mettere in pausa il listino
        function gestisciTasto(e) {
            if (video.paused || video.ended) {
                e.stopImmediatePropagation();
                e.preventDefault();
                avvia();
            }
        }
        document.addEventListener('keydown', gestisciTasto, true);
        document.addEventListener('click', gestisciTasto, true);

        avvia();
        setTimeout(aggiornaAvviso, 2000);
        setInterval(() => { if (video.paused || video.ended) avvia(); aggiornaAvviso(); }, 5000);

        // Ricarica la pagina ogni notte alle 3:00
        setInterval(() => {
            const d = new Date();
            if (d.getHours() === 3 && d.getMinutes() === 0) location.reload();
        }, 60000);
    })();
});
