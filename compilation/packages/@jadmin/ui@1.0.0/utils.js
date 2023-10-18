System.register(["@beyond-js/kernel@0.1.8/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, getCurrentDate, __beyond_pkg, hmr;
  _export("getCurrentDate", void 0);
  return {
    setters: [function (_beyondJsKernel018Bundle) {
      dependency_0 = _beyondJsKernel018Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.4"], ["@beyond-js/react-widgets", "18.21.1"], ["@bgroup/ui", "0.0.25"], ["socket.io", "4.6.0"], ["socket.io-client", "4.6.0"], ["@types/react", "18.0.27"], ["@types/react-dom", "18.0.10"], ["@jadmin/ui", "1.0.0"], ["@bg/docs", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@jadmin/ui@1.0.0/utils"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /******************************
      INTERNAL MODULE: ./current-date
      ******************************/
      ims.set('./current-date', {
        hash: 1511825761,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getCurrentDate = void 0;
          /*bundle*/
          const getCurrentDate = () => new Date().toLocaleDateString("en-CA", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric"
          }).split("/").reverse().join("-");
          exports.getCurrentDate = getCurrentDate;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./current-date",
        "from": "getCurrentDate",
        "name": "getCurrentDate"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'getCurrentDate') && _export("getCurrentDate", getCurrentDate = require ? require('./current-date').getCurrentDate : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnZXRDdXJyZW50RGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJtb250aCIsImRheSIsInllYXIiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi9jdXJyZW50LWRhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQU87VUFDTixNQUFNQSxjQUFjLEdBQWlCQSxDQUFBLEtBQ2xDLElBQUlDLElBQUksRUFBRSxDQUFDQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7WUFDbkNDLEtBQUssRUFBRSxTQUFTO1lBQ2hCQyxHQUFHLEVBQUUsU0FBUztZQUNkQyxJQUFJLEVBQUU7V0FDVCxDQUFDLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsT0FBTyxFQUFFLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUM7VUFBQ0MsT0FBQSxDQUFBVCxjQUFBLEdBQUFBLGNBQUEifQ==