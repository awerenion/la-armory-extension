(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/main.js.e4899f9a.js")
    );
  })().catch(console.error);

})();
