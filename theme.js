(async function initMicaTheme() {
    while (!document.body) {
        await new Promise((resolve) => setTimeout(resolve, 100));
    }

    try {
        if (typeof cancelEsperantoCall === 'function') {
            const whModule = cancelEsperantoCall('ctewh');
            whModule.extendFrame(-1, -1, -1, -1);
            whModule.setBackdrop('mica');
            console.log("Mica backdrop applied locally!");
        }
    } catch (err) {
        console.error("Mica theme error:", err);
    }
})();
