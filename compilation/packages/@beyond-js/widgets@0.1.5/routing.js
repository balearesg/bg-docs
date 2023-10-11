System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@0.1.5/render","@beyond-js/kernel@0.1.9/routing"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","0.1.5"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.5/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep)],
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

// .beyond/uimport/@beyond-js/widgets/routing.0.1.5.js
var routing_0_1_5_exports = {};
__export(routing_0_1_5_exports, {
  Layout: () => Layout,
  PageInstance: () => PageInstance,
  PageURI: () => PageURI,
  Route: () => Route,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  manager: () => manager
});
module.exports = __toCommonJS(routing_0_1_5_exports);

// node_modules/@beyond-js/widgets/routing/routing.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@0.1.5/render"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.9/routing"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.5/routing"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1], ["@beyond-js/widgets/render", dependency_2], ["@beyond-js/kernel/routing", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./layouts/index", {
  hash: 2940970575,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default extends Map {
      register(layout) {
        this.set(layout.id, layout);
      }
    }
    exports.default = _default;
  }
});
ims.set("./layouts/layout", {
  hash: 2602064878,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Layout = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class Layout2 extends _core.Events {
      get is() {
        return "layout";
      }
      #layouts;
      #element;
      get element() {
        return this.#element;
      }
      get id() {
        return this.#element;
      }
      #active;
      get active() {
        return this.#active;
      }
      #parent;
      #children = /* @__PURE__ */new Map();
      get children() {
        return this.#children;
      }
      constructor(layouts, element, parent) {
        super();
        this.#layouts = layouts;
        this.#element = element ? element : "main";
        this.#parent = parent;
      }
      select(page, descending) {
        if (descending.length && descending[0].name === this.#element) {
          console.log(`Invalid layout configuration. Layout element "${this.#element}" is already created`);
          return;
        }
        const child = (() => {
          if (!descending.length) return page;
          const {
            name: element
          } = descending[0];
          const found = [...this.#children.values()].find(child2 => child2.element === element);
          if (found) return found;
          const layout = new Layout2(this.#layouts, element, this);
          this.#layouts.register(layout);
          return layout;
        })();
        this.#children.set(child.id, child);
        const changed = this.#active !== child;
        this.#active = child;
        descending.shift();
        child.is === "layout" && child.select(page, descending);
        changed && this.trigger("change");
      }
    }
    exports.Layout = Layout2;
  }
});
ims.set("./manager", {
  hash: 1504779151,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.manager = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _routing = require2("@beyond-js/kernel/routing");
    var _layout = require2("./layouts/layout");
    var _pages = require2("./pages");
    var _layouts = require2("./layouts");
    var _route = require2("./route");
    const manager2 = typeof process === "object" ? void 0 : new class Manager {
      #instances = {
        layouts: new _layouts.default(),
        pages: new _pages.default()
      };
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      #resolve;
      #ready = new Promise(resolve => this.#resolve = resolve);
      get ready() {
        return this.#ready;
      }
      constructor() {
        const set = () => this.set(_routing.routing.uri).catch(exc => console.log(exc.stack));
        const {
          specifier
        } = globalThis.__app_package;
        Promise.all([bimport(`${specifier}/config`), bimport(`${specifier}/start`)]).then(([{
          default: config
        }]) => {
          this.#main = new _layout.Layout(this.#instances.layouts, config.layout);
          _routing.routing.on("change", set);
          _routing.routing.initialised ? set() : _routing.routing.ready.then(set);
        });
      }
      get layouts() {
        return this.#instances.layouts;
      }
      get pages() {
        return this.#instances.pages;
      }
      #main;
      get main() {
        return this.#main;
      }
      #ct = new _core.CancellationToken();
      async set(uri) {
        const cid = this.#ct.reset();
        const route = new _route.Route(uri.pathname);
        await route.process();
        if (!this.#ct.check(cid)) return;
        const done = () => {
          !this.#initialised && this.#resolve();
          this.#initialised = true;
        };
        const {
          page: element
        } = route;
        if (!element) {
          console.error(`Pathname "${uri.pathname}" does not have a page widget associated to it`);
          return done();
        }
        const page = this.#instances.pages.register(uri, route);
        const {
          error,
          value: descending
        } = page.parents;
        if (error) {
          console.error(`Page on "${uri.uri}" cannot be shown: ${error}`);
          return done();
        }
        this.#main.select(page, descending);
        return done();
      }
    }();
    exports.manager = manager2;
  }
});
ims.set("./pages/index", {
  hash: 635174642,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _instance = require2("./instance");
    class _default extends Map {
      instance(id) {
        return [...this.values()].find(instance => instance.id === id);
      }
      register(uri, route) {
        const {
          pathname
        } = uri;
        let instance = this.has(pathname) ? this.get(pathname) : void 0;
        instance = instance ? instance : new _instance.PageInstance(uri, route);
        this.set(pathname, instance);
        return instance;
      }
    }
    exports.default = _default;
  }
});
ims.set("./pages/instance", {
  hash: 2192565275,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageInstance = void 0;
    var _render = require2("@beyond-js/widgets/render");
    let id = 0;
    class PageInstance2 {
      #uri;
      get uri() {
        return this.#uri;
      }
      #route;
      get route() {
        return this.#route;
      }
      get element() {
        return this.#route.page;
      }
      get is() {
        return "page";
      }
      #id;
      get id() {
        return `${this.element}:${this.#id}`;
      }
      get parents() {
        const value = [];
        let {
          layout
        } = _render.widgets.get(this.element);
        while (layout) {
          const found = [..._render.widgets.values()].find(({
            name
          }) => name === layout);
          if (!found) {
            const error = `Layout "${layout}" not found`;
            return {
              error
            };
          }
          value.unshift(found);
          layout = found.layout;
        }
        return {
          value
        };
      }
      constructor(uri, route) {
        this.#uri = uri;
        this.#route = route;
        this.#id = ++id;
      }
    }
    exports.PageInstance = PageInstance2;
  }
});
ims.set("./route", {
  hash: 408835594,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Route = void 0;
    var _render = require2("@beyond-js/widgets/render");
    var _routing = require2("@beyond-js/kernel/routing");
    class Route2 {
      #pathname;
      get pathname() {
        return this.#pathname;
      }
      #page;
      get page() {
        return this.#page;
      }
      #vars;
      get vars() {
        return this.#vars;
      }
      constructor(pathname) {
        this.#pathname = pathname;
      }
      async process() {
        const pathname = this.#pathname.split("/");
        const registered = /* @__PURE__ */new Map();
        _render.widgets.forEach(({
          is,
          name,
          route
        }) => is === "page" && registered.set(name, route.split("/")));
        const target = [...registered].filter(([, route]) => route.length === pathname.length);
        this.#vars = /* @__PURE__ */new Map();
        const found = target.find(([, route]) => {
          this.#vars.clear();
          for (let i = 0; i < pathname.length; i++) {
            const dir = route[i];
            if (dir.startsWith("${") && dir.endsWith("}")) {
              const vname = dir.slice(2, dir.length - 1);
              this.#vars.set(vname, pathname[i]);
              continue;
            }
            if (dir !== pathname[i]) return false;
          }
          return true;
        });
        this.#page = found ? found[0] : await _routing.routing.missing?.(this.#pathname);
      }
    }
    exports.Route = Route2;
  }
});
ims.set("./uri", {
  hash: 615392904,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageURI = void 0;
    var _manager = require2("./manager");
    class PageURI2 {
      #uri;
      #route;
      get uri() {
        return this.#uri;
      }
      get pathname() {
        return this.#uri.pathname;
      }
      get search() {
        return this.#uri.search;
      }
      get qs() {
        return this.#uri.qs;
      }
      get hash() {
        return this.#uri.hash;
      }
      get vars() {
        return this.#route.vars;
      }
      constructor({
        widget,
        uri,
        route
      }) {
        if (widget) {
          const child = widget.getAttribute("data-child-id");
          const page = _manager.manager.pages.instance(child);
          if (!page) {
            throw new Error(`Element "${widget.localName}" is not a page, or page not found`);
          }
          ({
            uri,
            route
          } = page);
        }
        this.#uri = uri;
        this.#route = route;
      }
    }
    exports.PageURI = PageURI2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./layouts/layout",
  "from": "Layout",
  "name": "Layout"
}, {
  "im": "./manager",
  "from": "manager",
  "name": "manager"
}, {
  "im": "./pages/instance",
  "from": "PageInstance",
  "name": "PageInstance"
}, {
  "im": "./route",
  "from": "Route",
  "name": "Route"
}, {
  "im": "./uri",
  "from": "PageURI",
  "name": "PageURI"
}];
var Layout, manager, PageInstance, Route, PageURI;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Layout") && (Layout = require2 ? require2("./layouts/layout").Layout : value);
  (require2 || prop === "manager") && (manager = require2 ? require2("./manager").manager : value);
  (require2 || prop === "PageInstance") && (PageInstance = require2 ? require2("./pages/instance").PageInstance : value);
  (require2 || prop === "Route") && (Route = require2 ? require2("./route").Route : value);
  (require2 || prop === "PageURI") && (PageURI = require2 ? require2("./uri").PageURI : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy4wLjEuNS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9sYXlvdXRzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL2xheW91dHMvbGF5b3V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvaW5zdGFuY2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcm91dGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvdXJpLnRzIl0sIm5hbWVzIjpbInJvdXRpbmdfMF8xXzVfZXhwb3J0cyIsIl9fZXhwb3J0IiwiTGF5b3V0IiwiUGFnZUluc3RhbmNlIiwiUGFnZVVSSSIsIlJvdXRlIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibWFuYWdlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfZGVmYXVsdCIsIk1hcCIsInJlZ2lzdGVyIiwibGF5b3V0Iiwic2V0IiwiaWQiLCJkZWZhdWx0IiwiX2NvcmUiLCJyZXF1aXJlMiIsIkxheW91dDIiLCJFdmVudHMiLCJpcyIsImxheW91dHMiLCJlbGVtZW50IiwiYWN0aXZlIiwicGFyZW50IiwiY2hpbGRyZW4iLCJjb25zdHJ1Y3RvciIsInNlbGVjdCIsInBhZ2UiLCJkZXNjZW5kaW5nIiwibGVuZ3RoIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZCIsImZvdW5kIiwidmFsdWVzIiwiZmluZCIsImNoaWxkMiIsImNoYW5nZWQiLCJzaGlmdCIsInRyaWdnZXIiLCJfcm91dGluZyIsIl9sYXlvdXQiLCJfcGFnZXMiLCJfbGF5b3V0cyIsIl9yb3V0ZSIsIm1hbmFnZXIyIiwicHJvY2VzcyIsIk1hbmFnZXIiLCJpbnN0YW5jZXMiLCJwYWdlcyIsImluaXRpYWxpc2VkIiwicmVzb2x2ZSIsInJlYWR5IiwiUHJvbWlzZSIsInJvdXRpbmciLCJ1cmkiLCJjYXRjaCIsImV4YyIsInN0YWNrIiwic3BlY2lmaWVyIiwiZ2xvYmFsVGhpcyIsIl9fYXBwX3BhY2thZ2UiLCJhbGwiLCJiaW1wb3J0IiwidGhlbiIsImNvbmZpZyIsIm1haW4iLCJvbiIsImN0IiwiQ2FuY2VsbGF0aW9uVG9rZW4iLCJjaWQiLCJyZXNldCIsInJvdXRlIiwicGF0aG5hbWUiLCJjaGVjayIsImRvbmUiLCJlcnJvciIsInZhbHVlIiwicGFyZW50cyIsIl9pbnN0YW5jZSIsImluc3RhbmNlIiwiaGFzIiwiZ2V0IiwiX3JlbmRlciIsIlBhZ2VJbnN0YW5jZTIiLCJ3aWRnZXRzIiwidW5zaGlmdCIsIlJvdXRlMiIsInZhcnMiLCJzcGxpdCIsInJlZ2lzdGVyZWQiLCJmb3JFYWNoIiwidGFyZ2V0IiwiZmlsdGVyIiwiY2xlYXIiLCJpIiwiZGlyIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwidm5hbWUiLCJzbGljZSIsIm1pc3NpbmciLCJfbWFuYWdlciIsIlBhZ2VVUkkyIiwic2VhcmNoIiwicXMiLCJoYXNoIiwid2lkZ2V0IiwiZ2V0QXR0cmlidXRlIiwiRXJyb3IiLCJsb2NhbE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFB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QUlJLEtBQUEsQ0FBTSxHQUFHSixHQUFBLENBQUlwRSxNQUFBLEdBQVMsQ0FBQztjQUN6QyxLQUFLLENBQUE0RCxJQUFBLENBQU03RSxHQUFBLENBQUl3RixLQUFBLEVBQU8xQixRQUFBLENBQVNzQixDQUFBLENBQUU7Y0FDakM7O1lBR0osSUFBSUMsR0FBQSxLQUFRdkIsUUFBQSxDQUFTc0IsQ0FBQSxHQUFJLE9BQU87O1VBRXBDLE9BQU87UUFDWCxDQUFDO1FBRUQsS0FBSyxDQUFBckUsSUFBQSxHQUFRTyxLQUFBLEdBQVFBLEtBQUEsQ0FBTSxLQUFLLE1BQU1PLFFBQUEsQ0FBQWMsT0FBQSxDQUFRK0MsT0FBQSxHQUFVLEtBQUssQ0FBQTVCLFFBQVM7TUFDMUU7O0lBQ0hwRSxPQUFBLENBQUFMLEtBQUEsR0FBQXVGLE1BQUE7Ozs7Ozs7Ozs7OztJQ3BERCxJQUFBZSxRQUFBLEdBQUF2RixRQUFBO0lBRWlCLE1BQ1h3RixRQUFBLENBQU87TUFDQSxDQUFBaEQsR0FBQTtNQUNBLENBQUFpQixLQUFBO01BRVQsSUFBSWpCLElBQUEsRUFBRztRQUNILE9BQU8sS0FBSyxDQUFBQSxHQUFBO01BQ2hCO01BRUEsSUFBSWtCLFNBQUEsRUFBUTtRQUNSLE9BQU8sS0FBSyxDQUFBbEIsR0FBQSxDQUFLa0IsUUFBQTtNQUNyQjtNQUVBLElBQUkrQixPQUFBLEVBQU07UUFDTixPQUFPLEtBQUssQ0FBQWpELEdBQUEsQ0FBS2lELE1BQUE7TUFDckI7TUFFQSxJQUFJQyxHQUFBLEVBQUU7UUFDRixPQUFPLEtBQUssQ0FBQWxELEdBQUEsQ0FBS2tELEVBQUE7TUFDckI7TUFFQSxJQUFJQyxLQUFBLEVBQUk7UUFDSixPQUFPLEtBQUssQ0FBQW5ELEdBQUEsQ0FBS21ELElBQUE7TUFDckI7TUFFQSxJQUFJbEIsS0FBQSxFQUFJO1FBQ0osT0FBTyxLQUFLLENBQUFoQixLQUFBLENBQU9nQixJQUFBO01BQ3ZCO01BRUFoRSxZQUFZO1FBQUNtRixNQUFBO1FBQVFwRCxHQUFBO1FBQUtpQjtNQUFLLEdBQXNEO1FBQ2pGLElBQUltQyxNQUFBLEVBQVE7VUFDUixNQUFNM0UsS0FBQSxHQUFRMkUsTUFBQSxDQUFPQyxZQUFBLENBQWEsZUFBZTtVQUNqRCxNQUFNbEYsSUFBQSxHQUFPNEUsUUFBQSxDQUFBbkcsT0FBQSxDQUFROEMsS0FBQSxDQUFNK0IsUUFBQSxDQUFTaEQsS0FBSztVQUN6QyxJQUFJLENBQUNOLElBQUEsRUFBTTtZQUNQLE1BQU0sSUFBSW1GLEtBQUEsQ0FBTSxZQUFZRixNQUFBLENBQU9HLFNBQUEsb0NBQTZDOztVQUdwRixDQUFDO1lBQUN2RCxHQUFBO1lBQUtpQjtVQUFLLElBQUk5QyxJQUFBOztRQUdwQixLQUFLLENBQUE2QixHQUFBLEdBQU9BLEdBQUE7UUFDWixLQUFLLENBQUFpQixLQUFBLEdBQVNBLEtBQUE7TUFDbEI7O0lBQ0huRSxPQUFBLENBQUFOLE9BQUEsR0FBQXdHLFFBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9