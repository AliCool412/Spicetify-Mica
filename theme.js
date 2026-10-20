(async function initMicaTheme() {
    while (!window.Spicetify || !Spicetify.Platform || !document.body) {
        await new Promise((resolve) => setTimeout(resolve, 100));
    }
    try {
        const whModule = cancelEsperantoCall('ctewh');
        whModule.extendFrame(-1, -1, -1, -1);
        whModule.setBackdrop('mica');
        console.log("Mica Applied YAYY");
    } catch (err) {
        console.error("No Mica :(", err);
    }
})();
