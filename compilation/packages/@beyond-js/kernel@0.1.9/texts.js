System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep)],
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

// .beyond/uimport/@beyond-js/kernel/texts.0.1.9.js
var texts_0_1_9_exports = {};
__export(texts_0_1_9_exports, {
  CurrentTexts: () => CurrentTexts,
  Texts: () => Texts,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(texts_0_1_9_exports);

// node_modules/@beyond-js/kernel/texts/texts.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.9/texts"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./current", {
  hash: 1735458173,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CurrentTexts = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _texts = require2("./texts");
    class CurrentTexts2 extends _core.Events {
      #texts = /* @__PURE__ */new Map();
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #enabled = false;
      get enabled() {
        return this.#enabled;
      }
      set enabled(value) {
        this.#enabled = !!value;
        value && this.fetch().catch(exc => console.error(exc.stack));
      }
      #last;
      get #current() {
        const {
          current: language
        } = _core.languages;
        if (this.#texts.has(language)) return this.#texts.get(language);
        const texts = new _texts.Texts(this.#bundle, {
          language
        });
        this.#texts.set(language, texts);
        return texts;
      }
      get loading() {
        return this.#current.loading;
      }
      get loaded() {
        return this.#current.loaded;
      }
      get ready() {
        !this.loaded && !this.loading && this.fetch().catch(exc => console.error(exc.stack));
        return this.loaded;
      }
      get value() {
        return this.#current.value;
      }
      constructor(bundle) {
        super();
        this.#bundle = bundle;
        if (!bundle) throw new Error(`Bundle parameter must be specified`);
        _core.languages.on("change", this.#change);
        this.#current.on("change", this.#triggerChange);
        this.#last = this.#current;
      }
      #triggerChange = () => {
        this.trigger("change");
      };
      #change = () => {
        this.#last.off("change", this.#triggerChange);
        this.#enabled && this.fetch().catch(exc => console.log(exc.stack));
        this.#current.on("change", this.#triggerChange);
        this.#last = this.#current;
        this.#triggerChange();
      };
      async fetch() {
        await _core.languages.ready;
        await this.#current.fetch();
      }
      async load() {
        await this.#current.fetch();
      }
      destroy() {
        this.#texts.forEach(texts => texts.destroy());
        _core.languages.off("change", this.#change);
      }
      toJSON() {
        return {};
      }
    }
    exports.CurrentTexts = CurrentTexts2;
  }
});
ims.set("./texts", {
  hash: 678111696,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Texts = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class Texts2 extends _core.Events {
      #module;
      get module() {
        return this.#module;
      }
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #transversal;
      get transversal() {
        return this.#transversal;
      }
      #multilanguage;
      get multilanguage() {
        return this.#multilanguage;
      }
      #language;
      get language() {
        return this.#language;
      }
      #texts;
      #loaded = false;
      get loaded() {
        return this.#loaded;
      }
      #loading;
      get loading() {
        return this.#loading;
      }
      get value() {
        return this.#texts?.txt;
      }
      get ready() {
        if (this.#loading) return false;
        this.fetch().catch(exc => console.log(exc.stack));
        return !this.#loading && this.#loaded;
      }
      constructor(module2, specs) {
        if (!module2) throw new Error("Invalid parameters");
        super();
        this.#module = module2;
        specs = specs ? specs : {};
        this.#language = specs.language;
        this.#multilanguage = !!specs.language;
        this.#bundle = !specs.transversal ? specs.bundle ? specs.bundle : "txt" : void 0;
        this.#transversal = specs.transversal;
      }
      #update = () => this.trigger("change");
      async fetch() {
        if (this.#loading || this.#loaded) return;
        this.#loading = true;
        this.trigger("change");
        const language = this.#language ? `.${this.#language}` : "";
        const {
          specifier,
          resource
        } = (() => {
          if (this.#transversal) {
            const specifier2 = `${this.#module}.${this.#transversal}${language}`;
            const pkg = (() => {
              const split = this.#module.split("/");
              return split[0].startsWith("@") ? `${split[0]}/${split[1]}` : split[0];
            })();
            const resource2 = `${pkg}/${this.#transversal}${language}`;
            return {
              specifier: specifier2,
              resource: resource2
            };
          } else {
            const specifier2 = `${this.#module}.${this.#bundle}${language}`;
            return {
              specifier: specifier2,
              resource: specifier2
            };
          }
        })();
        const imported = await bimport(resource);
        this.#texts = (() => {
          if (!this.#transversal) return imported;
          const {
            __beyond_transversal: transversal
          } = imported;
          return transversal.bundles.get(specifier);
        })();
        this.#texts.hmr.on("change", this.#update);
        this.#loading = false;
        this.#loaded = true;
        this.trigger("change");
      }
      async load() {
        await this.fetch();
      }
      destroy() {
        this.#texts?.hmr.off("change", this.#update);
      }
      toJSON() {
        return {};
      }
    }
    exports.Texts = Texts2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./current",
  "from": "CurrentTexts",
  "name": "CurrentTexts"
}, {
  "im": "./texts",
  "from": "Texts",
  "name": "Texts"
}];
var CurrentTexts, Texts;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "CurrentTexts") && (CurrentTexts = require2 ? require2("./current").CurrentTexts : value);
  (require2 || prop === "Texts") && (Texts = require2 ? require2("./texts").Texts : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC90ZXh0cy4wLjEuOS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC90ZXh0cy9fX3NvdXJjZXMvdGV4dHMvY3VycmVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC90ZXh0cy9fX3NvdXJjZXMvdGV4dHMvdGV4dHMudHMiXSwibmFtZXMiOlsidGV4dHNfMF8xXzlfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQ3VycmVudFRleHRzIiwiVGV4dHMiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX2NvcmUiLCJyZXF1aXJlMiIsIl90ZXh0cyIsIkN1cnJlbnRUZXh0czIiLCJFdmVudHMiLCJ0ZXh0cyIsIk1hcCIsImJ1bmRsZSIsImVuYWJsZWQiLCJ2YWx1ZSIsImZldGNoIiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsImxhc3QiLCJjdXJyZW50IiwiI2N1cnJlbnQiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImhhcyIsImdldCIsInNldCIsImxvYWRpbmciLCJsb2FkZWQiLCJyZWFkeSIsImNvbnN0cnVjdG9yIiwiRXJyb3IiLCJvbiIsImNoYW5nZSIsInRyaWdnZXJDaGFuZ2UiLCIjdHJpZ2dlckNoYW5nZSIsInRyaWdnZXIiLCIjY2hhbmdlIiwib2ZmIiwibG9nIiwibG9hZCIsImRlc3Ryb3kiLCJmb3JFYWNoIiwidG9KU09OIiwiVGV4dHMyIiwidHJhbnN2ZXJzYWwiLCJtdWx0aWxhbmd1YWdlIiwidHh0IiwibW9kdWxlMiIsInNwZWNzIiwidXBkYXRlIiwiI3VwZGF0ZSIsInNwZWNpZmllciIsInJlc291cmNlIiwic3BlY2lmaWVyMiIsInBrZyIsInNwbGl0Iiwic3RhcnRzV2l0aCIsInJlc291cmNlMiIsImltcG9ydGVkIiwiYmltcG9ydCIsIl9fYmV5b25kX3Ry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