  function installMatrixStopwatch() {
    'use strict';

    // Neon
    const theme = {
        accent: '#0ff',
        accentGlow: '0 0 5px #0ff, 0 0 10px #0ff',
        panelBg: '#0a0a1a',
        panelDark: '#05050f',
        text: '#e0e0ff',
        dim: '#8888aa',
        good: '#0ff',
        warning: '#ffaa44',
        danger: '#ff4444'
    };

    // Settings
    let visible = false;
    let posX = 120, posY = 80;
    let totalElapsedMs = 0;
    let running = false;
    let startTime = 0;
    let timerInterval = null;
    let laps = [];
    let dragActive = false;
    let dragOffsetX = 0, dragOffsetY = 0;

    try {
        visible = localStorage.getItem('mx_sw_visible') !== 'false';
        posX = parseInt(localStorage.getItem('mx_sw_x')) || 120;
        posY = parseInt(localStorage.getItem('mx_sw_y')) || 80;
    } catch(e) {}

    let panel = null;
    let infoModal = null;
    let escHandler = null;

    // Time
    function formatTime(ms) {
        const sign = ms < 0 ? '-' : '';
        let absMs = Math.abs(ms);

        let hours = Math.floor(absMs / 3600000);
        absMs %= 3600000;
        let minutes = Math.floor(absMs / 60000);
        absMs %= 60000;
        let seconds = Math.floor(absMs / 1000);
        absMs %= 1000;

        // Rounding
        let tenths = Math.round(absMs / 100);
        if (tenths >= 10) {
            tenths = 0;
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }

        return `${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${tenths}`;
    }

    function getCurrentElapsed() {
        if (running) return totalElapsedMs + (Date.now() - startTime);
        return totalElapsedMs;
    }

    function updateDisplay() {
        if (!panel) return;
        const elapsed = getCurrentElapsed();
        const display = panel.querySelector('.sw-value');
        if (display) display.textContent = formatTime(elapsed);
    }

    function renderLaps() {
        if (!panel) return;
        const lapList = panel.querySelector('.lap-list');
        if (!lapList) return;
        if (laps.length === 0) {
            lapList.innerHTML = '<div class="lap-empty">No laps recorded</div>';
            return;
        }
        lapList.innerHTML = laps.slice().reverse().map((lap, idx) => {
            const lapNum = laps.length - idx;
            return `
                <div class="lap-item">
                    <span class="lap-num">Lap ${lapNum}</span>
                    <span class="lap-time">${formatTime(lap)}</span>
                </div>
            `;
        }).join('');
    }

    function startTimer() {
        if (running) return;
        startTime = Date.now();
        running = true;
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = setInterval(() => updateDisplay(), 50);
        updateDisplay();
        updateButtons();
    }

    function pauseTimer() {
        if (!running) return;
        totalElapsedMs += Date.now() - startTime;
        running = false;
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = null;
        updateDisplay();
        updateButtons();
    }

    function resetTimer() {
        pauseTimer();             
        totalElapsedMs = 0;
        laps = [];
        updateDisplay();           
        renderLaps();
        updateButtons();
    }

    function recordLap() {
        if (!running && totalElapsedMs === 0) return;
        const elapsed = getCurrentElapsed();
        laps.push(elapsed);
        renderLaps();
        updateButtons();
    }

    function updateButtons() {
        if (!panel) return;
        const startBtn = panel.querySelector('.btn-start');
        const lapBtn = panel.querySelector('.btn-lap');
        const resetBtn = panel.querySelector('.btn-reset');

        if (startBtn) {
            if (running) {
                startBtn.textContent = 'PAUSE';
                startBtn.style.background = theme.warning;
                startBtn.style.color = '#000';
            } else {
                startBtn.textContent = totalElapsedMs === 0 ? 'START' : 'RESUME';
                startBtn.style.background = theme.accent;
                startBtn.style.color = '#000';
            }
        }
        if (lapBtn) {
            const disabled = (!running && totalElapsedMs === 0);
            lapBtn.disabled = disabled;
            lapBtn.style.pointerEvents = disabled ? 'none' : 'auto';
            lapBtn.style.opacity = disabled ? '0.4' : '1';
        }
        if (resetBtn) {
            const disabled = (totalElapsedMs === 0 && laps.length === 0);
            resetBtn.disabled = disabled;
            resetBtn.style.pointerEvents = disabled ? 'none' : 'auto';
            resetBtn.style.opacity = disabled ? '0.4' : '1';
        }
    }

    // Info
    function buildInfoModal() {
        if (infoModal) infoModal.remove();
        if (escHandler) {
            document.removeEventListener('keydown', escHandler);
            escHandler = null;
        }

        infoModal = document.createElement('div');
        infoModal.id = 'sw-info-modal';
        infoModal.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            width: 320px; background: ${theme.panelBg}; border: 1px solid ${theme.accent};
            border-radius: 16px; z-index: 2147483648;
            font-family: 'Segoe UI', system-ui, sans-serif;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5), ${theme.accentGlow};
            backdrop-filter: blur(12px);
        `;
        infoModal.innerHTML = `
            <div style="padding: 14px 18px; border-bottom: 1px solid ${theme.accent}; background: ${theme.panelDark}; border-radius: 16px 16px 0 0; display: flex; justify-content: space-between;">
                <span style="color: ${theme.accent}; font-weight: bold; font-size: 14px;">ℹ️ INFO</span>
                <button id="sw-info-close" style="background:none; border:none; color:${theme.dim}; cursor:pointer; font-size:18px;">✕</button>
            </div>
            <div style="padding: 18px;">
                <div style="margin-bottom: 16px;">
                    <div style="color: ${theme.accent}; font-size: 11px; font-weight: bold; margin-bottom: 8px;">HOW TO USE</div>
                    <div style="color: ${theme.text}; font-size: 11px; line-height: 1.6;">
                        • START/PAUSE - Start or pause stopwatch<br>
                        • LAP - Record current lap time<br>
                        • RESET - Reset all timers and laps<br>
                        • Drag from top bar to move panel<br>
                        • Alt+K - Show/hide stopwatch
                    </div>
                </div>
                <div style="margin-bottom: 16px;">
                    <div style="color: ${theme.accent}; font-size: 11px; font-weight: bold; margin-bottom: 8px;">SHORTCUTS</div>
                    <div style="color: ${theme.text}; font-size: 11px; line-height: 1.6;">
                        • Alt+K - Toggle stopwatch<br>
                        • Escape - Close this info window
                    </div>
                </div>
                <div style="margin-bottom: 16px;">
                    <div style="color: ${theme.accent}; font-size: 11px; font-weight: bold; margin-bottom: 8px;">CREDITS</div>
                    <div style="color: ${theme.text}; font-size: 11px; line-height: 1.6;">
                        Developed by Itz_Krishna AKA Everlasting<br>
                        Version 1.0 -
                    </div>
                </div>
                <a href="https://discord.gg/Ma7pz4R8tw" target="_blank" style="display: block; text-align: center; background: #5865f2; color: white; text-decoration: none; padding: 8px; border-radius: 8px; font-size: 12px; font-weight: bold; margin-top: 8px;"> JOIN OUR DISCORD</a>
            </div>
        `;
        document.body.appendChild(infoModal);

        const closeInfo = () => {
            if (infoModal) {
                infoModal.remove();
                infoModal = null;
            }
            if (escHandler) {
                document.removeEventListener('keydown', escHandler);
                escHandler = null;
            }
        };

        const closeBtn = document.getElementById('sw-info-close');
        if (closeBtn) closeBtn.onclick = closeInfo;
        infoModal.onclick = (e) => { if (e.target === infoModal) closeInfo(); };

        escHandler = (e) => {
            if (e.key === 'Escape' && infoModal) {
                closeInfo();
            }
        };
        document.addEventListener('keydown', escHandler);
    }

    function showInfo() {
        if (infoModal) {
            if (escHandler) document.removeEventListener('keydown', escHandler);
            infoModal.remove();
            infoModal = null;
            escHandler = null;
        }
        buildInfoModal();
    }

    // Drag
    function onMouseMove(e) {
        if (!dragActive) return;
        let left = e.clientX - dragOffsetX;
        let top = e.clientY - dragOffsetY;
        left = Math.min(Math.max(0, left), window.innerWidth - panel.offsetWidth);
        top = Math.min(Math.max(0, top), window.innerHeight - panel.offsetHeight);
        panel.style.left = left + 'px';
        panel.style.top = top + 'px';
    }

    function onMouseUp() {
        if (!dragActive) return;
        dragActive = false;
        const rect = panel.getBoundingClientRect();
        posX = rect.left; posY = rect.top;
        localStorage.setItem('mx_sw_x', posX);
        localStorage.setItem('mx_sw_y', posY);
        if (panel) panel.style.cursor = 'grab';
    }

    function attachDragEvents() {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    function buildPanel() {
        if (panel) panel.remove();
        panel = document.createElement('div');
        panel.id = 'stopwatch-panel';
        panel.style.cssText = `
            position: fixed; left: ${posX}px; top: ${posY}px;
            width: 280px;
            background: ${theme.panelBg};
            border: 1px solid ${theme.accent};
            border-radius: 16px;
            z-index: 2147483647;
            font-family: 'Segoe UI', system-ui, monospace;
            box-shadow: 0 8px 28px rgba(0,0,0,0.5), ${theme.accentGlow};
            backdrop-filter: blur(8px);
            display: ${visible ? 'block' : 'none'};
            cursor: grab;
        `;
        panel.innerHTML = `
            <div class="drag-area" style="cursor: grab; padding: 12px 16px; border-bottom: 1px solid ${theme.accent}; background: ${theme.panelDark}; border-radius: 16px 16px 0 0;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="color: ${theme.accent}; font-size: 11px; font-weight: bold; letter-spacing: 1px;">⏱️ STOPWATCH</span>
                    <div style="display: flex; gap: 8px;">
                        <button class="sw-info" style="background:none; border:none; color:${theme.dim}; cursor:pointer; font-size:12px;">ℹ️</button>
                        <button class="sw-close" style="background:none; border:none; color:${theme.dim}; cursor:pointer; font-size:14px;">✕</button>
                    </div>
                </div>
            </div>
            <div style="padding: 20px 16px;">
                <div class="sw-value" style="font-size: 32px; text-align: center; font-family: 'Courier New', monospace; font-weight: bold; color: ${theme.text}; letter-spacing: 2px; margin-bottom: 20px;">00:00:00.0</div>
                <div style="display: flex; gap: 10px; margin-bottom: 16px;">
                    <button class="btn-start" style="flex:1; background: ${theme.accent}; color: #000; border: none; border-radius: 8px; padding: 10px; font-size: 11px; font-weight: bold; cursor: pointer;">START</button>
                    <button class="btn-lap" style="flex:1; background: #1a1a2a; border: 1px solid ${theme.accent}; color: ${theme.text}; border-radius: 8px; padding: 10px; font-size: 11px; font-weight: bold; cursor: pointer;">LAP</button>
                    <button class="btn-reset" style="flex:1; background: #1a1a2a; border: 1px solid ${theme.danger}; color: ${theme.danger}; border-radius: 8px; padding: 10px; font-size: 11px; font-weight: bold; cursor: pointer;">RESET</button>
                </div>
                <div class="lap-list" style="max-height: 200px; overflow-y: auto; border-top: 1px solid #1a1a2a; padding-top: 12px;">
                    <div class="lap-empty" style="text-align: center; color: ${theme.dim}; font-size: 10px; padding: 16px;">No laps recorded</div>
                </div>
            </div>
        `;
        document.body.appendChild(panel);
        attachButtonEvents();
        updateDisplay();
        renderLaps();
        updateButtons();
    }

    function attachButtonEvents() {
        const dragArea = panel.querySelector('.drag-area');
        const startBtn = panel.querySelector('.btn-start');
        const lapBtn = panel.querySelector('.btn-lap');
        const resetBtn = panel.querySelector('.btn-reset');
        const closeBtn = panel.querySelector('.sw-close');
        const infoBtn = panel.querySelector('.sw-info');

        dragArea.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('sw-close') || e.target.classList.contains('sw-info')) return;
            dragActive = true;
            const rect = panel.getBoundingClientRect();
            dragOffsetX = e.clientX - rect.left;
            dragOffsetY = e.clientY - rect.top;
            panel.style.cursor = 'grabbing';
            e.preventDefault();
        });

        if (startBtn) startBtn.onclick = () => { if (running) pauseTimer(); else startTimer(); };
        if (lapBtn) lapBtn.onclick = () => recordLap();
        if (resetBtn) resetBtn.onclick = () => resetTimer();
        if (closeBtn) closeBtn.onclick = () => {
            visible = false;
            panel.style.display = 'none';
            localStorage.setItem('mx_sw_visible', false);
        };
        if (infoBtn) infoBtn.onclick = () => showInfo();
    }

    // Hotkey ALT+K
    window.addEventListener('keydown', (e) => {
        if (e.altKey && e.key.toLowerCase() === 'k') {
            if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;
            e.preventDefault();
            visible = !visible;
            if (panel) panel.style.display = visible ? 'block' : 'none';
            localStorage.setItem('mx_sw_visible', visible);
        }
    });

    // Styles
    const style = document.createElement('style');
    style.textContent = `
        #stopwatch-panel { filter: none !important; }
        #stopwatch-panel .lap-list { scrollbar-width: thin; scrollbar-color: #1a1a2a #0a0a1a; }
        #stopwatch-panel .lap-list::-webkit-scrollbar { width: 5px; }
        #stopwatch-panel .lap-list::-webkit-scrollbar-track { background: #0a0a1a; border-radius: 3px; }
        #stopwatch-panel .lap-list::-webkit-scrollbar-thumb { background: #1a1a2a; border-radius: 3px; }
        #stopwatch-panel .lap-list::-webkit-scrollbar-thumb:hover { background: #0ff; }
        .btn-start { transition: all 0.1s; }
        .btn-start:hover { transform: scale(0.98); opacity: 0.9; background: ${theme.accent} !important; color: #000 !important; }
        .btn-lap:hover, .btn-reset:hover { transform: scale(0.98); opacity: 0.9; }
        .btn-lap:hover { background: ${theme.accent} !important; color: #000 !important; }
        .btn-reset:hover { background: ${theme.danger} !important; color: #fff !important; }
        .lap-item { display: flex; justify-content: space-between; padding: 6px 8px; margin-bottom: 4px; background: #0a0a1a; border-radius: 6px; border-left: 2px solid ${theme.accent}; }
        .lap-num { color: ${theme.accent}; font-size: 10px; font-weight: bold; }
        .lap-time { color: ${theme.text}; font-family: monospace; font-size: 11px; }
        .lap-empty { text-align: center; color: ${theme.dim}; font-size: 10px; padding: 16px; }
    `;
    document.head.appendChild(style);

    attachDragEvents();
    buildPanel();

  }
