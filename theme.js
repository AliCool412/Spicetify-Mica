'use strict';

(async function initMicaTheme() {
    // 1. Wait until Windhawk's cancelEsperantoCall is ready
    while (typeof window.cancelEsperantoCall !== 'function') {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    try {
        const whModule = window.cancelEsperantoCall('ctewh');
        if (whModule && typeof whModule.extendFrame === 'function') {
            whModule.extendFrame(-1, -1, -1, -1);
            whModule.setBackdrop('mica');
        }
    } catch (err) {
        console.error("Failed to apply Mica theme backdrop:", err);
    }

    // 2. Inject Light Mode CSS overrides
    const styleId = 'mica-light-mode-style';
    let styleEl = document.getElementById(styleId);
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = styleId;
        document.head.appendChild(styleEl);
    }

    styleEl.textContent = `
        html.light-theme,
        html[data-theme="light"],
        body.light-theme {
            --spice-text: #121212 !important;
            --spice-subtext: #4d4d4d !important;
            --spice-main: rgba(255, 255, 255, 0.6) !important;
        }

        html.light-theme body,
        html.light-theme span,
        html.light-theme p,
        html.light-theme h1,
        html.light-theme h2,
        html.light-theme h3,
        html.light-theme button,
        html[data-theme="light"] body,
        html[data-theme="light"] span,
        html[data-theme="light"] p,
        html[data-theme="light"] h1,
        html[data-theme="light"] h2,
        html[data-theme="light"] h3,
        html[data-theme="light"] button {
            color: #121212 !important;
        }

        html.light-theme svg,
        html[data-theme="light"] svg {
            fill: #121212 !important;
            color: #121212 !important;
        }

        html.light-theme svg path,
        html[data-theme="light"] svg path {
            fill: currentColor !important;
        }
    `;

    const updateThemeClass = () => {
        const isLight = Spicetify.Config?.color_scheme?.toLowerCase().includes('light') ||
                        document.documentElement.classList.contains('light') ||
                        document.documentElement.getAttribute('data-theme') === 'light';

        if (isLight) {
            document.documentElement.classList.add('light-theme');
        } else {
            document.documentElement.classList.remove('light-theme');
        }
    };

    updateThemeClass();

    if (window.Spicetify && Spicetify.Player) {
        Spicetify.Player.addEventListener('songchange', updateThemeClass);
    }
})();
