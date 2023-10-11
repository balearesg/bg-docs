System.register(["@beyond-js/kernel@0.1.9/bundle", "@bg/auth-api@1.0.0/bridge", "@bg/auth-api@1.0.0/prototypes", "@bg/auth-api@1.0.0/entities.bridge"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, IProfile, Profile, Profiles, IUser, DEFAULT_USER, User, Users, __beyond_pkg, hmr;
  _export({
    IProfile: void 0,
    Profile: void 0,
    Profiles: void 0,
    IUser: void 0,
    DEFAULT_USER: void 0,
    User: void 0,
    Users: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_bgAuthApi100Bridge) {
      dependency_1 = _bgAuthApi100Bridge;
    }, function (_bgAuthApi100Prototypes) {
      dependency_2 = _bgAuthApi100Prototypes;
    }, function (_bgAuthApi100EntitiesBridge) {
      dependency_3 = _bgAuthApi100EntitiesBridge;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/auth-models", "1.0.0"], ["@bg/notifications", null], ["@bg/mailer", "1.0.0"], ["@beyond-js/backend", "0.1.4"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.3"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.3"], ["dayjs", "1.11.7"], ["express", "4.18.2"], ["firebase", "9.17.1"], ["googleapis", "111.0.0"], ["jsonwebtoken", "9.0.0"], ["mysql2", "3.1.1"], ["nodemailer", "6.9.1"], ["sequelize", "6.28.0"], ["socket.io-client", "4.6.0"], ["@types/react", "18.0.27"], ["@types/react-dom", "18.0.10"], ["@bg/auth-api", "1.0.0"], ["@bg/docs", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bg/auth-api@1.0.0/entities",
          "multibundle": true
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@bg/auth-api/bridge', dependency_1], ['@bg/auth-api/prototypes', dependency_2], ['@bg/auth-api/entities.bridge', dependency_3]]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./conexion
      **************************/
      ims.set('./conexion', {
        hash: 2682552621,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.auth = void 0;
          var _bridge = require("@bg/auth-api/bridge");
          const auth = new _bridge.Auth();
          exports.auth = auth;
        }
      });

      /*************************************
      INTERNAL MODULE: ./profiles/interfaces
      *************************************/

      ims.set('./profiles/interfaces', {
        hash: 3289770414,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./profiles/profile
      **********************************/

      ims.set('./profiles/profile', {
        hash: 1885438234,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Profile = void 0;
          var _prototypes = require("@bg/auth-api/prototypes");
          var _entities = require("@bg/auth-api/entities.bridge");
          /*bundle*/
          class Profile extends _prototypes.Item {
            id;
            profile;
            description;
            createdDate;
            timeCreated;
            timeUpdated;
            constructor() {
              super();
              this.provider = new _entities.ProfileBridge();
              this.skeleton = ["id", "profile", 'description', "createdDate", "timeCreated", "timeUpdated"];
            }
          }
          exports.Profile = Profile;
        }
      });

      /***********************************
      INTERNAL MODULE: ./profiles/profiles
      ***********************************/

      ims.set('./profiles/profiles', {
        hash: 1175076710,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Profiles = void 0;
          var _prototypes = require("@bg/auth-api/prototypes");
          var _entities = require("@bg/auth-api/entities.bridge");
          var _profile = require("./profile");
          /*bundle*/
          class Profiles extends _prototypes.Collection {
            constructor() {
              super();
              this.provider = new _entities.ProfilesBridge();
              this.item = _profile.Profile;
            }
          }
          exports.Profiles = Profiles;
        }
      });

      /**********************************
      INTERNAL MODULE: ./users/interfaces
      **********************************/

      ims.set('./users/interfaces', {
        hash: 2617977101,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./users/user
      ****************************/

      ims.set('./users/user', {
        hash: 3009965961,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = exports.DEFAULT_USER = void 0;
          var _prototypes = require("@bg/auth-api/prototypes");
          var _entities = require("@bg/auth-api/entities.bridge");
          var _conexion = require("../conexion");
          /*bundle*/
          const DEFAULT_USER = {
            id: 1,
            user: "",
            identifier: "",
            active: 1,
            statusId: 1,
            lastSession: new Date(),
            validation: "",
            names: "",
            lastNames: "",
            email: "",
            recoveryCode: "",
            sex: 1,
            profileImage: "",
            birthday: "",
            phone: "",
            accountType: "",
            facebookAccount: "",
            accesstoken: ""
          };
          exports.DEFAULT_USER = DEFAULT_USER;
          /*bundle*/
          class User extends _prototypes.Item {
            #fullNames;
            get fullNames() {
              const firstName = this.names?.split(" ")[0];
              const firstLastName = this.lastNames ? this.lastNames?.split(" ")[0] : "";
              return `${firstName} ${firstLastName}`;
            }
            id;
            user;
            identifier;
            active;
            statusId;
            names;
            lastNames;
            email;
            sex;
            profileImage;
            birthday;
            phone;
            accountType;
            facebookAccount;
            accesstoken;
            validation;
            profiles = new Map();
            constructor() {
              super();
              this.provider = new _entities.UserBridge();
              this.skeleton = ["id", "user", "identifier", "active", "statusId", "names", "lastNames", "email", "sex", "profileImage", "birthday", "phone", "accountType", "facebookAccount", "accesstoken", "validation", "profiles"];
            }
            registerUser = async params => {
              try {
                this.fetching = true;
                this.triggerEvent("fetching");
                const result = await _conexion.auth.registerUser({
                  ...params
                });
                if (result?.error) {
                  this.fetching = false;
                  return {
                    status: false,
                    error: result.error
                  };
                }
                this.fetching = false;
                return {
                  status: true,
                  user: result.data.user
                };
              } catch (error) {
                return {
                  status: false,
                  error
                };
              } finally {
                this.triggerEvent("fetching");
              }
            };
            getUsers = async params => {
              try {
                this.fetching = true;
                this.triggerEvent("fetching");
                const result = await _conexion.auth.registerUser({
                  ...params,
                  userId: this.id
                });
                if (result?.error) {
                  this.fetching = false;
                  this.triggerEvent("fetching");
                  return {
                    status: false,
                    error: result.error
                  };
                }
                return {
                  status: true,
                  user: result.data.user
                };
              } catch (error) {
                return {
                  status: false,
                  error
                };
              } finally {
                this.fetching = false;
                this.triggerEvent("fetching");
              }
            };
            setProfiles(profiles) {
              const newMap = new Map();
              this.profiles.forEach(item => {
                newMap.set(item.id, {
                  ...item
                });
              });
              profiles.forEach(item => {
                if (newMap.has(item.id)) {
                  newMap.delete(item.id);
                  this.set({
                    profiles: newMap
                  });
                  this.triggerEvent();
                  return;
                }
                const profile = {
                  id: item.id,
                  profile: item.profile
                };
                newMap.set(item.id, {
                  ...profile
                });
              });
              this.set({
                profiles: newMap
              });
              this.triggerEvent();
            }
            async getProfiles({
              userId
            }) {
              try {
                const response = await this.provider.getProfiles({
                  userId
                });
                if (!response.status) throw new Error(response.error);
                response.data.forEach(item => {
                  this.profiles.set(item.profileId, item.profile);
                });
              } catch (error) {
                console.error("error", error);
              }
            }
            editProfiles = async () => {
              this.fetching = true;
              this.triggerEvent();
              try {
                const response = this.provider.updateProfiles({
                  profiles: Array.from(this.profiles.keys()),
                  userId: this.id
                });
                if (response.status) throw new Error("Error editing user profiles");
                return response;
              } catch (error) {
                console.error("error", error);
                return {
                  status: false,
                  error
                };
              } finally {
                this.fetching = false;
                this.triggerEvent();
              }
            };
          }
          exports.User = User;
        }
      });

      /*****************************
      INTERNAL MODULE: ./users/users
      *****************************/

      ims.set('./users/users', {
        hash: 1267427390,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Users = void 0;
          var _prototypes = require("@bg/auth-api/prototypes");
          var _user = require("./user");
          var _entities = require("@bg/auth-api/entities.bridge");
          /*bundle*/
          class Users extends _prototypes.Collection {
            constructor() {
              super();
              this.provider = new _entities.UsersBridge();
              this.item = _user.User;
            }
          }
          exports.Users = Users;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./profiles/interfaces",
        "from": "IProfile",
        "name": "IProfile"
      }, {
        "im": "./profiles/profile",
        "from": "Profile",
        "name": "Profile"
      }, {
        "im": "./profiles/profiles",
        "from": "Profiles",
        "name": "Profiles"
      }, {
        "im": "./users/interfaces",
        "from": "IUser",
        "name": "IUser"
      }, {
        "im": "./users/user",
        "from": "DEFAULT_USER",
        "name": "DEFAULT_USER"
      }, {
        "im": "./users/user",
        "from": "User",
        "name": "User"
      }, {
        "im": "./users/users",
        "from": "Users",
        "name": "Users"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IProfile') && _export("IProfile", IProfile = require ? require('./profiles/interfaces').IProfile : value);
        (require || prop === 'Profile') && _export("Profile", Profile = require ? require('./profiles/profile').Profile : value);
        (require || prop === 'Profiles') && _export("Profiles", Profiles = require ? require('./profiles/profiles').Profiles : value);
        (require || prop === 'IUser') && _export("IUser", IUser = require ? require('./users/interfaces').IUser : value);
        (require || prop === 'DEFAULT_USER') && _export("DEFAULT_USER", DEFAULT_USER = require ? require('./users/user').DEFAULT_USER : value);
        (require || prop === 'User') && _export("User", User = require ? require('./users/user').User : value);
        (require || prop === 'Users') && _export("Users", Users = require ? require('./users/users').Users : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYnJpZGdlIiwicmVxdWlyZSIsImF1dGgiLCJBdXRoIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcHJvdG90eXBlcyIsIl9lbnRpdGllcyIsIlByb2ZpbGUiLCJJdGVtIiwiaWQiLCJwcm9maWxlIiwiZGVzY3JpcHRpb24iLCJjcmVhdGVkRGF0ZSIsInRpbWVDcmVhdGVkIiwidGltZVVwZGF0ZWQiLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwiUHJvZmlsZUJyaWRnZSIsInNrZWxldG9uIiwiX3Byb2ZpbGUiLCJQcm9maWxlcyIsIkNvbGxlY3Rpb24iLCJQcm9maWxlc0JyaWRnZSIsIml0ZW0iLCJfY29uZXhpb24iLCJERUZBVUxUX1VTRVIiLCJ1c2VyIiwiaWRlbnRpZmllciIsImFjdGl2ZSIsInN0YXR1c0lkIiwibGFzdFNlc3Npb24iLCJEYXRlIiwidmFsaWRhdGlvbiIsIm5hbWVzIiwibGFzdE5hbWVzIiwiZW1haWwiLCJyZWNvdmVyeUNvZGUiLCJzZXgiLCJwcm9maWxlSW1hZ2UiLCJiaXJ0aGRheSIsInBob25lIiwiYWNjb3VudFR5cGUiLCJmYWNlYm9va0FjY291bnQiLCJhY2Nlc3N0b2tlbiIsIlVzZXIiLCJmdWxsTmFtZXMiLCJmaXJzdE5hbWUiLCJzcGxpdCIsImZpcnN0TGFzdE5hbWUiLCJwcm9maWxlcyIsIk1hcCIsIlVzZXJCcmlkZ2UiLCJyZWdpc3RlclVzZXIiLCJwYXJhbXMiLCJmZXRjaGluZyIsInRyaWdnZXJFdmVudCIsInJlc3VsdCIsImVycm9yIiwic3RhdHVzIiwiZGF0YSIsImdldFVzZXJzIiwidXNlcklkIiwic2V0UHJvZmlsZXMiLCJuZXdNYXAiLCJmb3JFYWNoIiwic2V0IiwiaGFzIiwiZGVsZXRlIiwiZ2V0UHJvZmlsZXMiLCJyZXNwb25zZSIsIkVycm9yIiwicHJvZmlsZUlkIiwiY29uc29sZSIsImVkaXRQcm9maWxlcyIsInVwZGF0ZVByb2ZpbGVzIiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsIl91c2VyIiwiVXNlcnMiLCJVc2Vyc0JyaWRnZSJdLCJzb3VyY2VzIjpbIi9jb25leGlvbi50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL3Byb2ZpbGVzL3Byb2ZpbGUudHMiLCIvcHJvZmlsZXMvcHJvZmlsZXMudHMiLCIvdXNlcnMvdXNlci50cyIsIi91c2Vycy91c2Vycy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO1VBRU8sTUFBTUMsSUFBSSxHQUFHLElBQUlGLE9BQUEsQ0FBQUcsSUFBSSxFQUFFO1VBQUNDLE9BQUEsQ0FBQUYsSUFBQSxHQUFBQSxJQUFBOzs7Ozs7Ozs7OztVQ0YvQjs7VUFFQUcsTUFBQSxDQUFBQyxjQUFBLENBQUFGLE9BQUE7WUFDQUcsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0hBLElBQUFDLFdBQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLFNBQUEsR0FBQVIsT0FBQTtVQUVPO1VBQVUsTUFBT1MsT0FBUSxTQUFRRixXQUFBLENBQUFHLElBQUk7WUFDMUNDLEVBQUU7WUFDRkMsT0FBTztZQUNQQyxXQUFXO1lBQ1hDLFdBQVc7WUFDWEMsV0FBVztZQUNYQyxXQUFXO1lBRVhDLFlBQUE7Y0FDRSxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJVixTQUFBLENBQUFXLGFBQWEsRUFBRTtjQUNuQyxJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDO1lBQzlGOztVQUNEakIsT0FBQSxDQUFBTSxPQUFBLEdBQUFBLE9BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJELElBQUFGLFdBQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLFNB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