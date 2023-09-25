System.register(["@beyond-js/kernel@0.1.8/bundle", "@beyond-js/kernel@0.1.8/transversals", "@beyond-js/widgets@0.1.3/render", "@bg/auth-api@1.0.0/wrapper.ts", "@beyond-js/kernel@0.1.8/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel018Bundle) {
      dependency_0 = _beyondJsKernel018Bundle;
    }, function (_beyondJsKernel018Transversals) {
      dependency_1 = _beyondJsKernel018Transversals;
    }, function (_beyondJsWidgets013Render) {
      dependency_2 = _beyondJsWidgets013Render;
    }, function (_bgAuthApi100WrapperTs) {
      dependency_3 = _bgAuthApi100WrapperTs;
    }, function (_beyondJsKernel018Routing) {
      dependency_4 = _beyondJsKernel018Routing;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@bg/auth-api/wrapper.ts', dependency_3], ['@beyond-js/kernel/routing', dependency_4]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "auth-login-page",
        "vspecifier": "@bg/docs@1.0.0/auth-login.widget",
        "is": "page",
        "route": "/auth/login",
        "layout": "layout-login"
      }, {
        "name": "main-page",
        "vspecifier": "@bg/docs@1.0.0/main-page",
        "is": "page",
        "route": "/${content}",
        "layout": "main-layout"
      }, {
        "name": "sub-page",
        "vspecifier": "@bg/docs@1.0.0/home/subpage",
        "is": "page",
        "route": "/${content}/${sub}",
        "layout": "main-layout"
      }, {
        "name": "layout-login",
        "vspecifier": "@bg/docs@1.0.0/layout-login",
        "is": "layout"
      }, {
        "name": "main-layout",
        "vspecifier": "@bg/docs@1.0.0/layout/main.widget",
        "is": "layout"
      }]);
      bundles = [];
      /***************************
      MODULE: @bg/docs/routing-app
      ***************************/
      bundles.push([{
        "module": {
          "vspecifier": "@bg/docs@1.0.0/routing-app"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@bg/auth-api", "1.0.0"], ["@bg/auth-models", "1.0.0"], ["@bg/mailer", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.20.4"], ["@bgroup/ui", "0.0.31"], ["@mdx-js/mdx", "2.3.0"], ["@mdx-js/react", "2.3.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.0"], ["@beyond-js/kernel", "0.1.8"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/backend", "0.1.4"], ["@bg/docs", "1.0.0"], ["@bg/docs", "1.0.0"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /***************************************
        INTERNAL MODULE: ./controller/controller
        ***************************************/

        ims.set('./controller/controller', {
          hash: 2158514688,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.RoutingAppController = void 0;
            var _getHandlers = require("./get-handlers");
            var _pipeline = require("./pipeline");
            class RoutingAppController {
              #isDefault;
              get isDefault() {
                return this.#pathname === '/';
              }
              #pathname;
              get pathname() {
                return this.#pathname;
              }
              #handlers = (0, _getHandlers.getHandlers)(this.isDefault);
              get handlers() {
                return this.#handlers;
              }
              #data;
              get data() {
                return this.#data;
              }
              constructor(pathname, data) {
                this.#pathname = pathname;
                this.#data = data;
              }
              load = async () => {
                let pipeline = new _pipeline.PipeLine(this);
                return await pipeline.define();
              };
            }
            exports.RoutingAppController = RoutingAppController;
          }
        });

        /*****************************************
        INTERNAL MODULE: ./controller/get-handlers
        *****************************************/

        ims.set('./controller/get-handlers', {
          hash: 3938671558,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.getHandlers = getHandlers;
            function getHandlers(isDefault) {
              const handlers = {
                default: ['session'],
                pathname: ['session']
              };
              return isDefault ? handlers.default : handlers.pathname;
            }
          }
        });

        /*********************************************
        INTERNAL MODULE: ./controller/handlers/session
        *********************************************/

        ims.set('./controller/handlers/session', {
          hash: 1999425473,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.SessionHandler = SessionHandler;
            var _wrapper = require("@bg/auth-api/wrapper.ts");
            function SessionHandler(parent) {
              'use strict';

              const noSession = ['/auth/login', '/auth/forget/password', '/auth/code', '/auth/set-forgotten-password'];
              parent.session = async () => {
                const pathname = {
                  pathname: '/auth/login'
                };
                const isSessionActive = _wrapper.session.isLogged;
                const existPath = noSession.find(route => parent.pathname.indexOf(route) >= 0);
                if (isSessionActive) {
                  if (existPath) return {
                    pathname: '/'
                  };
                  return {
                    pathname: parent.pathname
                  };
                }
                if (!isSessionActive && !existPath) return pathname;
                if (isSessionActive && existPath) return {
                  pathname: '/'
                };
                if (isSessionActive) return {
                  pathname: parent.pathname
                };
              };
            }
          }
        });

        /*************************************
        INTERNAL MODULE: ./controller/pipeline
        *************************************/

        ims.set('./controller/pipeline', {
          hash: 2330994638,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.PipeLine = void 0;
            var _session = require("./handlers/session");
            class PipeLine {
              #pathname;
              get pathname() {
                return this.#parent?.pathname;
              }
              #data;
              get data() {
                return this.#parent?.data;
              }
              #parent;
              constructor(parent) {
                this.#parent = parent;
                new _session.SessionHandler(this);
              }
              define = async () => {
                let pathname = {
                  pathname: this.#parent.pathname
                };
                for (let handler of this.#parent.handlers) {
                  if (this[handler] === undefined) continue;
                  let response = await this[handler]();
                  if (response && typeof response === 'object') {
                    pathname = response;
                    break;
                  }
                }
                return pathname;
              };
            }
            exports.PipeLine = PipeLine;
          }
        });

        /*************************
        INTERNAL MODULE: ./routing
        *************************/

        ims.set('./routing', {
          hash: 1276993979,
          creator: function (require, exports) {
            "use strict";

            var _routing = require("@beyond-js/kernel/routing");
            var _controller = require("./controller/controller");
            const data = new Map();
            _routing.routing.redirect = async function redirect(uri) {
              const control = new _controller.RoutingAppController(uri.pathname, data);
              const response = await control.load();
              return response.pathname;
            };
          }
        });
        return {
          dependencies: ['@bg/auth-api/wrapper.ts', '@beyond-js/kernel/routing']
        };
      }]);
      __beyond_transversal.initialise(bundles);
    }
  };
});