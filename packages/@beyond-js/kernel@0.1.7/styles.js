System.register(["@beyond-js/kernel@0.1.7/bundle","@beyond-js/kernel@0.1.7/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.7"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.7/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.7/core', dep)],
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

// .beyond/uimport/@beyond-js/kernel/styles.0.1.7.js
var styles_0_1_7_exports = {};
__export(styles_0_1_7_exports, {
  DependenciesStyles: () => DependenciesStyles,
  V1Styles: () => V1Styles,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  styles: () => styles
});

// node_modules/@beyond-js/kernel/styles/styles.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.7/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.7/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.7/styles"
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
module.exports = __toCommonJS(styles_0_1_7_exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC9zdHlsZXMuMC4xLjcuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvc3R5bGVzL19fc291cmNlcy9zdHlsZXMvZGVwZW5kZW5jaWVzLXN0eWxlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9zdHlsZXMvX19zb3VyY2VzL3N0eWxlcy9sZWdhY3kudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvc3R5bGVzL19fc291cmNlcy9zdHlsZXMvcmVnaXN0cnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvc3R5bGVzL19fc291cmNlcy9zdHlsZXMvdjEudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJEZXBlbmRlbmNpZXNTdHlsZXMiLCJWMVN0eWxlcyIsIl9fYmV5b25kX3BrZyIsImhtciIsInN0eWxlcyIsIkRlcGVuZGVuY2llc1N0eWxlczIiLCJfY29yZSIsImVsZW1lbnRzIiwiY29uc3RydWN0b3IiLCJ2c3BlY2lmaWVyIiwiY2hhbmdlIiwidHJpZ2dlciIsIlNldCIsInJlY3Vyc2l2ZSIsInZzcGVjaWZpZXIyIiwiY29uc29sZSIsInRyYWNlIiwiX2J1bmRsZSIsImhhcyIsImVycm9yIiwiYnVuZGxlIiwiZ2V0IiwidHlwZSIsInN0eWxlczIiLCJfcmVnaXN0cnkiLCJlbmdpbmUiLCJhZGQiLCJvbiIsImRlcGVuZGVuY2llcyIsInBhY2thZ2UiLCJmb3JFYWNoIiwiZGVwZW5kZW5jeSIsInBrZyIsImV4cG9ydHMiLCJ2YWx1ZSIsImFwcGVuZGVkIiwibW9kdWxlMiIsIm1vZHVsZTMiLCJzcGxpdCIsInBvcCIsImpvaW4iLCJyZWdleHAiLCJyZXBsYWNlIiwibWF0Y2giLCJob3N0IiwicmVzb3VyY2UiLCJ3YXJuIiwiYXBwZW5kVG9ET00iLCJpcyIsInByZXZpb3VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQ2hpbGQiLCJjc3MiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInNldEF0dHJpYnV0ZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiUmVnaXN0cnkiLCJNYXAiLCJyZWdpc3RlciIsInN0eWxlczMiLCJfbGVnYWN5IiwiX3YiLCJzZXQiLCJnbG9iYWxUaGlzIiwiYmV5b25kTGVnYWN5U3R5bGVzIiwiVjFTdHlsZXMyIiwidmVyc2lvbiIsImhyZWYiLCJwcm9jZXNzIiwic3RhcnRzV2l0aCIsInNoaWZ0Iiwic3VicGF0aCIsInVyaSIsIlJlZ0V4cCIsInRlc3QiLCJvcmlnaW4iLCJwYXRobmFtZSIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInNsaWNlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7SUFDQTtJQUNBO0lBR2lCLE1BQ1hDLDRCQUEyQkMsYUFBTTtNQUMxQjtNQUNBO1VBQ0xDLFdBQVE7UUFDUixPQUFPO01BQ1g7TUFFQUMsWUFBWUMsWUFBa0I7UUFDMUIsT0FBSztRQUNMLG1CQUFtQkE7UUFFbkIsTUFBTUMsU0FBUyxNQUFNLEtBQUtDLFFBQVEsUUFBUTtRQUUxQyxpQkFBaUIsbUJBQUlDLEtBQUc7UUFDeEIsTUFBTUMsWUFBYUMsZUFBc0I7VUFDckMsSUFBSSxDQUFDQSxhQUFZO1lBQ2JDLFFBQVFDLE1BQU0sK0JBQStCO1lBQzdDOztVQUdKLElBQUksQ0FBQ0Msa0JBQVFDLElBQUlKLFdBQVUsR0FBRztZQUMxQkMsUUFBUUksTUFBTSxjQUFjTDt1RUFDZ0Q7WUFDNUU7O1VBRUosTUFBTU0sU0FBU0gsa0JBQVFJLElBQUlQLFdBQVU7VUFDckMsSUFBSUEsZ0JBQWUsb0JBQW9C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QUNMLGVBQWU1QixrQkFBUUksSUFBSXdCLFFBQVE7UUFFbkMsaUJBQWtCLE9BQUs7VUFDbkIsSUFBSSxPQUFPMEIsWUFBWSxVQUFVO1lBQzdCLE1BQU1qQyxRQUFRTyxTQUFTUCxNQUFNLEdBQUc7WUFDaEMsTUFBTU4sTUFBTU0sTUFBTSxHQUFHa0MsV0FBVyxHQUFHLElBQUksR0FBR2xDLE1BQU1tQyxPQUFLLElBQU1uQyxNQUFNbUMsT0FBSyxLQUFPbkMsTUFBTW1DLE9BQUs7WUFDeEYsTUFBTUMsVUFBVXBDLE1BQU1FLEtBQUssR0FBRztZQUM5QixPQUFPLE9BQU9SLFVBQVUwQzs7VUFHNUIsSUFBSTtZQUFDQztjQUFPO1VBS1osTUFBTWxDLFNBQVMsSUFBSW1DLE9BQU8sOEJBQThCLEdBQUc7VUFDM0QsSUFBSW5DLE9BQU9vQyxLQUFLRixHQUFHLEdBQUc7WUFDbEIsTUFBTTtjQUFDRztjQUFRQztjQUFVQztnQkFBZ0IsSUFBSUMsSUFBSU4sR0FBRztZQUNwRCxNQUFNTixVQUFVVyxhQUFhOUQsSUFBSSxTQUFTLElBQUksWUFBWThELGFBQWEzRCxJQUFJLFNBQVMsTUFBTTtZQUUxRixPQUFPeUQsU0FBU0MsV0FBVyxTQUFTVjs7VUFHeENNLE1BQU1BLElBQUlPLE1BQU0sR0FBR1AsSUFBSVEsU0FBUyxDQUFDO1VBQ2pDLE9BQU8sR0FBR1I7UUFDZCxJQUFDO01BQ0w7TUFLQWpFLFNBQU07UUFDRjtRQUNBLEtBQUtDLFFBQVEsUUFBUTtNQUN6Qjs7SUFDSHNCIiwiZmlsZSI6IiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJ0BiZXlvbmQtanMva2VybmVsL3N0eWxlcyc7IixudWxsLG51bGwsbnVsbCxudWxsXSwic291cmNlUm9vdCI6Ii9kb2NzL291dCJ9