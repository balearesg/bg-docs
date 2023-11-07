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

// .beyond/uimport/@beyond-js/kernel/styles.0.1.9.js
var styles_0_1_9_exports = {};
__export(styles_0_1_9_exports, {
  DependenciesStyles: () => DependenciesStyles,
  V1Styles: () => V1Styles,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  styles: () => styles
});
module.exports = __toCommonJS(styles_0_1_9_exports);

// node_modules/@beyond-js/kernel/styles/styles.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.9/styles"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./dependencies-styles", {
  hash: 282408023,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DependenciesStyles = void 0;
    var _bundle = require2("@beyond-js/kernel/bundle");
    var _core = require2("@beyond-js/kernel/core");
    var _registry = require2("./registry");
    class DependenciesStyles2 extends _core.Events {
      #vspecifier;
      #elements;
      get elements() {
        return this.#elements;
      }
      constructor(vspecifier) {
        super();
        this.#vspecifier = vspecifier;
        const change = () => this.trigger("change");
        this.#elements = /* @__PURE__ */new Set();
        const recursive = vspecifier2 => {
          if (!vspecifier2) {
            console.trace("Bundle vspecifier not defined");
            return;
          }
          if (!_bundle.instances.has(vspecifier2)) {
            console.error(`Bundle id "${vspecifier2}" not found. Try refreshing the page.
If the problem still persist, delete the BeyondJS cache and try again.`);
            return;
          }
          const bundle = _bundle.instances.get(vspecifier2);
          if (vspecifier2 !== this.#vspecifier && bundle.type === "widget") return;
          const styles2 = _registry.styles.get(vspecifier2);
          if (styles2 && styles2.engine !== "legacy") {
            this.#elements.add(styles2);
            styles2.on("change", change);
          }
          const {
            dependencies
          } = bundle.package();
          dependencies.forEach(dependency => {
            const pkg = dependency.__beyond_pkg;
            if (!pkg) return;
            recursive(pkg.vspecifier);
          });
        };
        recursive(this.#vspecifier);
      }
    }
    exports.DependenciesStyles = DependenciesStyles2;
  }
});
ims.set("./legacy", {
  hash: 859564821,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default {
      get engine() {
        return "legacy";
      }
      #bundle;
      #value;
      get value() {
        return this.#value;
      }
      #appended = false;
      get appended() {
        return this.#appended;
      }
      constructor(bundle, value) {
        this.#bundle = bundle;
        const module2 = (() => {
          const module3 = bundle.split("/");
          module3.pop();
          return module3.join("/");
        })();
        const regexp = /#host\.([\w\d]*)#([^.]*\.[\w\d]*)/g;
        this.#value = value.replace(regexp, (match, host, resource) => {
          if (host === "module" || host === "library") {
            return `${module2}/${resource}`;
          } else if (host === "application") {
            return resource;
          }
          console.warn(`Invalid css host specification on bundle "${bundle}"`, match);
        });
      }
      appendToDOM(is) {
        if (this.#appended) {
          const previous = document.querySelectorAll(`:scope > [bundle="${this.#bundle}"]`)[0];
          previous && document.removeChild(previous);
        }
        const css = document.createElement("style");
        css.appendChild(document.createTextNode(this.#value));
        is && css.setAttribute("is", is);
        document.getElementsByTagName("head")[0].appendChild(css);
        this.#appended = true;
      }
    }
    exports.default = _default;
  }
});
ims.set("./registry", {
  hash: 2402124624,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.styles = void 0;
    var _legacy = require2("./legacy");
    var _v = require2("./v1");
    class Registry {
      #registry = /* @__PURE__ */new Map();
      register(vspecifier, value) {
        if (this.#registry.has(vspecifier)) return;
        const styles3 = value ? new _legacy.default(vspecifier, value) : new _v.V1Styles(vspecifier);
        this.#registry.set(vspecifier, styles3);
        return styles3;
      }
      has(vspecifier) {
        return this.#registry.has(vspecifier);
      }
      get(vspecifier) {
        return this.#registry.get(vspecifier);
      }
    }
    const styles2 = new Registry();
    exports.styles = styles2;
    globalThis.beyondLegacyStyles = styles2;
  }
});
ims.set("./v1", {
  hash: 1891964101,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.V1Styles = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _bundle = require2("@beyond-js/kernel/bundle");
    class V1Styles2 extends _core.Events {
      get engine() {
        return "v1";
      }
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #version = 0;
      get version() {
        return this.#version;
      }
      #resource;
      get resource() {
        return this.#resource;
      }
      get href() {
        const version = this.#version ? `?version=${this.#version}` : "";
        return `${this.#resource}${version}`;
      }
      constructor(resource) {
        super();
        this.#bundle = _bundle.instances.get(resource);
        this.#resource = (() => {
          if (typeof process === "object") {
            const split = resource.split("/");
            const pkg = split[0].startsWith("@") ? `${split.shift()}/${split.shift()}` : split.shift();
            const subpath = split.join("/");
            return `##_!${pkg}!_##${subpath}.css`;
          }
          let {
            uri
          } = this.#bundle;
          const regexp = new RegExp("^https?://cdn.beyondjs.com", "i");
          if (regexp.test(uri)) {
            const {
              origin,
              pathname,
              searchParams
            } = new URL(uri);
            const version = searchParams.has("version") ? `&version=${searchParams.get("version")}` : "";
            return origin + pathname + "?css" + version;
          }
          uri = uri.slice(0, uri.length - 3);
          return `${uri}.css`;
        })();
      }
      change() {
        this.#version++;
        this.trigger("change");
      }
    }
    exports.V1Styles = V1Styles2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./dependencies-styles",
  "from": "DependenciesStyles",
  "name": "DependenciesStyles"
}, {
  "im": "./registry",
  "from": "styles",
  "name": "styles"
}, {
  "im": "./v1",
  "from": "V1Styles",
  "name": "V1Styles"
}];
var DependenciesStyles, styles, V1Styles;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "DependenciesStyles") && (DependenciesStyles = require2 ? require2("./dependencies-styles").DependenciesStyles : value);
  (require2 || prop === "styles") && (styles = require2 ? require2("./registry").styles : value);
  (require2 || prop === "V1Styles") && (V1Styles = require2 ? require2("./v1").V1Styles : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC9zdHlsZXMuMC4xLjkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvc3R5bGVzL19fc291cmNlcy9zdHlsZXMvZGVwZW5kZW5jaWVzLXN0eWxlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9zdHlsZXMvX19zb3VyY2VzL3N0eWxlcy9sZWdhY3kudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvc3R5bGVzL19fc291cmNlcy9zdHlsZXMvcmVnaXN0cnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvc3R5bGVzL19fc291cmNlcy9zdHlsZXMvdjEudHMiXSwibmFtZXMiOlsic3R5bGVzXzBfMV85X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkRlcGVuZGVuY2llc1N0eWxlcyIsIlYxU3R5bGVzIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwic3R5bGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9idW5kbGUiLCJyZXF1aXJlMiIsIl9jb3JlIiwiX3JlZ2lzdHJ5IiwiRGVwZW5kZW5jaWVzU3R5bGVzMiIsIkV2ZW50cyIsInZzcGVjaWZpZXIiLCJlbGVtZW50cyIsImNvbnN0cnVjdG9yIiwiY2hhbmdlIiwidHJpZ2dlciIsIlNldCIsInJlY3Vyc2l2ZSIsInZzcGVjaWZpZXIyIiwiY29uc29sZSIsInRyYWNlIiwiaW5zdGFuY2VzIiwiaGFzIiwiZXJyb3IiLCJidW5kbGUiLCJnZXQiLCJ0eXBlIiwic3R5bGVzMiIsImVuZ2luZSIsImFkZCIsIm9uIiwiZGVwZW5kZW5jaWVzIiwicGFja2FnZSIsImZvckVhY2giLCJkZXBlbmRlbmN5IiwicGtnIiwiX2RlZmF1bHQiLCJ2YWx1ZSIsImFwcGVuZGVkIiwibW9kdWxlMiIsIm1vZHVsZTMiLCJzcGxpdCIsInBvcCIsImpvaW4iLCJyZWdleHAiLCJyZXBsYWNlIiwibWF0Y2giLCJob3N0IiwicmVzb3VyY2UiLCJ3YXJuIiwiYXBwZW5kVG9ET00iLCJpcyIsInByZXZpb3VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQ2hpbGQiLCJjc3MiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInNldEF0dHJpYnV0ZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZGVmYXVsdCIsIl9sZWdhY3kiLCJfdiIsIlJlZ2lzdHJ5IiwicmVnaXN0cnkiLCJNYXAiLCJyZWdpc3RlciIsInN0eWxlczMiLCJzZXQiLCJnbG9iYWxUaGlzIiwiYmV5b25kTGVnYWN5U3R5bGVzIiwiVjFTdHlsZXMyIiwidmVyc2lvbiIsImhyZWYiLCJwcm9jZXNzIiwic3RhcnRzV2l0aCIsInNoaWZ0Iiwic3VicGF0aCIsInVyaSIsIlJlZ0V4cCIsInRlc3QiLCJvcmlnaW4iLCJwYXRobmFtZSIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInNsaWNlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBQTtBQUFBQyxRQUFBLENBQUFELG9CQUFBO0VBQUFFLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVQsb0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBLElBQUFVLE9BQUEsR0FBQUMsUUFBQTtJQUNBLElBQUFDLEtBQUEsR0FBQUQsUUFBQTtJQUNBLElBQUFFLFNBQUEsR0FBQUYsUUFBQTtJQUdpQixN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