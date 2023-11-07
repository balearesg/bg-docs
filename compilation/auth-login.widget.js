System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-widgets@18.20.4/page", "@bg/docs@1.0.0/reactive-model", "@bg/auth-api@1.0.0/wrapper.ts", "@bg/docs@1.0.0/config", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@jadmin/ui@1.0.0/hooks", "@bg/docs@1.0.0/loading-page", "@bg/docs@1.0.0/input", "@bgroup/ui@0.0.34/image", "@bgroup/ui@0.0.34/form", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, Page, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Page: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactWidgets18204Page) {
      dependency_2 = _beyondJsReactWidgets18204Page;
    }, function (_bgDocs100ReactiveModel) {
      dependency_3 = _bgDocs100ReactiveModel;
    }, function (_bgAuthApi100WrapperTs) {
      dependency_4 = _bgAuthApi100WrapperTs;
    }, function (_bgDocs100Config) {
      dependency_5 = _bgDocs100Config;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }, function (_jadminUi100Hooks) {
      dependency_8 = _jadminUi100Hooks;
    }, function (_bgDocs100LoadingPage) {
      dependency_9 = _bgDocs100LoadingPage;
    }, function (_bgDocs100Input) {
      dependency_10 = _bgDocs100Input;
    }, function (_bgroupUi0034Image) {
      dependency_11 = _bgroupUi0034Image;
    }, function (_bgroupUi0034Form) {
      dependency_12 = _bgroupUi0034Form;
    }, function (_beyondJsKernel019Styles) {
      dependency_13 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/auth-api", "1.0.0"], ["@bg/auth-models", "1.0.0"], ["@bg/mailer", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.20.4"], ["@bgroup/ui", "0.0.34"], ["@mdx-js/mdx", "2.3.0"], ["@mdx-js/react", "2.3.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/backend", "0.1.9"], ["@bg/docs", "1.0.0"], ["@bg/docs", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bg/docs@1.0.0/auth-login",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['@bg/docs/reactive-model', dependency_3], ['@bg/auth-api/wrapper.ts', dependency_4], ['@bg/docs/config', dependency_5], ['react', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@jadmin/ui/hooks', dependency_8], ['@bg/docs/loading-page', dependency_9], ['@bg/docs/input', dependency_10], ['@bgroup/ui/image', dependency_11], ['@bgroup/ui/form', dependency_12], ['@beyond-js/kernel/styles', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-login-page",
        "vspecifier": "@bg/docs@1.0.0/auth-login.widget",
        "is": "page",
        "route": "/auth/login",
        "layout": "layout-login"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/docs@1.0.0/auth-login.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3129040769,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-widgets/page");
          var _views = require("./views");
          var _model = require("./model");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.Page;
            }
            #model;
            createStore() {
              this.#model = new _model.Model();
              return this.#model;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./model
      ***********************/

      ims.set('./model', {
        hash: 3794784807,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Model = void 0;
          var _reactiveModel = require("@bg/docs/reactive-model");
          var _wrapper = require("@bg/auth-api/wrapper.ts");
          var _config = require("@bg/docs/config");
          class Model extends _reactiveModel.ReactiveModel {
            #message;
            get message() {
              return this.#message;
            }
            #invalid;
            get invalid() {
              return this.#invalid;
            }
            #ready;
            get ready() {
              return this.#ready;
            }
            #error;
            get error() {
              return this.#error;
            }
            #fetching;
            get fetching() {
              return this.#fetching;
            }
            login = async fields => {
              this.#fetching = true;
              this.#error = false;
              this.triggerEvent();
              try {
                const appToken = _config.default.params.application.token;
                const response = await _wrapper.session.login({
                  ...fields,
                  appToken
                });
                if (response?.error) throw new Error(response.error);
              } catch (error) {
                this.#error = true;
              } finally {
                this.#fetching = false;
                this.triggerEvent();
              }
            };
          }
          exports.Model = Model;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1705619365,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          ;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1470333205,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@jadmin/ui/hooks");
          var _loadingPage = require("@bg/docs/loading-page");
          var _beyond_context = require("beyond_context");
          var _input = require("@bg/docs/input");
          var _image = require("@bgroup/ui/image");
          var _form = require("@bgroup/ui/form");
          /*bundle*/
          function Page({
            store
          }) {
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const init = {
              email: '',
              password: '',
              isRemember: false
            };
            const {
              getInput,
              fields,
              error,
              setError,
              dispatch,
              getCheckbox
            } = (0, _hooks.useForm)({
              init
            });
            const [fetching, setFetching] = (0, _react.useState)(false);
            (0, _hooks.useBinder)([store], () => {
              if (store.error) setError({
                error: 'Usuario o clave incorrectos'
              });else setError({
                error: ''
              });
              setFetching(store.fetching);
            });
            const formDisabled = {};
            const {
              email,
              password
            } = fields;
            if (!ready) return _react.default.createElement(_loadingPage.LoadingPage, null);
            if (!email || !password || fetching) formDisabled.disabled = true;
            const handleSubmit = async () => {
              await store.login(fields);
              _routing.routing.pushState('/');
            };
            return _react.default.createElement("div", {
              className: "auth-page__container"
            }, _react.default.createElement("div", {
              className: "content-auth"
            }, _react.default.createElement(_image.BeyondImage, {
              src: `${globalThis.baseDir}assets/logo.png`,
              alt: "logo",
              className: "logo-header"
            }), _react.default.createElement(_form.BeyondForm, {
              onSubmit: handleSubmit
            }, _react.default.createElement("h1", {
              className: "title-login"
            }, texts.login), _react.default.createElement("div", {
              className: "content-inputs"
            }, _react.default.createElement(_input.Input, {
              disabled: fetching,
              type: "email",
              loading: fetching,
              hasError: !!error.error,
              errorMessage: error?.error,
              ...getInput('email', texts.email, 'email', fetching)
            }), _react.default.createElement(_input.Input, {
              disabled: fetching,
              type: "password",
              password: true,
              loading: fetching,
              hasError: !!error.error,
              errorMessage: error?.error,
              ...getInput('password', texts.password, 'password', fetching)
            })), _react.default.createElement("div", {
              className: "form__actions"
            }, _react.default.createElement(_form.BeyondButton, {
              type: "submit",
              className: "btn btn-primary",
              loading: fetching,
              colorSpinner: "var(--element-bg)",
              ...formDisabled
            }, texts.init)))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "Page",
        "name": "Page"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Page') && _export("Page", Page = require ? require('./views/index').Page : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfbW9kZWwiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlBhZ2UiLCJtb2RlbCIsImNyZWF0ZVN0b3JlIiwiTW9kZWwiLCJleHBvcnRzIiwiX3JlYWN0aXZlTW9kZWwiLCJfd3JhcHBlciIsIl9jb25maWciLCJSZWFjdGl2ZU1vZGVsIiwibWVzc2FnZSIsImludmFsaWQiLCJyZWFkeSIsImVycm9yIiwiZmV0Y2hpbmciLCJsb2dpbiIsImZpZWxkcyIsInRyaWdnZXJFdmVudCIsImFwcFRva2VuIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwcGxpY2F0aW9uIiwidG9rZW4iLCJyZXNwb25zZSIsInNlc3Npb24iLCJFcnJvciIsIl9yZWFjdCIsIl9yb3V0aW5nIiwiX2hvb2tzIiwiX2xvYWRpbmdQYWdlIiwiX2JleW9uZF9jb250ZXh0IiwiX2lucHV0IiwiX2ltYWdlIiwiX2Zvcm0iLCJzdG9yZSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJpbml0IiwiZW1haWwiLCJwYXNzd29yZCIsImlzUmVtZW1iZXIiLCJnZXRJbnB1dCIsInNldEVycm9yIiwiZGlzcGF0Y2giLCJnZXRDaGVja2JveCIsInVzZUZvcm0iLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiZm9ybURpc2FibGVkIiwiY3JlYXRlRWxlbWVudCIsIkxvYWRpbmdQYWdlIiwiZGlzYWJsZWQiLCJoYW5kbGVTdWJtaXQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY2xhc3NOYW1lIiwiQmV5b25kSW1hZ2UiLCJzcmMiLCJnbG9iYWxUaGlzIiwiYmFzZURpciIsImFsdCIsIkJleW9uZEZvcm0iLCJvblN1Ym1pdCIsIklucHV0IiwidHlwZSIsImxvYWRpbmciLCJoYXNFcnJvciIsImVycm9yTWVzc2FnZSIsIkJleW9uZEJ1dHRvbiIsImNvbG9yU3Bpbm5lciJdLCJzb3VyY2VzIjpbIi93aWRnZXQvdHMvY29udHJvbGxlci50cyIsIi93aWRnZXQvdHMvbW9kZWwudHMiLCIvd2lkZ2V0L3RzL3R5cGVzLnRzIiwiL3dpZGdldC90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9KLE1BQUEsQ0FBQUssSUFBSTtZQUNaO1lBRUEsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTCxNQUFBLENBQUFPLEtBQUssRUFBRTtjQUN6QixPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25COztVQUNBRyxPQUFBLENBQUFQLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkQsSUFBQVEsY0FBQSxHQUFBWCxPQUFBO1VBQ0EsSUFBQVksUUFBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQWEsT0FBQSxHQUFBYixPQUFBO1VBRU0sTUFBT1MsS0FBTSxTQUFRRSxjQUFBLENBQUFHLGFBQWE7WUFDdkMsQ0FBQUMsT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRUEsQ0FBQUMsT0FBUTtZQUNSLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRUEsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtB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