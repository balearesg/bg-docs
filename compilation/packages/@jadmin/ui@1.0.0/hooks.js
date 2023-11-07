System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.9/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, useBinder, useForm, DocsContext, useDocsContext, useTexts, useWindowSize, __beyond_pkg, hmr;
  _export({
    useBinder: void 0,
    useForm: void 0,
    DocsContext: void 0,
    useDocsContext: void 0,
    useTexts: void 0,
    useWindowSize: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsKernel019Texts) {
      dependency_2 = _beyondJsKernel019Texts;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/react-widgets", "18.21.1"], ["@bgroup/ui", "0.0.36"], ["socket.io", "4.7.2"], ["socket.io-client", "4.7.2"], ["@types/react", "18.2.21"], ["@types/react-dom", "18.2.7"], ["@jadmin/ui", "1.0.0"], ["@bg/docs", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@jadmin/ui@1.0.0/hooks"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/texts', dependency_2]]);
      ims = new Map();
      /************************
      INTERNAL MODULE: ./binder
      ************************/
      ims.set('./binder', {
        hash: 4003813902,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBinder = useBinder;
          var React = require("react");
          /*bundle*/ /***
                      * Executes a useEffect hook binging the event defined in all
                      * objects passed
                      *
                      * @param {array} objects Objects to bind
                      * @param {function} onBinder function to be executed when the event is fired
                      * @param {string} event the event to be listened, by default is event change
                      */
          function useBinder(objects, onBinder, event = 'change') {
            React.useEffect(() => {
              objects.forEach(object => {
                if (!object) {
                  throw new Error(`object is not valid in useBinder ${object}`);
                }
                object.bind(event, onBinder);
              });
              return () => objects.forEach(object => object.unbind(event, onBinder));
            }, []);
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./use-form
      **************************/

      ims.set('./use-form', {
        hash: 1823647467,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useForm = void 0;
          var _react = require("react");
          /*bundle*/ /**
                      * It's a hook that returns an object with a bunch of functions that return objects that are used to
                      * render form elements.
                      * @param {params}  - params
                      * @returns An object with the following properties:
                      */
          const useForm = ({
            init,
            isDisabled,
            onChange
          }) => {
            const reducer = (state, payload) => {
              switch (payload.type) {
                case "reset":
                  return init;
                case "change":
                  return {
                    ...state,
                    [payload.name]: payload.value
                  };
                case "changes":
                  return {
                    ...state,
                    ...payload.data
                  };
                default:
                  return;
              }
            };
            const [fields, dispatch] = (0, _react.useReducer)(reducer, init);
            const [error, setError] = (0, _react.useState)({});
            const onFieldChange = event => {
              const {
                value,
                name,
                type,
                checked
              } = event.target;
              dispatch({
                name,
                value: type === "checkbox" ? checked : value,
                type: "change"
              });
              onChange && onChange(event.target);
              setError({});
            };
            return {
              fields,
              onFieldChange,
              getInput: (name, label, id, disabled) => ({
                name,
                value: fields[name],
                onChange: onFieldChange,
                label: label ?? name,
                id: name ?? id,
                disabled: disabled ?? isDisabled,
                loading: disabled ?? isDisabled
              }),
              getCheckbox: (name, disabled) => ({
                name,
                checked: fields[name],
                onChange: onFieldChange,
                disabled: disabled ?? isDisabled
              }),
              getRadio: (name, value, label, disabled) => ({
                name,
                value,
                checked: fields[name] === value,
                onChange: onFieldChange,
                label: label ?? value,
                disabled: disabled ?? isDisabled
              }),
              getSelect: (name, disabledField) => ({
                name,
                value: fields[name],
                onChange: onFieldChange,
                disabled: disabledField ?? isDisabled
              }),
              error,
              setError,
              dispatch
            };
          };
          exports.useForm = useForm;
        }
      });

      /***************************
      INTERNAL MODULE: ./use-texts
      ***************************/

      ims.set('./use-texts', {
        hash: 1692275935,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDocsContext = exports.DocsContext = void 0;
          exports.useTexts = useTexts;
          var _react = require("react");
          var _texts = require("@beyond-js/kernel/texts");
          ;
          const value = {};
          /*bundle*/
          const DocsContext = (0, _react.createContext)(value);
          exports.DocsContext = DocsContext;
          /*bundle*/
          const useDocsContext = () => (0, _react.useContext)(DocsContext);
          /**
           * It returns a boolean and an object. The boolean is true when the object is ready.
           * The object is a collection of strings.
           * @param {string} moduleId - string - the module id of the texts you want to use
           * @returns An array of two elements. The first element is a boolean, the second element is an object.
           */
          exports.useDocsContext = useDocsContext;
          /*bundle*/
          function useTexts(moduleId) {
            const [ready, setReady] = (0, _react.useState)(false);
            const [texts, setTexts] = (0, _react.useState)();
            (0, _react.useEffect)(() => {
              const modelTexts = new _texts.CurrentTexts(moduleId);
              const triggerEvent = () => {
                const texts = modelTexts.value;
                setReady(modelTexts.ready);
                setTexts(texts);
              };
              modelTexts.bind('change', triggerEvent);
              triggerEvent();
              return () => {
                modelTexts.unbind('change', triggerEvent);
              };
            }, []);
            const isReady = ready && !!texts;
            return [isReady, texts];
          }
          ;
        }
      });

      /*********************************
      INTERNAL MODULE: ./use-window-size
      *********************************/

      ims.set('./use-window-size', {
        hash: 724534883,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useWindowSize = useWindowSize;
          var _react = require("react");
          /*bundle*/ /**
                      * It returns an object with the current window width and height
                      * @returns A function that returns a windowSize object.
                      */
          function useWindowSize() {
            const [windowSize, setWindowSize] = (0, _react.useState)({
              width: undefined,
              height: undefined
            });
            (0, _react.useEffect)(() => {
              const handleResize = () => {
                setWindowSize({
                  width: window.innerWidth,
                  height: window.innerHeight
                });
              };
              window.addEventListener("resize", handleResize);
              handleResize();
              return () => window.removeEventListener("resize", handleResize);
            }, []);
            return windowSize;
          }
          ;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./binder",
        "from": "useBinder",
        "name": "useBinder"
      }, {
        "im": "./use-form",
        "from": "useForm",
        "name": "useForm"
      }, {
        "im": "./use-texts",
        "from": "DocsContext",
        "name": "DocsContext"
      }, {
        "im": "./use-texts",
        "from": "useDocsContext",
        "name": "useDocsContext"
      }, {
        "im": "./use-texts",
        "from": "useTexts",
        "name": "useTexts"
      }, {
        "im": "./use-window-size",
        "from": "useWindowSize",
        "name": "useWindowSize"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'useBinder') && _export("useBinder", useBinder = require ? require('./binder').useBinder : value);
        (require || prop === 'useForm') && _export("useForm", useForm = require ? require('./use-form').useForm : value);
        (require || prop === 'DocsContext') && _export("DocsContext", DocsContext = require ? require('./use-texts').DocsContext : value);
        (require || prop === 'useDocsContext') && _export("useDocsContext", useDocsContext = require ? require('./use-texts').useDocsContext : value);
        (require || prop === 'useTexts') && _export("useTexts", useTexts = require ? require('./use-texts').useTexts : value);
        (require || prop === 'useWindowSize') && _export("useWindowSize", useWindowSize = require ? require('./use-window-size').useWindowSize : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJ1c2VCaW5kZXIiLCJvYmplY3RzIiwib25CaW5kZXIiLCJldmVudCIsInVzZUVmZmVjdCIsImZvckVhY2giLCJvYmplY3QiLCJFcnJvciIsImJpbmQiLCJ1bmJpbmQiLCJfcmVhY3QiLCJ1c2VGb3JtIiwiaW5pdCIsImlzRGlzYWJsZWQiLCJvbkNoYW5nZSIsInJlZHVjZXIiLCJzdGF0ZSIsInBheWxvYWQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiZGF0YSIsImZpZWxkcyIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VTdGF0ZSIsIm9uRmllbGRDaGFuZ2UiLCJjaGVja2VkIiwidGFyZ2V0IiwiZ2V0SW5wdXQiLCJsYWJlbCIsImlkIiwiZGlzYWJsZWQiLCJsb2FkaW5nIiwiZ2V0Q2hlY2tib3giLCJnZXRSYWRpbyIsImdldFNlbGVjdCIsImRpc2FibGVkRmllbGQiLCJleHBvcnRzIiwiX3RleHRzIiwiRG9jc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRG9jc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlVGV4dHMiLCJtb2R1bGVJZCIsInJlYWR5Iiwic2V0UmVhZHkiLCJ0ZXh0cyIsInNldFRleHRzIiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsImlzUmVhZHkiLCJ1c2VXaW5kb3dTaXplIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ3aWR0aCIsInVuZGVmaW5lZCIsImhlaWdodCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZXMiOlsiL2NvZGUvdHMvYmluZGVyLnRzIiwiL2NvZGUvdHMvdXNlLWZvcm0udHMiLCIvY29kZS90cy91c2UtdGV4dHMudHMiLCIvY29kZS90cy91c2Utd2luZG93LXNp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