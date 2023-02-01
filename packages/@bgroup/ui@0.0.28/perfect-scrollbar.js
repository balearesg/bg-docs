System.register(["@beyond-js/kernel@0.1.7/bundle","@beyond-js/kernel@0.1.7/core","@beyond-js/kernel@0.1.7/styles","react@18.2.0","perfect-scrollbar@1.5.5"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.7"],["react","18.2.0"],["perfect-scrollbar","1.5.5"],["@bgroup/ui","0.0.28"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.7/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.7/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.7/styles', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('perfect-scrollbar@1.5.5', dep)],
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

// .beyond/uimport/@bgroup/ui/perfect-scrollbar.0.0.28.js
var perfect_scrollbar_0_0_28_exports = {};
__export(perfect_scrollbar_0_0_28_exports, {
  BeyondScrollContainer: () => BeyondScrollContainer,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});

// node_modules/@bgroup/ui/perfect-scrollbar/perfect-scrollbar.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.7/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.7/styles"), 0);
var dependency_2 = __toESM(require("react@18.2.0"), 0);
var dependency_3 = __toESM(require("perfect-scrollbar@1.5.5"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/ui@0.0.28/perfect-scrollbar"
  },
  "type": "code",
  "name": "perfect-scrollbar"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/styles", dependency_1], ["react", dependency_2], ["perfect-scrollbar", dependency_3]]);
brequire("@beyond-js/kernel/styles").styles.register("@bgroup/ui@0.0.28/perfect-scrollbar");
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
module.exports = __toCommonJS(perfect_scrollbar_0_0_28_exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmdyb3VwL3VpL3BlcmZlY3Qtc2Nyb2xsYmFyLjAuMC4yOC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmdyb3VwL3VpL3BlcmZlY3Qtc2Nyb2xsYmFyL19fc291cmNlcy9wZXJmZWN0LXNjcm9sbGJhci9jb2RlL3RzL2NvbnRhaW5lci50c3giXSwibmFtZXMiOlsiX19leHBvcnQiLCJCZXlvbmRTY3JvbGxDb250YWluZXIiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJwcm9wcyIsInJlZiIsImNvbnRyb2wiLCJjdXJyZW50Iiwic2Nyb2xsYmFyIiwiX3BlcmZlY3RTY3JvbGxiYXIiLCJ3aGVlbFNwZWVkIiwid2hlZWxQcm9wYWdhdGlvbiIsIm1pblNjcm9sbGJhckxlbmd0aCIsImhhbmRsZU9uU2Nyb2xsWSIsImV2ZW50Iiwib25TY3JvbGxZIiwiaGFuZGxlT25TY3JvbGxYIiwib25TY3JvbGxYIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xzIiwiY2xhc3NOYW1lIiwiX3JlYWN0IiwiY2hpbGRyZW4iXSwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==