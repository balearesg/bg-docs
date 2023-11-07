System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/styles"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@bgroup/ui","0.0.34"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep)],
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

// .beyond/uimport/@bgroup/ui/spinner.0.0.34.js
var spinner_0_0_34_exports = {};
__export(spinner_0_0_34_exports, {
  BeyondSpinner: () => BeyondSpinner,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(spinner_0_0_34_exports);

// node_modules/@bgroup/ui/spinner/spinner.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/ui@0.0.34/spinner"
  },
  "type": "code",
  "name": "spinner"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@beyond-js/kernel/styles", dependency_2]]);
brequire("@beyond-js/kernel/styles").styles.register("@bgroup/ui@0.0.34/spinner");
var ims = /* @__PURE__ */new Map();
ims.set("./spiner", {
  hash: 2921182323,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondSpinner = void 0;
    var _react = require2("react");
    const BeyondSpinner2 = (0, _react.forwardRef)((props, ref) => {
      const {
        color,
        className,
        primary,
        secondary,
        size
      } = props;
      let stroke;
      if (primary) stroke = "var(--primary)";else if (secondary) stroke = "var(--secondary)";else if (color) stroke = color;else stroke = "var(--primary)";
      const cls = className ? `${className} beyond-element-spinner` : "beyond-element-spinner";
      const style = {
        style: {}
      };
      if (size) {
        style.style.height = size;
        style.style.width = size;
      }
      ;
      return _react.default.createElement("div", {
        className: cls,
        ref,
        ...style
      }, _react.default.createElement("svg", {
        viewBox: "0 0 100 100"
      }, _react.default.createElement("circle", {
        cx: "50",
        cy: "50",
        r: "20",
        style: {
          stroke
        }
      })));
    });
    exports.BeyondSpinner = BeyondSpinner2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./spiner",
  "from": "BeyondSpinner",
  "name": "BeyondSpinner"
}];
var BeyondSpinner;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "BeyondSpinner") && (BeyondSpinner = require2 ? require2("./spiner").BeyondSpinner : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmdyb3VwL3VpL3NwaW5uZXIuMC4wLjM0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZ3JvdXAvdWkvc3Bpbm5lci9fX3NvdXJjZXMvc3Bpbm5lci9jb2RlL3RzL3NwaW5lci50c3giXSwibmFtZXMiOlsic3Bpbm5lcl8wXzBfMzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQmV5b25kU3Bpbm5lciIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfcmVhY3QiLCJyZXF1aXJlMiIsIkJleW9uZFNwaW5uZXIyIiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiY29sb3IiLCJjbGFzc05hbWUiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5Iiwic2l6ZSIsInN0cm9rZSIsImNscyIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsInZpZXdCb3giLCJjeCIsImN5IiwiciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsc0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxzQkFBQTtFQUFBRSxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCxzQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUEsSUFBQVEsTUFBQSxHQUFBQyxRQUFBO0lBY0UsTUFBTUMsY0FBQSxJQUVGLEdBQUFGLE1BQUEsQ0FBQUcsVUFBQSxFQUNGLENBQUNDLEtBQUEsRUFBbUJDLEdBQUEsS0FBK0M7TUFDakUsTUFBTTtRQUFFQyxLQUFBO1FBQU9DLFNBQUE7UUFBV0MsT0FBQTtRQUFTQyxTQUFBO1FBQVdDO01BQUksSUFBS04sS0FBQTtNQUN2RCxJQUFJTyxNQUFBO01BQ0osSUFBSUgsT0FBQSxFQUFTRyxNQUFBLEdBQVMsc0IsSUFDYkYsU0FBQSxFQUFXRSxNQUFBLEdBQVMsd0IsSUFDcEJMLEtBQUEsRUFBT0ssTUFBQSxHQUFTTCxLQUFBLE1BQ3BCSyxNQUFBLEdBQVM7TUFFZCxNQUFNQyxHQUFBLEdBQWNMLFNBQUEsR0FDaEIsR0FBR0EsU0FBQSw0QkFDSDtNQUNKLE1BQU1NLEtBQUEsR0FBYTtRQUFFQSxLQUFBLEVBQU87TUFBRTtNQUM5QixJQUFJSCxJQUFBLEVBQU07UUFDUkcsS0FBQSxDQUFNQSxLQUFBLENBQU1DLE1BQUEsR0FBU0osSUFBQTtRQUNyQkcsS0FBQSxDQUFNQSxLQUFBLENBQU1FLEtBQUEsR0FBUUwsSUFBQTs7TUFDckI7TUFDRCxPQUNFVixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUE7UUFBS1YsU0FBQSxFQUFXSyxHQUFBO1FBQUtQLEdBQUE7UUFBUSxHQUFNUTtNQUFLLEdBQ3RDYixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUE7UUFBS0MsT0FBQSxFQUFRO01BQWEsR0FDeEJsQixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUE7UUFBUUUsRUFBQSxFQUFHO1FBQUtDLEVBQUEsRUFBRztRQUFLQyxDQUFBLEVBQUU7UUFBS1IsS0FBQSxFQUFPO1VBQUVGO1FBQU07TUFBRSxFQUFJLENBQ2hEO0lBR1osQ0FBQztJQUNEYixPQUFBLENBQUFKLGFBQUEsR0FBQVEsY0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=