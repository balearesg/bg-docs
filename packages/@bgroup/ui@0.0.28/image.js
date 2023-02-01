System.register(["@beyond-js/kernel@0.1.7/bundle","react@18.2.0","@beyond-js/kernel@0.1.7/core","@beyond-js/kernel@0.1.7/routing","@beyond-js/kernel@0.1.7/styles","@bgroup/ui@0.0.28/icon"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.7"],["react","18.2.0"],["@bgroup/ui","0.0.28"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.7/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.7/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.7/routing', dep), dep => dependencies.set('@beyond-js/kernel@0.1.7/styles', dep), dep => dependencies.set('@bgroup/ui@0.0.28/icon', dep)],
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
var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2)) if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default")) __defProp(target, key, {
      get: () => module2[key],
      enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable
    });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? {
    get: () => module2.default,
    enumerable: true
  } : {
    value: module2,
    enumerable: true
  })), module2);
};
var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0);

// .beyond/uimport/@bgroup/ui/image.0.0.28.js
var image_0_0_28_exports = {};
__export(image_0_0_28_exports, {
  BeyondImage: () => BeyondImage,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});

// node_modules/@bgroup/ui/image/image.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.7/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("@bgroup/ui@0.0.28/icon"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.7/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/ui@0.0.28/image"
  },
  "type": "code",
  "name": "image"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@bgroup/ui/icon", dependency_2], ["@beyond-js/kernel/styles", dependency_3]]);
brequire("@beyond-js/kernel/styles").styles.register("@bgroup/ui@0.0.28/image");
var ims = /* @__PURE__ */new Map();
ims.set("./image", {
  hash: 1233956879,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondImage = BeyondImage2;
    var _react = require2("react");
    var _icon = require2("@bgroup/ui/icon");
    ;
    function BeyondImage2(props) {
      const initialState = {
        size: "200x200",
        loaded: false
      };
      const {
        className,
        onClick,
        children,
        src,
        alt,
        onError
      } = props;
      const [image, setImage] = (0, _react.useState)();
      const [state, setState] = (0, _react.useState)(initialState);
      const onLoad = () => setState({
        ...state,
        error: false,
        htmlLoaded: true
      });
      const loadImage = (url, size) => {
        let finalSrc = url;
        const newImage = new Image();
        newImage.onload = () => setState({
          ...state,
          loaded: true,
          error: false
        });
        newImage.onerror = () => setState({
          ...state,
          error: true,
          loaded: false
        });
        newImage.src = finalSrc;
        setImage(newImage);
        setState({
          ...state,
          url,
          size,
          src: finalSrc,
          loaded: true
        });
      };
      (0, _react.useEffect)(() => {
        const currentSrc = src;
        if (state.url !== currentSrc) {
          let size = props.size ?? state.size;
          loadImage(currentSrc, size);
        }
        return () => setImage({
          ...state,
          onload: void 0,
          onerror: void 0
        });
      }, [src]);
      const {
        error,
        loaded,
        htmlLoaded
      } = state;
      let output;
      const onClickError = event => {
        event.stopPropagation();
        if (onError && typeof onError === "function") onError(event);
      };
      let cls = `beyond-element-image ${className ? ` ${className}` : ""}`;
      if (!loaded && !htmlLoaded) cls += " beyond-element-image-preload";
      if (error) cls += " beyond-element-image-error";
      const Error2 = _react.default.createElement("div", {
        key: "error",
        "data-src": src,
        className: "content-error"
      }, onError && _react.default.createElement(_icon.BeyondIconButton, {
        onClick: onClickError,
        icon: "refresh"
      }));
      const Loaded = _react.default.createElement("img", {
        src,
        onLoad,
        loading: props.loading ?? "eager",
        alt
      });
      if (error) output = Error2;
      if (loaded) output = Loaded;
      const properties = {
        ...props,
        className: cls,
        onClick
      };
      delete properties.src;
      delete properties.alt;
      delete properties.onError;
      delete properties.children;
      delete properties.size;
      delete properties.loading;
      delete properties.error;
      return _react.default.createElement("figure", {
        "data-src": src,
        ...properties
      }, output, children);
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./image",
  "from": "BeyondImage",
  "name": "BeyondImage"
}];
var BeyondImage;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "BeyondImage") && (BeyondImage = require2 ? require2("./image").BeyondImage : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
module.exports = __toCommonJS(image_0_0_28_exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmdyb3VwL3VpL2ltYWdlLjAuMC4yOC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmdyb3VwL3VpL2ltYWdlL19fc291cmNlcy9pbWFnZS9jb2RlL3RzL2ltYWdlLnRzeCJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIkJleW9uZEltYWdlIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJzaXplIiwibG9hZGVkIiwiY2xhc3NOYW1lIiwib25DbGljayIsImNoaWxkcmVuIiwic3JjIiwiYWx0Iiwib25FcnJvciIsImltYWdlIiwic2V0SW1hZ2UiLCJzdGF0ZSIsInNldFN0YXRlIiwib25Mb2FkIiwiZXJyb3IiLCJodG1sTG9hZGVkIiwibG9hZEltYWdlIiwidXJsIiwiZmluYWxTcmMiLCJuZXdJbWFnZSIsIkltYWdlIiwib25sb2FkIiwib25lcnJvciIsImN1cnJlbnRTcmMiLCJvdXRwdXQiLCJvbkNsaWNrRXJyb3IiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNscyIsIkVycm9yMiIsIl9yZWFjdCIsImtleSIsIl9pY29uIiwiaWNvbiIsIkxvYWRlZCIsImxvYWRpbmciLCJwcm9wZXJ0aWVzIl0sImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=