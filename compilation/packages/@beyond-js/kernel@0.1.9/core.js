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

// .beyond/uimport/@beyond-js/kernel/core.0.1.9.js
var core_0_1_9_exports = {};
__export(core_0_1_9_exports, {
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
module.exports = __toCommonJS(core_0_1_9_exports);

// node_modules/@beyond-js/kernel/core/core.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.9/core"
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
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC9jb3JlLjAuMS45LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2NvcmUvX19zb3VyY2VzL2NvcmUvYmV5b25kLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2NvcmUvX19zb3VyY2VzL2NvcmUvbGFuZ3VhZ2VzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2NvcmUvX19zb3VyY2VzL2NvcmUvdXRpbHMvZXZlbnRzL2V2ZW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9jb3JlL19fc291cmNlcy9jb3JlL3V0aWxzL2V2ZW50cy90eXBlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9jb3JlL19fc291cmNlcy9jb3JlL3V0aWxzL2V4ZWN1dGlvbi1jb250cm9sL2NhbmNlbGxhdGlvbi10b2tlbi9jYW5jZWxsYXRpb24tdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvY29yZS9fX3NvdXJjZXMvY29yZS91dGlscy9leGVjdXRpb24tY29udHJvbC9zaW5nbGUtY2FsbC9zaW5nbGUtY2FsbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9jb3JlL19fc291cmNlcy9jb3JlL3V0aWxzL3BlbmRpbmctcHJvbWlzZS9wZW5kaW5nLXByb21pc2UudHMiXSwibmFtZXMiOlsiY29yZV8wXzFfOV9leHBvcnRzIiwiX19leHBvcnQiLCJDYW5jZWxsYXRpb25Ub2tlbiIsIkV2ZW50cyIsIkxhbmd1YWdlcyIsIkxpc3RlbmVyRnVuY3Rpb24iLCJQZW5kaW5nUHJvbWlzZSIsIlNpbmdsZUNhbGwiLCJfX2JleW9uZF9wa2ciLCJiZXlvbmQiLCJobXIiLCJsYW5ndWFnZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX2xhbmd1YWdlcyIsInJlcXVpcmUyIiwiQmV5b25kIiwiaW1wb3J0IiwicmVzb3VyY2UiLCJ2ZXJzaW9uIiwiYmltcG9ydCIsImJleW9uZDIiLCJnbG9iYWxUaGlzIiwiX2V2ZW50cyIsIkxhbmd1YWdlczIiLCJwcm9qZWN0Iiwic3BlY3MiLCJzdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwic3VwcG9ydGVkIiwiZGVmYXVsdCIsImN1cnJlbnQiLCJyZXNvbHZlIiwicmVhZHkiLCJQcm9taXNlIiwiZmV0Y2hlZCIsImNvbnN0cnVjdG9yIiwidGhlbiIsImNvbmZpZyIsInNldHVwIiwiY29uZmlndXJlIiwiI2NvbmZpZ3VyZSIsInZhbHVlIiwibGVuZ3RoIiwiY29uc29sZSIsIndhcm4iLCJoYXMiLCJsb2ciLCJwcmV2aW91cyIsInRyaWdnZXIiLCJzZXRJdGVtIiwiI3NldHVwIiwiZGVmIiwiQXJyYXkiLCJwdXNoIiwiU2V0IiwiY29uZmlndXJlZCIsImdldEl0ZW0iLCJkZXZpY2UiLCJsb2NhdGlvbiIsIm5hdmlnYXRvciIsImxhbmd1YWdlIiwic3BsaXQiLCJsYW5ndWFnZXMyIiwiX19hcHBfcGFja2FnZSIsInNwZWNpZmllciIsIkV2ZW50czIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJkZXN0cm95ZWQiLCJFcnJvciIsImJpbmQiLCJldmVudCIsImxpc3RlbmVyIiwicHJpb3JpdHkiLCJvbiIsInVuYmluZCIsIm9mZiIsImluY2x1ZGVzIiwibCIsImdldCIsInNldCIsImZvcmNlIiwiZGVsZXRlIiwiZSIsImZpbHRlcmVkIiwiZmlsdGVyIiwiaXRlbSIsInJlc3QiLCJuYW1lIiwiYXJncyIsImFyZ3VtZW50cyIsInNoaWZ0Iiwic29ydCIsImEiLCJiIiwiYXN5bmMiLCJwcm9taXNlcyIsImFsbCIsImNhbGwiLCJjYXRjaCIsImV4YyIsImVycm9yIiwic3RhY2siLCJkZXN0cm95IiwiY2xlYXIiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIkNhbmNlbGxhdGlvblRva2VuMiIsImlkIiwicmVzZXQiLCJjaGVjayIsIlNpbmdsZUNhbGwyIiwidGFyZ2V0IiwicHJvcGVydHlLZXkiLCJkZXNjcmlwdG9yIiwib3JpZ2luYWxNZXRob2QiLCJXZWFrTWFwIiwicHJvbWlzZSIsImFwcGx5IiwiY2xlYW4iLCJQZW5kaW5nUHJvbWlzZTIiLCJyZWplY3QiLCJleGVjdXRvciIsIkZ1bmN0aW9uIiwicHJvY2VzcyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQWQsa0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUEsSUFBQWUsVUFBQSxHQUFBQyxRQUFBO0lBSU0sTUFBT0MsTUFBQSxDQUFNO01BS2YsSUFBSU4sVUFBQSxFQUFTO1FBQ1QsT0FBT0ksVUFBQSxDQUFBSixTQUFBO01BQ1g7TUFVQSxNQUFNTyxPQUFPQyxRQUFBLEVBQWtCQyxPQUFBLEVBQWU7UUFDMUMsT0FBTyxNQUFNQyxPQUFBLENBQVFGLFFBQUEsRUFBVUMsT0FBTztNQUMxQzs7SUFDSFAsT0FBQSxDQUFBSSxN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