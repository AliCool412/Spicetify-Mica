(function initMicaTheme() {
    function applyMica() {
        if (typeof window.cancelEsperantoCall === 'function') {
            try {
                const whModule = window.cancelEsperantoCall('ctewh');
                if (whModule && typeof whModule.setBackdrop === 'function') {
                    whModule.extendFrame(-1, -1, -1, -1);
                    whModule.setBackdrop('mica');
                    console.log("Mica backdrop applied automatically!");
                    return true;
                }
            } catch (err) {
                console.error("Mica theme error:", err);
            }
        }
        return false;
    }

    if (applyMica()) return;

    const interval = setInterval(() => {
        if (applyMica()) {
            clearInterval(interval);
        }
    }, 200);

    setTimeout(() => clearInterval(interval), 15000);
})();
