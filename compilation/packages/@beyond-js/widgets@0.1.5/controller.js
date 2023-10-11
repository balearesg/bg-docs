System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@0.1.5/render","@beyond-js/kernel@0.1.9/styles"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","0.1.5"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.5/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep)],
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

// .beyond/uimport/@beyond-js/widgets/controller.0.1.5.js
var controller_0_1_5_exports = {};
__export(controller_0_1_5_exports, {
  IWidgetRendered: () => IWidgetRendered,
  IWidgetStore: () => IWidgetStore,
  WidgetAttributes: () => WidgetAttributes,
  WidgetClientController: () => WidgetClientController,
  WidgetControllerBase: () => WidgetControllerBase,
  WidgetServerController: () => WidgetServerController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(controller_0_1_5_exports);

// node_modules/@beyond-js/widgets/controller/controller.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@0.1.5/render"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.5/controller"
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
  hash: 2102509577,
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
          throw new Error(`The return value of the Widget property is undefined. "${this.#widget.localName}" widget`);
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
  hash: 3835813087,
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
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvY29udHJvbGxlci4wLjEuNS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvY29udHJvbGxlci9fX3NvdXJjZXMvY29udHJvbGxlci9hdHRyaWJ1dGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL2NsaWVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvY29udHJvbGxlci9fX3NvdXJjZXMvY29udHJvbGxlci9jb250cm9sbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL3Nzci50cyJdLCJuYW1lcyI6WyJjb250cm9sbGVyXzBfMV81X2V4cG9ydHMiLCJfX2V4cG9ydCIsIklXaWRnZXRSZW5kZXJlZCIsIklXaWRnZXRTdG9yZSIsIldpZGdldEF0dHJpYnV0ZXMiLCJXaWRnZXRDbGllbnRDb250cm9sbGVyIiwiV2lkZ2V0Q29udHJvbGxlckJhc2UiLCJXaWRnZXRTZXJ2ZXJDb250cm9sbGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9jb3JlIiwicmVxdWlyZTIiLCJXaWRnZXRBdHRyaWJ1dGVzMiIsIk1hcCIsIndpZGdldCIsImV2ZW50cyIsIkV2ZW50cyIsIm9uIiwiZXZlbnQiLCJsaXN0ZW5lciIsIm9mZiIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJzcGVjcyIsImZvckVhY2giLCJhdHRyIiwic2V0IiwiZ2V0QXR0cmlidXRlIiwiY2hhbmdlIiwibmFtZSIsIm9sZCIsInZhbHVlIiwidHJpZ2dlciIsIl9jb250cm9sbGVyIiwiX2F0dHJpYnV0ZXMiLCJfYnVuZGxlIiwiX3N0eWxlcyIsIldpZGdldENsaWVudENvbnRyb2xsZXIyIiwic3RvcmUiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlQ2hhbmdlZCIsInN0eWxlcyIsIkRlcGVuZGVuY2llc1N0eWxlcyIsInZzcGVjaWZpZXIiLCJsaW5rcyIsImVsZW1lbnRzIiwibWFwIiwic3R5bGUiLCJocmVmIiwiaW5pdGlhbGlzZWQiLCJpbml0aWFsaXNlIiwidXBkYXRlIiwicmVuZGVyIiwibW91bnQiLCJleGMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxOYW1lIiwic3RhY2siLCJyZWZyZXNoIiwidW5tb3VudCIsIiNyZWZyZXNoIiwiZGlzY29ubmVjdCIsIldpZGdldCIsIkVycm9yIiwiY3JlYXRlU3RvcmUiLCJwcmVyZW5kZXIiLCJzc3IiLCJjYWNoZWQiLCJoeWRyYXRlIiwiZmV0Y2giLCJpbnN0YW5jZXMiLCJoYXMiLCJwa2ciLCJnZXQiLCJwYWNrYWdlIiwiX3JlbmRlciIsIldpZGdldENvbnRyb2xsZXJCYXNlMiIsImVsZW1lbnQiLCJpcyIsInJvdXRlIiwibGF5b3V0IiwibGFuZ3VhZ2UiLCJ3aWRnZXRzIiwic3BsaXQiLCJzY29wZSIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsIldpZGdldFNlcnZlckNvbnRyb2xsZXIyIiwicGFyYW1zIiwicHVzaCIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHdCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsd0JBQUE7RUFBQUUsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxzQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHNCQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsc0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxzQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBWix3QkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxJQUFBYSxLQUFBLEdBQUFDLFFBQUE7SUFFaUIsTUFDWEMsaUJBQUEsU0FBeUJDLEdBQUEsQ0FBRztNQUU5QixDQUFBQyxNQUFBO01BRUEsQ0FBQUMsTUFBQSxHQUFVLElBQUlMLEtBQUEsQ0FBQU0sTUFBQSxDQUFNO01BQ3BCQyxFQUFBLEdBQUtBLENBQUNDLEtBQUEsRUFBZUMsUUFBQSxLQUFrQixLQUFLLENBQUFKLE1BQUEsQ0FBUUUsRUFBQSxDQUFHQyxLQUFBLEVBQU9DLFFBQVE7TUFDdEVDLEdBQUEsR0FBTUEsQ0FBQ0YsS0FBQSxFQUFlQyxRQUFBLEtBQWtCLEtBQUssQ0FBQUosTUFBQSxDQUFRSyxHQUFBLENBQUlGLEtBQUEsRUFBT0MsUUFBUTtNQUV4RUUsWUFBWVAsTUFBQSxFQUFtQjtRQUMzQixNQUFLO1FBQ0wsS0FBSyxDQUFBQSxNQUFBLEdBQVVBLE1BQUE7UUFFZixJQUFJUSxLQUFBLEdBQXdCUixNQUFBLENBQVFTLEtBQUEsQ0FBTUQsS0FBQTtRQUMxQ0EsS0FBQSxFQUFPRSxPQUFBLENBQVFDLElBQUEsSUFBUSxLQUFLQyxHQUFBLENBQUlELElBQUEsRUFBTVgsTUFBQSxDQUFPYSxZQUFBLENBQWFGLElBQUksQ0FBQyxDQUFDO01BQ3BFO01BRUFHLE9BQU9DLElBQUEsRUFBY0MsR0FBQSxFQUFhQyxLQUFBLEVBQWE7UUFDM0MsS0FBS0wsR0FBQSxDQUFJRyxJQUFBLEVBQU1FLEtBQUs7UUFDcEIsS0FBSyxDQUFBaEIsTUFBQSxDQUFRaUIsT0FBQSxDQUFRLFFBQVE7UUFDN0IsS0FBSyxDQUFBakIsTUFBQSxDQUFRaUIsT0FBQSxDQUFRLEdBQUdILElBQUEsV0FBZUUsS0FBSztNQUNoRDs7SUFDSHZCLE9BQUEsQ0FBQVAsZ0JBQUEsR0FBQVcsaUJBQUE7Ozs7Ozs7Ozs7OztJQ3hCRCxJQUFBcUIsV0FBQSxHQUFBdEIsUUFBQTtJQUNBLElBQUF1QixXQUFBLEdBQUF2QixRQUFBO0lBQ0EsSUFBQXdCLE9BQUEsR0FBQXhCLFFBQUE7SUFFQSxJQUFBeUIsT0FBQSxHQUFBekIsUUFBQTtJQUtpQixNQUNGMEIsdUJBQUEsU0FBK0JKLFdBQUEsQ0FBQTlCLG9CQUFBLENBQW9CO01BUXJELENBQUFXLE1BQUE7TUFDVCxJQUFJQSxPQUFBLEVBQU07UUFDTixPQUFPLEtBQUssQ0FBQUEsTUFBQTtNQUNoQjtNQUVBLENBQUF3QixLQUFBO01BQ0EsSUFBSUEsTUFBQSxFQUFLO1FBQ0wsT0FBTyxLQUFLLENBQUFBLEtBQUE7TUFDaEI7TUFFUyxDQUFBQyxVQUFBO01BQ1QsSUFBSUEsV0FBQSxFQUFVO1FBQ1YsT0FBTyxLQUFLLENBQUFBLFVBQUE7TUFDaEI7TUFFQUMsaUJBQWlCWCxJQUFBLEVBQWNDLEdBQUEsRUFBYUMsS0FBQSxFQUFhO1FBQ3JELEtBQUssQ0FBQVEsVUFBQSxDQUFZWCxNQUFBLENBQU9DLElBQUEsRUFBTUMsR0FBQSxFQUFLQyxLQUFLO01BQzVDO01BRUEsSUFBSVUsT0FBQSxFQUFNO1FBQ04sTUFBTUEsTUFBQSxHQUE4QixLQUFLLENBQUEzQixNQUFBLENBQVMyQixNQUFBO1FBQ2xELE9BQU9BLE1BQUE7TUFDWDtNQUVBcEIsWUFBc0JQLE1BQUEsRUFBbUI7UUFDckMsTUFBTTtVQUFDQTtRQUFNLENBQUM7UUFDZCxLQUFLLENBQUFBLE1BQUEsR0FBVUEsTUFBQTtRQUNmLEtBQUssQ0FBQXlCLFVBQUEsR0FBYyxJQUFJTCxXQUFBLENBQUFqQyxnQkFBQSxDQUFpQmEsTUFBTTtRQUU5QyxNQUFNMkIsTUFBQSxHQUFTLElBQUlMLE9BQUEsQ0FBQU0sa0JBQUEsQ0FBbUIsS0FBS25CLEtBQUEsQ0FBTW9CLFVBQVU7UUFDM0QsTUFBTUMsS0FBQSxHQUFRQSxDQUFBLEtBQU0sQ0FBQyxHQUFHSCxNQUFBLENBQU9JLFFBQVEsRUFBRUMsR0FBQSxDQUFJQyxLQUFBLElBQVNBLEtBQUEsQ0FBTUMsSUFBSTtRQUVoRSxDQUFDLEtBQUtQLE1BQUEsQ0FBT1EsV0FBQSxJQUFlLEtBQUtSLE1BQUEsQ0FBT1MsVUFBQSxDQUFXTixLQUFBLENBQUssQ0FBRTtRQUMxREgsTUFBQSxDQUFPeEIsRUFBQSxDQUFHLFVBQVUsTUFBTSxLQUFLd0IsTUFBQSxDQUFPVSxNQUFBLENBQU9QLEtBQUEsQ0FBSyxDQUFFLENBQUM7TUFDekQ7TUFNQVEsT0FBQSxFQUFNO1FBQ0YsSUFBSTtVQUNBLEtBQUtDLEtBQUEsQ0FBSztpQkFDTEMsR0FBQSxFQUFQO1VBQ0VDLE9BQUEsQ0FBUUMsR0FBQSxDQUFJLHFDQUFxQyxLQUFLLENBQUExQyxNQUFBLENBQVEyQyxTQUFBLElBQWE7VUFDM0VGLE9BQUEsQ0FBUUMsR0FBQSxDQUFJRixHQUFBLENBQUlJLEtBQUs7O01BRTdCO01BRUFDLFFBQUEsRUFBTztRQUNILEtBQUtDLE9BQUEsQ0FBTztRQUNaLEtBQUtSLE1BQUEsQ0FBTTtNQUNmO01BRUEsQ0FBQU8sT0FBQSxHQUFXRSxDQUFBLEtBQU0sS0FBS0YsT0FBQSxDQUFPO01BSzdCRyxXQUFBLEVBQVU7UUFDTixLQUFLRixPQUFBLENBQU87TUFDaEI7TUFFQSxNQUFNVixXQUFBLEVBQVU7UUFDWixJQUFJLENBQUMsS0FBS2EsTUFBQSxFQUFRO1VBQ2QsTUFBTSxJQUFJQyxLQUFBLENBQU0sMERBQTBELEtBQUssQ0FBQWxELE1BQUEsQ0FBUTJDLFNBQUEsVUFBbUI7O1FBRzlHLEtBQUssQ0FBQW5CLEtBQUEsR0FBUyxLQUFLMkIsV0FBQSxHQUFhO1FBR2hDLE1BQU1DLFNBQUEsR0FBdUIsS0FBSyxDQUFBcEQsTUFBQSxDQUFTcUQsR0FBQSxDQUFJRCxTQUFBO1FBQy9DLElBQUlBLFNBQUEsRUFBVztVQUNYLE1BQU1FLE1BQUEsR0FBU0YsU0FBQSxFQUFXNUIsS0FBQTtVQUMxQixNQUFNLEtBQUssQ0FBQUEsS0FBQSxFQUFRK0IsT0FBQSxDQUFRRCxNQUFNOztRQUdyQyxLQUFLLENBQUE5QixLQUFBLEVBQVFnQyxLQUFBLEdBQU87UUFFcEIsS0FBS2xCLE1BQUEsQ0FBTTtRQUdYLElBQUksQ0FBQ2pCLE9BQUEsQ0FBQW9DLFNBQUEsQ0FBUUMsR0FBQSxDQUFJLEtBQUtqRCxLQUFBLENBQU1vQixVQUFVLEdBQUc7VUFDckNZLE9BQUEsQ0FBUUMsR0FBQSxDQUFJLGNBQWMsS0FBS2pDLEtBQUEsQ0FBTW9CLFVBQUE7dUVBQ3VDO1VBQzVFOztRQUVKLE1BQU04QixHQUFBLEdBQU10QyxPQUFBLENBQUFvQyxTQUFBLENBQVFHLEdBQUEsQ0FBSSxLQUFLbkQsS0FBQSxDQUFNb0IsVUFBVSxFQUFFZ0MsT0FBQSxDQUFPO1FBQ3RERixHQUFBLENBQUluRSxHQUFBLENBQUlXLEVBQUEsQ0FBRyxVQUFVLEtBQUssQ0FBQTBDLE9BQVE7TUFDdEM7O0lBQ0huRCxPQUFBLENBQUFOLHNCQUFBLEdBQUFtQyx1QkFBQTs7Ozs7Ozs7Ozs7O0lDNUdELElBQUF1QyxPQUFBLEdBQUFqRSxRQUFBO0lBV2lCLE1BQ0ZrRSxxQkFBQSxDQUFvQjtNQUN6QixDQUFBdEQsS0FBQTtNQUNULElBQUlBLE1BQUEsRUFBSztRQUNSLE9BQU8sS0FBSyxDQUFBQSxLQUFBO01BQ2I7TUFFQSxJQUFJdUQsUUFBQSxFQUFPO1FBQ1YsT0FBTyxLQUFLLENBQUF2RCxLQUFBLENBQU9NLElBQUE7TUFDcEI7TUFFQSxJQUFJa0QsR0FBQSxFQUFFO1FBQ0wsT0FBTyxLQUFLLENBQUF4RCxLQUFBLENBQU93RCxFQUFBO01BQ3BCO01BRUEsSUFBSUMsTUFBQSxFQUFLO1FBQ1IsT0FBTyxLQUFLLENBQUF6RCxLQUFBLENBQU95RCxLQUFBO01BQ3BCO01BRUEsSUFBSUMsT0FBQSxFQUFNO1FBQ1QsT0FBTyxLQUFLLENBQUExRCxLQUFBLENBQU8wRCxNQUFBO01BQ3BCO01BRVMsQ0FBQVIsR0FBQTtNQUNULElBQUlBLElBQUEsRUFBRztRQUNOLE9BQU8sS0FBSyxDQUFBQSxHQUFBO01BQ2I7TUFJQSxJQUFJVixPQUFBLEVBQU07UUFDVDtNQUNEO01BRUFFLFlBQVlpQixRQUFBLEVBQWlCO1FBQzVCLE9BQU87TUFDUjtNQVVBN0QsWUFBc0I7UUFBRUUsS0FBQTtRQUFPVDtNQUFNLEdBQWtEO1FBQ3RGLElBQUksQ0FBQ1MsS0FBQSxFQUFPO1VBQ1gsTUFBTTtZQUFFa0M7VUFBUyxJQUFLM0MsTUFBQTtVQUN0QixJQUFJLENBQUM4RCxPQUFBLENBQUFPLE9BQUEsQ0FBUVgsR0FBQSxDQUFJZixTQUFTLEdBQUcsTUFBTSxJQUFJTyxLQUFBLENBQU0sZ0JBQWdCUCxTQUFBLHFCQUE4QjtVQUMzRmxDLEtBQUEsR0FBUXFELE9BQUEsQ0FBQU8sT0FBQSxDQUFRVCxHQUFBLENBQUlqQixTQUFTOztRQUc5QixLQUFLLENBQUFnQixHQUFBLElBQVEsTUFBSztVQUNqQixNQUFNVyxLQUFBLEdBQVE3RCxLQUFBLENBQU1vQixVQUFBLENBQVd5QyxLQUFBLENBQU0sR0FBRztVQUN4QyxNQUFNQyxLQUFBLEdBQVFELEtBQUEsQ0FBTSxHQUFHRSxVQUFBLENBQVcsR0FBRyxJQUFJRixLQUFBLENBQU1HLEtBQUEsQ0FBSyxJQUFLO1VBQ3pELE1BQU0sQ0FBQzFELElBQUksSUFBSXVELEtBQUEsQ0FBTUcsS0FBQSxDQUFLLEVBQUdILEtBQUEsQ0FBTSxHQUFHO1VBQ3RDLE9BQU9DLEtBQUEsR0FBUSxHQUFHQSxLQUFBLElBQVN4RCxJQUFBLEtBQVNBLElBQUE7UUFDckMsR0FBRTtRQUVGLEtBQUssQ0FBQU4sS0FBQSxHQUFTQSxLQUFBO01BQ2Y7O0lBQ0FmLE9BQUEsQ0FBQUwsb0JBQUEsR0FBQTBFLHFCQUFBOzs7Ozs7Ozs7Ozs7SUN6RUQsSUFBQTVDLFdBQUEsR0FBQXRCLFFBQUE7SUFDQSxJQUFBeUIsT0FBQSxHQUFBekIsUUFBQTtJQWdCaUIsTUFDRjZFLHVCQUFBLFNBQStCdkQsV0FBQSxDQUFBOUIsb0JBQUEsQ0FBb0I7TUFDckQsQ0FBQXNDLE1BQUEsR0FBb0I7TUFDN0IsSUFBSUEsT0FBQSxFQUFNO1FBQ04sT0FBTyxLQUFLLENBQUFBLE1BQUE7TUFDaEI7TUFFQXBCLFlBQXNCb0UsTUFBQSxFQUFzRDtRQUN4RSxNQUFNQSxNQUFNO1FBQ1osTUFBTWhELE1BQUEsR0FBUyxJQUFJTCxPQUFBLENBQUFNLGtCQUFBLENBQW1CLEtBQUtuQixLQUFBLENBQU1vQixVQUFVO1FBQzNERixNQUFBLENBQU9JLFFBQUEsQ0FBU3JCLE9BQUEsQ0FBUSxDQUFDO1VBQUN3QjtRQUFJLE1BQXdCLEtBQUssQ0FBQVAsTUFBQSxDQUFRaUQsSUFBQSxDQUFLMUMsSUFBSSxDQUFDO1FBRTdFLEtBQUssQ0FBQVAsTUFBQSxDQUFRa0QsT0FBQSxDQUFRLE9BQU8sS0FBS2xCLEdBQUEsZ0JBQW1CO01BQ3hEOztJQUdIakUsT0FBQSxDQUFBSixzQkFBQSxHQUFBb0YsdUJBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9