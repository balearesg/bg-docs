System.register(["@beyond-js/widgets@0.1.3/render", "@beyond-js/kernel@0.1.8/bundle", "@beyond-js/kernel@0.1.8/styles", "@beyond-js/react-widgets@18.20.4/base", "react@18.2.0", "@bg/docs@1.0.0/menu", "@beyond-js/kernel@0.1.8/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, Layout, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Layout: void 0
  });
  return {
    setters: [function (_beyondJsWidgets013Render) {
      dependency_0 = _beyondJsWidgets013Render;
    }, function (_beyondJsKernel018Bundle) {
      dependency_1 = _beyondJsKernel018Bundle;
    }, function (_beyondJsKernel018Styles) {
      dependency_2 = _beyondJsKernel018Styles;
    }, function (_beyondJsReactWidgets18204Base) {
      dependency_3 = _beyondJsReactWidgets18204Base;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_bgDocs100Menu) {
      dependency_5 = _bgDocs100Menu;
    }, function (_beyondJsKernel018Routing) {
      dependency_6 = _beyondJsKernel018Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/auth-api", "1.0.0"], ["@bg/auth-models", "1.0.0"], ["@bg/mailer", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.20.4"], ["@bgroup/ui", "0.0.31"], ["@mdx-js/mdx", "2.3.0"], ["@mdx-js/react", "2.3.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.0"], ["@beyond-js/kernel", "0.1.8"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/backend", "0.1.4"], ["@bg/docs", "1.0.0"], ["@bg/docs", "1.0.0"]]);
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
          const sidebarItems = exports.sidebarItems = [['Empty', 'empty', []], ['How to use', '/how-to-use', []], ['Compilacion QCH', '/compilacion-qch', []], ['Plugins', '/plugins', []], ['Standars', '/standars', []], ['Components', '/components', []], ['Auth Instalation', '/auth-instalation', []], ['Auth Session', '/auth-session', []], ['Auth User', '/auth-user', []], ['Beyond UI', '/beyond-ui', []], ['Essential UI', '/essential-ui', []], ['Mailer', '/mailer', []], ['Service Compilation B-E-P', '/compilation-backend', []], ['Mobile Compilations', '/compilation-mobile', []], ['Configure Git', '/configure-git', []], ['Debug Mobiles Apps', '/debug-mobile-apps', []], ['Running Bovino', '/running-bovino', []], ['Prettier Settings', '/prettier-settings', []], ['How to install jadmin', '/how-to-install-jadmin', []], ['Gmaps Integration', '/gmaps-integration', []], ['Chart Component', '/chart-component', []], ['React Types', '/react-types', []], ['Deploy bg docs', '/deploy-bg-docs', []]];
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