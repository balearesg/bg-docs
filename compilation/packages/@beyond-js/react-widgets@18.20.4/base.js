System.register(["@beyond-js/kernel@0.1.8/bundle","react@18.2.0","scheduler@0.23.0","react-dom@18.2.0","react-dom@18.2.0/client","@beyond-js/kernel@0.1.8/core","@beyond-js/widgets@0.1.3/render","@beyond-js/kernel@0.1.8/styles","@beyond-js/widgets@0.1.3/controller"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.8"],["react","18.2.0"],["scheduler","0.23.0"],["react-dom","18.2.0"],["@beyond-js/widgets","0.1.3"],["@beyond-js/react-widgets","18.20.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.8/bundle', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('scheduler@0.23.0', dep), dep => dependencies.set('react-dom@18.2.0', dep), dep => dependencies.set('react-dom@18.2.0/client', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.3/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.8/styles', dep), dep => dependencies.set('@beyond-js/widgets@0.1.3/controller', dep)],
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

// .beyond/uimport/temp/@beyond-js/react-widgets/base.18.20.4.js
var base_18_20_4_exports = {};
__export(base_18_20_4_exports, {
  ReactWidgetController: () => ReactWidgetController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(base_18_20_4_exports);

// node_modules/@beyond-js/react-widgets/base/base.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.8/bundle"), 0);
var dependency_1 = __toESM(require("react@18.2.0"), 0);
var dependency_2 = __toESM(require("react-dom@18.2.0/client"), 0);
var dependency_3 = __toESM(require("@beyond-js/widgets@0.1.3/controller"), 0);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3Qtd2lkZ2V0cy9iYXNlLjE4LjIwLjQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdC13aWRnZXRzL2Jhc2UvX19zb3VyY2VzL2Jhc2UvY29udHJvbGxlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LXdpZGdldHMvYmFzZS9fX3NvdXJjZXMvYmFzZS9zdHlsZXMudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3Qtd2lkZ2V0cy9iYXNlL19fc291cmNlcy9iYXNlL3dpZGdldC50c3giLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdC13aWRnZXRzL2Jhc2UvX19zb3VyY2VzL2Jhc2Uvd3JhcHBlci50cyJdLCJuYW1lcyI6WyJiYXNlXzE4XzIwXzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0IiwicmVxdWlyZTIiLCJfY2xpZW50IiwiX2NvbnRyb2xsZXIiLCJfd2lkZ2V0IiwiX3dyYXBwZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIyIiwiV2lkZ2V0Q2xpZW50Q29udHJvbGxlciIsIndyYXBwZXIiLCJyb290IiwiV2lkZ2V0IiwibW91bnQiLCJwcm9wcyIsImVycm9ycyIsImVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJ3aWRnZXQiLCJhdHRyaWJ1dGVzIiwiY29tcG9uZW50Iiwic3RvcmUiLCJob2xkZXIiLCJoeWRyYXRlIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJXcmFwcGVyIiwic3R5bGVzIiwiaG9sZGVyMiIsInAiLCJjcmVhdGVFbGVtZW50IiwiZGVmYXVsdCIsImh5ZHJhdGVSb290IiwiY3JlYXRlUm9vdCIsInJlbmRlciIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbE5hbWUiLCJzdGFjayIsInVubW91bnQiLCJyZWZyZXNoIiwiY2hhbmdlZCIsIl9kZWZhdWx0IiwicnMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInByZXYiLCJvbiIsIm9mZiIsImhlYWQiLCJyZXNvdXJjZXMiLCJtYXAiLCJ1cmwiLCJsb2FkZWQiLCJvbmxvYWRlZCIsImtleSIsImhyZWYiLCJyZWwiLCJvbkxvYWQiLCJvbkVycm9yIiwiRnJhZ21lbnQiLCJfc3R5bGVzIiwiZWxlbWVudHMiLCJwdXNoIiwicmVhZHkiLCJ0aGVuIiwic3R5bGUiLCJkaXNwbGF5IiwiY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsb0JBQUE7RUFBQUUscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCxvQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxJQUFBUSxLQUFBLEdBQUFDLFFBQUE7SUFDQSxJQUFBQyxPQUFBLEdBQUFELFFBQUE7SUFDQSxJQUFBRSxXQUFBLEdBQUFGLFFBQUE7SUFDQSxJQUFBRyxPQUFBLEdBQUFILFFBQUE7SUFDQSxJQUFBSSxRQUFBLEdBQUFKLFFBQUE7SUFFaUIsTUFDRkssc0JBQUEsU0FBOEJILFdBQUEsQ0FBQUksc0JBQUEsQ0FBc0I7TUFDL0QsQ0FBQUMsT0FBQTtNQUNBLENBQUFDLElBQUE7TUFHQSxJQUFJQyxPQUFBLEVBQU07UUFDTixPQUFPO01BQ1g7TUFFQUMsTUFBTUMsS0FBQSxFQUEyQjtRQUM3QixJQUFJLENBQUMsS0FBS0YsTUFBQSxFQUFRO1VBQ2QsT0FBTztZQUFDRyxNQUFBLEVBQVEsQ0FBQyxX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QSxDQUFBNkIsYUFBQSxDQUFBN0IsS0FBQSxDQUFBNEQsUUFBQSxRQUFHWCxJQUFJO0lBQ2xCOzs7Ozs7Ozs7Ozs7SUN2QkEsSUFBQWpELEtBQUEsR0FBQUMsUUFBQTtJQUNBLElBQUE0RCxPQUFBLEdBQUE1RCxRQUFBO0lBRWMsU0FBQXlDLFNBQVc7TUFBQ2xDLE9BQUE7TUFBU0ksS0FBQTtNQUFPYyxNQUFBO01BQVFMLE1BQUE7TUFBUUM7SUFBTyxHQUFNO01BQ25FLE1BQU13QyxRQUFBLEdBQWlDO01BQ3ZDQSxRQUFBLENBQVNDLElBQUEsQ0FBSy9ELEtBQUEsQ0FBQTZCLGFBQUEsQ0FBQ2dDLE9BQUEsQ0FBQS9CLE9BQUEsRUFBTTtRQUFDeUIsR0FBQSxFQUFJO1FBQVM3QixNQUFBO1FBQWdCVCxNQUFBLEVBQVFMLEtBQUEsQ0FBTUs7TUFBTSxFQUFHO01BRTFFLE1BQU0wQixFQUFBLEdBQUszQyxLQUFBLENBQU00QyxRQUFBLENBQVMsQ0FBQztNQUMzQixNQUFNSixPQUFBLEdBQVVBLENBQUEsS0FBTUcsRUFBQSxDQUFHLEdBQUdBLEVBQUEsQ0FBRyxLQUFLLENBQUM7TUFHckNuQyxPQUFBLENBQVFpQyxPQUFBLEdBQVVELE9BQUE7TUFHbEIsTUFBTWEsTUFBQSxJQUFtQixNQUFLO1FBQzFCLENBQUMzQixNQUFBLENBQU8yQixNQUFBLElBQVUzQixNQUFBLENBQU9zQyxLQUFBLENBQU1DLElBQUEsQ0FBS3pCLE9BQU87UUFDM0NuQixNQUFBLENBQU82QyxLQUFBLENBQU1DLE9BQUEsR0FBVTtRQUN2QixPQUFPekMsTUFBQSxDQUFPMkIsTUFBQTtNQUNsQixJQUFDO01BRUQsTUFBTTtRQUFDM0M7TUFBTSxJQUFJRixPQUFBO01BQ2pCLE1BQU1TLE1BQUEsR0FBU2pCLEtBQUEsQ0FBQTZCLGFBQUEsQ0FBQ25CLE1BQUEsRUFBTTtRQUFDNkMsR0FBQSxFQUFJO1FBQVEsR0FBSzNDO01BQUs7TUFDN0MsQ0FBQ1UsT0FBQSxJQUFXK0IsTUFBQSxLQUFXUyxRQUFBLENBQVNDLElBQUEsQ0FBSzlDLE1BQU07TUFFM0MsT0FBUWpCLEtBQUEsQ0FBQTZCLGFBQUEsQ0FBQTdCLEtBQUEsQ0FBQTRELFFBQUEsUUFBR0UsUUFBUTtJQUN2Qjs7Ozs7Ozs7Ozs7O0lDdEJNLE1BQU9yQyxPQUFBLENBQU87TUFDaEIsQ0FBQWYsTUFBQTtNQUNBLElBQUlBLE9BQUEsRUFBTTtRQUNOLE9BQU8sS0FBSyxDQUFBQSxNQUFBLENBQVFBLE1BQUE7TUFDeEI7TUFHQStCLE9BQUEsR0FBVUEsQ0FBQSxLQUFZO01BRXRCMkIsWUFBWTFELE1BQUEsRUFBNkI7UUFDckMsS0FBSyxDQUFBQSxNQUFBLEdBQVVBLE1BQUE7TUFDbkI7O0lBQ0haLE9BQUEsQ0FBQTJCLE9BQUEsR0FBQUEsT0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=