System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@bgroup/ui@0.0.34/image", "@beyond-js/kernel@0.1.9/core", "@bgroup/ui@0.0.34/icons", "@bgroup/ui@0.0.34/perfect-scrollbar", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, AppLogo, AppMenu, __beyond_pkg, hmr;
  _export({
    AppLogo: void 0,
    AppMenu: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsKernel019Routing) {
      dependency_2 = _beyondJsKernel019Routing;
    }, function (_bgroupUi0034Image) {
      dependency_3 = _bgroupUi0034Image;
    }, function (_beyondJsKernel019Core) {
      dependency_4 = _beyondJsKernel019Core;
    }, function (_bgroupUi0034Icons) {
      dependency_5 = _bgroupUi0034Icons;
    }, function (_bgroupUi0034PerfectScrollbar) {
      dependency_6 = _bgroupUi0034PerfectScrollbar;
    }, function (_beyondJsKernel019Styles) {
      dependency_7 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/react-widgets", "18.21.1"], ["@bgroup/ui", "0.0.36"], ["socket.io", "4.7.2"], ["socket.io-client", "4.7.2"], ["@types/react", "18.2.21"], ["@types/react-dom", "18.2.7"], ["@jadmin/ui", "1.0.0"], ["@bg/docs", "1.0.0"]]);
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
          const ContextMenu = (0, _react.createContext)({});
          exports.ContextMenu = ContextMenu;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQ29udGV4dE1lbnUiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsIlJlYWN0IiwiX3JvdXRpbmciLCJfaW1hZ2UiLCJBcHBMb2dvIiwibmF2aWdhdGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsIkJleW9uZEltYWdlIiwic3JjIiwiZ2xvYmFsVGhpcyIsImJhc2VEaXIiLCJhbHQiLCJfaWNvbnMiLCJfY2xpZW50IiwiX2NvbnRleHQiLCJfcGVyZmVjdFNjcm9sbGJhciIsIkFwcE1lbnUiLCJwcm9wcyIsIm9wZW4iLCJtZW51Iiwic3ViTWVudSIsInNldFN1Yk1lbnUiLCJ1c2VTdGF0ZSIsInN1Ym1lbnUiLCJ1c2VSZWYiLCJjb250YWluZXIiLCJjbHMiLCJ1c2VFZmZlY3QiLCJlbGUiLCJjdXJyZW50IiwiaGFuZGxlT3ZlciIsInRhcmdldCIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJkYXRhc2V0IiwiY2hpbGRyZW4iLCJhZGQiLCJjaGlsZCIsIkpTT04iLCJwYXJzZSIsInJlbW92ZSIsImhhbmRsZUxlYXZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCJwYWdlIiwidmFsdWUiLCJvdXRwdXQiLCJsZW5ndGgiLCJtYXAiLCJvcHRpb24iLCJwYXRoIiwia2V5IiwiaWQiLCJCZXlvbmRJY29uIiwiaWNvbiIsIm5hbWUiLCJQcm92aWRlciIsInJlZiIsIkJleW9uZFNjcm9sbENvbnRhaW5lciIsIkNsaWVudCIsInRhYkluZGV4IiwiX2l0ZW0iLCJpdGVtIiwiSXRlbSIsIkZyYWdtZW50IiwidXNlQ29udGV4dCIsInN0cmluZ2lmeSJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2NvbnRleHQudHN4IiwiL2NvZGUvdHMvbG9nby50c3giLCIvY29kZS90cy9tZW51LnRzeCIsIi9jb2RlL3RzL29wdGlvbnMvY2xpZW50LnRzeCIsIi9jb2RlL3RzL29wdGlvbnMvaXRlbS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDTyxNQUFNQyxXQUFXLEdBQWtCLElBQUFGLE1BQUEsQ0FBQUcsYUFBYSxFQUFDLEVBQUUsQ0FBQztVQUFDQyxPQUFBLENBQUFGLFdBQUEsR0FBQUEsV0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNENUQsSUFBQUcsS0FBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssUUFBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sTUFBQSxHQUFBTixPQUFBO1VBR087VUFBVSxTQUNSTyxPQUFPQSxDQUFBO1lBRVosTUFBTUMsUUFBUSxHQUFJQyxLQUFLLElBQVU7Y0FDN0JBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCTCxRQUFBLENBQUFNLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLEdBQUcsQ0FBQztZQUMxQixDQUFDO1lBSUQ7WUFDQSxPQUNJUixLQUFBLENBQUFTLGFBQUE7Y0FBS0MsU0FBUyxFQUFDLE1BQU07Y0FBQ0MsT0FBTyxFQUFFUDtZQUFRLEdBQ25DSixLQUFBLENBQUFTLGFBQUEsQ0FBQ1AsTUFBQSxDQUFBVSxXQUFXO2NBQUNDLEdBQUcsRUFBRSxHQUFHQyxVQUFVLENBQUNDLE9BQU8saUJBQWlCO2NBQUVDLEdBQUcsRUFBQyxNQUFNO2NBQUNOLFNBQVMsRUFBQyxhQUFhO2NBQUNDLE9BQU8sRUFBRVA7WUFBUSxFQUFHLENBQy9HO1VBR2Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJBLElBQUFKLEtBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLFFBQUEs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