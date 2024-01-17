(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/main.js.daf9a1eb.js")
    );
  })().catch(console.error);

})();
