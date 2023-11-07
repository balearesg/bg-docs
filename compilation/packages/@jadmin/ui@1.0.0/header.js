System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Header, __beyond_pkg, hmr;
  _export("Header", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/react-widgets", "18.21.1"], ["@bgroup/ui", "0.0.36"], ["socket.io", "4.7.2"], ["socket.io-client", "4.7.2"], ["@types/react", "18.2.21"], ["@types/react-dom", "18.2.7"], ["@jadmin/ui", "1.0.0"], ["@bg/docs", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@jadmin/ui@1.0.0/header"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('@jadmin/ui@1.0.0/header');
      ims = new Map();
      /************************
      INTERNAL MODULE: ./header
      ************************/
      ims.set('./header', {
        hash: 3785621207,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var React = require("react");
          /*bundle*/ /**
                      *
                      * @param param element : Puede ser cualquier cosa.
                      *
                      * @returns
                      */
          function Header({
            title,
            element
          }) {
            return React.createElement("header", {
              className: "jadmin-header"
            }, title && React.createElement("h1", {
              id: "title",
              className: "title"
            }, title), element && element);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./header",
        "from": "Header",
        "name": "Header"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Header') && _export("Header", Header = require ? require('./header').Header : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJIZWFkZXIiLCJ0aXRsZSIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaWQiXSwic291cmNlcyI6WyIvY29kZS90cy9oZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBV08sV0FOUDs7Ozs7O1VBTWlCLFNBQVVDLE1BQU1BLENBQUM7WUFBRUMsS0FBSztZQUFFQztVQUFPLENBQVM7WUFDdkQsT0FDSUosS0FBQSxDQUFBSyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUFlLEdBQzVCSCxLQUFLLElBQ0ZILEtBQUEsQ0FBQUssYUFBQTtjQUFJRSxFQUFFLEVBQUMsT0FBTztjQUFDRCxTQUFTLEVBQUM7WUFBTyxHQUMzQkgsS0FBSyxDQUViLEVBQ0FDLE9BQU8sSUFBSUEsT0FBTyxDQUNkO1VBRWpCIn0=