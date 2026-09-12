  function installMatrixDisplayEnhancer() {
    'use strict';

    const CFG = {
        accent:    '#0ff',
        accentGlow:'0 0 5px #0ff, 0 0 10px #0ff',
        panelBg:   '#0a0a1a',
        panelDark: '#05050f',
        text:      '#e0e0ff',
        dim:       '#8888aa',
    };

    const defaults = {
        brightness: 100,
        contrast: 100,
        saturation: 100,
        hue: 0,
        blur: 0,
        sepia: 0,
        invert: 0,
        gamma: 100,
        temperature: 0,
        vignette: 0,
        scanlines: 0,
    };

    let enabled = false;
    try { enabled = localStorage.getItem('mx_display_enabled') === 'true'; } catch(e) {}

    let settings = { ...defaults };
    try {
        const saved = localStorage.getItem('mx_display_settings');
        if (saved) settings = { ...defaults, ...JSON.parse(saved) };
    } catch(e) {}

    // ---- Direct canvas detection (fix for game matches) ----
    let gameCanvas = null;
    let vignetteOverlay = null;
    let scanlinesOverlay = null;

    function findGameCanvas() {
        const canvases = document.querySelectorAll('canvas');
        for (let c of canvases) {
            if (c.width > 100 && c.height > 100) return c;
        }
        return canvases[0] || null;
    }

    function createOverlays() {
        if (!vignetteOverlay) {
            vignetteOverlay = document.createElement('div');
            vignetteOverlay.id = 'mf-vignette';
            vignetteOverlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 2147483640;
                mix-blend-mode: multiply;
            `;
            document.body.appendChild(vignetteOverlay);
        }
        if (!scanlinesOverlay) {
            scanlinesOverlay = document.createElement('div');
            scanlinesOverlay.id = 'mf-scanlines';
            scanlinesOverlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 2147483639;
            `;
            document.body.appendChild(scanlinesOverlay);
        }
    }

    function applyFilters() {
        gameCanvas = findGameCanvas();
        if (!gameCanvas) return;

        const b = +elements.brightness.value;
        const c = +elements.contrast.value;
        const s = +elements.saturation.value;
        const h = +elements.hue.value;
        const bl = +elements.blur.value;
        const sep = +elements.sepia.value;
        const inv = +elements.invert.value;
        const g = +elements.gamma.value;
        const t = +elements.temperature.value;
        const vig = +elements.vignette.value;
        const scan = +elements.scanlines.value;

        const tempSat = Math.min(300, Math.max(0, s + Math.abs(t) * 0.25));
        const tempHue = h + t * 0.2;

        let filterStr = `brightness(${b * (g / 100)}%) contrast(${c}%) saturate(${tempSat}%) hue-rotate(${tempHue}deg) sepia(${sep}%) invert(${inv}%)`;
        if (bl > 0) filterStr += ` blur(${bl * 0.5}px)`;
        gameCanvas.style.filter = filterStr;

        createOverlays();

        // Vignette Effect
        if (vig > 0) {
            const intensity = vig / 100;
            vignetteOverlay.style.background = `radial-gradient(circle, transparent ${30 - vig * 0.3}%, rgba(0,0,0,${intensity * 0.8}) ${70 - vig * 0.4}%)`;
            vignetteOverlay.style.display = 'block';
        } else {
            vignetteOverlay.style.display = 'none';
        }

        // Scanlines Effect
        if (scan > 0) {
            const opacity = scan / 100;
            scanlinesOverlay.style.background = `repeating-linear-gradient(0deg, rgba(0,0,0,${opacity * 0.6}) 0px, rgba(0,0,0,${opacity * 0.6}) 2px, transparent 2px, transparent 4px)`;
            scanlinesOverlay.style.display = 'block';
        } else {
            scanlinesOverlay.style.display = 'none';
        }

        // Update Displays
        if (get('dp-brightness-val')) get('dp-brightness-val').textContent = b + '%';
        if (get('dp-contrast-val')) get('dp-contrast-val').textContent = c + '%';
        if (get('dp-saturation-val')) get('dp-saturation-val').textContent = s + '%';
        if (get('dp-hue-val')) get('dp-hue-val').textContent = h + '°';
        if (get('dp-blur-val')) get('dp-blur-val').textContent = bl.toFixed(1);
        if (get('dp-sepia-val')) get('dp-sepia-val').textContent = sep + '%';
        if (get('dp-invert-val')) get('dp-invert-val').textContent = inv + '%';
        if (get('dp-gamma-val')) get('dp-gamma-val').textContent = g + '%';
        if (get('dp-temperature-val')) get('dp-temperature-val').textContent = (t > 0 ? '+' : '') + t;
        if (get('dp-vignette-val')) get('dp-vignette-val').textContent = vig + '%';
        if (get('dp-scanlines-val')) get('dp-scanlines-val').textContent = scan + '%';

        localStorage.setItem('mx_display_settings', JSON.stringify({
            brightness: b, contrast: c, saturation: s, hue: h,
            blur: bl, sepia: sep, invert: inv, gamma: g, temperature: t,
            vignette: vig, scanlines: scan,
        }));
    }

    // Watch for canvas recreation when game match starts
    function watchForCanvas() {
        const observer = new MutationObserver(() => {
            const newCanvas = findGameCanvas();
            if (newCanvas && newCanvas !== gameCanvas) {
                gameCanvas = newCanvas;
                if (enabled) applyFilters();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
        setInterval(() => {
            const newCanvas = findGameCanvas();
            if (newCanvas && newCanvas !== gameCanvas) {
                gameCanvas = newCanvas;
                if (enabled) applyFilters();
            }
        }, 2000);
    }

    function toTitleCase(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    }

    const panel = document.createElement('div');
    panel.id = 'display-panel';
    panel.innerHTML = `
<div id="dp-header">
  <span id="dp-title">DISPLAY ENHANCER</span>
  <div style="display:flex;gap:6px;align-items:center">
    <span id="dp-ver" style="font-size:9px;color:#0ff">v1.0</span>
    <button id="dp-close">✕</button>
  </div>
</div>

<div id="dp-tabs">
  <button class="dp-tab active" data-tab="display">DISPLAY</button>
  <button class="dp-tab" data-tab="color">COLOR</button>
  <button class="dp-tab" data-tab="effects">EFFECTS</button>
  <button class="dp-tab" data-tab="presets">PRESETS</button>
  <button class="dp-tab" data-tab="info">INFO</button>
</div>

<div class="dp-page active" id="dp-page-display">
  <div class="dp-section">
    <div class="dp-label">LIGHTING</div>
    <div class="dp-row"><label>Brightness</label><input type="range" id="dp-brightness" min="0" max="200" value="${settings.brightness}" step="1"><span class="dp-val" id="dp-brightness-val">${settings.brightness}%</span></div>
    <div class="dp-row"><label>Contrast</label><input type="range" id="dp-contrast" min="0" max="200" value="${settings.contrast}" step="1"><span class="dp-val" id="dp-contrast-val">${settings.contrast}%</span></div>
    <div class="dp-row"><label>Gamma</label><input type="range" id="dp-gamma" min="50" max="200" value="${settings.gamma}" step="1"><span class="dp-val" id="dp-gamma-val">${settings.gamma}%</span></div>
  </div>
  <div class="dp-divider"></div>
  <div class="dp-section">
    <div class="dp-label">FOCUS</div>
    <div class="dp-row"><label>Blur</label><input type="range" id="dp-blur" min="0" max="10" value="${settings.blur}" step="0.1"><span class="dp-val" id="dp-blur-val">${settings.blur}</span></div>
  </div>
</div>

<div class="dp-page" id="dp-page-color">
  <div class="dp-section">
    <div class="dp-label">COLOR TUNING</div>
    <div class="dp-row"><label>Saturation</label><input type="range" id="dp-saturation" min="0" max="300" value="${settings.saturation}" step="1"><span class="dp-val" id="dp-saturation-val">${settings.saturation}%</span></div>
    <div class="dp-row"><label>Hue Rotate</label><input type="range" id="dp-hue" min="0" max="360" value="${settings.hue}" step="1"><span class="dp-val" id="dp-hue-val">${settings.hue}°</span></div>
    <div class="dp-row"><label>Temperature</label><input type="range" id="dp-temperature" min="-100" max="100" value="${settings.temperature}" step="1"><span class="dp-val" id="dp-temperature-val">${settings.temperature > 0 ? '+' : ''}${settings.temperature}</span></div>
  </div>
  <div class="dp-divider"></div>
  <div class="dp-section">
    <div class="dp-label">TONE</div>
    <div class="dp-row"><label>Sepia</label><input type="range" id="dp-sepia" min="0" max="100" value="${settings.sepia}" step="1"><span class="dp-val" id="dp-sepia-val">${settings.sepia}%</span></div>
    <div class="dp-row"><label>Invert</label><input type="range" id="dp-invert" min="0" max="100" value="${settings.invert}" step="1"><span class="dp-val" id="dp-invert-val">${settings.invert}%</span></div>
  </div>
</div>

<div class="dp-page" id="dp-page-effects">
  <div class="dp-section">
    <div class="dp-label">SCREEN EFFECTS</div>
    <div class="dp-row"><label>Vignette</label><input type="range" id="dp-vignette" min="0" max="100" value="${settings.vignette}" step="1"><span class="dp-val" id="dp-vignette-val">${settings.vignette}%</span></div>
    <div class="dp-row"><label>Scanlines</label><input type="range" id="dp-scanlines" min="0" max="100" value="${settings.scanlines}" step="1"><span class="dp-val" id="dp-scanlines-val">${settings.scanlines}%</span></div>
  </div>
</div>

<div class="dp-page" id="dp-page-presets">
  <div class="dp-section">
    <div class="dp-label">QUICK PRESETS</div>
    <div class="dp-grid">
      <button class="dp-preset" data-preset="night">Night Mode</button>
      <button class="dp-preset" data-preset="grayscale">Grayscale</button>
      <button class="dp-preset" data-preset="highcontrast">High Contrast</button>
      <button class="dp-preset" data-preset="filmnoir">Film Noir</button>
      <button class="dp-preset" data-preset="vivid">Vivid Mode</button>
      <button class="dp-preset" data-preset="retro">Retro Tone</button>
      <button class="dp-preset" data-preset="vhs">VHS Glitch</button>
      <button class="dp-preset" data-preset="crt">CRT Monitor</button>
    </div>
  </div>
</div>

<div class="dp-page" id="dp-page-info">
  <div class="dp-card">
    <div class="dp-label">KEYBOARD SHORTCUTS</div>
    <div class="dp-dim">Ctrl+Alt – Toggle panel</div>
  </div>
  <div class="dp-card">
    <div class="dp-label">CREDITS</div>
    <div class="dp-dim">Developed by Itz_Krishna AKA Everlasting<br>Version 1.0 – Neon Edition</div>
  </div>
  <div class="dp-card">
    <a href="https://discord.gg/Ma7pz4R8tw" target="_blank" class="dp-discord">JOIN OUR DISCORD</a>
  </div>
</div>

<div id="dp-footer">
  <button id="dp-reset" class="dp-reset-btn">RESET ALL</button>
</div>

<div id="dp-toast" class="dp-toast"></div>
`;

    document.body.appendChild(panel);

    const style = document.createElement('style');
    style.textContent = `
    #display-panel {
        position: fixed; top: 80px; right: 16px; width: 300px;
        background: ${CFG.panelBg}; color: ${CFG.text};
        border-radius: 16px; border: 1px solid ${CFG.accent};
        box-shadow: 0 8px 28px rgba(0,255,255,0.2), ${CFG.accentGlow};
        font-family: 'Segoe UI', system-ui, sans-serif;
        font-size: 13px; z-index: 2147483647;
        display: none; overflow: hidden;
        resize: both; min-width: 260px; min-height: 420px;
    }
    #display-panel * { box-sizing: border-box; }
    #dp-header {
        display: flex; justify-content: space-between; align-items: center;
        background: ${CFG.panelDark}; padding: 10px 14px;
        border-bottom: 1px solid ${CFG.accent}; cursor: move; user-select: none;
    }
    #dp-title { font-weight: 700; font-size: 13px; color: ${CFG.accent}; text-shadow: 0 0 3px ${CFG.accent}; }
    #dp-close { background: none; border: none; color: #0ff; cursor: pointer; font-size: 16px; padding: 0 4px; }
    #dp-close:hover { color: #fff; text-shadow: 0 0 5px #0ff; }
    #dp-tabs { display: flex; background: #05050f; border-bottom: 1px solid #0ff; }
    .dp-tab {
        flex: 1; padding: 8px 2px; border: none; background: none; color: ${CFG.dim};
        font-size: 10px; font-weight: 600; cursor: pointer; text-transform: uppercase;
    }
    .dp-tab.active { color: ${CFG.accent}; border-bottom: 2px solid ${CFG.accent}; text-shadow: 0 0 3px ${CFG.accent}; }
    .dp-page { display: none; padding: 12px; max-height: 52vh; overflow-y: auto; }
    .dp-page.active { display: block; }
    .dp-section { margin-bottom: 12px; }
    .dp-row { display: flex; align-items: center; gap: 8px; margin: 8px 0; }
    .dp-row label { font-size: 10px; width: 75px; color: ${CFG.dim}; }
    .dp-row input { flex: 1; accent-color: ${CFG.accent}; }
    .dp-row .dp-val { font-size: 10px; width: 40px; text-align: right; color: ${CFG.accent}; font-family: monospace; }
    .dp-label { font-size: 9px; color: ${CFG.accent}; margin-bottom: 6px; letter-spacing: 1px; text-shadow: 0 0 2px ${CFG.accent}; }
    .dp-divider { height: 1px; background: #1a1a2a; margin: 8px 0; }
    .dp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    .dp-preset {
        padding: 8px; background: #111; border: 1px solid #0ff;
        border-radius: 8px; color: ${CFG.text}; font-size: 10px;
        font-weight: 600; cursor: pointer; text-align: center;
        transition: all 0.1s ease;
    }
    .dp-preset.active {
        background: rgba(0, 255, 255, 0.2);
        border-color: #0ff;
        box-shadow: 0 0 8px #0ff;
        color: #0ff;
    }
    .dp-preset:hover { background: #0ff; color: #000; box-shadow: 0 0 6px #0ff; }
    .dp-card {
        background: #0a0a1a; border-radius: 12px; padding: 10px; margin-bottom: 12px;
        border-left: 3px solid ${CFG.accent};
    }
    .dp-dim { font-size: 10px; color: ${CFG.dim}; line-height: 1.5; }
    .dp-discord {
        display: block; text-align: center; text-decoration: none; color: #0ff;
        font-size: 11px; padding: 8px; border-radius: 8px; background: #0a0a1a;
        border: 1px solid #0ff; transition: 0.1s;
    }
    .dp-discord:hover { background: #5865f2; color: #fff; border-color: #fff; box-shadow: 0 0 8px #5865f2; }
    #dp-footer {
        padding: 10px 12px; border-top: 1px solid #1a1a2a;
        background: ${CFG.panelDark};
    }
    .dp-reset-btn {
        width: 100%; padding: 8px; background: #111; border: 1px solid #f66;
        border-radius: 8px; color: #f66; font-size: 11px;
        font-weight: 700; cursor: pointer; text-transform: uppercase;
    }
    .dp-reset-btn:hover { background: #f66; color: #000; box-shadow: 0 0 6px #f66; }
    .dp-toast {
        position: absolute; bottom: 50px; left: 10px; right: 10px;
        background: ${CFG.accent}; color: #000; font-size: 9px;
        padding: 5px; border-radius: 8px; text-align: center;
        opacity: 0; transition: opacity 0.2s; pointer-events: none;
        z-index: 10; font-weight: 500;
    }
    `;
    document.head.appendChild(style);

    const get = (id) => document.getElementById(id);
    const elements = {
        brightness: get('dp-brightness'),
        contrast: get('dp-contrast'),
        saturation: get('dp-saturation'),
        hue: get('dp-hue'),
        blur: get('dp-blur'),
        sepia: get('dp-sepia'),
        invert: get('dp-invert'),
        gamma: get('dp-gamma'),
        temperature: get('dp-temperature'),
        vignette: get('dp-vignette'),
        scanlines: get('dp-scanlines'),
    };

    let toastTimeout = null;
    function showMessage(msg) {
        const toast = get('dp-toast');
        if (!toast) return;
        const formattedMsg = toTitleCase(msg);
        toast.textContent = formattedMsg;
        toast.style.opacity = '1';
        if (toastTimeout) clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => { toast.style.opacity = '0'; }, 1500);
    }

    // Wait for initial canvas and watch for changes
    setTimeout(() => {
        gameCanvas = findGameCanvas();
        if (gameCanvas) applyFilters();
        watchForCanvas();
    }, 1000);

    Object.values(elements).forEach(el => {
        if (el) el.addEventListener('input', () => applyFilters());
    });

    function attachRainbow(slider, min, max) {
        if (!slider) return;
        const update = () => {
            const val = +slider.value;
            const percent = (val - min) / (max - min);
            let color = '#0ff';
            if (percent < 0.2) color = '#8b00ff';
            else if (percent < 0.4) color = '#4b0082';
            else if (percent < 0.6) color = '#0000ff';
            else if (percent < 0.8) color = '#00ff00';
            else if (percent < 1) color = '#ffff00';
            else color = '#ff0000';
            slider.style.setProperty('accent-color', color);
        };
        slider.addEventListener('input', update);
        update();
    }

    attachRainbow(elements.brightness, 0, 200);
    attachRainbow(elements.contrast, 0, 200);
    attachRainbow(elements.saturation, 0, 300);
    attachRainbow(elements.hue, 0, 360);
    attachRainbow(elements.temperature, -100, 100);
    attachRainbow(elements.vignette, 0, 100);
    attachRainbow(elements.scanlines, 0, 100);

    const presets = {
        night: { brightness: 60, contrast: 110, saturation: 60, sepia: 10, temperature: -30 },
        grayscale: { saturation: 0 },
        highcontrast: { brightness: 110, contrast: 180, saturation: 120 },
        filmnoir: { saturation: 0, contrast: 140, sepia: 20, brightness: 85 },
        vivid: { saturation: 220, contrast: 115, brightness: 105 },
        retro: { sepia: 60, hue: 20, saturation: 80, contrast: 90 },
        vhs: { brightness: 110, contrast: 130, saturation: 80, hue: 10, scanlines: 60, vignette: 30 },
        crt: { brightness: 90, contrast: 150, saturation: 90, scanlines: 70, vignette: 25, blur: 0.5 },
    };

    let activePreset = null;

    function applyPreset(name) {
        const preset = presets[name];
        if (!preset) return;

        if (activePreset === name) {
            resetAll();
            activePreset = null;
            document.querySelectorAll('.dp-preset').forEach(btn => btn.classList.remove('active'));
            return;
        }

        document.querySelectorAll('.dp-preset').forEach(btn => btn.classList.remove('active'));
        const clickedBtn = document.querySelector(`.dp-preset[data-preset="${name}"]`);
        if (clickedBtn) clickedBtn.classList.add('active');

        activePreset = name;

        Object.keys(preset).forEach(key => {
            const el = elements[key];
            if (el) el.value = preset[key];
        });
        applyFilters();
        showMessage(`${toTitleCase(name)} Mode`);
    }

    document.querySelectorAll('.dp-preset').forEach(btn => {
        btn.addEventListener('click', () => applyPreset(btn.dataset.preset));
    });

    function resetAll() {
        activePreset = null;
        document.querySelectorAll('.dp-preset').forEach(btn => btn.classList.remove('active'));
        Object.keys(defaults).forEach(key => {
            const el = elements[key];
            if (el) el.value = defaults[key];
        });
        applyFilters();
        showMessage('All Filters Reset');
    }

    const resetBtn = get('dp-reset');
    if (resetBtn) resetBtn.onclick = resetAll;

    document.querySelectorAll('.dp-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            document.querySelectorAll('.dp-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.dp-page').forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            get(`dp-page-${target}`).classList.add('active');
        });
    });

    let dragging = false, dragX = 0, dragY = 0;
    const header = document.getElementById('dp-header');
    header.addEventListener('mousedown', (e) => {
        if (e.target.id === 'dp-close') return;
        dragging = true;
        const rect = panel.getBoundingClientRect();
        dragX = e.clientX - rect.left;
        dragY = e.clientY - rect.top;
        e.preventDefault();
    });
    document.addEventListener('mousemove', (e) => {
        if (!dragging) return;
        let left = e.clientX - dragX;
        let top = e.clientY - dragY;
        left = Math.min(Math.max(0, left), window.innerWidth - panel.offsetWidth);
        top = Math.min(Math.max(0, top), window.innerHeight - panel.offsetHeight);
        panel.style.left = left + 'px';
        panel.style.top = top + 'px';
        panel.style.right = 'auto';
    });
    document.addEventListener('mouseup', () => dragging = false);

    document.getElementById('dp-close').onclick = () => panel.style.display = 'none';

    window.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.altKey) {
            e.preventDefault();
            panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        }
    });

    panel.style.display = 'none';

    console.log('Matrix Display Enhancer v1.0 is working');

  }
