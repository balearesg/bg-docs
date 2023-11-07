System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-widgets@18.20.4/base", "react@18.2.0", "@bg/docs@1.0.0/menu", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, Layout, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Layout: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReactWidgets18204Base) {
      dependency_3 = _beyondJsReactWidgets18204Base;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_bgDocs100Menu) {
      dependency_5 = _bgDocs100Menu;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
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
          "vspecifier": "@bg/docs@1.0.0/layout/main",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-widgets/base', dependency_3], ['react', dependency_4], ['@bg/docs/menu', dependency_5], ['@beyond-js/kernel/routing', dependency_6]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@bg/docs@1.0.0/layout/main.widget",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/docs@1.0.0/layout/main.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2684072206,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-widgets/base");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            get Widget() {
              return _views.Layout;
            }
          }
          exports.Controller = Controller;
        }
      });

      /****************************
      INTERNAL MODULE: ./menu/index
      ****************************/

      ims.set('./menu/index', {
        hash: 1612419847,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sidebarItems = void 0;
          const sidebarItems = [['Empty', 'empty', []], ['How to use', '/how-to-use', []], ['Compilacion QCH', '/compilacion-qch', []], ['Plugins', '/plugins', []], ['Standars', '/standars', []], ['Components', '/components', []], ['Auth Instalation', '/auth-instalation', []], ['Auth Session', '/auth-session', []], ['Auth User', '/auth-user', []], ['Beyond UI', '/beyond-ui', []], ['Essential UI', '/essential-ui', []], ['Mailer', '/mailer', []], ['Service Compilation B-E-P', '/compilation-backend', []], ['Mobile Compilations', '/compilation-mobile', []], ['Configure Git', '/configure-git', []], ['Debug Mobiles Apps', '/debug-mobile-apps', []], ['Running Bovino', '/running-bovino', []], ['Prettier Settings', '/prettier-settings', []], ['How to install jadmin', '/how-to-install-jadmin', []], ['Gmaps Integration', '/gmaps-integration', []], ['Chart Component', '/chart-component', []], ['React Types', '/react-types', []], ['Deploy bg docs', '/deploy-bg-docs', []], ['Implement Unit Test', '/implement-unit-test', []]].sort();
          exports.sidebarItems = sidebarItems;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1194986114,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = Layout;
          var React = require("react");
          var _menu = require("@bg/docs/menu");
          var _titleDoc = require("./title-doc");
          var _item = require("./item");
          var _subItem = require("./sub-item");
          var _routing = require("@beyond-js/kernel/routing");
          var _menu2 = require("../menu");
          /*bundle*/
          function Layout() {
            const user = JSON.parse(localStorage.getItem('session-jadmin'));
            const uri = new _routing.URI('/auth/login');
            if (!user) _routing.routing.redirect(uri);
            const output = _menu2.sidebarItems.map((item, index) => {
              if (!!item[2].length) return React.createElement(_subItem.SubItem, {
                key: index,
                item: item
              });
              return React.createElement(_item.Item, {
                item: item,
                key: index
              });
            });
            return React.createElement("div", {
              className: "main-layout"
            }, React.createElement(_menu.SidebarHeader, {
              items: output,
              logo: React.createElement(_titleDoc.TitleDoc, null)
            }, React.createElement("beyond-layout-children", null)));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/item
      ****************************/

      ims.set('./views/item', {
        hash: 4197426321,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          function Item({
            item
          }) {
            const [label, path, subPath] = item;
            const navigate = event => {
              const {
                dataset
              } = event.currentTarget;
              const url = `${dataset.path}${dataset.sub ?? ""}`;
              _routing.routing.pushState(url);
            };
            return _react.default.createElement("li", {
              onClick: navigate,
              "data-sub": subPath,
              "data-path": path
            }, label);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./views/sub-item
      ********************************/

      ims.set('./views/sub-item', {
        hash: 3334716014,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SubItem = SubItem;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _item = require("./item");
          function SubItem({
            item
          }) {
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const children = item.children.map(subItem => _react.default.createElement(_item.Item, {
              item: subItem
            }));
            const items = {
              label: item[0],
              path: item[1],
              subPath: item[2]
            };
            function toggleOpen() {
              setIsOpen(!isOpen);
            }
            const navigate = event => {
              toggleOpen();
              const {
                dataset
              } = event.currentTarget;
              const url = `${dataset.path}${dataset.sub ?? ''}`;
              _routing.routing.pushState(url);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("li", {
              onClick: navigate,
              "data-sub": items.subPath,
              "data-path": items.path
            }, items.label), isOpen && children);
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/title-doc
      *********************************/

      ims.set('./views/title-doc', {
        hash: 3501780701,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TitleDoc = TitleDoc;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          function TitleDoc() {
            function goHome(event) {
              event.preventDefault();
              _routing.routing.pushState('/');
            }
            return _react.default.createElement("h1", null, _react.default.createElement("a", {
              onClick: goHome
            }, "BG ", _react.default.createElement("span", {
              className: "badge"
            }, "Docs")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "Layout",
        "name": "Layout"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Layout') && _export("Layout", Layout = require ? require('./views/index').Layout : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiZXhwb3J0cyIsInNpZGViYXJJdGVtcyIsInNvcnQiLCJSZWFjdCIsIl9tZW51IiwiX3RpdGxlRG9jIiwiX2l0ZW0iLCJfc3ViSXRlbSIsIl9yb3V0aW5nIiwiX21lbnUyIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1cmkiLCJVUkkiLCJyb3V0aW5nIiwicmVkaXJlY3QiLCJvdXRwdXQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsZW5ndGgiLCJjcmVhdGVFbGVtZW50IiwiU3ViSXRlbSIsImtleSIsIkl0ZW0iLCJjbGFzc05hbWUiLCJTaWRlYmFySGVhZGVyIiwiaXRlbXMiLCJsb2dvIiwiVGl0bGVEb2MiLCJfcmVhY3QiLCJsYWJlbCIsInBhdGgiLCJzdWJQYXRoIiwibmF2aWdhdGUiLCJldmVudCIsImRhdGFzZXQiLCJjdXJyZW50VGFyZ2V0IiwidXJsIiwic3ViIiwicHVzaFN0YXRlIiwiZGVmYXVsdCIsIm9uQ2xpY2siLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ1c2VTdGF0ZSIsImNoaWxkcmVuIiwic3ViSXRlbSIsInRvZ2dsZU9wZW4iLCJGcmFnbWVudCIsImdvSG9tZSIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbWVudS9pbmRleC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS50c3giLCIvdHMvdmlld3Mvc3ViLWl0ZW0udHN4IiwiL3RzL3ZpZXdzL3RpdGxlLWRvYy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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