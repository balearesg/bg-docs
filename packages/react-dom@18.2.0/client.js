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
var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});
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
__reExport(client_18_2_0_exports, __toESM(require_client()));
var import_client = __toESM(require_client());
var client_18_2_0_default = import_client.default;
module.exports = __toCommonJS(client_18_2_0_exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vY2xpZW50LmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L3JlYWN0LWRvbS9jbGllbnQuMTguMi4wLmpzIl0sIm5hbWVzIjpbIm0iLCJyZXF1aXJlIiwiZXhwb3J0cyIsImNyZWF0ZVJvb3QiLCJoeWRyYXRlUm9vdCIsImkiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsImMiLCJvIiwidXNpbmdDbGllbnRFbnRyeVBvaW50IiwiaCIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsIl9fcmVFeHBvcnQiLCJfX3RvRVNNIiwiY2xpZW50XzE4XzJfMF9kZWZhdWx0IiwiaW1wb3J0X2NsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7RUFBQTtJQUFBOztJQUVBLElBQUlBLElBQUlDLFFBQVE7SUFDaEIsSUFBSSxPQUF1QztNQUN6Q0MsUUFBUUMsYUFBYUgsRUFBRUc7TUFDdkJELFFBQVFFLGNBQWNKLEVBQUVJO0lBQzFCLE9BQU87TUFDREMsSUFBSUwsRUFBRU07TUFDVkosUUFBUUMsYUFBYSxVQUFTSSxHQUFHQyxHQUFHO1FBQ2xDSCxFQUFFSSx3QkFBd0I7UUFDMUIsSUFBSTtVQUNGLE9BQU9ULEVBQUVHLFdBQVdJLEdBQUdDLENBQUM7UUFDMUIsVUFBRTtVQUNBSCxFQUFFSSx3QkFBd0I7UUFDNUI7TUFDRjtNQUNBUCxRQUFRRSxjQUFjLFVBQVNHLEdBQUdHLEdBQUdGLEdBQUc7UUFDdENILEVBQUVJLHdCQUF3QjtRQUMxQixJQUFJO1VBQ0YsT0FBT1QsRUFBRUksWUFBWUcsR0FBR0csR0FBR0YsQ0FBQztRQUM5QixVQUFFO1VBQ0FILEVBQUVJLHdCQUF3QjtRQUM1QjtNQUNGO0lBQ0Y7SUFqQk07RUFBQTtBQUFBOzs7QUNQTjtBQUFBRTtFQUFBQztBQUFBO0FBQUFDLGtDQUFjQztBQUVkLG9CQUFxQkE7QUFDckIsSUFBT0Msd0JBQVFDIiwiZmlsZSI6IiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIG0gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGV4cG9ydHMuY3JlYXRlUm9vdCA9IG0uY3JlYXRlUm9vdDtcbiAgZXhwb3J0cy5oeWRyYXRlUm9vdCA9IG0uaHlkcmF0ZVJvb3Q7XG59IGVsc2Uge1xuICB2YXIgaSA9IG0uX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG4gIGV4cG9ydHMuY3JlYXRlUm9vdCA9IGZ1bmN0aW9uKGMsIG8pIHtcbiAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBtLmNyZWF0ZVJvb3QoYywgbyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gZmFsc2U7XG4gICAgfVxuICB9O1xuICBleHBvcnRzLmh5ZHJhdGVSb290ID0gZnVuY3Rpb24oYywgaCwgbykge1xuICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG0uaHlkcmF0ZVJvb3QoYywgaCwgbyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuIiwiZXhwb3J0ICogZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5cbmltcG9ydCBfZGVmYXVsdCBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcbmV4cG9ydCBkZWZhdWx0IF9kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiL2RvY3Mvb3V0In0=