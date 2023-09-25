System.register(["@beyond-js/kernel@0.1.8/bundle", "@beyond-js/kernel@0.1.8/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, Collection, Item, ReactiveModel, __beyond_pkg, hmr;
  _export({
    Collection: void 0,
    Item: void 0,
    ReactiveModel: void 0
  });
  return {
    setters: [function (_beyondJsKernel018Bundle) {
      dependency_0 = _beyondJsKernel018Bundle;
    }, function (_beyondJsKernel018Core) {
      dependency_1 = _beyondJsKernel018Core;
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
          "vspecifier": "@bg/auth-api@1.0.0/prototypes"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./collection
      ****************************/
      ims.set('./collection', {
        hash: 1403372295,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Collection = void 0;
          var _reactiveModel = require("./reactive-model");
          /*bundle*/
          class Collection extends _reactiveModel.ReactiveModel {
            #items = [];
            get items() {
              return this.#items;
            }
            set items(value) {
              this.#items = value;
            }
            #counters = {
              total: 0
            };
            get counters() {
              return this.#counters;
            }
            set counters(value) {
              this.#counters = value;
            }
            #provider;
            get provider() {
              return this.#provider;
            }
            set provider(value) {
              this.#provider = value;
            }
            #item;
            get item() {
              return this.#item;
            }
            set item(value) {
              this.#item = value;
            }
            #fetching;
            get fetching() {
              return this.#fetching;
            }
            set fetching(value) {
              if (value === this.#fetching) return;
              this.#fetching = value;
            }
            #loaded;
            get loaded() {
              return this.#loaded;
            }
            set loaded(value) {
              if (value === this.#loaded) return;
              this.#loaded = value;
            }
            #next;
            get next() {
              return this.#next;
            }
            set next(value) {
              if (value === this.#next) return;
              this.#next = value;
            }
            /**
             * metodo general para las consultas de tipo lista para las colecciones
             * @param params Object filters and configuration
             */
            async load(params = {}) {
              try {
                this.fetching = true;
                this.triggerEvent();
                params.start = params.start ? params.start : params.update === true && this.next ? this.next : 0;
                const response = await this.provider.list(params);
                if (!response.status) throw "ERROR_LIST_QUERY";
                const items = response.data.entries.map(record => {
                  const item = new this.item();
                  item.set(record, true);
                  return item;
                });
                this.items = params.update === true ? this.items.concat(items) : items;
                this.counters.total = response.data.total ?? 0;
                this.next = response.data.next;
                this.loaded = true;
                this.fetching = false;
                this.triggerEvent();
              } catch (exc) {
                console.error("ERROR LOAD", exc);
                this.loaded = false;
                this.fetching = false;
                this.triggerEvent();
              }
            }
          }
          exports.Collection = Collection;
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 2078487960,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = void 0;
          var _reactiveModel = require("./reactive-model");
          /*bundle*/
          class Item extends _reactiveModel.ReactiveModel {
            #info = new Map();
            #isUnpublished = false;
            get isUnpublished() {
              return this.#isUnpublished;
            }
            #ignoredFields = [];
            #skeleton = [];
            get skeleton() {
              return this.#skeleton;
            }
            set skeleton(value) {
              this.#skeleton = value;
            }
            #fetching;
            get fetching() {
              return this.#fetching;
            }
            set fetching(value) {
              if (value === this.#fetching) return;
              this.#fetching = value;
            }
            #loaded;
            get loaded() {
              return this.#loaded;
            }
            set loaded(value) {
              if (value === this.#loaded) return;
              this.#loaded = value;
            }
            #provider;
            get provider() {
              return this.#provider;
            }
            set provider(value) {
              if (value === this.#provider) return;
              this.#provider = value;
            }
            set(fields, init = false) {
              let change = false;
              for (let field in fields) {
                if (init && this.hasOwnProperty(field)) this.#info.set(field, fields[field]);
                if (this.#skeleton.includes(field) && !this.#ignoredFields.includes(field)) {
                  this[field] = fields[field];
                  if (!init && fields[field] !== this.#info.get(field)) {
                    this.#isUnpublished = true;
                    change = true;
                  }
                }
              }
              if (init) this.#loaded = true;
              if (!change) this.#isUnpublished = false;
              this.triggerEvent();
            }
            /**
             * metodo general para las consultas de tipo lista para las colecciones
             * @param params Object filters and configuration
             */
            async load(params = {}) {
              try {
                this.fetching = true;
                this.triggerEvent();
                const response = await this.provider.data(params);
                if (!response.status) throw "ERROR_DATA_QUERY";
                this.set(response.data, true);
                this.loaded = true;
                this.fetching = false;
                this.triggerEvent();
              } catch (exc) {
                console.error("ERROR LOAD", exc);
                this.loaded = false;
                this.fetching = false;
                this.triggerEvent();
              }
            }
            getValues() {
              const values = {};
              this.skeleton.forEach(field => {
                if (this.hasOwnProperty(field)) values[field] = this[field];
              });
              return values;
            }
            /**
             * METODO PARA CREAR Y ACTUALIZAR ITEMS
             */
            async publish() {
              try {
                this.fetching = true;
                this.triggerEvent();
                const params = this.getValues();
                const response = await this.provider.publish(params);
                if (!response.status) throw "ERROR_PUBLISH";
                this.set({
                  id: response.data.id
                });
                this.fetching = false;
                this.triggerEvent();
                return {
                  status: true
                };
              } catch (exc) {
                console.error("ERROR PUBLISH", exc);
                this.fetching = false;
                this.triggerEvent();
                return {
                  status: false,
                  error: exc
                };
              }
            }
          }
          exports.Item = Item;
        }
      });

      /********************************
      INTERNAL MODULE: ./reactive-model
      ********************************/

      ims.set('./reactive-model', {
        hash: 1782838934,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactiveModel = void 0;
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/
          class ReactiveModel extends _core.Events {
            #ready;
            get ready() {
              return this.#ready;
            }
            #fetching;
            get fetching() {
              return this.#fetching;
            }
            set fetching(value) {
              if (value === this.#fetching) return;
              this.#fetching = value;
              this.triggerEvent();
            }
            #fetched;
            get fetched() {
              return this.#fetched;
            }
            set fetched(value) {
              if (value === this.#fetched) return;
              this.#fetched = value;
              this.triggerEvent();
            }
            #processing;
            get processing() {
              return this.#processing;
            }
            #processed;
            get processed() {
              return this.#processed;
            }
            #loaded;
            get loaded() {
              return this.#loaded;
            }
            set loaded(value) {
              if (value === this.#loaded) return;
              this.#loaded = value;
              this.triggerEvent();
            }
            triggerEvent = (event = 'change') => {
              this.trigger(event);
            };
            /**
             * set value in a private property
             * @param property
             * @param value
             */
            #set(property, value) {
              let props = {};
              if (property && value !== 'undefined') props[property] = value;else props = property;
              let updated = false;
              for (const prop in props) {
                const key = `#${prop}`;
                if (!this.hasOwnProperty(key)) continue; //same value on store
                if (this[key] === props[prop]) continue;
                this[key] = props[prop];
                updated = true;
              }
              if (updated) this.triggerEvent();
            }
            getProperties() {
              const props = {};
              Object.keys(this).forEach(property => props[property.replace('#', '')] = this[property]);
              return props;
            }
          }
          exports.ReactiveModel = ReactiveModel;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./collection",
        "from": "Collection",
        "name": "Collection"
      }, {
        "im": "./item",
        "from": "Item",
        "name": "Item"
      }, {
        "im": "./reactive-model",
        "from": "ReactiveModel",
        "name": "ReactiveModel"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Collection') && _export("Collection", Collection = require ? require('./collection').Collection : value);
        (require || prop === 'Item') && _export("Item", Item = require ? require('./item').Item : value);
        (require || prop === 'ReactiveModel') && _export("ReactiveModel", ReactiveModel = require ? require('./reactive-model').ReactiveModel : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3RpdmVNb2RlbCIsInJlcXVpcmUiLCJDb2xsZWN0aW9uIiwiUmVhY3RpdmVNb2RlbCIsIml0ZW1zIiwidmFsdWUiLCJjb3VudGVycyIsInRvdGFsIiwicHJvdmlkZXIiLCJpdGVtIiwiZmV0Y2hpbmciLCJsb2FkZWQiLCJuZXh0IiwibG9hZCIsInBhcmFtcyIsInRyaWdnZXJFdmVudCIsInN0YXJ0IiwidXBkYXRlIiwicmVzcG9uc2UiLCJsaXN0Iiwic3RhdHVzIiwiZGF0YSIsImVudHJpZXMiLCJtYXAiLCJyZWNvcmQiLCJzZXQiLCJjb25jYXQiLCJleGMiLCJjb25zb2xlIiwiZXJyb3IiLCJleHBvcnRzIiwiSXRlbSIsImluZm8iLCJNYXAiLCJpc1VucHVibGlzaGVkIiwiaWdub3JlZEZpZWxkcyIsInNrZWxldG9uIiwiZmllbGRzIiwiaW5pdCIsImNoYW5nZSIsImZpZWxkIiwiaGFzT3duUHJvcGVydHkiLCJpbmNsdWRlcyIsImdldCIsImdldFZhbHVlcyIsInZhbHVlcyIsImZvckVhY2giLCJwdWJsaXNoIiwiaWQiLCJfY29yZSIsIkV2ZW50cyIsInJlYWR5IiwiZmV0Y2hlZCIsInByb2Nlc3NpbmciLCJwcm9jZXNzZWQiLCJldmVudCIsInRyaWdnZXIiLCIjc2V0IiwicHJvcGVydHkiLCJwcm9wcyIsInVwZGF0ZWQiLCJwcm9wIiwia2V5IiwiZ2V0UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJyZXBsYWNlIl0sInNvdXJjZXMiOlsiL2NvbGxlY3Rpb24udHMiLCIvaXRlbS50cyIsIi9yZWFjdGl2ZS1tb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsY0FBQSxHQUFBQyxPQUFBO1VBTU87VUFBVSxNQUFPQyxVQUFXLFNBQVFGLGNBQUEsQ0FBQUcsYUFBYTtZQUN0RCxDQUFBQyxLQUFNLEdB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