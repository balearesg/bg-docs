System.register(["@beyond-js/kernel@0.1.8/bundle","react@18.2.0","@beyond-js/kernel@0.1.8/core","@beyond-js/kernel@0.1.8/routing","@beyond-js/kernel@0.1.8/styles","@bgroup/ui@0.0.31/icons"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.8"],["react","18.2.0"],["@bgroup/ui","0.0.31"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.8/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/routing', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/styles', dep), dep => dependencies.set('@bgroup/ui@0.0.31/icons', dep)],
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

// .beyond/uimport/temp/@bgroup/ui/image.0.0.31.js
var image_0_0_31_exports = {};
__export(image_0_0_31_exports, {
  BeyondImage: () => BeyondImage,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(image_0_0_31_exports);

// node_modules/@bgroup/ui/image/image.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.8/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("@bgroup/ui@0.0.31/icons"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.8/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/ui@0.0.31/image"
  },
  "type": "code",
  "name": "image"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@bgroup/ui/icons", dependency_2], ["@beyond-js/kernel/styles", dependency_3]]);
brequire("@beyond-js/kernel/styles").styles.register("@bgroup/ui@0.0.31/image");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZ3JvdXAvdWkvaW1hZ2UuMC4wLjMxLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZ3JvdXAvdWkvaW1hZ2UvX19zb3VyY2VzL2ltYWdlL2NvZGUvdHMvaW1hZ2UudHN4Il0sIm5hbWVzIjpbImltYWdlXzBfMF8zMV9leHBvcnRzIiwiX19leHBvcnQiLCJCZXlvbmRJbWFnZSIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfcmVhY3QiLCJyZXF1aXJlMiIsIl9pY29ucyIsIkJleW9uZEltYWdlMiIsInByb3BzIiwiaW5pdGlhbFN0YXRlIiwic2l6ZSIsImxvYWRlZCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsInNyYyIsImFsdCIsIm9uRXJyb3IiLCJpbWFnZSIsInNldEltYWdlIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwib25Mb2FkIiwiZXJyb3IiLCJodG1sTG9hZGVkIiwibG9hZEltYWdlIiwidXJsIiwiZmluYWxTcmMiLCJuZXdJbWFnZSIsIkltYWdlIiwib25sb2FkIiwib25lcnJvciIsInVzZUVmZmVjdCIsImN1cnJlbnRTcmMiLCJvdXRwdXQiLCJvbkNsaWNrRXJyb3IiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNscyIsIkVycm9yMiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50Iiwia2V5IiwiQmV5b25kSWNvbkJ1dHRvbiIsImljb24iLCJMb2FkZWQiLCJsb2FkaW5nIiwicHJvcGVydGllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxvQkFBQTtFQUFBRSxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCxvQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBLElBQUFRLE1BQUEsR0FBQUMsUUFBQTtJQU9BLElBQUFDLE1BQUEsR0FBQUQsUUFBQTtJQVFDO0lBS2dCLFNBQ1JFLGFBQVlDLEtBQUEsRUFBWTtNQVkvQixNQUFNQyxZQUFBLEdBQTZCO1FBQUVDLElBQUEsRUFBTTtRQUFXQyxNQUFBLEVBQVE7TUFBSztNQUNuRSxNQUFNO1FBQUVDLFNBQUE7UUFBV0MsT0FBQTtRQUFTQyxRQUFBO1FBQVVDLEdBQUE7UUFBS0MsR0FBQTtRQUFLQztNQUFPLElBQUtULEtBQUE7TUFDNUQsTUFBTSxDQUFDVSxLQUFBLEVBQU9DLFFBQVEsS0FBSSxHQUFBZixNQUFBLENBQUFnQixRQUFBLEdBQVE7TUFDbEMsTUFBTSxDQUFDQyxLQUFBLEVBQU9DLFFBQVEsS0FBSSxHQUFBbEIsTUFBQSxDQUFBZ0IsUUFBQSxFQUF1QlgsWUFBWTtNQUM3RCxNQUFNYyxNQUFBLEdBQXFCQSxDQUFBLEtBQ3pCRCxRQUFBLENBQVM7UUFBRSxHQUFHRCxLQUFBO1FBQU9HLEtBQUEsRUFBTztRQUFPQyxVQUFBLEVBQVk7TUFBSSxDQUFFO01BQ3ZELE1BQU1DLFNBQUEsR0FBWUEsQ0FBQ0MsR0FBQSxFQUFhakIsSUFBQSxLQUFzQjtRQUNwRCxJQUFJa0IsUUFBQSxHQUFtQkQsR0FBQTtRQUV2QixNQUFNRSxRQUFBLEdBQTZCLElBQUlDLEtBQUEsRUFBSztRQUM1Q0QsUUFBQSxDQUFTRSxNQUFBLEdBQVMsTUFDaEJULFFBQUEsQ0FBUztVQUFFLEdBQUdELEtBQUE7VUFBT1YsTUFBQSxFQUFRO1VBQU1hLEtBQUEsRUFBTztRQUFLLENBQUU7UUFDbkRLLFFBQUEsQ0FBU0csT0FBQSxHQUFVLE1BQ2pCVixRQUFBLENBQVM7VUFBRSxHQUFHRCxLQUFBO1VBQU9HLEtBQUEsRUFBTztVQUFNYixNQUFBLEVBQVE7UUFBSyxDQUFFO1FBQ25Ea0IsUUFBQSxDQUFTZCxHQUFBLEdBQU1hLFFBQUE7UUFDZlQsUUFBQSxDQUFTVSxRQUFRO1FBQ2pCUCxRQUFBLENBQVM7VUFBRSxHQUFHRCxLQUFBO1VBQU9NLEdBQUE7VUFBVWpCLElBQUE7VUFBWUssR0FBQSxFQUFLYSxRQUFBO1VBQVVqQixNQUFBLEVBQVE7UUFBSSxDQUFFO01BQzFFO01BQ0EsSUFBQVAsTUFBQSxDQUFBNkIsU0FBQSxFQUFVLE1BQUs7UUFDYixNQUFNQyxVQUFBLEdBQXFCbkIsR0FBQTtRQUMzQixJQUFJTSxLQUFBLENBQU1NLEdBQUEsS0FBUU8sVUFBQSxFQUFZO1VBQzVCLElBQUl4QixJQUFBLEdBQWVGLEtBQUEsQ0FBTUUsSUFBQSxJQUFRVyxLQUFBLENBQU1YLElBQUE7VUFDdkNnQixTQUFBLENBQVVRLFVBQUEsRUFBWXhCLElBQUk7O1FBRzVCLE9BQU8sTUFDTFMsUUFBQSxDQUFTO1VBQUUsR0FBR0UsS0FBQTtVQUFPVSxNQUFBLEVBQVE7VUFBV0MsT0FBQSxFQUFTO1FBQVMsQ0FBRTtNQUVoRSxHQUFHLENBQUNqQixHQUFHLENBQUM7TUFFUixNQUFNO1FBQUVTLEtBQUE7UUFBT2IsTUFBQTtRQUFRYztNQUFVLElBQUtKLEtBQUE7TUFDdEMsSUFBSWMsTUFBQTtNQUNKLE1BQU1DLFlBQUEsR0FBZ0JDLEtBQUEsSUFBK0M7UUFDbkVBLEtBQUEsQ0FBTUMsZUFBQSxFQUFlO1FBQ3JCLElBQUlyQixPQUFBLElBQVcsT0FBT0EsT0FBQSxLQUFZLFlBQVlBLE9BQUEsQ0FBUW9CLEtBQUs7TUFDN0Q7TUFFQSxJQUFJRSxHQUFBLEdBQWMsd0JBQXdCM0IsU0FBQSxHQUFZLElBQUlBLFNBQUEsS0FBYztNQUN4RSxJQUFJLENBQUNELE1BQUEsSUFBVSxDQUFDYyxVQUFBLEVBQVljLEdBQUEsSUFBTztNQUNuQyxJQUFJZixLQUFBLEVBQU9lLEdBQUEsSUFBTztNQUNsQixNQUFNQyxNQUFBLEdBQ0pwQyxNQUFBLENBQUFxQyxPQUFBLENBQUFDLGFBQUE7UUFBS0MsR0FBQSxFQUFJO1FBQU8sWUFBVzVCLEdBQUE7UUFBS0gsU0FBQSxFQUFVO01BQWUsR0FDdERLLE9BQUEsSUFBV2IsTUFBQSxDQUFBcUMsT0FBQSxDQUFBQyxhQUFBLENBQUNwQyxNQUFBLENBQUFzQyxnQkFBQSxFQUFnQjtRQUFDL0IsT0FBQSxFQUFTdUIsWUFBQTtRQUFjUyxJQUFBLEVBQUs7TUFBUyxFQUFHO01BRzFFLE1BQU1DLE1BQUEsR0FDSjFDLE1BQUEsQ0FBQXFDLE9BQUEsQ0FBQUMsYUFBQTtRQUNFM0IsR0FBQTtRQUNBUSxNQUFBO1FBQ0F3QixPQUFBLEVBQVN2QyxLQUFBLENBQU11QyxPQUFBLElBQVc7UUFDMUIvQjtNQUFRO01BR1osSUFBSVEsS0FBQSxFQUFPVyxNQUFBLEdBQVNLLE1BQUE7TUFDcEIsSUFBSTdCLE1BQUEsRUFBUXdCLE1BQUEsR0FBU1csTUFBQTtNQUVyQixNQUFNRSxVQUFBLEdBQW9CO1FBQUUsR0FBR3hDLEtBQUE7UUFBT0ksU0FBQSxFQUFXMkIsR0FBQTtRQUFLMUI7TUFBTztNQUM3RCxPQUFPbUMsVUFBQSxDQUFXakMsR0FBQTtNQUNsQixPQUFPaUMsVUFBQSxDQUFXaEMsR0FBQTtNQUNsQixPQUFPZ0MsVUFBQSxDQUFXL0IsT0FBQTtNQUNsQixPQUFPK0IsVUFBQSxDQUFXbEMsUUFBQTtNQUNsQixPQUFPa0MsVUFBQSxDQUFXdEMsSUFBQTtNQUNsQixPQUFPc0MsVUFBQSxDQUFXRCxPQUFBO01BQ2xCLE9BQU9DLFVBQUEsQ0FBV3hCLEtBQUE7TUFFbEIsT0FDRXBCLE1BQUEsQ0FBQXFDLE9BQUEsQ0FBQUMsYUFBQTtRQUFBLFlBQWtCM0IsR0FBQTtRQUFHLEdBQU1pQztNQUFVLEdBQ2xDYixNQUFBLEVBQ0FyQixRQUFRO0lBR2YiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9