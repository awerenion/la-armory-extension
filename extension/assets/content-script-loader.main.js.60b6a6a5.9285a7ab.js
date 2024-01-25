(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/main.js.60b6a6a5.js")
    );
  })().catch(console.error);

})();
