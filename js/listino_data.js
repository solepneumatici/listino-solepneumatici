const LISTINO_DATA = {
  "azienda": {
    "nome": "Sole Pneumatici",
    "slogan": "Abbiamo a cuore la tua sicurezza",
    "luogo": "Mappano (TO)",
    "lat": 45.1481,
    "lon": 7.7051,
    "frase_piede": "Qualità, Trasparenza e Tecnologia Automotive",
    "intervallo_rotazione_sec": 4
  },
  "intro": {
    "attiva": true,
    "firma_crview": true,
    "firma_slide": true,
    "logo": "images/logo-intro.png"
  },
  "categorie": [
    {
      "ordine": 1,
      "id": "montaggio",
      "titolo": "MONTAGGIO &amp; EQUILIBRATURA PNEUMATICI",
      "durata_sec": 6,
      "attivo": true,
      "periodi": [
        {
          "dal": "16/05",
          "al": "14/10"
        },
        {
          "dal": "01/12",
          "al": "31/03"
        }
      ],
      "servizi": [
        {
          "nome": "Auto con cerchi 13\" - 17\"",
          "descrizione": "Montaggio, equilibratura e valvola nuova (no TPMS) inclusi.",
          "prezzo": "da 50,00€",
          "unita": "per 4 gomme",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Auto con cerchi 18\" - 19\"",
          "descrizione": "Montaggio, equilibratura e valvola nuova (no TPMS) inclusi.",
          "prezzo": "da 60,00€",
          "unita": "per 4 gomme",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Auto con cerchi 20\" e oltre",
          "descrizione": "Montaggio, equilibratura e valvola nuova (no TPMS) inclusi.",
          "prezzo": "da 70,00€",
          "unita": "per 4 gomme",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Furgoni",
          "descrizione": "Montaggio, equilibratura e valvola nuova (no TPMS) inclusi.",
          "prezzo": "da 60,00€",
          "unita": "per 4 gomme",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        }
      ]
    },
    {
      "ordine": 2,
      "id": "equilibratura_inversione",
      "titolo": "EQUILIBRATURA &amp; INVERSIONE RUOTE",
      "durata_sec": 5,
      "attivo": true,
      "servizi": [
        {
          "nome": "Equilibratura Ruote",
          "descrizione": "Equilibratura della ruota, contrappesi inclusi.",
          "prezzo": "da 10,00€",
          "unita": "a ruota (40€ per 4)",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Inversione Ruote (Anteriori e Posteriori)",
          "descrizione": "Scambio delle ruote tra asse anteriore e posteriore per un'usura uniforme.",
          "prezzo": "da 30,00€",
          "unita": "per 4 ruote",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        }
      ]
    },
    {
      "ordine": 3,
      "id": "riparazione_pneumatici",
      "titolo": "RIPARAZIONE FORATURE • SOLO SUL BATTISTRADA",
      "durata_sec": 6,
      "attivo": true,
      "servizi": [
        {
          "nome": "Riparazione Foratura Auto",
          "descrizione": "Smontaggio, vulcanizzazione interna, controllo finale e pressione.",
          "prezzo": "da 30,00€",
          "unita": "ad intervento",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Riparazione Foratura SUV / 4x4",
          "descrizione": "Smontaggio, vulcanizzazione interna, controllo finale e pressione.",
          "prezzo": "da 35,00€",
          "unita": "ad intervento",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Riparazione Foratura Furgoni",
          "descrizione": "Smontaggio, vulcanizzazione interna, controllo finale e pressione.",
          "prezzo": "da 40,00€",
          "unita": "ad intervento",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Riparazione Rapida",
          "descrizione": "Con stringa, senza smontaggio. Solo se possibile in sicurezza.",
          "prezzo": "da 20,00€",
          "unita": "ad intervento",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        }
      ]
    },
    {
      "ordine": 4,
      "id": "promo_speciale_assetto_3d",
      "titolo": "SERVIZI SPECIALIZZATI DI ASSETTO E CONVERGENZA",
      "durata_sec": 4,
      "attivo": true,
      "is_promo_spot": true,
      "servizi": [
        {
          "nome": "Assetto Completo 3D Hunter",
          "descrizione": "Allunga la vita dei tuoi pneumatici \u003cspan class=\"highlight-text\">fino al 20-30%\u003c/span> e \u003cspan class=\"highlight-text\">riduci i consumi\u003c/span> di carburante. Misurazione elettronica ad alta precisione.",
          "prezzo": "70,00€",
          "unita": "a veicolo",
          "prezzo_promo": "60,00€",
          "promozione": true,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false,
          "scadenza_promo_data": "2026-10-23",
          "testo_badge": "PROMO -10€",
          "scadenza_promo": "Valido fino al 23/10/2026"
        }
      ]
    },
    {
      "ordine": 5,
      "id": "assetto_convergenza",
      "titolo": "ASSETTO &amp; CONVERGENZA 3D HUNTER",
      "durata_sec": 4,
      "attivo": true,
      "dopo_scadenza_di": "promo_speciale_assetto_3d",
      "servizi": [
        {
          "nome": "Assetto Anteriore",
          "descrizione": "Per vetture con regolazione solo sull'asse anteriore.",
          "prezzo": "da 50,00€",
          "unita": "a veicolo",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Assetto Completo (Anteriore + Posteriore)",
          "descrizione": "Consigliato per la stabilità su entrambi gli assi.",
          "prezzo": "da 70,00€",
          "unita": "a veicolo",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Ripristino Punto Zero Volante",
          "descrizione": "Calibrazione elettronica sensore di sterzo (servosterzo elettrico e ADAS).",
          "prezzo": "+ 25,00€",
          "unita": "supplemento",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Sblocco Componenti Ossidati",
          "descrizione": "Solo se i dadi di regolazione sono bloccati e vanno riscaldati.",
          "prezzo": "+ 30,00€",
          "unita": "se necessario",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        }
      ]
    },
    {
      "ordine": 6,
      "id": "montaggio_gomme_cliente",
      "titolo": "PNEUMATICI NUOVI PROCURATI DAL CLIENTE",
      "durata_sec": 4,
      "attivo": true,
      "servizi": [
        {
          "nome": "Montaggio 4 gomme fino a raggio 15",
          "descrizione": "",
          "prezzo": "70,00€",
          "unita": "",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Montaggio 4 gomme raggio 16",
          "descrizione": "",
          "prezzo": "80,00€",
          "unita": "",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Montaggio 4 gomme raggio 17 - 18",
          "descrizione": "",
          "prezzo": "90,00€",
          "unita": "",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Montaggio 4 gomme raggio 19",
          "descrizione": "",
          "prezzo": "100,00€",
          "unita": "",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Montaggio 4 gomme oltre raggio 19",
          "descrizione": "\u003cspan class=\"highlight-text\">Run Flat:\u003c/span> supplemento di 5€ a pneumatico (su tutte le misure)",
          "prezzo": "140,00€",
          "unita": "",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        }
      ]
    },
    {
      "ordine": 7,
      "id": "trasparenza_servizio",
      "titolo": "ACQUISTA DA NOI: MONTAGGIO E GARANZIA INCLUSI",
      "durata_sec": 4,
      "attivo": true,
      "servizi": [
        {
          "nome": "Montaggio ed equilibratura inclusi",
          "descrizione": "Il prezzo comprende \u003cspan class=\"highlight-text\">Montaggio, Equilibratura e Valvola Nuova\u003c/span> (no TPMS).",
          "prezzo": "TUTTO",
          "unita": "incluso",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Professionalità e garanzia in sede",
          "descrizione": "\u003cspan class=\"highlight-text\">Serraggio con chiave dinamometrica\u003c/span>, controllo visivo di sicurezza dell'impianto frenante e \u003cspan class=\"highlight-text\">garanzia diretta in sede\u003c/span> su ogni intervento.",
          "prezzo": "GARANZIA",
          "unita": "diretta",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Scegli anche sul nostro store gommepro.it",
          "descrizione": "Acquista sul nostro store e montali da noi, con la stessa garanzia.",
          "prezzo": "ONLINE",
          "unita": "gommepro.it",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": true,
          "whatsapp": false
        }
      ]
    },
    {
      "ordine": 8,
      "id": "cambio_stagionale",
      "titolo": "CAMBIO STAGIONALE PNEUMATICI",
      "durata_sec": 6,
      "attivo": true,
      "periodi": [
        {
          "dal": "01/04",
          "al": "15/05"
        },
        {
          "dal": "15/10",
          "al": "30/11"
        }
      ],
      "servizi": [
        {
          "nome": "Cambio Stagionale Auto 13\" - 17\"",
          "descrizione": "Smontaggio, montaggio ed equilibratura inclusi.",
          "prezzo": "da 50,00€",
          "unita": "per 4 gomme",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Cambio Stagionale Auto 18\" - 19\"",
          "descrizione": "Smontaggio, montaggio ed equilibratura inclusi.",
          "prezzo": "da 60,00€",
          "unita": "per 4 gomme",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Cambio Stagionale Auto 20\" e oltre",
          "descrizione": "Smontaggio, montaggio ed equilibratura inclusi.",
          "prezzo": "da 70,00€",
          "unita": "per 4 gomme",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Cambio Stagionale Furgoni",
          "descrizione": "Smontaggio, montaggio ed equilibratura inclusi.",
          "prezzo": "da 60,00€",
          "unita": "per 4 gomme",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        }
      ]
    },
    {
      "ordine": 9,
      "id": "cambio_ruote_complete",
      "titolo": "CAMBIO STAGIONALE RUOTE COMPLETE",
      "durata_sec": 6,
      "attivo": true,
      "periodi": [
        {
          "dal": "01/04",
          "al": "15/05"
        },
        {
          "dal": "15/10",
          "al": "30/11"
        }
      ],
      "servizi": [
        {
          "nome": "Cambio Ruote Complete 13\" - 17\"",
          "descrizione": "Smontaggio e montaggio ruote, serraggio dinamometrico e controllo pressione.",
          "prezzo": "da 30,00€",
          "unita": "per 4 ruote",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Cambio Ruote Complete 18\" - 19\"",
          "descrizione": "Smontaggio e montaggio ruote, serraggio dinamometrico e controllo pressione.",
          "prezzo": "da 35,00€",
          "unita": "per 4 ruote",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Cambio Ruote Complete 20\" e oltre",
          "descrizione": "Smontaggio e montaggio ruote, serraggio dinamometrico e controllo pressione.",
          "prezzo": "da 40,00€",
          "unita": "per 4 ruote",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        }
      ]
    },
    {
      "ordine": 10,
      "id": "custodia_pneumatici",
      "titolo": "CUSTODIA PNEUMATICI",
      "durata_sec": 5,
      "attivo": true,
      "periodi": [
        {
          "dal": "01/04",
          "al": "15/05"
        },
        {
          "dal": "15/10",
          "al": "30/11"
        }
      ],
      "servizi": [
        {
          "nome": "Custodia Pneumatici (4 gomme)",
          "descrizione": "Stoccaggio al coperto, protetto e assicurato in ambiente controllato.",
          "prezzo": "da 40,00€",
          "unita": "a stagione",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Custodia Ruote Complete di cerchio (4 ruote)",
          "descrizione": "Stoccaggio al coperto, protetto e assicurato in ambiente controllato.",
          "prezzo": "da 50,00€",
          "unita": "a stagione",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        }
      ]
    },
    {
      "ordine": 11,
      "id": "servizi_stagionali_inverno",
      "titolo": "INVERNO: CAMBIO GOMME &amp; CHECK",
      "durata_sec": 6,
      "attivo": true,
      "periodi": [
        {
          "dal": "15/10",
          "al": "30/11"
        }
      ],
      "servizi": [
        {
          "nome": "Cambio Gomme Invernali",
          "descrizione": "Dal 15 novembre al 15 aprile servono pneumatici invernali oppure le catene a bordo. Prenota ora il cambio.",
          "prezzo": "da 50,00€",
          "unita": "per 4 gomme, in base alla misura",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Controllo Livello Olio &amp; Liquidi",
          "descrizione": "Controllo livello olio motore e liquidi generali, senza impegno.",
          "prezzo": "GRATIS",
          "unita": "mentre aspetti",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Sostituzione Spazzole Tergicristallo",
          "descrizione": "Già che sei qui, chiedi le spazzole nuove!",
          "prezzo": "da 30,00€",
          "unita": "in base all'auto",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        }
      ]
    },
    {
      "ordine": 12,
      "id": "servizi_stagionali_estate",
      "titolo": "ESTATE: CAMBIO GOMME &amp; CHECK",
      "durata_sec": 6,
      "attivo": true,
      "periodi": [
        {
          "dal": "01/04",
          "al": "15/05"
        }
      ],
      "servizi": [
        {
          "nome": "Cambio Gomme Estive",
          "descrizione": "Dal 16 aprile le gomme invernali con velocità inferiore al libretto non sono ammesse (tolleranza fino al 15 maggio).",
          "prezzo": "da 50,00€",
          "unita": "per 4 gomme, in base alla misura",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Controllo Livello Olio &amp; Liquidi",
          "descrizione": "Controllo livello olio motore e liquidi generali, senza impegno.",
          "prezzo": "GRATIS",
          "unita": "mentre aspetti",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Sostituzione Spazzole Tergicristallo",
          "descrizione": "Già che sei qui, chiedi le spazzole nuove!",
          "prezzo": "da 30,00€",
          "unita": "in base all'auto",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        }
      ]
    },
    {
      "ordine": 13,
      "id": "freni_diagnosi",
      "titolo": "Freni, Diagnosi &amp; Valvole TPMS",
      "durata_sec": 4,
      "attivo": true,
      "servizi": [
        {
          "nome": "Sostituzione Pastiglie e Dischi Freno",
          "descrizione": "Controllo usura incluso. Il prezzo dipende dall'auto e dai ricambi.",
          "prezzo": "PREVENTIVO",
          "unita": "in base all'auto",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Valvole TPMS: Programmazione e Clonazione Sensori",
          "descrizione": "Sensore pressione nuovo, programmazione e clonazione per la centralina.",
          "prezzo": "da 40,00€",
          "unita": "a ruota, in base all'auto",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        },
        {
          "nome": "Diagnosi Computerizzata Multi-marca",
          "descrizione": "Lettura memoria errori centraline, parametri motore e cancellazione DTC. Se poi lavori da noi, ti scaliamo la diagnosi.",
          "prezzo": "da 40,00€",
          "unita": "a test",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": false,
          "whatsapp": false
        }
      ]
    },
    {
      "ordine": 14,
      "id": "officina_mobile",
      "titolo": "OFFICINA MOBILE • SERVIZIO A DOMICILIO",
      "durata_sec": 4,
      "attivo": true,
      "servizi": [
        {
          "nome": "Memorizza il numero: chiamaci!",
          "descrizione": "\u003cspan class=\"highlight-text\">Forature\u003c/span> o \u003cspan class=\"highlight-text\">emergenze\u003c/span> sul posto, dove ti trovi.",
          "prezzo": "388 0931188",
          "unita": "chiama o scrivi",
          "prezzo_promo": "",
          "promozione": false,
          "attivo": true,
          "evidenzia": true,
          "whatsapp": true
        }
      ]
    },
    {
      "ordine": 15,
      "id": "meteo_mappano",
      "titolo": "Meteo Locale • Mappano (TO)",
      "durata_sec": 6,
      "attivo": true,
      "is_meteo_page": true
    },
    {
      "ordine": 16,
      "id": "orari_prenotazione",
      "titolo": "Orari di Apertura &amp; Prenotazioni Online",
      "durata_sec": 4,
      "attivo": true,
      "is_info_page": true,
      "orario_mattina": "08:30 - 12:15",
      "orario_pomeriggio": "14:30 - 18:15",
      "etichetta_orario_base": "Lunedì – Venerdì",
      "giorni_aperti": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "orari_speciali": {
        "6": {
          "etichetta": "Sabato",
          "orari": [
            "08:30 - 12:15"
          ],
          "mesi": [
            4,
            5,
            6,
            10,
            11,
            12
          ]
        }
      },
      "avviso_chiusura_minuti": 10,
      "avviso_festivita_giorni_prima": 14,
      "slide_festivita_giorni_prima": 3,
      "avviso_chiusura_su_tutte_le_schede": true,
      "chiusure_straordinarie": [],
      "chiusure_annuali": [
        {
          "giorno": 31,
          "mese": 12,
          "motivo": "Chiusura di fine anno",
          "fino_giorno": 6,
          "fino_mese": 1,
          "breve": "Fine anno",
          "augurio": "Buone feste e buon anno!"
        },
        {
          "giorno": 24,
          "mese": 11,
          "motivo": "Giorno di chiusura",
          "breve": "",
          "augurio": ""
        }
      ],
      "sito_web": "solepneumatici.it",
      "qr_code_img": "images/qr-code.png"
    }
  ]
};
