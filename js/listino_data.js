const LISTINO_DATA = {
  "azienda": {
    "nome": "SOLE PNEUMATICI",
    "slogan": "Abbiamo a cuore la tua sicurezza",
    "luogo": "Mappano (TO)",
    "intervallo_rotazione_sec": 10 // Tempo di fallback se non specificato
  },
  "categorie": [
    {
      "id": "montaggio",
      "titolo": "Montaggio & Equilibratura Pneumatici",
      "durata_sec": 14,
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
      "id": "assetto_tpms",
      "titolo": "Assetto Ruote 3D, TPMS & Riparazioni",
      "durata_sec": 12,
      "attivo": true,
      "servizi": [
        {
          "nome": "Controllo & Regolazione Convergenza 3D",
          "descrizione": "Allineamento computerizzato ad alta accuratezza Hunter Hawkeye",
          "prezzo": "DA_CONFIGURARE",
          "unita": "ad auto",
          "promozione": false,
          "prezzo_promo": "",
          "scadenza_promo": "",
          "attivo": true
        },
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
      "id": "deposito_stagionale",
      "titolo": "Cambio Stagionale & Custodia Pneumatici",
      "durata_sec": 10,
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
      "id": "freni_diagnosi",
      "titolo": "Impianto Frenante & Diagnosi Elettronica",
      "durata_sec": 10,
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
      "id": "officina_mobile",
      "titolo": "Officina Mobile & Servizi A Domicilio",
      "durata_sec": 8,
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
      "id": "orari_prenotazione",
      "titolo": "Orari di Apertura & Prenotazioni Online",
      "durata_sec": 5,
      "is_info_page": true,
      "attivo": true,
      "orario_mattina": "08:30 - 12:15",
      "orario_pomeriggio": "14:30 - 18:15",
      "sito_web": "solepneumatici.it"
    }
  ]
};