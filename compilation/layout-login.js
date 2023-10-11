System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-widgets@18.20.4/base", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReactWidgets18204Base) {
      dependency_3 = _beyondJsReactWidgets18204Base;
    }, function (_react) {
      dependency_4 = _react;
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
          "vspecifier": "@bg/docs@1.0.0/layout-login"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-widgets/base', dependency_3], ['react', dependency_4]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "layout-login",
        "vspecifier": "@bg/docs@1.0.0/layout-login",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/docs@1.0.0/layout-login');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1694048902,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-widgets/base");
          var _layout = require("./view/layout");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _layout.Layout;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./view/layout
      *****************************/

      ims.set('./view/layout', {
        hash: 54162779,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = Layout;
          var React = require("react");
          function Layout() {
            const themeStorage = localStorage.getItem("theme");
            React.useEffect(() => {
              if (!themeStorage) return;
              const container = document.querySelector("html");
              container.setAttribute("data-beyond-mode", themeStorage);
              const body = document.querySelector("body");
              body.setAttribute("data-beyond-mode", themeStorage);
            }, []);
            return React.createElement("main", {
              className: "layout-login"
            }, React.createElement("beyond-layout-children", null));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfbGF5b3V0IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIkxheW91dCIsImV4cG9ydHMiLCJSZWFjdCIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VFZmZlY3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3ZpZXcvbGF5b3V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkscUJBQXFCO1lBQzdDLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPSCxPQUFBLENBQUFJLE1BQU07WUFDZDs7VUFDQUMsT0FBQSxDQUFBSixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkQsSUFBQUssS0FBQSxHQUFBUCxPQUFBO1VBU00sU0FBVUssTUFBTUEsQ0FBQTtZQUNsQixNQUFNRyxZQUFZLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUVsREgsS0FBSyxDQUFDSSxTQUFTLENBQUMsTUFBSztjQUNqQixJQUFJLENBQUNILFlBQVksRUFBRTtjQUNuQixNQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUNoREYsU0FBUyxDQUFDRyxZQUFZLENBQUMsa0JBQWtCLEVBQUVQLFlBQVksQ0FBQztjQUN4RCxNQUFNUSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUMzQ0UsSUFBSSxDQUFDRCxZQUFZLENBQUMsa0JBQWtCLEVBQUVQLFlBQVksQ0FBQztZQUN2RCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FDSUQsS0FBQSxDQUFBVSxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFjLEdBQzFCWCxLQUFBLENBQUFVLGFBQUEsZ0NBQXlCLENBQ3RCO1VBRWYifQ==