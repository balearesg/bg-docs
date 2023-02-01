System.register(["@beyond-js/kernel@0.1.7/bundle"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.7"],["@beyond-js/widgets","0.1.2"]]);
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

// .beyond/uimport/@beyond-js/widgets/application.0.1.2.js
var application_0_1_2_exports = {};
__export(application_0_1_2_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});

// node_modules/@beyond-js/widgets/application/application.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.7/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.2/application"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([]);
var ims = /* @__PURE__ */new Map();
ims.set("./startup", {
  hash: 3577862121,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function createLayout(config) {
      const {
        layout
      } = config;
      const element = document.createElement(layout ? layout : "beyond-layout-children");
      document.body.append(element);
    }
    function startup() {
      const promises = [];
      const {
        specifier
      } = globalThis.__app_package;
      promises.push(bimport(`${specifier}/config`));
      promises.push(bimport(`${specifier}/start`));
      promises.push(bimport("@beyond-js/kernel/core"));
      promises.push(bimport("@beyond-js/kernel/routing"));
      promises.push(bimport("@beyond-js/widgets/routing"));
      promises.push(bimport("@beyond-js/widgets/layout"));
      Promise.all(promises).then(([{
        default: config
      }]) => createLayout(config)).catch(exc => console.log(exc.stack));
    }
    (() => {
      if (!globalThis.__ssr_fetch) {
        startup();
        return;
      }
      window.__ssr_fetch.then(ssr => {
        if (!ssr.json || ssr.json.errors?.length) {
          console.error("Error getting ssr data:", ssr.json.errors);
          startup();
          return;
        }
        const promises = [];
        const {
          specifier
        } = globalThis.__app_package;
        promises.push(bimport(`${specifier}/config`));
        promises.push(bimport(`${specifier}/start`));
        promises.push(bimport("@beyond-js/widgets/render"));
        promises.push(bimport("@beyond-js/widgets/layout"));
        Promise.all(promises).then(([{
          default: config
        },, render, layout]) => {
          const specs = new Map(ssr.json.widgets.specs);
          render.widgets.register([...specs.values()]);
          const instances = ssr.json.widgets.instances;
          const prerender = render.prerender;
          instances.forEach(instance => prerender.ssr.push(instance));
          const lssr = layout.ssr;
          lssr.data(ssr.json.main, ssr.json.page);
          createLayout(config);
        }).catch(exc => console.log(exc.stack));
      });
    })();
  }
});
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
module.exports = __toCommonJS(application_0_1_2_exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvYXBwbGljYXRpb24uMC4xLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL2FwcGxpY2F0aW9uL19fc291cmNlcy9hcHBsaWNhdGlvbi9zdGFydHVwLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiX19iZXlvbmRfcGtnIiwiaG1yIiwiY29uZmlnIiwibGF5b3V0IiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmQiLCJwcm9taXNlcyIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwicHVzaCIsImJpbXBvcnQiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsImRlZmF1bHQiLCJjcmVhdGVMYXlvdXQiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJzdGFjayIsIl9fc3NyX2ZldGNoIiwic3RhcnR1cCIsIndpbmRvdyIsInNzciIsImpzb24iLCJlcnJvcnMiLCJsZW5ndGgiLCJlcnJvciIsInJlbmRlciIsInNwZWNzIiwiTWFwIiwid2lkZ2V0cyIsInJlZ2lzdGVyIiwidmFsdWVzIiwiaW5zdGFuY2VzIiwicHJlcmVuZGVyIiwiZm9yRWFjaCIsImluc3RhbmNlIiwibHNzciIsImRhdGEiLCJtYWluIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNLQSxzQkFBc0JDLFFBQVc7TUFDN0IsTUFBTTtRQUFDQztVQUFVRDtNQUNqQixNQUFNRSxVQUFVQyxTQUFTQyxjQUFjSCxTQUFTQSxTQUFTLHdCQUF3QjtNQUNqRkUsU0FBU0UsS0FBS0MsT0FBT0osT0FBTztJQUNoQztJQUVBLG1CQUFnQjtNQUNaLE1BQU1LLFdBQTJCO01BRWpDLE1BQU07UUFBQ0M7VUFBbUJDLFdBQVlDO01BQ3RDSCxTQUFTSSxLQUFLQyxRQUFRLEdBQUdKLGtCQUFrQixDQUFDO01BQzVDRCxTQUFTSSxLQUFLQyxRQUFRLEdBQUdKLGlCQUFpQixDQUFDO01BRTNDRCxTQUFTSSxLQUFLQyxRQUFRLHdCQUF3QixDQUFDO01BQy9DTCxTQUFTSSxLQUFLQyxRQUFRLDJCQUEyQixDQUFDO01BQ2xETCxTQUFTSSxLQUFLQyxRQUFRLDRCQUE0QixDQUFDO01BQ25ETCxTQUFTSSxLQUFLQyxRQUFRLDJCQUEyQixDQUFDO01BRWxEQyxRQUFRQyxJQUFJUCxRQUFRLEVBQ2ZRLEtBQUssQ0FBQyxDQUFDO1FBQUNDLFNBQVNoQjthQUFhaUIsYUFBYWpCLE1BQU0sQ0FBQyxFQUNsRGtCLE1BQU1DLE9BQU9DLFFBQVFDLElBQUlGLElBQUlHLEtBQUssQ0FBQztJQUM1QztJQUVDLE9BQUs7TUFDRixJQUFJLENBQU9iLFdBQVljLGFBQWE7UUFDaENDLFNBQU87UUFDUDs7TUFNRUMsT0FBUUYsWUFBWVIsS0FBTVcsT0FBWTtRQUN4QyxJQUFJLENBQUNBLElBQUlDLFFBQVFELElBQUlDLEtBQUtDLFFBQVFDLFFBQVE7VUFDdENULFFBQVFVLE1BQU0sMkJBQTJCSixJQUFJQyxLQUFLQyxNQUFNO1VBQ3hESixTQUFPO1VBQ1A7O1FBR0osTUFBTWpCLFdBQTJCO1FBRWpDLE1BQU07VUFBQ0M7WUFBbUJDLFdBQVlDO1FBQ3RDSCxTQUFTSSxLQUFLQyxRQUFRLEdBQUdKLGtCQUFrQixDQUFDO1FBQzVDRCxTQUFTSSxLQUFLQyxRQUFRLEdBQUdKLGlCQUFpQixDQUFDO1FBRTNDRCxTQUFTSSxLQUFLQyxRQUFRLDJCQUEyQixDQUFDO1FBQ2xETCxTQUFTSSxLQUFLQyxRQUFRLDJCQUEyQixDQUFDO1FBRWxEQyxRQUFRQyxJQUFJUCxRQUFRLEVBQUVRLEtBQUssQ0FBQyxDQUFDO1VBQUNDLFNBQVNoQjtZQUFXK0IsUUFBUTlCLFlBQVc7VUFFakUsTUFBTStCLFFBQVEsSUFBSUMsSUFBSVAsSUFBSUMsS0FBS08sUUFBUUYsS0FBSztVQUM1Q0QsT0FBT0csUUFBUUMsU0FBUyxDQUFDLEdBQUdILE1BQU1JLFFBQVEsQ0FBQztVQUczQyxNQUFNQyxZQUFZWCxJQUFJQyxLQUFLTyxRQUFRRztVQUNuQyxNQUFNQyxZQUFzQlAsT0FBT087VUFDbkNELFVBQVVFLFFBQVNDLFlBQWtCRixVQUFVWixJQUFJZixLQUFLNkIsUUFBUSxDQUFDO1VBR2pFLE1BQU1DLE9BQWlCeEMsT0FBT3lCO1VBQzlCZSxLQUFLQyxLQUFLaEIsSUFBSUMsS0FBS2dCLE1BQU1qQixJQUFJQyxLQUFLaUIsSUFBSTtVQUN0QzNCLGFBQWFqQixNQUFNO1FBQ3ZCLENBQUMsRUFBRWtCLE1BQU1DLE9BQU9DLFFBQVFDLElBQUlGLElBQUlHLEtBQUssQ0FBQztNQUMxQyxDQUFDO0lBQ0wsSUFBQyIsImZpbGUiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICdAYmV5b25kLWpzL3dpZGdldHMvYXBwbGljYXRpb24nOyIsbnVsbF0sInNvdXJjZVJvb3QiOiIvZG9jcy9vdXQifQ==