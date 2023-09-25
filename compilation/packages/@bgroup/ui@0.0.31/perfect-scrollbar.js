System.register(["@beyond-js/kernel@0.1.8/bundle","@beyond-js/kernel@0.1.8/core","@beyond-js/kernel@0.1.8/styles","react@18.2.0","perfect-scrollbar@1.5.5"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.8"],["react","18.2.0"],["perfect-scrollbar","1.5.5"],["@bgroup/ui","0.0.31"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.8/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/styles', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('perfect-scrollbar@1.5.5', dep)],
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

// .beyond/uimport/temp/@bgroup/ui/perfect-scrollbar.0.0.31.js
var perfect_scrollbar_0_0_31_exports = {};
__export(perfect_scrollbar_0_0_31_exports, {
  BeyondScrollContainer: () => BeyondScrollContainer,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(perfect_scrollbar_0_0_31_exports);

// node_modules/@bgroup/ui/perfect-scrollbar/perfect-scrollbar.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.8/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.8/styles"), 0);
var dependency_2 = __toESM(require("react@18.2.0"), 0);
var dependency_3 = __toESM(require("perfect-scrollbar@1.5.5"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/ui@0.0.31/perfect-scrollbar"
  },
  "type": "code",
  "name": "perfect-scrollbar"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/styles", dependency_1], ["react", dependency_2], ["perfect-scrollbar", dependency_3]]);
brequire("@beyond-js/kernel/styles").styles.register("@bgroup/ui@0.0.31/perfect-scrollbar");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZ3JvdXAvdWkvcGVyZmVjdC1zY3JvbGxiYXIuMC4wLjMxLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZ3JvdXAvdWkvcGVyZmVjdC1zY3JvbGxiYXIvX19zb3VyY2VzL3BlcmZlY3Qtc2Nyb2xsYmFyL2NvZGUvdHMvY29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJwZXJmZWN0X3Njcm9sbGJhcl8wXzBfMzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQmV5b25kU2Nyb2xsQ29udGFpbmVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9yZWFjdCIsInJlcXVpcmUyIiwiX3BlcmZlY3RTY3JvbGxiYXIiLCJCZXlvbmRTY3JvbGxDb250YWluZXIyIiwicHJvcHMiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjb250cm9sIiwiY3VycmVudCIsInNjcm9sbGJhciIsImRlZmF1bHQiLCJ3aGVlbFNwZWVkIiwid2hlZWxQcm9wYWdhdGlvbiIsIm1pblNjcm9sbGJhckxlbmd0aCIsImhhbmRsZU9uU2Nyb2xsWSIsImV2ZW50Iiwib25TY3JvbGxZIiwiaGFuZGxlT25TY3JvbGxYIiwib25TY3JvbGxYIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xzIiwiY2xhc3NOYW1lIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxnQ0FBQTtBQUFBQyxRQUFBLENBQUFELGdDQUFBO0VBQUFFLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsZ0NBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxJQUFBUSxNQUFBLEdBQUFDLFFBQUE7SUFDQSxJQUFBQyxpQkFBQSxHQUFBRCxRQUFBO0lBZWlCLFNBQ05FLHVCQUFzQkMsS0FBQSxFQUFZO01BQzNDLE1BQU1DLEdBQUEsSUFBd0MsR0FBQUwsTUFBQSxDQUFBTSxNQUFBLEVBQU8sSUFBSTtNQUV6RCxJQUFBTixNQUFBLENBQUFPLFNBQUEsRUFBVSxNQUFtQjtRQUMzQixNQUFNQyxPQUFBLEdBQTBCSCxHQUFBLENBQUlJLE9BQUE7UUFFcEMsTUFBTUMsU0FBQSxHQUE4QixJQUFJUixpQkFBQSxDQUFBUyxPQUFBLENBQWlCSCxPQUFBLEVBQVM7VUFDaEVJLFVBQUEsRUFBWTtVQUNaQyxnQkFBQSxFQUFrQjtVQUNsQkMsa0JBQUEsRUFBb0I7U0FDckI7UUFDRCxNQUFNQyxlQUFBLEdBQW1CQyxLQUFBLElBQWU7VUFDdENaLEtBQUEsQ0FBTWEsU0FBQSxDQUFVRCxLQUFBLEVBQU9SLE9BQUEsRUFBU0UsU0FBUztRQUMzQztRQUVBLE1BQU1RLGVBQUEsR0FBbUJGLEtBQUEsSUFBZTtVQUN0Q1osS0FBQSxDQUFNYSxTQUFBLENBQVVELEtBQUEsRUFBT1IsT0FBQSxFQUFTRSxTQUFTO1FBQzNDO1FBQ0EsTUFBTTtVQUFFTyxTQUFBO1VBQVdFO1FBQVMsSUFBS2YsS0FBQTtRQUNqQyxJQUFJYSxTQUFBLEVBQVdULE9BQUEsQ0FBUVksZ0JBQUEsQ0FBaUIsZUFBZUwsZUFBZTtRQUN0RSxJQUFJSSxTQUFBLEVBQVdYLE9BQUEsQ0FBUVksZ0JBQUEsQ0FBaUIsZUFBZUYsZUFBZTtRQUN0RSxPQUFPLE1BQUs7VUFDVlIsU0FBQSxDQUFVVyxPQUFBLEVBQU87VUFFakIsSUFBSUosU0FBQSxFQUFXWixHQUFBLENBQUlJLE9BQUEsQ0FBUWEsbUJBQUEsQ0FBb0IsZUFBZUwsU0FBUztVQUN2RSxJQUFJRSxTQUFBLEVBQ0ZkLEdBQUEsQ0FBSUksT0FBQSxDQUFRYSxtQkFBQSxDQUFvQixlQUFlSixlQUFlO1FBQ2xFO01BQ0YsR0FBRyxFQUFFO01BRUwsSUFBSUssR0FBQSxHQUFjbkIsS0FBQSxDQUFNb0IsU0FBQSxHQUNwQiw0QkFBNEJwQixLQUFBLENBQU1vQixTQUFBLEtBQ2xDO01BQ0osT0FDRXhCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBYyxhQUFBO1FBQUtwQixHQUFBO1FBQVVtQixTQUFBLEVBQVdEO01BQUcsR0FDMUJuQixLQUFBLENBQU1zQixRQUFRO0lBR3JCO0lBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9