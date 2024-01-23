(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/main.js.5128e03a.js")
    );
  })().catch(console.error);

})();
