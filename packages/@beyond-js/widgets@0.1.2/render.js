System.register(["@beyond-js/kernel@0.1.7/bundle","@beyond-js/kernel@0.1.7/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.7"],["@beyond-js/widgets","0.1.2"]]);
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

// .beyond/uimport/@beyond-js/widgets/render.0.1.2.js
var render_0_1_2_exports = {};
__export(render_0_1_2_exports, {
  BeyondWidget: () => BeyondWidget,
  GlobalCSS: () => GlobalCSS,
  IBeyondWidgetController: () => IBeyondWidgetController,
  IWidgetSpecs: () => IWidgetSpecs,
  NodeWidget: () => NodeWidget,
  StylesManager: () => StylesManager,
  WidgetCSR: () => WidgetCSR,
  __beyond_pkg: () => __beyond_pkg,
  attributes: () => attributes,
  hmr: () => hmr,
  prerender: () => prerender,
  widgets: () => widgets
});

// node_modules/@beyond-js/widgets/render/render.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.7/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.7/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.2/render"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./anchor", {
  hash: 1014568902,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    typeof process !== "object" && customElements.define("beyond-link", class extends HTMLElement {
      #routing;
      constructor() {
        super();
        bimport("@beyond-js/kernel/routing").then(({
          routing
        }) => this.#routing = routing);
      }
      connectedCallback() {
        this.addEventListener("click", () => {
          if (!this.hasAttribute("data-url")) return;
          const url = this.getAttribute("data-url");
          this.#routing?.pushState(url);
        });
      }
    });
  }
});
ims.set("./attributes", {
  hash: 1262494723,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.attributes = exports.Attributes = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class Attributes extends _core.Events {
      #values = /* @__PURE__ */new Map();
      get values() {
        return this.#values;
      }
      add(name, value) {
        this.#values.set(name, value);
        this.trigger("add", name, value);
        this.trigger("change");
      }
      remove(name) {
        this.#values.delete(name);
        this.trigger("remove", name);
        this.trigger("change");
      }
    }
    exports.Attributes = Attributes;
    const attributes2 = new Attributes();
    exports.attributes = attributes2;
  }
});
ims.set("./instances/index", {
  hash: 2022060609,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.instances = void 0;
    var _node = require2("./node");
    const instances = new class extends Set {
      register(widget) {
        this.add(widget);
        const parent = (() => {
          let parent2 = widget;
          while (true) {
            const root = parent2.getRootNode();
            if (root === document) return;
            parent2 = root.host;
            if (this.has(parent2)) return parent2;
          }
        })();
        const node = new _node.NodeWidget(widget, parent);
        parent?.wnode.children.add(widget);
        this.add(widget);
        return node;
      }
    }();
    exports.instances = instances;
  }
});
ims.set("./instances/node", {
  hash: 3167083658,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NodeWidget = void 0;
    class NodeWidget2 {
      #widget;
      get widget() {
        return this.#widget;
      }
      #parent;
      get parent() {
        return this.#parent;
      }
      #children = /* @__PURE__ */new Set();
      get children() {
        return this.#children;
      }
      constructor(widget, parent) {
        this.#widget = widget;
        this.#parent = parent;
      }
    }
    exports.NodeWidget = NodeWidget2;
  }
});
ims.set("./prerendered/index", {
  hash: 483738484,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.prerender = void 0;
    const prerender2 = new class {
      #ssr = [];
      get ssr() {
        return this.#ssr;
      }
      find(element, attrs) {
        return this.#ssr.find(item => {
          if (item.element !== element) return false;
          const iattrs = new Map(item.attributes);
          return [...attrs].reduce((prev, [name, value]) => prev || iattrs.get(name) === value, true);
        });
      }
    }();
    exports.prerender = prerender2;
  }
});
ims.set("./widget/attributes", {
  hash: 1029410984,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetGlobalAttributes = void 0;
    var _attributes = require2("../attributes");
    class WidgetGlobalAttributes {
      #holder;
      get holder() {
        return this.#holder;
      }
      #set = (name, value) => {
        this.#holder.setAttribute(name, value);
      };
      #remove = name => {
        this.#holder.removeAttribute(name);
      };
      initialise(holder) {
        this.#holder = holder;
        _attributes.attributes.values.forEach((value, name) => this.#set(name, value));
        _attributes.attributes.on("add", this.#set);
        _attributes.attributes.on("remove", this.#remove);
      }
      destroy() {
        _attributes.attributes.off("add", this.#set);
        _attributes.attributes.off("remove", this.#remove);
      }
    }
    exports.WidgetGlobalAttributes = WidgetGlobalAttributes;
  }
});
ims.set("./widget/checksum", {
  hash: 1702419318,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    function _default(s) {
      let hash = 0,
        i,
        c;
      const length = s.length;
      if (length === 0) {
        return hash;
      }
      for (i = 0; i < length; i++) {
        c = s.charCodeAt(i);
        hash = (hash << 5) - hash + c;
        hash = hash & hash;
      }
      return hash.toString().replace("-", "n");
    }
    ;
  }
});
ims.set("./widget/csr", {
  hash: 1023760945,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetCSR = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class WidgetCSR2 extends _core.Events {
      #widget;
      #bundle;
      get bundle() {
        return this.#bundle;
      }
      #controller;
      get controller() {
        return this.#controller;
      }
      #error;
      get error() {
        return this.#error;
      }
      #loading = false;
      get loading() {
        return this.#loading;
      }
      #loaded = false;
      get loaded() {
        return this.#loaded;
      }
      #holders = /* @__PURE__ */new Set(["initialised", "loaded"]);
      initialise() {
        if (!this.#widget.specs.render.csr) return;
        if (!this.#holders.has("initialised")) throw new Error("Widget CSR already initialised");
        this.#holders.delete("initialised");
        this.#render();
      }
      constructor(widget) {
        super();
        const {
          specifier,
          specs
        } = this.#widget = widget;
        if (!specs.render.csr) return;
        bimport(specifier).then(bundle => {
          this.#bundle = bundle;
          this.#loading = false;
          this.#loaded = true;
          this.#holders.delete("loaded");
          this.#render();
        }).catch(exc => {
          console.error(`Error loading widget "${specifier}"`, exc.stack);
          this.#error = exc.message;
          this.#loading = false;
        });
      }
      #render = () => {
        if (this.#holders.size) return;
        const {
          Controller
        } = this.#bundle;
        if (!Controller || typeof Controller !== "function") {
          const message = `Widget "${this.#widget.localName}" does not export its Controller`;
          console.error(message);
          this.#error = message;
          return;
        }
        this.#controller = new Controller(this.#widget);
        this.#controller.initialise().then(() => this.trigger("controller.initialised")).catch(exc => console.log(exc instanceof Error ? exc.stack : exc));
      };
      disconnect() {
        this.#controller?.disconnect?.();
      }
      attributeChanged(name, old, value) {
        this.#controller?.attributeChanged(name, old, value);
      }
    }
    exports.WidgetCSR = WidgetCSR2;
  }
});
ims.set("./widget/index", {
  hash: 2251972216,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondWidget = void 0;
    var _instances = require2("../instances");
    var _sr = require2("./sr");
    var _csr = require2("./csr");
    var _ssr = require2("./ssr");
    var _attributes = require2("./attributes");
    var _styles = require2("./styles");
    const Element = typeof HTMLElement === "undefined" ? null : HTMLElement;
    class BeyondWidget2 extends Element {
      #specs;
      get specs() {
        return this.#specs;
      }
      get name() {
        return this.#specs.name;
      }
      get vspecifier() {
        return this.#specs.vspecifier;
      }
      #specifier;
      get specifier() {
        return this.#specifier;
      }
      get host() {
        return `${location.origin}/`;
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
      #holder;
      get holder() {
        return this.#holder;
      }
      #sr;
      get sr() {
        return this.#sr;
      }
      #csr;
      get csr() {
        return this.#csr;
      }
      get controller() {
        return this.#csr.controller;
      }
      #ssr;
      get ssr() {
        return this.#ssr;
      }
      #attributes;
      #styles;
      get styles() {
        return this.#styles;
      }
      #wnode;
      get wnode() {
        return this.#wnode;
      }
      get wparent() {
        return this.#wnode.parent;
      }
      get wchildren() {
        return [...this.#wnode.children];
      }
      #oncontroller = () => {
        const event = new CustomEvent("controller.initialised", {
          bubbles: false,
          composed: false
        });
        this.dispatchEvent(event);
      };
      constructor(specs) {
        super();
        this.#specs = specs;
        this.attachShadow({
          mode: "open"
        });
        this.#specifier = (() => {
          const split = specs.vspecifier.split("/");
          const scope = split[0].startsWith("@") ? split.shift() : void 0;
          const [name] = split.shift().split("@");
          const subpath = split.join("/");
          return (scope ? `${scope}/${name}` : name) + (subpath ? `/${subpath}` : "");
        })();
        this.#attributes = new _attributes.WidgetGlobalAttributes();
        this.#sr = new _sr.WidgetSR(this);
        this.#ssr = new _ssr.WidgetSSR(this);
        this.#csr = new _csr.WidgetCSR(this);
        this.#csr?.on("controller.initialised", this.#oncontroller);
        this.#styles = new _styles.StylesManager(this);
      }
      connectedCallback() {
        this.#wnode = _instances.instances.register(this);
        this.#holder = document.createElement("span");
        this.#holder.style.display = "none";
        this.shadowRoot.append(this.#holder);
        this.#attributes.initialise(this.#holder);
        this.#ssr.initialise().catch(exc => console.error(exc.stack));
        this.#sr.initialise().catch(exc => console.error(exc.stack));
        this.#csr.initialise();
      }
      disconnectedCallback() {
        this.#csr.disconnect();
      }
      attributeChangedCallback(name, old, value) {
        this.#csr.attributeChanged(name, old, value);
      }
    }
    exports.BeyondWidget = BeyondWidget2;
  }
});
ims.set("./widget/renderer", {
  hash: 571206461,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Renderer = void 0;
    class Renderer {
      #widget;
      constructor(widget) {
        this.#widget = widget;
      }
      #ct = 0;
      async render(sr) {
        const ct = ++this.#ct;
        const {
          name,
          holder,
          styles
        } = this.#widget;
        if (sr.errors?.length) {
          console.error(`Error fetching static rendered widget "${name}":`, sr.errors);
          return;
        }
        if (holder.children.length) return;
        if (!sr.html) return "";
        const host = await this.#widget.host;
        holder.innerHTML = (() => sr.html.replace(/##_!(.*?)!_##/g, () => host))();
        const links = [];
        const resources = holder.querySelectorAll("link");
        resources.forEach(node => links.push(node.href));
        links.length && (await styles.initialise(links));
        resources.forEach(node => node.localName === "link" && node.addEventListener("load", styles.onloaded));
        await styles?.ready;
        if (this.#ct !== ct) return;
        holder.style.display = "";
      }
    }
    exports.Renderer = Renderer;
  }
});
ims.set("./widget/sr", {
  hash: 2731121275,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetSR = void 0;
    var _checksum = require2("./checksum");
    var _renderer = require2("./renderer");
    class WidgetSR {
      #widget;
      #renderer;
      #prerender;
      get prerender() {
        return this.#prerender;
      }
      constructor(widget) {
        this.#widget = widget;
        this.#renderer = new _renderer.Renderer(widget);
      }
      #initialised = false;
      async initialise() {
        if (this.#initialised) throw new Error("Widget SSR already initialised");
        this.#initialised = true;
        const {
          specs
        } = this.#widget;
        if (!specs.render.sr) return;
        const language = (() => {
          const {
            multilanguage
          } = specs.render;
          if (!multilanguage) return "";
          let language2 = localStorage.__beyond_language;
          language2 = language2 ? language2 : navigator.language;
          language2 = language2.slice(0, 2);
          return `${language2}:`;
        })();
        let resource;
        if (specs.is === "page") {
          let key = `${language}${specs.name}//${location.pathname}${location.search}`;
          resource = (0, _checksum.default)(key);
        } else if (specs.is === "layout") {
          resource = (0, _checksum.default)(`${language}${specs.name}`);
        } else {
          const compute = /* @__PURE__ */new Map();
          specs.attrs?.forEach(attr => {
            const value = this.#widget.getAttribute(attr);
            value && compute.set(attr, value);
          });
          let key = language;
          [...compute].sort((a, b) => a[0] < b[0] ? 1 : 0).forEach(([k, v]) => key += `${k}//${v}///`);
          resource = (0, _checksum.default)(key);
        }
        const host = await this.#widget.host;
        const url = `${host}__sr_widgets__/${specs.name}.${resource}.js`;
        try {
          const response = await fetch(url);
          if (response.status !== 200) {
            console.error(`Error fetching static rendered widget "${specs.name}". Status code: ${response.status}`);
            return;
          }
          const sr = await response.json();
          this.#prerender = sr;
          await this.#renderer.render(sr);
        } catch (exc) {
          console.error("Widget static content fetch error:", exc.message);
        }
      }
    }
    exports.WidgetSR = WidgetSR;
  }
});
ims.set("./widget/ssr", {
  hash: 2834037449,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetSSR = void 0;
    var _prerendered = require2("../prerendered");
    var _renderer = require2("./renderer");
    class WidgetSSR {
      #widget;
      #renderer;
      #prerender;
      get prerender() {
        return this.#prerender;
      }
      constructor(widget) {
        this.#widget = widget;
        this.#renderer = new _renderer.Renderer(widget);
      }
      #initialised = false;
      async initialise() {
        if (!this.#widget.specs.render.ssr) return;
        if (this.#initialised) throw new Error("Widget SSR already initialised");
        this.#initialised = true;
        const widget = this.#widget;
        const {
          specs
        } = widget;
        const attrs = new Map(specs.attrs ? specs.attrs.map(attr => [attr, widget.getAttribute(attr)]) : void 0);
        const found = _prerendered.prerender.find(specs.name, attrs);
        if (!found) {
          return await this.#load();
        }
        this.#prerender = found;
        await this.#renderer.render(found);
      }
      async #load() {
        const {
          specifier,
          name
        } = this.#widget;
        const host = await (async () => {
          const split = specifier.split("/");
          const pkg = split[0].startsWith("@") ? `${split.shift()}/${split.shift()}` : split.shift();
          const {
            ssr: config
          } = (await bimport(`${pkg}/config`)).default;
          if (!config || !config.host) {
            console.error(`Project "${pkg}" does not support SSR (host not configured). Required by "${name}" widget.`);
            return;
          }
          return config.host;
        })();
        if (!host) return;
        const language = (() => {
          const {
            specs
          } = this.#widget;
          const {
            multilanguage
          } = specs.render;
          if (!multilanguage) return "";
          let language2 = localStorage.__beyond_language;
          language2 = language2 ? language2 : navigator.language;
          language2 = language2.slice(0, 2);
          return `&language=${language2}`;
        })();
        let attrs = (() => {
          const {
            specs
          } = this.#widget;
          if (!specs.attrs?.length) return "";
          let attrs2 = "&attrs=" + specs.attrs.join(",");
          specs.attrs.forEach(attr => {
            const value = this.#widget.getAttribute(attr);
            if (!value) return;
            attrs2 += `&attr.${attr}=${value}`;
          });
        })();
        const url = `${host}/widget?name=${name}${language}${attrs}`;
        try {
          const response = await fetch(url);
          if (response.status !== 200) {
            console.error(`Error fetching SSR of widget "${name}". Status code: ${response.status}`);
            return;
          }
          const sr = await response.json();
          this.#prerender = sr;
          await this.#renderer.render(sr);
        } catch (exc) {
          console.error(exc.stack);
        }
      }
    }
    exports.WidgetSSR = WidgetSSR;
  }
});
ims.set("./widget/styles/global", {
  hash: 1566285625,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GlobalCSS = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class GlobalCSS2 extends _core.Events {
      #widget;
      #version = 0;
      constructor(widget) {
        super();
        this.#widget = widget;
        const {
          host
        } = this.#widget;
        const version = this.#version !== 0 ? `?version=${this.#version}` : "";
        this.#link = `${host}global.css${version}`;
      }
      #link;
      get link() {
        return this.#link;
      }
      update() {
        this.#version++;
        this.trigger("change");
      }
    }
    exports.GlobalCSS = GlobalCSS2;
  }
});
ims.set("./widget/styles/index", {
  hash: 1538919774,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StylesManager = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _link = require2("./link");
    var _global = require2("./global");
    class StylesManager2 {
      #events = new _core.Events();
      on = (event, listener) => this.#events.on(event, listener);
      off = (event, listener) => this.#events.off(event, listener);
      #loaded = /* @__PURE__ */new Map();
      #globalcss;
      #version = 0;
      get version() {
        return this.#version;
      }
      #changed() {
        this.#version++;
        this.#resolved && this.#events.trigger("change");
      }
      get resources() {
        return /* @__PURE__ */new Set([...this.#loaded.keys()]);
      }
      get loaded() {
        this.#check();
        return this.#resolved;
      }
      #promise;
      #resolved = false;
      #resolve;
      get ready() {
        this.#check();
        return this.#promise;
      }
      onloaded = event => {
        const href = typeof event === "string" ? event : event.currentTarget.getAttribute("href");
        if (!this.#loaded.has(href)) {
          console.warn(`Stylesheet href="${href}" not registered`);
          return;
        }
        this.#loaded.set(href, true);
        this.#check();
        const changed = this.#purge();
        changed && this.#changed();
        return true;
      };
      #check() {
        if (this.#resolved) return true;
        const loaded = [...this.#loaded.values()].reduce((prev, loaded2) => prev && loaded2, true);
        loaded && this.#resolve();
        return this.#resolved = loaded;
      }
      #purge() {
        const versions = {
          last: /* @__PURE__ */new Map(),
          values: /* @__PURE__ */new Map(),
          lastLoaded: /* @__PURE__ */new Map()
        };
        [...this.#loaded.keys()].forEach(href => {
          const link = new _link.default(href);
          const prevLast = versions.last.get(link.resource);
          const last = prevLast && prevLast > link.version ? prevLast : link.version;
          versions.last.set(link.resource, last);
          if (this.#loaded.get(link.href)) {
            const prevLastLoaded = versions.lastLoaded.get(link.resource);
            const lastLoaded = prevLastLoaded && prevLastLoaded > link.version ? prevLastLoaded : link.version;
            versions.lastLoaded.set(link.resource, lastLoaded);
          }
          const values = versions.values.has(link.resource) ? versions.values.get(link.resource) : /* @__PURE__ */new Set();
          values.add(link.version);
          versions.values.set(link.resource, values);
        });
        const purge = [];
        [...this.#loaded.keys()].forEach(href => {
          const link = new _link.default(href);
          const lastLoaded = versions.lastLoaded.get(link.resource);
          link.version < lastLoaded && purge.push(link);
        });
        purge.forEach(link => this.#loaded.delete(link.href));
        return !!purge.length;
      }
      #last;
      #refresh = () => {
        if (!this.#last) return;
        const changed = this.#update(this.#last);
        changed && this.#changed();
      };
      #update(_links) {
        this.#last = _links;
        _links.unshift(this.#globalcss.link);
        const links = _links.map(link => new _link.default(link));
        let changed = false;
        links.forEach(link => {
          if (this.#loaded.has(link.href)) return;
          this.#loaded.set(link.href, false);
          changed = true;
        });
        return changed;
      }
      update(links) {
        const changed = this.#update(links);
        changed && this.#changed();
      }
      constructor(widget) {
        this.#globalcss = new _global.GlobalCSS(widget);
        this.#promise = new Promise(resolve => this.#resolve = resolve);
      }
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      async initialise(links) {
        if (this.#initialised) throw new Error(`Widget styles already initialised`);
        this.#initialised = true;
        this.#update(links);
        this.#globalcss.on("change", this.#refresh);
      }
      destroy() {
        this.#globalcss.off("change", this.#refresh);
      }
    }
    exports.StylesManager = StylesManager2;
  }
});
ims.set("./widget/styles/link", {
  hash: 3219871066,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default {
      #href;
      get href() {
        return this.#href;
      }
      #resource;
      get resource() {
        return this.#resource;
      }
      #version;
      get version() {
        return this.#version;
      }
      constructor(href) {
        this.#href = href;
        const iv = href.split("?version=");
        this.#resource = iv[0];
        this.#version = iv[1] ? parseInt(iv[1]) : 0;
      }
    }
    exports.default = _default;
  }
});
ims.set("./widgets", {
  hash: 3986250608,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.widgets = void 0;
    var _widget = require2("./widget");
    var _instances = require2("./instances");
    var _attributes = require2("./attributes");
    require2("./anchor");
    class BeyondWidgets extends Map {
      #ssr = true;
      get ssr() {
        return this.#ssr;
      }
      constructor() {
        super();
      }
      setup(config) {
        this.#ssr = typeof config?.ssr === "boolean" ? config.ssr : true;
      }
      get instances() {
        return _instances.instances;
      }
      get attributes() {
        return _attributes.attributes;
      }
      register(specs) {
        specs.forEach(specs2 => {
          if (this.has(specs2.name)) return;
          specs2.render = specs2.render ? specs2.render : {
            csr: true,
            ssr: false,
            sr: false
          };
          const {
            name,
            render
          } = specs2;
          render.csr = typeof render.csr === "boolean" ? render.csr : true;
          this.set(name, specs2);
          if (typeof process === "object") return;
          customElements.define(name, class extends _widget.BeyondWidget {
            static get observedAttributes() {
              return specs2.attrs ? specs2.attrs : [];
            }
            constructor() {
              super(specs2);
            }
          });
        });
      }
    }
    const widgets2 = new BeyondWidgets();
    exports.widgets = widgets2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./attributes",
  "from": "attributes",
  "name": "attributes"
}, {
  "im": "./instances/node",
  "from": "NodeWidget",
  "name": "NodeWidget"
}, {
  "im": "./prerendered/index",
  "from": "prerender",
  "name": "prerender"
}, {
  "im": "./widget/csr",
  "from": "IBeyondWidgetController",
  "name": "IBeyondWidgetController"
}, {
  "im": "./widget/csr",
  "from": "WidgetCSR",
  "name": "WidgetCSR"
}, {
  "im": "./widget/index",
  "from": "IWidgetSpecs",
  "name": "IWidgetSpecs"
}, {
  "im": "./widget/index",
  "from": "BeyondWidget",
  "name": "BeyondWidget"
}, {
  "im": "./widget/styles/global",
  "from": "GlobalCSS",
  "name": "GlobalCSS"
}, {
  "im": "./widget/styles/index",
  "from": "StylesManager",
  "name": "StylesManager"
}, {
  "im": "./widgets",
  "from": "widgets",
  "name": "widgets"
}];
var attributes, NodeWidget, prerender, IBeyondWidgetController, WidgetCSR, IWidgetSpecs, BeyondWidget, GlobalCSS, StylesManager, widgets;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "attributes") && (attributes = require2 ? require2("./attributes").attributes : value);
  (require2 || prop === "NodeWidget") && (NodeWidget = require2 ? require2("./instances/node").NodeWidget : value);
  (require2 || prop === "prerender") && (prerender = require2 ? require2("./prerendered/index").prerender : value);
  (require2 || prop === "IBeyondWidgetController") && (IBeyondWidgetController = require2 ? require2("./widget/csr").IBeyondWidgetController : value);
  (require2 || prop === "WidgetCSR") && (WidgetCSR = require2 ? require2("./widget/csr").WidgetCSR : value);
  (require2 || prop === "IWidgetSpecs") && (IWidgetSpecs = require2 ? require2("./widget/index").IWidgetSpecs : value);
  (require2 || prop === "BeyondWidget") && (BeyondWidget = require2 ? require2("./widget/index").BeyondWidget : value);
  (require2 || prop === "GlobalCSS") && (GlobalCSS = require2 ? require2("./widget/styles/global").GlobalCSS : value);
  (require2 || prop === "StylesManager") && (StylesManager = require2 ? require2("./widget/styles/index").StylesManager : value);
  (require2 || prop === "widgets") && (widgets = require2 ? require2("./widgets").widgets : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
module.exports = __toCommonJS(render_0_1_2_exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyLjAuMS4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci9hbmNob3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL2F0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL2luc3RhbmNlcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvaW5zdGFuY2VzL25vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3ByZXJlbmRlcmVkL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvYXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L2NoZWNrc3VtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvY3NyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9yZW5kZXJlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3NyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3NyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3R5bGVzL2dsb2JhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3N0eWxlcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3N0eWxlcy9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXRzLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiQmV5b25kV2lkZ2V0IiwiR2xvYmFsQ1NTIiwiSUJleW9uZFdpZGdldENvbnRyb2xsZXIiLCJJV2lkZ2V0U3BlY3MiLCJOb2RlV2lkZ2V0IiwiU3R5bGVzTWFuYWdlciIsIldpZGdldENTUiIsIl9fYmV5b25kX3BrZyIsImF0dHJpYnV0ZXMiLCJobXIiLCJwcmVyZW5kZXIiLCJ3aWRnZXRzIiwicHJvY2VzcyIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiSFRNTEVsZW1lbnQiLCJjb25zdHJ1Y3RvciIsImJpbXBvcnQiLCJ0aGVuIiwicm91dGluZyIsImNvbm5lY3RlZENhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhc0F0dHJpYnV0ZSIsInVybCIsImdldEF0dHJpYnV0ZSIsInB1c2hTdGF0ZSIsIkF0dHJpYnV0ZXMiLCJfY29yZSIsIk1hcCIsInZhbHVlcyIsImFkZCIsIm5hbWUiLCJ2YWx1ZSIsInNldCIsInRyaWdnZXIiLCJyZW1vdmUiLCJkZWxldGUiLCJleHBvcnRzIiwiYXR0cmlidXRlczIiLCJpbnN0YW5jZXMiLCJTZXQiLCJyZWdpc3RlciIsIndpZGdldCIsInBhcmVudCIsInBhcmVudDIiLCJyb290IiwiZ2V0Um9vdE5vZGUiLCJkb2N1bWVudCIsImhvc3QiLCJoYXMiLCJub2RlIiwiX25vZGUiLCJ3bm9kZSIsImNoaWxkcmVuIiwiTm9kZVdpZGdldDIiLCJwcmVyZW5kZXIyIiwic3NyIiwiZmluZCIsImVsZW1lbnQiLCJhdHRycyIsIml0ZW0iLCJpYXR0cnMiLCJyZWR1Y2UiLCJwcmV2IiwiZ2V0IiwiV2lkZ2V0R2xvYmFsQXR0cmlidXRlcyIsImhvbGRlciIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImluaXRpYWxpc2UiLCJfYXR0cmlidXRlcyIsImZvckVhY2giLCJvbiIsImRlc3Ryb3kiLCJvZmYiLCJzIiwiaGFzaCIsImkiLCJjIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwicmVwbGFjZSIsIldpZGdldENTUjIiLCJidW5kbGUiLCJjb250cm9sbGVyIiwiZXJyb3IiLCJsb2FkaW5nIiwibG9hZGVkIiwic3BlY3MiLCJyZW5kZXIiLCJjc3IiLCJFcnJvciIsInNwZWNpZmllciIsImNhdGNoIiwiZXhjIiwiY29uc29sZSIsInN0YWNrIiwibWVzc2FnZSIsInNpemUiLCJDb250cm9sbGVyIiwibG9jYWxOYW1lIiwibG9nIiwiZGlzY29ubmVjdCIsImF0dHJpYnV0ZUNoYW5nZWQiLCJvbGQiLCJFbGVtZW50IiwiQmV5b25kV2lkZ2V0MiIsInZzcGVjaWZpZXIiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImlzIiwicm91dGUiLCJsYXlvdXQiLCJzciIsInN0eWxlcyIsIndwYXJlbnQiLCJ3Y2hpbGRyZW4iLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImNvbXBvc2VkIiwiZGlzcGF0Y2hFdmVudCIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJzcGxpdCIsInNjb3BlIiwic3RhcnRzV2l0aCIsInNoaWZ0Iiwic3VicGF0aCIsImpvaW4iLCJfc3IiLCJfc3NyIiwiX2NzciIsIl9zdHlsZXMiLCJfaW5zdGFuY2VzIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsInNoYWRvd1Jvb3QiLCJhcHBlbmQiLCJkaXNjb25uZWN0ZWRDYWxsYmFjayIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsIlJlbmRlcmVyIiwiY3QiLCJlcnJvcnMiLCJodG1sIiwiaW5uZXJIVE1MIiwibGlua3MiLCJyZXNvdXJjZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicHVzaCIsImhyZWYiLCJvbmxvYWRlZCIsInJlYWR5IiwiV2lkZ2V0U1IiLCJfcmVuZGVyZXIiLCJsYW5ndWFnZSIsIm11bHRpbGFuZ3VhZ2UiLCJsYW5ndWFnZTIiLCJsb2NhbFN0b3JhZ2UiLCJfX2JleW9uZF9sYW5ndWFnZSIsIm5hdmlnYXRvciIsInNsaWNlIiwicmVzb3VyY2UiLCJrZXkiLCJwYXRobmFtZSIsInNlYXJjaCIsImNvbXB1dGUiLCJhdHRyIiwic29ydCIsImEiLCJiIiwiayIsInYiLCJyZXNwb25zZSIsImZldGNoIiwic3RhdHVzIiwianNvbiIsIldpZGdldFNTUiIsIm1hcCIsImZvdW5kIiwiX3ByZXJlbmRlcmVkIiwicGtnIiwiY29uZmlnIiwiZGVmYXVsdCIsImF0dHJzMiIsIkdsb2JhbENTUzIiLCJ2ZXJzaW9uIiwibGluayIsInVwZGF0ZSIsIlN0eWxlc01hbmFnZXIyIiwibGlzdGVuZXIiLCJrZXlzIiwiY3VycmVudFRhcmdldCIsIndhcm4iLCJjaGFuZ2VkIiwibG9hZGVkMiIsInZlcnNpb25zIiwibGFzdCIsImxhc3RMb2FkZWQiLCJfbGluayIsInByZXZMYXN0IiwicHJldkxhc3RMb2FkZWQiLCJwdXJnZSIsIl9saW5rcyIsInVuc2hpZnQiLCJfZ2xvYmFsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpbml0aWFsaXNlZCIsIml2IiwicGFyc2VJbnQiLCJyZXF1aXJlMiIsIkJleW9uZFdpZGdldHMiLCJzZXR1cCIsInNwZWNzMiIsIl93aWRnZXQi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QzlDOztJQUNIOUs7Ozs7Ozs7Ozs7OztJQ3ZCRDtJQUNBO0lBQ0E7SUFDQWdMO0lBSUEsTUFBTUMsc0JBQXNCMUwsSUFBeUI7TUFDakQsT0FBTztVQUNINEIsTUFBRztRQUNILE9BQU87TUFDWDtNQUVBeEM7UUFDSSxPQUFLO01BQ1Q7TUFFQXVNLE1BQU0vQixRQUF5QjtRQUMzQixZQUFZLE9BQU9BLFFBQVFoSSxRQUFRLFlBQVlnSSxPQUFPaEksTUFBTTtNQUNoRTtVQUVJakIsWUFBUztRQUNULE9BQU9nRztNQUNYO1VBRUkvSCxhQUFVO1FBQ1YsT0FBTzhEO01BQ1g7TUFFQTdCLFNBQVNnRCxPQUFxQjtRQUMxQkEsTUFBTWxCLFFBQVNpSixVQUFTO1VBRXBCLElBQUksS0FBS3ZLLElBQUl1SyxPQUFNekwsSUFBSSxHQUFHO1VBRTFCeUwsT0FBTTlILFNBQVM4SCxPQUFNOUgsU0FBUzhILE9BQU05SCxTQUFTO1lBQUNDLEtBQUs7WUFBTW5DLEtBQUs7WUFBTzBELElBQUk7VUFBSztVQUM5RSxNQUFNO1lBQUNuRjtZQUFNMkQ7Y0FBVThIO1VBQ3ZCOUgsT0FBT0MsTUFBTSxPQUFPRCxPQUFPQyxRQUFRLFlBQVlELE9BQU9DLE1BQU07VUFFNUQsS0FBSzFELElBQUlGLE1BQU15TCxNQUFLO1VBR3BCLElBQUksT0FBTzVNLFlBQVksVUFBVTtVQUVqQ0MsZUFBZUMsT0FBT2lCLE1BQU0sY0FBYzBMLHFCQUFZO3VCQUN2Q0MscUJBQWtCO2NBQ3pCLE9BQU9GLE9BQU03SixRQUFRNkosT0FBTTdKLFFBQVE7WUFDdkM7WUFFQTNDO2NBQ0ksTUFBTXdNLE1BQUs7WUFDZjtXQUNIO1FBQ0wsQ0FBQztNQUNMOztJQUdjLE1BQU1HLFdBQXlCLElBQUlMLGVBQWE7SUFBR2pMIiwiZmlsZSI6IiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJ0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXInOyIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sInNvdXJjZVJvb3QiOiIvZG9jcy9vdXQifQ==