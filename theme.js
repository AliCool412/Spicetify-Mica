(async function initMicaTheme() {
    while (!document.body || typeof window.cancelEsperantoCall !== 'function') {
        await new Promise((resolve) => setTimeout(resolve, 100));
    }

    try {
        const whModule = window.cancelEsperantoCall('ctewh');
        if (whModule && typeof whModule.setBackdrop === 'function') {
            whModule.extendFrame(-1, -1, -1, -1);
            whModule.setBackdrop('mica');
            console.log("Mica backdrop applied via theme.js!");
        }
    } catch (err) {
        console.error("Mica theme error:", err);
    }
})();
