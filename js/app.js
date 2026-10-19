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
                const mesi =
