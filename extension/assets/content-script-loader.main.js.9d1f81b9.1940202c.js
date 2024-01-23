(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/main.js.9d1f81b9.js")
    );
  })().catch(console.error);

})();
