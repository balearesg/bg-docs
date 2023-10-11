System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@bgroup/ui@0.0.34/icons", "@bgroup/ui@0.0.34/perfect-scrollbar", "@bg/auth-api@1.0.0/wrapper.ts", "@jadmin/ui@1.0.0/hooks", "@bgroup/ui@0.0.34/spinner"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, SidebarHeader, __beyond_pkg, hmr;
  _export("SidebarHeader", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_bgroupUi0034Icons) {
      dependency_3 = _bgroupUi0034Icons;
    }, function (_bgroupUi0034PerfectScrollbar) {
      dependency_4 = _bgroupUi0034PerfectScrollbar;
    }, function (_bgAuthApi100WrapperTs) {
      dependency_5 = _bgAuthApi100WrapperTs;
    }, function (_jadminUi100Hooks) {
      dependency_6 = _jadminUi100Hooks;
    }, function (_bgroupUi0034Spinner) {
      dependency_7 = _bgroupUi0034Spinner;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/auth-api", "1.0.0"], ["@bg/auth-models", "1.0.0"], ["@bg/mailer", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.20.4"], ["@bgroup/ui", "0.0.34"], ["@mdx-js/mdx", "2.3.0"], ["@mdx-js/react", "2.3.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/backend", "0.1.9"], ["@bg/docs", "1.0.0"], ["@bg/docs", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bg/docs@1.0.0/menu"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@bgroup/ui/icons', dependency_3], ['@bgroup/ui/perfect-scrollbar', dependency_4], ['@bg/auth-api/wrapper.ts', dependency_5], ['@jadmin/ui/hooks', dependency_6], ['@bgroup/ui/spinner', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/docs@1.0.0/menu');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./header
      ************************/
      ims.set('./header', {
        hash: 1778028598,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _user = require("./user");
          function Header({
            isOpen
          }) {
            const cls = isOpen ? "header expand" : "header";
            return _react.default.createElement("header", {
              className: cls
            }, _react.default.createElement(_user.User, null));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3947512290,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SidebarHeader = SidebarHeader;
          var _react = require("react");
          var _header = require("./header");
          var _sidebar = require("./sidebar");
          /*bundle*/
          function SidebarHeader(props) {
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const cls = isOpen ? 'main-content expand' : 'main-content ';
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "container-sidebar-header"
            }, _react.default.createElement(_sidebar.DropdownSidebar, {
              ...props,
              isOpen: isOpen,
              setIsOpen: setIsOpen
            }), _react.default.createElement(_header.Header, {
              isOpen: isOpen
            })), _react.default.createElement("main", {
              className: cls
            }, props.children));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./info
      **********************/

      ims.set('./info', {
        hash: 3910137408,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserInfo = UserInfo;
          var _react = require("react");
          function UserInfo({
            fullNames,
            email
          }) {
            return _react.default.createElement("div", {
              className: "user-info"
            }, _react.default.createElement("strong", null, fullNames), _react.default.createElement("span", null, email));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./sidebar
      *************************/

      ims.set('./sidebar', {
        hash: 3898879506,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownSidebar = DropdownSidebar;
          var _react = require("react");
          var _icons = require("@bgroup/ui/icons");
          var _perfectScrollbar = require("@bgroup/ui/perfect-scrollbar");
          function DropdownSidebar(props) {
            const {
              onChange,
              items,
              logo,
              setIsOpen,
              isOpen
            } = props;
            const sidebarRef = _react.default.useRef(null);
            const cls = isOpen ? 'sidebar open' : 'sidebar closed';
            const title = isOpen ? 'close' : 'open';
            function toggleIsOpen() {
              setIsOpen(!isOpen);
              if (onChange) onChange(isOpen);
            }
            return _react.default.createElement("aside", {
              ref: sidebarRef,
              className: cls
            }, _react.default.createElement("div", {
              className: "sidebar__header"
            }, logo && _react.default.createElement("div", {
              className: "logo"
            }, logo), _react.default.createElement(_icons.BeyondIconButton, {
              title: title,
              onClick: toggleIsOpen,
              icon: "chevronRight",
              className: "toggle__btn"
            })), _react.default.createElement(_perfectScrollbar.BeyondScrollContainer, {
              className: "sidebar__nav"
            }, _react.default.createElement("p", {
              className: "documentation-subtitle"
            }, "DOCUMENTATION"), _react.default.createElement("ul", {
              className: "sidebar__list"
            }, items)));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./user-img
      **************************/

      ims.set('./user-img', {
        hash: 3694545634,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserImage = UserImage;
          var _react = require("react");
          function UserImage() {
            return _react.default.createElement("div", {
              className: "user-img"
            }, _react.default.createElement("svg", {
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg"
            }, _react.default.createElement("path", {
              d: "M5 20V19C5 16.2386 7.23858 14 10 14H14C16.7614 14 19 16.2386 19 19V20M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z",
              strokeWidth: "1",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./user
      **********************/

      ims.set('./user', {
        hash: 4094940848,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = User;
          var _react = require("react");
          var _wrapper = require("@bg/auth-api/wrapper.ts");
          var _userImg = require("./user-img");
          var _hooks = require("@jadmin/ui/hooks");
          var _spinner = require("@bgroup/ui/spinner");
          var _info = require("./info");
          function User() {
            const [user, setUser] = _react.default.useState(_wrapper.session.user);
            const [fetching, setFetching] = _react.default.useState(_wrapper.session.fetching);
            const email = _wrapper.session.isLogged && user.email && user.email.split('@')[0];
            (0, _hooks.useBinder)([_wrapper.session], () => setUser(_wrapper.session.user), 'user-changed');
            (0, _hooks.useBinder)([_wrapper.session], () => setFetching(_wrapper.session.fetching), 'user.loading');
            const output = fetching ? _react.default.createElement(_spinner.BeyondSpinner, null) : _react.default.createElement(_info.UserInfo, {
              fullNames: user.fullNames,
              email: email
            });
            return _react.default.createElement("div", {
              className: "content-user"
            }, _react.default.createElement(_userImg.UserImage, null), output);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "SidebarHeader",
        "name": "SidebarHeader"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'SidebarHeader') && _export("SidebarHeader", SidebarHeader = require ? require('./index').SidebarHeader : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3VzZXIiLCJIZWFkZXIiLCJpc09wZW4iLCJjbHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIlVzZXIiLCJfaGVhZGVyIiwiX3NpZGViYXIiLCJTaWRlYmFySGVhZGVyIiwicHJvcHMiLCJzZXRJc09wZW4iLCJ1c2VTdGF0ZSIsIkZyYWdtZW50IiwiRHJvcGRvd25TaWRlYmFyIiwiY2hpbGRyZW4iLCJVc2VySW5mbyIsImZ1bGxOYW1lcyIsImVtYWlsIiwiX2ljb25zIiwiX3BlcmZlY3RTY3JvbGxiYXIiLCJvbkNoYW5nZSIsIml0ZW1zIiwibG9nbyIsInNpZGViYXJSZWYiLCJ1c2VSZWYiLCJ0aXRsZSIsInRvZ2dsZUlzT3BlbiIsInJlZiIsIkJleW9uZEljb25CdXR0b24iLCJvbkNsaWNrIiwiaWNvbiIsIkJleW9uZFNjcm9sbENvbnRhaW5lciIsIlVzZXJJbWFnZSIsInZpZXdCb3giLCJ4bWxucyIsImQiLCJzdHJva2VXaWR0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsIl93cmFwcGVyIiwiX3VzZXJJbWciLCJfaG9va3MiLCJfc3Bpbm5lciIsIl9pbmZvIiwidXNlciIsInNldFVzZXIiLCJzZXNzaW9uIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImlzTG9nZ2VkIiwic3BsaXQiLCJ1c2VCaW5kZXIiLCJvdXRwdXQiLCJCZXlvbmRTcGlubmVyIl0sInNvdXJjZXMiOlsiL2NvZGUvdHMvaGVhZGVyLnRzeCIsIi9jb2RlL3RzL2luZGV4LnRzeCIsIi9jb2RlL3RzL2luZm8udHN4IiwiL2NvZGUvdHMvc2lkZWJhci50c3giLCIvY29kZS90cy91c2VyLWltZy50c3giLCIvY29kZS90cy91c2VyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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