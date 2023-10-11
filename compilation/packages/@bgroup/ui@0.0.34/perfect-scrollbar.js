System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/styles","react@18.2.0","perfect-scrollbar@1.5.5"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["perfect-scrollbar","1.5.5"],["@bgroup/ui","0.0.34"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('perfect-scrollbar@1.5.5', dep)],
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

// .beyond/uimport/@bgroup/ui/perfect-scrollbar.0.0.34.js
var perfect_scrollbar_0_0_34_exports = {};
__export(perfect_scrollbar_0_0_34_exports, {
  BeyondScrollContainer: () => BeyondScrollContainer,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(perfect_scrollbar_0_0_34_exports);

// node_modules/@bgroup/ui/perfect-scrollbar/perfect-scrollbar.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var dependency_2 = __toESM(require("react@18.2.0"), 0);
var dependency_3 = __toESM(require("perfect-scrollbar@1.5.5"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/ui@0.0.34/perfect-scrollbar"
  },
  "type": "code",
  "name": "perfect-scrollbar"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/styles", dependency_1], ["react", dependency_2], ["perfect-scrollbar", dependency_3]]);
brequire("@beyond-js/kernel/styles").styles.register("@bgroup/ui@0.0.34/perfect-scrollbar");
var ims = /* @__PURE__ */new Map();
ims.set("./container", {
  hash: 347674479,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondScrollContainer = BeyondScrollContainer2;
    var _react = require2("react");
    var _perfectScrollbar = require2("perfect-scrollbar");
    function BeyondScrollContainer2(props) {
      const ref = (0, _react.useRef)(null);
      (0, _react.useEffect)(() => {
        const control = ref.current;
        const scrollbar = new _perfectScrollbar.default(control, {
          wheelSpeed: 2,
          wheelPropagation: true,
          minScrollbarLength: 20
        });
        const handleOnScrollY = event => {
          props.onScrollY(event, control, scrollbar);
        };
        const handleOnScrollX = event => {
          props.onScrollY(event, control, scrollbar);
        };
        const {
          onScrollY,
          onScrollX
        } = props;
        if (onScrollY) control.addEventListener("ps-scroll-y", handleOnScrollY);
        if (onScrollX) control.addEventListener("ps-scroll-y", handleOnScrollX);
        return () => {
          scrollbar.destroy();
          if (onScrollY) ref.current.removeEventListener("ps-scroll-y", onScrollY);
          if (onScrollX) ref.current.removeEventListener("ps-scroll-y", handleOnScrollX);
        };
      }, []);
      let cls = props.className ? `beyond-perfect-scrollbar ${props.className}` : "beyond-perfect-scrollbar";
      return _react.default.createElement("div", {
        ref,
        className: cls
      }, props.children);
    }
    ;
  }
});
__pkg.exports.descriptor = [{
  "im": "./container",
  "from": "BeyondScrollContainer",
  "name": "BeyondScrollContainer"
}];
var BeyondScrollContainer;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "BeyondScrollContainer") && (BeyondScrollContainer = require2 ? require2("./container").BeyondScrollContainer : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmdyb3VwL3VpL3BlcmZlY3Qtc2Nyb2xsYmFyLjAuMC4zNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmdyb3VwL3VpL3BlcmZlY3Qtc2Nyb2xsYmFyL19fc291cmNlcy9wZXJmZWN0LXNjcm9sbGJhci9jb2RlL3RzL2NvbnRhaW5lci50c3giXSwibmFtZXMiOlsicGVyZmVjdF9zY3JvbGxiYXJfMF8wXzM0X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkJleW9uZFNjcm9sbENvbnRhaW5lciIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfcmVhY3QiLCJyZXF1aXJlMiIsIl9wZXJmZWN0U2Nyb2xsYmFyIiwiQmV5b25kU2Nyb2xsQ29udGFpbmVyMiIsInByb3BzIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY29udHJvbCIsImN1cnJlbnQiLCJzY3JvbGxiYXIiLCJkZWZhdWx0Iiwid2hlZWxTcGVlZCIsIndoZWVsUHJvcGFnYXRpb24iLCJtaW5TY3JvbGxiYXJMZW5ndGgiLCJoYW5kbGVPblNjcm9sbFkiLCJldmVudCIsIm9uU2Nyb2xsWSIsImhhbmRsZU9uU2Nyb2xsWCIsIm9uU2Nyb2xsWCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNscyIsImNsYXNzTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsZ0NBQUE7QUFBQUMsUUFBQSxDQUFBRCxnQ0FBQTtFQUFBRSxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLGdDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUEsSUFBQVEsTUFBQSxHQUFBQyxRQUFBO0lBQ0EsSUFBQUMsaUJBQUEsR0FBQUQsUUFBQTtJQWVpQixTQUNORSx1QkFBc0JDLEtBQUEsRUFBWTtNQUMzQyxNQUFNQyxHQUFBLElBQXdDLEdBQUFMLE1BQUEsQ0FBQU0sTUFBQSxFQUFPLElBQUk7TUFFekQsSUFBQU4sTUFBQSxDQUFBTyxTQUFBLEVBQVUsTUFBbUI7UUFDM0IsTUFBTUMsT0FBQSxHQUEwQkgsR0FBQSxDQUFJSSxPQUFBO1FBRXBDLE1BQU1DLFNBQUEsR0FBOEIsSUFBSVIsaUJBQUEsQ0FBQVMsT0FBQSxDQUFpQkgsT0FBQSxFQUFTO1VBQ2hFSSxVQUFBLEVBQVk7VUFDWkMsZ0JBQUEsRUFBa0I7VUFDbEJDLGtCQUFBLEVBQW9CO1NBQ3JCO1FBQ0QsTUFBTUMsZUFBQSxHQUFtQkMsS0FBQSxJQUFlO1VBQ3RDWixLQUFBLENBQU1hLFNBQUEsQ0FBVUQsS0FBQSxFQUFPUixPQUFBLEVBQVNFLFNBQVM7UUFDM0M7UUFFQSxNQUFNUSxlQUFBLEdBQW1CRixLQUFBLElBQWU7VUFDdENaLEtBQUEsQ0FBTWEsU0FBQSxDQUFVRCxLQUFBLEVBQU9SLE9BQUEsRUFBU0UsU0FBUztRQUMzQztRQUNBLE1BQU07VUFBRU8sU0FBQTtVQUFXRTtRQUFTLElBQUtmLEtBQUE7UUFDakMsSUFBSWEsU0FBQSxFQUFXVCxPQUFBLENBQVFZLGdCQUFBLENBQWlCLGVBQWVMLGVBQWU7UUFDdEUsSUFBSUksU0FBQSxFQUFXWCxPQUFBLENBQVFZLGdCQUFBLENBQWlCLGVBQWVGLGVBQWU7UUFDdEUsT0FBTyxNQUFLO1VBQ1ZSLFNBQUEsQ0FBVVcsT0FBQSxDQUFPO1VBRWpCLElBQUlKLFNBQUEsRUFBV1osR0FBQSxDQUFJSSxPQUFBLENBQVFhLG1CQUFBLENBQW9CLGVBQWVMLFNBQVM7VUFDdkUsSUFBSUUsU0FBQSxFQUNGZCxHQUFBLENBQUlJLE9BQUEsQ0FBUWEsbUJBQUEsQ0FBb0IsZUFBZUosZUFBZTtRQUNsRTtNQUNGLEdBQUcsRUFBRTtNQUVMLElBQUlLLEdBQUEsR0FBY25CLEtBQUEsQ0FBTW9CLFNBQUEsR0FDcEIsNEJBQTRCcEIsS0FBQSxDQUFNb0IsU0FBQSxLQUNsQztNQUNKLE9BQ0V4QixNQUFBLENBQUFXLE9BQUEsQ0FBQWMsYUFBQTtRQUFLcEIsR0FBQTtRQUFVbUIsU0FBQSxFQUFXRDtNQUFHLEdBQzFCbkIsS0FBQSxDQUFNc0IsUUFBUTtJQUdyQjtJQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==