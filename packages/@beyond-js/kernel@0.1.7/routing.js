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

// .beyond/uimport/@beyond-js/kernel/routing.0.1.7.js
var routing_0_1_7_exports = {};
__export(routing_0_1_7_exports, {
  URI: () => URI,
  routing: () => routing
});

// node_modules/@beyond-js/kernel/routing/routing.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.7/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.7/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.7/routing"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./history/history", {
  hash: 1835933971,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondHistory = void 0;
    var _position = require2("./position");
    var _records = require2("./records");
    class BeyondHistory {
      #position;
      get position() {
        return this.#position;
      }
      #records;
      get records() {
        return this.#records;
      }
      get valid() {
        return this.#records.valid;
      }
      get current() {
        return this.valid ? this.#records.current.uri : void 0;
      }
      #initial = history.length;
      get initial() {
        return this.#initial;
      }
      #processBrowserURI(uri) {
        if (uri === void 0) return;
        const {
          routing: routing2
        } = require2("../routing");
        const RoutingModeEnum = require2("../routing").RoutingMode;
        return routing2.mode === RoutingModeEnum.Hash ? `#${uri.substr(1)}` : uri;
      }
      #push(uri) {
        this.#records.reset();
        this.#records.push(uri);
        this.#position.save(this.#records.length);
      }
      replaceState(state, title, uri) {
        state = state ? state : {};
        if (typeof state !== "object") throw new Error("Invalid state parameter");
        this.#records.updateCurrentURI(uri);
        const position = this.#position.value;
        history.replaceState(state, title, this.#processBrowserURI(uri));
        this.#position.save(position);
      }
      pushState(uri, state) {
        if (uri === `${location.pathname}${location.search}${location.hash}`) return;
        state = state ? state : {};
        if (typeof state !== "object") throw new Error("Invalid state parameter");
        history.pushState(state, null, this.#processBrowserURI(uri));
        this.#push(uri);
      }
      back() {
        const previous = this.#records.previous?.position;
        const current = this.#records.current?.position;
        if (!previous) return;
        history.go(previous - current);
      }
      forward() {
        const following = this.#records.following?.position;
        const current = this.#records.current?.position;
        if (!following) return;
        history.go(following - current);
      }
      constructor(routing2, Mode) {
        this.#position = new _position.HistoryPosition();
        this.#records = new _records.HistoryRecords(this.#position);
        if (this.#position.value === void 0) {
          let uri = routing2.mode === Mode.Hash ? location.hash.slice(1) : `${location.pathname}${location.search}${location.hash}`;
          this.#push(uri);
        }
      }
    }
    exports.BeyondHistory = BeyondHistory;
  }
});
ims.set("./history/position", {
  hash: 3613484025,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HistoryPosition = void 0;
    class HistoryPosition {
      check() {
        if (this.value) return true;
        console.error("History state is not defined. This happen when state is changed outside the beyond defined navigation flows.");
        return false;
      }
      get value() {
        return history.state?.__beyond_navigation_position;
      }
      save(position) {
        const state = history.state ? history.state : {};
        state.__beyond_navigation_position = position;
        history.replaceState(state, null);
      }
    }
    exports.HistoryPosition = HistoryPosition;
  }
});
ims.set("./history/records", {
  hash: 3466552890,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HistoryRecords = void 0;
    class HistoryRecords {
      #position;
      #valid = true;
      get valid() {
        return this.#valid;
      }
      #entries = [];
      get entries() {
        return this.#entries.slice();
      }
      get length() {
        return this.#entries.length;
      }
      get current() {
        return this.#entries[this.#position.value - 1];
      }
      get previous() {
        const previous = this.#position.value - 2;
        if (previous < 0) return;
        return this.#entries[previous];
      }
      get following() {
        const following = this.#position.value;
        if (following >= this.#entries.length) return;
        return this.#entries[following];
      }
      constructor(position) {
        this.#position = position;
        let parsed;
        try {
          const stored = sessionStorage.getItem("__beyond_navigation_records");
          if (!stored && position.value !== void 0) {
            this.#valid = false;
            return;
          }
          parsed = stored ? JSON.parse(stored) : [];
        } catch (exc) {
          this.#valid = false;
          console.error("Error loading beyond navigation state", exc instanceof Error ? exc.stack : exc);
          this.#entries = [];
        }
        if (!(parsed instanceof Array)) {
          const warning = "The beyond navigation data, stored in session store is invalid.";
          console.warn(warning, parsed);
        }
        this.#entries = parsed;
      }
      #sanitizeURI(uri) {
        if (uri === void 0) return;
        return uri.startsWith("/") ? uri : `/${uri}`;
      }
      get(index) {
        return this.#entries[index];
      }
      push(uri) {
        uri = this.#sanitizeURI(uri);
        this.#entries.push({
          uri,
          position: history.length
        });
        this.save();
      }
      reset() {
        const position = this.#position.value;
        if (position) return;
        this.#entries = this.#entries.filter(entry => entry.position < history.length);
      }
      updateCurrentURI(uri) {
        if (!this.#valid) return;
        const position = this.#position.value;
        uri = this.#sanitizeURI(uri);
        this.#entries[position - 1] = {
          uri,
          position: history.length
        };
        this.save();
      }
      save() {
        if (!this.#valid) return;
        sessionStorage.setItem("__beyond_navigation_records", JSON.stringify(this.#entries));
      }
    }
    exports.HistoryRecords = HistoryRecords;
  }
});
ims.set("./routing", {
  hash: 2780317025,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.routing = exports.RoutingMode = exports.Routing = void 0;
    var _uri2 = require2("./uri/uri");
    var _core = require2("@beyond-js/kernel/core");
    var _history = require2("./history/history");
    var RoutingMode;
    exports.RoutingMode = RoutingMode;
    (function (RoutingMode2) {
      RoutingMode2[RoutingMode2["Hash"] = 0] = "Hash";
      RoutingMode2[RoutingMode2["Pathname"] = 1] = "Pathname";
    })(RoutingMode || (exports.RoutingMode = RoutingMode = {}));
    const serverside = typeof process === "object";
    class Routing extends _core.Events {
      #mode;
      get mode() {
        return this.#mode;
      }
      #history;
      get history() {
        return this.#history;
      }
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      #resolve;
      #ready = new Promise(resolve => this.#resolve = resolve);
      get ready() {
        return this.#ready;
      }
      #uri;
      get uri() {
        return this.#uri;
      }
      missing;
      redirect;
      #resolveConfigured;
      #configured = new Promise(resolve => this.#resolveConfigured = resolve);
      constructor() {
        super();
        const {
          specifier
        } = globalThis.__app_package;
        !serverside && bimport(`${specifier}/config`).then(({
          default: config
        }) => {
          let configured = config.routing?.mode;
          let routingMode = configured === "hash" ? RoutingMode.Hash : RoutingMode.Pathname;
          location.protocol === "file:" && (routingMode = RoutingMode.Hash);
          ![0, 1].includes(routingMode) && (routingMode = location.protocol === "file:" ? RoutingMode.Hash : RoutingMode.Pathname);
          this.#mode = routingMode;
          this.#history = new _history.BeyondHistory(this, RoutingMode);
          this.#resolveConfigured();
        });
      }
      #redirect = async uri => {
        if (typeof this.redirect !== "function") return;
        const redirected = await this.redirect(uri);
        if (!redirected) return;
        if (typeof redirected !== "string") {
          console.error(`Invalid route value set by custom routing function`, redirected);
          return;
        }
        if (uri.pathname === redirected) return;
        this.pushState(redirected);
        return true;
      };
      pushState(uri, state) {
        this.#configured.then(() => {
          this.#history.pushState(uri, state);
          this.update().catch(exc => console.error(exc.stack));
        });
      }
      replaceState(state, title, uri) {
        this.#configured.then(() => {
          this.#history.replaceState(state, title, uri);
          this.update().catch(exc => console.error(exc.stack));
        });
      }
      #cancellationToken = new _core.CancellationToken();
      update = async () => {
        const cancellationTokenId = this.#cancellationToken.reset();
        const {
          hash,
          pathname,
          search
        } = location;
        const _uri = this.#mode === RoutingMode.Hash ? `/${hash.slice(1)}` : pathname + search + hash;
        if (this.#uri?.uri === _uri) return;
        const uri = this.#uri = new _uri2.URI(_uri);
        const redirected = await this.#redirect(uri);
        if (!this.#cancellationToken.check(cancellationTokenId)) return;
        if (redirected) return;
        this.#history && uri.uri !== this.#history.current && console.error(`History current "${this.#history.current}" is not equal to actual uri "${uri.uri}"`);
        this.#initialised ? this.trigger("change") : this.#resolve();
        this.#initialised = true;
      };
      #started = false;
      setup() {
        this.#started = true;
        !serverside && this.update().catch(exc => console.error(exc.stack));
      }
      back() {
        this.#history.back();
      }
      forward() {
        this.#history.forward();
      }
    }
    exports.Routing = Routing;
    const routing2 = new Routing();
    exports.routing = routing2;
    globalThis.routing = routing2;
    !serverside && (beyond.navigate = (uri, state) => routing2.pushState(uri, state));
    !serverside && (beyond.pushState = (uri, state) => routing2.pushState(uri, state));
    !serverside && (beyond.back = () => routing2.back());
    !serverside && (beyond.forward = () => routing2.forward());
    !serverside && window.addEventListener("popstate", () => routing2.update().catch(exc => console.error(exc.stack)));
  }
});
ims.set("./uri/querystring", {
  hash: 187911159,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.QueryString = void 0;
    class QueryString extends Map {
      constructor(search) {
        super();
        if (search.trim() === "") return;
        search = search.slice(0, 1) === "?" ? search.slice(1) : search;
        const split = search.split("&");
        for (let i = 0; i < split.length; ++i) {
          const param = split[i].split("=", 2);
          const value = param[1] ? decodeURIComponent(param[1].replace(/\+/g, " ")) : void 0;
          this.set(param[0], value);
        }
      }
    }
    exports.QueryString = QueryString;
  }
});
ims.set("./uri/uri", {
  hash: 748332499,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.URI = void 0;
    var _querystring = require2("./querystring");
    class URI2 {
      #uri;
      get uri() {
        return this.#uri;
      }
      #pathname;
      get pathname() {
        return this.#pathname;
      }
      #search;
      get search() {
        return this.#search;
      }
      #qs;
      get qs() {
        return this.#qs;
      }
      #hash;
      get hash() {
        return this.#hash;
      }
      constructor(uri) {
        this.#uri = uri;
        const [u, hash] = uri.split("#");
        const [pathname, search] = u.split("?");
        this.#pathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
        this.#search = search ? search : "";
        this.#qs = new _querystring.QueryString(this.#search);
        this.#hash = hash;
      }
    }
    exports.URI = URI2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./routing",
  "from": "routing",
  "name": "routing"
}, {
  "im": "./uri/uri",
  "from": "URI",
  "name": "URI"
}];
var routing, URI;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "routing") && (routing = require2 ? require2("./routing").routing : value);
  (require2 || prop === "URI") && (URI = require2 ? require2("./uri/uri").URI : value);
};
__pkg.initialise(ims);
module.exports = __toCommonJS(routing_0_1_7_exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC9yb3V0aW5nLjAuMS43LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvaGlzdG9yeS9oaXN0b3J5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvaGlzdG9yeS9wb3NpdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL2hpc3RvcnkvcmVjb3Jkcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL3JvdXRpbmcudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy91cmkvcXVlcnlzdHJpbmcudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy91cmkvdXJpLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiVVJJIiwicm91dGluZyIsIkJleW9uZEhpc3RvcnkiLCJwb3NpdGlvbiIsInJlY29yZHMiLCJ2YWxpZCIsImN1cnJlbnQiLCJ1cmkiLCJoaXN0b3J5IiwibGVuZ3RoIiwiaW5pdGlhbCIsInJlcXVpcmUyIiwiUm91dGluZ01vZGVFbnVtIiwiUm91dGluZ01vZGUiLCJyb3V0aW5nMiIsIm1vZGUiLCJIYXNoIiwic3Vic3RyIiwicmVzZXQiLCJwdXNoIiwic2F2ZSIsInJlcGxhY2VTdGF0ZSIsInN0YXRlIiwidGl0bGUiLCJFcnJvciIsInVwZGF0ZUN1cnJlbnRVUkkiLCJ2YWx1ZSIsInB1c2hTdGF0ZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJoYXNoIiwiYmFjayIsInByZXZpb3VzIiwiZ28iLCJmb3J3YXJkIiwiZm9sbG93aW5nIiwiY29uc3RydWN0b3IiLCJNb2RlIiwiX3Bvc2l0aW9uIiwiX3JlY29yZHMiLCJzbGljZSIsImV4cG9ydHMiLCJIaXN0b3J5UG9zaXRpb24iLCJjaGVjayIsImNvbnNvbGUiLCJlcnJvciIsIl9fYmV5b25kX25hdmlnYXRpb25fcG9zaXRpb24iLCJIaXN0b3J5UmVjb3JkcyIsImVudHJpZXMiLCJwYXJzZWQiLCJzdG9yZWQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJleGMiLCJzdGFjayIsIkFycmF5Iiwid2FybmluZyIsIndhcm4iLCJzdGFydHNXaXRoIiwiZ2V0IiwiaW5kZXgiLCJmaWx0ZXIiLCJlbnRyeSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJSb3V0aW5nTW9kZTIiLCJzZXJ2ZXJzaWRlIiwicHJvY2VzcyIsIlJvdXRpbmciLCJfY29yZSIsImluaXRpYWxpc2VkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWFkeSIsIm1pc3NpbmciLCJyZWRpcmVjdCIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwiYmltcG9ydCIsInRoZW4iLCJkZWZhdWx0IiwiY29uZmlnIiwiY29uZmlndXJlZCIsInJvdXRpbmdNb2RlIiwiUGF0aG5hbWUiLCJwcm90b2NvbCIsImluY2x1ZGVzIiwiX2hpc3RvcnkiLCJyZWRpcmVjdGVkIiwidXBkYXRlIiwiY2F0Y2giLCJjYW5jZWxsYXRpb25Ub2tlbklkIiwiX3VyaSIsIl91cmkyIiwidHJpZ2dlciIsInNldHVwIiwiYmV5b25kIiwibmF2aWdhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiUXVlcnlTdHJpbmciLCJNYXAiLCJ0cmltIiwic3BsaXQiLCJpIiwicGFyYW0iLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwic2V0IiwiVVJJMiIsInFzIiwidSIsIl9xdWVyeXN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7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QUVTO1VBQ0xDLFNBQU07UUFDTixPQUFPO01BQ1g7TUFFUztVQUNMb0YsS0FBRTtRQUNGLE9BQU87TUFDWDtNQUVTO1VBQ0xuRixPQUFJO1FBQ0osT0FBTztNQUNYO01BRUFNLFlBQVk5QixLQUFXO1FBQ25CLFlBQVlBO1FBRVosTUFBTSxDQUFDNEcsR0FBR3BGLFFBQVF4QixJQUFJb0csTUFBTSxHQUFHO1FBQy9CLE1BQU0sQ0FBQzlFLFVBQVVDLFVBQVVxRixFQUFFUixNQUFNLEdBQUc7UUFFdEMsaUJBQWlCOUUsU0FBU2dDLFdBQVcsR0FBRyxJQUFJaEMsV0FBVyxJQUFJQTtRQUMzRCxlQUFlQyxTQUFTQSxTQUFTO1FBQ2pDLFdBQVcsSUFBSXNGLHlCQUFZLFlBQVk7UUFDdkMsYUFBYXJGO01BQ2pCOztJQUNIVyIsImZpbGUiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICdAYmV5b25kLWpzL2tlcm5lbC9yb3V0aW5nJzsiLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwic291cmNlUm9vdCI6Ii9kb2NzL291dCJ9