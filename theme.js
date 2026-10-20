(async function initMicaTheme() {
    let retries = 0;
    const maxRetries = 100; 

    while ((!window.Spicetify || typeof cancelEsperantoCall === 'undefined' || !document.body) && retries < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        retries++;
    }

    if (typeof cancelEsperantoCall === 'undefined') {
        console.error("Mica theme error: cancelEsperantoCall is not available.");
        return;
    }

    try {
        const whModule = cancelEsperantoCall('ctewh');
        whModule.extendFrame(-1, -1, -1, -1);
        whModule.setBackdrop('mica');
        console.log("Mica backdrop applied successfully!");
    } catch (err) {
        console.error("Failed to apply Mica backdrop:", err);
    }
})();
