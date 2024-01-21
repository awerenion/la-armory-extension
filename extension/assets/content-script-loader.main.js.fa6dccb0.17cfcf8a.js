(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/main.js.fa6dccb0.js")
    );
  })().catch(console.error);

})();
