(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/main.js.6be5113c.js")
    );
  })().catch(console.error);

})();
