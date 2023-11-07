System.register(["@beyond-js/backend@0.1.9/client", "@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ActionsBridge, ims, ProfileBridge, ProfilesBridge, UserBridge, UsersBridge, __beyond_pkg, hmr;
  _export({
    ProfileBridge: void 0,
    ProfilesBridge: void 0,
    UserBridge: void 0,
    UsersBridge: void 0
  });
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
          "vspecifier": "@bg/auth-api@1.0.0/entities",
          "multibundle": true
        },
        "type": "bridge"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/backend/client', dependency_0]]);
      ({
        ActionsBridge
      } = brequire('@beyond-js/backend/client'));
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./profiles/profile
      **********************************/
      ims.set('./profiles/profile', {
        hash: 1034348926,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileBridge = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class ProfileBridge extends ActionsBridge {
            async data(params) {
              return await this.execute("profiles\\profile//ProfileBridge//data", ...arguments);
            }
            async publish(params) {
              return await this.execute("profiles\\profile//ProfileBridge//publish", ...arguments);
            }
            constructor() {
              super("backend", _beyond_context.bundle);
            }
          }
          exports.ProfileBridge = ProfileBridge;
        }
      });

      /***********************************
      INTERNAL MODULE: ./profiles/profiles
      ***********************************/

      ims.set('./profiles/profiles', {
        hash: 945407988,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfilesBridge = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class ProfilesBridge extends ActionsBridge {
            async list(params) {
              return await this.execute("profiles\\profiles//ProfilesBridge//list", ...arguments);
            }
            constructor() {
              super("backend", _beyond_context.bundle);
            }
          }
          exports.ProfilesBridge = ProfilesBridge;
        }
      });

      /****************************
      INTERNAL MODULE: ./users/user
      ****************************/

      ims.set('./users/user', {
        hash: 906697607,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserBridge = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class UserBridge extends ActionsBridge {
            async data(params) {
              return await this.execute("users\\user//UserBridge//data", ...arguments);
            }
            async publish(params) {
              return await this.execute("users\\user//UserBridge//publish", ...arguments);
            }
            async getProfiles(params) {
              return await this.execute("users\\user//UserBridge//getProfiles", ...arguments);
            }
            async updateProfiles(params) {
              return await this.execute("users\\user//UserBridge//updateProfiles", ...arguments);
            }
            constructor() {
              super("backend", _beyond_context.bundle);
            }
          }
          exports.UserBridge = UserBridge;
        }
      });

      /*****************************
      INTERNAL MODULE: ./users/users
      *****************************/

      ims.set('./users/users', {
        hash: 2919287712,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UsersBridge = void 0;
          var _beyond_context = require("beyond_context");
          /*actions*/ /*bundle*/
          class UsersBridge extends ActionsBridge {
            async list(params) {
              return await this.execute("users\\users//UsersBridge//list", ...arguments);
            }
            async getProfiles(params) {
              return await this.execute("users\\users//UsersBridge//getProfiles", ...arguments);
            }
            constructor() {
              super("backend", _beyond_context.bundle);
            }
          }
          exports.UsersBridge = UsersBridge;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./profiles/profile",
        "from": "ProfileBridge",
        "name": "ProfileBridge"
      }, {
        "im": "./profiles/profiles",
        "from": "ProfilesBridge",
        "name": "ProfilesBridge"
      }, {
        "im": "./users/user",
        "from": "UserBridge",
        "name": "UserBridge"
      }, {
        "im": "./users/users",
        "from": "UsersBridge",
        "name": "UsersBridge"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ProfileBridge') && _export("ProfileBridge", ProfileBridge = require ? require('./profiles/profile').ProfileBridge : value);
        (require || prop === 'ProfilesBridge') && _export("ProfilesBridge", ProfilesBridge = require ? require('./profiles/profiles').ProfilesBridge : value);
        (require || prop === 'UserBridge') && _export("UserBridge", UserBridge = require ? require('./users/user').UserBridge : value);
        (require || prop === 'UsersBridge') && _export("UsersBridge", UsersBridge = require ? require('./users/users').UsersBridge : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmV5b25kX2NvbnRleHQiLCJyZXF1aXJlIiwiUHJvZmlsZUJyaWRnZSIsIkFjdGlvbnNCcmlkZ2UiLCJkYXRhIiwicGFyYW1zIiwiZXhlY3V0ZSIsImFyZ3VtZW50cyIsInB1Ymxpc2giLCJjb25zdHJ1Y3RvciIsImJ1bmRsZSIsImV4cG9ydHMiLCJQcm9maWxlc0JyaWRnZSIsImxpc3QiLCJVc2VyQnJpZGdlIiwiZ2V0UHJvZmlsZXMiLCJ1cGRhdGVQcm9maWxlcyIsIlVzZXJzQnJpZGdlIl0sInNvdXJjZXMiOlsiL3Byb2ZpbGVzL3Byb2ZpbGUudHMiLCIvcHJvZmlsZXMvcHJvZmlsZXMudHMiLCIvdXNlcnMvdXNlci50cyIsIi91c2Vycy91c2Vycy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLGVBQUEsR0FBQUMsT0FBQTtVQUVPLFlBQVk7VUFBVSxNQUFPQyxhQUFjLFNBQVFDLGFBQWE7WUFDbkUsTUFBTUMsSUFBSUEsQ0FBQ0MsTUFBTTtjQUNiLE9BQU8sTUFBTSxJQUFJLENBQUNDLE9BQU8sQ0FBQyx3Q0FBd0MsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDckY7WUFFQSxNQUFNQyxPQUFPQSxDQUFDSCxNQUFNO2NBQ2hCLE9BQU8sTUFBTSxJQUFJLENBQUNDLE9BQU8sQ0FBQywyQ0FBMkMsRUFBRSxHQUFHQyxTQUFTLENBQUM7WUFDeEY7WUFFQUUsWUFBQTtjQUNJLEtBQUssQ0FBQyxTQUFTLEVBQUVULGVBQUEsQ0FBQVUsTUFBTSxDQUFDO1lBQzVCOztVQUNIQyxPQUFBLENBQUFULGFBQUEsR0FBQUEsYUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkRCxJQUFBRixlQUFBLEdBQUFDLE9BQUE7VUFFTyxZQUFZO1VBQVUsTUFBT1csY0FBZSxTQUFRVCxhQUFhO1lBQ3BFLE1BQU1VLElBQUlBLENBQUNSLE1BQU07Y0FDYixPQUFPLE1BQU0sSUFBSSxDQUFDQyxPQUFPLENBQUMsMENBQTBDLEVBQUUsR0FBR0MsU0FBUyxDQUFDO1lBQ3ZGO1lBRUFFLFlBQUE7Y0FDSSxLQUFLLENBQUMsU0FBUyxFQUFFVCxlQUFBLENBQUFVLE1BQU0sQ0FBQztZQUM1Qjs7VUFDSEMsT0FBQSxDQUFBQyxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkQsSUFBQVosZUFBQSxHQUFBQyxPQUFBO1VBRU8sWUFBWTtVQUFVLE1BQU9hLFVBQVcsU0FBUVgsYUFBYTtZQUNoRSxNQUFNQyxJQUFJQSxDQUFDQyxNQUFNO2NBQ2IsT0FBTyxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLCtCQUErQixFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUM1RTtZQUVBLE1BQU1DLE9BQU9BLENBQUNILE1BQU07Y0FDaEIsT0FBTyxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLGtDQUFrQyxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUMvRTtZQUVBLE1BQU1RLFdBQVdBLENBQUNWLE1BQU07Y0FDcEIsT0FBTyxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLHNDQUFzQyxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUNuRjtZQUVBLE1BQU1TLGNBQWNBLENBQUNYLE1BQU07Y0FDdkIsT0FBTyxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLHlDQUF5QyxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUN0RjtZQUNBRSxZQUFBO2NBQ0ksS0FBSyxDQUFDLFNBQVMsRUFBRVQsZUFBQSxDQUFBVSxNQUFNLENBQUM7WUFDNUI7O1VBQ0hDLE9BQUEsQ0FBQUcsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCRCxJQUFBZCxlQUFBLEdBQUFDLE9BQUE7VUFFTyxZQUFZO1VBQVUsTUFBT2dCLFdBQVksU0FBUWQsYUFBYTtZQUNqRSxNQUFNVSxJQUFJQSxDQUFDUixNQUFNO2NBQ2IsT0FBTyxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLGlDQUFpQyxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUM5RTtZQUNBLE1BQU1RLFdBQVdBLENBQUNWLE1BQU07Y0FDcEIsT0FBTyxNQUFNLElBQUksQ0FBQ0MsT0FBTyxDQUFDLHdDQUF3QyxFQUFFLEdBQUdDLFNBQVMsQ0FBQztZQUNyRjtZQUNBRSxZQUFBO2NBQ0ksS0FBSyxDQUFDLFNBQVMsRUFBRVQsZUFBQSxDQUFBVSxNQUFNLENBQUM7WUFDNUI7O1VBQ0hDLE9BQUEsQ0FBQU0sV0FBQSxHQUFBQSxXQUFBIn0=