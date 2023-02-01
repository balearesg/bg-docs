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

// .beyond/uimport/@beyond-js/kernel/core.0.1.7.js
var core_0_1_7_exports = {};
__export(core_0_1_7_exports, {
  CancellationToken: () => CancellationToken,
  Events: () => Events,
  Languages: () => Languages,
  ListenerFunction: () => ListenerFunction,
  PendingPromise: () => PendingPromise,
  SingleCall: () => SingleCall,
  __beyond_pkg: () => __beyond_pkg,
  beyond: () => beyond,
  hmr: () => hmr,
  languages: () => languages
});

// node_modules/@beyond-js/kernel/core/core.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.7/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.7/core"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([]);
var ims = /* @__PURE__ */new Map();
ims.set("./beyond", {
  hash: 959081709,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.beyond = exports.Beyond = void 0;
    var _languages = require2("./languages");
    class Beyond {
      get languages() {
        return _languages.languages;
      }
      async import(resource, version) {
        return await bimport(resource, version);
      }
    }
    exports.Beyond = Beyond;
    const beyond2 = new Beyond();
    exports.beyond = beyond2;
    globalThis.beyond = beyond2;
  }
});
ims.set("./languages/index", {
  hash: 2966511149,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.languages = exports.Languages = void 0;
    var _events = require2("../utils/events/events");
    class Languages2 extends _events.Events {
      #project;
      #specs;
      #storage = typeof localStorage === "object" ? localStorage : void 0;
      #supported;
      get supported() {
        return this.#supported;
      }
      get default() {
        return this.#specs?.default;
      }
      #current;
      get current() {
        return this.#current;
      }
      #resolve;
      #ready = new Promise(resolve => this.#resolve = resolve);
      get ready() {
        return this.#ready;
      }
      #fetched = false;
      get fetched() {
        return this.#fetched;
      }
      constructor(project) {
        super();
        this.#project = project;
        bimport(`${project}/config`).then(({
          default: config
        }) => {
          this.#setup(config.languages);
          this.#fetched = true;
          this.#resolve();
        });
      }
      #configure(value) {
        if (this.#current === value) return true;
        if (typeof value !== "string" || value.length !== 2) {
          console.warn(`Configured language "${value}" is invalid`);
          return false;
        }
        if (value && !this.#supported.has(value)) {
          console.log(`Language "${value}" is not supported`);
          return false;
        }
        const previous = this.#current;
        this.#current = value;
        previous && this.trigger("change");
        return true;
      }
      set current(value) {
        if (!this.#configure(value)) return;
        this.#storage?.setItem("__beyond_language", value);
      }
      #setup(specs) {
        if (specs.default && typeof specs.default !== "string" || specs.default.length !== 2) {
          console.log(`Default language "${specs.default}" is invalid`);
          specs.default = void 0;
        }
        const def = specs.default ? specs.default : "en";
        specs.supported = specs.supported instanceof Array ? specs.supported : [def];
        !specs.supported.length && specs.supported.push(def);
        this.#supported = new Set(specs.supported);
        specs.default = specs.default ? specs.default : [...this.#supported][0];
        if (!this.#supported.has(specs.default)) {
          console.warn(`Default language "${specs.default}" is not supported by current application`);
          specs.default = [...this.#supported][0];
        }
        this.#specs = specs;
        const configured = this.#storage?.getItem("__beyond_language");
        if (configured && this.#configure(configured)) return;
        const device = typeof location === "object" ? navigator.language.split("-")[0] : void 0;
        if (device && this.#configure(device)) return;
        this.#configure(specs.default);
      }
    }
    exports.Languages = Languages2;
    const languages2 = new Languages2(globalThis.__app_package.specifier);
    exports.languages = languages2;
  }
});
ims.set("./utils/events/events", {
  hash: 3993267980,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Events = void 0;
    class Events2 {
      #specs;
      #listeners = /* @__PURE__ */new Map();
      #destroyed = false;
      get destroyed() {
        return this.#destroyed;
      }
      constructor(specs) {
        specs = specs ? specs : {};
        if (specs.supported && !(specs.supported instanceof Array)) throw new Error("Invalid parameters");
        this.#specs = specs;
        if (specs.bind) {
          specs.bind.bind = (event, listener, priority) => this.on(event, listener, priority);
          specs.bind.unbind = (event, listener) => this.off(event, listener);
        }
      }
      on(event, listener, priority) {
        if (this.#destroyed) {
          throw new Error("Events object is destroyed");
        }
        if (this.#specs.supported && !this.#specs.supported.includes(event)) {
          throw new Error(`Event "${event}" is not defined`);
        }
        if (typeof listener !== "function") {
          throw new Error("Listener is not a function");
        }
        this.off(event, listener);
        const l = this.#listeners.has(event) ? this.#listeners.get(event) : [];
        this.#listeners.set(event, l);
        l.push({
          listener,
          priority: priority ? priority : 0
        });
        return this;
      }
      bind = (event, listener, priority) => this.on(event, listener, priority);
      off(event, listener, force) {
        if (this.#destroyed) {
          throw new Error("Events object is destroyed");
        }
        if (!event) {
          throw new Error(`Event name not specified`);
        }
        if (this.#specs.supported && !this.#specs.supported.includes(event)) {
          throw new Error(`Event "${event}" is not defined`);
        }
        if (!listener) {
          if (!force) throw new Error("Listener function not set");
          this.#listeners.delete(event);
          return this;
        }
        if (!this.#listeners.has(event)) {
          return this;
        }
        const e = this.#listeners.get(event);
        const filtered = e.filter(item => item.listener !== listener);
        this.#listeners.set(event, filtered);
        return this;
      }
      unbind = (event, listener, force) => this.off(event, listener, force);
      trigger(event, ...rest) {
        if (this.#destroyed) {
          throw new Error("Events object is destroyed");
        }
        event = typeof event === "string" ? {
          "name": event
        } : event;
        if (typeof event !== "object") throw new Error("Invalid parameters");
        if (typeof event.name !== "string") throw new Error("Invalid event name");
        if (this.#specs.supported && !this.#specs.supported.includes(event.name)) {
          throw new Error(`Event "${event.name}" is not defined`);
        }
        let args = [...arguments];
        args.shift();
        if (!this.#listeners.has(event.name)) return;
        let l = this.#listeners.get(event.name);
        l.sort((a, b) => b.priority - a.priority);
        if (event.async) {
          const trigger = async function () {
            const promises = [];
            for (let listener of l) {
              promises.push(listener.listener(...args));
            }
            await Promise.all(promises);
          };
          return trigger.call(this, ...args).catch(exc => console.error(exc.stack));
        } else {
          for (let listener of l) {
            listener.listener(...args);
          }
        }
      }
      destroy() {
        this.#destroyed = true;
        this.#listeners.clear();
      }
    }
    exports.Events = Events2;
    globalThis.Events = Events2;
  }
});
ims.set("./utils/events/types", {
  hash: 1632705009,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./utils/execution-control/cancellation-token/cancellation-token", {
  hash: 4200323006,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CancellationToken = void 0;
    class CancellationToken2 {
      #id = 0;
      get current() {
        return this.#id;
      }
      reset = () => ++this.#id;
      check = id => id === this.#id;
    }
    exports.CancellationToken = CancellationToken2;
  }
});
ims.set("./utils/execution-control/single-call/single-call", {
  hash: 783668127,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SingleCall = SingleCall2;
    function SingleCall2(target, propertyKey, descriptor) {
      const originalMethod = descriptor.value;
      let promises = /* @__PURE__ */new WeakMap();
      descriptor.value = function (...args) {
        if (promises.has(this)) return promises.get(this);
        const promise = originalMethod.apply(this, args);
        promises.set(this, promise);
        const clean = () => promises.delete(this);
        promise.then(clean).catch(clean);
        return promise;
      };
      return descriptor;
    }
  }
});
ims.set("./utils/pending-promise/pending-promise", {
  hash: 3255928960,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PendingPromise = void 0;
    class PendingPromise2 extends Promise {
      resolve;
      reject;
      constructor(executor) {
        if (executor instanceof Function) {
          super(executor);
          return;
        }
        let resolve = void 0;
        let reject = void 0;
        super((a, b) => {
          resolve = a;
          reject = b;
        });
        this.resolve = resolve;
        this.reject = reject;
      }
    }
    exports.PendingPromise = PendingPromise2;
    typeof globalThis.process !== "object" && (window.PendingPromise = PendingPromise2);
  }
});
__pkg.exports.descriptor = [{
  "im": "./beyond",
  "from": "beyond",
  "name": "beyond"
}, {
  "im": "./languages/index",
  "from": "Languages",
  "name": "Languages"
}, {
  "im": "./languages/index",
  "from": "languages",
  "name": "languages"
}, {
  "im": "./utils/events/events",
  "from": "Events",
  "name": "Events"
}, {
  "im": "./utils/events/types",
  "from": "ListenerFunction",
  "name": "ListenerFunction"
}, {
  "im": "./utils/execution-control/cancellation-token/cancellation-token",
  "from": "CancellationToken",
  "name": "CancellationToken"
}, {
  "im": "./utils/execution-control/single-call/single-call",
  "from": "SingleCall",
  "name": "SingleCall"
}, {
  "im": "./utils/pending-promise/pending-promise",
  "from": "PendingPromise",
  "name": "PendingPromise"
}];
var beyond, Languages, languages, Events, ListenerFunction, CancellationToken, SingleCall, PendingPromise;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "beyond") && (beyond = require2 ? require2("./beyond").beyond : value);
  (require2 || prop === "Languages") && (Languages = require2 ? require2("./languages/index").Languages : value);
  (require2 || prop === "languages") && (languages = require2 ? require2("./languages/index").languages : value);
  (require2 || prop === "Events") && (Events = require2 ? require2("./utils/events/events").Events : value);
  (require2 || prop === "ListenerFunction") && (ListenerFunction = require2 ? require2("./utils/events/types").ListenerFunction : value);
  (require2 || prop === "CancellationToken") && (CancellationToken = require2 ? require2("./utils/execution-control/cancellation-token/cancellation-token").CancellationToken : value);
  (require2 || prop === "SingleCall") && (SingleCall = require2 ? require2("./utils/execution-control/single-call/single-call").SingleCall : value);
  (require2 || prop === "PendingPromise") && (PendingPromise = require2 ? require2("./utils/pending-promise/pending-promise").PendingPromise : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
module.exports = __toCommonJS(core_0_1_7_exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC9jb3JlLjAuMS43LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2NvcmUvX19zb3VyY2VzL2NvcmUvYmV5b25kLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2NvcmUvX19zb3VyY2VzL2NvcmUvbGFuZ3VhZ2VzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2NvcmUvX19zb3VyY2VzL2NvcmUvdXRpbHMvZXZlbnRzL2V2ZW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9jb3JlL19fc291cmNlcy9jb3JlL3V0aWxzL2V2ZW50cy90eXBlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9jb3JlL19fc291cmNlcy9jb3JlL3V0aWxzL2V4ZWN1dGlvbi1jb250cm9sL2NhbmNlbGxhdGlvbi10b2tlbi9jYW5jZWxsYXRpb24tdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvY29yZS9fX3NvdXJjZXMvY29yZS91dGlscy9leGVjdXRpb24tY29udHJvbC9zaW5nbGUtY2FsbC9zaW5nbGUtY2FsbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9jb3JlL19fc291cmNlcy9jb3JlL3V0aWxzL3BlbmRpbmctcHJvbWlzZS9wZW5kaW5nLXByb21pc2UudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJDYW5jZWxsYXRpb25Ub2tlbiIsIkV2ZW50cyIsIkxhbmd1YWdlcyIsIkxpc3RlbmVyRnVuY3Rpb24iLCJQZW5kaW5nUHJvbWlzZSIsIlNpbmdsZUNhbGwiLCJfX2JleW9uZF9wa2ciLCJiZXlvbmQiLCJobXIiLCJsYW5ndWFnZXMiLCJCZXlvbmQiLCJfbGFuZ3VhZ2VzIiwiaW1wb3J0IiwicmVzb3VyY2UiLCJ2ZXJzaW9uIiwiYmltcG9ydCIsImV4cG9ydHMiLCJiZXlvbmQyIiwiZ2xvYmFsVGhpcyIsIkxhbmd1YWdlczIiLCJfZXZlbnRzIiwibG9jYWxTdG9yYWdlIiwic3VwcG9ydGVkIiwiZGVmYXVsdCIsImN1cnJlbnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlYWR5IiwiZmV0Y2hlZCIsImNvbnN0cnVjdG9yIiwicHJvamVjdCIsInRoZW4iLCJjb25maWciLCJ2YWx1ZSIsImxlbmd0aCIsImNvbnNvbGUiLCJ3YXJuIiwiaGFzIiwibG9nIiwicHJldmlvdXMiLCJ0cmlnZ2VyIiwic2V0SXRlbSIsInNwZWNzIiwiZGVmIiwiQXJyYXkiLCJwdXNoIiwiU2V0IiwiY29uZmlndXJlZCIsImdldEl0ZW0iLCJkZXZpY2UiLCJsb2NhdGlvbiIsIm5hdmlnYXRvciIsImxhbmd1YWdlIiwic3BsaXQiLCJsYW5ndWFnZXMyIiwiX19hcHBfcGFja2FnZSIsInNwZWNpZmllciIsIkV2ZW50czIiLCJNYXAiLCJkZXN0cm95ZWQiLCJFcnJvciIsImJpbmQiLCJldmVudCIsImxpc3RlbmVyIiwicHJpb3JpdHkiLCJvbiIsInVuYmluZCIsIm9mZiIsImluY2x1ZGVzIiwibCIsImdldCIsInNldCIsImZvcmNlIiwiZGVsZXRlIiwiZSIsImZpbHRlcmVkIiwiZmlsdGVyIiwiaXRlbSIsInJlc3QiLCJuYW1lIiwiYXJncyIsImFyZ3VtZW50cyIsInNoaWZ0Iiwic29ydCIsImEiLCJiIiwiYXN5bmMiLCJwcm9taXNlcyIsImFsbCIsImNhbGwiLCJjYXRjaCIsImV4YyIsImVycm9yIiwic3RhY2siLCJkZXN0cm95IiwiY2xlYXIiLCJPYmplY3QiLCJDYW5jZWxsYXRpb25Ub2tlbjIiLCJyZXNldCIsImNoZWNrIiwiaWQiLCJ0YXJnZXQiLCJwcm9wZXJ0eUtleSIsImRlc2NyaXB0b3IiLCJvcmlnaW5hbE1ldGhvZCIsIldlYWtNYXAiLCJwcm9taXNlIiwiYXBwbHkiLCJjbGVhbiIsIlBlbmRpbmdQcm9taXNlMiIsInJlamVjdCIsImV4ZWN1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