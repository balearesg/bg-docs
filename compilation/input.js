System.register(["@beyond-js/kernel@0.1.8/bundle", "@beyond-js/kernel@0.1.8/styles", "react@18.2.0", "@bgroup/ui@0.0.31/form", "@bg/docs@1.0.0/app-icon"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Input, Select, TextArea, __beyond_pkg, hmr;
  _export({
    Input: void 0,
    Select: void 0,
    TextArea: void 0
  });
  return {
    setters: [function (_beyondJsKernel018Bundle) {
      dependency_0 = _beyondJsKernel018Bundle;
    }, function (_beyondJsKernel018Styles) {
      dependency_1 = _beyondJsKernel018Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_bgroupUi0031Form) {
      dependency_3 = _bgroupUi0031Form;
    }, function (_bgDocs100AppIcon) {
      dependency_4 = _bgDocs100AppIcon;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/auth-api", "1.0.0"], ["@bg/auth-models", "1.0.0"], ["@bg/mailer", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.20.4"], ["@bgroup/ui", "0.0.31"], ["@mdx-js/mdx", "2.3.0"], ["@mdx-js/react", "2.3.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.0"], ["@beyond-js/kernel", "0.1.8"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/backend", "0.1.4"], ["@bg/docs", "1.0.0"], ["@bg/docs", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bg/docs@1.0.0/input"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@bgroup/ui/form', dependency_3], ['@bg/docs/app-icon', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/docs@1.0.0/input');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 4057575419,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Input = Input;
          var _react = require("react");
          var _form = require("@bgroup/ui/form");
          ;
          /*bundle*/
          function Input(props) {
            const {
              label
            } = props;
            const properties = Object.assign({}, props);
            delete properties.label;
            return _react.default.createElement("div", {
              className: 'jadmin-input'
            }, _react.default.createElement("label", {
              className: 'label-jadmin'
            }, label), _react.default.createElement(_form.BeyondInput, {
              ...properties
            }));
          }
          ;
        }
      });

      /************************
      INTERNAL MODULE: ./select
      ************************/

      ims.set('./select', {
        hash: 3302618885,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Select = Select;
          var _react = require("react");
          var _appIcon = require("@bg/docs/app-icon");
          /*bundle*/
          function Select(props) {
            const {
              label,
              options,
              className
            } = props;
            const output = options.map(item => _react.default.createElement("option", {
              key: item.value,
              value: item.value
            }, item.label));
            const cls = `${className ?? 'form-group-select'}`;
            const properties = Object.assign({}, props);
            delete properties.className;
            delete properties.label;
            delete properties.name;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("label", null, label), _react.default.createElement("select", {
              className: "select",
              title: label,
              ...properties,
              id: props.name
            }, _react.default.createElement("option", null, label), output), _react.default.createElement(_appIcon.AppIcon, {
              icon: "down"
            }));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./textarea
      **************************/

      ims.set('./textarea', {
        hash: 2409752715,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextArea = TextArea;
          var _react = require("react");
          var _form = require("@bgroup/ui/form");
          ;
          /*bundle*/
          function TextArea(props) {
            const {
              label
            } = props;
            const properties = Object.assign({}, props);
            delete properties.label;
            return _react.default.createElement("div", {
              className: 'jadmin-input'
            }, _react.default.createElement("label", {
              className: 'label-jadmin'
            }, label), _react.default.createElement(_form.BeyondTextarea, {
              ...properties
            }));
          }
          ;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Input",
        "name": "Input"
      }, {
        "im": "./select",
        "from": "Select",
        "name": "Select"
      }, {
        "im": "./textarea",
        "from": "TextArea",
        "name": "TextArea"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Input') && _export("Input", Input = require ? require('./index').Input : value);
        (require || prop === 'Select') && _export("Select", Select = require ? require('./select').Select : value);
        (require || prop === 'TextArea') && _export("TextArea", TextArea = require ? require('./textarea').TextArea : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2Zvcm0iLCJJbnB1dCIsInByb3BzIiwibGFiZWwiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJCZXlvbmRJbnB1dCIsIl9hcHBJY29uIiwiU2VsZWN0Iiwib3B0aW9ucyIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJrZXkiLCJ2YWx1ZSIsImNscyIsIm5hbWUiLCJ0aXRsZSIsImlkIiwiQXBwSWNvbiIsImljb24iLCJUZXh0QXJlYSIsIkJleW9uZFRleHRhcmVhIl0sInNvdXJjZXMiOlsiL2NvZGUvdHMvaW5kZXgudHN4IiwiL2NvZGUvdHMvc2VsZWN0LnRzeCIsIi9jb2RlL3RzL3RleHRhcmVhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQVlDO1VBRU07VUFBVSxTQUFVRSxLQUFLQSxDQUFDQyxLQUFZO1lBQ3pDLE1BQU07Y0FBRUM7WUFBSyxDQUFFLEdBQUdELEtBQUs7WUFDdkIsTUFBTUUsVUFBVSxHQUFXQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxFQUFFLEVBQUVKLEtBQUssQ0FBQztZQUNuRCxPQUFPRSxVQUFVLENBQUNELEtBQUs7WUFDdkIsT0FDSUwsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWMsR0FDekJYLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQU9DLFNBQVMsRUFBQztZQUFjLEdBQUVOLEtBQUssQ0FBUyxFQUMvQ0wsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsS0FBQSxDQUFBVSxXQUFXO2NBQUEsR0FBS047WUFBVSxFQUFJLENBQzdCO1VBRWQ7VUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkQsSUFBQU4sTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQVksUUFBQSxHQUFBWixPQUFBO1VBV087VUFBVSxTQUFVYSxNQUFNQSxDQUFDVixLQUFZO1lBQzdDLE1BQU07Y0FBRUMsS0FBSztjQUFFVSxPQUFPO2NBQUVKO1lBQVMsQ0FBRSxHQUFHUCxLQUFLO1lBQzNDLE1BQU1ZLE1BQU0sR0FBa0JELE9BQU8sQ0FBQ0UsR0FBRyxDQUN2Q0MsSUFBWSxJQUNabEIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBUVMsR0FBRyxFQUFFRCxJQUFJLENBQUNFLEtBQUs7Y0FBRUEsS0FBSyxFQUFFRixJQUFJLENBQUNFO1lBQUssR0FDeENGLElBQUksQ0FBQ2IsS0FBSyxDQUVaLENBQ0Q7WUFDRCxNQUFNZ0IsR0FBRyxHQUFXLEdBQUdWLFNBQVMsSUFBSSxtQkFBbUIsRUFBRTtZQUN6RCxNQUFNTCxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsRUFBRUosS0FBSyxDQUFDO1lBQzNDLE9BQU9FLFVBQVUsQ0FBQ0ssU0FBUztZQUMzQixPQUFPTCxVQUFVLENBQUNELEtBQUs7WUFDdkIsT0FBT0MsVUFBVSxDQUFDZ0IsSUFBSTtZQUN0QixPQUNDdEIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFFVTtZQUFHLEdBQ2xCckIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsZ0JBQVFMLEtBQUssQ0FBUyxFQUN0QkwsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBUUMsU0FBUyxFQUFDLFFBQVE7Y0FBQ1ksS0FBSyxFQUFFbEIsS0FBSztjQUFBLEdBQU1DLFVBQVU7Y0FBRWtCLEVBQUUsRUFBRXBCLEtBQUssQ0FBQ2tCO1lBQUksR0FDdEV0QixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxpQkFBU0wsS0FBSyxDQUFVLEVBQ3ZCVyxNQUFNLENBQ0MsRUFDVGhCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNHLFFBQUEsQ0FBQVksT0FBTztjQUFDQyxJQUFJLEVBQUM7WUFBTSxFQUFHLENBQ2xCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcENBLElBQUExQixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFTRztVQUVJO1VBQVUsU0FBVTBCLFFBQVFBLENBQUN2QixLQUFhO1lBQzdDLE1BQU07Y0FBRUM7WUFBSyxDQUFFLEdBQUdELEtBQUs7WUFDdkIsTUFBTUUsVUFBVSxHQUFXQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxFQUFFLEVBQUVKLEtBQUssQ0FBQztZQUNuRCxPQUFPRSxVQUFVLENBQUNELEtBQUs7WUFDdkIsT0FDSUwsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWMsR0FDekJYLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQU9DLFNBQVMsRUFBQztZQUFjLEdBQUVOLEtBQUssQ0FBUyxFQUMvQ0wsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsS0FBQSxDQUFBMEIsY0FBYztjQUFBLEdBQUt0QjtZQUFVLEVBQUksQ0FDaEM7VUFFZDtVQUFDIn0=