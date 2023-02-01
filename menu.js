System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0", "@bgroup/ui@0.0.28/icon", "@bgroup/ui@0.0.28/perfect-scrollbar", "@bgroup/ui@0.0.28/image"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, SidebarHeader, __beyond_pkg, hmr;
  _export("SidebarHeader", void 0);
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_bgroupUi0028Icon) {
      dependency_2 = _bgroupUi0028Icon;
    }, function (_bgroupUi0028PerfectScrollbar) {
      dependency_3 = _bgroupUi0028PerfectScrollbar;
    }, function (_bgroupUi0028Image) {
      dependency_4 = _bgroupUi0028Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-widgets", "18.21.1"], ["@bgroup/ui", "0.0.28"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["socket.io-client", "4.5.4"], ["@bg/docs", "1.0.0"], ["@bg/docs", "1.0.0"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['@bgroup/ui/icon', dependency_2], ['@bgroup/ui/perfect-scrollbar', dependency_3], ['@bgroup/ui/image', dependency_4]]);
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
        hash: 3985875540,
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
            const cls = isOpen ? "main-content expand" : "main-content ";
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

      /*************************
      INTERNAL MODULE: ./sidebar
      *************************/

      ims.set('./sidebar', {
        hash: 1071821991,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownSidebar = DropdownSidebar;
          var _react = require("react");
          var _icon = require("@bgroup/ui/icon");
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
            const cls = isOpen ? "sidebar open" : "sidebar closed";
            const title = isOpen ? "close" : "open";
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
            }, logo), _react.default.createElement(_icon.BeyondIconButton, {
              title: title,
              onClick: toggleIsOpen,
              icon: "chevronRight",
              className: "toggle__btn"
            })), _react.default.createElement(_perfectScrollbar.BeyondScrollContainer, {
              className: "sidebar__nav"
            }, _react.default.createElement("ul", {
              className: "sidebar__list"
            }, items)));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./user
      **********************/

      ims.set('./user', {
        hash: 1674496829,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = User;
          var _react = require("react");
          var _image = require("@bgroup/ui/image");
          function User() {
            return _react.default.createElement("div", {
              className: 'content-user'
            }, _react.default.createElement(_image.BeyondImage, {
              alt: " "
            }), _react.default.createElement("div", {
              className: 'user-info'
            }, _react.default.createElement("strong", null, "Lorem ipsum"), _react.default.createElement("span", null, "Lorem ipsum")));
          }
          ;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBRU0sU0FBVUEsTUFBTSxDQUFDO1lBQUVDO1VBQU0sQ0FBRTtZQUMvQixNQUFNQyxHQUFHLEdBQVdELE1BQU0sR0FBRyxlQUFlLEdBQUcsUUFBUTtZQUN2RCxPQUNFRTtjQUFRQyxTQUFTLEVBQUVGO1lBQUcsR0FDcEJDLDZCQUFDRSxVQUFJLE9BQUcsQ0FDRDtVQUViOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZBO1VBQ0E7VUFDQTtVQVVPO1VBQVUsU0FBVUMsYUFBYSxDQUN0Q0MsS0FBK0I7WUFFL0IsTUFBTSxDQUFDTixNQUFNLEVBQUVPLFNBQVMsQ0FBQyxHQUFHTCxjQUFLLENBQUNNLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFDMUQsTUFBTVAsR0FBRyxHQUFXRCxNQUFNLEdBQUcscUJBQXFCLEdBQUcsZUFBZTtZQUNwRSxPQUNFRSw0REFDRUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTBCLEdBQ3ZDRCw2QkFBQ08sd0JBQWU7Y0FBQSxHQUFLSCxLQUFLO2NBQUVOLE1BQU0sRUFBRUEsTUFBTTtjQUFFTyxTQUFTLEVBQUVBO1lBQVMsRUFBSSxFQUNwRUwsNkJBQUNILGNBQU07Y0FBQ0MsTUFBTSxFQUFFQTtZQUFNLEVBQUksQ0FDdEIsRUFDTkU7Y0FBTUMsU0FBUyxFQUFFRjtZQUFHLEdBQUdLLEtBQUssQ0FBQ0ksUUFBUSxDQUFRLENBQzVDO1VBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJBO1VBQ0E7VUFDQTtVQVNNLFNBQVdELGVBQWUsQ0FDOUJILEtBQVk7WUFHWixNQUFNO2NBQUVLLFFBQVE7Y0FBRUMsS0FBSztjQUFFQyxJQUFJO2NBQUVOLFNBQVM7Y0FBRVA7WUFBTSxDQUFFLEdBQUdNLEtBQUs7WUFDMUQsTUFBTVEsVUFBVSxHQUNkWixjQUFLLENBQUNhLE1BQU0sQ0FBYyxJQUFJLENBQUM7WUFDakMsTUFBTWQsR0FBRyxHQUFXRCxNQUFNLEdBQUcsY0FBYyxHQUFHLGdCQUFnQjtZQUM5RCxNQUFNZ0IsS0FBSyxHQUFXaEIsTUFBTSxHQUFHLE9BQU8sR0FBRyxNQUFNO1lBRS9DLFNBQVNpQixZQUFZO2NBQ25CVixTQUFTLENBQUMsQ0FBQ1AsTUFBTSxDQUFDO2NBQ2xCLElBQUlXLFFBQVEsRUFBRUEsUUFBUSxDQUFDWCxNQUFNLENBQUM7WUFDaEM7WUFFQSxPQUNFRTtjQUFPZ0IsR0FBRyxFQUFFSixVQUFVO2NBQUVYLFNBQVMsRUFBRUY7WUFBRyxHQUNwQ0M7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQzdCVSxJQUFJLElBQUlYO2NBQUtDLFNBQVMsRUFBQztZQUFNLEdBQUVVLElBQUksQ0FBTyxFQUMzQ1gsNkJBQUNpQixzQkFBZ0I7Y0FDZkgsS0FBSyxFQUFFQSxLQUFLO2NBQ1pJLE9BQU8sRUFBRUgsWUFBWTtjQUNyQkksSUFBSSxFQUFDLGNBQWM7Y0FDbkJsQixTQUFTLEVBQUM7WUFBYSxFQUN2QixDQUNFLEVBQ05ELDZCQUFDb0IsdUNBQXFCO2NBQUNuQixTQUFTLEVBQUM7WUFBYyxHQUM3Q0Q7Y0FBSUMsU0FBUyxFQUFDO1lBQWUsR0FBRVMsS0FBSyxDQUFNLENBQ3BCLENBQ2xCO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUNBO1VBQ0E7VUFDTSxTQUFVUixJQUFJO1lBQ2xCLE9BQ0VGO2NBQUtDLFNBQVMsRUFBQztZQUFjLEdBQ3pCRCw2QkFBQ3FCLGtCQUFXO2NBQUNDLEdBQUcsRUFBQztZQUFHLEVBQUcsRUFDdkJ0QjtjQUFLQyxTQUFTLEVBQUM7WUFBVyxHQUN0QkQsMkRBQTRCLEVBQzVCQSx5REFBd0IsQ0FDdEIsQ0FDSjtVQUVWO1VBQUMiLCJuYW1lcyI6WyJIZWFkZXIiLCJpc09wZW4iLCJjbHMiLCJSZWFjdCIsImNsYXNzTmFtZSIsIlVzZXIiLCJTaWRlYmFySGVhZGVyIiwicHJvcHMiLCJzZXRJc09wZW4iLCJ1c2VTdGF0ZSIsIkRyb3Bkb3duU2lkZWJhciIsImNoaWxkcmVuIiwib25DaGFuZ2UiLCJpdGVtcyIsImxvZ28iLCJzaWRlYmFyUmVmIiwidXNlUmVmIiwidGl0bGUiLCJ0b2dnbGVJc09wZW4iLCJyZWYiLCJCZXlvbmRJY29uQnV0dG9uIiwib25DbGljayIsImljb24iLCJCZXlvbmRTY3JvbGxDb250YWluZXIiLCJCZXlvbmRJbWFnZSIsImFsdCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiY29kZS90cy9oZWFkZXIudHN4IiwiY29kZS90cy9pbmRleC50c3giLCJjb2RlL3RzL3NpZGViYXIudHN4IiwiY29kZS90cy91c2VyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdfQ==