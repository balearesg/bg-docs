System.register(["@beyond-js/kernel@0.1.8/bundle","react@18.2.0","@beyond-js/kernel@0.1.8/core","@beyond-js/kernel@0.1.8/routing","@beyond-js/kernel@0.1.8/styles","@bgroup/ui@0.0.31/icons","@bgroup/ui@0.0.31/spinner"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.8"],["react","18.2.0"],["@bgroup/ui","0.0.31"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.8/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/routing', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/styles', dep), dep => dependencies.set('@bgroup/ui@0.0.31/icons', dep), dep => dependencies.set('@bgroup/ui@0.0.31/spinner', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/@bgroup/ui/form.0.0.31.js
var form_0_0_31_exports = {};
__export(form_0_0_31_exports, {
  BeyondButton: () => BeyondButton,
  BeyondCheckbox: () => BeyondCheckbox,
  BeyondForm: () => BeyondForm,
  BeyondInput: () => BeyondInput,
  BeyondRadio: () => BeyondRadio,
  BeyondSwitch: () => BeyondSwitch,
  BeyondTextarea: () => BeyondTextarea,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(form_0_0_31_exports);

// node_modules/@bgroup/ui/form/form.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.8/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("@beyond-js/kernel@0.1.8/routing"), 0);
var dependency_3 = __toESM(require("@bgroup/ui@0.0.31/icons"), 0);
var dependency_4 = __toESM(require("@bgroup/ui@0.0.31/spinner"), 0);
var dependency_5 = __toESM(require("@beyond-js/kernel@0.1.8/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/ui@0.0.31/form"
  },
  "type": "code",
  "name": "form"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@beyond-js/kernel/routing", dependency_2], ["@bgroup/ui/icons", dependency_3], ["@bgroup/ui/spinner", dependency_4], ["@beyond-js/kernel/styles", dependency_5]]);
brequire("@beyond-js/kernel/styles").styles.register("@bgroup/ui@0.0.31/form");
var ims = /* @__PURE__ */new Map();
ims.set("./button", {
  hash: 2952778037,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondButton = BeyondButton2;
    var _react = require2("react");
    var _routing = require2("@beyond-js/kernel/routing");
    var _icons = require2("@bgroup/ui/icons");
    var _spinner = require2("@bgroup/ui/spinner");
    ;
    function BeyondButton2(props) {
      const {
        className,
        onClick,
        data,
        label,
        children,
        icon,
        loading,
        colorSpinner
      } = props;
      const onClickButton = event => {
        if (onClick && typeof onClick === "function") {
          onClick(event);
          return;
        }
        if (props.navigate) _routing.routing.pushState(`${props.navigate}`);
      };
      props.title ? props["data-tippy-content"] = props.title : null;
      const properties = {
        ...props,
        type: !!props.type ? props.type : "button"
      };
      if (data) {
        let properties2 = Object.keys(data);
        properties2.map(entry => props[`data-${entry}`] = data[entry]);
      }
      let cls = className ? `${className} beyond-button` : "beyond-button";
      cls += icon ? " has-icon" : "";
      delete properties.label;
      delete properties.icon;
      delete properties.children;
      delete properties.className;
      delete properties.loading;
      delete properties.colorSpinner;
      return _react.default.createElement("button", {
        className: cls,
        ...properties,
        onClick: onClickButton
      }, icon && _react.default.createElement(_icons.BeyondIcon, {
        icon
      }), label, loading ? _react.default.createElement(_spinner.BeyondSpinner, {
        color: colorSpinner ?? "var(--primary)"
      }) : children);
    }
  }
});
ims.set("./checkbox", {
  hash: 1973127589,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondCheckbox = void 0;
    var React = require2("react");
    ;
    const BeyondCheckbox2 = (0, React.forwardRef)((props, ref) => {
      const {
        checked,
        name,
        disabled,
        className,
        onChange,
        label
      } = props;
      const [state, setState] = (0, React.useState)({
        checked: !!checked
      });
      const handleChange = event => {
        setState({
          checked: !checked
        });
        onChange && onChange(event);
      };
      let cls = `beyond-checkbox ${className ? className : ""}`;
      cls += disabled ? " disabled" : "";
      const properties = Object.assign({}, props);
      delete properties.className;
      delete properties.checked;
      delete properties.name;
      delete properties.onChange;
      return React.createElement(React.Fragment, null, React.createElement("div", {
        className: cls
      }, React.createElement("input", {
        style: {
          display: "none"
        },
        ref,
        type: "checkbox",
        className: "inp-cbx",
        id: name,
        name,
        checked: checked ?? state.checked,
        onChange: handleChange,
        ...properties
      }), React.createElement("label", {
        className: "cbx",
        htmlFor: name
      }, React.createElement("span", null, React.createElement("svg", {
        width: "12px",
        height: "9px",
        viewBox: "0 0 12 9"
      }, React.createElement("polyline", {
        points: "1 5 4 8 11 1"
      }))), React.createElement("span", null, label))));
    });
    exports.BeyondCheckbox = BeyondCheckbox2;
  }
});
ims.set("./form", {
  hash: 212622146,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondForm = BeyondForm2;
    var _react = require2("react");
    function BeyondForm2(props) {
      const onSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        props.onSubmit(event);
      };
      const properties = Object.assign({}, props);
      delete properties.onSubmit;
      return _react.default.createElement("form", {
        onSubmit,
        ...properties
      }, props.children);
    }
    ;
  }
});
ims.set("./input", {
  hash: 404515433,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondInput = BeyondInput2;
    var React = require2("react");
    var _icons = require2("@bgroup/ui/icons");
    var _spinner = require2("@bgroup/ui/spinner");
    ;
    function BeyondInput2(props) {
      const input = (0, React.useRef)(null);
      const [state, setState] = (0, React.useState)({
        value: props.value ?? "",
        errorMessage: props.errorMessage ? props.errorMessage : "Formato incorrecto",
        lengthMessage: "Cantidad m\xE1xima: ",
        emptyMessage: "Este campo es requerido",
        type: props.type ?? "text"
      });
      const handleChange = event => {
        if (!!props.onChange && typeof props.onChange === "function") props.onChange(event);
        setState({
          ...state,
          _hasError: false,
          value: event.target.value
        });
      };
      const getError = hasError => {
        if (!state._hasError && !hasError) return;
        let errorMessage = state.emptyMessage;
        if (hasError || input.current.value !== "") errorMessage = props.errorMessage ? props.errorMessage : state.errorMessage;
        if (props.max && parseFloat(input.current.value) > parseInt(props.max)) {
          errorMessage = props.lengthMessage ? props.lengthMessage : state.lengthMessage + ` (max ${props.max})`;
        }
        return React.createElement("span", {
          className: "beyond-element-input-error"
        }, errorMessage);
      };
      const changeType = event => {
        event.stopPropagation();
        const target = event.currentTarget;
        setState({
          ...state,
          type: target.dataset.type
        });
      };
      const error = getError(props.hasError);
      let properties = {
        ...props
      };
      let cls = props.className ? `${props.className} beyond-element-input` : "beyond-element-input";
      cls += props.icon || props.loading || props.password ? " has-icon" : "";
      cls += props.disabled ? " disabled" : "";
      cls += props.hasError ? " error" : "";
      delete properties.className;
      delete properties.hasError;
      delete properties.errorMessage;
      delete properties.children;
      delete properties.icon;
      delete properties.label;
      delete properties.password;
      delete properties.loading;
      delete properties.colorSpinner;
      return React.createElement("div", {
        className: cls
      }, React.createElement(React.Fragment, null, props.icon && React.createElement(_icons.BeyondIcon, {
        icon: props.icon
      }), React.createElement("input", {
        ref: input,
        ...properties,
        name: props.name,
        onChange: handleChange,
        type: state.type,
        value: typeof props.value !== "undefined" ? props.value : state.value,
        placeholder: props.placeholder ?? " ",
        id: props.id ?? props.name
      }), props.children, error, props.label && React.createElement("label", {
        htmlFor: props.id ?? props.name
      }, props.label), props.loading && React.createElement(_spinner.BeyondSpinner, {
        color: props.colorSpinner ?? "var(--primary)"
      }), props.password && (state.type === "password" ? React.createElement(_icons.BeyondIconButton, {
        onClick: changeType,
        "data-type": "text",
        className: "eye",
        icon: "eye"
      }) : React.createElement(_icons.BeyondIconButton, {
        onClick: changeType,
        className: "eye",
        "data-type": "password",
        icon: "eye-slash"
      })), props.required && React.createElement("span", {
        className: "beyond-input__required-label"
      }, "(*)")));
    }
  }
});
ims.set("./radio", {
  hash: 3215233530,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondRadio = BeyondRadio2;
    var _react = require2("react");
    function BeyondRadio2(props) {
      const input = (0, _react.useRef)();
      const onClick = event => {
        input.current.checked = true;
        if (!!props.onChange) props.onChange(event);
      };
      const properties = {
        ...props
      };
      delete properties.onChange;
      const cls = `beyond-element-radio ${properties.className ? properties.className : ""}`;
      return _react.default.createElement("div", {
        className: cls
      }, _react.default.createElement("input", {
        ref: input,
        ...properties,
        type: "radio",
        onChange: onClick
      }), properties.label && _react.default.createElement("label", {
        htmlFor: properties.id
      }, properties.label));
    }
    ;
  }
});
ims.set("./switch", {
  hash: 430157124,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondSwitch = void 0;
    var React = require2("react");
    ;
    const BeyondSwitch2 = (0, React.forwardRef)((props, ref) => {
      const {
        value,
        checked,
        required,
        name,
        disabled,
        className,
        onChange,
        onClick
      } = props;
      const [state, setState] = (0, React.useState)({
        checked: !!checked
      });
      const handleChange = event => {
        setState({
          checked: !checked
        });
        onChange && onChange(event);
      };
      const handleClick = event => {
        onClick && onClick(event);
      };
      let cls = `beyond-element-switch ${className ? className : ""}`;
      cls += disabled ? " disabled" : "";
      const properties = Object.assign({}, props);
      delete properties.className;
      delete properties.disabled;
      delete properties.checked;
      delete properties.name;
      delete properties.required;
      delete properties.onChange;
      delete properties.onClick;
      delete properties.value;
      return React.createElement("div", {
        className: cls,
        onClick: handleClick,
        ...properties
      }, React.createElement("label", {
        className: "switch"
      }, React.createElement("input", {
        ref,
        type: "checkbox",
        required,
        name,
        value,
        checked: checked ?? state.checked,
        disabled,
        onChange: handleChange,
        placeholder: name
      }), React.createElement("span", {
        className: "slider"
      })));
    });
    exports.BeyondSwitch = BeyondSwitch2;
  }
});
ims.set("./textarea", {
  hash: 2311693849,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondTextarea = BeyondTextarea2;
    var React = require2("react");
    ;
    function BeyondTextarea2(props) {
      const input = props.ref ?? (0, React.useRef)();
      const [state, setState] = (0, React.useState)({
        value: props.value ?? "",
        errorMessage: props.errorMessage ? props.errorMessage : "Formato incorrecto",
        lengthMessage: "Cantidad m\xE1xima: ",
        emptyMessage: "Este campo es requerido"
      });
      const handleChange = event => {
        if (!!props.onChange && typeof props.onChange === "function") props.onChange(event);
        setState({
          ...state,
          _hasError: false,
          value: event.target.value
        });
      };
      const getError = hasError => {
        if (!state._hasError && !hasError) return;
        let errorMessage = state.emptyMessage;
        if (hasError || input.value !== "") errorMessage = props.errorMessage ? props.errorMessage : state.errorMessage;
        if (props.max && parseFloat(input.value) > parseInt(props.max)) {
          errorMessage = props.lengthMessage ? props.lengthMessage : state.lengthMessage + ` (max ${props.max})`;
        }
        return React.createElement("span", {
          className: "beyond-element-input-error"
        }, errorMessage);
      };
      const error = getError(props.hasError);
      let properties = {
        ...props
      };
      let cls = props.className ? `${props.className} beyond-element-textarea` : "beyond-element-textarea";
      cls += props.disabled ? " disabled" : "";
      cls += props.hasError ? " error" : "";
      delete properties.className;
      delete properties.hasError;
      delete properties.errorMessage;
      delete properties.children;
      delete properties.label;
      return React.createElement("div", {
        className: cls
      }, React.createElement(React.Fragment, null, React.createElement("textarea", {
        ref: input,
        ...properties,
        name: props.name,
        onChange: handleChange,
        value: typeof props.value !== "undefined" ? props.value : state.value,
        placeholder: props.placeholder ?? " "
      }), props.children, error, props.label && React.createElement("label", {
        htmlFor: props.id
      }, props.label), props.required && React.createElement("span", {
        className: "beyond-input__required-label"
      }, "(*)")));
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./button",
  "from": "BeyondButton",
  "name": "BeyondButton"
}, {
  "im": "./checkbox",
  "from": "BeyondCheckbox",
  "name": "BeyondCheckbox"
}, {
  "im": "./form",
  "from": "BeyondForm",
  "name": "BeyondForm"
}, {
  "im": "./input",
  "from": "BeyondInput",
  "name": "BeyondInput"
}, {
  "im": "./radio",
  "from": "BeyondRadio",
  "name": "BeyondRadio"
}, {
  "im": "./switch",
  "from": "BeyondSwitch",
  "name": "BeyondSwitch"
}, {
  "im": "./textarea",
  "from": "BeyondTextarea",
  "name": "BeyondTextarea"
}];
var BeyondButton, BeyondCheckbox, BeyondForm, BeyondInput, BeyondRadio, BeyondSwitch, BeyondTextarea;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "BeyondButton") && (BeyondButton = require2 ? require2("./button").BeyondButton : value);
  (require2 || prop === "BeyondCheckbox") && (BeyondCheckbox = require2 ? require2("./checkbox").BeyondCheckbox : value);
  (require2 || prop === "BeyondForm") && (BeyondForm = require2 ? require2("./form").BeyondForm : value);
  (require2 || prop === "BeyondInput") && (BeyondInput = require2 ? require2("./input").BeyondInput : value);
  (require2 || prop === "BeyondRadio") && (BeyondRadio = require2 ? require2("./radio").BeyondRadio : value);
  (require2 || prop === "BeyondSwitch") && (BeyondSwitch = require2 ? require2("./switch").BeyondSwitch : value);
  (require2 || prop === "BeyondTextarea") && (BeyondTextarea = require2 ? require2("./textarea").BeyondTextarea : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZ3JvdXAvdWkvZm9ybS4wLjAuMzEuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJncm91cC91aS9mb3JtL19fc291cmNlcy9mb3JtL2NvZGUvdHMvYnV0dG9uLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmdyb3VwL3VpL2Zvcm0vX19zb3VyY2VzL2Zvcm0vY29kZS90cy9jaGVja2JveC50c3giLCIuLi9ub2RlX21vZHVsZXMvQGJncm91cC91aS9mb3JtL19fc291cmNlcy9mb3JtL2NvZGUvdHMvZm9ybS50c3giLCIuLi9ub2RlX21vZHVsZXMvQGJncm91cC91aS9mb3JtL19fc291cmNlcy9mb3JtL2NvZGUvdHMvaW5wdXQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BiZ3JvdXAvdWkvZm9ybS9fX3NvdXJjZXMvZm9ybS9jb2RlL3RzL3JhZGlvLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmdyb3VwL3VpL2Zvcm0vX19zb3VyY2VzL2Zvcm0vY29kZS90cy9zd2l0Y2gudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BiZ3JvdXAvdWkvZm9ybS9fX3NvdXJjZXMvZm9ybS9jb2RlL3RzL3RleHRhcmVhLnRzeCJdLCJuYW1lcyI6WyJmb3JtXzBfMF8zMV9leHBvcnRzIiwiX19leHBvcnQiLCJCZXlvbmRCdXR0b24iLCJCZXlvbmRDaGVja2JveCIsIkJleW9uZEZvcm0iLCJCZXlvbmRJbnB1dCIsIkJleW9uZFJhZGlvIiwiQmV5b25kU3dpdGNoIiwiQmV5b25kVGV4dGFyZWEiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX3JlYWN0IiwicmVxdWlyZTIiLCJfcm91dGluZyIsIl9pY29ucyIsIl9zcGlubmVyIiwiQmV5b25kQnV0dG9uMiIsInByb3BzIiwiY2xhc3NOYW1lIiwib25DbGljayIsImRhdGEiLCJsYWJlbCIsImNoaWxkcmVuIiwiaWNvbiIsImxvYWRpbmciLCJjb2xvclNwaW5uZXIiLCJvbkNsaWNrQnV0dG9uIiwiZXZlbnQiLCJuYXZpZ2F0ZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJ0aXRsZSIsInByb3BlcnRpZXMiLCJ0eXBlIiwicHJvcGVydGllczIiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiZW50cnkiLCJjbHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkJleW9uZEljb24iLCJCZXlvbmRTcGlubmVyIiwiY29sb3IiLCJSZWFjdCIsIkJleW9uZENoZWNrYm94MiIsImZvcndhcmRSZWYiLCJyZWYiLCJjaGVja2VkIiwibmFtZSIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJhc3NpZ24iLCJGcmFnbWVudCIsInN0eWxlIiwiZGlzcGxheSIsImlkIiwiaHRtbEZvciIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsInBvaW50cyIsIkJleW9uZEZvcm0yIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIkJleW9uZElucHV0MiIsImlucHV0IiwidXNlUmVmIiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJsZW5ndGhNZXNzYWdlIiwiZW1wdHlNZXNzYWdlIiwiX2hhc0Vycm9yIiwidGFyZ2V0IiwiZ2V0RXJyb3IiLCJoYXNFcnJvciIsImN1cnJlbnQiLCJtYXgiLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJjaGFuZ2VUeXBlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJlcnJvciIsInBhc3N3b3JkIiwicGxhY2Vob2xkZXIiLCJCZXlvbmRJY29uQnV0dG9uIiwicmVxdWlyZWQiLCJCZXlvbmRSYWRpbzIiLCJCZXlvbmRTd2l0Y2gyIiwiaGFuZGxlQ2xpY2siLCJCZXlvbmRUZXh0YXJlYTIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1CQUFBO0FB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QUFBLEdBQWUxRCxLQUFBLENBQU0yRCxhQUFBLEdBQ2pCM0QsS0FBQSxDQUFNMkQsYUFBQSxHQUNOdkIsS0FBQSxDQUFNdUIsYUFBQSxHQUFnQixTQUFTM0QsS0FBQSxDQUFNa0UsR0FBQTs7UUFHM0MsT0FBT3RDLEtBQUEsQ0FBQUosYUFBQTtVQUFNdkIsU0FBQSxFQUFVO1FBQTRCLEdBQUV5RCxZQUFZO01BQ25FO01BRUEsTUFBTWMsS0FBQSxHQUF1Q1QsUUFBQSxDQUFTL0QsS0FBQSxDQUFNZ0UsUUFBUTtNQUNwRSxJQUFJakQsVUFBQSxHQUFvQjtRQUFFLEdBQUdmO01BQUs7TUFDbEMsSUFBSXNCLEdBQUEsR0FBY3RCLEtBQUEsQ0FBTUMsU0FBQSxHQUNwQixHQUFHRCxLQUFBLENBQU1DLFNBQUEsNkJBQ1Q7TUFDSnFCLEdBQUEsSUFBT3RCLEtBQUEsQ0FBTWtDLFFBQUEsR0FBVyxjQUFjO01BQ3RDWixHQUFBLElBQU90QixLQUFBLENBQU1nRSxRQUFBLEdBQVcsV0FBVztNQUVuQyxPQUFPakQsVUFBQSxDQUFXZCxTQUFBO01BQ2xCLE9BQU9jLFVBQUEsQ0FBV2lELFFBQUE7TUFDbEIsT0FBT2pELFVBQUEsQ0FBVzJDLFlBQUE7TUFDbEIsT0FBTzNDLFVBQUEsQ0FBV1YsUUFBQTtNQUNsQixPQUFPVSxVQUFBLENBQVdYLEtBQUE7TUFFbEIsT0FDRXdCLEtBQUEsQ0FBQUosYUFBQTtRQUFLdkIsU0FBQSxFQUFXcUI7TUFBRyxHQUNqQk0sS0FBQSxDQUFBSixhQUFBLENBQUFJLEtBQUEsQ0FBQWEsUUFBQSxRQUNFYixLQUFBLENBQUFKLGFBQUE7UUFDRU8sR0FBQSxFQUFLd0IsS0FBQTtRQUFLLEdBQ054QyxVQUFBO1FBQ0prQixJQUFBLEVBQU1qQyxLQUFBLENBQU1pQyxJQUFBO1FBQ1pFLFFBQUEsRUFBVUksWUFBQTtRQUNWa0IsS0FBQSxFQUFPLE9BQU96RCxLQUFBLENBQU15RCxLQUFBLEtBQVUsY0FBY3pELEtBQUEsQ0FBTXlELEtBQUEsR0FBUXJCLEtBQUEsQ0FBTXFCLEtBQUE7UUFDaEVpQixXQUFBLEVBQWExRSxLQUFBLENBQU0wRSxXQUFBLElBQWU7TUFBRyxJQUV0QzFFLEtBQUEsQ0FBTUssUUFBQSxFQUNObUUsS0FBQSxFQUNBeEUsS0FBQSxDQUFNSSxLQUFBLElBQVN3QixLQUFBLENBQUFKLGFBQUE7UUFBT3FCLE9BQUEsRUFBUzdDLEtBQUEsQ0FBTTRDO01BQUUsR0FBRzVDLEtBQUEsQ0FBTUksS0FBSyxHQUNyREosS0FBQSxDQUFNNEUsUUFBQSxJQUNMaEQsS0FBQSxDQUFBSixhQUFBO1FBQU12QixTQUFBLEVBQVU7TUFBOEIsU0FDL0MsQ0FDQTtJQUdUIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==