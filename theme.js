(async function initMicaTheme() {
    while (!document.body) {
        await new Promise((resolve) => setTimeout(resolve, 100));
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
        if (typeof cancelEsperantoCall === 'function') {
            const whModule = cancelEsperantoCall('ctewh');
            whModule.extendFrame(-1, -1, -1, -1);
            whModule.setBackdrop('mica');
            console.log("Mica backdrop applied successfully!");
        } else {
            console.warn("cancelEsperantoCall function not found on window object.");
        }
    } catch (err) {
        console.error("Failed to apply Mica backdrop:", err);
    }
})();
