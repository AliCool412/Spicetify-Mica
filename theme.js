(async function initMicaTheme() {
    while (!window.Spicetify || !Spicetify.Platform || !document.body) {
        await new Promise((resolve) => setTimeout(resolve, 100));
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
