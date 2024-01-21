(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/main.js.bc31b211.js")
    );
  })().catch(console.error);

})();
