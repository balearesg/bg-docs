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
        "global.css": true,
        "params": {
          "application": {
            "token": "docsbg"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});