System.register(["@beyond-js/backend@0.1.9/client", "@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ActionsBridge, ims, Auth, __beyond_pkg, hmr;
  _export("Auth", void 0);
  return {
    setters: [function (_beyondJsBackend019Client) {
      dependency_0 = _beyondJsBackend019Client;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/auth-models", "1.0.0"], ["@bg/notifications", null], ["@bg/mailer", "1.0.0"], ["@beyond-js/backend", "0.1.4"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.3"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.3"], ["dayjs", "1.11.7"], ["express", "4.18.2"], ["firebase", "9.17.1"], ["googleapis", "111.0.0"], ["jsonwebtoken", "9.0.0"], ["mysql2", "3.1.1"], ["nodemailer", "6.9.1"], ["sequelize", "6.28.0"], ["socket.io-client", "4.6.0"], ["@types/react", "18.0.27"], ["@types/react-dom", "18.0.10"], ["@bg/auth-api", "1.0.0"], ["@bg/docs", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bg/auth-api@1.0.0/bridge"
        },
        "type": "bridge"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/backend/client', dependency_0]]);
      ({
        ActionsBridge
      } = brequire('@beyond-js/backend/client'));
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2603644995,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Auth = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class Auth extends ActionsBridge {
            async login(payload) {
              return await this.execute("index//Auth//login", ...arguments);
            }
            async register(payload, sendVerifyCode, verifiedCodeLink) {
              return await this.execute("index//Auth//register", ...arguments);
            }
            async changePassword(payload) {
              return await this.execute("index//Auth//changePassword", ...arguments);
            }
            async recoverPassword(payload) {
              return await this.execute("index//Auth//recoverPassword", ...arguments);
            }
            async logout(payload) {
              return await this.execute("index//Auth//logout", ...arguments);
            }
            async validateCode(payload) {
              return await this.execute("index//Auth//validateCode", ...arguments);
            }
            async verifyEmail(payload) {
              return await this.execute("index//Auth//verifyEmail", ...arguments);
            }
            async setPassword(payload) {
              return await this.execute("index//Auth//setPassword", ...arguments);
            }
            async validateToken(payload) {
              return await this.execute("index//Auth//validateToken", ...arguments);
            }
            async resendCode(payload) {
              return await this.execute("index//Auth//resendCode", ...arguments);
            }
            async getUser(payload) {
              return await this.execute("index//Auth//getUser", ...arguments);
            }
            async registerUser(payload) {
              return await this.execute("index//Auth//registerUser", ...arguments);
            }
            constructor() {
              super("backend", _beyond_context.bundle);
            }
          }
          exports.Auth = Auth;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Auth",
        "name": "Auth"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Auth') && _export("Auth", Auth = require ? require('./index').Auth : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiQXV0aCIsIkFjdGlvbnNCcmlkZ2UiLCJsb2dpbiIsInBheWxvYWQiLCJleGVjdXRlIiwiYXJndW1lbnRzIiwicmVnaXN0ZXIiLCJzZW5kVmVyaWZ5Q29kZSIsInZlcmlmaWVkQ29kZUxpbmsiLCJjaGFuZ2VQYXNzd29yZCIsInJlY292ZXJQYXNzd29yZCIsImxvZ291dCIsInZhbGlkYXRlQ29kZSIsInZlcmlmeUVtYWlsIiwic2V0UGFzc3dvcmQiLCJ2YWxpZGF0ZVRva2VuIiwicmVzZW5kQ29kZSIsImdldFVzZXIiLCJyZWdpc3RlclVzZXIiLCJjb25zdHJ1Y3RvciIsImJ1bmRsZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxlQUFBLEdBQUFDLE9BQUE7VUFFTyxZQUFZO1VBQVUsTUFBT0MsSUFBSyxTQUFRQyxhQUFhO1lBQzFELE1BQU1DLEtBQUtBLENBQUNDLE9BSVg7Y0FDRyxPQUFPLE1BQU0sSUFBSSxDQUFDQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQ2pFO1lBQ0EsTUFBTUMsUUFBUUEsQ0FBQ0gsT0FVZCxFQUFFSSxjQUF3QixFQUFFQyxnQkFBeUI7Y0FDbEQsT0FBTyxNQUFNLElBQUksQ0FBQ0osT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUNwRTtZQUNBLE1BQU1JLGNBQWNBLENBQUNOLE9BTXBCO2NBQ0csT0FBTyxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLDZCQUE2QixFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUMxRTtZQUNBLE1BQU1LLGVBQWVBLENBQUNQLE9BR3JCO2NBQ0csT0FBTyxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLDhCQUE4QixFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUMzRTtZQUNBLE1BQU1NLE1BQU1BLENBQUNSLE9BRVo7Y0FDRyxPQUFPLE1BQU0sSUFBSSxDQUFDQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQ2xFO1lBQ0EsTUFBTU8sWUFBWUEsQ0FBQ1QsT0FHbEI7Y0FDRyxPQUFPLE1BQU0sSUFBSSxDQUFDQyxPQUFPLENBQUMsMkJBQTJCLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQ3hFO1lBQ0EsTUFBTVEsV0FBV0EsQ0FBQ1YsT0FFakI7Y0FDRyxPQUFPLE1BQU0sSUFBSSxDQUFDQyxPQUFPLENBQUMsMEJBQTBCLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQ3ZFO1lBQ0EsTUFBTVMsV0FBV0EsQ0FBQ1gsT0FNakI7Y0FDRyxPQUFPLE1BQU0sSUFBSSxDQUFDQyxPQUFPLENBQUMsMEJBQTBCLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQ3ZFO1lBQ0EsTUFBTVUsYUFBYUEsQ0FBQ1osT0FHbkI7Y0FDRyxPQUFPLE1BQU0sSUFBSSxDQUFDQyxPQUFPLENBQUMsNEJBQTRCLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQ3pFO1lBQ0EsTUFBTVcsVUFBVUEsQ0FBQ2IsT0FHaEI7Y0FDRyxPQUFPLE1BQU0sSUFBSSxDQUFDQyxPQUFPLENBQUMseUJBQXlCLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQ3RFO1lBQ0EsTUFBTVksT0FBT0EsQ0FBQ2QsT0FFYjtjQUNHLE9BQU8sTUFBTSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDbkU7WUFDQSxNQUFNYSxZQUFZQSxDQUFDZixPQUFZO2NBQzNCLE9BQU8sTUFBTSxJQUFJLENBQUNDLE9BQU8sQ0FBQywyQkFBMkIsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDeEU7WUFDQWMsWUFBQTtjQUNJLEtBQUssQ0FBQyxTQUFTLEVBQUVyQixlQUFBLENBQUFzQixNQUFNLENBQUM7WUFDNUI7O1VBQ0hDLE9BQUEsQ0FBQXJCLElBQUEsR0FBQUEsSUFBQSJ9