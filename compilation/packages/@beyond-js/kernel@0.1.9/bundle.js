System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"]]);
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@beyond-js/kernel/bundle.0.1.9.js
var bundle_0_1_9_exports = {};
__export(bundle_0_1_9_exports, {
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
module.exports = __toCommonJS(bundle_0_1_9_exports);

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
  hash: 2402746124,
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
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUuMC4xLjkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvYmFzZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9iaW1wb3J0L2JpbXBvcnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvYmltcG9ydC9icmVxdWlyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9iaW1wb3J0L2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL2JpbXBvcnQvcmVxdWlyZWpzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL2J1bmRsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9ldmVudHMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvZXZlbnRzL3R5cGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL2luc3RhbmNlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9tb2R1bGUvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9kZXBlbmRlbmNpZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9leHBvcnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL3BhY2thZ2UvaW1zL2V4cG9ydHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbXMvaW0udHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbXMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbXMvcmVxdWlyZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2tlcm5lbC9idW5kbGUvX19zb3VyY2VzL2J1bmRsZS9wYWNrYWdlL2ltcy9yZXF1aXJlL3RyYWNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMva2VybmVsL2J1bmRsZS9fX3NvdXJjZXMvYnVuZGxlL3BhY2thZ2UvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9rZXJuZWwvYnVuZGxlL19fc291cmNlcy9idW5kbGUvcGFja2FnZS9pbnN0YW5jZXMudHMiXSwibmFtZXMiOlsiYnVuZGxlXzBfMV85X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkJ1bmRsZSIsIkV2ZW50cyIsIklCdW5kbGVTcGVjcyIsIklFeHBvcnRzRGVzY3JpcHRvciIsIklNQ3JlYXRvcnMiLCJJTVNwZWNzIiwiTGlzdGVuZXJGdW5jdGlvbiIsIk1vZHVsZSIsIlBhY2thZ2UiLCJiaW1wb3J0IiwiYnJlcXVpcmUiLCJpbnN0YW5jZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwicmVzb2x2ZSIsInNvdXJjZSIsImlkIiwic3RhcnRzV2l0aCIsIkVycm9yIiwic3BsaXQiLCJwb3AiLCJ0YXJnZXQiLCJzbGljZSIsImxlbmd0aCIsInNoaWZ0Iiwiam9pbiIsIkJleW9uZFBhY2thZ2UiLCJpbXMiLCJjYWNoZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsImV4cG9ydHMyIiwiaW5pdGlhbGlzZSIsImltczIiLCJwcm9jZXNzIiwicmVxdWlyZSIsIm1vZHVsZTIiLCJoYXMiLCJlbmRzV2l0aCIsImdldCIsImZuIiwiY3JlYXRvciIsInJlcXVpcmUzIiwicmVxdWlyZWQiLCJzZXQiLCJyZXF1aXJlMiIsImJpbXBvcnQyIiwicmVzb3VyY2UiLCJ2ZXJzaW9uIiwibW9kZSIsIlByb21pc2UiLCJyZWplY3QiLCJlcnJvciIsImFtZF9yZXF1aXJlIiwicmV0dXJuZWQiLCJleGMiLCJjb25zb2xlIiwibG9nIiwic3RhY2siLCJnbG9iYWxUaGlzIiwiU3lzdGVtIiwiaW1wb3J0IiwiYXBwRGVwZW5kZW5jaWVzIiwiZGVwZW5kZW5jaWVzIiwiX19hcHBfcGFja2FnZSIsInNwZWNpZmllciIsInRlc3QiLCJwa2ciLCJzdWJwYXRoIiwiX2luc3RhbmNlcyIsImJyZXF1aXJlMiIsImZvdW5kIiwiZGVmYXVsdCIsImZpbmQiLCJ2c3BlY2lmaWVyIiwic3BsaXQyIiwiaW5pdGlhbGlzZWQiLCJ2YWx1ZXMiLCJfYmltcG9ydCIsIl9icmVxdWlyZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcGFja2FnZSIsIl9tb2R1bGUiLCJCdW5kbGUyIiwidHlwZSIsIm5hbWUiLCJ1cmkiLCJzcGVjcyIsIm11bHRpYnVuZGxlIiwicmVnaXN0ZXIiLCJwYWNrYWdlIiwibGFuZ3VhZ2UiLCJFdmVudHMyIiwibGlzdGVuZXJzIiwiZGVzdHJveWVkIiwic3VwcG9ydGVkIiwiQXJyYXkiLCJiaW5kIiwiZXZlbnQiLCJsaXN0ZW5lciIsInByaW9yaXR5Iiwib24iLCJ1bmJpbmQiLCJvZmYiLCJpbmNsdWRlcyIsImwiLCJwdXNoIiwiZm9yY2UiLCJkZWxldGUiLCJlIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJpdGVtIiwidHJpZ2dlciIsInJlc3QiLCJhcmdzIiwiYXJndW1lbnRzIiwic29ydCIsImEiLCJiIiwiYXN5bmMiLCJwcm9taXNlcyIsImFsbCIsImNhbGwiLCJjYXRjaCIsImRlc3Ryb3kiLCJjbGVhciIsImluc3RhbmNlczIiLCJidW5kbGUiLCJNb2R1bGUyIiwic2NvcGUiLCJleGVjdXRlIiwiYWN0aW9uIiwicGFyYW1zIiwiYmFja2VuZHMiLCJiZXlvbmQiLCJfZGVmYXVsdCIsInVwZGF0ZSIsImRlcHMiLCJmb3JFYWNoIiwiZGVwZW5kZW5jeSIsIl9fYmV5b25kX3RyYW5zdmVyc2FsIiwidHJhbnN2ZXJzYWwiLCJidW5kbGVzIiwiX3RyYWNlIiwiZGVzY3JpcHRvciIsImhtciIsIl9fYmV5b25kX3BrZyIsImtleSIsInRyYWNlIiwiVHJhY2UiLCJzb2x2ZSIsInJlc2VydmVkIiwia2V5cyIsInAiLCJpbSIsImZyb20iLCJJTUV4cG9ydHMiLCJiZXhwb3J0cyIsIlByb3h5Iiwic2VsZiIsInByb3AiLCJfZXhwb3J0cyIsIkludGVybmFsTW9kdWxlIiwiaGFzaCIsImNyZWF0aW5nIiwiY3JlYXRlZCIsImNyZWF0ZSIsIl9pbSIsIkludGVybmFsTW9kdWxlcyIsIl9yZXF1aXJlIiwiI3JlZ2lzdGVyIiwiX2Jhc2UiLCJSZXF1aXJlIiwiSlNPTiIsInN0cmluZ2lmeSIsInJ0IiwidHJhY2VkIiwiaWQyIiwic291cmNlMiIsInMiLCJfaW1zIiwiX2RlcGVuZGVuY2llcyIsIl9ldmVudHMiLCJQYWNrYWdlMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxvQkFBQTtFQUFBRSxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEs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