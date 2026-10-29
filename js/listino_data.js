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
      "id": "riparazione_pneumatici",
      "titolo": "RIPARAZIONE FORATURE • SOLO SUL BATTISTRADA",
      "durata_sec": 15,
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
          "evidenzia": true,
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
      "ordine": 2,
      "id": "cambio_stagionale",
      "titolo": "CAMBIO STAGIONALE PNEUMATICI",
      "durata_sec": 12,
      "attivo": true,
      "periodi": [
        {
          "dal": "10/04",
          "al": "15/06"
        },
        {
          "dal": "10/10",
          "al": "15/12"
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
      "ordine": 3,
      "id": "cambio_ruote_complete",
      "titolo": "CAMBIO STAGIONALE RUOTE COMPLETE",
      "durata_sec": 8,
      "attivo": true,
      "periodi": [
        {
          "dal": "10/04",
          "al": "15/06"
        },
        {
          "dal": "10/10",
          "al": "15/01"
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
      "ordine": 4,
      "id": "custodia_pneumatici",
      "titolo": "CUSTODIA PNEUMATICI",
      "durata_sec": 8,
      "attivo": true,
      "periodi": [
        {
          "dal": "10/04",
          "al": "15/06"
        },
        {
          "dal": "10/10",
          "al": "15/01"
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
      "ordine": 5,
      "id": "servizi_stagionali_inverno",
      "titolo": "INVERNO: CAMBIO GOMME &amp; CHECK",
      "durata_sec": 8,
      "attivo": true,
      "periodi": [
        {
          "dal": "01/10",
          "al": "28/02"
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
          "evidenzia": true,
          "whatsapp": false
        }
      ]
    },
    {
      "ordine": 6,
      "id": "servizi_stagionali_estate",
      "titolo": "ESTATE: CAMBIO GOMME &amp; CHECK",
      "durata_sec": 8,
      "attivo": true,
      "periodi": [
        {
          "dal": "01/03",
          "al": "30/09"
        }
      ],
      "servizi": [
        {
          "nome": "Cambio Gomme Estive",
          "descrizione": "Dal 15 aprile le gomme invernali con velocità inferiore al libretto non sono ammesse (tolleranza fino al 15 maggio).",
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
          "evidenzia": true,
          "whatsapp": false
        }
      ]
    },
    {
      "ordine": 7,
      "id": "promo_speciale_assetto_3d",
      "titolo": "SERVIZI SPECIALIZZATI DI ASSETTO E CONVERGENZA",
      "durata_sec": 7,
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
          "evidenzia": true,
          "whatsapp": false,
          "scadenza_promo_data": "2026-10-28",
          "testo_badge": "PROMO -10€",
          "scadenza_promo": "Valido fino al 28/10/2026"
        }
      ]
    },
    {
      "ordine": 8,
      "id": "assetto_convergenza",
      "titolo": "ASSETTO &amp; CONVERGENZA 3D HUNTER",
      "durata_sec": 15,
      "attivo": true,
      "dopo_scadenza_di": "promo_speciale_assetto_3d",
      "servizi": [
        {
          "nome": "Assetto Anteriore",
          "descrizione": "Per vetture con regolazione solo sull'asse anteriore.",
          "prezzo": "da 60,00€",
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
          "prezzo": "da 80,00€",
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
          "prezzo": "+ 30,00€",
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
          "evidenzia": true,
          "whatsapp": false
        }
      ]
    },
    {
      "ordine": 9,
      "id": "montaggio_gomme_cliente",
      "titolo": "PNEUMATICI NUOVI PROCURATI DAL CLIENTE",
      "durata_sec": 10,
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
      "ordine": 10,
      "id": "trasparenza_servizio",
      "titolo": "ACQUISTA DA NOI: MONTAGGIO E GARANZIA INCLUSI",
      "durata_sec": 8,
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
      "ordine": 11,
      "id": "montaggio",
      "titolo": "MONTAGGIO &amp; EQUILIBRATURA PNEUMATICI",
      "durata_sec": 15,
      "attivo": true,
      "periodi": [
        {
          "dal": "16/12",
          "al": "09/04"
        },
        {
          "dal": "16/12",
          "al": "09/10"
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
      "ordine": 12,
      "id": "equilibratura_inversione",
      "titolo": "EQUILIBRATURA &amp; INVERSIONE RUOTE",
      "durata_sec": 8,
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
          "evidenzia": true,
          "whatsapp": false
        }
      ]
    },
    {
      "ordine": 13,
      "id": "freni_diagnosi",
      "titolo": "Freni, Diagnosi &amp; Valvole TPMS",
      "durata_sec": 6,
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
      "durata_sec": 6,
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
      "id": "vetrina_w7y2nu",
      "titolo": "Dal nostro negozio online",
      "durata_sec": 12,
      "attivo": true,
      "is_vetrina_gommepro": true,
      "box": 4,
      "ogni_ore": 1,
      "sito": "https://gommepro.it",
      "testo_evidenza": "MIGLIOR PREZZO",
      "colori": {
        "invernali": "#1e6fd9",
        "estive": "#e08a00",
        "4stagioni": "#2e9e4f"
      },
      "marche_fisse": [
        "Hankook",
        "Continental",
        "Pirelli"
      ],
      "regole": [
        {
          "stagione": "estive",
          "misure": [
            "205/55 R16"
          ],
          "periodi": [
            {
              "dal": "16/04",
              "al": "14/10"
            }
          ]
        },
        {
          "stagione": "invernali",
          "misure": [
            "205/55 R16"
          ],
          "periodi": [
            {
              "dal": "15/10",
              "al": "15/04"
            }
          ]
        },
        {
          "stagione": "4stagioni",
          "misure": [
            "195/55 R16"
          ]
        }
      ],
      "prodotti": [
        {
          "id": 4695586,
          "ean": "3528706227325",
          "marca": "MICHELIN",
          "modello": "PRIMACY 3",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "133,25 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/michelin_primacy_3-933a4b5296eabd7a4b4d9f65a872e534.jpg",
          "url": "https://gommepro.it/prodotto/michelin-primacy_3-205-55-16-estive-run_flat-3528706227325/"
        },
        {
          "id": 4682418,
          "ean": "4019238393453",
          "marca": "CONTINENTAL",
          "modello": "ULTRACONTACT NXT",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "121,93 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/co-ucnxtxl-c736b5122071db60bd63564c4d21b00e.jpg",
          "url": "https://gommepro.it/prodotto/continental-ultracontact_nxt-205-55-16-estive-xl-4019238393453/"
        },
        {
          "id": 4679660,
          "ean": "3528701323398",
          "marca": "MICHELIN",
          "modello": "PRIMACY 5 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "106,95 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/michelin-primacy5-08595194ca5736ad2e04bb5382505f93.jpg",
          "url": "https://gommepro.it/prodotto/michelin-primacy_5_xl-205-55-16-estive-xl-3528701323398/"
        },
        {
          "id": 4677545,
          "ean": "3528700484199",
          "marca": "MICHELIN",
          "modello": "E PRIMACY",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "106,76 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/michelin_e_primacy-531fc611ac9b69f0dbc914323515a70e.jpg",
          "url": "https://gommepro.it/prodotto/michelin-e_primacy-205-55-16-estive-3528700484199/"
        },
        {
          "id": 4677537,
          "ean": "4019238545555",
          "marca": "CONTINENTAL",
          "modello": "ContiEcoContact 5",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "100,36 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/co-eco5-cd40b16963459aec9e7b23670e9b49da.jpg",
          "url": "https://gommepro.it/prodotto/continental-contiecocontact_5-205-55-16-estive-4019238545555/"
        },
        {
          "id": 4675008,
          "ean": "4019238066616",
          "marca": "CONTINENTAL",
          "modello": "ULTRACONTACT FR",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "96,54 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/co_ultra_contact-d5bc6ab2a443e313db4f2f64f9097f20.jpg",
          "url": "https://gommepro.it/prodotto/continental-ultracontact_fr-205-55-16-estive-4019238066616/"
        },
        {
          "id": 4674487,
          "ean": "4019238066593",
          "marca": "CONTINENTAL",
          "modello": "ULTRACONTACT FR",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "94,46 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/co_ultra_contact-d5bc6ab2a443e313db4f2f64f9097f20.jpg",
          "url": "https://gommepro.it/prodotto/continental-ultracontact_fr-205-55-16-estive-4019238066593/"
        },
        {
          "id": 4673342,
          "ean": "5452000682307",
          "marca": "GOODYEAR",
          "modello": "EFFICIENTGRIP PERFORMANCE-2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "92,34 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/gy-effigrip-perf-2-50760514bfa3e889ae70a115eda6ab84.jpg",
          "url": "https://gommepro.it/prodotto/goodyear-efficientgrip_performance2-205-55-16-estive-5452000682307/"
        },
        {
          "id": 4671273,
          "ean": "4968814801489",
          "marca": "YOKOHAMA",
          "modello": "C-DRIVE-2 AC02",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "84,22 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/c-drive-2-ac02-f5cb952b554aa2d3c5e657e461a60565.jpg",
          "url": "https://gommepro.it/prodotto/yokohama-cdrive2_ac02-205-55-16-estive-4968814801489/"
        },
        {
          "id": 4670308,
          "ean": "8808563545660",
          "marca": "HANKOOK",
          "modello": "K135",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "81,56 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/han-k135-cfba93fa0511feb0c612594b9d049501.jpg",
          "url": "https://gommepro.it/prodotto/hankook-k135-205-55-16-estive-8808563545660/"
        },
        {
          "id": 4670303,
          "ean": "6939801704340",
          "marca": "COMFORSER",
          "modello": "CF1100",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "88,01 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l17105-ba2906db6430fbcbb7a3925719951145.jpg",
          "url": "https://gommepro.it/prodotto/comforser-cf1100-205-55-16-estive-xl-6939801704340/"
        },
        {
          "id": 4669908,
          "ean": "8019227443356",
          "marca": "PIRELLI",
          "modello": "CINTURATO P1",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "82,45 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/pi-p1cint-5ee57864ebe5104af95ca3f9309ec059.jpg",
          "url": "https://gommepro.it/prodotto/pirelli-cinturato_p1-205-55-16-estive-8019227443356/"
        },
        {
          "id": 4669607,
          "ean": "5452000683090",
          "marca": "SAVA",
          "modello": "Intensa HP 2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "75,15 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TL28O0115-c0b3cf6cfd386e1e2809cab1c8dd31c7.png",
          "url": "https://gommepro.it/prodotto/sava-intensa_hp_2-205-55-16-estive-5452000683090/"
        },
        {
          "id": 4669455,
          "ean": "8808563527666",
          "marca": "HANKOOK",
          "modello": "VENTUS PRIME4",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "79,95 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l16733-ad73aeab35d6f289889b1757d58a6048.jpg",
          "url": "https://gommepro.it/prodotto/hankook-ventus_prime4-205-55-16-estive-8808563527666/"
        },
        {
          "id": 4669427,
          "ean": "3286342147413",
          "marca": "FIRESTONE",
          "modello": "ROADHAWK 2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "77,87 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l17960-1564f110f48b60461acaf5a8e49d054a.jpg",
          "url": "https://gommepro.it/prodotto/firestone-roadhawk_2-205-55-16-estive-xl-3286342147413/"
        },
        {
          "id": 4668915,
          "ean": "4718022009685",
          "marca": "NANKANG",
          "modello": "NEV-1",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "78,47 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/307688825_NEV1-27cad0d1ec8d8ead5e21b047c776b5e4.jpg",
          "url": "https://gommepro.it/prodotto/nankang-nev1-205-55-16-estive-4718022009685/"
        },
        {
          "id": 4668189,
          "ean": "8808563545806",
          "marca": "HANKOOK",
          "modello": "K135 VENTUS PRIME-4",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "76,43 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/pic_16733g-8873601fa6660107661af9859c945fd2.jpg",
          "url": "https://gommepro.it/prodotto/hankook-k135_ventus_prime4-205-55-16-estive-8808563545806/"
        },
        {
          "id": 4668109,
          "ean": "3528700614442",
          "marca": "BF-GOODRICH",
          "modello": "ADVANTAGE 2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "77,85 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/291968837_ADVANTAGE2-33acdf6218aa08fc2c636561810b2c39.png",
          "url": "https://gommepro.it/prodotto/bfgoodrich-advantage_2-205-55-16-estive-3528700614442/"
        },
        {
          "id": 4668062,
          "ean": "8808563545653",
          "marca": "HANKOOK",
          "modello": "K135",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "73,97 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/han-k135-cfba93fa0511feb0c612594b9d049501.jpg",
          "url": "https://gommepro.it/prodotto/hankook-k135-205-55-16-estive-8808563545653/"
        },
        {
          "id": 4667606,
          "ean": "8714692805950",
          "marca": "APOLLO",
          "modello": "Aspire 4G+",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "70,03 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TL67O0089-87f220e54d45ced92889af9fe8bcfabf.png",
          "url": "https://gommepro.it/prodotto/apollo-aspire_4g-205-55-16-estive-xl-8714692805950/"
        },
        {
          "id": 4667507,
          "ean": "4718022013835",
          "marca": "NANKANG",
          "modello": "NS-20 NOBLE SPORT",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "74,63 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l6840-82f536c15156cd0edaf80efc374abe3a.jpg",
          "url": "https://gommepro.it/prodotto/nankang-ns20_noble_sport-205-55-16-estive-xl-4718022013835/"
        },
        {
          "id": 4666745,
          "ean": "8808563450490",
          "marca": "HANKOOK",
          "modello": "K435 Kinergy Eco2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "73,99 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/pic_13414g-45fab0a59934e84f17703848724148ca.jpg",
          "url": "https://gommepro.it/prodotto/hankook-k435_kinergy_eco2-205-55-16-estive-8808563450490/"
        },
        {
          "id": 4666674,
          "ean": "8807622103421",
          "marca": "NEXEN",
          "modello": "N FERA PRIMUS XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "72,43 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ne-nfprimus-36b5db08ff55fcb4400ec5c776b19024.jpg",
          "url": "https://gommepro.it/prodotto/nexen-n_fera_primus_xl-205-55-16-estive-xl-8807622103421/"
        },
        {
          "id": 4666289,
          "ean": "3286342147512",
          "marca": "FIRESTONE",
          "modello": "ROADHAWK 2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "71,16 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l17960-1564f110f48b60461acaf5a8e49d054a.jpg",
          "url": "https://gommepro.it/prodotto/firestone-roadhawk_2-205-55-16-estive-3286342147512/"
        },
        {
          "id": 4666022,
          "ean": "5452000683083",
          "marca": "SAVA",
          "modello": "Intensa HP 2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "72,15 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TL28O0114-0b62cb83a9cd478c5580cb6e7571caa9.png",
          "url": "https://gommepro.it/prodotto/sava-intensa_hp_2-205-55-16-estive-5452000683083/"
        },
        {
          "id": 4665253,
          "ean": "8808956297350",
          "marca": "KUMHO",
          "modello": "HS52 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "69,48 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ku_hs52-9b74ad072db88c3dd86251564b981cec.jpg",
          "url": "https://gommepro.it/prodotto/kumho-hs52_xl-205-55-16-estive-xl-8808956297350/"
        },
        {
          "id": 4664757,
          "ean": "8808956238490",
          "marca": "KUMHO",
          "modello": "ES31 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "67,10 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ku_es31-bf6a1f8eea4a83704afa1b3017313ea9.jpg",
          "url": "https://gommepro.it/prodotto/kumho-es31_xl-205-55-16-estive-xl-8808956238490/"
        },
        {
          "id": 4664322,
          "ean": "8714692998621",
          "marca": "APOLLO",
          "modello": "Alnac 4G",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "62,65 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TL67O0288-6bf9c8fb24230330706d583c88b439c5.png",
          "url": "https://gommepro.it/prodotto/apollo-alnac_4g-205-55-16-estive-8714692998621/"
        },
        {
          "id": 4664078,
          "ean": "8808956238476",
          "marca": "KUMHO",
          "modello": "ES31",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "66,37 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ku_es31-bf6a1f8eea4a83704afa1b3017313ea9.jpg",
          "url": "https://gommepro.it/prodotto/kumho-es31-205-55-16-estive-xl-8808956238476/"
        },
        {
          "id": 4663664,
          "ean": "8807622168888",
          "marca": "NEXEN",
          "modello": "N FERA SU4",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "67,19 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ne_n_fera_su4-3ef537bff52ae50db2d1348aca0de58a.jpg",
          "url": "https://gommepro.it/prodotto/nexen-n_fera_su4-205-55-16-estive-8807622168888/"
        },
        {
          "id": 4662791,
          "ean": "8680830001525",
          "marca": "PETLAS",
          "modello": "VELOX SPORT PT741 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "62,62 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/pe_velox_sport_pt741-c6b4f6f094faf574c248b2300813237f.jpg",
          "url": "https://gommepro.it/prodotto/petlas-velox_sport_pt741_xl-205-55-16-estive-xl-8680830001525/"
        },
        {
          "id": 4662763,
          "ean": "8807622193088",
          "marca": "NEXEN",
          "modello": "N BLUE S AO",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "65,51 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ne-nblue-s_-bdd3561462ee235da28c6898a188e27c.jpg",
          "url": "https://gommepro.it/prodotto/nexen-n_blue_s_ao-205-55-16-estive-8807622193088/"
        },
        {
          "id": 4662725,
          "ean": "6932877142948",
          "marca": "GITI",
          "modello": "GitiSynergy H2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "63,05 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l16091-32e2fe6727d3ee41e982dcc44ce9cf7e.jpg",
          "url": "https://gommepro.it/prodotto/giti-gitisynergy_h2-205-55-16-estive-xl-6932877142948/"
        },
        {
          "id": 4662590,
          "ean": "8594186481491",
          "marca": "TOMKET",
          "modello": "ECO 3",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "69,76 €",
          "img": "https://b2b.interservicetrade.com/archive_img/tomket_eco_3-front.jpg",
          "url": "https://gommepro.it/prodotto/tomket-eco_3-205-55-16-estive-8594186481491/"
        },
        {
          "id": 4662245,
          "ean": "8807622235351",
          "marca": "NEXEN",
          "modello": "N BLUE S",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "64,25 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ne-nblue-s_-bdd3561462ee235da28c6898a188e27c.jpg",
          "url": "https://gommepro.it/prodotto/nexen-n_blue_s-205-55-16-estive-8807622235351/"
        },
        {
          "id": 4662219,
          "ean": "6932877143136",
          "marca": "GITI",
          "modello": "GitiSynergy H2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "61,85 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l16091-32e2fe6727d3ee41e982dcc44ce9cf7e.jpg",
          "url": "https://gommepro.it/prodotto/giti-gitisynergy_h2-205-55-16-estive-6932877143136/"
        },
        {
          "id": 4661780,
          "ean": "8807622234828",
          "marca": "NEXEN",
          "modello": "N BLUE HD PLUS",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "64,99 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ne_n_blue_hd_plus-91c41c686a3ef1c813aff39ceed076d9.jpg",
          "url": "https://gommepro.it/prodotto/nexen-n_blue_hd_plus-205-55-16-estive-8807622234828/"
        },
        {
          "id": 4661747,
          "ean": "6959956700400",
          "marca": "LINGLONG",
          "modello": "GREEN-MAX HP010",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "61,89 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/linglong_greenmax_hp010-9255cacfbe588c7c99ad07f513764038.jpg",
          "url": "https://gommepro.it/prodotto/linglong-greenmax_hp010-205-55-16-estive-6959956700400/"
        },
        {
          "id": 4660935,
          "ean": "8808563627854",
          "marca": "OPTIMO",
          "modello": "OPTIMO GT OK41",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "60,61 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/2042145134_OPTIMOGTOK41-9a3b5760a80b1877a9271558a56be0f4.jpeg",
          "url": "https://gommepro.it/prodotto/optimo-optimo_gt_ok41-205-55-16-estive-8808563627854/"
        },
        {
          "id": 4660263,
          "ean": "8848183006691",
          "marca": "FIREMAX",
          "modello": "FM601",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "46,81 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/163956480_FM601-b65b4a2ed0d7ff5f1d4a2eb2dcb56330.jpg",
          "url": "https://gommepro.it/prodotto/firemax-fm601-205-55-16-estive-8848183006691/"
        },
        {
          "id": 4659986,
          "ean": "8605068712210",
          "marca": "LINGLONG",
          "modello": "COMFORT MASTER",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "57,30 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/1789756264_COMFORTMASTER-ae996df47cb219370fd7c3d80b0195db.jpeg",
          "url": "https://gommepro.it/prodotto/linglong-comfort_master-205-55-16-estive-8605068712210/"
        },
        {
          "id": 4658944,
          "ean": "6924064120303",
          "marca": "LANVIGATOR",
          "modello": "COMFORT-II",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "47,37 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l16071-1f351e0b74c85a6a03bc7fa73eb36009.jpg",
          "url": "https://gommepro.it/prodotto/lanvigator-comfortii-205-55-16-estive-6924064120303/"
        },
        {
          "id": 4658723,
          "ean": "4717622042078",
          "marca": "NANKANG",
          "modello": "ECO-2+",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "52,80 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/green-sport-eco-2-21cfb7f8cfa6f8d4a4631560cb80d6ec.jpg",
          "url": "https://gommepro.it/prodotto/nankang-eco2-205-55-16-estive-4717622042078/"
        },
        {
          "id": 4658250,
          "ean": "6959956771264",
          "marca": "LINGLONG",
          "modello": "COMFORT MASTER",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "52,48 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/1779635882_CONFORTMASTER-c30ee8906f02de322b1c50a17c612491.png",
          "url": "https://gommepro.it/prodotto/linglong-comfort_master-205-55-16-estive-6959956771264/"
        },
        {
          "id": 4658117,
          "ean": "6950306300394",
          "marca": "SUNNY",
          "modello": "NP226 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "49,93 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/sunny-np226-bdf17cf84996379e4bba6118a9565f09.jpg",
          "url": "https://gommepro.it/prodotto/sunny-np226_xl-205-55-16-estive-xl-6950306300394/"
        },
        {
          "id": 4657967,
          "ean": "6959956771271",
          "marca": "LINGLONG",
          "modello": "COMFORT MASTER",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "52,18 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l16674-c2d7990faf79b03555fe08782105891e.jpg",
          "url": "https://gommepro.it/prodotto/linglong-comfort_master-205-55-16-estive-6959956771271/"
        },
        {
          "id": 4657912,
          "ean": "8848180002214",
          "marca": "SUNNY",
          "modello": "NP226 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "49,93 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/sunny-np226-bdf17cf84996379e4bba6118a9565f09.jpg",
          "url": "https://gommepro.it/prodotto/sunny-np226_xl-205-55-16-estive-xl-8848180002214/"
        },
        {
          "id": 4657306,
          "ean": "6939801730912",
          "marca": "ROADCRUZA",
          "modello": "RA510",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "45,47 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l18027-e37bba66d2ab07e0b96b745b6d476d76.jpg",
          "url": "https://gommepro.it/prodotto/roadcruza-ra510-205-55-16-estive-6939801730912/"
        },
        {
          "id": 4657103,
          "ean": "8594186480043",
          "marca": "TOMKET",
          "modello": "SPORT",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "50,98 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/tomket_sport-front-5c2c73383fdc9f47aaab980face50ecb.jpg",
          "url": "https://gommepro.it/prodotto/tomket-sport-205-55-16-estive-8594186480043/"
        },
        {
          "id": 4680841,
          "ean": "4038526070258",
          "marca": "DUNLOP",
          "modello": "WINTER XL",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "103,05 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/WINTER_DUNLOP-1995132b3a12c29271b5a83d8acc11d7.jpg",
          "url": "https://gommepro.it/prodotto/dunlop-winter_xl-205-55-16-invernali-xl-snow_grip-4038526070258/"
        },
        {
          "id": 4673752,
          "ean": "6419440567822",
          "marca": "NOKIAN",
          "modello": "SNOWPROOF 2",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "90,41 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/nk-snowproof2-410c5ac65c9c1995f8b7fda121111ba6.jpg",
          "url": "https://gommepro.it/prodotto/nokian-snowproof_2-205-55-16-invernali-snow_grip-6419440567822/"
        },
        {
          "id": 4672347,
          "ean": "4024068001614",
          "marca": "UNIROYAL",
          "modello": "WinterExpert",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "90,44 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/pic_16233g-40b5cc452bf854862d603f2824bca709.jpg",
          "url": "https://gommepro.it/prodotto/uniroyal-winterexpert-205-55-16-invernali-4024068001614/"
        },
        {
          "id": 4665549,
          "ean": "5420068626632",
          "marca": "IMPERIAL",
          "modello": "SnowDragon UHP",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "72,36 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TZ38O0106-0fc2a349cf3dbbd10c7a880b855a7e8f.png",
          "url": "https://gommepro.it/prodotto/imperial-snowdragon_uhp-205-55-16-invernali-snow_grip-5420068626632/"
        },
        {
          "id": 4662890,
          "ean": "3528705464066",
          "marca": "TAURUS",
          "modello": "WINTER",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "64,10 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l14129-68856060610a3e6d26f1afe18f5accbb.jpg",
          "url": "https://gommepro.it/prodotto/taurus-winter-205-55-16-invernali-snow_grip-3528705464066/"
        },
        {
          "id": 4661731,
          "ean": "8594186484218",
          "marca": "TOMKET",
          "modello": "SNOWROAD",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "62,22 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/tomket_snowroad-front-4ed46990263b8c702da250f74b0117e6.jpg",
          "url": "https://gommepro.it/prodotto/tomket-snowroad-205-55-16-invernali-snow_grip-8594186484218/"
        },
        {
          "id": 4661466,
          "ean": "8594186480784",
          "marca": "TOMKET",
          "modello": "SNOWROAD PRO 3 XL",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "61,94 €",
          "img": "https://b2b.interservicetrade.com/archive_img/tomket_snowroad_pro_3-front.jpg",
          "url": "https://gommepro.it/prodotto/tomket-snowroad_pro_3_xl-205-55-16-invernali-xl-8594186480784/"
        },
        {
          "id": 4659327,
          "ean": "6924064101821",
          "marca": "LANVIGATOR",
          "modello": "CATCHSNOW",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "54,08 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l14264-6e0af130692719dbc52f9c3cfcaa77e3.jpg",
          "url": "https://gommepro.it/prodotto/lanvigator-catchsnow-205-55-16-invernali-xl-snow_grip-6924064101821/"
        },
        {
          "id": 4676917,
          "ean": "4038526476104",
          "marca": "SAVA",
          "modello": "All Weather",
          "misura": "195/55 R16",
          "stagione": "4stagioni",
          "prezzo": "106,54 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TC28O0266-459a261a0c1bc3e58d4584a830cfef26.png",
          "url": "https://gommepro.it/prodotto/sava-all_weather-195-55-16-all_season-xl-snow_grip-4038526476104/"
        },
        {
          "id": 4676113,
          "ean": "3528704571185",
          "marca": "KLEBER",
          "modello": "QUADRAXER3 XL",
          "misura": "195/55 R16",
          "stagione": "4stagioni",
          "prezzo": "102,79 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/kl_quadraxer_3_xl-52871a26edaa1ad51bd22fd22775b497.jpg",
          "url": "https://gommepro.it/prodotto/kleber-quadraxer3_xl-195-55-16-all_season-xl-snow_grip-3528704571185/"
        },
        {
          "id": 4673540,
          "ean": "4038526430687",
          "marca": "SAVA",
          "modello": "All Weather",
          "misura": "195/55 R16",
          "stagione": "4stagioni",
          "prezzo": "99,99 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TC28O0249-e3ea2a80c603473ff6a795989941de03.png",
          "url": "https://gommepro.it/prodotto/sava-all_weather-195-55-16-all_season-snow_grip-4038526430687/"
        },
        {
          "id": 4671527,
          "ean": "8808956348014",
          "marca": "KUMHO",
          "modello": "HA32+ XL",
          "misura": "195/55 R16",
          "stagione": "4stagioni",
          "prezzo": "93,33 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ku-ha32xl.-c92d56f3655105147d64705d66d43ba7.jpg",
          "url": "https://gommepro.it/prodotto/kumho-ha32_xl-195-55-16-all_season-xl-snow_grip-8808956348014/"
        },
        {
          "id": 4665127,
          "ean": "8594186482689",
          "marca": "TOMKET",
          "modello": "ALLYEAR 3 XL (3PMSF certif)",
          "misura": "195/55 R16",
          "stagione": "4stagioni",
          "prezzo": "58,93 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/tomket_allyear_3_3pmsf_-front-65ee17db490b5da2d082bbf6f918e75b.jpg",
          "url": "https://gommepro.it/prodotto/tomket-allyear_3_xl_3pmsf_certif-195-55-16-all_season-xl-8594186482689/"
        }
      ]
    },
    {
      "ordine": 16,
      "id": "vetrina_owy6eh",
      "titolo": "Dal nostro negozio online gommepro.it",
      "durata_sec": 12,
      "attivo": true,
      "is_vetrina_gommepro": true,
      "box": 4,
      "ogni_ore": 1,
      "sito": "https://gommepro.it",
      "testo_evidenza": "MIGLIOR PREZZO",
      "colori": {
        "invernali": "#1e6fd9",
        "estive": "#e08a00",
        "4stagioni": "#2e9e4f"
      },
      "marche_fisse": [
        "Hankook",
        "Continental",
        "Pirelli"
      ],
      "regole": [
        {
          "stagione": "estive",
          "misure": [
            "205/55 R16"
          ],
          "periodi": [
            {
              "dal": "16/04",
              "al": "31/10"
            }
          ]
        },
        {
          "stagione": "invernali",
          "misure": [
            "205/55 R16"
          ],
          "periodi": [
            {
              "dal": "15/10",
              "al": "15/04"
            }
          ]
        },
        {
          "stagione": "4stagioni",
          "misure": [
            "195/55 R16"
          ]
        }
      ],
      "prodotti": [
        {
          "id": 4695586,
          "ean": "3528706227325",
          "marca": "MICHELIN",
          "modello": "PRIMACY 3",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "133,25 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/michelin_primacy_3-933a4b5296eabd7a4b4d9f65a872e534.jpg",
          "url": "https://gommepro.it/prodotto/michelin-primacy_3-205-55-16-estive-run_flat-3528706227325/"
        },
        {
          "id": 4682418,
          "ean": "4019238393453",
          "marca": "CONTINENTAL",
          "modello": "ULTRACONTACT NXT",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "121,93 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/co-ucnxtxl-c736b5122071db60bd63564c4d21b00e.jpg",
          "url": "https://gommepro.it/prodotto/continental-ultracontact_nxt-205-55-16-estive-xl-4019238393453/"
        },
        {
          "id": 4679660,
          "ean": "3528701323398",
          "marca": "MICHELIN",
          "modello": "PRIMACY 5 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "106,95 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/michelin-primacy5-08595194ca5736ad2e04bb5382505f93.jpg",
          "url": "https://gommepro.it/prodotto/michelin-primacy_5_xl-205-55-16-estive-xl-3528701323398/"
        },
        {
          "id": 4677545,
          "ean": "3528700484199",
          "marca": "MICHELIN",
          "modello": "E PRIMACY",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "106,76 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/michelin_e_primacy-531fc611ac9b69f0dbc914323515a70e.jpg",
          "url": "https://gommepro.it/prodotto/michelin-e_primacy-205-55-16-estive-3528700484199/"
        },
        {
          "id": 4677537,
          "ean": "4019238545555",
          "marca": "CONTINENTAL",
          "modello": "ContiEcoContact 5",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "100,36 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/co-eco5-cd40b16963459aec9e7b23670e9b49da.jpg",
          "url": "https://gommepro.it/prodotto/continental-contiecocontact_5-205-55-16-estive-4019238545555/"
        },
        {
          "id": 4675008,
          "ean": "4019238066616",
          "marca": "CONTINENTAL",
          "modello": "ULTRACONTACT FR",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "96,54 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/co_ultra_contact-d5bc6ab2a443e313db4f2f64f9097f20.jpg",
          "url": "https://gommepro.it/prodotto/continental-ultracontact_fr-205-55-16-estive-4019238066616/"
        },
        {
          "id": 4674487,
          "ean": "4019238066593",
          "marca": "CONTINENTAL",
          "modello": "ULTRACONTACT FR",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "94,46 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/co_ultra_contact-d5bc6ab2a443e313db4f2f64f9097f20.jpg",
          "url": "https://gommepro.it/prodotto/continental-ultracontact_fr-205-55-16-estive-4019238066593/"
        },
        {
          "id": 4673342,
          "ean": "5452000682307",
          "marca": "GOODYEAR",
          "modello": "EFFICIENTGRIP PERFORMANCE-2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "92,34 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/gy-effigrip-perf-2-50760514bfa3e889ae70a115eda6ab84.jpg",
          "url": "https://gommepro.it/prodotto/goodyear-efficientgrip_performance2-205-55-16-estive-5452000682307/"
        },
        {
          "id": 4671273,
          "ean": "4968814801489",
          "marca": "YOKOHAMA",
          "modello": "C-DRIVE-2 AC02",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "84,22 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/c-drive-2-ac02-f5cb952b554aa2d3c5e657e461a60565.jpg",
          "url": "https://gommepro.it/prodotto/yokohama-cdrive2_ac02-205-55-16-estive-4968814801489/"
        },
        {
          "id": 4670308,
          "ean": "8808563545660",
          "marca": "HANKOOK",
          "modello": "K135",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "81,56 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/han-k135-cfba93fa0511feb0c612594b9d049501.jpg",
          "url": "https://gommepro.it/prodotto/hankook-k135-205-55-16-estive-8808563545660/"
        },
        {
          "id": 4670303,
          "ean": "6939801704340",
          "marca": "COMFORSER",
          "modello": "CF1100",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "88,01 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l17105-ba2906db6430fbcbb7a3925719951145.jpg",
          "url": "https://gommepro.it/prodotto/comforser-cf1100-205-55-16-estive-xl-6939801704340/"
        },
        {
          "id": 4669908,
          "ean": "8019227443356",
          "marca": "PIRELLI",
          "modello": "CINTURATO P1",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "82,45 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/pi-p1cint-5ee57864ebe5104af95ca3f9309ec059.jpg",
          "url": "https://gommepro.it/prodotto/pirelli-cinturato_p1-205-55-16-estive-8019227443356/"
        },
        {
          "id": 4669607,
          "ean": "5452000683090",
          "marca": "SAVA",
          "modello": "Intensa HP 2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "75,15 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TL28O0115-c0b3cf6cfd386e1e2809cab1c8dd31c7.png",
          "url": "https://gommepro.it/prodotto/sava-intensa_hp_2-205-55-16-estive-5452000683090/"
        },
        {
          "id": 4669455,
          "ean": "8808563527666",
          "marca": "HANKOOK",
          "modello": "VENTUS PRIME4",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "79,95 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l16733-ad73aeab35d6f289889b1757d58a6048.jpg",
          "url": "https://gommepro.it/prodotto/hankook-ventus_prime4-205-55-16-estive-8808563527666/"
        },
        {
          "id": 4669427,
          "ean": "3286342147413",
          "marca": "FIRESTONE",
          "modello": "ROADHAWK 2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "77,87 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l17960-1564f110f48b60461acaf5a8e49d054a.jpg",
          "url": "https://gommepro.it/prodotto/firestone-roadhawk_2-205-55-16-estive-xl-3286342147413/"
        },
        {
          "id": 4668915,
          "ean": "4718022009685",
          "marca": "NANKANG",
          "modello": "NEV-1",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "78,47 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/307688825_NEV1-27cad0d1ec8d8ead5e21b047c776b5e4.jpg",
          "url": "https://gommepro.it/prodotto/nankang-nev1-205-55-16-estive-4718022009685/"
        },
        {
          "id": 4668189,
          "ean": "8808563545806",
          "marca": "HANKOOK",
          "modello": "K135 VENTUS PRIME-4",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "76,43 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/pic_16733g-8873601fa6660107661af9859c945fd2.jpg",
          "url": "https://gommepro.it/prodotto/hankook-k135_ventus_prime4-205-55-16-estive-8808563545806/"
        },
        {
          "id": 4668109,
          "ean": "3528700614442",
          "marca": "BF-GOODRICH",
          "modello": "ADVANTAGE 2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "77,85 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/291968837_ADVANTAGE2-33acdf6218aa08fc2c636561810b2c39.png",
          "url": "https://gommepro.it/prodotto/bfgoodrich-advantage_2-205-55-16-estive-3528700614442/"
        },
        {
          "id": 4668062,
          "ean": "8808563545653",
          "marca": "HANKOOK",
          "modello": "K135",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "73,97 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/han-k135-cfba93fa0511feb0c612594b9d049501.jpg",
          "url": "https://gommepro.it/prodotto/hankook-k135-205-55-16-estive-8808563545653/"
        },
        {
          "id": 4667606,
          "ean": "8714692805950",
          "marca": "APOLLO",
          "modello": "Aspire 4G+",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "70,03 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TL67O0089-87f220e54d45ced92889af9fe8bcfabf.png",
          "url": "https://gommepro.it/prodotto/apollo-aspire_4g-205-55-16-estive-xl-8714692805950/"
        },
        {
          "id": 4667507,
          "ean": "4718022013835",
          "marca": "NANKANG",
          "modello": "NS-20 NOBLE SPORT",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "74,63 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l6840-82f536c15156cd0edaf80efc374abe3a.jpg",
          "url": "https://gommepro.it/prodotto/nankang-ns20_noble_sport-205-55-16-estive-xl-4718022013835/"
        },
        {
          "id": 4666745,
          "ean": "8808563450490",
          "marca": "HANKOOK",
          "modello": "K435 Kinergy Eco2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "73,99 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/pic_13414g-45fab0a59934e84f17703848724148ca.jpg",
          "url": "https://gommepro.it/prodotto/hankook-k435_kinergy_eco2-205-55-16-estive-8808563450490/"
        },
        {
          "id": 4666674,
          "ean": "8807622103421",
          "marca": "NEXEN",
          "modello": "N FERA PRIMUS XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "72,43 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ne-nfprimus-36b5db08ff55fcb4400ec5c776b19024.jpg",
          "url": "https://gommepro.it/prodotto/nexen-n_fera_primus_xl-205-55-16-estive-xl-8807622103421/"
        },
        {
          "id": 4666289,
          "ean": "3286342147512",
          "marca": "FIRESTONE",
          "modello": "ROADHAWK 2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "71,16 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l17960-1564f110f48b60461acaf5a8e49d054a.jpg",
          "url": "https://gommepro.it/prodotto/firestone-roadhawk_2-205-55-16-estive-3286342147512/"
        },
        {
          "id": 4666022,
          "ean": "5452000683083",
          "marca": "SAVA",
          "modello": "Intensa HP 2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "72,15 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TL28O0114-0b62cb83a9cd478c5580cb6e7571caa9.png",
          "url": "https://gommepro.it/prodotto/sava-intensa_hp_2-205-55-16-estive-5452000683083/"
        },
        {
          "id": 4665253,
          "ean": "8808956297350",
          "marca": "KUMHO",
          "modello": "HS52 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "69,48 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ku_hs52-9b74ad072db88c3dd86251564b981cec.jpg",
          "url": "https://gommepro.it/prodotto/kumho-hs52_xl-205-55-16-estive-xl-8808956297350/"
        },
        {
          "id": 4664757,
          "ean": "8808956238490",
          "marca": "KUMHO",
          "modello": "ES31 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "67,10 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ku_es31-bf6a1f8eea4a83704afa1b3017313ea9.jpg",
          "url": "https://gommepro.it/prodotto/kumho-es31_xl-205-55-16-estive-xl-8808956238490/"
        },
        {
          "id": 4664322,
          "ean": "8714692998621",
          "marca": "APOLLO",
          "modello": "Alnac 4G",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "62,65 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TL67O0288-6bf9c8fb24230330706d583c88b439c5.png",
          "url": "https://gommepro.it/prodotto/apollo-alnac_4g-205-55-16-estive-8714692998621/"
        },
        {
          "id": 4664078,
          "ean": "8808956238476",
          "marca": "KUMHO",
          "modello": "ES31",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "66,37 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ku_es31-bf6a1f8eea4a83704afa1b3017313ea9.jpg",
          "url": "https://gommepro.it/prodotto/kumho-es31-205-55-16-estive-xl-8808956238476/"
        },
        {
          "id": 4663664,
          "ean": "8807622168888",
          "marca": "NEXEN",
          "modello": "N FERA SU4",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "67,19 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ne_n_fera_su4-3ef537bff52ae50db2d1348aca0de58a.jpg",
          "url": "https://gommepro.it/prodotto/nexen-n_fera_su4-205-55-16-estive-8807622168888/"
        },
        {
          "id": 4662791,
          "ean": "8680830001525",
          "marca": "PETLAS",
          "modello": "VELOX SPORT PT741 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "62,62 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/pe_velox_sport_pt741-c6b4f6f094faf574c248b2300813237f.jpg",
          "url": "https://gommepro.it/prodotto/petlas-velox_sport_pt741_xl-205-55-16-estive-xl-8680830001525/"
        },
        {
          "id": 4662763,
          "ean": "8807622193088",
          "marca": "NEXEN",
          "modello": "N BLUE S AO",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "65,51 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ne-nblue-s_-bdd3561462ee235da28c6898a188e27c.jpg",
          "url": "https://gommepro.it/prodotto/nexen-n_blue_s_ao-205-55-16-estive-8807622193088/"
        },
        {
          "id": 4662725,
          "ean": "6932877142948",
          "marca": "GITI",
          "modello": "GitiSynergy H2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "63,05 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l16091-32e2fe6727d3ee41e982dcc44ce9cf7e.jpg",
          "url": "https://gommepro.it/prodotto/giti-gitisynergy_h2-205-55-16-estive-xl-6932877142948/"
        },
        {
          "id": 4662590,
          "ean": "8594186481491",
          "marca": "TOMKET",
          "modello": "ECO 3",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "69,76 €",
          "img": "https://b2b.interservicetrade.com/archive_img/tomket_eco_3-front.jpg",
          "url": "https://gommepro.it/prodotto/tomket-eco_3-205-55-16-estive-8594186481491/"
        },
        {
          "id": 4662245,
          "ean": "8807622235351",
          "marca": "NEXEN",
          "modello": "N BLUE S",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "64,25 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ne-nblue-s_-bdd3561462ee235da28c6898a188e27c.jpg",
          "url": "https://gommepro.it/prodotto/nexen-n_blue_s-205-55-16-estive-8807622235351/"
        },
        {
          "id": 4662219,
          "ean": "6932877143136",
          "marca": "GITI",
          "modello": "GitiSynergy H2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "61,85 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l16091-32e2fe6727d3ee41e982dcc44ce9cf7e.jpg",
          "url": "https://gommepro.it/prodotto/giti-gitisynergy_h2-205-55-16-estive-6932877143136/"
        },
        {
          "id": 4661780,
          "ean": "8807622234828",
          "marca": "NEXEN",
          "modello": "N BLUE HD PLUS",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "64,99 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ne_n_blue_hd_plus-91c41c686a3ef1c813aff39ceed076d9.jpg",
          "url": "https://gommepro.it/prodotto/nexen-n_blue_hd_plus-205-55-16-estive-8807622234828/"
        },
        {
          "id": 4661747,
          "ean": "6959956700400",
          "marca": "LINGLONG",
          "modello": "GREEN-MAX HP010",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "61,89 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/linglong_greenmax_hp010-9255cacfbe588c7c99ad07f513764038.jpg",
          "url": "https://gommepro.it/prodotto/linglong-greenmax_hp010-205-55-16-estive-6959956700400/"
        },
        {
          "id": 4660935,
          "ean": "8808563627854",
          "marca": "OPTIMO",
          "modello": "OPTIMO GT OK41",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "60,61 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/2042145134_OPTIMOGTOK41-9a3b5760a80b1877a9271558a56be0f4.jpeg",
          "url": "https://gommepro.it/prodotto/optimo-optimo_gt_ok41-205-55-16-estive-8808563627854/"
        },
        {
          "id": 4660263,
          "ean": "8848183006691",
          "marca": "FIREMAX",
          "modello": "FM601",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "46,81 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/163956480_FM601-b65b4a2ed0d7ff5f1d4a2eb2dcb56330.jpg",
          "url": "https://gommepro.it/prodotto/firemax-fm601-205-55-16-estive-8848183006691/"
        },
        {
          "id": 4659986,
          "ean": "8605068712210",
          "marca": "LINGLONG",
          "modello": "COMFORT MASTER",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "57,30 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/1789756264_COMFORTMASTER-ae996df47cb219370fd7c3d80b0195db.jpeg",
          "url": "https://gommepro.it/prodotto/linglong-comfort_master-205-55-16-estive-8605068712210/"
        },
        {
          "id": 4658944,
          "ean": "6924064120303",
          "marca": "LANVIGATOR",
          "modello": "COMFORT-II",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "47,37 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l16071-1f351e0b74c85a6a03bc7fa73eb36009.jpg",
          "url": "https://gommepro.it/prodotto/lanvigator-comfortii-205-55-16-estive-6924064120303/"
        },
        {
          "id": 4658723,
          "ean": "4717622042078",
          "marca": "NANKANG",
          "modello": "ECO-2+",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "52,80 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/green-sport-eco-2-21cfb7f8cfa6f8d4a4631560cb80d6ec.jpg",
          "url": "https://gommepro.it/prodotto/nankang-eco2-205-55-16-estive-4717622042078/"
        },
        {
          "id": 4658250,
          "ean": "6959956771264",
          "marca": "LINGLONG",
          "modello": "COMFORT MASTER",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "52,48 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/1779635882_CONFORTMASTER-c30ee8906f02de322b1c50a17c612491.png",
          "url": "https://gommepro.it/prodotto/linglong-comfort_master-205-55-16-estive-6959956771264/"
        },
        {
          "id": 4658117,
          "ean": "6950306300394",
          "marca": "SUNNY",
          "modello": "NP226 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "49,93 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/sunny-np226-bdf17cf84996379e4bba6118a9565f09.jpg",
          "url": "https://gommepro.it/prodotto/sunny-np226_xl-205-55-16-estive-xl-6950306300394/"
        },
        {
          "id": 4657967,
          "ean": "6959956771271",
          "marca": "LINGLONG",
          "modello": "COMFORT MASTER",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "52,18 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l16674-c2d7990faf79b03555fe08782105891e.jpg",
          "url": "https://gommepro.it/prodotto/linglong-comfort_master-205-55-16-estive-6959956771271/"
        },
        {
          "id": 4657912,
          "ean": "8848180002214",
          "marca": "SUNNY",
          "modello": "NP226 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "49,93 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/sunny-np226-bdf17cf84996379e4bba6118a9565f09.jpg",
          "url": "https://gommepro.it/prodotto/sunny-np226_xl-205-55-16-estive-xl-8848180002214/"
        },
        {
          "id": 4657306,
          "ean": "6939801730912",
          "marca": "ROADCRUZA",
          "modello": "RA510",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "45,47 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l18027-e37bba66d2ab07e0b96b745b6d476d76.jpg",
          "url": "https://gommepro.it/prodotto/roadcruza-ra510-205-55-16-estive-6939801730912/"
        },
        {
          "id": 4657103,
          "ean": "8594186480043",
          "marca": "TOMKET",
          "modello": "SPORT",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "50,98 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/tomket_sport-front-5c2c73383fdc9f47aaab980face50ecb.jpg",
          "url": "https://gommepro.it/prodotto/tomket-sport-205-55-16-estive-8594186480043/"
        },
        {
          "id": 4680841,
          "ean": "4038526070258",
          "marca": "DUNLOP",
          "modello": "WINTER XL",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "103,05 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/WINTER_DUNLOP-1995132b3a12c29271b5a83d8acc11d7.jpg",
          "url": "https://gommepro.it/prodotto/dunlop-winter_xl-205-55-16-invernali-xl-snow_grip-4038526070258/"
        },
        {
          "id": 4673752,
          "ean": "6419440567822",
          "marca": "NOKIAN",
          "modello": "SNOWPROOF 2",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "90,41 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/nk-snowproof2-410c5ac65c9c1995f8b7fda121111ba6.jpg",
          "url": "https://gommepro.it/prodotto/nokian-snowproof_2-205-55-16-invernali-snow_grip-6419440567822/"
        },
        {
          "id": 4672347,
          "ean": "4024068001614",
          "marca": "UNIROYAL",
          "modello": "WinterExpert",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "90,44 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/pic_16233g-40b5cc452bf854862d603f2824bca709.jpg",
          "url": "https://gommepro.it/prodotto/uniroyal-winterexpert-205-55-16-invernali-4024068001614/"
        },
        {
          "id": 4665549,
          "ean": "5420068626632",
          "marca": "IMPERIAL",
          "modello": "SnowDragon UHP",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "72,36 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TZ38O0106-0fc2a349cf3dbbd10c7a880b855a7e8f.png",
          "url": "https://gommepro.it/prodotto/imperial-snowdragon_uhp-205-55-16-invernali-snow_grip-5420068626632/"
        },
        {
          "id": 4662890,
          "ean": "3528705464066",
          "marca": "TAURUS",
          "modello": "WINTER",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "64,10 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l14129-68856060610a3e6d26f1afe18f5accbb.jpg",
          "url": "https://gommepro.it/prodotto/taurus-winter-205-55-16-invernali-snow_grip-3528705464066/"
        },
        {
          "id": 4661731,
          "ean": "8594186484218",
          "marca": "TOMKET",
          "modello": "SNOWROAD",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "62,22 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/tomket_snowroad-front-4ed46990263b8c702da250f74b0117e6.jpg",
          "url": "https://gommepro.it/prodotto/tomket-snowroad-205-55-16-invernali-snow_grip-8594186484218/"
        },
        {
          "id": 4661466,
          "ean": "8594186480784",
          "marca": "TOMKET",
          "modello": "SNOWROAD PRO 3 XL",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "61,94 €",
          "img": "https://b2b.interservicetrade.com/archive_img/tomket_snowroad_pro_3-front.jpg",
          "url": "https://gommepro.it/prodotto/tomket-snowroad_pro_3_xl-205-55-16-invernali-xl-8594186480784/"
        },
        {
          "id": 4659327,
          "ean": "6924064101821",
          "marca": "LANVIGATOR",
          "modello": "CATCHSNOW",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "54,08 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l14264-6e0af130692719dbc52f9c3cfcaa77e3.jpg",
          "url": "https://gommepro.it/prodotto/lanvigator-catchsnow-205-55-16-invernali-xl-snow_grip-6924064101821/"
        },
        {
          "id": 4676917,
          "ean": "4038526476104",
          "marca": "SAVA",
          "modello": "All Weather",
          "misura": "195/55 R16",
          "stagione": "4stagioni",
          "prezzo": "106,54 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TC28O0266-459a261a0c1bc3e58d4584a830cfef26.png",
          "url": "https://gommepro.it/prodotto/sava-all_weather-195-55-16-all_season-xl-snow_grip-4038526476104/"
        },
        {
          "id": 4676113,
          "ean": "3528704571185",
          "marca": "KLEBER",
          "modello": "QUADRAXER3 XL",
          "misura": "195/55 R16",
          "stagione": "4stagioni",
          "prezzo": "102,79 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/kl_quadraxer_3_xl-52871a26edaa1ad51bd22fd22775b497.jpg",
          "url": "https://gommepro.it/prodotto/kleber-quadraxer3_xl-195-55-16-all_season-xl-snow_grip-3528704571185/"
        },
        {
          "id": 4673540,
          "ean": "4038526430687",
          "marca": "SAVA",
          "modello": "All Weather",
          "misura": "195/55 R16",
          "stagione": "4stagioni",
          "prezzo": "99,99 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TC28O0249-e3ea2a80c603473ff6a795989941de03.png",
          "url": "https://gommepro.it/prodotto/sava-all_weather-195-55-16-all_season-snow_grip-4038526430687/"
        },
        {
          "id": 4671527,
          "ean": "8808956348014",
          "marca": "KUMHO",
          "modello": "HA32+ XL",
          "misura": "195/55 R16",
          "stagione": "4stagioni",
          "prezzo": "93,33 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ku-ha32xl.-c92d56f3655105147d64705d66d43ba7.jpg",
          "url": "https://gommepro.it/prodotto/kumho-ha32_xl-195-55-16-all_season-xl-snow_grip-8808956348014/"
        },
        {
          "id": 4665127,
          "ean": "8594186482689",
          "marca": "TOMKET",
          "modello": "ALLYEAR 3 XL (3PMSF certif)",
          "misura": "195/55 R16",
          "stagione": "4stagioni",
          "prezzo": "58,93 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/tomket_allyear_3_3pmsf_-front-65ee17db490b5da2d082bbf6f918e75b.jpg",
          "url": "https://gommepro.it/prodotto/tomket-allyear_3_xl_3pmsf_certif-195-55-16-all_season-xl-8594186482689/"
        }
      ]
    },
    {
      "ordine": 17,
      "id": "vetrina_mx6wut",
      "titolo": "Dal nostro negozio online",
      "durata_sec": 12,
      "attivo": true,
      "is_vetrina_gommepro": true,
      "box": 4,
      "ogni_ore": 1,
      "sito": "https://gommepro.it",
      "testo_evidenza": "MIGLIOR PREZZO",
      "colori": {
        "invernali": "#1e6fd9",
        "estive": "#e08a00",
        "4stagioni": "#2e9e4f"
      },
      "marche_fisse": [
        "Hankook",
        "Continental",
        "Pirelli"
      ],
      "regole": [
        {
          "stagione": "estive",
          "misure": [
            "205/55 R16"
          ],
          "periodi": [
            {
              "dal": "16/04",
              "al": "14/10"
            }
          ]
        },
        {
          "stagione": "invernali",
          "misure": [
            "205/55 R16"
          ],
          "periodi": [
            {
              "dal": "15/10",
              "al": "15/04"
            }
          ]
        },
        {
          "stagione": "4stagioni",
          "misure": [
            "195/55 R16"
          ]
        }
      ],
      "prodotti": [
        {
          "id": 4695586,
          "ean": "3528706227325",
          "marca": "MICHELIN",
          "modello": "PRIMACY 3",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "133,25 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/michelin_primacy_3-933a4b5296eabd7a4b4d9f65a872e534.jpg",
          "url": "https://gommepro.it/prodotto/michelin-primacy_3-205-55-16-estive-run_flat-3528706227325/"
        },
        {
          "id": 4682418,
          "ean": "4019238393453",
          "marca": "CONTINENTAL",
          "modello": "ULTRACONTACT NXT",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "121,93 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/co-ucnxtxl-c736b5122071db60bd63564c4d21b00e.jpg",
          "url": "https://gommepro.it/prodotto/continental-ultracontact_nxt-205-55-16-estive-xl-4019238393453/"
        },
        {
          "id": 4679660,
          "ean": "3528701323398",
          "marca": "MICHELIN",
          "modello": "PRIMACY 5 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "106,95 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/michelin-primacy5-08595194ca5736ad2e04bb5382505f93.jpg",
          "url": "https://gommepro.it/prodotto/michelin-primacy_5_xl-205-55-16-estive-xl-3528701323398/"
        },
        {
          "id": 4677545,
          "ean": "3528700484199",
          "marca": "MICHELIN",
          "modello": "E PRIMACY",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "106,76 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/michelin_e_primacy-531fc611ac9b69f0dbc914323515a70e.jpg",
          "url": "https://gommepro.it/prodotto/michelin-e_primacy-205-55-16-estive-3528700484199/"
        },
        {
          "id": 4677537,
          "ean": "4019238545555",
          "marca": "CONTINENTAL",
          "modello": "ContiEcoContact 5",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "100,36 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/co-eco5-cd40b16963459aec9e7b23670e9b49da.jpg",
          "url": "https://gommepro.it/prodotto/continental-contiecocontact_5-205-55-16-estive-4019238545555/"
        },
        {
          "id": 4675008,
          "ean": "4019238066616",
          "marca": "CONTINENTAL",
          "modello": "ULTRACONTACT FR",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "96,54 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/co_ultra_contact-d5bc6ab2a443e313db4f2f64f9097f20.jpg",
          "url": "https://gommepro.it/prodotto/continental-ultracontact_fr-205-55-16-estive-4019238066616/"
        },
        {
          "id": 4674487,
          "ean": "4019238066593",
          "marca": "CONTINENTAL",
          "modello": "ULTRACONTACT FR",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "94,46 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/co_ultra_contact-d5bc6ab2a443e313db4f2f64f9097f20.jpg",
          "url": "https://gommepro.it/prodotto/continental-ultracontact_fr-205-55-16-estive-4019238066593/"
        },
        {
          "id": 4673342,
          "ean": "5452000682307",
          "marca": "GOODYEAR",
          "modello": "EFFICIENTGRIP PERFORMANCE-2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "92,34 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/gy-effigrip-perf-2-50760514bfa3e889ae70a115eda6ab84.jpg",
          "url": "https://gommepro.it/prodotto/goodyear-efficientgrip_performance2-205-55-16-estive-5452000682307/"
        },
        {
          "id": 4671273,
          "ean": "4968814801489",
          "marca": "YOKOHAMA",
          "modello": "C-DRIVE-2 AC02",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "84,22 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/c-drive-2-ac02-f5cb952b554aa2d3c5e657e461a60565.jpg",
          "url": "https://gommepro.it/prodotto/yokohama-cdrive2_ac02-205-55-16-estive-4968814801489/"
        },
        {
          "id": 4670308,
          "ean": "8808563545660",
          "marca": "HANKOOK",
          "modello": "K135",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "81,56 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/han-k135-cfba93fa0511feb0c612594b9d049501.jpg",
          "url": "https://gommepro.it/prodotto/hankook-k135-205-55-16-estive-8808563545660/"
        },
        {
          "id": 4670303,
          "ean": "6939801704340",
          "marca": "COMFORSER",
          "modello": "CF1100",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "88,01 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l17105-ba2906db6430fbcbb7a3925719951145.jpg",
          "url": "https://gommepro.it/prodotto/comforser-cf1100-205-55-16-estive-xl-6939801704340/"
        },
        {
          "id": 4669908,
          "ean": "8019227443356",
          "marca": "PIRELLI",
          "modello": "CINTURATO P1",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "82,45 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/pi-p1cint-5ee57864ebe5104af95ca3f9309ec059.jpg",
          "url": "https://gommepro.it/prodotto/pirelli-cinturato_p1-205-55-16-estive-8019227443356/"
        },
        {
          "id": 4669607,
          "ean": "5452000683090",
          "marca": "SAVA",
          "modello": "Intensa HP 2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "75,15 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TL28O0115-c0b3cf6cfd386e1e2809cab1c8dd31c7.png",
          "url": "https://gommepro.it/prodotto/sava-intensa_hp_2-205-55-16-estive-5452000683090/"
        },
        {
          "id": 4669455,
          "ean": "8808563527666",
          "marca": "HANKOOK",
          "modello": "VENTUS PRIME4",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "79,95 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l16733-ad73aeab35d6f289889b1757d58a6048.jpg",
          "url": "https://gommepro.it/prodotto/hankook-ventus_prime4-205-55-16-estive-8808563527666/"
        },
        {
          "id": 4669427,
          "ean": "3286342147413",
          "marca": "FIRESTONE",
          "modello": "ROADHAWK 2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "77,87 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l17960-1564f110f48b60461acaf5a8e49d054a.jpg",
          "url": "https://gommepro.it/prodotto/firestone-roadhawk_2-205-55-16-estive-xl-3286342147413/"
        },
        {
          "id": 4668915,
          "ean": "4718022009685",
          "marca": "NANKANG",
          "modello": "NEV-1",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "78,47 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/307688825_NEV1-27cad0d1ec8d8ead5e21b047c776b5e4.jpg",
          "url": "https://gommepro.it/prodotto/nankang-nev1-205-55-16-estive-4718022009685/"
        },
        {
          "id": 4668189,
          "ean": "8808563545806",
          "marca": "HANKOOK",
          "modello": "K135 VENTUS PRIME-4",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "76,43 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/pic_16733g-8873601fa6660107661af9859c945fd2.jpg",
          "url": "https://gommepro.it/prodotto/hankook-k135_ventus_prime4-205-55-16-estive-8808563545806/"
        },
        {
          "id": 4668109,
          "ean": "3528700614442",
          "marca": "BF-GOODRICH",
          "modello": "ADVANTAGE 2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "77,85 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/291968837_ADVANTAGE2-33acdf6218aa08fc2c636561810b2c39.png",
          "url": "https://gommepro.it/prodotto/bfgoodrich-advantage_2-205-55-16-estive-3528700614442/"
        },
        {
          "id": 4668062,
          "ean": "8808563545653",
          "marca": "HANKOOK",
          "modello": "K135",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "73,97 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/han-k135-cfba93fa0511feb0c612594b9d049501.jpg",
          "url": "https://gommepro.it/prodotto/hankook-k135-205-55-16-estive-8808563545653/"
        },
        {
          "id": 4667606,
          "ean": "8714692805950",
          "marca": "APOLLO",
          "modello": "Aspire 4G+",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "70,03 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TL67O0089-87f220e54d45ced92889af9fe8bcfabf.png",
          "url": "https://gommepro.it/prodotto/apollo-aspire_4g-205-55-16-estive-xl-8714692805950/"
        },
        {
          "id": 4667507,
          "ean": "4718022013835",
          "marca": "NANKANG",
          "modello": "NS-20 NOBLE SPORT",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "74,63 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l6840-82f536c15156cd0edaf80efc374abe3a.jpg",
          "url": "https://gommepro.it/prodotto/nankang-ns20_noble_sport-205-55-16-estive-xl-4718022013835/"
        },
        {
          "id": 4666745,
          "ean": "8808563450490",
          "marca": "HANKOOK",
          "modello": "K435 Kinergy Eco2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "73,99 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/pic_13414g-45fab0a59934e84f17703848724148ca.jpg",
          "url": "https://gommepro.it/prodotto/hankook-k435_kinergy_eco2-205-55-16-estive-8808563450490/"
        },
        {
          "id": 4666674,
          "ean": "8807622103421",
          "marca": "NEXEN",
          "modello": "N FERA PRIMUS XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "72,43 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ne-nfprimus-36b5db08ff55fcb4400ec5c776b19024.jpg",
          "url": "https://gommepro.it/prodotto/nexen-n_fera_primus_xl-205-55-16-estive-xl-8807622103421/"
        },
        {
          "id": 4666289,
          "ean": "3286342147512",
          "marca": "FIRESTONE",
          "modello": "ROADHAWK 2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "71,16 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l17960-1564f110f48b60461acaf5a8e49d054a.jpg",
          "url": "https://gommepro.it/prodotto/firestone-roadhawk_2-205-55-16-estive-3286342147512/"
        },
        {
          "id": 4666022,
          "ean": "5452000683083",
          "marca": "SAVA",
          "modello": "Intensa HP 2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "72,15 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TL28O0114-0b62cb83a9cd478c5580cb6e7571caa9.png",
          "url": "https://gommepro.it/prodotto/sava-intensa_hp_2-205-55-16-estive-5452000683083/"
        },
        {
          "id": 4665253,
          "ean": "8808956297350",
          "marca": "KUMHO",
          "modello": "HS52 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "69,48 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ku_hs52-9b74ad072db88c3dd86251564b981cec.jpg",
          "url": "https://gommepro.it/prodotto/kumho-hs52_xl-205-55-16-estive-xl-8808956297350/"
        },
        {
          "id": 4664757,
          "ean": "8808956238490",
          "marca": "KUMHO",
          "modello": "ES31 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "67,10 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ku_es31-bf6a1f8eea4a83704afa1b3017313ea9.jpg",
          "url": "https://gommepro.it/prodotto/kumho-es31_xl-205-55-16-estive-xl-8808956238490/"
        },
        {
          "id": 4664322,
          "ean": "8714692998621",
          "marca": "APOLLO",
          "modello": "Alnac 4G",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "62,65 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TL67O0288-6bf9c8fb24230330706d583c88b439c5.png",
          "url": "https://gommepro.it/prodotto/apollo-alnac_4g-205-55-16-estive-8714692998621/"
        },
        {
          "id": 4664078,
          "ean": "8808956238476",
          "marca": "KUMHO",
          "modello": "ES31",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "66,37 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ku_es31-bf6a1f8eea4a83704afa1b3017313ea9.jpg",
          "url": "https://gommepro.it/prodotto/kumho-es31-205-55-16-estive-xl-8808956238476/"
        },
        {
          "id": 4663664,
          "ean": "8807622168888",
          "marca": "NEXEN",
          "modello": "N FERA SU4",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "67,19 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ne_n_fera_su4-3ef537bff52ae50db2d1348aca0de58a.jpg",
          "url": "https://gommepro.it/prodotto/nexen-n_fera_su4-205-55-16-estive-8807622168888/"
        },
        {
          "id": 4662791,
          "ean": "8680830001525",
          "marca": "PETLAS",
          "modello": "VELOX SPORT PT741 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "62,62 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/pe_velox_sport_pt741-c6b4f6f094faf574c248b2300813237f.jpg",
          "url": "https://gommepro.it/prodotto/petlas-velox_sport_pt741_xl-205-55-16-estive-xl-8680830001525/"
        },
        {
          "id": 4662763,
          "ean": "8807622193088",
          "marca": "NEXEN",
          "modello": "N BLUE S AO",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "65,51 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ne-nblue-s_-bdd3561462ee235da28c6898a188e27c.jpg",
          "url": "https://gommepro.it/prodotto/nexen-n_blue_s_ao-205-55-16-estive-8807622193088/"
        },
        {
          "id": 4662725,
          "ean": "6932877142948",
          "marca": "GITI",
          "modello": "GitiSynergy H2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "63,05 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l16091-32e2fe6727d3ee41e982dcc44ce9cf7e.jpg",
          "url": "https://gommepro.it/prodotto/giti-gitisynergy_h2-205-55-16-estive-xl-6932877142948/"
        },
        {
          "id": 4662590,
          "ean": "8594186481491",
          "marca": "TOMKET",
          "modello": "ECO 3",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "69,76 €",
          "img": "https://b2b.interservicetrade.com/archive_img/tomket_eco_3-front.jpg",
          "url": "https://gommepro.it/prodotto/tomket-eco_3-205-55-16-estive-8594186481491/"
        },
        {
          "id": 4662245,
          "ean": "8807622235351",
          "marca": "NEXEN",
          "modello": "N BLUE S",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "64,25 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ne-nblue-s_-bdd3561462ee235da28c6898a188e27c.jpg",
          "url": "https://gommepro.it/prodotto/nexen-n_blue_s-205-55-16-estive-8807622235351/"
        },
        {
          "id": 4662219,
          "ean": "6932877143136",
          "marca": "GITI",
          "modello": "GitiSynergy H2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "61,85 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l16091-32e2fe6727d3ee41e982dcc44ce9cf7e.jpg",
          "url": "https://gommepro.it/prodotto/giti-gitisynergy_h2-205-55-16-estive-6932877143136/"
        },
        {
          "id": 4661780,
          "ean": "8807622234828",
          "marca": "NEXEN",
          "modello": "N BLUE HD PLUS",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "64,99 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ne_n_blue_hd_plus-91c41c686a3ef1c813aff39ceed076d9.jpg",
          "url": "https://gommepro.it/prodotto/nexen-n_blue_hd_plus-205-55-16-estive-8807622234828/"
        },
        {
          "id": 4661747,
          "ean": "6959956700400",
          "marca": "LINGLONG",
          "modello": "GREEN-MAX HP010",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "61,89 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/linglong_greenmax_hp010-9255cacfbe588c7c99ad07f513764038.jpg",
          "url": "https://gommepro.it/prodotto/linglong-greenmax_hp010-205-55-16-estive-6959956700400/"
        },
        {
          "id": 4660935,
          "ean": "8808563627854",
          "marca": "OPTIMO",
          "modello": "OPTIMO GT OK41",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "60,61 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/2042145134_OPTIMOGTOK41-9a3b5760a80b1877a9271558a56be0f4.jpeg",
          "url": "https://gommepro.it/prodotto/optimo-optimo_gt_ok41-205-55-16-estive-8808563627854/"
        },
        {
          "id": 4660263,
          "ean": "8848183006691",
          "marca": "FIREMAX",
          "modello": "FM601",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "46,81 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/163956480_FM601-b65b4a2ed0d7ff5f1d4a2eb2dcb56330.jpg",
          "url": "https://gommepro.it/prodotto/firemax-fm601-205-55-16-estive-8848183006691/"
        },
        {
          "id": 4659986,
          "ean": "8605068712210",
          "marca": "LINGLONG",
          "modello": "COMFORT MASTER",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "57,30 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/1789756264_COMFORTMASTER-ae996df47cb219370fd7c3d80b0195db.jpeg",
          "url": "https://gommepro.it/prodotto/linglong-comfort_master-205-55-16-estive-8605068712210/"
        },
        {
          "id": 4658944,
          "ean": "6924064120303",
          "marca": "LANVIGATOR",
          "modello": "COMFORT-II",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "47,37 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l16071-1f351e0b74c85a6a03bc7fa73eb36009.jpg",
          "url": "https://gommepro.it/prodotto/lanvigator-comfortii-205-55-16-estive-6924064120303/"
        },
        {
          "id": 4658723,
          "ean": "4717622042078",
          "marca": "NANKANG",
          "modello": "ECO-2+",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "52,80 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/green-sport-eco-2-21cfb7f8cfa6f8d4a4631560cb80d6ec.jpg",
          "url": "https://gommepro.it/prodotto/nankang-eco2-205-55-16-estive-4717622042078/"
        },
        {
          "id": 4658250,
          "ean": "6959956771264",
          "marca": "LINGLONG",
          "modello": "COMFORT MASTER",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "52,48 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/1779635882_CONFORTMASTER-c30ee8906f02de322b1c50a17c612491.png",
          "url": "https://gommepro.it/prodotto/linglong-comfort_master-205-55-16-estive-6959956771264/"
        },
        {
          "id": 4658117,
          "ean": "6950306300394",
          "marca": "SUNNY",
          "modello": "NP226 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "49,93 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/sunny-np226-bdf17cf84996379e4bba6118a9565f09.jpg",
          "url": "https://gommepro.it/prodotto/sunny-np226_xl-205-55-16-estive-xl-6950306300394/"
        },
        {
          "id": 4657967,
          "ean": "6959956771271",
          "marca": "LINGLONG",
          "modello": "COMFORT MASTER",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "52,18 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l16674-c2d7990faf79b03555fe08782105891e.jpg",
          "url": "https://gommepro.it/prodotto/linglong-comfort_master-205-55-16-estive-6959956771271/"
        },
        {
          "id": 4657912,
          "ean": "8848180002214",
          "marca": "SUNNY",
          "modello": "NP226 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "49,93 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/sunny-np226-bdf17cf84996379e4bba6118a9565f09.jpg",
          "url": "https://gommepro.it/prodotto/sunny-np226_xl-205-55-16-estive-xl-8848180002214/"
        },
        {
          "id": 4657306,
          "ean": "6939801730912",
          "marca": "ROADCRUZA",
          "modello": "RA510",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "45,47 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l18027-e37bba66d2ab07e0b96b745b6d476d76.jpg",
          "url": "https://gommepro.it/prodotto/roadcruza-ra510-205-55-16-estive-6939801730912/"
        },
        {
          "id": 4657103,
          "ean": "8594186480043",
          "marca": "TOMKET",
          "modello": "SPORT",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "50,98 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/tomket_sport-front-5c2c73383fdc9f47aaab980face50ecb.jpg",
          "url": "https://gommepro.it/prodotto/tomket-sport-205-55-16-estive-8594186480043/"
        },
        {
          "id": 4680841,
          "ean": "4038526070258",
          "marca": "DUNLOP",
          "modello": "WINTER XL",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "103,05 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/WINTER_DUNLOP-1995132b3a12c29271b5a83d8acc11d7.jpg",
          "url": "https://gommepro.it/prodotto/dunlop-winter_xl-205-55-16-invernali-xl-snow_grip-4038526070258/"
        },
        {
          "id": 4673752,
          "ean": "6419440567822",
          "marca": "NOKIAN",
          "modello": "SNOWPROOF 2",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "90,41 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/nk-snowproof2-410c5ac65c9c1995f8b7fda121111ba6.jpg",
          "url": "https://gommepro.it/prodotto/nokian-snowproof_2-205-55-16-invernali-snow_grip-6419440567822/"
        },
        {
          "id": 4672347,
          "ean": "4024068001614",
          "marca": "UNIROYAL",
          "modello": "WinterExpert",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "90,44 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/pic_16233g-40b5cc452bf854862d603f2824bca709.jpg",
          "url": "https://gommepro.it/prodotto/uniroyal-winterexpert-205-55-16-invernali-4024068001614/"
        },
        {
          "id": 4665549,
          "ean": "5420068626632",
          "marca": "IMPERIAL",
          "modello": "SnowDragon UHP",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "72,36 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TZ38O0106-0fc2a349cf3dbbd10c7a880b855a7e8f.png",
          "url": "https://gommepro.it/prodotto/imperial-snowdragon_uhp-205-55-16-invernali-snow_grip-5420068626632/"
        },
        {
          "id": 4662890,
          "ean": "3528705464066",
          "marca": "TAURUS",
          "modello": "WINTER",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "64,10 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l14129-68856060610a3e6d26f1afe18f5accbb.jpg",
          "url": "https://gommepro.it/prodotto/taurus-winter-205-55-16-invernali-snow_grip-3528705464066/"
        },
        {
          "id": 4661731,
          "ean": "8594186484218",
          "marca": "TOMKET",
          "modello": "SNOWROAD",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "62,22 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/tomket_snowroad-front-4ed46990263b8c702da250f74b0117e6.jpg",
          "url": "https://gommepro.it/prodotto/tomket-snowroad-205-55-16-invernali-snow_grip-8594186484218/"
        },
        {
          "id": 4661466,
          "ean": "8594186480784",
          "marca": "TOMKET",
          "modello": "SNOWROAD PRO 3 XL",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "61,94 €",
          "img": "https://b2b.interservicetrade.com/archive_img/tomket_snowroad_pro_3-front.jpg",
          "url": "https://gommepro.it/prodotto/tomket-snowroad_pro_3_xl-205-55-16-invernali-xl-8594186480784/"
        },
        {
          "id": 4659327,
          "ean": "6924064101821",
          "marca": "LANVIGATOR",
          "modello": "CATCHSNOW",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "54,08 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l14264-6e0af130692719dbc52f9c3cfcaa77e3.jpg",
          "url": "https://gommepro.it/prodotto/lanvigator-catchsnow-205-55-16-invernali-xl-snow_grip-6924064101821/"
        },
        {
          "id": 4676917,
          "ean": "4038526476104",
          "marca": "SAVA",
          "modello": "All Weather",
          "misura": "195/55 R16",
          "stagione": "4stagioni",
          "prezzo": "106,54 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TC28O0266-459a261a0c1bc3e58d4584a830cfef26.png",
          "url": "https://gommepro.it/prodotto/sava-all_weather-195-55-16-all_season-xl-snow_grip-4038526476104/"
        },
        {
          "id": 4676113,
          "ean": "3528704571185",
          "marca": "KLEBER",
          "modello": "QUADRAXER3 XL",
          "misura": "195/55 R16",
          "stagione": "4stagioni",
          "prezzo": "102,79 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/kl_quadraxer_3_xl-52871a26edaa1ad51bd22fd22775b497.jpg",
          "url": "https://gommepro.it/prodotto/kleber-quadraxer3_xl-195-55-16-all_season-xl-snow_grip-3528704571185/"
        },
        {
          "id": 4673540,
          "ean": "4038526430687",
          "marca": "SAVA",
          "modello": "All Weather",
          "misura": "195/55 R16",
          "stagione": "4stagioni",
          "prezzo": "99,99 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TC28O0249-e3ea2a80c603473ff6a795989941de03.png",
          "url": "https://gommepro.it/prodotto/sava-all_weather-195-55-16-all_season-snow_grip-4038526430687/"
        },
        {
          "id": 4671527,
          "ean": "8808956348014",
          "marca": "KUMHO",
          "modello": "HA32+ XL",
          "misura": "195/55 R16",
          "stagione": "4stagioni",
          "prezzo": "93,33 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ku-ha32xl.-c92d56f3655105147d64705d66d43ba7.jpg",
          "url": "https://gommepro.it/prodotto/kumho-ha32_xl-195-55-16-all_season-xl-snow_grip-8808956348014/"
        },
        {
          "id": 4665127,
          "ean": "8594186482689",
          "marca": "TOMKET",
          "modello": "ALLYEAR 3 XL (3PMSF certif)",
          "misura": "195/55 R16",
          "stagione": "4stagioni",
          "prezzo": "58,93 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/tomket_allyear_3_3pmsf_-front-65ee17db490b5da2d082bbf6f918e75b.jpg",
          "url": "https://gommepro.it/prodotto/tomket-allyear_3_xl_3pmsf_certif-195-55-16-all_season-xl-8594186482689/"
        }
      ]
    },
    {
      "ordine": 18,
      "id": "vetrina_jaquwp",
      "titolo": "Dal nostro negozio online",
      "durata_sec": 12,
      "attivo": true,
      "is_vetrina_gommepro": true,
      "box": 4,
      "ogni_ore": 1,
      "sito": "https://gommepro.it",
      "testo_evidenza": "MIGLIOR PREZZO",
      "colori": {
        "invernali": "#1e6fd9",
        "estive": "#e08a00",
        "4stagioni": "#2e9e4f"
      },
      "marche_fisse": [
        "Hankook",
        "Continental",
        "Pirelli"
      ],
      "regole": [
        {
          "stagione": "estive",
          "misure": [
            "205/55 R16"
          ],
          "periodi": [
            {
              "dal": "16/04",
              "al": "14/10"
            }
          ]
        },
        {
          "stagione": "invernali",
          "misure": [
            "205/55 R16"
          ],
          "periodi": [
            {
              "dal": "15/10",
              "al": "15/04"
            }
          ]
        }
      ],
      "prodotti": [
        {
          "id": 4695586,
          "ean": "3528706227325",
          "marca": "MICHELIN",
          "modello": "PRIMACY 3",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "133,25 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/michelin_primacy_3-933a4b5296eabd7a4b4d9f65a872e534.jpg",
          "url": "https://gommepro.it/prodotto/michelin-primacy_3-205-55-16-estive-run_flat-3528706227325/"
        },
        {
          "id": 4682418,
          "ean": "4019238393453",
          "marca": "CONTINENTAL",
          "modello": "ULTRACONTACT NXT",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "121,93 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/co-ucnxtxl-c736b5122071db60bd63564c4d21b00e.jpg",
          "url": "https://gommepro.it/prodotto/continental-ultracontact_nxt-205-55-16-estive-xl-4019238393453/"
        },
        {
          "id": 4679660,
          "ean": "3528701323398",
          "marca": "MICHELIN",
          "modello": "PRIMACY 5 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "106,95 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/michelin-primacy5-08595194ca5736ad2e04bb5382505f93.jpg",
          "url": "https://gommepro.it/prodotto/michelin-primacy_5_xl-205-55-16-estive-xl-3528701323398/"
        },
        {
          "id": 4677545,
          "ean": "3528700484199",
          "marca": "MICHELIN",
          "modello": "E PRIMACY",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "106,76 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/michelin_e_primacy-531fc611ac9b69f0dbc914323515a70e.jpg",
          "url": "https://gommepro.it/prodotto/michelin-e_primacy-205-55-16-estive-3528700484199/"
        },
        {
          "id": 4677537,
          "ean": "4019238545555",
          "marca": "CONTINENTAL",
          "modello": "ContiEcoContact 5",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "100,36 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/co-eco5-cd40b16963459aec9e7b23670e9b49da.jpg",
          "url": "https://gommepro.it/prodotto/continental-contiecocontact_5-205-55-16-estive-4019238545555/"
        },
        {
          "id": 4675008,
          "ean": "4019238066616",
          "marca": "CONTINENTAL",
          "modello": "ULTRACONTACT FR",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "96,54 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/co_ultra_contact-d5bc6ab2a443e313db4f2f64f9097f20.jpg",
          "url": "https://gommepro.it/prodotto/continental-ultracontact_fr-205-55-16-estive-4019238066616/"
        },
        {
          "id": 4674487,
          "ean": "4019238066593",
          "marca": "CONTINENTAL",
          "modello": "ULTRACONTACT FR",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "94,46 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/co_ultra_contact-d5bc6ab2a443e313db4f2f64f9097f20.jpg",
          "url": "https://gommepro.it/prodotto/continental-ultracontact_fr-205-55-16-estive-4019238066593/"
        },
        {
          "id": 4673342,
          "ean": "5452000682307",
          "marca": "GOODYEAR",
          "modello": "EFFICIENTGRIP PERFORMANCE-2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "92,34 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/gy-effigrip-perf-2-50760514bfa3e889ae70a115eda6ab84.jpg",
          "url": "https://gommepro.it/prodotto/goodyear-efficientgrip_performance2-205-55-16-estive-5452000682307/"
        },
        {
          "id": 4671273,
          "ean": "4968814801489",
          "marca": "YOKOHAMA",
          "modello": "C-DRIVE-2 AC02",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "84,22 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/c-drive-2-ac02-f5cb952b554aa2d3c5e657e461a60565.jpg",
          "url": "https://gommepro.it/prodotto/yokohama-cdrive2_ac02-205-55-16-estive-4968814801489/"
        },
        {
          "id": 4670308,
          "ean": "8808563545660",
          "marca": "HANKOOK",
          "modello": "K135",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "81,56 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/han-k135-cfba93fa0511feb0c612594b9d049501.jpg",
          "url": "https://gommepro.it/prodotto/hankook-k135-205-55-16-estive-8808563545660/"
        },
        {
          "id": 4670303,
          "ean": "6939801704340",
          "marca": "COMFORSER",
          "modello": "CF1100",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "88,01 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l17105-ba2906db6430fbcbb7a3925719951145.jpg",
          "url": "https://gommepro.it/prodotto/comforser-cf1100-205-55-16-estive-xl-6939801704340/"
        },
        {
          "id": 4669908,
          "ean": "8019227443356",
          "marca": "PIRELLI",
          "modello": "CINTURATO P1",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "82,45 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/pi-p1cint-5ee57864ebe5104af95ca3f9309ec059.jpg",
          "url": "https://gommepro.it/prodotto/pirelli-cinturato_p1-205-55-16-estive-8019227443356/"
        },
        {
          "id": 4669607,
          "ean": "5452000683090",
          "marca": "SAVA",
          "modello": "Intensa HP 2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "75,15 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TL28O0115-c0b3cf6cfd386e1e2809cab1c8dd31c7.png",
          "url": "https://gommepro.it/prodotto/sava-intensa_hp_2-205-55-16-estive-5452000683090/"
        },
        {
          "id": 4669455,
          "ean": "8808563527666",
          "marca": "HANKOOK",
          "modello": "VENTUS PRIME4",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "79,95 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l16733-ad73aeab35d6f289889b1757d58a6048.jpg",
          "url": "https://gommepro.it/prodotto/hankook-ventus_prime4-205-55-16-estive-8808563527666/"
        },
        {
          "id": 4669427,
          "ean": "3286342147413",
          "marca": "FIRESTONE",
          "modello": "ROADHAWK 2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "77,87 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l17960-1564f110f48b60461acaf5a8e49d054a.jpg",
          "url": "https://gommepro.it/prodotto/firestone-roadhawk_2-205-55-16-estive-xl-3286342147413/"
        },
        {
          "id": 4668915,
          "ean": "4718022009685",
          "marca": "NANKANG",
          "modello": "NEV-1",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "78,47 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/307688825_NEV1-27cad0d1ec8d8ead5e21b047c776b5e4.jpg",
          "url": "https://gommepro.it/prodotto/nankang-nev1-205-55-16-estive-4718022009685/"
        },
        {
          "id": 4668189,
          "ean": "8808563545806",
          "marca": "HANKOOK",
          "modello": "K135 VENTUS PRIME-4",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "76,43 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/pic_16733g-8873601fa6660107661af9859c945fd2.jpg",
          "url": "https://gommepro.it/prodotto/hankook-k135_ventus_prime4-205-55-16-estive-8808563545806/"
        },
        {
          "id": 4668109,
          "ean": "3528700614442",
          "marca": "BF-GOODRICH",
          "modello": "ADVANTAGE 2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "77,85 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/291968837_ADVANTAGE2-33acdf6218aa08fc2c636561810b2c39.png",
          "url": "https://gommepro.it/prodotto/bfgoodrich-advantage_2-205-55-16-estive-3528700614442/"
        },
        {
          "id": 4668062,
          "ean": "8808563545653",
          "marca": "HANKOOK",
          "modello": "K135",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "73,97 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/han-k135-cfba93fa0511feb0c612594b9d049501.jpg",
          "url": "https://gommepro.it/prodotto/hankook-k135-205-55-16-estive-8808563545653/"
        },
        {
          "id": 4667606,
          "ean": "8714692805950",
          "marca": "APOLLO",
          "modello": "Aspire 4G+",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "70,03 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TL67O0089-87f220e54d45ced92889af9fe8bcfabf.png",
          "url": "https://gommepro.it/prodotto/apollo-aspire_4g-205-55-16-estive-xl-8714692805950/"
        },
        {
          "id": 4667507,
          "ean": "4718022013835",
          "marca": "NANKANG",
          "modello": "NS-20 NOBLE SPORT",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "74,63 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l6840-82f536c15156cd0edaf80efc374abe3a.jpg",
          "url": "https://gommepro.it/prodotto/nankang-ns20_noble_sport-205-55-16-estive-xl-4718022013835/"
        },
        {
          "id": 4666745,
          "ean": "8808563450490",
          "marca": "HANKOOK",
          "modello": "K435 Kinergy Eco2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "73,99 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/pic_13414g-45fab0a59934e84f17703848724148ca.jpg",
          "url": "https://gommepro.it/prodotto/hankook-k435_kinergy_eco2-205-55-16-estive-8808563450490/"
        },
        {
          "id": 4666674,
          "ean": "8807622103421",
          "marca": "NEXEN",
          "modello": "N FERA PRIMUS XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "72,43 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ne-nfprimus-36b5db08ff55fcb4400ec5c776b19024.jpg",
          "url": "https://gommepro.it/prodotto/nexen-n_fera_primus_xl-205-55-16-estive-xl-8807622103421/"
        },
        {
          "id": 4666289,
          "ean": "3286342147512",
          "marca": "FIRESTONE",
          "modello": "ROADHAWK 2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "71,16 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l17960-1564f110f48b60461acaf5a8e49d054a.jpg",
          "url": "https://gommepro.it/prodotto/firestone-roadhawk_2-205-55-16-estive-3286342147512/"
        },
        {
          "id": 4666022,
          "ean": "5452000683083",
          "marca": "SAVA",
          "modello": "Intensa HP 2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "72,15 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TL28O0114-0b62cb83a9cd478c5580cb6e7571caa9.png",
          "url": "https://gommepro.it/prodotto/sava-intensa_hp_2-205-55-16-estive-5452000683083/"
        },
        {
          "id": 4665253,
          "ean": "8808956297350",
          "marca": "KUMHO",
          "modello": "HS52 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "69,48 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ku_hs52-9b74ad072db88c3dd86251564b981cec.jpg",
          "url": "https://gommepro.it/prodotto/kumho-hs52_xl-205-55-16-estive-xl-8808956297350/"
        },
        {
          "id": 4664757,
          "ean": "8808956238490",
          "marca": "KUMHO",
          "modello": "ES31 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "67,10 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ku_es31-bf6a1f8eea4a83704afa1b3017313ea9.jpg",
          "url": "https://gommepro.it/prodotto/kumho-es31_xl-205-55-16-estive-xl-8808956238490/"
        },
        {
          "id": 4664322,
          "ean": "8714692998621",
          "marca": "APOLLO",
          "modello": "Alnac 4G",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "62,65 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TL67O0288-6bf9c8fb24230330706d583c88b439c5.png",
          "url": "https://gommepro.it/prodotto/apollo-alnac_4g-205-55-16-estive-8714692998621/"
        },
        {
          "id": 4664078,
          "ean": "8808956238476",
          "marca": "KUMHO",
          "modello": "ES31",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "66,37 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ku_es31-bf6a1f8eea4a83704afa1b3017313ea9.jpg",
          "url": "https://gommepro.it/prodotto/kumho-es31-205-55-16-estive-xl-8808956238476/"
        },
        {
          "id": 4663664,
          "ean": "8807622168888",
          "marca": "NEXEN",
          "modello": "N FERA SU4",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "67,19 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ne_n_fera_su4-3ef537bff52ae50db2d1348aca0de58a.jpg",
          "url": "https://gommepro.it/prodotto/nexen-n_fera_su4-205-55-16-estive-8807622168888/"
        },
        {
          "id": 4662791,
          "ean": "8680830001525",
          "marca": "PETLAS",
          "modello": "VELOX SPORT PT741 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "62,62 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/pe_velox_sport_pt741-c6b4f6f094faf574c248b2300813237f.jpg",
          "url": "https://gommepro.it/prodotto/petlas-velox_sport_pt741_xl-205-55-16-estive-xl-8680830001525/"
        },
        {
          "id": 4662763,
          "ean": "8807622193088",
          "marca": "NEXEN",
          "modello": "N BLUE S AO",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "65,51 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ne-nblue-s_-bdd3561462ee235da28c6898a188e27c.jpg",
          "url": "https://gommepro.it/prodotto/nexen-n_blue_s_ao-205-55-16-estive-8807622193088/"
        },
        {
          "id": 4662725,
          "ean": "6932877142948",
          "marca": "GITI",
          "modello": "GitiSynergy H2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "63,05 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l16091-32e2fe6727d3ee41e982dcc44ce9cf7e.jpg",
          "url": "https://gommepro.it/prodotto/giti-gitisynergy_h2-205-55-16-estive-xl-6932877142948/"
        },
        {
          "id": 4662590,
          "ean": "8594186481491",
          "marca": "TOMKET",
          "modello": "ECO 3",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "69,76 €",
          "img": "https://b2b.interservicetrade.com/archive_img/tomket_eco_3-front.jpg",
          "url": "https://gommepro.it/prodotto/tomket-eco_3-205-55-16-estive-8594186481491/"
        },
        {
          "id": 4662245,
          "ean": "8807622235351",
          "marca": "NEXEN",
          "modello": "N BLUE S",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "64,25 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ne-nblue-s_-bdd3561462ee235da28c6898a188e27c.jpg",
          "url": "https://gommepro.it/prodotto/nexen-n_blue_s-205-55-16-estive-8807622235351/"
        },
        {
          "id": 4662219,
          "ean": "6932877143136",
          "marca": "GITI",
          "modello": "GitiSynergy H2",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "61,85 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l16091-32e2fe6727d3ee41e982dcc44ce9cf7e.jpg",
          "url": "https://gommepro.it/prodotto/giti-gitisynergy_h2-205-55-16-estive-6932877143136/"
        },
        {
          "id": 4661780,
          "ean": "8807622234828",
          "marca": "NEXEN",
          "modello": "N BLUE HD PLUS",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "64,99 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/ne_n_blue_hd_plus-91c41c686a3ef1c813aff39ceed076d9.jpg",
          "url": "https://gommepro.it/prodotto/nexen-n_blue_hd_plus-205-55-16-estive-8807622234828/"
        },
        {
          "id": 4661747,
          "ean": "6959956700400",
          "marca": "LINGLONG",
          "modello": "GREEN-MAX HP010",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "61,89 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/linglong_greenmax_hp010-9255cacfbe588c7c99ad07f513764038.jpg",
          "url": "https://gommepro.it/prodotto/linglong-greenmax_hp010-205-55-16-estive-6959956700400/"
        },
        {
          "id": 4660935,
          "ean": "8808563627854",
          "marca": "OPTIMO",
          "modello": "OPTIMO GT OK41",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "60,61 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/2042145134_OPTIMOGTOK41-9a3b5760a80b1877a9271558a56be0f4.jpeg",
          "url": "https://gommepro.it/prodotto/optimo-optimo_gt_ok41-205-55-16-estive-8808563627854/"
        },
        {
          "id": 4660263,
          "ean": "8848183006691",
          "marca": "FIREMAX",
          "modello": "FM601",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "46,81 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/163956480_FM601-b65b4a2ed0d7ff5f1d4a2eb2dcb56330.jpg",
          "url": "https://gommepro.it/prodotto/firemax-fm601-205-55-16-estive-8848183006691/"
        },
        {
          "id": 4659986,
          "ean": "8605068712210",
          "marca": "LINGLONG",
          "modello": "COMFORT MASTER",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "57,30 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/1789756264_COMFORTMASTER-ae996df47cb219370fd7c3d80b0195db.jpeg",
          "url": "https://gommepro.it/prodotto/linglong-comfort_master-205-55-16-estive-8605068712210/"
        },
        {
          "id": 4658944,
          "ean": "6924064120303",
          "marca": "LANVIGATOR",
          "modello": "COMFORT-II",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "47,37 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l16071-1f351e0b74c85a6a03bc7fa73eb36009.jpg",
          "url": "https://gommepro.it/prodotto/lanvigator-comfortii-205-55-16-estive-6924064120303/"
        },
        {
          "id": 4658723,
          "ean": "4717622042078",
          "marca": "NANKANG",
          "modello": "ECO-2+",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "52,80 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/green-sport-eco-2-21cfb7f8cfa6f8d4a4631560cb80d6ec.jpg",
          "url": "https://gommepro.it/prodotto/nankang-eco2-205-55-16-estive-4717622042078/"
        },
        {
          "id": 4658250,
          "ean": "6959956771264",
          "marca": "LINGLONG",
          "modello": "COMFORT MASTER",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "52,48 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/1779635882_CONFORTMASTER-c30ee8906f02de322b1c50a17c612491.png",
          "url": "https://gommepro.it/prodotto/linglong-comfort_master-205-55-16-estive-6959956771264/"
        },
        {
          "id": 4658117,
          "ean": "6950306300394",
          "marca": "SUNNY",
          "modello": "NP226 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "49,93 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/sunny-np226-bdf17cf84996379e4bba6118a9565f09.jpg",
          "url": "https://gommepro.it/prodotto/sunny-np226_xl-205-55-16-estive-xl-6950306300394/"
        },
        {
          "id": 4657967,
          "ean": "6959956771271",
          "marca": "LINGLONG",
          "modello": "COMFORT MASTER",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "52,18 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l16674-c2d7990faf79b03555fe08782105891e.jpg",
          "url": "https://gommepro.it/prodotto/linglong-comfort_master-205-55-16-estive-6959956771271/"
        },
        {
          "id": 4657912,
          "ean": "8848180002214",
          "marca": "SUNNY",
          "modello": "NP226 XL",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "49,93 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/sunny-np226-bdf17cf84996379e4bba6118a9565f09.jpg",
          "url": "https://gommepro.it/prodotto/sunny-np226_xl-205-55-16-estive-xl-8848180002214/"
        },
        {
          "id": 4657306,
          "ean": "6939801730912",
          "marca": "ROADCRUZA",
          "modello": "RA510",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "45,47 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l18027-e37bba66d2ab07e0b96b745b6d476d76.jpg",
          "url": "https://gommepro.it/prodotto/roadcruza-ra510-205-55-16-estive-6939801730912/"
        },
        {
          "id": 4657103,
          "ean": "8594186480043",
          "marca": "TOMKET",
          "modello": "SPORT",
          "misura": "205/55 R16",
          "stagione": "estive",
          "prezzo": "50,98 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/tomket_sport-front-5c2c73383fdc9f47aaab980face50ecb.jpg",
          "url": "https://gommepro.it/prodotto/tomket-sport-205-55-16-estive-8594186480043/"
        },
        {
          "id": 4680841,
          "ean": "4038526070258",
          "marca": "DUNLOP",
          "modello": "WINTER XL",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "103,05 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/WINTER_DUNLOP-1995132b3a12c29271b5a83d8acc11d7.jpg",
          "url": "https://gommepro.it/prodotto/dunlop-winter_xl-205-55-16-invernali-xl-snow_grip-4038526070258/"
        },
        {
          "id": 4673752,
          "ean": "6419440567822",
          "marca": "NOKIAN",
          "modello": "SNOWPROOF 2",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "90,41 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/nk-snowproof2-410c5ac65c9c1995f8b7fda121111ba6.jpg",
          "url": "https://gommepro.it/prodotto/nokian-snowproof_2-205-55-16-invernali-snow_grip-6419440567822/"
        },
        {
          "id": 4672347,
          "ean": "4024068001614",
          "marca": "UNIROYAL",
          "modello": "WinterExpert",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "90,44 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/pic_16233g-40b5cc452bf854862d603f2824bca709.jpg",
          "url": "https://gommepro.it/prodotto/uniroyal-winterexpert-205-55-16-invernali-4024068001614/"
        },
        {
          "id": 4665549,
          "ean": "5420068626632",
          "marca": "IMPERIAL",
          "modello": "SnowDragon UHP",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "72,36 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/TZ38O0106-0fc2a349cf3dbbd10c7a880b855a7e8f.png",
          "url": "https://gommepro.it/prodotto/imperial-snowdragon_uhp-205-55-16-invernali-snow_grip-5420068626632/"
        },
        {
          "id": 4662890,
          "ean": "3528705464066",
          "marca": "TAURUS",
          "modello": "WINTER",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "64,10 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l14129-68856060610a3e6d26f1afe18f5accbb.jpg",
          "url": "https://gommepro.it/prodotto/taurus-winter-205-55-16-invernali-snow_grip-3528705464066/"
        },
        {
          "id": 4661731,
          "ean": "8594186484218",
          "marca": "TOMKET",
          "modello": "SNOWROAD",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "62,22 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/tomket_snowroad-front-4ed46990263b8c702da250f74b0117e6.jpg",
          "url": "https://gommepro.it/prodotto/tomket-snowroad-205-55-16-invernali-snow_grip-8594186484218/"
        },
        {
          "id": 4661466,
          "ean": "8594186480784",
          "marca": "TOMKET",
          "modello": "SNOWROAD PRO 3 XL",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "61,94 €",
          "img": "https://b2b.interservicetrade.com/archive_img/tomket_snowroad_pro_3-front.jpg",
          "url": "https://gommepro.it/prodotto/tomket-snowroad_pro_3_xl-205-55-16-invernali-xl-8594186480784/"
        },
        {
          "id": 4659327,
          "ean": "6924064101821",
          "marca": "LANVIGATOR",
          "modello": "CATCHSNOW",
          "misura": "205/55 R16",
          "stagione": "invernali",
          "prezzo": "54,08 €",
          "img": "https://gommepro.it/wp-content/uploads/external-images/67357l14264-6e0af130692719dbc52f9c3cfcaa77e3.jpg",
          "url": "https://gommepro.it/prodotto/lanvigator-catchsnow-205-55-16-invernali-xl-snow_grip-6924064101821/"
        }
      ]
    },
    {
      "ordine": 19,
      "id": "meteo_mappano",
      "titolo": "Meteo Locale • Mappano (TO)",
      "durata_sec": 7,
      "attivo": true,
      "is_meteo_page": true
    },
    {
      "ordine": 20,
      "id": "orari_prenotazione",
      "titolo": "Orari di Apertura &amp; Prenotazioni Online",
      "durata_sec": 8,
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
