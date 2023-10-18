System.register(["@beyond-js/kernel@0.1.8/bundle", "@beyond-js/kernel@0.1.8/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, ReactiveModel, __beyond_pkg, hmr;
  _export("ReactiveModel", void 0);
  return {
    setters: [function (_beyondJsKernel018Bundle) {
      dependency_0 = _beyondJsKernel018Bundle;
    }, function (_beyondJsKernel018Core) {
      dependency_1 = _beyondJsKernel018Core;
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
          "vspecifier": "@bg/docs@1.0.0/reactive-model"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1]]);
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./reactive-model
      ********************************/
      ims.set('./reactive-model', {
        hash: 1056681043,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactiveModel = void 0;
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/
          class ReactiveModel extends _core.Events {
            _ready;
            get ready() {
              return this._ready;
            }
            _fetching;
            get fetching() {
              return this._fetching;
            }
            set fetching(value) {
              if (value === this._fetching) return;
              this._fetching = value;
              this.triggerEvent();
            }
            _fetched;
            get fetched() {
              return this._fetched;
            }
            _processing;
            get processing() {
              return this._processing;
            }
            _processed;
            get processed() {
              return this._processed;
            }
            _loaded;
            get loaded() {
              return this._loaded;
            }
            triggerEvent = (event = 'change') => this.trigger(event);
            /**
             * set value in a private property
             * @param property
             * @param value
             */
            _set(property, value) {
              let props = {};
              if (property && value !== 'undefined') props[property] = value;else props = property;
              let updated = false;
              for (const prop in props) {
                const key = `_${prop}`;
                if (!this.hasOwnProperty(key)) continue; //same value on store
                if (this[key] === props[prop]) continue;
                this[key] = props[prop];
                updated = true;
              }
              if (updated) this.triggerEvent();
            }
            getProperties() {
              const props = {};
              Object.keys(this).forEach(property => props[property.replace('_', '')] = this[property]);
              return props;
            }
          }
          exports.ReactiveModel = ReactiveModel;
        }
      });
      __pkg.exports.descriptor = [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJSZWFjdGl2ZU1vZGVsIiwiRXZlbnRzIiwiX3JlYWR5IiwicmVhZHkiLCJfZmV0Y2hpbmciLCJmZXRjaGluZyIsInZhbHVlIiwidHJpZ2dlckV2ZW50IiwiX2ZldGNoZWQiLCJmZXRjaGVkIiwiX3Byb2Nlc3NpbmciLCJwcm9jZXNzaW5nIiwiX3Byb2Nlc3NlZCIsInByb2Nlc3NlZCIsIl9sb2FkZWQiLCJsb2FkZWQiLCJldmVudCIsInRyaWdnZXIiLCJfc2V0IiwicHJvcGVydHkiLCJwcm9wcyIsInVwZGF0ZWQiLCJwcm9wIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJnZXRQcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJyZXBsYWNlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi9yZWFjdGl2ZS1tb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVUsTUFDWEMsYUFBYyxTQUFRRixLQUFBLENBQUFHLE1BQU07WUFFOUJDLE1BQU07WUFDTixJQUFJQyxLQUFLQSxDQUFBO2NBQ0wsT0FBTyxJQUFJLENBQUNELE1BQU07WUFDdEI7WUFFQUUsU0FBUztZQUNULElBQUlDLFFBQVFBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN6QjtZQUVBLElBQUlDLFFBQVFBLENBQUNDLEtBQWM7Y0FDdkIsSUFBSUEsS0FBSyxLQUFLLElBQUksQ0FBQ0YsU0FBUyxFQUFFO2NBQzlCLElBQUksQ0FBQ0EsU0FBUyxHQUFHRSxLQUFLO2NBQ3RCLElBQUksQ0FBQ0MsWUFBWSxFQUFFO1lBQ3ZCO1lBRUFDLFFBQVE7WUFDUixJQUFJQyxPQUFPQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUNELFFBQVE7WUFDeEI7WUFFQUUsV0FBVztZQUNYLElBQUlDLFVBQVVBLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQ0QsV0FBVztZQUMzQjtZQUVBRSxVQUFVO1lBQ1YsSUFBSUMsU0FBU0EsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDRCxVQUFVO1lBQzFCO1lBRUFFLE9BQU87WUFDUCxJQUFJQyxNQUFNQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUNELE9BQU87WUFDdkI7WUFFQVAsWUFBWSxHQUFHQSxDQUFDUyxLQUFBLEdBQWdCLFFBQVEsS0FBVyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDO1lBRXRFOzs7OztZQUtBRSxJQUFJQSxDQUFDQyxRQUFRLEVBQUViLEtBQUs7Y0FDaEIsSUFBSWMsS0FBSyxHQUFHLEVBQUU7Y0FDZCxJQUFJRCxRQUFRLElBQUliLEtBQUssS0FBSyxXQUFXLEVBQUVjLEtBQUssQ0FBQ0QsUUFBUSxDQUFDLEdBQUdiLEtBQUssQ0FBQyxLQUFNYyxLQUFLLEdBQUdELFFBQVE7Y0FDckYsSUFBSUUsT0FBTyxHQUFZLEtBQUs7Y0FFNUIsS0FBSyxNQUFNQyxJQUFJLElBQUlGLEtBQUssRUFBRTtnQkFDdEIsTUFBTUcsR0FBRyxHQUFXLElBQUlELElBQUksRUFBRTtnQkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQ0UsY0FBYyxDQUFDRCxHQUFHLENBQUMsRUFBRSxTQUFTLENBQUM7Z0JBRXpDLElBQUksSUFBSSxDQUFDQSxHQUFHLENBQUMsS0FBS0gsS0FBSyxDQUFDRSxJQUFJLENBQUMsRUFBRTtnQkFDL0IsSUFBSSxDQUFDQyxHQUFHLENBQUMsR0FBR0gsS0FBSyxDQUFDRSxJQUFJLENBQUM7Z0JBQ3ZCRCxPQUFPLEdBQUcsSUFBSTs7Y0FHbEIsSUFBSUEsT0FBTyxFQUFFLElBQUksQ0FBQ2QsWUFBWSxFQUFFO1lBQ3BDO1lBRUFrQixhQUFhQSxDQUFBO2NBQ1QsTUFBTUwsS0FBSyxHQUFHLEVBQUU7Y0FDaEJNLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDQyxPQUFPLENBQUNULFFBQVEsSUFBSUMsS0FBSyxDQUFDRCxRQUFRLENBQUNVLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNWLFFBQVEsQ0FBQyxDQUFDO2NBQ3hGLE9BQU9DLEtBQUs7WUFDaEI7O1VBRUhVLE9BQUEsQ0FBQTlCLGFBQUEsR0FBQUEsYUFBQSJ9