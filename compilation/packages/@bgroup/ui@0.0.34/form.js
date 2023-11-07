System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/routing","@beyond-js/kernel@0.1.9/styles","@bgroup/ui@0.0.34/icons","@bgroup/ui@0.0.34/spinner"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@bgroup/ui","0.0.34"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('@bgroup/ui@0.0.34/icons', dep), dep => dependencies.set('@bgroup/ui@0.0.34/spinner', dep)],
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

// .beyond/uimport/@bgroup/ui/form.0.0.34.js
var form_0_0_34_exports = {};
__export(form_0_0_34_exports, {
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
module.exports = __toCommonJS(form_0_0_34_exports);

// node_modules/@bgroup/ui/form/form.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("@beyond-js/kernel@0.1.9/routing"), 0);
var dependency_3 = __toESM(require("@bgroup/ui@0.0.34/icons"), 0);
var dependency_4 = __toESM(require("@bgroup/ui@0.0.34/spinner"), 0);
var dependency_5 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/ui@0.0.34/form"
  },
  "type": "code",
  "name": "form"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@beyond-js/kernel/routing", dependency_2], ["@bgroup/ui/icons", dependency_3], ["@bgroup/ui/spinner", dependency_4], ["@beyond-js/kernel/styles", dependency_5]]);
brequire("@beyond-js/kernel/styles").styles.register("@bgroup/ui@0.0.34/form");
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
  hash: 1841520349,
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
      cls += props.icon || props.loading || props.password || props.required ? " has-icon" : "";
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmdyb3VwL3VpL2Zvcm0uMC4wLjM0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZ3JvdXAvdWkvZm9ybS9fX3NvdXJjZXMvZm9ybS9jb2RlL3RzL2J1dHRvbi50c3giLCIuLi9ub2RlX21vZHVsZXMvQGJncm91cC91aS9mb3JtL19fc291cmNlcy9mb3JtL2NvZGUvdHMvY2hlY2tib3gudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BiZ3JvdXAvdWkvZm9ybS9fX3NvdXJjZXMvZm9ybS9jb2RlL3RzL2Zvcm0udHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BiZ3JvdXAvdWkvZm9ybS9fX3NvdXJjZXMvZm9ybS9jb2RlL3RzL2lucHV0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmdyb3VwL3VpL2Zvcm0vX19zb3VyY2VzL2Zvcm0vY29kZS90cy9yYWRpby50c3giLCIuLi9ub2RlX21vZHVsZXMvQGJncm91cC91aS9mb3JtL19fc291cmNlcy9mb3JtL2NvZGUvdHMvc3dpdGNoLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmdyb3VwL3VpL2Zvcm0vX19zb3VyY2VzL2Zvcm0vY29kZS90cy90ZXh0YXJlYS50c3giXSwibmFtZXMiOlsiZm9ybV8wXzBfMzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQmV5b25kQnV0dG9uIiwiQmV5b25kQ2hlY2tib3giLCJCZXlvbmRGb3JtIiwiQmV5b25kSW5wdXQiLCJCZXlvbmRSYWRpbyIsIkJleW9uZFN3aXRjaCIsIkJleW9uZFRleHRhcmVhIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9yZWFjdCIsInJlcXVpcmUyIiwiX3JvdXRpbmciLCJfaWNvbnMiLCJfc3Bpbm5lciIsIkJleW9uZEJ1dHRvbjIiLCJwcm9wcyIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJkYXRhIiwibGFiZWwiLCJjaGlsZHJlbiIsImljb24iLCJsb2FkaW5nIiwiY29sb3JTcGlubmVyIiwib25DbGlja0J1dHRvbiIsImV2ZW50IiwibmF2aWdhdGUiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwidHlwZSIsInByb3BlcnRpZXMyIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImVudHJ5IiwiY2xzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJCZXlvbmRJY29uIiwiQmV5b25kU3Bpbm5lciIsImNvbG9yIiwiUmVhY3QiLCJCZXlvbmRDaGVja2JveDIiLCJmb3J3YXJkUmVmIiwicmVmIiwiY2hlY2tlZCIsIm5hbWUiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiYXNzaWduIiwiRnJhZ21lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJpZCIsImh0bWxGb3IiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJwb2ludHMiLCJCZXlvbmRGb3JtMiIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJCZXlvbmRJbnB1dDIiLCJpbnB1dCIsInVzZVJlZiIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibGVuZ3RoTWVzc2FnZSIsImVtcHR5TWVzc2FnZSIsIl9oYXNFcnJvciIsInRhcmdldCIsImdldEVycm9yIiwiaGFzRXJyb3IiLCJjdXJyZW50IiwibWF4IiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwiY2hhbmdlVHlwZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZXJyb3IiLCJwYXNzd29yZCIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJCZXlvbmRJY29uQnV0dG9uIiwiQmV5b25kUmFkaW8yIiwiQmV5b25kU3dpdGNoMiIsImhhbmRsZUNsaWNrIiwiQmV5b25kVGV4dGFyZWEyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQkFBQTtBQUFBQyxR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LEdBQUcsR0FBRztVQUM5RFIsWUFBQSxHQUFlMUQsS0FBQSxDQUFNMkQsYUFBQSxHQUNqQjNELEtBQUEsQ0FBTTJELGFBQUEsR0FDTnZCLEtBQUEsQ0FBTXVCLGFBQUEsR0FBZ0IsU0FBUzNELEtBQUEsQ0FBTWtFLEdBQUE7O1FBRzNDLE9BQU90QyxLQUFBLENBQUFKLGFBQUE7VUFBTXZCLFNBQUEsRUFBVTtRQUE0QixHQUFFeUQsWUFBWTtNQUNuRTtNQUVBLE1BQU1jLEtBQUEsR0FBdUNULFFBQUEsQ0FBUy9ELEtBQUEsQ0FBTWdFLFFBQVE7TUFDcEUsSUFBSWpELFVBQUEsR0FBb0I7UUFBRSxHQUFHZjtNQUFLO01BQ2xDLElBQUlzQixHQUFBLEdBQWN0QixLQUFBLENBQU1DLFNBQUEsR0FDcEIsR0FBR0QsS0FBQSxDQUFNQyxTQUFBLDZCQUNUO01BQ0pxQixHQUFBLElBQU90QixLQUFBLENBQU1rQyxRQUFBLEdBQVcsY0FBYztNQUN0Q1osR0FBQSxJQUFPdEIsS0FBQSxDQUFNZ0UsUUFBQSxHQUFXLFdBQVc7TUFFbkMsT0FBT2pELFVBQUEsQ0FBV2QsU0FBQTtNQUNsQixPQUFPYyxVQUFBLENBQVdpRCxRQUFBO01BQ2xCLE9BQU9qRCxVQUFBLENBQVcyQyxZQUFBO01BQ2xCLE9BQU8zQyxVQUFBLENBQVdWLFFBQUE7TUFDbEIsT0FBT1UsVUFBQSxDQUFXWCxLQUFBO01BRWxCLE9BQ0V3QixLQUFBLENBQUFKLGFBQUE7UUFBS3ZCLFNBQUEsRUFBV3FCO01BQUcsR0FDakJNLEtBQUEsQ0FBQUosYUFBQSxDQUFBSSxLQUFBLENBQUFhLFFBQUEsUUFDRWIsS0FBQSxDQUFBSixhQUFBO1FBQ0VPLEdBQUEsRUFBS3dCLEtBQUE7UUFBSyxHQUNOeEMsVUFBQTtRQUNKa0IsSUFBQSxFQUFNakMsS0FBQSxDQUFNaUMsSUFBQTtRQUNaRSxRQUFBLEVBQVVJLFlBQUE7UUFDVmtCLEtBQUEsRUFBTyxPQUFPekQsS0FBQSxDQUFNeUQsS0FBQSxLQUFVLGNBQWN6RCxLQUFBLENBQU15RCxLQUFBLEdBQVFyQixLQUFBLENBQU1xQixLQUFBO1FBQ2hFa0IsV0FBQSxFQUFhM0UsS0FBQSxDQUFNMkUsV0FBQSxJQUFlO01BQUcsSUFFdEMzRSxLQUFBLENBQU1LLFFBQUEsRUFDTm1FLEtBQUEsRUFDQXhFLEtBQUEsQ0FBTUksS0FBQSxJQUFTd0IsS0FBQSxDQUFBSixhQUFBO1FBQU9xQixPQUFBLEVBQVM3QyxLQUFBLENBQU00QztNQUFFLEdBQUc1QyxLQUFBLENBQU1JLEtBQUssR0FDckRKLEtBQUEsQ0FBTTBFLFFBQUEsSUFDTDlDLEtBQUEsQ0FBQUosYUFBQTtRQUFNdkIsU0FBQSxFQUFVO01BQThCLFNBQy9DLENBQ0E7SUFHVCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=