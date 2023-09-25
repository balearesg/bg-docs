System.register(["@beyond-js/kernel@0.1.8/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, Api, JCall, __beyond_pkg, hmr;
  _export({
    Api: void 0,
    JCall: void 0
  });
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
          "vspecifier": "@jadmin/ui@1.0.0/api"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./api
      *********************/
      ims.set('./api', {
        hash: 984446600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Api = void 0;
          var _jcall = require("./jcall");
          /*bundle*/
          class Api {
            async action(method = 'get', route, specs = {}) {
              const call = new _jcall.JCall();
              return call[method](this.getURL(route), specs);
            }
            getURL(route) {
              return route;
            }
            get(route, specs) {
              return this.action('get', route, specs);
            }
            post(route, specs) {
              return this.action('post', route, specs);
            }
          }
          exports.Api = Api;
        }
      });

      /***********************
      INTERNAL MODULE: ./jcall
      ***********************/

      ims.set('./jcall', {
        hash: 4220226571,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.JCall = JCall;
          /*bundle*/
          function JCall() {
            this.checkToken = headers => {
              if (typeof window === 'undefined') return headers;
              let session = window.localStorage.getItem('session');
              if (!session) return headers;
              const sessionObject = JSON.parse(session);
              headers.append('Authorization', `Bearer ${sessionObject.accessToken}`);
              return headers;
            };
            this.request = async (url, method = 'get', params = {}, headersSpecs = {}) => {
              try {
                const keys = Object.keys(headersSpecs);
                let headers = new Headers();
                keys.forEach(key => headers.append(key, headersSpecs[key]));
                // headers = await this.checkToken(headers);
                const specs = {
                  method,
                  headers,
                  mode: 'cors'
                };
                const emptyParams = Object.entries(params).length === 0 && params.constructor === Object;
                if (method === 'post' && !emptyParams) specs.body = JSON.stringify(params);else if (!emptyParams && method === 'get') {
                  const parameters = Object.keys(params);
                  if (parameters.length) {
                    url += "?";
                    parameters.forEach(key => {
                      if ([NaN, undefined, ''].includes(params[key])) return;
                      url += `&${key}=${params[key]}`;
                    });
                  }
                }
                const response = await fetch(url, specs);
                return response.json();
              } catch (e) {
                console.error("error jcall", e);
              }
            };
            this.get = (url, params, headers) => this.request(url, 'get', params, headers);
            this.post = (url, params, headers = {
              'Content-Type': 'application/json'
            }) => this.request(url, 'post', params, headers);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./api",
        "from": "Api",
        "name": "Api"
      }, {
        "im": "./jcall",
        "from": "JCall",
        "name": "JCall"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Api') && _export("Api", Api = require ? require('./api').Api : value);
        (require || prop === 'JCall') && _export("JCall", JCall = require ? require('./jcall').JCall : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfamNhbGwiLCJyZXF1aXJlIiwiQXBpIiwiYWN0aW9uIiwibWV0aG9kIiwicm91dGUiLCJzcGVjcyIsImNhbGwiLCJKQ2FsbCIsImdldFVSTCIsImdldCIsInBvc3QiLCJleHBvcnRzIiwiY2hlY2tUb2tlbiIsImhlYWRlcnMiLCJ3aW5kb3ciLCJzZXNzaW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNlc3Npb25PYmplY3QiLCJKU09OIiwicGFyc2UiLCJhcHBlbmQiLCJhY2Nlc3NUb2tlbiIsInJlcXVlc3QiLCJ1cmwiLCJwYXJhbXMiLCJoZWFkZXJzU3BlY3MiLCJrZXlzIiwiT2JqZWN0IiwiSGVhZGVycyIsImZvckVhY2giLCJrZXkiLCJtb2RlIiwiZW1wdHlQYXJhbXMiLCJlbnRyaWVzIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJib2R5Iiwic3RyaW5naWZ5IiwicGFyYW1ldGVycyIsIk5hTiIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJlIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZXMiOlsiL2FwaS50cyIsIi9qY2FsbC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVRO1VBQVUsTUFBT0MsR0FBRztZQUV4QixNQUFNQyxNQUFNQSxDQUFDQyxNQUFNLEdBQUcsS0FBSyxFQUFFQyxLQUFhLEVBQUVDLEtBQUEsR0FBZ0IsRUFBRTtjQUUxRCxNQUFNQyxJQUFJLEdBQVMsSUFBSVAsTUFBQSxDQUFBUSxLQUFLLEVBQUU7Y0FDOUIsT0FBT0QsSUFBSSxDQUFDSCxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUNLLE1BQU0sQ0FBQ0osS0FBSyxDQUFDLEVBQUVDLEtBQUssQ0FBQztZQUNsRDtZQUVBRyxNQUFNQSxDQUFDSixLQUFhO2NBRWhC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