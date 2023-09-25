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
          },
          "sidebarItems": [{
            "label": "How to use",
            "path": "/how-to-use"
          }, {
            "label": "Compilacion QCH",
            "path": "/compilacion-qch"
          }, {
            "label": "Plugins",
            "path": "/plugins"
          }, {
            "label": "Standars",
            "path": "/standars"
          }, {
            "label": "Components",
            "path": "/components"
          }, {
            "label": "Auth Instalation",
            "path": "/auth-instalation"
          }, {
            "label": "Auth Session",
            "path": "/auth-session"
          }, {
            "label": "Auth User",
            "path": "/auth-user"
          }, {
            "label": "Beyond UI",
            "path": "/beyond-ui"
          }, {
            "label": "Essential UI",
            "path": "/essential-ui"
          }, {
            "label": "Mailer",
            "path": "/mailer"
          }, {
            "label": "Service Compilation B-E-P",
            "path": "/compilation-backend"
          }, {
            "label": "Mobile Compilations",
            "path": "/compilation-mobile"
          }, {
            "label": "Configure Git",
            "path": "/configure-git"
          }, {
            "label": "Debug Mobiles Apps",
            "path": "/debug-mobile-apps"
          }, {
            "label": "Running Bovino",
            "path": "/running-bovino"
          }, {
            "label": "Prettier Settings",
            "path": "/prettier-settings"
          }, {
            "label": "How to install jadmin",
            "path": "/how-to-install-jadmin"
          }, {
            "label": "Gmaps Integration",
            "path": "/gmaps-integration"
          }, {
            "label": "Chart Component",
            "path": "/chart-component"
          }, {
            "label": "React Types",
            "path": "/react-types"
          }, {
            "label": "Deploy bg docs",
            "path": "/deploy-bg-docs"
          }]
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});