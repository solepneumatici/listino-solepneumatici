const LISTINO_DATA = {
  "azienda": {
    "nome": "SOLE PNEUMATICI",
    "slogan": "Abbiamo a cuore la tua sicurezza",
    "luogo": "Mappano (TO)",
    "intervallo_rotazione_sec": 4
  },
  "categorie": [
    {
      "ordine": 1,
      "id": "montaggio",
      "titolo": "Montaggio & Equilibratura Pneumatici",
      "durata_sec": 4,
      "attivo": true,
      "servizi": [
        {
          "nome": "Montaggio & Equilibratura Cerchi in Acciaio",
          "descrizione": "Inclusa sostituzione valvola standard e serraggio dinamometrico",
          "prezzo": "50,00€",
          "unita": "a gomma",
          "promozione": true,
          "prezzo_promo": "40,00€",
          "scadenza_promo": "31/10/2026",
          "attivo": true
        },
        {
          "nome": "Montaggio & Equilibratura Cerchi in Lega (fino a 18\")",
          "descrizione": "Inclusi contrappesi adesivi e controllo planarità cerchio",
          "prezzo": "60,00€",
          "unita": "a gomma",
          "promozione": false,
          "prezzo_promo": "",
          "scadenza_promo": "",
          "attivo": true
        },
        {
          "nome": "Montaggio & Equilibratura Cerchi in Lega (19\" - 22\" / Runflat)",
          "descrizione": "Lavorazione ad alta precisione per profili ribasati e Runflat",
          "prezzo": "90,00€",
          "unita": "a gomma",
          "promozione": false,
          "prezzo_promo": "",
          "scadenza_promo": "",
          "attivo": true
        }
      ]
    },
    {
      "ordine": 2,
      "id": "promo_speciale_assetto_3d",
      "note_gestione": "SLIDE PROMOZIONALE: Legata alla data di scadenza. Se la data supera 'scadenza_promo_data', questa slide viene nascosta automaticamente.",
      "titolo": "SERVIZI SPECIALIZZATI DI ASSETTO E CONVERGENZA",
      "durata_sec": 4,
      "attivo": true,
      "is_promo_spot": true,
      "servizi": [
        {
          "nome": "Assetto Ruote 3D High-Tech",
          "descrizione": "Allunga la vita dei tuoi pneumatici <span class=\"highlight-text\">fino al 30%</span> e <span class=\"highlight-text\">riduci i consumi</span> di carburante. Misurazione elettronica ad alta precisione.",
          "prezzo": "70,00€",
          "unita": "a veicolo",
          "promozione": true,
          "testo_badge": "PROMO -10€",
          "prezzo_promo": "60,00€",
          "scadenza_promo": "Valido fino al 31/10/2026",
          "scadenza_promo_data": "2026-10-31",
          "attivo": true
        }
      ]
    },
    {
      "ordine": 3,
      "id": "assetto_standard",
      "titolo": "Assetto & Convergenza Computerizzata 3D",
      "durata_sec": 4,
      "attivo": true,
      "servizi": [
        {
          "nome": "Programmazione & Diagnosi Valvole TPMS",
          "descrizione": "Scansione sensori pressione, clonazione e riprogrammazione centralina",
          "prezzo": "DA_CONFIGURARE",
          "unita": "a sensore",
          "promozione": false,
          "prezzo_promo": "",
          "scadenza_promo": "",
          "attivo": true
        },
        {
          "nome": "Riparazione Foratura Tubeless",
          "descrizione": "Vulcanizzazione professionale interna e bilanciamento ruota",
          "prezzo": "DA_CONFIGURARE",
          "unita": "ad intervento",
          "promozione": false,
          "prezzo_promo": "",
          "scadenza_promo": "",
          "attivo": true
        }
      ]
    },
    {
      "ordine": 4,
      "id": "trasparenza_servizio",
      "titolo": "Trasparenza & Servizio Tutto Incluso",
      "durata_sec": 4,
      "attivo": true,
      "servizi": [
        {
          "nome": "Trasparenza Prezzi Web vs Officina",
          "descrizione": "Nessuna sorpresa: le nostre tariffe includono sempre <span class=\"highlight-text\">Montaggio, Equilibratura, Valvola Nuova e Smaltimento PFU</span>.",
          "prezzo": "TUTTO",
          "unita": "incluso",
          "promozione": false,
          "prezzo_promo": "",
          "scadenza_promo": "",
          "attivo": true
        },
        {
          "nome": "I Vantaggi del Servizio in Sede",
          "descrizione": "<span class=\"highlight-text\">Serraggio con chiave dinamometrica</span>, controllo visivo di sicurezza dell'impianto frenante e <span class=\"highlight-text\">garanzia diretta in sede</span> su ogni intervento.",
          "prezzo": "GARANZIA",
          "unita": "diretta",
          "promozione": false,
          "prezzo_promo": "",
          "scadenza_promo": "",
          "attivo": true
        }
      ]
    },
    {
      "ordine": 5,
      "id": "servizi_stagionali_inverno",
      "titolo": "UPWELLING STAGIONALE • NORMATIVA INVERNALE",
      "durata_sec": 6,
      "attivo": true,
      "is_stagionale": true,
      "MeseInizio": 10, // Ottobre
      "MeseFine": 3,    // Marzo
      "servizi": [
        {
          "nome": "Cambio Gomme Invernali: 15 Ott - 15 Nov",
          "descrizione": "Periodo utile per il montaggio. <span class=\"highlight-text\">Obbligo di legge attivo fino al 14 Aprile</span>. Prenota ora per viaggiare in sicurezza.",
          "prezzo": "DA_CONFIGURARE",
          "unita": "scadenza",
          "promozione": true,
          "prezzo_promo": "PRENOTA",
          "scadenza_promo": "⚠️ Scadenza transizione invernale",
          "attivo": true
        },
        {
          "nome": "Check Invernale & Igienizzazione",
          "descrizione": "Controllo spazzole, batteria, liquidi e trattamento antibatterico dell'abitacolo.",
          "prezzo": "DA_CONFIGURARE",
          "unita": "pacchetto",
          "promozione": false,
          "prezzo_promo": "",
          "scadenza_promo": "",
          "attivo": true
        }
      ]
    },
    {
      "ordine": 5,
      "id": "servizi_stagionali_estate",
      "titolo": "UPWELLING STAGIONALE • NORMATIVA ESTIVA",
      "durata_sec": 6,
      "attivo": true,
      "is_stagionale": true,
      "MeseInizio": 4,  // Aprile
      "MeseFine": 9,    // Settembre
      "servizi": [
        {
          "nome": "Cambio Gomme Estive: 15 Apr - 15 Mag",
          "descrizione": "Periodo utile per il montaggio. <span class=\"highlight-text\">Obbligo di legge attivo fino al 14 Ottobre</span>. Verifica il codice di velocità.",
          "prezzo": "DA_CONFIGURARE",
          "unita": "scadenza",
          "promozione": true,
          "prezzo_promo": "PRENOTA",
          "scadenza_promo": "⚠️ Scadenza transizione estiva",
          "attivo": true
        },
        {
          "nome": "Check Estivo, Clima & Igienizzazione",
          "descrizione": "Verifica impianto A/C, sanificazione abitacolo e controllo sicurezza.",
          "prezzo": "DA_CONFIGURARE",
          "unita": "pacchetto",
          "promozione": false,
          "prezzo_promo": "",
          "scadenza_promo": "",
          "attivo": true
        }
      ]
    },
    {
      "ordine": 6,
      "id": "deposito_stagionale",
      "titolo": "Cambio Stagionale & Custodia Pneumatici",
      "durata_sec": 4,
      "attivo": true,
      "servizi": [
        {
          "nome": "Cambio Ruote Complete (Estate / Inverno)",
          "descrizione": "Smontaggio, rimontaggio e verifica pressione di gonfiaggio",
          "prezzo": "DA_CONFIGURARE",
          "unita": "a kit (4 ruote)",
          "promozione": false,
          "prezzo_promo": "",
          "scadenza_promo": "",
          "attivo": true
        },
        {
          "nome": "Custodia Stagionale Pneumatici / Ruote",
          "descrizione": "Stoccaggio al coperto, protetto e assicurato in ambiente controllato",
          "prezzo": "DA_CONFIGURARE",
          "unita": "a stagione",
          "promozione": false,
          "prezzo_promo": "",
          "scadenza_promo": "",
          "attivo": true
        }
      ]
    },
    {
      "ordine": 7,
      "id": "freni_diagnosi",
      "titolo": "Impianto Frenante & Diagnosi Elettronica",
      "durata_sec": 4,
      "attivo": true,
      "servizi": [
        {
          "nome": "Sostituzione Pastiglie Freno Anteriori / Posteriori",
          "descrizione": "Incluso controllo usura dischi e azzeramento spia service",
          "prezzo": "DA_CONFIGURARE",
          "unita": "per asse",
          "promozione": false,
          "prezzo_promo": "",
          "scadenza_promo": "",
          "attivo": true
        },
        {
          "nome": "Diagnosi Computerizzata Multi-marca",
          "descrizione": "Lettura memoria errori centraline, parametri motore e cancellazione DTC",
          "prezzo": "DA_CONFIGURARE",
          "unita": "a test",
          "promozione": false,
          "prezzo_promo": "",
          "scadenza_promo": "",
          "attivo": true
        }
      ]
    },
    {
      "ordine": 8,
      "id": "officina_mobile",
      "titolo": "Officina Mobile & Servizi A Domicilio",
      "durata_sec": 4,
      "attivo": true,
      "servizi": [
        {
          "nome": "Intervento Fuori Sede / Assistenza A Domicilio",
          "descrizione": "Assistenza sul posto per cambio pneumatici o emergenze foratura",
          "prezzo": "DA_CONFIGURARE",
          "unita": "a chiamata",
          "promozione": false,
          "prezzo_promo": "",
          "scadenza_promo": "",
          "attivo": true
        }
      ]
    },
    {
      "ordine": 9,
      "id": "meteo_mappano",
      "titolo": "Meteo Locale • Mappano (TO)",
      "durata_sec": 6,
      "is_meteo_page": true,
      "attivo": true
    },
    {
      "ordine": 10,
      "id": "orari_prenotazione",
      "titolo": "Orari di Apertura & Prenotazioni Online",
      "durata_sec": 4,
      "is_info_page": true,
      "attivo": true,
      "orario_mattina": "08:30 - 12:15",
      "orario_pomeriggio": "14:30 - 18:15",
      "sito_web": "solepneumatici.it",
      "qr_code_img": "images/qr-code.png"
    }
  ]
};
