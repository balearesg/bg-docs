System.register(["@beyond-js/kernel@0.1.8/bundle", "@bg/auth-api@1.0.0/bridge", "@bg/auth-api@1.0.0/prototypes", "@bg/auth-api@1.0.0/entities.bridge"], function (_export, _context) {
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
    setters: [function (_beyondJsKernel018Bundle) {
      dependency_0 = _beyondJsKernel018Bundle;
    }, function (_bgAuthApi100Bridge) {
      dependency_1 = _bgAuthApi100Bridge;
    }, function (_bgAuthApi100Prototypes) {
      dependency_2 = _bgAuthApi100Prototypes;
    }, function (_bgAuthApi100EntitiesBridge) {
      dependency_3 = _bgAuthApi100EntitiesBridge;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/auth-models", "1.0.0"], ["@bg/notifications", null], ["@bg/mailer", "1.0.0"], ["@beyond-js/backend", "0.1.4"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.3"], ["@beyond-js/react-widgets", "18.21.1"], ["@beyond-js/widgets", "0.1.5"], ["dayjs", "1.11.7"], ["express", "4.18.2"], ["firebase", "9.17.1"], ["googleapis", "111.0.0"], ["jsonwebtoken", "9.0.0"], ["mysql2", "3.1.1"], ["nodemailer", "6.9.1"], ["sequelize", "6.28.0"], ["socket.io-client", "4.6.0"], ["@types/react", "18.0.27"], ["@types/react-dom", "18.0.10"], ["@bg/auth-api", "1.0.0"], ["@bg/docs", "1.0.0"]]);
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
          const auth = exports.auth = new _bridge.Auth();
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
          const DEFAULT_USER = exports.DEFAULT_USER = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYnJpZGdlIiwicmVxdWlyZSIsImF1dGgiLCJleHBvcnRzIiwiQXV0aCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcHJvdG90eXBlcyIsIl9lbnRpdGllcyIsIlByb2ZpbGUiLCJJdGVtIiwiaWQiLCJwcm9maWxlIiwiZGVzY3JpcHRpb24iLCJjcmVhdGVkRGF0ZSIsInRpbWVDcmVhdGVkIiwidGltZVVwZGF0ZWQiLCJjb25zdHJ1Y3RvciIsInByb3ZpZGVyIiwiUHJvZmlsZUJyaWRnZSIsInNrZWxldG9uIiwiX3Byb2ZpbGUiLCJQcm9maWxlcyIsIkNvbGxlY3Rpb24iLCJQcm9maWxlc0JyaWRnZSIsIml0ZW0iLCJfY29uZXhpb24iLCJERUZBVUxUX1VTRVIiLCJ1c2VyIiwiaWRlbnRpZmllciIsImFjdGl2ZSIsInN0YXR1c0lkIiwibGFzdFNlc3Npb24iLCJEYXRlIiwidmFsaWRhdGlvbiIsIm5hbWVzIiwibGFzdE5hbWVzIiwiZW1haWwiLCJyZWNvdmVyeUNvZGUiLCJzZXgiLCJwcm9maWxlSW1hZ2UiLCJiaXJ0aGRheSIsInBob25lIiwiYWNjb3VudFR5cGUiLCJmYWNlYm9va0FjY291bnQiLCJhY2Nlc3N0b2tlbiIsIlVzZXIiLCJmdWxsTmFtZXMiLCJmaXJzdE5hbWUiLCJzcGxpdCIsImZpcnN0TGFzdE5hbWUiLCJwcm9maWxlcyIsIk1hcCIsIlVzZXJCcmlkZ2UiLCJyZWdpc3RlclVzZXIiLCJwYXJhbXMiLCJmZXRjaGluZyIsInRyaWdnZXJFdmVudCIsInJlc3VsdCIsImVycm9yIiwic3RhdHVzIiwiZGF0YSIsImdldFVzZXJzIiwidXNlcklkIiwic2V0UHJvZmlsZXMiLCJuZXdNYXAiLCJmb3JFYWNoIiwic2V0IiwiaGFzIiwiZGVsZXRlIiwiZ2V0UHJvZmlsZXMiLCJyZXNwb25zZSIsIkVycm9yIiwicHJvZmlsZUlkIiwiY29uc29sZSIsImVkaXRQcm9maWxlcyIsInVwZGF0ZVByb2ZpbGVzIiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsIl91c2VyIiwiVXNlcnMiLCJVc2Vyc0JyaWRnZSJdLCJzb3VyY2VzIjpbIi9jb25leGlvbi50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL3Byb2ZpbGVzL3Byb2ZpbGUudHMiLCIvcHJvZmlsZXMvcHJvZmlsZXMudHMiLCIvdXNlcnMvdXNlci50cyIsIi91c2Vycy91c2Vycy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO1VBRU8sTUFBTUMsSUFBSSxHQUFBQyxPQUFBLENBQUFELElBQUEsR0FBRyxJQUFJRixPQUFBLENBQUFJLElBQUksRUFBRTs7Ozs7Ozs7Ozs7VUNGOUI7O1VBRUFDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSCxPQUFBO1lBQ0FJLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNIQSxJQUFBQyxXQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxTQUFBLEdBQUFSLE9BQUE7VUFFTztVQUFVLE1BQU9TLE9BQVEsU0FBUUYsV0FBQSxDQUFBRyxJQUFJO1lBQzFDQyxFQUFFO1lBQ0ZDLE9BQU87WUFDUEMsV0FBVztZQUNYQyxXQUFXO1lBQ1hDLFdBQVc7WUFDWEMsV0FBVztZQUVYQyxZQUFBO2NBQ0UsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSVYsU0FBQSxDQUFBVyxhQUFhLEVBQUU7Y0FDbkMsSUFBSSxDQUFDQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztZQUM5Rjs7VUFDRGxCLE9BQUEsQ0FBQU8sT0FBQSxHQUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCRCxJQUFBRixXQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxTQUFBLEdBQUFSLE9B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