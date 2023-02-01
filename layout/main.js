System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/styles", "@beyond-js/react-widgets@18.21.1/base", "react@18.2.0", "@bg/docs@1.0.0/menu", "@bg/docs@1.0.0/config", "@beyond-js/kernel@0.1.7/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, Layout, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Layout: void 0
  });
  return {
    setters: [function (_beyondJsWidgets012Render) {
      dependency_0 = _beyondJsWidgets012Render;
    }, function (_beyondJsKernel017Bundle) {
      dependency_1 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Styles) {
      dependency_2 = _beyondJsKernel017Styles;
    }, function (_beyondJsReactWidgets18211Base) {
      dependency_3 = _beyondJsReactWidgets18211Base;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_bgDocs100Menu) {
      dependency_5 = _bgDocs100Menu;
    }, function (_bgDocs100Config) {
      dependency_6 = _bgDocs100Config;
    }, function (_beyondJsKernel017Routing) {
      dependency_7 = _beyondJsKernel017Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-widgets", "18.21.1"], ["@bgroup/ui", "0.0.28"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["socket.io-client", "4.5.4"], ["@bg/docs", "1.0.0"], ["@bg/docs", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bg/docs@1.0.0/layout/main"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-widgets/base', dependency_3], ['react', dependency_4], ['@bg/docs/menu', dependency_5], ['@bg/docs/config', dependency_6], ['@beyond-js/kernel/routing', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-layout",
        "vspecifier": "@bg/docs@1.0.0/layout/main",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/docs@1.0.0/layout/main');
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2546157690,
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
          var _config = require("@bg/docs/config");
          var _subItem = require("./sub-item");
          /*bundle*/
          function Layout() {
            const {
              sidebarItems
            } = _config.default.params;
            const output = sidebarItems.map((item, index) => {
              if (!!item.children) return React.createElement(_subItem.SubItem, {
                key: index,
                item: item
              });
              return React.createElement(_item.Item, {
                item: item,
                key: index
              });
            });
            return React.createElement(_menu.SidebarHeader, {
              items: output,
              logo: React.createElement(_titleDoc.TitleDoc, null)
            }, React.createElement("beyond-layout-children", null));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/item
      ****************************/

      ims.set('./views/item', {
        hash: 1262800306,
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
            const navigate = event => {
              const {
                dataset
              } = event.currentTarget;
              const url = `${dataset.path}${dataset.sub ?? ""}`;
              _routing.routing.pushState(url);
            };
            return _react.default.createElement("li", {
              onClick: navigate,
              "data-sub": item.subPath,
              "data-path": item.path
            }, item.label);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./views/sub-item
      ********************************/

      ims.set('./views/sub-item', {
        hash: 1537337777,
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
              "data-sub": item.subPath,
              "data-path": item.path
            }, item.label), isOpen && children);
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/title-doc
      *********************************/

      ims.set('./views/title-doc', {
        hash: 2114973113,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TitleDoc = TitleDoc;
          var _react = require("react");
          function TitleDoc() {
            return _react.default.createElement("h1", null, "Documentaci\u00F3n");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O1VDNUJBO1VBRU0sU0FBVVEsUUFBUTtZQUN0QixPQUNFUCw4REFFSztVQUVUIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIkxheW91dCIsImV4cG9ydHMiLCJzaWRlYmFySXRlbXMiLCJjb25maWciLCJwYXJhbXMiLCJvdXRwdXQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJjaGlsZHJlbiIsIlJlYWN0IiwiU3ViSXRlbSIsImtleSIsIkl0ZW0iLCJTaWRlYmFySGVhZGVyIiwiaXRlbXMiLCJsb2dvIiwiVGl0bGVEb2MiLCJuYXZpZ2F0ZSIsImV2ZW50IiwiZGF0YXNldCIsImN1cnJlbnRUYXJnZXQiLCJ1cmwiLCJwYXRoIiwic3ViIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIm9uQ2xpY2siLCJzdWJQYXRoIiwibGFiZWwiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ1c2VTdGF0ZSIsInN1Ykl0ZW0iLCJ0b2dnbGVPcGVuIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvdmlld3MvaW5kZXgudHN4IiwidHMvdmlld3MvaXRlbS50c3giLCJ0cy92aWV3cy9zdWItaXRlbS50c3giLCJ0cy92aWV3cy90aXRsZS1kb2MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=