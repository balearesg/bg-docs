System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.7"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = /* @__PURE__ */(cache => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0);

// .beyond/uimport/@beyond-js/kernel/bundle.0.1.7.js
var bundle_0_1_7_exports = {};
__export(bundle_0_1_7_exports, {
  Bundle: () => Bundle,
  Events: () => Events,
  IBundleSpecs: () => IBundleSpecs,
  IExportsDescriptor: () => IExportsDescriptor,
  IMCreators: () => IMCreators,
  IMSpecs: () => IMSpecs,
  ListenerFunction: () => ListenerFunction,
  Module: () => Module,
  Package: () => Package,
  bimport: () => bimport,
  brequire: () => brequire,
  instances: () => instances
});

// node_modules/@beyond-js/kernel/bundle/bundle.browser.mjs
var __pkg = {
  exports: {}
};
var ims = /* @__PURE__ */new Map();
ims.set("./base/index", {
  hash: 1936310117,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondPackage = void 0;
    exports.resolve = resolve;
    function resolve(source, id) {
      if (!id.startsWith(".")) throw new Error(`Module id must be a relative resource "${id}"`);
      const split = {};
      split.source = source.split("/");
      split.source.pop();
      split.target = (id.startsWith("./") ? id.slice(2) : id).split("../");
      while (split.target[0] === "" && split.target.length > 1) {
        split.target.shift();
        split.source.pop();
      }
      return split.source.join("/") + "/" + split.target.join("/");
    }
    class BeyondPackage {
      #ims;
      #cached = /* @__PURE__ */new Map();
      #exports;
      constructor(exports2) {
        this.#exports = exports2;
      }
      initialise(ims2) {
        this.#ims = ims2;
        this.#exports.process((id, source) => this.require(id, source), {});
      }
      require(id, source) {
        id = source ? resolve(source, id) : id;
        const module2 = (() => {
          if (this.#ims.has(id)) return id;
          return id.endsWith("/") ? `${id}index` : `${id}/index`;
        })();
        if (this.#cached.has(module2)) return this.#cached.get(module2);
        if (!this.#ims.has(module2)) throw new Error(`Internal module "${id}" not found`);
        const fn = this.#ims.get(module2).creator;
        const require3 = required => this.require(required, module2);
        const exports2 = {};
        fn(require3, exports2);
        this.#cached.set(module2, exports2);
        return exports2;
      }
    }
    exports.BeyondPackage = BeyondPackage;
  }
});
ims.set("./bimport/bimport", {
  hash: 1563705995,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.bimport = bimport2;
    require2("./brequire");
    function bimport2(resource, version) {
      if (bimport2.mode === "amd") {
        return new Promise((resolve, reject) => {
          if (typeof resource !== "string") throw "Invalid module parameter";
          resource = resource.endsWith(".js") ? resource.slice(0, resource.length - 3) : resource;
          const error = new Error(`Error loading or processing module "${resource}"`);
          amd_require([resource], returned => resolve(returned), exc => {
            console.error(`Error loading resource "${resource}".`);
            console.log(exc.stack);
            reject(error);
          });
        });
      } else if (bimport2.mode === "sjs") {
        return globalThis.System.import(resource + (version ? `?version=${version}` : ""));
      } else {
        return import(resource + (version ? `?version=${version}` : ""));
      }
    }
    bimport2.mode = (() => {
      if (typeof amd_require === "function") return "amd";
      const {
        System
      } = globalThis;
      if (typeof System === "object" && typeof System.import === "function") return "sjs";
      return "esm";
    })();
    const appDependencies = (() => {
      const dependencies = globalThis.__app_package?.dependencies;
      return new Map(dependencies);
    })();
    bimport2.resolve = (specifier, dependencies) => {
      if (/^https?:\/\//.test(specifier)) return specifier;
      const split = specifier.split("/");
      const pkg = split[0].startsWith("@") ? `${split.shift()}/${split.shift()}` : split.shift();
      const version = (() => {
        if (dependencies.has(pkg)) return dependencies.get(pkg);
        if (appDependencies.has(pkg)) return appDependencies.get(pkg);
      })();
      if (!version) return specifier;
      const subpath = split.join("/");
      return `${pkg}@${version}` + (subpath ? `/${subpath}` : "");
    };
  }
});
ims.set("./bimport/brequire", {
  hash: 596501557,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.brequire = brequire2;
    var _instances = require2("../package/instances");
    function brequire2(specifier) {
      const split = specifier.split("/");
      const pkg = split[0].startsWith("@") ? `${split.shift()}/${split.shift()}` : split.shift();
      const subpath = split.join("/");
      const found = [..._instances.default].find(([vspecifier]) => {
        if (!vspecifier.startsWith(`${pkg}@`)) return;
        const split2 = vspecifier.slice(pkg.length).split("/");
        split2.shift();
        return subpath === split2.join("/");
      });
      if (!found) return;
      !found[1].initialised && found[1].initialise();
      return found[1].exports.values;
    }
  }
});
ims.set("./bimport/index", {
  hash: 478135557,
  creator: function (require2, exports) {
    "use strict";

    var _bimport = require2("./bimport");
    var _brequire = require2("./brequire");
    globalThis.bimport === void 0 && (globalThis.bimport = _bimport.bimport);
    globalThis.brequire === void 0 && (globalThis.brequire = _brequire.brequire);
  }
});
ims.set("./bimport/requirejs", {
  hash: 2243979856,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./bundle", {
  hash: 2786310194,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Bundle = void 0;
    var _package = require2("./package");
    var _instances = require2("./instances");
    var _module = require2("./module");
    require2("./bimport");
    class Bundle2 extends Map {
      #type;
      get type() {
        return this.#type;
      }
      #name;
      get name() {
        return this.#name;
      }
      #vspecifier;
      get vspecifier() {
        return this.#vspecifier;
      }
      #specifier;
      get specifier() {
        return this.#specifier;
      }
      #module;
      get module() {
        return this.#module;
      }
      #uri;
      get uri() {
        return this.#uri;
      }
      constructor(specs, uri) {
        super();
        if (typeof specs !== "object") throw new Error("Bundle creation specification is not defined");
        const name = this.#name = specs.name ? specs.name : specs.type;
        if (!name) throw new Error("Invalid bundle creation specification");
        this.#module = new _module.Module(specs.module);
        this.#uri = uri;
        this.#type = specs.type;
        const {
          multibundle,
          vspecifier,
          specifier
        } = this.#module;
        this.#vspecifier = multibundle ? `${vspecifier}.${name}` : vspecifier;
        this.#specifier = multibundle ? `${specifier}.${name}` : specifier;
        _instances.instances.register(this);
      }
      package(language) {
        if (language && language.length !== 2) throw new Error(`Language "${language}" is invalid`);
        language = !language ? "" : language;
        if (this.has(language)) return this.get(language);
        const pkg = new _package.Package(this, language);
        this.set(language, pkg);
        return pkg;
      }
    }
    exports.Bundle = Bundle2;
  }
});
ims.set("./events/index", {
  hash: 1779469688,
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
  }
});
ims.set("./events/types", {
  hash: 1632705009,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./instances", {
  hash: 1214802090,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.instances = void 0;
    const instances2 = new class extends Map {
      register(bundle) {
        this.set(bundle.vspecifier, bundle);
      }
    }();
    exports.instances = instances2;
  }
});
ims.set("./module/index", {
  hash: 702878917,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Module = void 0;
    class Module2 {
      #pkg;
      get pkg() {
        return this.#pkg;
      }
      #vspecifier;
      get vspecifier() {
        return this.#vspecifier;
      }
      #specifier;
      get specifier() {
        return this.#specifier;
      }
      #version;
      get version() {
        return this.#version;
      }
      #subpath;
      get subpath() {
        return this.#subpath;
      }
      #multibundle;
      get multibundle() {
        return this.#multibundle;
      }
      constructor(specs) {
        this.#vspecifier = specs.vspecifier;
        this.#multibundle = specs.multibundle;
        const split = specs.vspecifier.split("/");
        const scope = split[0].startsWith("@") ? split.shift() : void 0;
        const [name, version] = split.shift().split("@");
        this.#subpath = split.join("/");
        this.#pkg = scope ? `${scope}/${name}` : name;
        this.#version = version;
        this.#specifier = this.#pkg + (this.#subpath ? `/${this.#subpath}` : "");
      }
      async execute(action, params) {
        if (typeof globalThis.beyond !== "object") return;
        const {
          backends
        } = await beyond.import("@beyond-js/backend/client");
        return await backends.execute(this.#pkg, "legacy", this.#subpath, action, params);
      }
    }
    exports.Module = Module2;
  }
});
ims.set("./package/dependencies", {
  hash: 3724344928,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default extends Map {
      #pkg;
      constructor(pkg) {
        super();
        this.#pkg = pkg;
      }
      update(deps) {
        this.clear();
        deps?.forEach(([specifier, dependency]) => {
          if (!dependency) {
            throw new Error(`Dependency "${specifier}" not found on package "${this.#pkg.vspecifier}"`);
          }
          const {
            __beyond_transversal: transversal
          } = dependency;
          dependency = transversal ? transversal.bundles.get(specifier) : dependency;
          this.set(specifier, dependency);
        });
      }
    }
    exports.default = _default;
  }
});
ims.set("./package/exports", {
  hash: 3682924180,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _trace = require2("./ims/require/trace");
    class _default {
      #require;
      #values = {};
      get values() {
        return this.#values;
      }
      descriptor;
      process;
      constructor(require3) {
        this.#require = require3;
        this.#values.hmr = {
          on: (event, listener) => require3.pkg.hmr.on(event, listener),
          off: (event, listener) => require3.pkg.hmr.off(event, listener)
        };
        this.#values.__beyond_pkg = this.#require.pkg;
      }
      set(key, value) {
        this.#values[key] = value;
      }
      update() {
        const require3 = id => {
          const trace = new _trace.Trace();
          trace.register("exports.update", id);
          return this.#require.solve(id, trace);
        };
        this.process?.({
          require: require3
        });
        const reserved = ["__beyond_pkg", "hmr"];
        Object.keys(this.#values).forEach(p => !reserved.includes(p) && delete this.#values[p]);
        this.descriptor?.forEach(({
          im,
          from,
          name
        }) => {
          const trace = new _trace.Trace();
          this.#values[name] = this.#require.solve(im, trace)[from];
        });
      }
    }
    exports.default = _default;
  }
});
ims.set("./package/ims/exports", {
  hash: 3697874831,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.IMExports = void 0;
    class IMExports {
      constructor(im, bexports) {
        return new Proxy(this, {
          set: (self, name, value) => {
            self[name] = value;
            const prop = bexports.descriptor?.find(({
              im: id,
              from
            }) => {
              return im.id === id && name === from;
            });
            prop && bexports.set(prop.name, value);
            prop && bexports.process?.({
              prop: prop.name,
              value
            });
            return true;
          }
        });
      }
    }
    exports.IMExports = IMExports;
  }
});
ims.set("./package/ims/im", {
  hash: 2241059934,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.InternalModule = void 0;
    var _trace = require2("./require/trace");
    var _exports = require2("./exports");
    class InternalModule {
      #pkg;
      get package() {
        return this.#pkg;
      }
      #id;
      get id() {
        return this.#id;
      }
      #hash;
      get hash() {
        return this.#hash;
      }
      #require;
      #exports;
      #creator;
      #creating = false;
      #created = false;
      get created() {
        return this.#created;
      }
      #create = trace => {
        if (this.#created) throw new Error(`Internal module "${this.#id}" already created`);
        if (this.#creating) throw new Error(`Cyclical import found on internal module "${this.#id}"`);
        this.#creating = true;
        const require3 = id => this.#require.solve(id, trace, this);
        Object.keys(this.#exports).forEach(key => delete this.#exports[key]);
        this.#creator(require3, this.#exports);
        this.#created = true;
        this.#creating = false;
      };
      require(trace, source) {
        if (!this.#created) {
          source && trace.register(source.id, this.#id);
          this.#create(trace);
          trace.pop();
        }
        return this.#exports;
      }
      initialise() {
        if (this.#created) return;
        const trace = new _trace.Trace();
        trace.register("initialisation", this.#id);
        this.#create(trace);
      }
      update(creator, hash) {
        this.#created = false;
        this.#creator = creator;
        this.#hash = hash;
      }
      constructor(pkg, id, hash, creator, require3) {
        this.#pkg = pkg;
        this.#id = id;
        this.#hash = hash;
        this.#creator = creator;
        this.#require = require3;
        this.#exports = new _exports.IMExports(this, pkg.exports);
      }
    }
    exports.InternalModule = InternalModule;
  }
});
ims.set("./package/ims/index", {
  hash: 993201032,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.InternalModules = void 0;
    var _im = require2("./im");
    class InternalModules {
      #pkg;
      #ims = /* @__PURE__ */new Map();
      #require;
      constructor(pkg) {
        this.#pkg = pkg;
      }
      set _require(value) {
        this.#require = value;
      }
      #register = (id, hash, creator) => {
        if (this.#ims.has(id)) throw new Error(`IM "${id}" already registered`);
        const im = new _im.InternalModule(this.#pkg, id, hash, creator, this.#require);
        this.#ims.set(im.id, im);
      };
      register(ims2) {
        ims2.forEach(({
          creator,
          hash
        }, id) => this.#register(id, hash, creator));
      }
      require(id, trace, source) {
        const module2 = (() => {
          if (this.#ims.has(id)) return id;
          return id.endsWith("/") ? `${id}index` : `${id}/index`;
        })();
        if (!this.#ims.has(module2)) {
          throw new Error(`Internal module "${id}" not found`);
        }
        const im = this.#ims.get(module2);
        return im.require(trace, source);
      }
      initialise() {
        this.#ims.forEach(im => im.initialise());
      }
      update(ims2) {
        ims2.forEach(({
          creator,
          hash
        }, id) => {
          if (!this.#ims.has(id)) {
            this.#register(id, hash, creator);
            return;
          }
          const im = this.#ims.get(id);
          if (im.hash === hash) return;
          im.update(creator, hash);
          this.#pkg.hmr.trigger(`${id}:change`);
        });
      }
    }
    exports.InternalModules = InternalModules;
  }
});
ims.set("./package/ims/require/index", {
  hash: 12273943,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Require = void 0;
    var _base = require2("../../../base");
    class Require {
      #pkg;
      get pkg() {
        return this.#pkg;
      }
      constructor(pkg) {
        this.#pkg = pkg;
      }
      solve(specifier, trace, im) {
        if (specifier.startsWith(".")) {
          specifier = im ? (0, _base.resolve)(im.id, specifier) : specifier;
          return this.#pkg.ims.require(specifier, trace, im);
        }
        if (specifier === "beyond_context") {
          const {
            bundle
          } = this.#pkg;
          return {
            module: bundle.module,
            bundle,
            pkg: this.#pkg
          };
        }
        if (specifier === "@beyond-js/kernel/bundle") {
          const {
            Bundle: Bundle2
          } = require2("../../../bundle");
          const {
            instances: instances2
          } = require2("../../../instances");
          return {
            Bundle: Bundle2,
            instances: instances2
          };
        }
        const {
          dependencies
        } = this.#pkg;
        if (dependencies.has(specifier)) {
          const {
            __beyond_pkg: pkg
          } = dependencies.get(specifier);
          typeof pkg === "object" && !pkg.initialised && pkg.initialise();
          return dependencies.get(specifier);
        }
        const keys = JSON.stringify([...dependencies.keys()]);
        throw new Error(`Bundle "${specifier}" is not registered as a dependency: ${keys}`);
      }
    }
    exports.Require = Require;
  }
});
ims.set("./package/ims/require/trace", {
  hash: 1932027471,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Trace = void 0;
    class Trace extends Array {
      has = id => this.find(rt => rt.id === id);
      register(source, id) {
        if (this.has(id)) {
          let traced = "";
          this.forEach(({
            id: id2,
            source: source2
          }) => {
            const s = ["initialisation", "exports.update"].includes(source2) ? "Cycle initiates with source" : `then "${source2}" requires`;
            traced += `	${s} "${id2}"
`;
          });
          traced += `	that finally requires "${id}" again.
`;
          throw new Error(`Recursive module load found.
Internal module "${source}" is requiring another internal module that was previously required: "${id}"
Trace of required modules:
${traced}`);
        }
        this.push({
          id,
          source
        });
      }
    }
    exports.Trace = Trace;
  }
});
ims.set("./package/index", {
  hash: 458850112,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Package = void 0;
    var _ims = require2("./ims");
    var _require = require2("./ims/require");
    var _exports = require2("./exports");
    var _dependencies = require2("./dependencies");
    var _instances = require2("./instances");
    var _events = require2("../events");
    class Package2 {
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #language;
      get language() {
        return this.#language;
      }
      #vspecifier;
      get vspecifier() {
        return this.#vspecifier;
      }
      #specifier;
      get specifier() {
        return this.#specifier;
      }
      #require;
      #ims;
      get ims() {
        return this.#ims;
      }
      #exports;
      get exports() {
        return this.#exports;
      }
      #dependencies = new _dependencies.default(this);
      get dependencies() {
        return this.#dependencies;
      }
      #hmr = new _events.Events();
      get hmr() {
        return this.#hmr;
      }
      constructor(bundle, language) {
        this.#bundle = bundle;
        this.#language = language ? language : "";
        this.#vspecifier = language ? `${bundle.vspecifier}.${language}` : bundle.vspecifier;
        this.#specifier = language ? `${bundle.specifier}.${language}` : bundle.specifier;
        this.#ims = new _ims.InternalModules(this);
        this.#require = new _require.Require(this);
        this.#ims._require = this.#require;
        this.#exports = new _exports.default(this.#require);
        _instances.default.register(this);
      }
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      initialise(ims2) {
        if (this.#initialised) throw new Error("Package already initialised");
        this.#initialised = true;
        ims2 && this.#ims.register(ims2);
        this.exports.update();
        this.#ims.initialise();
      }
      update(ims2) {
        this.#ims.update(ims2);
        this.exports.update();
        this.#ims.initialise();
        this.#hmr.trigger("change");
      }
    }
    exports.Package = Package2;
  }
});
ims.set("./package/instances", {
  hash: 2745122839,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = new class extends Map {
      register(pkg) {
        this.set(pkg.vspecifier, pkg);
      }
    }();
    exports.default = _default;
  }
});
__pkg.exports.descriptor = [{
  "im": "./bimport/bimport",
  "from": "bimport",
  "name": "bimport"
}, {
  "im": "./bimport/brequire",
  "from": "brequire",
  "name": "brequire"
}, {
  "im": "./bundle",
  "from": "IBundleSpecs",
  "name": "IBundleSpecs"
}, {
  "im": "./bundle",
  "from": "Bundle",
  "name": "Bundle"
}, {
  "im": "./events/index",
  "from": "Events",
  "name": "Events"
}, {
  "im": "./events/types",
  "from": "ListenerFunction",
  "name": "ListenerFunction"
}, {
  "im": "./instances",
  "from": "instances",
  "name": "instances"
}, {
  "im": "./module/index",
  "from": "Module",
  "name": "Module"
}, {
  "im": "./package/exports",
  "from": "IExportsDescriptor",
  "name": "IExportsDescriptor"
}, {
  "im": "./package/ims/im",
  "from": "IMSpecs",
  "name": "IMSpecs"
}, {
  "im": "./package/ims/index",
  "from": "IMCreators",
  "name": "IMCreators"
}, {
  "im": "./package/index",
  "from": "Package",
  "name": "Package"
}];
var bimport, brequire, IBundleSpecs, Bundle, Events, ListenerFunction, instances, Module, IExportsDescriptor, IMSpecs, IMCreators, Package;
__pkg.exports.process = function (require2) {
  bimport = require2("./bimport/bimport").bimport;
  brequire = require2("./bimport/brequire").brequire;
  IBundleSpecs = require2("./bundle").IBundleSpecs;
  Bundle = require2("./bundle").Bundle;
  Events = require2("./events/index").Events;
  ListenerFunction = require2("./events/types").ListenerFunction;
  instances = require2("./instances").instances;
  Module = require2("./module/index").Module;
  IExportsDescriptor = require2("./package/exports").IExportsDescriptor;
  IMSpecs = require2("./package/ims/im").IMSpecs;
  IMCreators = require2("./package/ims/index").IMCreators;
  Package = require2("./package/index").Package;
};
var __bp = {};
ims.get("./base/index").creator(() => 0, __bp);
__pkg = new __bp.BeyondPackage(__pkg.exports);
__pkg.initialise(ims);
module.exports = __toCommonJS(bundle_0_1_7_exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUuMC4xLjcuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvYmFzZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9iaW1wb3J0L2JpbXBvcnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvYmltcG9ydC9icmVxdWlyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9iaW1wb3J0L2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL2JpbXBvcnQvcmVxdWlyZWpzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL2J1bmRsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9ldmVudHMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvZXZlbnRzL3R5cGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL2luc3RhbmNlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9tb2R1bGUvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9kZXBlbmRlbmNpZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9leHBvcnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL3BhY2thZ2UvaW1zL2V4cG9ydHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbXMvaW0udHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbXMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbXMvcmVxdWlyZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9wYWNrYWdlL2ltcy9yZXF1aXJlL3RyYWNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL3BhY2thZ2UvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbnN0YW5jZXMudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJCdW5kbGUiLCJFdmVudHMiLCJJQnVuZGxlU3BlY3MiLCJJRXhwb3J0c0Rlc2NyaXB0b3IiLCJJTUNyZWF0b3JzIiwiSU1TcGVjcyIsIkxpc3RlbmVyRnVuY3Rpb24iLCJNb2R1bGUiLCJQYWNrYWdlIiwiYmltcG9ydCIsImJyZXF1aXJlIiwiaW5zdGFuY2VzIiwic291cmNlIiwiaWQiLCJzdGFydHNXaXRoIiwiRXJyb3IiLCJzcGxpdCIsInBvcCIsInRhcmdldCIsInNsaWNlIiwibGVuZ3RoIiwic2hpZnQiLCJqb2luIiwiQmV5b25kUGFja2FnZSIsIk1hcCIsImNvbnN0cnVjdG9yIiwiZXhwb3J0czIiLCJpbml0aWFsaXNlIiwiaW1zMiIsInByb2Nlc3MiLCJyZXF1aXJlIiwicmVzb2x2ZSIsIm1vZHVsZTIiLCJoYXMiLCJlbmRzV2l0aCIsImdldCIsImZuIiwiY3JlYXRvciIsInJlcXVpcmUzIiwicmVxdWlyZWQiLCJzZXQiLCJleHBvcnRzIiwicmVxdWlyZTIiLCJyZXNvdXJjZSIsInZlcnNpb24iLCJiaW1wb3J0MiIsIm1vZGUiLCJQcm9taXNlIiwicmVqZWN0IiwiZXJyb3IiLCJhbWRfcmVxdWlyZSIsInJldHVybmVkIiwiZXhjIiwiY29uc29sZSIsImxvZyIsInN0YWNrIiwiZ2xvYmFsVGhpcyIsIlN5c3RlbSIsImltcG9ydCIsImFwcERlcGVuZGVuY2llcyIsImRlcGVuZGVuY2llcyIsIl9fYXBwX3BhY2thZ2UiLCJzcGVjaWZpZXIiLCJ0ZXN0IiwicGtnIiwic3VicGF0aCIsImZvdW5kIiwiX2luc3RhbmNlcyIsImZpbmQiLCJ2c3BlY2lmaWVyIiwic3BsaXQyIiwiaW5pdGlhbGlzZWQiLCJ2YWx1ZXMiLCJfYmltcG9ydCIsIl9icmVxdWlyZSIsIk9iamVjdCIsInZhbHVlIiwiQnVuZGxlMiIsInR5cGUiLCJuYW1lIiwibW9kdWxlIiwidXJpIiwic3BlY3MiLCJfbW9kdWxlIiwibXVsdGlidW5kbGUiLCJyZWdpc3RlciIsInBhY2thZ2UiLCJsYW5ndWFnZSIsIl9wYWNrYWdlIiwiRXZlbnRzMiIsImRlc3Ryb3llZCIsInN1cHBvcnRlZCIsIkFycmF5IiwiYmluZCIsImV2ZW50IiwibGlzdGVuZXIiLCJwcmlvcml0eSIsIm9uIiwidW5iaW5kIiwib2ZmIiwiaW5jbHVkZXMiLCJsIiwicHVzaCIsImZvcmNlIiwiZGVsZXRlIiwiZSIsImZpbHRlcmVkIiwiZmlsdGVyIiwiaXRlbSIsInRyaWdnZXIiLCJyZXN0IiwiYXJncyIsImFyZ3VtZW50cyIsInNvcnQiLCJhIiwiYiIsImFzeW5jIiwicHJvbWlzZXMiLCJhbGwiLCJjYWxsIiwiY2F0Y2giLCJkZXN0cm95IiwiY2xlYXIiLCJpbnN0YW5jZXMyIiwiYnVuZGxlIiwiTW9kdWxlMiIsInNjb3BlIiwiZXhlY3V0ZSIsImFjdGlvbiIsInBhcmFtcyIsImJleW9uZCIsImJhY2tlbmRzIiwidXBkYXRlIiwiZGVwcyIsImZvckVhY2giLCJkZXBlbmRlbmN5IiwiX19iZXlvbmRfdHJhbnN2ZXJzYWwiLCJ0cmFuc3ZlcnNhbCIsImJ1bmRsZXMiLCJkZXNjcmlwdG9yIiwiaG1yIiwiX19iZXlvbmRfcGtnIiwia2V5IiwidHJhY2UiLCJfdHJhY2UiLCJzb2x2ZSIsInJlc2VydmVkIiwia2V5cyIsInAiLCJpbSIsImZyb20iLCJJTUV4cG9ydHMiLCJiZXhwb3J0cyIsIlByb3h5Iiwic2VsZiIsInByb3AiLCJJbnRlcm5hbE1vZHVsZSIsImhhc2giLCJjcmVhdGVkIiwiX2V4cG9ydHMiLCJJbnRlcm5hbE1vZHVsZXMiLCJfcmVxdWlyZSIsIl9pbSIsIlJlcXVpcmUiLCJpbXMiLCJKU09OIiwic3RyaW5naWZ5IiwiVHJhY2UiLCJydCIsInRyYWNlZCIsInMiLCJzb3VyY2UyIiwiaWQyIiwiUGFja2FnZTIiLCJfZGVwZW5kZW5jaWVzIiwiX2V2ZW50cyIsIl9pbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNTTSxpQkFBa0JDLFFBQWdCQyxJQUFVO01BQzlDLElBQUksQ0FBQ0EsR0FBR0MsV0FBVyxHQUFHLEdBQUcsTUFBTSxJQUFJQyxNQUFNLDBDQUEwQ0YsS0FBSztNQU94RixNQUFNRyxRQUFlO01BQ3JCQSxNQUFNSixTQUFTQSxPQUFPSSxNQUFNLEdB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R0FBR3FDLE9BQU92RCxjQUFja0IsYUFBYXFDLE9BQU92RDtRQUMxRSxrQkFBa0JrQixXQUFXLEdBQUdxQyxPQUFPOUQsYUFBYXlCLGFBQWFxQyxPQUFPOUQ7UUFFeEUsWUFBWSxJQUFJa0gscUJBQWdCLElBQUk7UUFDcEMsZ0JBQWdCLElBQUlmLGlCQUFRLElBQUk7UUFDaEMsVUFBVUEsV0FBVztRQUNyQixnQkFBZ0IsSUFBSUYsaUJBQVEsYUFBYTtRQUV6QzVGLG1CQUFVa0IsU0FBUyxJQUFJO01BQzNCO01BRUEsZUFBZTtVQUNYZCxjQUFXO1FBQ1gsT0FBTztNQUNYO01BRUE1QyxXQUFXQyxNQUFnQjtRQUN2QixJQUFJLG1CQUFtQixNQUFNLElBQUliLE1BQU0sNkJBQTZCO1FBQ3BFLG9CQUFvQjtRQUNwQmEsUUFBTyxVQUFVeUQsU0FBU3pELElBQUc7UUFDN0IsS0FBS2EsUUFBUTJGLFFBQU07UUFDbkIsVUFBVXpHLFlBQVU7TUFDeEI7TUFFQXlHLE9BQU94RyxNQUFlO1FBQ2xCLFVBQVV3RyxPQUFPeEcsSUFBRztRQUNwQixLQUFLYSxRQUFRMkYsUUFBTTtRQUNuQixVQUFVekcsWUFBVTtRQUNwQixVQUFVa0YsUUFBUSxRQUFRO01BQzlCOztJQUNIcEU7Ozs7Ozs7Ozs7OzttQkNyRmMsSUFBSSxjQUFjakIsSUFBRztNQUNoQzZELFNBQVNyQixLQUFZO1FBQ2pCLEtBQUt4QixJQUFJd0IsSUFBSUssWUFBWUwsR0FBRztNQUNoQztPQUNIO0lBQUF2QiIsImZpbGUiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICdAYmV5b25kLWpzL2tlcm5lbC9idW5kbGUnOyIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sInNvdXJjZVJvb3QiOiIvZG9jcy9vdXQifQ==