(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/main.js.a04fba91.js")
    );
  })().catch(console.error);

})();
