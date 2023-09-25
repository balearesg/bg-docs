System.register(["@beyond-js/kernel@0.1.8/bundle", "react@18.2.0", "@bgroup/ui@0.0.31/spinner", "@beyond-js/kernel@0.1.8/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, LoadingPage, __beyond_pkg, hmr;
  _export("LoadingPage", void 0);
  return {
    setters: [function (_beyondJsKernel018Bundle) {
      dependency_0 = _beyondJsKernel018Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_bgroupUi0031Spinner) {
      dependency_2 = _bgroupUi0031Spinner;
    }, function (_beyondJsKernel018Styles) {
      dependency_3 = _beyondJsKernel018Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/auth-api", "1.0.0"], ["@bg/auth-models", "1.0.0"], ["@bg/mailer", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.20.4"], ["@bgroup/ui", "0.0.31"], ["@mdx-js/mdx", "2.3.0"], ["@mdx-js/react", "2.3.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.0"], ["@beyond-js/kernel", "0.1.8"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/backend", "0.1.4"], ["@bg/docs", "1.0.0"], ["@bg/docs", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bg/docs@1.0.0/loading-page"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@bgroup/ui/spinner', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/docs@1.0.0/loading-page');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./loading
      *************************/
      ims.set('./loading', {
        hash: 910244843,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LoadingPage = LoadingPage;
          var React = require("react");
          var _spinner = require("@bgroup/ui/spinner");
          /*bundle*/
          function LoadingPage({
            loading,
            content
          }) {
            let cls = loading ? 'loading-page loading-proses' : 'loading-page main-loading';
            cls += content ? " loading-content" : "";
            return React.createElement("div", {
              className: cls
            }, React.createElement(_spinner.BeyondSpinner, null));
          }
          ;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./loading",
        "from": "LoadingPage",
        "name": "LoadingPage"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'LoadingPage') && _export("LoadingPage", LoadingPage = require ? require('./loading').LoadingPage : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfc3Bpbm5lciIsIkxvYWRpbmdQYWdlIiwibG9hZGluZyIsImNvbnRlbnQiLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQmV5b25kU3Bpbm5lciJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2xvYWRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFLTztVQUFVLFNBQ0pFLFdBQVdBLENBQUM7WUFBRUMsT0FBTztZQUFFQztVQUFPLENBQWM7WUFDakQsSUFBSUMsR0FBRyxHQUFZRixPQUFPLEdBQUcsNkJBQTZCLEdBQUcsMkJBQTJCO1lBQ3hGRSxHQUFHLElBQUdELE9BQU8sR0FBRyxrQkFBa0IsR0FBRyxFQUFFO1lBQzNDLE9BQ0lMLEtBQUEsQ0FBQU8sYUFBQTtjQUFLQyxTQUFTLEVBQUVGO1lBQUcsR0FBRU4sS0FBQSxDQUFBTyxhQUFBLENBQUNMLFFBQUEsQ0FBQU8sYUFBYSxPQUFHLENBQU07VUFFcEQ7VUFBQyJ9