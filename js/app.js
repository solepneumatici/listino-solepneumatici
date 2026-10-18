document.addEventListener('DOMContentLoaded', () => {
    let listinoData = null;
    let currentCategoryIndex = 0;
    let secondsElapsed = 0;
    let carouselInterval = null;
    let isPaused = false;

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

        listinoData.categorie = listinoData.categorie.filter(cat => 
            cat.attivo && (cat.is_info_page || (cat.servizi && cat.servizi.some(s => s.attivo)))
        );

        if (listinoData.azienda && listinoData.azienda.slogan) {
            brandSlogan.textContent = listinoData.azienda.slogan;
        }

        renderCurrentCategory();
        startCarousel();
        setupPauseControls();
    }

    function renderCurrentCategory() {
        if (!listinoData || !listinoData.categorie || listinoData.categorie.length === 0) return;

        const category = listinoData.categorie[currentCategoryIndex];
        let html = "";

        if (category.is_info_page) {
            html = `
                <div class="info-page-container">
                    <div class="info-box-card">
                        <div class="info-box-title">Orari di Apertura Officina</div>
                        <div class="hours-display">
                            ${category.orario_mattina} <span class="hours-separator">•</span> ${category.orario_pomeriggio}
                        </div>
                    </div>

                    <div class="booking-card">
                        <div class="booking-title">Prenota il tuo appuntamento online su</div>
                        <div class="booking-url">${category.sito_web}</div>
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
        const currentDuration = category.durata_sec || (listinoData.azienda && listinoData.azienda.intervallo_rotazione_sec) || 10;
        
        // Calcola i secondi rimanenti
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
            const currentDuration = category.durata_sec || (listinoData.azienda && listinoData.azienda.intervallo_rotazione_sec) || 10;

            secondsElapsed += 0.1;
            const percentage = (secondsElapsed / currentDuration) * 100;
            if (progressBar) progressBar.style.width = `${Math.min(percentage, 100)}%`;

            // Aggiorna il testo dell'indicatore per mostrare il countdown
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
});