System.register(["react@18.2.0","scheduler@0.23.0","react-dom@18.2.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.2.0"],["scheduler","0.23.0"],["react-dom","18.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('scheduler@0.23.0', dep), dep => dependencies.set('react-dom@18.2.0', dep)],
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
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// node_modules/react-dom/client.js
var require_client = __commonJS({
  "node_modules/react-dom/client.js"(exports) {
    "use strict";

    var m = require("react-dom@18.2.0");
    if (false) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function (c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function (c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// .beyond/uimport/react-dom/client.18.2.0.js
var client_18_2_0_exports = {};
__export(client_18_2_0_exports, {
  default: () => client_18_2_0_default
});
module.exports = __toCommonJS(client_18_2_0_exports);
__reExport(client_18_2_0_exports, __toESM(require_client()), module.exports);
var import_client = __toESM(require_client());
var client_18_2_0_default = import_client.default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vY2xpZW50LmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L3JlYWN0LWRvbS9jbGllbnQuMTguMi4wLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVfY2xpZW50IiwiX19jb21tb25KUyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1kb20vY2xpZW50LmpzIiwiZXhwb3J0cyIsIm0iLCJyZXF1aXJlIiwiY3JlYXRlUm9vdCIsImh5ZHJhdGVSb290IiwiaSIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwiYyIsIm8iLCJ1c2luZ0NsaWVudEVudHJ5UG9pbnQiLCJoIiwiY2xpZW50XzE4XzJfMF9leHBvcnRzIiwiX19leHBvcnQiLCJkZWZhdWx0IiwiY2xpZW50XzE4XzJfMF9kZWZhdWx0IiwibW9kdWxlIiwiX190b0NvbW1vbkpTIiwiX19yZUV4cG9ydCIsIl9fdG9FU00iLCJpbXBvcnRfY2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxjQUFBLEdBQUFDLFVBQUE7RUFBQSxrQ0FBQUMsQ0FBQUMsT0FBQTtJQUFBOztJQUVBLElBQUlDLENBQUEsR0FBSUMsT0FBQSxDQUFRO0lBQ2hCLElBQUksT0FBdUM7TUFDekNGLE9BQUEsQ0FBUUcsVUFBQSxHQUFhRixDQUFBLENBQUVFLFVBQUE7TUFDdkJILE9BQUEsQ0FBUUksV0FBQSxHQUFjSCxDQUFBLENBQUVHLFdBQUE7SUFDMUIsT0FBTztNQUNEQyxDQUFBLEdBQUlKLENBQUEsQ0FBRUssa0RBQUE7TUFDVk4sT0FBQSxDQUFRRyxVQUFBLEdBQWEsVUFBU0ksQ0FBQSxFQUFHQyxDQUFBLEVBQUc7UUFDbENILENBQUEsQ0FBRUkscUJBQUEsR0FBd0I7UUFDMUIsSUFBSTtVQUNGLE9BQU9SLENBQUEsQ0FBRUUsVUFBQSxDQUFXSSxDQUFBLEVBQUdDLENBQUM7UUFDMUIsVUFBRTtVQUNBSCxDQUFBLENBQUVJLHFCQUFBLEdBQXdCO1FBQzVCO01BQ0Y7TUFDQVQsT0FBQSxDQUFRSSxXQUFBLEdBQWMsVUFBU0csQ0FBQSxFQUFHRyxDQUFBLEVBQUdGLENBQUEsRUFBRztRQUN0Q0gsQ0FBQSxDQUFFSSxxQkFBQSxHQUF3QjtRQUMxQixJQUFJO1VBQ0YsT0FBT1IsQ0FBQSxDQUFFRyxXQUFBLENBQVlHLENBQUEsRUFBR0csQ0FBQSxFQUFHRixDQUFDO1FBQzlCLFVBQUU7VUFDQUgsQ0FBQSxDQUFFSSxxQkFBQSxHQUF3QjtRQUM1QjtNQUNGO0lBQ0Y7SUFqQk0sSUFBQUosQ0FBQTtFQUFBO0FBQUE7OztBQ1BOLElBQUFNLHFCQUFBO0FBQUFDLFFBQUEsQ0FBQUQscUJBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBZixPQUFBLEdBQUFnQixZQUFBLENBQUFMLHFCQUFBO0FBQUFNLFVBQUEsQ0FBQU4scUJBQUEsRUFBY08sT0FBQSxDQUFBckIsY0FBQSxLQUFka0IsTUFBQSxDQUFBZixPQUFBO0FBRUEsSUFBQW1CLGFBQUEsR0FBcUJELE9BQUEsQ0FBQXJCLGNBQUE7QUFDckIsSUFBT2lCLHFCQUFBLEdBQVFLLGFBQUEsQ0FBQU4sT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=