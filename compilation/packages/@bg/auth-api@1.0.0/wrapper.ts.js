System.register(["@beyond-js/kernel@0.1.8/bundle", "@bg/auth-api@1.0.0/wrapper.bridge", "@beyond-js/kernel@0.1.8/core", "@bg/auth-api@1.0.0/prototypes", "@bg/auth-api@1.0.0/entities.ts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, session, __beyond_pkg, hmr;
  _export("session", void 0);
  return {
    setters: [function (_beyondJsKernel018Bundle) {
      dependency_0 = _beyondJsKernel018Bundle;
    }, function (_bgAuthApi100WrapperBridge) {
      dependency_1 = _bgAuthApi100WrapperBridge;
    }, function (_beyondJsKernel018Core) {
      dependency_2 = _beyondJsKernel018Core;
    }, function (_bgAuthApi100Prototypes) {
      dependency_3 = _bgAuthApi100Prototypes;
    }, function (_bgAuthApi100EntitiesTs) {
      dependency_4 = _bgAuthApi100EntitiesTs;
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
          "vspecifier": "@bg/auth-api@1.0.0/wrapper",
          "multibundle": true
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@bg/auth-api/wrapper.bridge', dependency_1], ['@beyond-js/kernel/core', dependency_2], ['@bg/auth-api/prototypes', dependency_3], ['@bg/auth-api/entities.ts', dependency_4]]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./conexion
      **************************/
      ims.set('./conexion', {
        hash: 1793487349,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.auth = void 0;
          var _wrapper = require("@bg/auth-api/wrapper.bridge");
          const auth = exports.auth = new _wrapper.Auth();
        }
      });

      /**********************
      INTERNAL MODULE: ./data
      **********************/

      ims.set('./data', {
        hash: 2316738874,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SessionData = void 0;
          class SessionData {
            _storageKey = 'session';
            _accessToken;
            get accessToken() {
              return this._accessToken;
            }
            _userId;
            get userId() {
              return this._userId;
            }
            save() {
              if (!this._accessToken) {
                console.error('Cannot save session data if session is not set');
                return;
              }
              localStorage.setItem(this._storageKey, JSON.stringify({
                accessToken: this._accessToken,
                userId: this._userId
              }));
            }
            load() {
              let stored = localStorage.getItem(this._storageKey);
              if (!stored) return;
              try {
                const session = JSON.parse(stored);
                this._userId = session.userId;
                this._accessToken = session.accessToken;
              } catch (exc) {
                console.warn('Session stored data is invalid', stored, exc.stack);
                this.clean();
              }
            }
            set(data) {
              this.clean();
              if (!data || !data.userId || !data.token) return false;
              this._userId = data.userId;
              this._accessToken = data.token;
              return true;
            }
            clean() {
              localStorage.removeItem(this._storageKey);
              this._userId = this._accessToken = undefined;
            }
          }
          exports.SessionData = SessionData;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1552252086,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.session = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _prototypes = require("@bg/auth-api/prototypes");
          var _entities = require("@bg/auth-api/entities.ts");
          var _conexion = require("./conexion");
          var _data = require("./data");
          class Session extends _prototypes.ReactiveModel {
            #sessionData;
            #user;
            get user() {
              return this.#user;
            }
            #accessToken;
            get accessToken() {
              return this.#accessToken;
            }
            #userId;
            get userId() {
              return this.#userId;
            }
            get valid() {
              return !!this.#userId;
            }
            #isLogged = false;
            get isLogged() {
              return this.#isLogged || this.#sessionData?.userId;
            }
            #promise;
            constructor() {
              super();
              this.#user = new _entities.User();
              this.#sessionData = new _data.SessionData();
              this.#sessionData.load();
              const {
                _accessToken
              } = this.#sessionData;
              this.#accessToken = _accessToken;
              this.load();
            }
            load = async () => {
              if (this.#promise) return this.#promise;
              this.#promise = new _core.PendingPromise();
              if (!this.#accessToken || !this.#user) {
                this.#promise.resolve();
                this.fetching = false;
                this.triggerEvent("user.loading");
                this.triggerEvent("user.changed");
                return;
              }
              this.fetching = true;
              this.triggerEvent("user.loading");
              try {
                const result = await this.#getUser({
                  token: this.#accessToken
                });
                if (result.error) {
                  this.#sessionData.clean();
                  return;
                }
                const {
                  id,
                  accessToken
                } = result.user;
                this.#userId = id;
                this.#isLogged = true;
                this.#user.set({
                  ...result.user,
                  accesstoken: accessToken
                }, true);
              } catch (error) {
                console.error(error);
              } finally {
                this.fetching = false;
                this.#promise.resolve();
                this.triggerEvent("user.loading");
                this.triggerEvent("user.changed");
              }
            };
            /**
             * This method performs user authentication and returns an object with status: true.
             *
             * In case of error, it returns an object with property status:
             * false and another error property with the error message.
             * error message. In addition to setting the information of the logged in user in session.user.
             * @param { email?: string; user?: string; password: string; localStorageKey: string }
             *
             * @returns
             */
            login = async params => {
              try {
                this.fetching = true;
                this.triggerEvent("user.loading");
                const result = await _conexion.auth.login(params);
                if (result.error) {
                  this.fetching = false;
                  this.triggerEvent("fetching");
                  return {
                    error: result.error
                  };
                }
                if (!result.user) console.error('Acabas de reproducir "El bug del login". Ponte en contacto con el programador mas cercano y explicale los pasos que realizaste, results => ', result);
                this.#isLogged = true;
                this.#accessToken = result.token;
                this.#userId = result.user.id;
                this.#user.set({
                  ...result.user,
                  accesstoken: result.token,
                  profileImage: result.user.profileimage
                }, true);
                this.#sessionData.set({
                  token: result.token,
                  userId: result.user.id,
                  profileImage: result.user.profileimage
                });
                this.#sessionData.save();
                this.triggerEvent("user.changed");
                return {
                  status: true
                };
              } catch (error) {
                console.error(error);
                return {
                  status: false,
                  error
                };
              } finally {
                this.fetching = false;
                this.triggerEvent("user.loading");
              }
            };
            /**
             *This method is in charge of registering a user and returning an object with information of the registered user and his access token.
             *registered user and its access token. In case of error, it returns an object with the status property: false
             *and an error property with the error message. Set the information of the registered user in session.user.
             * @param { email?: string; user?: string; password: string; names?: string; lastNames?: string; sex?: any; phone?: string; birthday?: Date; appToken: string } sendVerifyCode: boolean
             * @returns
             */
            register = async (params, sendVerifyCode = false, verifiedCodeLink = "") => {
              try {
                this.fetching = true;
                this.triggerEvent("user.loading");
                const result = await _conexion.auth.register(params, sendVerifyCode, verifiedCodeLink);
                if (result?.error) {
                  this.fetching = false;
                  return {
                    status: false,
                    error: result.error
                  };
                }
                this.#isLogged = true;
                this.#accessToken = result.token;
                this.#userId = result.registeredUser.id;
                this.#user.set({
                  ...result.registeredUser,
                  accesstoken: result.token
                }, true);
                this.triggerEvent("user.changed");
                this.#sessionData.set({
                  token: result.token,
                  userId: result.registeredUser.id
                });
                return {
                  status: true
                };
              } catch (error) {
                return {
                  status: false,
                  error
                };
              } finally {
                this.fetching = false;
                this.triggerEvent("user.loading");
              }
            };
            /**
             * This method is responsible for changing the user's password. In case of error, it returns an object with the error property and status: false.
             * @params { currentPassword: string; newPassword: string; appToken: string }
             * @returns
             */
            changePassword = async params => {
              try {
                this.fetching = true;
                this.triggerEvent("fetching");
                const result = await _conexion.auth.changePassword({
                  ...params,
                  userId: this.#userId
                });
                if (result.error) {
                  this.fetching = false;
                  this.triggerEvent("fetching");
                  return {
                    error: result.error
                  };
                }
                return {
                  status: true
                };
              } catch (error) {
                console.error(error);
                return {
                  status: false,
                  error
                };
              } finally {
                this.fetching = false;
                this.triggerEvent("fetching");
              }
            };
            /**
             * This method is in charge of sending an email to recover the user's password.
             * In case of error, it returns an object with the status property: false and error.
             * @params { email: string; appToken: string }
             * @returns
             */
            recoverPassword = async params => {
              try {
                this.fetching = true;
                this.triggerEvent("fetching");
                const result = await _conexion.auth.recoverPassword(params);
                if (result.error) {
                  this.fetching = false;
                  this.triggerEvent("fetching");
                  return {
                    error: result.error
                  };
                }
                return {
                  status: true,
                  token: result.token
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
            /**
             * This method is in charge of closing the user's session and resetting the user's information in the `session` object.
             * information in the `session` object. In case of error, it returns an object with property status: false and error.
             * @params localStorageKey: string
             * @returns
             */
            logout = async () => {
              try {
                if (!this.#accessToken) {
                  this.#sessionData.clean();
                  return {
                    status: true
                  };
                }
                this.#promise = undefined;
                this.fetching = true;
                this.triggerEvent("user.loading");
                const result = await _conexion.auth.logout({
                  token: this.#accessToken
                });
                if (result.error) {
                  this.fetching = false;
                  this.triggerEvent("fetching");
                  return {
                    error: result.error
                  };
                }
                this.#user.set(_entities.DEFAULT_USER, true);
                this.#accessToken = undefined;
                this.#userId = undefined;
                this.#isLogged = false;
                this.#sessionData.clean();
                this.triggerEvent("user.changed");
                return {
                  status: true
                };
              } catch (error) {
                console.error(error);
                return {
                  status: false,
                  error
                };
              } finally {
                this.fetching = false;
                this.triggerEvent("user.loading");
              }
            };
            /**
             * This method is in charge of validating the codes generated for authentication processes.
             * In case of error, it returns an object with the status property: false and error.
             * @params { code: string; token: string }
             *
             */
            validateCode = async params => {
              try {
                this.fetching = true;
                this.triggerEvent("fetching");
                const result = await _conexion.auth.validateCode(params);
                if (result.error) {
                  this.fetching = false;
                  this.triggerEvent("fetching");
                  return {
                    error: result.error
                  };
                }
                return {
                  status: true
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
            verifyEmail = async params => {
              try {
                this.fetching = true;
                this.triggerEvent("fetching");
                const result = await _conexion.auth.verifyEmail(params);
                if (result.error) {
                  this.fetching = false;
                  this.triggerEvent("fetching");
                  return {
                    error: result.error,
                    status: false
                  };
                }
                this.#isLogged = true;
                this.#accessToken = result.data.user.accessToken;
                this.#userId = result.data.user.id;
                this.#user.set({
                  ...result.data.user
                }, true);
                this.triggerEvent("user.changed");
                this.#sessionData.set({
                  token: result.data.user.accessToken,
                  userId: result.data.user.id
                });
                return {
                  status: true
                };
              } catch (error) {
                return {
                  status: false,
                  error
                };
              } finally {
                this.fetching = false;
                this.triggerEvent("fetching");
                this.triggerEvent("verify.email");
              }
            };
            /**
             * Method in charge of resending the validation code for user authentication.
             * @params { appToken: string }
             * @returns
             */
            resendCode = async params => {
              try {
                this.fetching = true;
                this.triggerEvent("fetching");
                const result = await _conexion.auth.resendCode(params);
                if (result.error) {
                  this.fetching = false;
                  this.triggerEvent("fetching");
                  return {
                    error: result.error
                  };
                }
                return {
                  status: true
                };
              } catch (error) {
                return {
                  status: true,
                  error
                };
              } finally {
                this.fetching = false;
                this.triggerEvent("fetching");
              }
            };
            /**
             * Method in charge of updating the user's password when the validation code has already been successfully
             * verified
             * @params { token: string; email: string; newPassword: string }
             * @returns
             */
            setPassword = async params => {
              try {
                this.fetching = true;
                this.triggerEvent("fetching");
                const result = await _conexion.auth.setPassword(params);
                if (result.error) {
                  this.fetching = false;
                  this.triggerEvent("fetching");
                  return {
                    error: result.error
                  };
                }
                return {
                  status: true
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
            #getUser = async params => {
              try {
                this.fetching = true;
                this.triggerEvent("user.loading");
                const result = await _conexion.auth.getUser(params);
                if (result.error) {
                  this.fetching = false;
                  this.triggerEvent("user.loading");
                  return {
                    error: result.error
                  };
                }
                return {
                  status: true,
                  user: result.data.user
                };
              } catch (error) {
                console.error(error);
                return {
                  error
                };
              } finally {
                this.fetching = false;
                this.triggerEvent("user.loading");
              }
            };
          }
          /*bundle*/
          const session = exports.session = new Session();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "session",
        "name": "session"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'session') && _export("session", session = require ? require('./index').session : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfd3JhcHBlciIsInJlcXVpcmUiLCJhdXRoIiwiZXhwb3J0cyIsIkF1dGgiLCJTZXNzaW9uRGF0YSIsIl9zdG9yYWdlS2V5IiwiX2FjY2Vzc1Rva2VuIiwiYWNjZXNzVG9rZW4iLCJfdXNlcklkIiwidXNlcklkIiwic2F2ZSIsImNvbnNvbGUiLCJlcnJvciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwibG9hZCIsInN0b3JlZCIsImdldEl0ZW0iLCJzZXNzaW9uIiwicGFyc2UiLCJleGMiLCJ3YXJuIiwic3RhY2siLCJjbGVhbiIsInNldCIsImRhdGEiLCJ0b2tlbiIsInJlbW92ZUl0ZW0iLCJ1bmRlZmluZWQiLCJfY29yZSIsIl9wcm90b3R5cGVzIiwiX2VudGl0aWVzIiwiX2NvbmV4aW9uIiwiX2RhdGEiLCJTZXNzaW9uIiwiUmVhY3RpdmVNb2RlbCIsInNlc3Npb25EYXRhIiwidXNlciIsInZhbGlkIiwiaXNMb2dnZWQiLCJwcm9taXNlIiwiY29uc3RydWN0b3IiLCJVc2VyIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwiZmV0Y2hpbmciLCJ0cmlnZ2VyRXZlbnQiLCJyZXN1bHQiLCJnZXRVc2VyIiwiaWQiLCJhY2Nlc3N0b2tlbiIsImxvZ2luIiwicGFyYW1zIiwicHJvZmlsZUltYWdlIiwicHJvZmlsZWltYWdlIiwic3RhdHVzIiwicmVnaXN0ZXIiLCJzZW5kVmVyaWZ5Q29kZSIsInZlcmlmaWVkQ29kZUxpbmsiLCJyZWdpc3RlcmVkVXNlciIsImNoYW5nZVBhc3N3b3JkIiwicmVjb3ZlclBhc3N3b3JkIiwibG9nb3V0IiwiREVGQVVMVF9VU0VSIiwidmFsaWRhdGVDb2RlIiwidmVyaWZ5RW1haWwiLCJyZXNlbmRDb2RlIiwic2V0UGFzc3dvcmQiXSwic291cmNlcyI6WyIvY29uZXhpb24udHMiLCIvZGF0YS50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGlu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