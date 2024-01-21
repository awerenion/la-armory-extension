(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/main.js.6e9a308c.js")
    );
  })().catch(console.error);

})();
