'use strict';

(async function initMicaTheme() {
    try {
        // Wait until cancelEsperantoCall becomes available on the window
        while (typeof window.cancelEsperantoCall !== 'function') {
            await new Promise(resolve => setTimeout(resolve, 100));
        }


        const whModule = window.cancelEsperantoCall('ctewh');
        if (whModule && typeof whModule.extendFrame === 'function') {
            whModule.extendFrame(-1, -1, -1, -1);
            whModule.setBackdrop('mica');
        }
    } catch (err) {
        // Safe fallback handling under strict mode
        console.error("Failed to apply Mica theme automatically:", err);
































































