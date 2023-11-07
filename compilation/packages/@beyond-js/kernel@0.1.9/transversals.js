System.register(["@beyond-js/kernel@0.1.9/bundle"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep)],
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

// .beyond/uimport/@beyond-js/kernel/transversals.0.1.9.js
var transversals_0_1_9_exports = {};
__export(transversals_0_1_9_exports, {
  Transversal: () => Transversal,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(transversals_0_1_9_exports);

// node_modules/@beyond-js/kernel/transversals/transversals.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.9/transversals"
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
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC90cmFuc3ZlcnNhbHMuMC4xLjkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvdHJhbnN2ZXJzYWxzL19fc291cmNlcy90cmFuc3ZlcnNhbHMvZGVwZW5kZW5jaWVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL3RyYW5zdmVyc2Fscy9fX3NvdXJjZXMvdHJhbnN2ZXJzYWxzL3RyYW5zdmVyc2FsLnRzIl0sIm5hbWVzIjpbInRyYW5zdmVyc2Fsc18wXzFfOV9leHBvcnRzIiwiX19leHBvcnQiLCJUcmFuc3ZlcnNhbCIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfZGVmYXVsdCIsIk1hcCIsInVwZGF0ZSIsImRlcHMiLCJjbGVhciIsImZvckVhY2giLCJzcGVjaWZpZXIiLCJkZXBlbmRlbmN5Iiwic2V0IiwiZGVmYXVsdCIsIl9idW5kbGUiLCJyZXF1aXJlMiIsIl9kZXBlbmRlbmNpZXMiLCJUcmFuc3ZlcnNhbDIiLCJuYW1lIiwibGFuZ3VhZ2UiLCJidW5kbGVzIiwiZGVwZW5kZW5jaWVzIiwiY29uc3RydWN0b3IiLCJpbml0aWFsaXNlZCIsImluaXRpYWxpc2UiLCJFcnJvciIsInBhY2thZ2VzIiwic3BlY3MiLCJjcmVhdG9yIiwicGtnIiwiQnVuZGxlIiwicGFja2FnZSIsImltczIiLCJleHBvcnRzMiIsInJlc3BvbnNlIiwiZGVzY3JpcHRvciIsImltcyIsInJlZ2lzdGVyIiwicmVnaXN0ZXIyIiwiaGFzIiwicHVzaCIsImdldCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwia2V5cyIsInBrZzIiLCJ2YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDBCQUFBO0FBQUFDLFFBQUEsQ0FB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LElBQUksS0FBSyxDQUFBVyxZQUFBLENBQWNrQixHQUFBLENBQUk3QixTQUFTLEdBQUc7Z0JBQ25DNEIsU0FBQSxDQUFTRSxJQUFBLENBQUssQ0FBQzlCLFNBQUEsRUFBVyxLQUFLLENBQUFXLFlBQUEsQ0FBY29CLEdBQUEsQ0FBSS9CLFNBQVMsQ0FBQyxDQUFDO2dCQUM1RDs7Y0FJSixJQUFJLENBQUNnQixRQUFBLENBQVNhLEdBQUEsQ0FBSTdCLFNBQVMsR0FBRztnQkFDMUIsTUFBTWdDLElBQUEsR0FBTztpQkFBcUJDLElBQUEsQ0FBS0MsU0FBQSxDQUFVLENBQUMsR0FBRyxLQUFLLENBQUF2QixZQUFBLENBQWN3QixJQUFBLENBQUksQ0FBRSxDQUFDO1lBQzNERixJQUFBLENBQUtDLFNBQUEsQ0FBVSxDQUFDLEdBQUdsQixRQUFBLENBQVNtQixJQUFBLENBQUksQ0FBRSxDQUFDO2dCQUN2RCxNQUFNLElBQUlwQixLQUFBLENBQU0sZUFBZWYsU0FBQSxtQkFBNEIsS0FBSyxDQUFBUSxJQUFBLGtCQUF1QndCLElBQUEsRUFBTTs7Y0FHakcsTUFBTTtnQkFBQ2IsR0FBQSxFQUFBaUI7Y0FBRyxJQUFJcEIsUUFBQSxDQUFTZSxHQUFBLENBQUkvQixTQUFTO2NBQ3BDNEIsU0FBQSxDQUFTRSxJQUFBLENBQUssQ0FBQzlCLFNBQUEsRUFBV29DLElBQUEsQ0FBSTVDLE9BQUEsQ0FBUTZDLE1BQU0sQ0FBQztZQUNqRCxDQUFDO1lBQ0QsT0FBT1QsU0FBQTtVQUNYLEdBQUM7VUFFRFosUUFBQSxDQUFTakIsT0FBQSxDQUFRLENBQUM7WUFBQ29CLEdBQUEsRUFBQWlCO1VBQUcsTUFBTSxLQUFLLENBQUExQixPQUFBLENBQVNSLEdBQUEsQ0FBSWtDLElBQUEsQ0FBSXBDLFNBQUEsRUFBV29DLElBQUEsQ0FBSTVDLE9BQUEsQ0FBUTZDLE1BQU0sQ0FBQztVQUVoRlYsUUFBQSxJQUFZUixHQUFBLENBQUlSLFlBQUEsQ0FBYWYsTUFBQSxDQUFPK0IsUUFBUTtVQUk1Q1IsR0FBQSxDQUFJTyxHQUFBLENBQUlDLFFBQUEsQ0FBU0wsSUFBRztRQUN4QixDQUFDO1FBRUROLFFBQUEsQ0FBU2pCLE9BQUEsQ0FBUSxDQUFDO1VBQUNvQjtRQUFHLE1BQU0sQ0FBQ0EsR0FBQSxDQUFJTixXQUFBLElBQWVNLEdBQUEsQ0FBSUwsVUFBQSxDQUFVLENBQUU7TUFDcEU7O0lBQ0h0QixPQUFBLENBQUFKLFdBQUEsR0FBQW1CLFlBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9