(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/main.js.7204ab40.js")
    );
  })().catch(console.error);

})();
