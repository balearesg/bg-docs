System.register(["@beyond-js/kernel@0.1.8/bundle","react@18.2.0","@beyond-js/kernel@0.1.8/core","@beyond-js/kernel@0.1.8/styles"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.8"],["react","18.2.0"],["@bgroup/ui","0.0.31"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.8/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/styles', dep)],
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

// .beyond/uimport/temp/@bgroup/ui/spinner.0.0.31.js
var spinner_0_0_31_exports = {};
__export(spinner_0_0_31_exports, {
  BeyondSpinner: () => BeyondSpinner,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(spinner_0_0_31_exports);

// node_modules/@bgroup/ui/spinner/spinner.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.8/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("@beyond-js/kernel@0.1.8/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/ui@0.0.31/spinner"
  },
  "type": "code",
  "name": "spinner"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@beyond-js/kernel/styles", dependency_2]]);
brequire("@beyond-js/kernel/styles").styles.register("@bgroup/ui@0.0.31/spinner");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZ3JvdXAvdWkvc3Bpbm5lci4wLjAuMzEuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJncm91cC91aS9zcGlubmVyL19fc291cmNlcy9zcGlubmVyL2NvZGUvdHMvc3BpbmVyLnRzeCJdLCJuYW1lcyI6WyJzcGlubmVyXzBfMF8zMV9leHBvcnRzIiwiX19leHBvcnQiLCJCZXlvbmRTcGlubmVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9yZWFjdCIsInJlcXVpcmUyIiwiQmV5b25kU3Bpbm5lcjIiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJjb2xvciIsImNsYXNzTmFtZSIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJzaXplIiwic3Ryb2tlIiwiY2xzIiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50Iiwidmlld0JveCIsImN4IiwiY3kiLCJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxzQkFBQTtBQUFBQyxRQUFBLENBQUFELHNCQUFBO0VBQUFFLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLHNCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxJQUFBUSxNQUFBLEdBQUFDLFFBQUE7SUFjRSxNQUFNQyxjQUFBLElBRUYsR0FBQUYsTUFBQSxDQUFBRyxVQUFBLEVBQ0YsQ0FBQ0MsS0FBQSxFQUFtQkMsR0FBQSxLQUErQztNQUNqRSxNQUFNO1FBQUVDLEtBQUE7UUFBT0MsU0FBQTtRQUFXQyxPQUFBO1FBQVNDLFNBQUE7UUFBV0M7TUFBSSxJQUFLTixLQUFBO01BQ3ZELElBQUlPLE1BQUE7TUFDSixJQUFJSCxPQUFBLEVBQVNHLE1BQUEsR0FBUyxzQixJQUNiRixTQUFBLEVBQVdFLE1BQUEsR0FBUyx3QixJQUNwQkwsS0FBQSxFQUFPSyxNQUFBLEdBQVNMLEtBQUEsTUFDcEJLLE1BQUEsR0FBUztNQUVkLE1BQU1DLEdBQUEsR0FBY0wsU0FBQSxHQUNoQixHQUFHQSxTQUFBLDRCQUNIO01BQ0osTUFBTU0sS0FBQSxHQUFhO1FBQUVBLEtBQUEsRUFBTztNQUFFO01BQzlCLElBQUlILElBQUEsRUFBTTtRQUNSRyxLQUFBLENBQU1BLEtBQUEsQ0FBTUMsTUFBQSxHQUFTSixJQUFBO1FBQ3JCRyxLQUFBLENBQU1BLEtBQUEsQ0FBTUUsS0FBQSxHQUFRTCxJQUFBOztNQUNyQjtNQUNELE9BQ0VWLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQTtRQUFLVixTQUFBLEVBQVdLLEdBQUE7UUFBS1AsR0FBQTtRQUFRLEdBQU1RO01BQUssR0FDdENiLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQTtRQUFLQyxPQUFBLEVBQVE7TUFBYSxHQUN4QmxCLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQTtRQUFRRSxFQUFBLEVBQUc7UUFBS0MsRUFBQSxFQUFHO1FBQUtDLENBQUEsRUFBRTtRQUFLUixLQUFBLEVBQU87VUFBRUY7UUFBTTtNQUFFLEVBQUksQ0FDaEQ7SUFHWixDQUFDO0lBQ0RiLE9BQUEsQ0FBQUosYUFBQSxHQUFBUSxjQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==