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
          const auth = new _wrapper.Auth();
          exports.auth = auth;
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
          const session = new Session();
          exports.session = session;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfd3JhcHBlciIsInJlcXVpcmUiLCJhdXRoIiwiQXV0aCIsImV4cG9ydHMiLCJTZXNzaW9uRGF0YSIsIl9zdG9yYWdlS2V5IiwiX2FjY2Vzc1Rva2VuIiwiYWNjZXNzVG9rZW4iLCJfdXNlcklkIiwidXNlcklkIiwic2F2ZSIsImNvbnNvbGUiLCJlcnJvciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwibG9hZCIsInN0b3JlZCIsImdldEl0ZW0iLCJzZXNzaW9uIiwicGFyc2UiLCJleGMiLCJ3YXJuIiwic3RhY2siLCJjbGVhbiIsInNldCIsImRhdGEiLCJ0b2tlbiIsInJlbW92ZUl0ZW0iLCJ1bmRlZmluZWQiLCJfY29yZSIsIl9wcm90b3R5cGVzIiwiX2VudGl0aWVzIiwiX2NvbmV4aW9uIiwiX2RhdGEiLCJTZXNzaW9uIiwiUmVhY3RpdmVNb2RlbCIsInNlc3Npb25EYXRhIiwidXNlciIsInZhbGlkIiwiaXNMb2dnZWQiLCJwcm9taXNlIiwiY29uc3RydWN0b3IiLCJVc2VyIiwiUGVuZGluZ1Byb21pc2UiLCJyZXNvbHZlIiwiZmV0Y2hpbmciLCJ0cmlnZ2VyRXZlbnQiLCJyZXN1bHQiLCJnZXRVc2VyIiwiaWQiLCJhY2Nlc3N0b2tlbiIsImxvZ2luIiwicGFyYW1zIiwicHJvZmlsZUltYWdlIiwicHJvZmlsZWltYWdlIiwic3RhdHVzIiwicmVnaXN0ZXIiLCJzZW5kVmVyaWZ5Q29kZSIsInZlcmlmaWVkQ29kZUxpbmsiLCJyZWdpc3RlcmVkVXNlciIsImNoYW5nZVBhc3N3b3JkIiwicmVjb3ZlclBhc3N3b3JkIiwibG9nb3V0IiwiREVGQVVMVF9VU0VSIiwidmFsaWRhdGVDb2RlIiwidmVyaWZ5RW1haWwiLCJyZXNlbmRDb2RlIiwic2V0UGFzc3dvcmQiXSwic291cmNlcyI6WyIvY29uZXhpb24udHMiLCIvZGF0YS50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGlu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