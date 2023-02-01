System.register(["@beyond-js/kernel@0.1.7/bundle","@beyond-js/kernel@0.1.7/core","@beyond-js/widgets@0.1.2/render"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.7"],["@beyond-js/widgets","0.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.7/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.7/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.2/render', dep)],
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

// .beyond/uimport/@beyond-js/widgets/layout.0.1.2.js
var layout_0_1_2_exports = {};
__export(layout_0_1_2_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  ssr: () => ssr
});

// node_modules/@beyond-js/widgets/layout/layout.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.7/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/widgets@0.1.2/render"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.2/layout"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/widgets/render", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./children", {
  hash: 1491145116,
  creator: function (require2, exports) {
    "use strict";

    var _render = require2("@beyond-js/widgets/render");
    var _ssr = require2("./ssr");
    let manager;
    customElements.define("beyond-layout-children", class extends HTMLElement {
      #layout;
      #active;
      connectedCallback() {
        this.attachShadow({
          mode: "open"
        });
        const managed = () => {
          const start = () => this.#start().catch(exc => console.error(exc.stack));
          manager.initialised ? start() : manager.ready.then(start);
        };
        if (manager) return managed();
        _ssr.ssr.page ? this.#onssr() : _ssr.ssr.addEventListener("received", this.#onssr);
        const promises = [];
        promises.push(bimport("@beyond-js/widgets/routing"));
        promises.push(bimport("@beyond-js/kernel/core"));
        const {
          specifier
        } = globalThis.__app_package;
        promises.push(bimport(`${specifier}/start`));
        Promise.all(promises).then(([routing]) => {
          ({
            manager
          } = routing);
          managed();
        }).catch(exc => console.log(exc.stack));
      }
      #container;
      get container() {
        if (this.#container !== void 0) return this.#container;
        const container = (() => {
          let parent = this;
          while (true) {
            const root = parent.getRootNode();
            if (root === document) return root;
            parent = root.host;
            if (_render.widgets.instances.has(parent)) return parent;
          }
        })();
        if (!container) {
          console.error(`Widget container of beyond-layout-children not found`);
          return this.#container = null;
        }
        return this.#container = container;
      }
      #onssr = () => {
        _ssr.ssr.removeEventListener("received", this.#onssr);
        const {
          container
        } = this;
        if (container === null) return;
        const {
          element,
          error
        } = (() => {
          const {
            hierarchy
          } = _ssr.ssr;
          if (container === document) return {
            element: hierarchy[0]
          };
          const {
            localName
          } = container;
          const index = hierarchy.indexOf(localName);
          if (index === -1) return {
            error: `Container widget of beyond-layout-children "${localName}" not found in ssr hierarchy`
          };
          if (index === hierarchy.length - 1) return {
            error: `Container widget of beyond-layout-children "${localName}" is the page, not a layout`
          };
          return {
            element: hierarchy[index + 1]
          };
        })();
        if (error) {
          console.error(error, this);
          return;
        }
        this.shadowRoot.appendChild(document.createElement(element));
      };
      #render = () => {
        this.#layout.children.forEach(child => {
          const {
            children
          } = this.shadowRoot;
          let element = [...children].find(element2 => element2.getAttribute("data-child-id") === child.id);
          if (!element) {
            element = document.createElement(child.element);
            element.setAttribute("data-child-id", child.id);
            this.shadowRoot.append(element);
          }
          const active = this.#layout.active === child;
          const controller = element.controller;
          if (active && element !== this.#active) {
            this.#active = element;
            const show = () => {
              element.removeEventListener("controller.initialised", show);
              if (element !== this.#active) return;
              const controller2 = element.controller;
              if (!controller2) {
                throw new Error(`Controller of element widget "${child.element}" is undefined`);
              }
              this.#active === element && controller2.show?.();
            };
            controller ? controller.show?.() : element.addEventListener("controller.initialised", show);
          } else if (!element.hidden && !active) {
            controller?.hide?.();
          }
          element.hidden = !active;
        });
      };
      #hydrate() {
        const {
          children
        } = this.shadowRoot;
        const layout = this.#layout;
        if (!children.length) return;
        if (children.length > 1) {
          console.error("Only one child was expected on beyond-layout-children start", this);
          return;
        }
        children[0].setAttribute("data-child-id", [...layout.children.keys()][0]);
      }
      async #start() {
        _ssr.ssr.removeEventListener("received", this.#onssr);
        if (this.container === null) return;
        const done = layout => {
          this.#layout = layout;
          this.#hydrate();
          this.#layout.on("change", this.#render);
          this.#render();
        };
        if (this.container === document) return done(manager.main);
        const {
          localName
        } = this.container;
        if (localName === manager.main.element) return done(manager.main);
        if (!manager.layouts.has(localName)) {
          console.error(`Layout "${localName}" not found`, [...manager.layouts], manager);
          return;
        }
        done(manager.layouts.get(localName));
      }
    });
  }
});
ims.set("./ssr", {
  hash: 2390596202,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ssr = void 0;
    const ssr2 = new class extends EventTarget {
      #main;
      get main() {
        return this.#main;
      }
      #page;
      get page() {
        return this.#page;
      }
      #layouts;
      get layouts() {
        return this.#layouts;
      }
      #hierarchy = [];
      get hierarchy() {
        return this.#hierarchy;
      }
      data(main, page) {
        this.#main = main;
        this.#page = page.element;
        this.#layouts = page.parents;
        main && this.#hierarchy.push(main);
        page.parents && (this.#hierarchy = this.#hierarchy.concat(page.parents));
        this.#hierarchy.push(page.element);
        const event = new Event("received");
        this.dispatchEvent(event);
      }
    }();
    exports.ssr = ssr2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./ssr",
  "from": "ssr",
  "name": "ssr"
}];
var ssr;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ssr") && (ssr = require2 ? require2("./ssr").ssr : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
module.exports = __toCommonJS(layout_0_1_2_exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvbGF5b3V0LjAuMS4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9sYXlvdXQvX19zb3VyY2VzL2xheW91dC9jaGlsZHJlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvbGF5b3V0L19fc291cmNlcy9sYXlvdXQvc3NyLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiX19iZXlvbmRfcGtnIiwiaG1yIiwic3NyIiwibWFuYWdlciIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiSFRNTEVsZW1lbnQiLCJjb25uZWN0ZWRDYWxsYmFjayIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJtYW5hZ2VkIiwic3RhcnQiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiaW5pdGlhbGlzZWQiLCJyZWFkeSIsInRoZW4iLCJfc3NyIiwicGFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9taXNlcyIsInB1c2giLCJiaW1wb3J0Iiwic3BlY2lmaWVyIiwiZ2xvYmFsVGhpcyIsIl9fYXBwX3BhY2thZ2UiLCJQcm9taXNlIiwiYWxsIiwicm91dGluZyIsImxvZyIsImNvbnRhaW5lciIsInBhcmVudCIsInJvb3QiLCJnZXRSb290Tm9kZSIsImRvY3VtZW50IiwiaG9zdCIsIl9yZW5kZXIiLCJpbnN0YW5jZXMiLCJoYXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZWxlbWVudCIsImhpZXJhcmNoeSIsImxvY2FsTmFtZSIsImluZGV4IiwiaW5kZXhPZiIsImxlbmd0aCIsInNoYWRvd1Jvb3QiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsImZpbmQiLCJlbGVtZW50MiIsImdldEF0dHJpYnV0ZSIsImlkIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kIiwiYWN0aXZlIiwiY29udHJvbGxlciIsInNob3ciLCJjb250cm9sbGVyMiIsIkVycm9yIiwiaGlkZGVuIiwiaGlkZSIsImxheW91dCIsImtleXMiLCJkb25lIiwib24iLCJtYWluIiwibGF5b3V0cyIsImdldCIsInNzcjIiLCJFdmVudFRhcmdldCIsImRhdGEiLCJwYXJlbnRzIiwiY29uY2F0IiwiZXZlbnQiLCJFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNDQTtJQUNBO0lBSUEsSUFBSUM7SUFFSkMsZUFBZUMsT0FBTywwQkFBMEIsY0FBY0MsWUFBVztNQUNyRTtNQUNBO01BRUFDLG9CQUFpQjtRQUNiLEtBQUtDLGFBQWE7VUFBQ0MsTUFBTTtRQUFNLENBQUM7UUFFaEMsTUFBTUMsVUFBVSxNQUFLO1VBQ2pCLE1BQU1DLFFBQVEsTUFBTSxhQUFXLENBQUdDLE1BQU1DLE9BQU9DLFFBQVFDLE1BQU1GLElBQUlHLEtBQUssQ0FBQztVQUN2RWIsUUFBUWMsY0FBY04sT0FBSyxHQUFLUixRQUFRZSxNQUFNQyxLQUFLUixLQUFLO1FBQzVEO1FBR0EsSUFBSVIsU0FBUyxPQUFPTyxTQUFPO1FBRzNCVSxTQUFJQyxPQUFPLGFBQVcsR0FBS0QsU0FBSUUsaUJBQWlCLFlBQVksV0FBVztRQUV2RSxNQUFNQyxXQUEyQjtRQUNqQ0EsU0FBU0MsS0FBS0MsUUFBUSw0QkFBNEIsQ0FBQztRQUNuREYsU0FBU0MsS0FBS0MsUUFBUSx3QkFBd0IsQ0FBQztRQUUvQyxNQUFNO1VBQUNDO1lBQW1CQyxXQUFZQztRQUN0Q0wsU0FBU0MsS0FBS0MsUUFBUSxHQUFHQyxpQkFBaUIsQ0FBQztRQUUzQ0csUUFBUUMsSUFBSVAsUUFBUSxFQUFFSixLQUFLLENBQUMsQ0FBQ1ksYUFBWTtVQUNwQztZQUFDNUI7VUFB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VUFDckJsQyxRQUFRQyxNQUFNLCtEQUErRCxJQUFJO1VBQ2pGOztRQUVKcUMsU0FBUyxHQUFHTyxhQUFhLGlCQUFpQixDQUFDLEdBQUdTLE9BQU9oQixTQUFTaUIsTUFBTSxFQUFFLEVBQUU7TUFDNUU7WUFFTSxTQUFNO1FBQ1JqRCxTQUFJc0Isb0JBQW9CLFlBQVksV0FBVztRQUMvQyxJQUFJLEtBQUtULGNBQWMsTUFBTTtRQUU3QixNQUFNcUMsT0FBUUYsVUFBa0I7VUFDNUIsZUFBZUE7VUFDZixlQUFhO1VBQ2IsYUFBYUcsR0FBRyxVQUFVLFlBQVk7VUFDdEMsY0FBWTtRQUNoQjtRQUdBLElBQUksS0FBS3RDLGNBQWNJLFVBQVUsT0FBT2lDLEtBQUtuRSxRQUFRcUUsSUFBSTtRQUd6RCxNQUFNO1VBQUMzQjtZQUEyQixLQUFLWjtRQUN2QyxJQUFJWSxjQUFjMUMsUUFBUXFFLEtBQUs3QixTQUFTLE9BQU8yQixLQUFLbkUsUUFBUXFFLElBQUk7UUFHaEUsSUFBSSxDQUFDckUsUUFBUXNFLFFBQVFoQyxJQUFJSSxTQUFTLEdBQUc7VUFDakMvQixRQUFRQyxNQUFNLFdBQVc4Qix3QkFBd0IsQ0FBQyxHQUFHMUMsUUFBUXNFLE9BQU8sR0FBR3RFLE9BQU87VUFDOUU7O1FBRUptRSxLQUFLbkUsUUFBUXNFLFFBQVFDLElBQUk3QixTQUFTLENBQUM7TUFDdkM7S0FDSDs7Ozs7Ozs7Ozs7O0lDN0tpQixNQUFNOEIsT0FBTSxJQUFJLGNBQWNDLFlBQVc7TUFFdkQ7VUFDSUosT0FBSTtRQUNKLE9BQU87TUFDWDtNQUdBO1VBQ0luRCxPQUFJO1FBQ0osT0FBTztNQUNYO01BR0E7VUFDSW9ELFVBQU87UUFDUCxPQUFPO01BQ1g7TUFJQSxhQUF1QjtVQUNuQjdCLFlBQVM7UUFDVCxPQUFPO01BQ1g7TUFFQWlDLEtBQUtMLE1BQWNuRCxNQUFhO1FBQzVCLGFBQWFtRDtRQUNiLGFBQWFuRCxLQUFLc0I7UUFDbEIsZ0JBQWdCdEIsS0FBS3lEO1FBRXJCTixRQUFRLGdCQUFnQmhELEtBQUtnRCxJQUFJO1FBQ2pDbkQsS0FBS3lELFlBQVksa0JBQWtCLGdCQUFnQkMsT0FBTzFELEtBQUt5RCxPQUFPO1FBQ3RFLGdCQUFnQnRELEtBQUtILEtBQUtzQixPQUFPO1FBRWpDLE1BQU1xQyxRQUFRLElBQUlDLE1BQU0sVUFBVTtRQUNsQyxLQUFLQyxjQUFjRixLQUFLO01BQzVCO09BQ0g7SUFBQUciLCJmaWxlIjoiIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnQGJleW9uZC1qcy93aWRnZXRzL2xheW91dCc7IixudWxsLG51bGxdLCJzb3VyY2VSb290IjoiL2RvY3Mvb3V0In0=