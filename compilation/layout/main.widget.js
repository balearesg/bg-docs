System.register(["@beyond-js/widgets@0.1.3/render", "@beyond-js/kernel@0.1.8/bundle", "@beyond-js/kernel@0.1.8/styles", "@beyond-js/react-widgets@18.20.4/base", "react@18.2.0", "@bg/docs@1.0.0/menu", "@bg/docs@1.0.0/config", "@beyond-js/kernel@0.1.8/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, Layout, __beyond_pkg, hmr;
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
    }, function (_bgDocs100Config) {
      dependency_6 = _bgDocs100Config;
    }, function (_beyondJsKernel018Routing) {
      dependency_7 = _beyondJsKernel018Routing;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-widgets/base', dependency_3], ['react', dependency_4], ['@bg/docs/menu', dependency_5], ['@bg/docs/config', dependency_6], ['@beyond-js/kernel/routing', dependency_7]]);
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1651583922,
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
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function Layout() {
            const {
              sidebarItems
            } = _config.default.params;
            const user = JSON.parse(localStorage.getItem('session-jadmin'));
            // TODO
            const uri = new _routing.URI('/auth/login');
            if (!user) _routing.routing.redirect(uri);
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
            //if (!ready) return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiZXhwb3J0cyIsIlJlYWN0IiwiX21lbnUiLCJfdGl0bGVEb2MiLCJfaXRlbSIsIl9jb25maWciLCJfc3ViSXRlbSIsIl9yb3V0aW5nIiwic2lkZWJhckl0ZW1zIiwiZGVmYXVsdCIsInBhcmFtcyIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXJpIiwiVVJJIiwicm91dGluZyIsInJlZGlyZWN0Iiwib3V0cHV0IiwibWFwIiwiaXRlbSIsImluZGV4IiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiU3ViSXRlbSIsImtleSIsIkl0ZW0iLCJjbGFzc05hbWUiLCJTaWRlYmFySGVhZGVyIiwiaXRlbXMiLCJsb2dvIiwiVGl0bGVEb2MiLCJfcmVhY3QiLCJuYXZpZ2F0ZSIsImV2ZW50IiwiZGF0YXNldCIsImN1cnJlbnRUYXJnZXQiLCJ1cmwiLCJwYXRoIiwic3ViIiwicHVzaFN0YXRlIiwib25DbGljayIsInN1YlBhdGgiLCJsYWJlbCIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZVN0YXRlIiwic3ViSXRlbSIsInRvZ2dsZU9wZW4iLCJGcmFnbWVudCIsImdvSG9tZSIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3N1Yi1pdGVtLnRzeCIsIi90cy92aWV3cy90aXRsZS1kb2MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFB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