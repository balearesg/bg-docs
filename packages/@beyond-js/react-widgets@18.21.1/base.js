System.register(["@beyond-js/kernel@0.1.7/bundle","react@18.2.0","scheduler@0.23.0","react-dom@18.2.0","react-dom@18.2.0/client","@beyond-js/kernel@0.1.7/core","@beyond-js/widgets@0.1.2/render","@beyond-js/kernel@0.1.7/styles","@beyond-js/widgets@0.1.2/controller"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.7"],["react","18.2.0"],["scheduler","0.23.0"],["react-dom","18.2.0"],["@beyond-js/widgets","0.1.2"],["@beyond-js/react-widgets","18.21.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.7/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('scheduler@0.23.0', dep), dep => dependencies.set('react-dom@18.2.0', dep), dep => dependencies.set('react-dom@18.2.0/client', dep), dep => dependencies.set('@beyond-js/kernel@0.1.7/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.2/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.7/styles', dep), dep => dependencies.set('@beyond-js/widgets@0.1.2/controller', dep)],
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

// .beyond/uimport/@beyond-js/react-widgets/base.18.21.1.js
var base_18_21_1_exports = {};
__export(base_18_21_1_exports, {
  ReactWidgetController: () => ReactWidgetController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});

// node_modules/@beyond-js/react-widgets/base/base.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.7/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("react-dom@18.2.0/client"), 0);
var dependency_3 = __toESM(require("@beyond-js/widgets@0.1.2/controller"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-widgets@18.21.1/base"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["react-dom/client", dependency_2], ["@beyond-js/widgets/controller", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./controller", {
  hash: 2569255018,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ReactWidgetController = void 0;
    var React = require2("react");
    var _client = require2("react-dom/client");
    var _controller = require2("@beyond-js/widgets/controller");
    var _widget = require2("./widget");
    var _wrapper = require2("./wrapper");
    class ReactWidgetController2 extends _controller.WidgetClientController {
      #wrapper;
      #root;
      get Widget() {
        return null;
      }
      mount(props) {
        if (!this.Widget) {
          return {
            errors: [`Widget "${this.element}" does not export a Widget class`]
          };
        }
        props = Object.assign({
          widget: this.widget,
          attributes: this.attributes,
          component: this.widget,
          store: this.store
        }, props ? props : {});
        const holder = this.widget.holder;
        const hydrate = !!holder.children.length;
        try {
          const wrapper = this.#wrapper = new _wrapper.Wrapper(this);
          const {
            styles,
            widget
          } = this;
          const {
            holder: holder2
          } = widget;
          const p = {
            wrapper,
            props,
            styles,
            holder: holder2,
            hydrate
          };
          const element = React.createElement(_widget.default, p);
          if (hydrate) {
            this.#root = (0, _client.hydrateRoot)(holder2, element);
          } else {
            const root = this.#root = (0, _client.createRoot)(holder2);
            root.render(element);
          }
        } catch (exc) {
          console.log(`Error rendering widget "${this.widget.localName}":`);
          console.log(exc.stack);
        }
      }
      unmount() {
        this.#root.unmount();
      }
      refresh() {
        this.#wrapper.changed();
      }
    }
    exports.ReactWidgetController = ReactWidgetController2;
  }
});
ims.set("./styles", {
  hash: 3645751033,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    var React = require2("react");
    function _default({
      styles
    }) {
      const rs = React.useState(0);
      React.useEffect(() => {
        const refresh = () => rs[1](prev => prev + 1);
        styles.on("change", refresh);
        return () => styles.off("change", refresh) && void 0;
      }, []);
      const head = [...styles.resources].map(url => {
        const loaded = () => styles.onloaded(url);
        return React.createElement("link", {
          key: url,
          href: url,
          rel: "stylesheet",
          onLoad: loaded,
          onError: loaded
        });
      });
      return React.createElement(React.Fragment, null, head);
    }
  }
});
ims.set("./widget", {
  hash: 90867181,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    var React = require2("react");
    var _styles = require2("./styles");
    function _default({
      wrapper,
      props,
      styles,
      holder,
      hydrate
    }) {
      const elements = [];
      elements.push(React.createElement(_styles.default, {
        key: "styles",
        styles,
        widget: props.widget
      }));
      const rs = React.useState(0);
      const refresh = () => rs[1](rs[0] + 1);
      wrapper.changed = refresh;
      const loaded = (() => {
        !styles.loaded && styles.ready.then(refresh);
        holder.style.display = "";
        return styles.loaded;
      })();
      const {
        Widget
      } = wrapper;
      const widget = React.createElement(Widget, {
        key: "widget",
        ...props
      });
      (hydrate || loaded) && elements.push(widget);
      return React.createElement(React.Fragment, null, elements);
    }
  }
});
ims.set("./wrapper", {
  hash: 4175409966,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Wrapper = void 0;
    class Wrapper {
      #Widget;
      get Widget() {
        return this.#Widget.Widget;
      }
      changed = () => void 0;
      constructor(Widget) {
        this.#Widget = Widget;
      }
    }
    exports.Wrapper = Wrapper;
  }
});
__pkg.exports.descriptor = [{
  "im": "./controller",
  "from": "ReactWidgetController",
  "name": "ReactWidgetController"
}];
var ReactWidgetController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ReactWidgetController") && (ReactWidgetController = require2 ? require2("./controller").ReactWidgetController : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
module.exports = __toCommonJS(base_18_21_1_exports);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LXdpZGdldHMvYmFzZS4xOC4yMS4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3Qtd2lkZ2V0cy9iYXNlL19fc291cmNlcy9iYXNlL2NvbnRyb2xsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdC13aWRnZXRzL2Jhc2UvX19zb3VyY2VzL2Jhc2Uvc3R5bGVzLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LXdpZGdldHMvYmFzZS9fX3NvdXJjZXMvYmFzZS93aWRnZXQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3Qtd2lkZ2V0cy9iYXNlL19fc291cmNlcy9iYXNlL3dyYXBwZXIudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIyIiwiX2NvbnRyb2xsZXIiLCJXaWRnZXQiLCJtb3VudCIsInByb3BzIiwiZXJyb3JzIiwiZWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsIndpZGdldCIsImF0dHJpYnV0ZXMiLCJjb21wb25lbnQiLCJzdG9yZSIsImhvbGRlciIsImh5ZHJhdGUiLCJjaGlsZHJlbiIsImxlbmd0aCIsIndyYXBwZXIiLCJfd3JhcHBlciIsInN0eWxlcyIsInAiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJfd2lkZ2V0IiwiaG9sZGVyMiIsInJvb3QiLCJyZW5kZXIiLCJleGMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxOYW1lIiwic3RhY2siLCJ1bm1vdW50IiwicmVmcmVzaCIsImNoYW5nZWQiLCJleHBvcnRzIiwicnMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInByZXYiLCJvbiIsIm9mZiIsImhlYWQiLCJyZXNvdXJjZXMiLCJtYXAiLCJ1cmwiLCJsb2FkZWQiLCJvbmxvYWRlZCIsImtleSIsImhyZWYiLCJyZWwiLCJvbkxvYWQiLCJvbkVycm9yIiwiZWxlbWVudHMiLCJwdXNoIiwiX3N0eWxlcyIsInJlYWR5IiwidGhlbiIsInN0eWxlIiwiZGlzcGxheSIsIldyYXBwZXIiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUVpQixNQUNGQywrQkFBOEJDLG1DQUFzQjtNQUMvRDtNQUNBO1VBR0lDLFNBQU07UUFDTixPQUFPO01BQ1g7TUFFQUMsTUFBTUMsT0FBMkI7UUFDN0IsSUFBSSxDQUFDLEtBQUtGLFFBQVE7VUFDZCxPQUFPO1lBQUNHLFFBQVEsQ0FBQyxXQUFXLEtBQUtDLHlDQUF5QztVQUFDOztRQUcvRUYsUUFBUUcsT0FBT0MsT0FBTztVQUNsQkMsUUFBUSxLQUFLQTtVQUNiQyxZQUFZLEtBQUtBO1VBQ2pCQyxXQUFXLEtBQUtGO1VBQ2hCRyxPQUFPLEtBQUtBO1dBQ2JSLFFBQVFBLFFBQVEsRUFBRTtRQUVyQixNQUFNUyxTQUFnQyxLQUFLSixPQUFRSTtRQUNuRCxNQUFNQyxVQUFVLENBQUMsQ0FBQ0QsT0FBT0UsU0FBU0M7UUFHbEMsSUFBSTtVQUNBLE1BQU1DLFVBQVUsZ0JBQWdCLElBQUlDLGlCQUFRLElBQUk7VUFDaEQsTUFBTTtZQUFDQztZQUFRVjtjQUFVO1VBQ3pCLE1BQU07WUFBQ0k7Y0FBZ0JKO1VBQ3ZCLE1BQU1XLElBQUk7WUFBQ0g7WUFBU2I7WUFBT2U7WUFBUU47WUFBUUM7VUFBTztVQUNsRCxNQUFNUixVQUFVZSxNQUFNQyxjQUFjQyxpQkFBUUgsQ0FBQztVQUU3QyxJQUFJTixTQUFTO1lBQ1QsYUFBYSx5QkFBWVUsU0FBUWxCLE9BQU87aUJBQ3JDO1lBQ0gsTUFBTW1CLE9BQU8sYUFBYSx3QkFBV0QsT0FBTTtZQUMzQ0MsS0FBS0MsT0FBT3BCLE9BQU87O2lCQUVsQnFCLEtBQVA7VUFDRUMsUUFBUUMsSUFBSSwyQkFBMkIsS0FBS3BCLE9BQU9xQixhQUFhO1VBQ2hFRixRQUFRQyxJQUFJRixJQUFJSSxLQUFLOztNQUU3QjtNQUVBQyxVQUFPO1FBQ0gsV0FBV0EsU0FBTztNQUN0QjtNQUVBQyxVQUFPO1FBQ0gsY0FBY0MsU0FBTztNQUN6Qjs7SUFDSEM7Ozs7Ozs7Ozs7OztJQzFERDtJQVFjLGtCQUFXO01BQUNoQjtPQUFjO01BQ3BDLE1BQU1pQixLQUFLZixNQUFNZ0IsU0FBUyxDQUFDO01BRzNCaEIsTUFBTWlCLFVBQVUsTUFBSztRQUNqQixNQUFNTCxVQUFVLE1BQU1HLEdBQUcsR0FBR0csUUFBUUEsT0FBTyxDQUFDO1FBQzVDcEIsT0FBT3FCLEdBQUcsVUFBVVAsT0FBTztRQUMzQixPQUFPLE1BQU9kLE9BQU9zQixJQUFJLFVBQVVSLE9BQU8sS0FBSztNQUNuRCxHQUFHLEVBQUU7TUFFTCxNQUFNUyxPQUE2QixDQUFDLEdBQUd2QixPQUFPd0IsU0FBUyxFQUFFQyxJQUFJQyxPQUFNO1FBQy9ELE1BQU1DLFNBQVMsTUFBTTNCLE9BQU80QixTQUFTRixHQUFHO1FBQ3hDLE9BQU94QjtVQUFNMkIsS0FBS0g7VUFBS0ksTUFBTUo7VUFBS0ssS0FBSTtVQUFhQyxRQUFRTDtVQUFRTSxTQUFTTjtRQUFNO01BQ3RGLENBQUM7TUFDRCxPQUFPekIsMENBQUdxQixJQUFJO0lBQ2xCOzs7Ozs7Ozs7Ozs7SUN2QkE7SUFDQTtJQUVjLGtCQUFXO01BQUN6QjtNQUFTYjtNQUFPZTtNQUFRTjtNQUFRQztPQUFhO01BQ25FLE1BQU11QyxXQUFpQztNQUN2Q0EsU0FBU0MsS0FBS2pDLG9CQUFDa0MsaUJBQU07UUFBQ1AsS0FBSTtRQUFTN0I7UUFBZ0JWLFFBQVFMLE1BQU1LO01BQU0sRUFBRztNQUUxRSxNQUFNMkIsS0FBS2YsTUFBTWdCLFNBQVMsQ0FBQztNQUMzQixNQUFNSixVQUFVLE1BQU1HLEdBQUcsR0FBR0EsR0FBRyxLQUFLLENBQUM7TUFHckNuQixRQUFRaUIsVUFBVUQ7TUFHbEIsTUFBTWEsU0FBbUIsT0FBSztRQUMxQixDQUFDM0IsT0FBTzJCLFVBQVUzQixPQUFPcUMsTUFBTUMsS0FBS3hCLE9BQU87UUFDM0NwQixPQUFPNkMsTUFBTUMsVUFBVTtRQUN2QixPQUFPeEMsT0FBTzJCO01BQ2xCLElBQUM7TUFFRCxNQUFNO1FBQUM1QztVQUFVZTtNQUNqQixNQUFNUixTQUFTWSxvQkFBQ25CLFFBQU07UUFBQzhDLEtBQUk7V0FBYTVDO01BQUs7TUFDNUMsWUFBVzBDLFdBQVdPLFNBQVNDLEtBQUs3QyxNQUFNO01BRTNDLE9BQVFZLDBDQUFHZ0MsUUFBUTtJQUN2Qjs7Ozs7Ozs7Ozs7O0lDdEJNLE1BQU9PLFFBQU87TUFDaEI7VUFDSTFELFNBQU07UUFDTixPQUFPLGFBQWFBO01BQ3hCO01BR0FnQyxVQUFVLE1BQVk7TUFFdEIyQixZQUFZM0QsUUFBNkI7UUFDckMsZUFBZUE7TUFDbkI7O0lBQ0hpQyIsImZpbGUiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICdAYmV5b25kLWpzL3JlYWN0LXdpZGdldHMvYmFzZSc7IixudWxsLG51bGwsbnVsbCxudWxsXSwic291cmNlUm9vdCI6Ii9kb2NzL291dCJ9