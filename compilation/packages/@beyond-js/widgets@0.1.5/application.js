System.register(["@beyond-js/kernel@0.1.9/bundle"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","0.1.5"]]);
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

// .beyond/uimport/@beyond-js/widgets/application.0.1.5.js
var application_0_1_5_exports = {};
__export(application_0_1_5_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(application_0_1_5_exports);

// node_modules/@beyond-js/widgets/application/application.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.5/application"
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
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvYXBwbGljYXRpb24uMC4xLjUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL2FwcGxpY2F0aW9uL19fc291cmNlcy9hcHBsaWNhdGlvbi9zdGFydHVwLnRzIl0sIm5hbWVzIjpbImFwcGxpY2F0aW9uXzBfMV81X2V4cG9ydHMiLCJfX2V4cG9ydCIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJjcmVhdGVMYXlvdXQiLCJjb25maWciLCJsYXlvdXQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZCIsInN0YXJ0dXAiLCJwcm9taXNlcyIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwicHVzaCIsImJpbXBvcnQiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsImRlZmF1bHQiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJzdGFjayIsIl9fc3NyX2ZldGNoIiwid2luZG93Iiwic3NyIiwianNvbiIsImVycm9ycyIsImxlbmd0aCIsImVycm9yIiwicmVuZGVyIiwic3BlY3MiLCJNYXAiLCJ3aWRnZXRzIiwicmVnaXN0ZXIiLCJ2YWx1ZXMiLCJpbnN0YW5jZXMiLCJwcmVyZW5kZXIiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJsc3NyIiwiZGF0YSIsIm1haW4iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx5QkFBQTtBQUFBQyxRQUFBLENBQUFELHlCQUFBO0VBQUFFLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLHlCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDS0EsU0FBU08sYUFBYUMsTUFBQSxFQUFXO01BQzdCLE1BQU07UUFBQ0M7TUFBTSxJQUFJRCxNQUFBO01BQ2pCLE1BQU1FLE9BQUEsR0FBVUMsUUFBQSxDQUFTQyxhQUFBLENBQWNILE1BQUEsR0FBU0EsTUFBQSxHQUFTLHdCQUF3QjtNQUNqRkUsUUFBQSxDQUFTRSxJQUFBLENBQUtDLE1BQUEsQ0FBT0osT0FBTztJQUNoQztJQUVBLFNBQVNLLFFBQUEsRUFBTztNQUNaLE1BQU1DLFFBQUEsR0FBMkI7TUFFakMsTUFBTTtRQUFDQztNQUFTLElBQVVDLFVBQUEsQ0FBWUMsYUFBQTtNQUN0Q0gsUUFBQSxDQUFTSSxJQUFBLENBQUtDLE9BQUEsQ0FBUSxHQUFHSixTQUFBLFNBQWtCLENBQUM7TUFDNUNELFFBQUEsQ0FBU0ksSUFBQSxDQUFLQyxPQUFBLENBQVEsR0FBR0osU0FBQSxRQUFpQixDQUFDO01BRTNDRCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLHdCQUF3QixDQUFDO01BQy9DTCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLDJCQUEyQixDQUFDO01BQ2xETCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLDRCQUE0QixDQUFDO01BQ25ETCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLDJCQUEyQixDQUFDO01BRWxEQyxPQUFBLENBQVFDLEdBQUEsQ0FBSVAsUUFBUSxFQUNmUSxJQUFBLENBQUssQ0FBQyxDQUFDO1FBQUNDLE9BQUEsRUFBU2pCO01BQU0sQ0FBQyxNQUFNRCxZQUFBLENBQWFDLE1BQU0sQ0FBQyxFQUNsRGtCLEtBQUEsQ0FBTUMsR0FBQSxJQUFPQyxPQUFBLENBQVFDLEdBQUEsQ0FBSUYsR0FBQSxDQUFJRyxLQUFLLENBQUM7SUFDNUM7SUFFQSxDQUFDLE1BQUs7TUFDRixJQUFJLENBQU9aLFVBQUEsQ0FBWWEsV0FBQSxFQUFhO1FBQ2hDaEIsT0FBQSxDQUFPO1FBQ1A7O01BTUVpQixNQUFBLENBQVFELFdBQUEsQ0FBWVAsSUFBQSxDQUFNUyxHQUFBLElBQVk7UUFDeEMsSUFBSSxDQUFDQSxHQUFBLENBQUlDLElBQUEsSUFBUUQsR0FBQSxDQUFJQyxJQUFBLENBQUtDLE1BQUEsRUFBUUMsTUFBQSxFQUFRO1VBQ3RDUixPQUFBLENBQVFTLEtBQUEsQ0FBTSwyQkFBMkJKLEdBQUEsQ0FBSUMsSUFBQSxDQUFLQyxNQUFNO1VBQ3hEcEIsT0FBQSxDQUFPO1VBQ1A7O1FBR0osTUFBTUMsUUFBQSxHQUEyQjtRQUVqQyxNQUFNO1VBQUNDO1FBQVMsSUFBVUMsVUFBQSxDQUFZQyxhQUFBO1FBQ3RDSCxRQUFBLENBQVNJLElBQUEsQ0FBS0MsT0FBQSxDQUFRLEdBQUdKLFNBQUEsU0FBa0IsQ0FBQztRQUM1Q0QsUUFBQSxDQUFTSSxJQUFBLENBQUtDLE9BQUEsQ0FBUSxHQUFHSixTQUFBLFFBQWlCLENBQUM7UUFFM0NELFFBQUEsQ0FBU0ksSUFBQSxDQUFLQyxPQUFBLENBQVEsMkJBQTJCLENBQUM7UUFDbERMLFFBQUEsQ0FBU0ksSUFBQSxDQUFLQyxPQUFBLENBQVEsMkJBQTJCLENBQUM7UUFFbERDLE9BQUEsQ0FBUUMsR0FBQSxDQUFJUCxRQUFRLEVBQUVRLElBQUEsQ0FBSyxDQUFDLENBQUM7VUFBQ0MsT0FBQSxFQUFTakI7UUFBTSxJQUFLOEIsTUFBQSxFQUFRN0IsTUFBTSxNQUFLO1VBRWpFLE1BQU04QixLQUFBLEdBQVEsSUFBSUMsR0FBQSxDQUFJUCxHQUFBLENBQUlDLElBQUEsQ0FBS08sT0FBQSxDQUFRRixLQUFLO1VBQzVDRCxNQUFBLENBQU9HLE9BQUEsQ0FBUUMsUUFBQSxDQUFTLENBQUMsR0FBR0gsS0FBQSxDQUFNSSxNQUFBLENBQU0sQ0FBRSxDQUFDO1VBRzNDLE1BQU1DLFNBQUEsR0FBWVgsR0FBQSxDQUFJQyxJQUFBLENBQUtPLE9BQUEsQ0FBUUcsU0FBQTtVQUNuQyxNQUFNQyxTQUFBLEdBQXNCUCxNQUFBLENBQU9PLFNBQUE7VUFDbkNELFNBQUEsQ0FBVUUsT0FBQSxDQUFTQyxRQUFBLElBQWtCRixTQUFBLENBQVVaLEdBQUEsQ0FBSWIsSUFBQSxDQUFLMkIsUUFBUSxDQUFDO1VBR2pFLE1BQU1DLElBQUEsR0FBaUJ2QyxNQUFBLENBQU93QixHQUFBO1VBQzlCZSxJQUFBLENBQUtDLElBQUEsQ0FBS2hCLEdBQUEsQ0FBSUMsSUFBQSxDQUFLZ0IsSUFBQSxFQUFNakIsR0FBQSxDQUFJQyxJQUFBLENBQUtpQixJQUFJO1VBQ3RDNUMsWUFBQSxDQUFhQyxNQUFNO1FBQ3ZCLENBQUMsRUFBRWtCLEtBQUEsQ0FBTUMsR0FBQSxJQUFPQyxPQUFBLENBQVFDLEdBQUEsQ0FBSUYsR0FBQSxDQUFJRyxLQUFLLENBQUM7TUFDMUMsQ0FBQztJQUNMLEdBQUUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9