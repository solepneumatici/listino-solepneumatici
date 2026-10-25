/* ==========================================================================
   INTRO ANIMATA DEL LISTINO
   1) il logo si compone da tanti frammenti
   2) resta fermo un momento, con la firma CRview
   3) si ingrandisce e si scompone: dietro parte il listino

   Si accende/spegne e si regola da listino_data.js, nella voce "intro".
   Gli altri parametri (tempi, numero di pezzi) sono qui sotto.
   Compatibile con browser meno recenti (niente funzioni nuove).
   ========================================================================== */
(function () {
    // ----- PARAMETRI (si possono cambiare) ---------------------------------
    var COLS = 10;               // colonne di frammenti
    var ROWS = 8;                // righe di frammenti (COLS × ROWS non oltre 100)
    var ASSEMBLE_SEC = 1.7;      // secondi che serve a ogni pezzo per arrivare al suo posto
    var MAX_DELAY_SEC = 0.5;     // ritardo casuale massimo di partenza dei pezzi
    var SIGN_IN_AT = 2.5;        // da quanti secondi compare la firma CRview
    var SCATTER_AT = 4.4;        // da quanti secondi il logo inizia a scomporsi
    var SCATTER_SEC = 2.4;       // quanto dura la scomposizione
    var SCATTER_FORCE = 1;       // forza della dispersione (0.5 = poca, 2 = molta)
    var SCATTER_ROTATION = 220;  // rotazione massima dei pezzi, in gradi
    var GROW_TO = 0.3;           // di quanto si ingrandisce il logo (0.3 = +30%)
    var LOGO_FILE = 'images/logo-intro.png';
    var SIGN_FILE = 'images/crview-firma.png';
    var LOGO_ASPECT = 1000 / 1018;   // larghezza ÷ altezza del PNG del logo
    var LOGO_HEIGHT_VH = 66;         // altezza del logo, in % dell'altezza dello schermo
    // ------------------------------------------------------------------------

    var cfg = (typeof LISTINO_DATA !== 'undefined' && LISTINO_DATA.intro) ? LISTINO_DATA.intro : {};
    var overlay = document.getElementById('intro');
    var finito = false, dopo = [];

    function fine() {
        if (finito) return;
        finito = true;
        if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
        var l = dopo; dopo = [];
        for (var i = 0; i < l.length; i++) { try { l[i](); } catch (e) {} }
    }
    // Il listino (app.js) chiede di essere avvisato quando l'intro è finita
    window.CRVIEW_INTRO = { dopo: function (f) { if (finito) f(); else dopo.push(f); } };

    if (!overlay || cfg.attiva === false) { fine(); return; }

    var logoSrc = cfg.logo || LOGO_FILE;
    var firma = cfg.firma_crview !== false;

    // Aspetto che il logo sia caricato: se non si carica, salto l'intro (il listino parte lo stesso)
    var img = new Image();
    var timeoutCarica = setTimeout(fine, 4000);
    img.onerror = function () { clearTimeout(timeoutCarica); fine(); };
    img.onload = function () { clearTimeout(timeoutCarica); try { avvia(); } catch (e) { fine(); } };
    img.src = logoSrc;

    function rnd(a, b) { return a + Math.random() * (b - a); }
    function clamp(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
    function smooth(x) { x = clamp(x); return x * x * (3 - 2 * x); }

    function avvia() {
        var cols = COLS, rows = ROWS;
        while (cols * rows > 100) { if (cols > rows) cols--; else rows--; }

        var aspect = img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : LOGO_ASPECT;
        var H = Math.round(window.innerHeight * LOGO_HEIGHT_VH / 100);
        var W = Math.round(H * aspect);
        if (W > window.innerWidth * 0.9) { W = Math.round(window.innerWidth * 0.9); H = Math.round(W / aspect); }

        overlay.innerHTML =
            '<div class="i-veil"></div><div class="i-glow"></div><div class="i-logo" id="i-logo"></div>' +
            (firma ? '<div class="i-firma"><span>powered by</span><img src="' + (cfg.firma_file || SIGN_FILE) + '" alt="CRview"></div>' : '');

        var logo = document.getElementById('i-logo');
        logo.style.width = W + 'px';
        logo.style.height = H + 'px';
        logo.style.marginLeft = (-W / 2) + 'px';
        logo.style.marginTop = (-H / 2) + 'px';
        logo.style.setProperty('--force', SCATTER_FORCE);

        var frag = document.createDocumentFragment();
        for (var r = 0; r < rows; r++) {
            for (var c = 0; c < cols; c++) {
                // Bordi a pixel interi, con 1px di sovrapposizione: niente righine tra i pezzi
                var x0 = Math.round(c * W / cols), x1 = Math.round((c + 1) * W / cols);
                var y0 = Math.round(r * H / rows), y1 = Math.round((r + 1) * H / rows);
                var d = document.createElement('div');
                d.className = 'i-frag';
                var s = d.style;
                s.left = x0 + 'px';
                s.top = y0 + 'px';
                s.width = (x1 - x0 + (c < cols - 1 ? 1 : 0)) + 'px';
                s.height = (y1 - y0 + (r < rows - 1 ? 1 : 0)) + 'px';
                s.backgroundImage = 'url("' + logoSrc + '")';
                s.backgroundSize = W + 'px ' + H + 'px';
                s.backgroundPosition = (-x0) + 'px ' + (-y0) + 'px';

                s.setProperty('--sx', Math.round(rnd(-60, 60)) + 'vw');
                s.setProperty('--sy', Math.round(rnd(-70, 70)) + 'vh');
                s.setProperty('--sr', Math.round(rnd(-540, 540)) + 'deg');
                s.setProperty('--dl', rnd(0, MAX_DELAY_SEC).toFixed(3) + 's');
                s.setProperty('--assemble', ASSEMBLE_SEC + 's');

                var cx = ((c + .5) / cols - .5) * 2, cy = ((r + .5) / rows - .5) * 2;
                s.setProperty('--dx', (cx * 55 * rnd(.7, 1.3) + rnd(-12, 12)).toFixed(1) + 'vw');
                s.setProperty('--dy', (cy * 45 * rnd(.7, 1.3) + rnd(-18, 18)).toFixed(1) + 'vh');
                s.setProperty('--dr', Math.round(rnd(-SCATTER_ROTATION, SCATTER_ROTATION)) + 'deg');
                frag.appendChild(d);
            }
        }
        logo.appendChild(frag);

        // Tempo: aggiorno solo 3 variabili (--g ingrandimento, --e dispersione, --f firma)
        var t0 = null, S = overlay.style;
        function frame(ts) {
            if (finito) return;
            if (t0 === null) t0 = ts;
            var t = (ts - t0) / 1000;
            var e = smooth((t - SCATTER_AT) / SCATTER_SEC);
            var g = smooth((t - SCATTER_AT) / (SCATTER_SEC * 0.6));
            var f = smooth((t - SIGN_IN_AT) / 0.8);
            S.setProperty('--g', (g * GROW_TO / 0.3).toFixed(4));
            S.setProperty('--e', e.toFixed(4));
            S.setProperty('--f', f.toFixed(4));
            if (t >= SCATTER_AT + SCATTER_SEC) { fine(); return; }
            requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    }
})();
