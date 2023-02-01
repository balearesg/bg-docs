System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@bg/docs",
        "version": "1.0.0",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "layout": "main-layout",
        "params": {
          "sidebarItems": [{
            "label": "How to use",
            "path": "/how-to-use"
          }, {
            "label": "Compilacion QCH",
            "path": "/compilacion-qch"
          }, {
            "label": "Plugins",
            "path": "/plugins"
          }]
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});