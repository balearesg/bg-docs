System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","0.1.5"]]);
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

// .beyond/uimport/@beyond-js/widgets/render.0.1.5.js
var render_0_1_5_exports = {};
__export(render_0_1_5_exports, {
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
module.exports = __toCommonJS(render_0_1_5_exports);

// node_modules/@beyond-js/widgets/render/render.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.5/render"
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
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyLjAuMS41LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci9hbmNob3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL2F0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL2luc3RhbmNlcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvaW5zdGFuY2VzL25vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3ByZXJlbmRlcmVkL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvYXR0cmlidXRlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L2NoZWNrc3VtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvY3NyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JlbmRlci9fX3NvdXJjZXMvcmVuZGVyL3dpZGdldC9yZW5kZXJlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3NyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3NyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXQvc3R5bGVzL2dsb2JhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3N0eWxlcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcmVuZGVyL19fc291cmNlcy9yZW5kZXIvd2lkZ2V0L3N0eWxlcy9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yZW5kZXIvX19zb3VyY2VzL3JlbmRlci93aWRnZXRzLnRzIl0sIm5hbWVzIjpbInJlbmRlcl8wXzFfNV9leHBvcnRzIiwiX19leHBvcnQiLCJCZXlvbmRXaWRnZXQiLCJHbG9iYWxDU1MiLCJJQmV5b25kV2lkZ2V0Q29udHJvbGxlciIsIklXaWRnZXRTcGVjcyIsIk5vZGVXaWRnZXQiLCJTdHlsZXNNYW5hZ2VyIiwiV2lkZ2V0Q1NSIiwiX19iZXlvbmRfcGtnIiwiYXR0cmlidXRlcyIsImhtciIsInByZXJlbmRlciIsIndpZGdldHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwicHJvY2VzcyIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiSFRNTEVsZW1lbnQiLCJyb3V0aW5nIiwiY29uc3RydWN0b3IiLCJiaW1wb3J0IiwidGhlbiIsImNvbm5lY3RlZENhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhc0F0dHJpYnV0ZSIsInVybCIsImdldEF0dHJpYnV0ZSIsInB1c2hTdGF0ZSIsIl9jb3JlIiwicmVxdWlyZTIiLCJBdHRyaWJ1dGVzIiwiRXZlbnRzIiwidmFsdWVzIiwiTWFwIiwiYWRkIiwibmFtZSIsInZhbHVlIiwic2V0IiwidHJpZ2dlciIsInJlbW92ZSIsImRlbGV0ZSIsImF0dHJpYnV0ZXMyIiwiX25vZGUiLCJpbnN0YW5jZXMiLCJTZXQiLCJyZWdpc3RlciIsIndpZGdldCIsInBhcmVudCIsInBhcmVudDIiLCJyb290IiwiZ2V0Um9vdE5vZGUiLCJkb2N1bWVudCIsImhvc3QiLCJoYXMiLCJub2RlIiwid25vZGUiLCJjaGlsZHJlbiIsIk5vZGVXaWRnZXQyIiwicHJlcmVuZGVyMiIsInNzciIsImZpbmQiLCJlbGVtZW50IiwiYXR0cnMiLCJpdGVtIiwiaWF0dHJzIiwicmVkdWNlIiwicHJldiIsImdldCIsIl9hdHRyaWJ1dGVzIiwiV2lkZ2V0R2xvYmFsQXR0cmlidXRlcyIsImhvbGRlciIsIiNzZXQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJpbml0aWFsaXNlIiwiZm9yRWFjaCIsIm9uIiwiZGVzdHJveSIsIm9mZiIsIl9kZWZhdWx0IiwicyIsImhhc2giLCJpIiwiYyIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJXaWRnZXRDU1IyIiwiYnVuZGxlIiwiY29udHJvbGxlciIsImVycm9yIiwibG9hZGluZyIsImxvYWRlZCIsImhvbGRlcnMiLCJzcGVjcyIsInJlbmRlciIsImNzciIsIkVycm9yIiwic3BlY2lmaWVyIiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwic3RhY2siLCJtZXNzYWdlIiwiI3JlbmRlciIsInNpemUiLCJDb250cm9sbGVyIiwibG9jYWxOYW1lIiwibG9nIiwiZGlzY29ubmVjdCIsImF0dHJpYnV0ZUNoYW5nZWQiLCJvbGQiLCJfaW5zdGFuY2VzIiwiX3NyIiwiX2NzciIsIl9zc3IiLCJfc3R5bGVzIiwiRWxlbWVudCIsIkJleW9uZFdpZGdldDIiLCJ2c3BlY2lmaWVyIiwibG9jYXRpb24iLCJvcmlnaW4iLCJpcyIsInJvdXRlIiwibGF5b3V0Iiwic3IiLCJzdHlsZXMiLCJ3cGFyZW50Iiwid2NoaWxkcmVuIiwib25jb250cm9sbGVyIiwiI29uY29udHJvbGxlciIsImV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiY29tcG9zZWQiLCJkaXNwYXRjaEV2ZW50IiwiYXR0YWNoU2hhZG93IiwibW9kZSIsInNwbGl0Iiwic2NvcGUiLCJzdGFydHNXaXRoIiwic2hpZnQiLCJzdWJwYXRoIiwiam9pbiIsIldpZGdldFNSIiwiV2lkZ2V0U1NSIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZGlzcGxheSIsInNoYWRvd1Jvb3QiLCJhcHBlbmQiLCJkaXNjb25uZWN0ZWRDYWxsYmFjayIsImF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayIsIlJlbmRlcmVyIiwiY3QiLCJlcnJvcnMiLCJodG1sIiwiaW5uZXJIVE1MIiwibGlua3MiLCJyZXNvdXJjZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicHVzaCIsImhyZWYiLCJvbmxvYWRlZCIsInJlYWR5IiwiX2NoZWNrc3VtIiwiX3JlbmRlcmVyIiwicmVuZGVyZXIiLCJpbml0aWFsaXNlZCIsImxhbmd1YWdlIiwibXVsdGlsYW5ndWFnZSIsImxhbmd1YWdlMiIsImxvY2FsU3RvcmFnZSIsIl9fYmV5b25kX2xhbmd1YWdlIiwibmF2aWdhdG9yIiwic2xpY2UiLCJyZXNvdXJjZSIsImtleSIsInBhdGhuYW1lIiwic2VhcmNoIiwiZGVmYXVsdCIsImNvbXB1dGUiLCJhdHRyIiwic29ydCIsImEiLCJiIiwiayIsInYiLCJyZXNwb25zZSIsImZldGNoIiwic3RhdHVzIiwianNvbiIsIl9wcmVyZW5kZXJlZCIsIm1hcCIsImZvdW5kIiwibG9hZCIsIiNsb2FkIiwicGtnIiwiY29uZmlnIiwiYXR0cnMyIiwiR2xvYmFsQ1NTMiIsInZlcnNpb24iLCJsaW5rIiwidXBkYXRlIiwiX2xpbmsiLCJfZ2xvYmFsIiwiU3R5bGVzTWFuYWdlcjIiLCJldmVudHMiLCJsaXN0ZW5lciIsImdsb2JhbGNzcyIsImNoYW5nZWQiLCIjY2hhbmdlZCIsInJlc29sdmVkIiwia2V5cyIsImNoZWNrIiwicHJvbWlzZSIsInJlc29sdmUiLCJjdXJyZW50VGFyZ2V0Iiwid2FybiIsInB1cmdlIiwiI2NoZWNrIiwibG9hZGVkMiIsIiNwdXJnZSIsInZlcnNpb25zIiwibGFzdCIsImxhc3RMb2FkZWQiLCJwcmV2TGFzdCIsInByZXZMYXN0TG9hZGVkIiwicmVmcmVzaCIsIiNyZWZyZXNoIiwiI3VwZGF0ZSIsIl9saW5rcyIsInVuc2hpZnQiLCJQcm9taXNlIiwiaXYiLCJwYXJzZUludCIsIl93aWRnZXQiLCJCZXlvbmRXaWRnZXRzIiwic2V0dXAiLCJzcGVjczIiLCJvYnNlcnZlZEF0dHJpYnV0ZXMiLCJ3aWRnZXRzMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxvQkFBQTtFQUFBRSxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyx1QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHVCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFoQixvQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNLQSxPQUFPaUIsT0FBQSxLQUFZLFlB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