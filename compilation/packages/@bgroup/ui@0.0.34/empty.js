System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/kernel@0.1.9/styles","react@18.2.0","@beyond-js/kernel@0.1.9/routing","@bgroup/ui@0.0.34/icons"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["@bgroup/ui","0.0.34"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('@bgroup/ui@0.0.34/icons', dep)],
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

// .beyond/uimport/temp/@bgroup/ui/empty.0.0.34.js
var empty_0_0_34_exports = {};
__export(empty_0_0_34_exports, {
  BeyondEmpty: () => BeyondEmpty,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(empty_0_0_34_exports);

// node_modules/@bgroup/ui/empty/empty.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var dependency_2 = __toESM(require("react@18.2.0"), 0);
var dependency_3 = __toESM(require("@bgroup/ui@0.0.34/icons"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@bgroup/ui@0.0.34/empty"
  },
  "type": "code",
  "name": "empty"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/styles", dependency_1], ["react", dependency_2], ["@bgroup/ui/icons", dependency_3]]);
brequire("@beyond-js/kernel/styles").styles.register("@bgroup/ui@0.0.34/empty");
var ims = /* @__PURE__ */new Map();
ims.set("./empty", {
  hash: 1117662106,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondEmpty = BeyondEmpty2;
    var React = require2("react");
    var _icons = require2("@bgroup/ui/icons");
    function BeyondEmpty2(props) {
      const text = props.text ? props.text : "No hay registros";
      const cls = `${props.className ?? ""} beyond-element-empty`;
      return React.createElement("div", {
        className: cls
      }, React.createElement("div", {
        className: "content"
      }, props.icon && React.createElement(_icons.BeyondIcon, {
        icon: props.icon
      }), React.createElement("h3", null, text), props.additionalElement ? props.additionalElement : null, props.children ? props.children : null));
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./empty",
  "from": "BeyondEmpty",
  "name": "BeyondEmpty"
}];
var BeyondEmpty;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "BeyondEmpty") && (BeyondEmpty = require2 ? require2("./empty").BeyondEmpty : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZ3JvdXAvdWkvZW1wdHkuMC4wLjM0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZ3JvdXAvdWkvZW1wdHkvX19zb3VyY2VzL2VtcHR5L2NvZGUvdHMvZW1wdHkudHN4Il0sIm5hbWVzIjpbImVtcHR5XzBfMF8zNF9leHBvcnRzIiwiX19leHBvcnQiLCJCZXlvbmRFbXB0eSIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJSZWFjdCIsInJlcXVpcmUyIiwiX2ljb25zIiwiQmV5b25kRW1wdHkyIiwicHJvcHMiLCJ0ZXh0IiwiY2xzIiwiY2xhc3NOYW1lIiwiY3JlYXRlRWxlbWVudCIsImljb24iLCJCZXlvbmRJY29uIiwiYWRkaXRpb25hbEVsZW1lbnQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxvQkFBQTtFQUFBRSxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCxvQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBLElBQUFRLEtBQUEsR0FBQUMsUUFBQTtJQUNBLElBQUFDLE1BQUEsR0FBQUQsUUFBQTtJQVFpQixTQUNSRSxhQUFZQyxLQUFBLEVBQVk7TUFDaEMsTUFBTUMsSUFBQSxHQUFlRCxLQUFBLENBQU1DLElBQUEsR0FBT0QsS0FBQSxDQUFNQyxJQUFBLEdBQU87TUFDL0MsTUFBTUMsR0FBQSxHQUFNLEdBQUdGLEtBQUEsQ0FBTUcsU0FBQSxJQUFhO01BQ2xDLE9BQ0NQLEtBQUEsQ0FBQVEsYUFBQTtRQUFLRCxTQUFBLEVBQVdEO01BQUcsR0FDbEJOLEtBQUEsQ0FBQVEsYUFBQTtRQUFLRCxTQUFBLEVBQVU7TUFBUyxHQUN0QkgsS0FBQSxDQUFNSyxJQUFBLElBQVFULEtBQUEsQ0FBQVEsYUFBQSxDQUFDTixNQUFBLENBQUFRLFVBQUEsRUFBVTtRQUFDRCxJQUFBLEVBQU1MLEtBQUEsQ0FBTUs7TUFBSSxJQUMzQ1QsS0FBQSxDQUFBUSxhQUFBLGFBQUtILElBQUksR0FDUkQsS0FBQSxDQUFNTyxpQkFBQSxHQUFvQlAsS0FBQSxDQUFNTyxpQkFBQSxHQUFvQixNQUNwRFAsS0FBQSxDQUFNUSxRQUFBLEdBQVdSLEtBQUEsQ0FBTVEsUUFBQSxHQUFXLElBQUksQ0FDbEM7SUFHVCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=