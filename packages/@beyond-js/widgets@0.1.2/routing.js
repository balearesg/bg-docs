System.register(["@beyond-js/kernel@0.1.7/bundle","@beyond-js/kernel@0.1.7/core","@beyond-js/widgets@0.1.2/render","@beyond-js/kernel@0.1.7/routing"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.7"],["@beyond-js/widgets","0.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.7/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.7/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.2/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.7/routing', dep)],
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

// .beyond/uimport/@beyond-js/widgets/routing.0.1.2.js
var routing_0_1_2_exports = {};
__export(routing_0_1_2_exports, {
  Layout: () => Layout,
  PageInstance: () => PageInstance,
  PageURI: () => PageURI,
  Route: () => Route,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  manager: () => manager
});

// node_modules/@beyond-js/widgets/routing/routing.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.7/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.7/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@0.1.2/render"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.7/routing"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.2/routing"
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
module.exports = __toCommonJS(routing_0_1_2_exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy4wLjEuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9sYXlvdXRzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL2xheW91dHMvbGF5b3V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvaW5zdGFuY2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcm91dGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvdXJpLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiTGF5b3V0IiwiUGFnZUluc3RhbmNlIiwiUGFnZVVSSSIsIlJvdXRlIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibWFuYWdlciIsIk1hcCIsInJlZ2lzdGVyIiwibGF5b3V0Iiwic2V0IiwiaWQiLCJleHBvcnRzIiwiTGF5b3V0MiIsIl9jb3JlIiwiaXMiLCJlbGVtZW50IiwiYWN0aXZlIiwiY2hpbGRyZW4iLCJjb25zdHJ1Y3RvciIsImxheW91dHMiLCJwYXJlbnQiLCJzZWxlY3QiLCJwYWdlIiwiZGVzY2VuZGluZyIsImxlbmd0aCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiY2hpbGQiLCJmb3VuZCIsInZhbHVlcyIsImZpbmQiLCJjaGlsZDIiLCJjaGFuZ2VkIiwic2hpZnQiLCJ0cmlnZ2VyIiwibWFuYWdlcjIiLCJwcm9jZXNzIiwiTWFuYWdlciIsIl9sYXlvdXRzIiwicGFnZXMiLCJfcGFnZXMiLCJpbml0aWFsaXNlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVhZHkiLCJfcm91dGluZyIsInVyaSIsImNhdGNoIiwiZXhjIiwic3RhY2siLCJzcGVjaWZpZXIiLCJnbG9iYWxUaGlzIiwiX19hcHBfcGFja2FnZSIsImFsbCIsImJpbXBvcnQiLCJ0aGVuIiwiZGVmYXVsdCIsImNvbmZpZyIsIl9sYXlvdXQiLCJvbiIsIm1haW4iLCJjaWQiLCJyZXNldCIsInJvdXRlIiwiX3JvdXRlIiwicGF0aG5hbWUiLCJjaGVjayIsImRvbmUiLCJlcnJvciIsInZhbHVlIiwicGFyZW50cyIsImluc3RhbmNlIiwiaGFzIiwiZ2V0IiwiX2luc3RhbmNlIiwiUGFnZUluc3RhbmNlMiIsIl9yZW5kZXIiLCJ1bnNoaWZ0IiwiUm91dGUyIiwidmFycyIsInNwbGl0IiwicmVnaXN0ZXJlZCIsImZvckVhY2giLCJ0YXJnZXQiLCJmaWx0ZXIiLCJjbGVhciIsImkiLCJkaXIiLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJ2bmFtZSIsInNsaWNlIiwibWlzc2luZyIsIlBhZ2VVUkkyIiwic2VhcmNoIiwicXMiLCJoYXNoIiwid2lkZ2V0IiwiZ2V0QXR0cmlidXRlIiwiX21hbmFnZXIiLCJFcnJvciIsImxvY2FsTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDS2MsdUJBQWVDLElBQW1CO01BQzVDQyxTQUFTQyxRQUFjO1FBQ25CLEtBQUtDLElB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QUFHLENBQUMsQ0FBQztRQUc5RixNQUFNRyxTQUFTLENBQUMsR0FBR0YsVUFBVSxFQUFFRyxPQUFPLENBQUMsR0FBR3JCLFdBQVdBLE1BQU14QyxXQUFXMEMsU0FBUzFDLE1BQU07UUFFckYsYUFBYSxtQkFBSWxCLEtBQUc7UUFDcEIsTUFBTXVCLFFBQVF1RCxPQUFPckQsS0FBSyxDQUFDLEdBQUdpQyxXQUFVO1VBQ3BDLFdBQVdzQixPQUFLO1VBQ2hCLFNBQVNDLElBQUksR0FBR0EsSUFBSXJCLFNBQVMxQyxRQUFRK0QsS0FBSztZQUN0QyxNQUFNQyxNQUFNeEIsTUFBTXVCO1lBR2xCLElBQUlDLElBQUlDLFdBQVcsSUFBSSxLQUFLRCxJQUFJRSxTQUFTLEdBQUcsR0FBRztjQUMzQyxNQUFNQyxRQUFRSCxJQUFJSSxNQUFNLEdBQUdKLElBQUloRSxTQUFTLENBQUM7Y0FDekMsV0FBV2YsSUFBSWtGLE9BQU96QixTQUFTcUIsRUFBRTtjQUNqQzs7WUFHSixJQUFJQyxRQUFRdEIsU0FBU3FCLElBQUksT0FBTzs7VUFFcEMsT0FBTztRQUNYLENBQUM7UUFFRCxhQUFhMUQsUUFBUUEsTUFBTSxLQUFLLE1BQU1pQixpQkFBUStDLFVBQVUsY0FBYztNQUMxRTs7SUFDSGxGOzs7Ozs7Ozs7Ozs7SUNwREQ7SUFFaUIsTUFDWG1GLFNBQU87TUFDQTtNQUNBO1VBRUwvQyxNQUFHO1FBQ0gsT0FBTztNQUNYO1VBRUltQixXQUFRO1FBQ1IsT0FBTyxVQUFVQTtNQUNyQjtVQUVJNkIsU0FBTTtRQUNOLE9BQU8sVUFBVUE7TUFDckI7VUFFSUMsS0FBRTtRQUNGLE9BQU8sVUFBVUE7TUFDckI7VUFFSUMsT0FBSTtRQUNKLE9BQU8sVUFBVUE7TUFDckI7VUFFSWpCLE9BQUk7UUFDSixPQUFPLFlBQVlBO01BQ3ZCO01BRUE5RCxZQUFZO1FBQUNnRjtRQUFRbkQ7UUFBS2lCO1NBQTJEO1FBQ2pGLElBQUlrQyxRQUFRO1VBQ1IsTUFBTXRFLFFBQVFzRSxPQUFPQyxhQUFhLGVBQWU7VUFDakQsTUFBTTdFLE9BQU84RSxpQkFBUTVELE1BQU1nQyxTQUFTNUMsS0FBSztVQUN6QyxJQUFJLENBQUNOLE1BQU07WUFDUCxNQUFNLElBQUkrRSxNQUFNLFlBQVlILE9BQU9JLDZDQUE2Qzs7VUFHbkY7WUFBQ3ZEO1lBQUtpQjtVQUFLLElBQUkxQzs7UUFHcEIsWUFBWXlCO1FBQ1osY0FBY2lCO01BQ2xCOztJQUNIckQiLCJmaWxlIjoiIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcnOyIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sInNvdXJjZVJvb3QiOiIvZG9jcy9vdXQifQ==