System.register(["@beyond-js/kernel@0.1.9/bundle","react@18.2.0","scheduler@0.23.0","react-dom@18.2.0","react-dom@18.2.0/client","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@0.1.5/render","@beyond-js/kernel@0.1.9/styles","@beyond-js/widgets@0.1.5/controller"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["react","18.2.0"],["scheduler","0.23.0"],["react-dom","18.2.0"],["@beyond-js/widgets","0.1.5"],["@beyond-js/react-widgets","18.20.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('scheduler@0.23.0', dep), dep => dependencies.set('react-dom@18.2.0', dep), dep => dependencies.set('react-dom@18.2.0/client', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.5/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('@beyond-js/widgets@0.1.5/controller', dep)],
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

// .beyond/uimport/@beyond-js/react-widgets/base.18.20.4.js
var base_18_20_4_exports = {};
__export(base_18_20_4_exports, {
  ReactWidgetController: () => ReactWidgetController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(base_18_20_4_exports);

// node_modules/@beyond-js/react-widgets/base/base.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("react-dom@18.2.0/client"), 0);
var dependency_3 = __toESM(require("@beyond-js/widgets@0.1.5/controller"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-widgets@18.20.4/base"
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
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LXdpZGdldHMvYmFzZS4xOC4yMC40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3Qtd2lkZ2V0cy9iYXNlL19fc291cmNlcy9iYXNlL2NvbnRyb2xsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdC13aWRnZXRzL2Jhc2UvX19zb3VyY2VzL2Jhc2Uvc3R5bGVzLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LXdpZGdldHMvYmFzZS9fX3NvdXJjZXMvYmFzZS93aWRnZXQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3Qtd2lkZ2V0cy9iYXNlL19fc291cmNlcy9iYXNlL3dyYXBwZXIudHMiXSwibmFtZXMiOlsiYmFzZV8xOF8yMF80X2V4cG9ydHMiLCJfX2V4cG9ydCIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJSZWFjdCIsInJlcXVpcmUyIiwiX2NsaWVudCIsIl9jb250cm9sbGVyIiwiX3dpZGdldCIsIl93cmFwcGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyMiIsIldpZGdldENsaWVudENvbnRyb2xsZXIiLCJ3cmFwcGVyIiwicm9vdCIsIldpZGdldCIsIm1vdW50IiwicHJvcHMiLCJlcnJvcnMiLCJlbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwid2lkZ2V0IiwiYXR0cmlidXRlcyIsImNvbXBvbmVudCIsInN0b3JlIiwiaG9sZGVyIiwiaHlkcmF0ZSIsImNoaWxkcmVuIiwibGVuZ3RoIiwiV3JhcHBlciIsInN0eWxlcyIsImhvbGRlcjIiLCJwIiwiY3JlYXRlRWxlbWVudCIsImRlZmF1bHQiLCJoeWRyYXRlUm9vdCIsImNyZWF0ZVJvb3QiLCJyZW5kZXIiLCJleGMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxOYW1lIiwic3RhY2siLCJ1bm1vdW50IiwicmVmcmVzaCIsImNoYW5nZWQiLCJfZGVmYXVsdCIsInJzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwcmV2Iiwib24iLCJvZmYiLCJoZWFkIiwicmVzb3VyY2VzIiwibWFwIiwidXJsIiwibG9hZGVkIiwib25sb2FkZWQiLCJrZXkiLCJocmVmIiwicmVsIiwib25Mb2FkIiwib25FcnJvciIsIkZyYWdtZW50IiwiX3N0eWxlcyIsImVsZW1lbnRzIiwicHVzaCIsInJlYWR5IiwidGhlbiIsInN0eWxlIiwiZGlzcGxheSIsImNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBQTtBQUFBQyxRQUFBLENBQUFELG9CQUFBO0VBQUFFLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsb0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUEsSUFBQVEsS0FBQSxHQUFBQyxRQUFBO0lBQ0EsSUFBQUMsT0FBQSxHQUFBRCxRQUFBO0lBQ0EsSUFBQUUsV0FBQSxHQUFBRixRQUFBO0lBQ0EsSUFBQUcsT0FBQSxHQUFBSCxRQUFBO0lBQ0EsSUFBQUksUUFBQSxHQUFBSixRQUFBO0lBRWlCLE1BQ0ZLLHNCQUFBLFNBQThCSCxXQUFBLENBQUFJLHNCQUFBLENBQXNCO01BQy9ELENBQUFDLE9BQUE7TUFDQSxDQUFBQyxJQUFBO01BR0EsSUFBSUMsT0FBQSxFQUFNO1FBQ04sT0FBTztNQUNYO01BRUFDLE1BQU1DLEtBQUEsRUFBMkI7UUFDN0IsSUFBSSxDQUFDLEtBQUtGLE1BQUEsRUFBUTtVQUNkLE9BQU87WUFBQ0csTUFBQSxFQUFRLENBQUMsV0FBVyxL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QTZCLGFBQUEsQ0FBQTdCLEtBQUEsQ0FBQTRELFFBQUEsUUFBR1gsSUFBSTtJQUNsQjs7Ozs7Ozs7Ozs7O0lDdkJBLElBQUFqRCxLQUFBLEdBQUFDLFFBQUE7SUFDQSxJQUFBNEQsT0FBQSxHQUFBNUQsUUFBQTtJQUVjLFNBQUF5QyxTQUFXO01BQUNsQyxPQUFBO01BQVNJLEtBQUE7TUFBT2MsTUFBQTtNQUFRTCxNQUFBO01BQVFDO0lBQU8sR0FBTTtNQUNuRSxNQUFNd0MsUUFBQSxHQUFpQztNQUN2Q0EsUUFBQSxDQUFTQyxJQUFBLENBQUsvRCxLQUFBLENBQUE2QixhQUFBLENBQUNnQyxPQUFBLENBQUEvQixPQUFBLEVBQU07UUFBQ3lCLEdBQUEsRUFBSTtRQUFTN0IsTUFBQTtRQUFnQlQsTUFBQSxFQUFRTCxLQUFBLENBQU1LO01BQU0sRUFBRztNQUUxRSxNQUFNMEIsRUFBQSxHQUFLM0MsS0FBQSxDQUFNNEMsUUFBQSxDQUFTLENBQUM7TUFDM0IsTUFBTUosT0FBQSxHQUFVQSxDQUFBLEtBQU1HLEVBQUEsQ0FBRyxHQUFHQSxFQUFBLENBQUcsS0FBSyxDQUFDO01BR3JDbkMsT0FBQSxDQUFRaUMsT0FBQSxHQUFVRCxPQUFBO01BR2xCLE1BQU1hLE1BQUEsSUFBbUIsTUFBSztRQUMxQixDQUFDM0IsTUFBQSxDQUFPMkIsTUFBQSxJQUFVM0IsTUFBQSxDQUFPc0MsS0FBQSxDQUFNQyxJQUFBLENBQUt6QixPQUFPO1FBQzNDbkIsTUFBQSxDQUFPNkMsS0FBQSxDQUFNQyxPQUFBLEdBQVU7UUFDdkIsT0FBT3pDLE1BQUEsQ0FBTzJCLE1BQUE7TUFDbEIsR0FBQztNQUVELE1BQU07UUFBQzNDO01BQU0sSUFBSUYsT0FBQTtNQUNqQixNQUFNUyxNQUFBLEdBQVNqQixLQUFBLENBQUE2QixhQUFBLENBQUNuQixNQUFBLEVBQU07UUFBQzZDLEdBQUEsRUFBSTtRQUFRLEdBQUszQztNQUFLO01BQzdDLENBQUNVLE9BQUEsSUFBVytCLE1BQUEsS0FBV1MsUUFBQSxDQUFTQyxJQUFBLENBQUs5QyxNQUFNO01BRTNDLE9BQVFqQixLQUFBLENBQUE2QixhQUFBLENBQUE3QixLQUFBLENBQUE0RCxRQUFBLFFBQUdFLFFBQVE7SUFDdkI7Ozs7Ozs7Ozs7OztJQ3RCTSxNQUFPckMsT0FBQSxDQUFPO01BQ2hCLENBQUFmLE1BQUE7TUFDQSxJQUFJQSxPQUFBLEVBQU07UUFDTixPQUFPLEtBQUssQ0FBQUEsTUFBQSxDQUFRQSxNQUFBO01BQ3hCO01BR0ErQixPQUFBLEdBQVVBLENBQUEsS0FBWTtNQUV0QjJCLFlBQVkxRCxNQUFBLEVBQTZCO1FBQ3JDLEtBQUssQ0FBQUEsTUFBQSxHQUFVQSxNQUFBO01BQ25COztJQUNIWixPQUFBLENBQUEyQixPQUFBLEdBQUFBLE9BQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9wcm9qZWN0L291dCJ9