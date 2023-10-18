System.register(["@beyond-js/kernel@0.1.8/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.8/routing", "@bgroup/ui@0.0.31/image", "@beyond-js/kernel@0.1.8/core", "@bgroup/ui@0.0.31/icons", "@bgroup/ui@0.0.31/perfect-scrollbar", "@beyond-js/kernel@0.1.8/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, AppLogo, AppMenu, __beyond_pkg, hmr;
  _export({
    AppLogo: void 0,
    AppMenu: void 0
  });
  return {
    setters: [function (_beyondJsKernel018Bundle) {
      dependency_0 = _beyondJsKernel018Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsKernel018Routing) {
      dependency_2 = _beyondJsKernel018Routing;
    }, function (_bgroupUi0031Image) {
      dependency_3 = _bgroupUi0031Image;
    }, function (_beyondJsKernel018Core) {
      dependency_4 = _beyondJsKernel018Core;
    }, function (_bgroupUi0031Icons) {
      dependency_5 = _bgroupUi0031Icons;
    }, function (_bgroupUi0031PerfectScrollbar) {
      dependency_6 = _bgroupUi0031PerfectScrollbar;
    }, function (_beyondJsKernel018Styles) {
      dependency_7 = _beyondJsKernel018Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.4"], ["@beyond-js/react-widgets", "18.21.1"], ["@bgroup/ui", "0.0.25"], ["socket.io", "4.6.0"], ["socket.io-client", "4.6.0"], ["@types/react", "18.0.27"], ["@types/react-dom", "18.0.10"], ["@jadmin/ui", "1.0.0"], ["@bg/docs", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@jadmin/ui@1.0.0/menu"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['@bgroup/ui/image', dependency_3], ['@beyond-js/kernel/core', dependency_4], ['@bgroup/ui/icons', dependency_5], ['@bgroup/ui/perfect-scrollbar', dependency_6], ['@beyond-js/kernel/styles', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@jadmin/ui@1.0.0/menu');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 1653831888,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContextMenu = void 0;
          var _react = require("react");
          const ContextMenu = exports.ContextMenu = (0, _react.createContext)({});
        }
      });

      /**********************
      INTERNAL MODULE: ./logo
      **********************/

      ims.set('./logo', {
        hash: 3945918570,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppLogo = AppLogo;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _image = require("@bgroup/ui/image");
          /*bundle*/
          function AppLogo() {
            const navigate = event => {
              event.stopPropagation();
              _routing.routing.pushState('/');
            };
            //const {application}: params = beyond.params;
            return React.createElement("div", {
              className: "logo",
              onClick: navigate
            }, React.createElement(_image.BeyondImage, {
              src: `${globalThis.baseDir}assets/logo.png`,
              alt: "logo",
              className: "logo-header",
              onClick: navigate
            }));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./menu
      **********************/

      ims.set('./menu', {
        hash: 947168209,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppMenu = AppMenu;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("@bgroup/ui/icons");
          var _client = require("./options/client");
          var _context = require("./context");
          var _perfectScrollbar = require("@bgroup/ui/perfect-scrollbar");
          /*bundle*/
          function AppMenu(props) {
            const {
              open,
              menu
            } = props;
            const [subMenu, setSubMenu] = React.useState([]);
            const submenu = React.useRef(null);
            const container = React.useRef(null);
            const cls = `app-menu rtl-ps-none sidebar-left ps${open ? ' open' : ''}`;
            React.useEffect(() => {
              const ele = container.current;
              const handleOver = event => {
                let {
                  target
                } = event;
                target = target.nodeName.toLowerCase() !== 'li' ? target.closest('li') : target;
                if (!target) return;
                if (target.classList.contains('tab-sub-container') || submenu.current.contains(target)) return;
                if (!target.dataset.children) {
                  submenu.current.classList.add('hide');
                  setSubMenu([]);
                  return;
                }
                const child = JSON.parse(target.dataset.children);
                setSubMenu(child);
                submenu.current.classList.remove('hide');
              };
              const handleLeave = () => submenu.current.classList.add('hide');
              ele.addEventListener('mouseover', handleOver);
              ele.addEventListener('mouseleave', handleLeave);
              return () => {
                ele.removeEventListener('mouseover', handleOver);
                ele.removeEventListener('mouseleave', handleLeave);
              };
            }, []);
            const navigate = event => {
              event.preventDefault();
              const target = event.currentTarget;
              const page = target.dataset.navigate;
              if (!page) return;
              _routing.routing.pushState(page);
            };
            const value = {
              navigate
            };
            const output = !!subMenu.length && subMenu.map(option => {
              return React.createElement("li", {
                "data-navigate": option.path,
                key: option.id,
                className: "list-sub-option",
                onClick: navigate
              }, React.createElement("a", {
                className: "a-sub-option"
              }, React.createElement(_icons.BeyondIcon, {
                className: "sub-icon",
                icon: option.icon
              }), React.createElement("span", null, option.name)));
            });
            return React.createElement(_context.ContextMenu.Provider, {
              value: value
            }, React.createElement("div", {
              ref: container
            }, React.createElement(_perfectScrollbar.BeyondScrollContainer, {
              className: cls,
              "data-perfect-scrollbar": "",
              "data-suppress-scroll-x": "true"
            }, React.createElement("ul", {
              className: "navigation-left"
            }, React.createElement(_client.Client, {
              menu: menu
            })), React.createElement("div", {
              className: "ps__rail-x"
            }, React.createElement("div", {
              className: "ps__thumb-x",
              tabIndex: 0
            })), React.createElement("div", {
              className: "ps__rail-y"
            }, React.createElement("div", {
              className: " ps__thumb-y",
              tabIndex: 0
            }))), React.createElement("ul", {
              ref: submenu,
              className: "tab-sub-container hide"
            }, output)));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./options/client
      ********************************/

      ims.set('./options/client', {
        hash: 3679561394,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Client = Client;
          var React = require("react");
          var _item = require("./item");
          function Client({
            menu
          }) {
            const output = menu.map(item => {
              return React.createElement(_item.Item, {
                key: item.id,
                item: item
              });
            });
            return React.createElement(React.Fragment, null, output);
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./options/item
      ******************************/

      ims.set('./options/item', {
        hash: 2097719664,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var React = _react;
          var _context = require("../context");
          var _icons = require("@bgroup/ui/icons");
          function Item({
            item
          }) {
            const {
              navigate
            } = (0, _react.useContext)(_context.ContextMenu);
            return React.createElement("li", {
              onClick: navigate,
              className: "nav-item",
              "data-navigate": item.path,
              "data-children": !!item.submenu.length ? JSON.stringify(item.submenu) : ""
            }, React.createElement(_icons.BeyondIcon, {
              icon: item.icon,
              "data-children": !!item.submenu.length ? JSON.stringify(item.submenu) : "",
              className: item.icon
            }), React.createElement("span", {
              "data-children": !!item.submenu.length ? JSON.stringify(item.submenu) : ""
            }, item.name));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./logo",
        "from": "AppLogo",
        "name": "AppLogo"
      }, {
        "im": "./menu",
        "from": "AppMenu",
        "name": "AppMenu"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AppLogo') && _export("AppLogo", AppLogo = require ? require('./logo').AppLogo : value);
        (require || prop === 'AppMenu') && _export("AppMenu", AppMenu = require ? require('./menu').AppMenu : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQ29udGV4dE1lbnUiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsIlJlYWN0IiwiX3JvdXRpbmciLCJfaW1hZ2UiLCJBcHBMb2dvIiwibmF2aWdhdGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsIkJleW9uZEltYWdlIiwic3JjIiwiZ2xvYmFsVGhpcyIsImJhc2VEaXIiLCJhbHQiLCJfaWNvbnMiLCJfY2xpZW50IiwiX2NvbnRleHQiLCJfcGVyZmVjdFNjcm9sbGJhciIsIkFwcE1lbnUiLCJwcm9wcyIsIm9wZW4iLCJtZW51Iiwic3ViTWVudSIsInNldFN1Yk1lbnUiLCJ1c2VTdGF0ZSIsInN1Ym1lbnUiLCJ1c2VSZWYiLCJjb250YWluZXIiLCJjbHMiLCJ1c2VFZmZlY3QiLCJlbGUiLCJjdXJyZW50IiwiaGFuZGxlT3ZlciIsInRhcmdldCIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJkYXRhc2V0IiwiY2hpbGRyZW4iLCJhZGQiLCJjaGlsZCIsIkpTT04iLCJwYXJzZSIsInJlbW92ZSIsImhhbmRsZUxlYXZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCJwYWdlIiwidmFsdWUiLCJvdXRwdXQiLCJsZW5ndGgiLCJtYXAiLCJvcHRpb24iLCJwYXRoIiwia2V5IiwiaWQiLCJCZXlvbmRJY29uIiwiaWNvbiIsIm5hbWUiLCJQcm92aWRlciIsInJlZiIsIkJleW9uZFNjcm9sbENvbnRhaW5lciIsIkNsaWVudCIsInRhYkluZGV4IiwiX2l0ZW0iLCJpdGVtIiwiSXRlbSIsIkZyYWdtZW50IiwidXNlQ29udGV4dCIsInN0cmluZ2lmeSJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2NvbnRleHQudHN4IiwiL2NvZGUvdHMvbG9nby50c3giLCIvY29kZS90cy9tZW51LnRzeCIsIi9jb2RlL3RzL29wdGlvbnMvY2xpZW50LnRzeCIsIi9jb2RlL3RzL29wdGlvbnMvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDTyxNQUFNQyxXQUFXLEdBQUFDLE9BQUEsQ0FBQUQsV0FBQSxHQUFrQixJQUFBRixNQUFBLENBQUFJLGFBQWEsRUFBQyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDRDNELElBQUFDLEtBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLFFBQUEsR0FBQUwsT0FBQTtVQUNBLElBQUFNLE1BQUEsR0FBQU4sT0FBQTtVQUdPO1VBQVUsU0FDUk8sT0FBT0EsQ0FBQTtZQUVaLE1BQU1DLFFBQVEsR0FBSUMsS0FBSyxJQUFVO2NBQzdCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QkwsUUFBQSxDQUFBTSxPQUFPLENBQUNDLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFDMUIsQ0FBQztZQUlEO1lBQ0EsT0FDSVIsS0FBQSxDQUFBUyxhQUFBO2NBQUtDLFNBQVMsRUFBQyxNQUFNO2NBQUNDLE9BQU8sRUFBRVA7WUFBUSxHQUNuQ0osS0FBQSxDQUFBUyxhQUFBLENBQUNQLE1BQUEsQ0FBQVUsV0FBVztjQUFDQyxHQUFHLEVBQUUsR0FBR0MsVUFBVSxDQUFDQyxPQUFPLGlCQUFpQjtjQUFFQyxHQUFHLEVBQUMsTUFBTTtjQUFDTixTQUFTLEVBQUMsYUFBYTtjQUFDQyxPQUFPLEVBQUVQO1lBQVEsRUFBRyxDQUMvRztVQUdkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCQSxJQUFBSixLQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxRQUFBLEdBQUFMLE9BQUE7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