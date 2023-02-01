System.register(["@beyond-js/kernel@0.1.7/bundle"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.7"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.7/bundle', dep)],
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

// .beyond/uimport/@beyond-js/kernel/transversals.0.1.7.js
var transversals_0_1_7_exports = {};
__export(transversals_0_1_7_exports, {
  Transversal: () => Transversal,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});

// node_modules/@beyond-js/kernel/transversals/transversals.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.7/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.7/transversals"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([]);
var ims = /* @__PURE__ */new Map();
ims.set("./dependencies", {
  hash: 916907578,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default extends Map {
      update(deps) {
        this.clear();
        deps?.forEach(([specifier, dependency]) => this.set(specifier, dependency));
      }
    }
    exports.default = _default;
  }
});
ims.set("./transversal", {
  hash: 2292377186,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Transversal = void 0;
    var _bundle = require2("@beyond-js/kernel/bundle");
    var _dependencies = require2("./dependencies");
    class Transversal2 {
      #name;
      get name() {
        return this.#name;
      }
      #language;
      get language() {
        return this.#language;
      }
      #bundles = /* @__PURE__ */new Map();
      get bundles() {
        return this.#bundles;
      }
      #dependencies = new _dependencies.default();
      get dependencies() {
        return this.#dependencies;
      }
      constructor(name, language) {
        this.#name = name;
        this.#language = language;
      }
      #initialised = false;
      initialise(bundles) {
        if (this.#initialised) throw new Error(`Transversal "${this.#name}" already initialised`);
        this.#initialised = true;
        const packages = /* @__PURE__ */new Map();
        bundles.forEach(([specs, creator]) => {
          const pkg = new _bundle.Bundle(specs).package(this.#language);
          const ims2 = /* @__PURE__ */new Map();
          const exports2 = {};
          const response = creator(ims2, exports2);
          const {
            dependencies
          } = response ? response : {
            dependencies: void 0
          };
          pkg.exports.descriptor = exports2.descriptor;
          packages.set(pkg.specifier, {
            pkg,
            dependencies,
            ims: ims2
          });
        });
        packages.forEach(({
          pkg,
          dependencies,
          ims: ims2
        }) => {
          const register = (() => {
            const register2 = [];
            dependencies?.forEach(specifier => {
              if (this.#dependencies.has(specifier)) {
                register2.push([specifier, this.#dependencies.get(specifier)]);
                return;
              }
              if (!packages.has(specifier)) {
                const data = `
	Dependencies: ${JSON.stringify([...this.#dependencies.keys()])}. 
	Bundles: ${JSON.stringify([...packages.keys()])}`;
                throw new Error(`Dependency "${specifier}" not found on "${this.#name}" transversal. ${data}`);
              }
              const {
                pkg: pkg2
              } = packages.get(specifier);
              register2.push([specifier, pkg2.exports.values]);
            });
            return register2;
          })();
          packages.forEach(({
            pkg: pkg2
          }) => this.#bundles.set(pkg2.specifier, pkg2.exports.values));
          register && pkg.dependencies.update(register);
          pkg.ims.register(ims2);
        });
        packages.forEach(({
          pkg
        }) => !pkg.initialised && pkg.initialise());
      }
    }
    exports.Transversal = Transversal2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./transversal",
  "from": "Transversal",
  "name": "Transversal"
}];
var Transversal;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Transversal") && (Transversal = require2 ? require2("./transversal").Transversal : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
module.exports = __toCommonJS(transversals_0_1_7_exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC90cmFuc3ZlcnNhbHMuMC4xLjcuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvdHJhbnN2ZXJzYWxzL19fc291cmNlcy90cmFuc3ZlcnNhbHMvZGVwZW5kZW5jaWVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL3RyYW5zdmVyc2Fscy9fX3NvdXJjZXMvdHJhbnN2ZXJzYWxzL3RyYW5zdmVyc2FsLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiVHJhbnN2ZXJzYWwiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJNYXAiLCJ1cGRhdGUiLCJkZXBzIiwiY2xlYXIiLCJmb3JFYWNoIiwic3BlY2lmaWVyIiwiZGVwZW5kZW5jeSIsInNldCIsImV4cG9ydHMiLCJUcmFuc3ZlcnNhbDIiLCJuYW1lIiwibGFuZ3VhZ2UiLCJidW5kbGVzIiwiX2RlcGVuZGVuY2llcyIsImRlcGVuZGVuY2llcyIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbGlzZSIsIkVycm9yIiwicGFja2FnZXMiLCJzcGVjcyIsImNyZWF0b3IiLCJwa2ciLCJfYnVuZGxlIiwicGFja2FnZSIsImltczIiLCJleHBvcnRzMiIsInJlc3BvbnNlIiwiZGVzY3JpcHRvciIsImltcyIsInJlZ2lzdGVyIiwicmVnaXN0ZXIyIiwiaGFzIiwicHVzaCIsImdldCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwia2V5cyIsInBrZzIiLCJ2YWx1ZXMiLCJpbml0aWFsaXNlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQWMsdUJBQWVDLElBQWdCO01BQ3pDQyxPQUFPQyxNQUFzQjtRQUN6QixLQUFLQyxPQUFLO1FBQ1ZELE1BQU1FLFFBQVEsQ0FBQyxDQUFDQyxXQUFXQyxnQkFBZ0IsS0FBS0MsSUFBSUYsV0FBV0MsVUFBVSxDQUFDO01BQzlFOztJQUNIRTs7Ozs7Ozs7Ozs7O0lDTEQ7SUFDQTtJQVFpQixNQUNYQyxhQUFXO01BQ0o7VUFDTEMsT0FBSTtRQUNKLE9BQU87TUFDWDtNQUVTO1VBQ0xDLFdBQVE7UUFDUixPQUFPO01BQ1g7TUFFUyxXQUE2QixtQkFBSVgsS0FBRztVQUN6Q1ksVUFBTztRQUNQLE9BQU87TUFDWDtNQUVBLGdCQUFnQixJQUFJQyx1QkFBWTtVQUM1QkMsZUFBWTtRQUNaLE9BQU87TUFDWDtNQUVBQyxZQUFZTCxNQUFjQyxVQUFpQjtRQUN2QyxhQUFhRDtRQUNiLGlCQUFpQkM7TUFDckI7TUFFQSxlQUFlO01BRWZLLFdBQVdKLFNBQWtDO1FBQ3pDLElBQUksbUJBQW1CLE1BQU0sSUFBSUssTUFBTSxnQkFBZ0IsaUNBQWlDO1FBQ3hGLG9CQUFvQjtRQUVwQixNQUFNQyxXQUFvRixtQkFBSWxCLEtBQUc7UUFNakdZLFFBQVFSLFFBQVEsQ0FBQyxDQUFDZSxPQUFPQyxhQUFZO1VBQ2pDLE1BQU1DLE1BQU0sSUFBSUMsZUFBT0gsS0FBSyxFQUFFSSxRQUFRLGNBQWM7VUFFcEQsTUFBTUMsT0FBa0IsbUJBQUl4QixLQUFHO1VBQy9CLE1BQU15QixXQUFpRDtVQUd2RCxNQUFNQyxXQUFXTixRQUFRSSxNQUFLQyxRQUFPO1VBQ3JDLE1BQU07WUFBQ1g7Y0FBZ0JZLFdBQVdBLFdBQVc7WUFBQ1osY0FBYztVQUFNO1VBR2xFTyxJQUFJYixRQUFRbUIsYUFBYUYsU0FBUUU7VUFJakNULFNBQVNYLElBQUljLElBQUloQixXQUFXO1lBQUNnQjtZQUFLUDtZQUFjYztVQUFHLENBQUM7UUFDeEQsQ0FBQztRQU1EVixTQUFTZCxRQUFRLENBQUM7VUFBQ2lCO1VBQUtQO1VBQWNjO2NBQVE7VUFDMUMsTUFBTUMsV0FBNkIsT0FBSztZQUNwQyxNQUFNQyxZQUE0QjtZQUNsQ2hCLGNBQWNWLFFBQVNDLGFBQXFCO2NBQ3hDLElBQUksbUJBQW1CMEIsSUFBSTFCLFNBQVMsR0FBRztnQkFDbkN5QixVQUFTRSxLQUFLLENBQUMzQixXQUFXLG1CQUFtQjRCLElBQUk1QixTQUFTLENBQUMsQ0FBQztnQkFDNUQ7O2NBSUosSUFBSSxDQUFDYSxTQUFTYSxJQUFJMUIsU0FBUyxHQUFHO2dCQUMxQixNQUFNNkIsT0FBTztpQkFBcUJDLEtBQUtDLFVBQVUsQ0FBQyxHQUFHLG1CQUFtQkMsTUFBTSxDQUFDO1lBQzNERixLQUFLQyxVQUFVLENBQUMsR0FBR2xCLFNBQVNtQixNQUFNLENBQUM7Z0JBQ3ZELE1BQU0sSUFBSXBCLE1BQU0sZUFBZVosNEJBQTRCLDRCQUE0QjZCLE1BQU07O2NBR2pHLE1BQU07Z0JBQUNiO2tCQUFPSCxTQUFTZSxJQUFJNUIsU0FBUztjQUNwQ3lCLFVBQVNFLEtBQUssQ0FBQzNCLFdBQVdpQyxLQUFJOUIsUUFBUStCLE1BQU0sQ0FBQztZQUNqRCxDQUFDO1lBQ0QsT0FBT1Q7VUFDWCxJQUFDO1VBRURaLFNBQVNkLFFBQVEsQ0FBQztZQUFDaUI7Z0JBQVMsY0FBY2QsSUFBSStCLEtBQUlqQyxXQUFXaUMsS0FBSTlCLFFBQVErQixNQUFNLENBQUM7VUFFaEZWLFlBQVlSLElBQUlQLGFBQWFiLE9BQU80QixRQUFRO1VBSTVDUixJQUFJTyxJQUFJQyxTQUFTTCxJQUFHO1FBQ3hCLENBQUM7UUFFRE4sU0FBU2QsUUFBUSxDQUFDO1VBQUNpQjtjQUFTLENBQUNBLElBQUltQixlQUFlbkIsSUFBSUwsWUFBWTtNQUNwRTs7SUFDSFIiLCJmaWxlIjoiIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnQGJleW9uZC1qcy9rZXJuZWwvdHJhbnN2ZXJzYWxzJzsiLG51bGwsbnVsbF0sInNvdXJjZVJvb3QiOiIvZG9jcy9vdXQifQ==