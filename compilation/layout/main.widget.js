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
        hash: 1766401848,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sidebarItems = void 0;
          const sidebarItems = [['Empty', 'empty', []], ['How to use', '/how-to-use', []], ['Compilacion QCH', '/compilacion-qch', []], ['Plugins', '/plugins', []], ['Standars', '/standars', []], ['Components', '/components', []], ['Auth Instalation', '/auth-instalation', []], ['Auth Session', '/auth-session', []], ['Auth User', '/auth-user', []], ['Beyond UI', '/beyond-ui', []], ['Essential UI', '/essential-ui', []], ['Mailer', '/mailer', []], ['Service Compilation B-E-P', '/compilation-backend', []], ['Mobile Compilations', '/compilation-mobile', []], ['Configure Git', '/configure-git', []], ['Debug Mobiles Apps', '/debug-mobile-apps', []], ['Running Bovino', '/running-bovino', []], ['Prettier Settings', '/prettier-settings', []], ['How to install jadmin', '/how-to-install-jadmin', []], ['Gmaps Integration', '/gmaps-integration', []], ['Chart Component', '/chart-component', []], ['React Types', '/react-types', []], ['Deploy bg docs', '/deploy-bg-docs', []]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiZXhwb3J0cyIsInNpZGViYXJJdGVtcyIsIlJlYWN0IiwiX21lbnUiLCJfdGl0bGVEb2MiLCJfaXRlbSIsIl9zdWJJdGVtIiwiX3JvdXRpbmciLCJfbWVudTIiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVyaSIsIlVSSSIsInJvdXRpbmciLCJyZWRpcmVjdCIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxlbmd0aCIsImNyZWF0ZUVsZW1lbnQiLCJTdWJJdGVtIiwia2V5IiwiSXRlbSIsImNsYXNzTmFtZSIsIlNpZGViYXJIZWFkZXIiLCJpdGVtcyIsImxvZ28iLCJUaXRsZURvYyIsIl9yZWFjdCIsImxhYmVsIiwicGF0aCIsInN1YlBhdGgiLCJuYXZpZ2F0ZSIsImV2ZW50IiwiZGF0YXNldCIsImN1cnJlbnRUYXJnZXQiLCJ1cmwiLCJzdWIiLCJwdXNoU3RhdGUiLCJkZWZhdWx0Iiwib25DbGljayIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZVN0YXRlIiwiY2hpbGRyZW4iLCJzdWJJdGVtIiwidG9nZ2xlT3BlbiIsIkZyYWdtZW50IiwiZ29Ib21lIiwicHJldmVudERlZmF1bHQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tZW51L2luZGV4LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtLnRzeCIsIi90cy92aWV3cy9zdWItaXRlbS50c3giLCIvdHMvdmlld3MvdGl0bGUtZG9jLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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