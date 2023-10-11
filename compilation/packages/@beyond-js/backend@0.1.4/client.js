System.register(["@beyond-js/kernel@0.1.8/bundle","@beyond-js/kernel@0.1.8/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.8"],["@beyond-js/backend","0.1.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.8/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/core', dep)],
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

// .beyond/uimport/temp/@beyond-js/backend/client.0.1.4.js
var client_0_1_4_exports = {};
__export(client_0_1_4_exports, {
  ActionsBridge: () => ActionsBridge,
  Backend: () => Backend,
  __beyond_pkg: () => __beyond_pkg,
  backends: () => backends,
  hmr: () => hmr
});
module.exports = __toCommonJS(client_0_1_4_exports);

// node_modules/@beyond-js/backend/client/client.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.8/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.8/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/backend@0.1.4/client"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./action/bridge", {
  hash: 2081575659,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ActionsBridge = void 0;
    var _ = require2("./");
    class ActionsBridge2 {
      #distribution;
      #bundle;
      #backend;
      constructor(distribution, bundle) {
        this.#distribution = distribution;
        this.#bundle = bundle.specifier;
        this.#backend = `${bundle.module.pkg}/${this.#distribution}`;
      }
      async execute(action, ...params) {
        const a = new _.default(this.#backend, this.#bundle, action, ...params);
        return await a.execute();
      }
    }
    exports.ActionsBridge = ActionsBridge2;
  }
});
ims.set("./action/execution-error", {
  hash: 3368390780,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ExecutionError = void 0;
    const ExecutionError = class {
      #message;
      get message() {
        return this.#message;
      }
      #stack;
      get stack() {
        return this.#stack;
      }
      constructor(message, stack) {
        this.#message = message;
        this.#stack = stack;
      }
    };
    exports.ExecutionError = ExecutionError;
  }
});
ims.set("./action/index", {
  hash: 2047620412,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _backends = require2("../backends");
    var _executionError = require2("./execution-error");
    let autoincrement = 0;
    class _default extends _core.Events {
      #pkg;
      #request;
      #module;
      get module() {
        return this.#module;
      }
      #action;
      get action() {
        return this.#action;
      }
      #params;
      get params() {
        return this.#params;
      }
      constructor(backend, module2, action, ...params) {
        super();
        const id = this.#id;
        const pkg = this.#pkg = (() => {
          const split = backend.split("/");
          split.pop();
          return split.join("/");
        })();
        this.#module = module2;
        this.#action = action;
        this.#params = params;
        this.#request = {
          id,
          pkg,
          module: module2,
          action,
          params
        };
      }
      #id = ++autoincrement;
      get id() {
        return this.#id;
      }
      #channel = `response-v2-${this.#id}`;
      get channel() {
        return this.#channel;
      }
      #executed = false;
      get executed() {
        return this.#executed;
      }
      #executing = false;
      get executing() {
        return this.#executing;
      }
      #error = false;
      get error() {
        return this.#error;
      }
      #timer;
      #attempts = 0;
      #promise = new _core.PendingPromise();
      #send = socket => {
        this.#attempts && this.trigger("retrying", this.#attempts);
        this.#attempts++;
        try {
          socket.emit("rpc-v2", this.#request);
        } catch (exc) {
          this.#executing = false;
          this.#executed = true;
          this.#error = true;
          this.#promise.reject(exc);
        }
      };
      async execute() {
        if (this.#executing || this.#executed) return this.#promise;
        this.#executing = true;
        const backend = await _backends.backends.get(this.#pkg);
        if (!backend) throw new Error(`Project "${this.#pkg}" does not have a backend configured`);
        try {
          const socket = await backend.socket;
          if (!socket) {
            const message = `Error getting socket on "${backend.pkg}" backend. `;
            this.#promise.reject(new Error(message));
            return;
          }
          const onresponse = response => {
            this.#executed = true;
            this.#executing = false;
            clearTimeout(this.#timer);
            socket.off(this.#channel, onresponse);
            const {
              error,
              message,
              source,
              processingTime
            } = response;
            error ? this.#promise.reject(new _executionError.ExecutionError(error.message, error.stack)) : this.#promise.resolve(message);
          };
          socket.on(this.#channel, onresponse);
          this.#send(socket);
        } catch (exc) {
          this.#promise.reject(exc);
          return;
        }
        return this.#promise;
      }
    }
    exports.default = _default;
  }
});
ims.set("./backend", {
  hash: 486330626,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Backend = void 0;
    var _io = require2("./io");
    var _socket = require2("./socket");
    class Backend2 {
      #pkg;
      get pkg() {
        return this.#pkg;
      }
      #host;
      get host() {
        return this.#host;
      }
      #local;
      get local() {
        return this.#local;
      }
      #socket;
      #io = new _io.ServiceIOConfiguration();
      get io() {
        return this.#io;
      }
      constructor(pkg, host, local) {
        this.#pkg = pkg;
        this.#host = host;
        this.#local = local;
        this.#socket = new _socket.default(this);
      }
      get socket() {
        return this.#socket.get();
      }
    }
    exports.Backend = Backend2;
  }
});
ims.set("./backends", {
  hash: 1705909413,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.backends = void 0;
    var _backend = require2("./backend");
    const backends2 = new class {
      #hosts = /* @__PURE__ */new Map();
      register(pkg, host) {
        !this.#hosts.has(pkg) && this.#hosts.set(pkg, new _backend.Backend(pkg, host));
      }
      async get(pkg) {
        if (this.#hosts.has(pkg)) return this.#hosts.get(pkg);
        try {
          const {
            backend: config
          } = (await bimport(`${pkg}/config`)).default;
          if (!config) {
            console.log(`Backend configuration not set on package "${pkg}"`);
            this.#hosts.set(pkg, void 0);
            return;
          }
          const {
            host,
            local
          } = config;
          if (this.#hosts.has(pkg)) return this.#hosts.get(pkg);
          const backend = new _backend.Backend(pkg, host, local);
          this.#hosts.set(pkg, backend);
          return this.#hosts.get(pkg);
        } catch (exc) {
          console.log(`Error importing package "${pkg}" configuration: ${exc.message}`);
          this.#hosts.set(pkg, void 0);
        }
      }
      async execute(pkg, distribution, module2, action, ...params) {
        const a = new (require2("./action").default)(`${pkg}/${distribution}`, module2, action, ...params);
        return await a.execute();
      }
    }();
    exports.backends = backends2;
  }
});
ims.set("./io", {
  hash: 2941830475,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ServiceIOConfiguration = void 0;
    class ServiceIOConfiguration {
      querystring;
    }
    exports.ServiceIOConfiguration = ServiceIOConfiguration;
  }
});
ims.set("./socket/index", {
  hash: 1119353765,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _initiator = require2("./initiator");
    var __decorate = function (decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    class default_1 {
      #backend;
      #initiator;
      #socket;
      constructor(backend) {
        this.#backend = backend;
        this.#initiator = new _initiator.default(backend);
      }
      async get() {
        if (this.#socket) return this.#socket;
        const backend = this.#backend;
        const {
          pkg
        } = backend;
        pkg !== "@beyond-js/local" && (await this.#initiator.check());
        const {
          io
        } = await bimport("socket.io-client");
        let query = backend.io.querystring && (await backend.io.querystring());
        const {
          host
        } = this.#backend;
        return this.#socket = io(host, {
          transports: ["websocket"],
          "query": query
        });
      }
    }
    exports.default = default_1;
    __decorate([_core.SingleCall], default_1.prototype, "get", null);
  }
});
ims.set("./socket/initiator", {
  hash: 4260137755,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class _default {
      #backend;
      #local;
      constructor(backend) {
        this.#backend = backend;
      }
      #promise;
      #initialise = async () => {
        if (this.#promise) {
          await this.#promise;
          return;
        }
        this.#promise = new _core.PendingPromise();
        if (!this.#backend.local || this.#local) return;
        this.#local = (await bimport("@beyond-js/local/main")).local;
        this.#promise.resolve();
      };
      async check() {
        await this.#initialise();
        if (!this.#local) return;
        const {
          pkg,
          local
        } = this.#backend;
        const id = `${pkg}/${local}`;
        const launcher = this.#local.launchers.get(id);
        const status = await launcher.status;
        if (status === "running") return;
        await launcher.start();
        await new Promise(resolve => setTimeout(resolve, 2e3));
      }
    }
    exports.default = _default;
  }
});
__pkg.exports.descriptor = [{
  "im": "./action/bridge",
  "from": "ActionsBridge",
  "name": "ActionsBridge"
}, {
  "im": "./backend",
  "from": "Backend",
  "name": "Backend"
}, {
  "im": "./backends",
  "from": "backends",
  "name": "backends"
}];
var ActionsBridge, Backend, backends;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ActionsBridge") && (ActionsBridge = require2 ? require2("./action/bridge").ActionsBridge : value);
  (require2 || prop === "Backend") && (Backend = require2 ? require2("./backend").Backend : value);
  (require2 || prop === "backends") && (backends = require2 ? require2("./backends").backends : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQuMC4xLjQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2FjdGlvbi9icmlkZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2FjdGlvbi9leGVjdXRpb24tZXJyb3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2FjdGlvbi9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2JhY2tlbmQvY2xpZW50L19fc291cmNlcy9jbGllbnQvYmFja2VuZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2JhY2tlbmQvY2xpZW50L19fc291cmNlcy9jbGllbnQvYmFja2VuZHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2lvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9zb2NrZXQvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L3NvY2tldC9pbml0aWF0b3IudHMiXSwibmFtZXMiOlsiY2xpZW50XzBfMV80X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFjdGlvbnNCcmlkZ2UiLCJCYWNrZW5kIiwiX19iZXlvbmRfcGtnIiwiYmFja2VuZHMiLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiXyIsInJlcXVpcmUyIiwiQWN0aW9uc0JyaWRnZTIiLCJkaXN0cmlidXRpb24iLCJidW5kbGUiLCJiYWNrZW5kIiwiY29uc3RydWN0b3IiLCJzcGVjaWZpZXIiLCJwa2ciLCJleGVjdXRlIiwiYWN0aW9uIiwicGFyYW1zIiwiYSIsImRlZmF1bHQiLCJFeGVjdXRpb25FcnJvciIsIm1lc3NhZ2UiLCJzdGFjayIsIl9jb3JlIiwiX2JhY2tlbmRzIiwiX2V4ZWN1dGlvbkVycm9yIiwiYXV0b2luY3JlbWVudCIsIl9kZWZhdWx0IiwiRXZlbnRzIiwicmVxdWVzdCIsIm1vZHVsZTIiLCJpZCIsInNwbGl0IiwicG9wIiwiam9pbiIsImNoYW5uZWwiLCJleGVjdXRlZCIsImV4ZWN1dGluZyIsImVycm9yIiwidGltZXIiLCJhdHRlbXB0cyIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInNlbmQiLCJzb2NrZXQiLCJ0cmlnZ2VyIiwiZW1pdCIsImV4YyIsInJlamVjdCIsImdldCIsIkVycm9yIiwib25yZXNwb25zZSIsInJlc3BvbnNlIiwiY2xlYXJUaW1lb3V0Iiwib2ZmIiwic291cmNlIiwicHJvY2Vzc2luZ1RpbWUiLCJyZXNvbHZlIiwib24iLCJfaW8iLCJfc29ja2V0IiwiQmFja2VuZDIiLCJob3N0IiwibG9jYWwiLCJpbyIsIlNlcnZpY2VJT0NvbmZpZ3VyYXRpb24iLCJfYmFja2VuZCIsImJhY2tlbmRzMiIsImhvc3RzIiwiTWFwIiwicmVnaXN0ZXIiLCJoYXMiLCJzZXQiLCJjb25maWciLCJiaW1wb3J0IiwiY29uc29sZSIsImxvZyIsInF1ZXJ5c3RyaW5nIiwiX2luaXRpYXRvciIsImRlZmF1bHRfMSIsImluaXRpYXRvciIsImNoZWNrIiwicXVlcnkiLCJ0cmFuc3BvcnRzIiwiX19kZWNvcmF0ZSIsIlNpbmdsZUNhbGwiLCJwcm90b3R5cGUiLCJpbml0aWFsaXNlIiwiI2luaXRpYWxpc2UiLCJsYXVuY2hlciIsImxhdW5jaGVycyIsInN0YXR1cyIsInN0YXJ0IiwiUHJvbWlzZSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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