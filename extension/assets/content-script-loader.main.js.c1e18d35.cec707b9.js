(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/main.js.c1e18d35.js")
    );
  })().catch(console.error);

})();
