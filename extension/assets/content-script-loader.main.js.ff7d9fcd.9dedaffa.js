(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/main.js.ff7d9fcd.js")
    );
  })().catch(console.error);

})();
