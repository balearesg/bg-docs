System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/backend","0.1.9"]]);
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

// .beyond/uimport/@beyond-js/backend/client.0.1.9.js
var client_0_1_9_exports = {};
__export(client_0_1_9_exports, {
  ActionsBridge: () => ActionsBridge,
  Backend: () => Backend,
  __beyond_pkg: () => __beyond_pkg,
  backends: () => backends,
  hmr: () => hmr
});
module.exports = __toCommonJS(client_0_1_9_exports);

// node_modules/@beyond-js/backend/client/client.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/backend@0.1.7/client"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./action/bridge", {
  hash: 1745530134,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ActionsBridge = void 0;
    var _ = require2("./");
    var _backends = require2("../backends");
    class ActionsBridge2 {
      #distribution;
      #bundle;
      #pkg;
      #backend;
      get backend() {
        return _backends.backends.get(this.#pkg);
      }
      constructor(distribution, bundle) {
        this.#distribution = distribution;
        this.#bundle = bundle.specifier;
        this.#pkg = bundle.module.pkg;
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
  hash: 501662521,
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
          const onError = error => {
            this.#executed = true;
            this.#executing = false;
            clearTimeout(this.#timer);
            this.#promise.reject(new Error("Socket disconnected"));
          };
          socket.on(this.#channel, onresponse);
          socket.on("disconnect", onError);
          socket.on("connect_error", onError);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2JhY2tlbmQvY2xpZW50LjAuMS45LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9hY3Rpb24vYnJpZGdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9hY3Rpb24vZXhlY3V0aW9uLWVycm9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9hY3Rpb24vaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2JhY2tlbmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9iYWNrZW5kL2NsaWVudC9fX3NvdXJjZXMvY2xpZW50L2JhY2tlbmRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9pby50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2JhY2tlbmQvY2xpZW50L19fc291cmNlcy9jbGllbnQvc29ja2V0L2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvYmFja2VuZC9jbGllbnQvX19zb3VyY2VzL2NsaWVudC9zb2NrZXQvaW5pdGlhdG9yLnRzIl0sIm5hbWVzIjpbImNsaWVudF8wXzFfOV9leHBvcnRzIiwiX19leHBvcnQiLCJBY3Rpb25zQnJpZGdlIiwiQmFja2VuZCIsIl9fYmV5b25kX3BrZyIsImJhY2tlbmRzIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl8iLCJyZXF1aXJlMiIsIl9iYWNrZW5kcyIsIkFjdGlvbnNCcmlkZ2UyIiwiZGlzdHJpYnV0aW9uIiwiYnVuZGxlIiwicGtnIiwiYmFja2VuZCIsImdldCIsImNvbnN0cnVjdG9yIiwic3BlY2lmaWVyIiwiZXhlY3V0ZSIsImFjdGlvbiIsInBhcmFtcyIsImEiLCJkZWZhdWx0IiwiRXhlY3V0aW9uRXJyb3IiLCJtZXNzYWdlIiwic3RhY2siLCJfY29yZSIsIl9leGVjdXRpb25FcnJvciIsImF1dG9pbmNyZW1lbnQiLCJfZGVmYXVsdCIsIkV2ZW50cyIsInJlcXVlc3QiLCJtb2R1bGUyIiwiaWQiLCJzcGxpdCIsInBvcCIsImpvaW4iLCJjaGFubmVsIiwiZXhlY3V0ZWQiLCJleGVjdXRpbmciLCJlcnJvciIsInRpbWVyIiwiYXR0ZW1wdHMiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJzZW5kIiwic29ja2V0IiwidHJpZ2dlciIsImVtaXQiLCJleGMiLCJyZWplY3QiLCJFcnJvciIsIm9ucmVzcG9uc2UiLCJyZXNwb25zZSIsImNsZWFyVGltZW91dCIsIm9mZiIsInNvdXJjZSIsInByb2Nlc3NpbmdUaW1lIiwicmVzb2x2ZSIsIm9uRXJyb3IiLCJvbiIsIl9pbyIsIl9zb2NrZXQiLCJCYWNrZW5kMiIsImhvc3QiLCJsb2NhbCIsImlvIiwiU2VydmljZUlPQ29uZmlndXJhdGlvbiIsIl9iYWNrZW5kIiwiYmFja2VuZHMyIiwiaG9zdHMiLCJNYXAiLCJyZWdpc3RlciIsImhhcyIsInNldCIsImNvbmZpZyIsImJpbXBvcnQiLCJjb25zb2xlIiwibG9nIiwicXVlcnlzdHJpbmciLCJfaW5pdGlhdG9yIiwiZGVmYXVsdF8xIiwiaW5pdGlhdG9yIiwiY2hlY2siLCJxdWVyeSIsInRyYW5zcG9ydHMiLCJfX2RlY29yYXRlIiwiU2luZ2xlQ2FsbCIsInByb3RvdHlwZSIsImluaXRpYWxpc2UiLCIjaW5pdGlhbGlzZSIsImxhdW5jaGVyIiwibGF1bmNoZXJzIiwic3RhdHVzIiwic3RhcnQiLCJQcm9taXNlIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUMsS0FBSyxDQUFBeEIsS0FBQSxFQUFRO1FBRWxCLE1BQU07VUFBQ3BELEdBQUE7VUFBS29EO1FBQUssSUFBSSxLQUFLLENBQUFuRCxPQUFBO1FBQzFCLE1BQU1tQixFQUFBLEdBQUssR0FBR3BCLEdBQUEsSUFBT29ELEtBQUE7UUFDckIsTUFBTTBCLFFBQUEsR0FBVyxLQUFLLENBQUExQixLQUFBLENBQU8yQixTQUFBLENBQVU3RSxHQUFBLENBQUlrQixFQUFFO1FBQzdDLE1BQU00RCxNQUFBLEdBQVMsTUFBTUYsUUFBQSxDQUFTRSxNQUFBO1FBQzlCLElBQUlBLE1BQUEsS0FBVyxXQUFXO1FBRTFCLE1BQU1GLFFBQUEsQ0FBU0csS0FBQSxDQUFLO1FBQ3BCLE1BQU0sSUFBSUMsT0FBQSxDQUFRckMsT0FBQSxJQUFXc0MsVUFBQSxDQUFXdEMsT0FBQSxFQUFTLEdBQUksQ0FBQztNQUMxRDs7SUFDSHJELE9BQUEsQ0FBQWlCLE9BQUEsR0FBQU8sUUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=