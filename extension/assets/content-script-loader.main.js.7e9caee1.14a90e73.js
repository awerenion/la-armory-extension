(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/main.js.7e9caee1.js")
    );
  })().catch(console.error);

})();
