'use strict';

(async function() {
    while (typeof cancelEsperantoCall !== 'function') {
        await new Promise(r => setTimeout(r, 100));
    }

    try {
        const whModule = cancelEsperantoCall('ctewh');
        whModule.extendFrame(-1, -1, -1, -1);
        whModule.setBackdrop('mica');
    } catch {}
})();
