System.register(["@beyond-js/kernel@0.1.7/bundle","@beyond-js/kernel@0.1.7/core","@beyond-js/widgets@0.1.2/render","@beyond-js/kernel@0.1.7/styles"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.7"],["@beyond-js/widgets","0.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.7/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.7/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.2/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.7/styles', dep)],
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

// .beyond/uimport/@beyond-js/widgets/controller.0.1.2.js
var controller_0_1_2_exports = {};
__export(controller_0_1_2_exports, {
  IWidgetRendered: () => IWidgetRendered,
  IWidgetStore: () => IWidgetStore,
  WidgetAttributes: () => WidgetAttributes,
  WidgetClientController: () => WidgetClientController,
  WidgetControllerBase: () => WidgetControllerBase,
  WidgetServerController: () => WidgetServerController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});

// node_modules/@beyond-js/widgets/controller/controller.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.7/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.7/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@0.1.2/render"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.7/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.2/controller"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1], ["@beyond-js/widgets/render", dependency_2], ["@beyond-js/kernel/styles", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./attributes", {
  hash: 3176328789,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetAttributes = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class WidgetAttributes2 extends Map {
      #widget;
      #events = new _core.Events();
      on = (event, listener) => this.#events.on(event, listener);
      off = (event, listener) => this.#events.off(event, listener);
      constructor(widget) {
        super();
        this.#widget = widget;
        let attrs = widget.specs.attrs;
        attrs?.forEach(attr => this.set(attr, widget.getAttribute(attr)));
      }
      change(name, old, value) {
        this.set(name, value);
        this.#events.trigger("change");
        this.#events.trigger(`${name}:change`, value);
      }
    }
    exports.WidgetAttributes = WidgetAttributes2;
  }
});
ims.set("./client", {
  hash: 97446879,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetClientController = void 0;
    var _controller = require2("./controller");
    var _attributes = require2("./attributes");
    var _bundle = require2("@beyond-js/kernel/bundle");
    var _styles = require2("@beyond-js/kernel/styles");
    class WidgetClientController2 extends _controller.WidgetControllerBase {
      #widget;
      get widget() {
        return this.#widget;
      }
      #store;
      get store() {
        return this.#store;
      }
      #attributes;
      get attributes() {
        return this.#attributes;
      }
      attributeChanged(name, old, value) {
        this.#attributes.change(name, old, value);
      }
      get styles() {
        const styles = this.#widget.styles;
        return styles;
      }
      constructor(widget) {
        super({
          widget
        });
        this.#widget = widget;
        this.#attributes = new _attributes.WidgetAttributes(widget);
        const styles = new _styles.DependenciesStyles(this.specs.vspecifier);
        const links = () => [...styles.elements].map(style => style.href);
        !this.styles.initialised && this.styles.initialise(links());
        styles.on("change", () => this.styles.update(links()));
      }
      render() {
        try {
          this.mount();
        } catch (exc) {
          console.log(`Error mounting widget controller "${this.#widget.localName}":`);
          console.log(exc.stack);
        }
      }
      refresh() {
        this.unmount();
        this.render();
      }
      #refresh = () => this.refresh();
      disconnect() {
        this.unmount();
      }
      async initialise() {
        if (!this.Widget) {
          throw new Error(`Widget "${this.#widget.localName}" does not expose a Widget property`);
        }
        this.#store = this.createStore?.();
        const prerender = this.#widget.ssr.prerender;
        if (prerender) {
          const cached = prerender?.store;
          await this.#store?.hydrate(cached);
        }
        this.#store?.fetch?.();
        this.render();
        if (!_bundle.instances.has(this.specs.vspecifier)) {
          console.log(`Bundle id "${this.specs.vspecifier}" not found. Try refreshing the page.
If the problem still persist, delete the BeyondJS cache and try again.`);
          return;
        }
        const pkg = _bundle.instances.get(this.specs.vspecifier).package();
        pkg.hmr.on("change", this.#refresh);
      }
    }
    exports.WidgetClientController = WidgetClientController2;
  }
});
ims.set("./controller", {
  hash: 4127212824,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetControllerBase = void 0;
    var _render = require2("@beyond-js/widgets/render");
    class WidgetControllerBase2 {
      #specs;
      get specs() {
        return this.#specs;
      }
      get element() {
        return this.#specs.name;
      }
      get is() {
        return this.#specs.is;
      }
      get route() {
        return this.#specs.route;
      }
      get layout() {
        return this.#specs.layout;
      }
      #pkg;
      get pkg() {
        return this.#pkg;
      }
      get Widget() {
        return;
      }
      createStore(language) {
        return void 0;
      }
      constructor({
        specs,
        widget
      }) {
        if (!specs) {
          const {
            localName
          } = widget;
          if (!_render.widgets.has(localName)) throw new Error(`Widget name "${localName}" is not registered`);
          specs = _render.widgets.get(localName);
        }
        this.#pkg = (() => {
          const split = specs.vspecifier.split("/");
          const scope = split[0].startsWith("@") ? split.shift() : void 0;
          const [name] = split.shift().split("@");
          return scope ? `${scope}/${name}` : name;
        })();
        this.#specs = specs;
      }
    }
    exports.WidgetControllerBase = WidgetControllerBase2;
  }
});
ims.set("./ssr", {
  hash: 1515978368,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetServerController = void 0;
    var _controller = require2("./controller");
    var _styles = require2("@beyond-js/kernel/styles");
    class WidgetServerController2 extends _controller.WidgetControllerBase {
      #styles = [];
      get styles() {
        return this.#styles;
      }
      constructor(params) {
        super(params);
        const styles = new _styles.DependenciesStyles(this.specs.vspecifier);
        styles.elements.forEach(({
          href
        }) => this.#styles.push(href));
        this.#styles.unshift(`##_!${this.pkg}!_##global.css`);
      }
    }
    exports.WidgetServerController = WidgetServerController2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./attributes",
  "from": "WidgetAttributes",
  "name": "WidgetAttributes"
}, {
  "im": "./client",
  "from": "WidgetClientController",
  "name": "WidgetClientController"
}, {
  "im": "./controller",
  "from": "IWidgetStore",
  "name": "IWidgetStore"
}, {
  "im": "./controller",
  "from": "WidgetControllerBase",
  "name": "WidgetControllerBase"
}, {
  "im": "./ssr",
  "from": "IWidgetRendered",
  "name": "IWidgetRendered"
}, {
  "im": "./ssr",
  "from": "WidgetServerController",
  "name": "WidgetServerController"
}];
var WidgetAttributes, WidgetClientController, IWidgetStore, WidgetControllerBase, IWidgetRendered, WidgetServerController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "WidgetAttributes") && (WidgetAttributes = require2 ? require2("./attributes").WidgetAttributes : value);
  (require2 || prop === "WidgetClientController") && (WidgetClientController = require2 ? require2("./client").WidgetClientController : value);
  (require2 || prop === "IWidgetStore") && (IWidgetStore = require2 ? require2("./controller").IWidgetStore : value);
  (require2 || prop === "WidgetControllerBase") && (WidgetControllerBase = require2 ? require2("./controller").WidgetControllerBase : value);
  (require2 || prop === "IWidgetRendered") && (IWidgetRendered = require2 ? require2("./ssr").IWidgetRendered : value);
  (require2 || prop === "WidgetServerController") && (WidgetServerController = require2 ? require2("./ssr").WidgetServerController : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
module.exports = __toCommonJS(controller_0_1_2_exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvY29udHJvbGxlci4wLjEuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvY29udHJvbGxlci9fX3NvdXJjZXMvY29udHJvbGxlci9hdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL2NsaWVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvY29udHJvbGxlci9fX3NvdXJjZXMvY29udHJvbGxlci9jb250cm9sbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL3Nzci50cyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIklXaWRnZXRSZW5kZXJlZCIsIklXaWRnZXRTdG9yZSIsIldpZGdldEF0dHJpYnV0ZXMiLCJXaWRnZXRDbGllbnRDb250cm9sbGVyIiwiV2lkZ2V0Q29udHJvbGxlckJhc2UiLCJXaWRnZXRTZXJ2ZXJDb250cm9sbGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwiV2lkZ2V0QXR0cmlidXRlczIiLCJNYXAiLCJfY29yZSIsIm9uIiwiZXZlbnQiLCJsaXN0ZW5lciIsIm9mZiIsImNvbnN0cnVjdG9yIiwid2lkZ2V0IiwiYXR0cnMiLCJzcGVjcyIsImZvckVhY2giLCJhdHRyIiwic2V0IiwiZ2V0QXR0cmlidXRlIiwiY2hhbmdlIiwibmFtZSIsIm9sZCIsInZhbHVlIiwidHJpZ2dlciIsImV4cG9ydHMiLCJXaWRnZXRDbGllbnRDb250cm9sbGVyMiIsIl9jb250cm9sbGVyIiwic3RvcmUiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlQ2hhbmdlZCIsInN0eWxlcyIsIl9hdHRyaWJ1dGVzIiwiX3N0eWxlcyIsInZzcGVjaWZpZXIiLCJsaW5rcyIsImVsZW1lbnRzIiwibWFwIiwic3R5bGUiLCJocmVmIiwiaW5pdGlhbGlzZWQiLCJpbml0aWFsaXNlIiwidXBkYXRlIiwicmVuZGVyIiwibW91bnQiLCJleGMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxOYW1lIiwic3RhY2siLCJyZWZyZXNoIiwidW5tb3VudCIsImRpc2Nvbm5lY3QiLCJXaWRnZXQiLCJFcnJvciIsImNyZWF0ZVN0b3JlIiwicHJlcmVuZGVyIiwic3NyIiwiY2FjaGVkIiwiaHlkcmF0ZSIsImZldGNoIiwiX2J1bmRsZSIsImhhcyIsInBrZyIsImdldCIsInBhY2thZ2UiLCJXaWRnZXRDb250cm9sbGVyQmFzZTIiLCJlbGVtZW50IiwiaXMiLCJyb3V0ZSIsImxheW91dCIsImxhbmd1YWdlIiwiX3JlbmRlciIsInNwbGl0Iiwic2NvcGUiLCJzdGFydHNXaXRoIiwic2hpZnQiLCJXaWRnZXRTZXJ2ZXJDb250cm9sbGVyMiIsInBhcmFtcyIsInB1c2giLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQTtJQUVpQixNQUNYQywwQkFBeUJDLElBQUc7TUFFOUI7TUFFQSxVQUFVLElBQUlDLGNBQU07TUFDcEJDLEtBQUssQ0FBQ0MsT0FBZUMsYUFBa0IsYUFBYUYsR0FBR0MsT0FBT0MsUUFBUTtNQUN0RUMsTUFBTSxDQUFDRixPQUFlQyxhQUFrQixhQUFhQyxJQUFJRixPQUFPQyxRQUFRO01BRXhFRSxZQUFZQyxRQUFtQjtRQUMzQixPQUFLO1FBQ0wsZUFBZUE7UUFFZixJQUFJQyxRQUF3QkQsT0FBUUUsTUFBTUQ7UUFDMUNBLE9BQU9FLFFBQVFDLFFBQVEsS0FBS0MsSUFBSUQsTUFBTUosT0FBT00sYUFBYUYsSUFBSSxDQUFDLENB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LENBQUMyRCxnQkFBUVYsSUFBSWQsU0FBUyxHQUFHLE1BQU0sSUFBSU0sTUFBTSxnQkFBZ0JOLDhCQUE4QjtVQUMzRmpDLFFBQVF5RCxnQkFBUVIsSUFBSWhCLFNBQVM7O1FBR2pDLFlBQWEsT0FBSztVQUNkLE1BQU15QixRQUFRMUQsTUFBTW1CLFdBQVd1QyxNQUFNLEdBQUc7VUFDeEMsTUFBTUMsUUFBUUQsTUFBTSxHQUFHRSxXQUFXLEdBQUcsSUFBSUYsTUFBTUcsT0FBSyxHQUFLO1VBQ3pELE1BQU0sQ0FBQ3ZELFFBQVFvRCxNQUFNRyxPQUFLLENBQUdILE1BQU0sR0FBRztVQUN0QyxPQUFPQyxRQUFRLEdBQUdBLFNBQVNyRCxTQUFTQTtRQUN4QyxJQUFDO1FBRUQsY0FBY047TUFDbEI7O0lBQ0hVOzs7Ozs7Ozs7Ozs7SUN6RUQ7SUFDQTtJQWdCaUIsTUFDRm9ELGdDQUErQmxELGlDQUFvQjtNQUNyRCxVQUFvQjtVQUN6QkksU0FBTTtRQUNOLE9BQU87TUFDWDtNQUVBbkIsWUFBc0JrRSxRQUFzRDtRQUN4RSxNQUFNQSxNQUFNO1FBQ1osTUFBTS9DLFNBQVMsSUFBSUUsMkJBQW1CLEtBQUtsQixNQUFNbUIsVUFBVTtRQUMzREgsT0FBT0ssU0FBU3BCLFFBQVEsQ0FBQztVQUFDdUI7Y0FBNEIsYUFBYXdDLEtBQUt4QyxJQUFJLENBQUM7UUFFN0UsYUFBYXlDLFFBQVEsT0FBTyxLQUFLakIsbUJBQW1CO01BQ3hEOztJQUdIdEMiLCJmaWxlIjoiIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnQGJleW9uZC1qcy93aWRnZXRzL2NvbnRyb2xsZXInOyIsbnVsbCxudWxsLG51bGwsbnVsbF0sInNvdXJjZVJvb3QiOiIvZG9jcy9vdXQifQ==