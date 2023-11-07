System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/routing","@beyond-js/kernel@0.1.9/styles","@bgroup/ui@0.0.34/icons"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@bgroup/ui","0.0.34"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('@bgroup/ui@0.0.34/icons', dep)],
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

// .beyond/uimport/@bgroup/ui/image.0.0.34.js
var image_0_0_34_exports = {};
__export(image_0_0_34_exports, {
  BeyondImage: () => BeyondImage,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(image_0_0_34_exports);

// node_modules/@bgroup/ui/image/image.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("@bgroup/ui@0.0.34/icons"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/ui@0.0.34/image"
  },
  "type": "code",
  "name": "image"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@bgroup/ui/icons", dependency_2], ["@beyond-js/kernel/styles", dependency_3]]);
brequire("@beyond-js/kernel/styles").styles.register("@bgroup/ui@0.0.34/image");
var ims = /* @__PURE__ */new Map();
ims.set("./image", {
  hash: 3927941655,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondImage = BeyondImage2;
    var _react = require2("react");
    var _icons = require2("@bgroup/ui/icons");
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
      }, onError && _react.default.createElement(_icons.BeyondIconButton, {
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
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmdyb3VwL3VpL2ltYWdlLjAuMC4zNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmdyb3VwL3VpL2ltYWdlL19fc291cmNlcy9pbWFnZS9jb2RlL3RzL2ltYWdlLnRzeCJdLCJuYW1lcyI6WyJpbWFnZV8wXzBfMzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQmV5b25kSW1hZ2UiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX3JlYWN0IiwicmVxdWlyZTIiLCJfaWNvbnMiLCJCZXlvbmRJbWFnZTIiLCJwcm9wcyIsImluaXRpYWxTdGF0ZSIsInNpemUiLCJsb2FkZWQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJzcmMiLCJhbHQiLCJvbkVycm9yIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm9uTG9hZCIsImVycm9yIiwiaHRtbExvYWRlZCIsImxvYWRJbWFnZSIsInVybCIsImZpbmFsU3JjIiwibmV3SW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJ1c2VFZmZlY3QiLCJjdXJyZW50U3JjIiwib3V0cHV0Iiwib25DbGlja0Vycm9yIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjbHMiLCJFcnJvcjIiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImtleSIsIkJleW9uZEljb25CdXR0b24iLCJpY29uIiwiTG9hZGVkIiwibG9hZGluZyIsInByb3BlcnRpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsb0JBQUE7RUFBQUUsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFB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