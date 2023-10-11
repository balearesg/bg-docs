System.register(["@beyond-js/kernel@0.1.8/bundle", "@beyond-js/kernel@0.1.8/styles", "react@18.2.0", "@beyond-js/kernel@0.1.8/core", "@jadmin/ui@1.0.0/api", "@bgroup/ui@0.0.31/form", "@jadmin/ui@1.0.0/utils", "@bgroup/ui@0.0.31/empty", "@bgroup/ui@0.0.31/icons", "@bgroup/ui@0.0.31/perfect-scrollbar", "@bgroup/ui@0.0.31/spinner"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Controller, JView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    JView: void 0
  });
  return {
    setters: [function (_beyondJsKernel018Bundle) {
      dependency_0 = _beyondJsKernel018Bundle;
    }, function (_beyondJsKernel018Styles) {
      dependency_1 = _beyondJsKernel018Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsKernel018Core) {
      dependency_3 = _beyondJsKernel018Core;
    }, function (_jadminUi100Api) {
      dependency_4 = _jadminUi100Api;
    }, function (_bgroupUi0031Form) {
      dependency_5 = _bgroupUi0031Form;
    }, function (_jadminUi100Utils) {
      dependency_6 = _jadminUi100Utils;
    }, function (_bgroupUi0031Empty) {
      dependency_7 = _bgroupUi0031Empty;
    }, function (_bgroupUi0031Icons) {
      dependency_8 = _bgroupUi0031Icons;
    }, function (_bgroupUi0031PerfectScrollbar) {
      dependency_9 = _bgroupUi0031PerfectScrollbar;
    }, function (_bgroupUi0031Spinner) {
      dependency_10 = _bgroupUi0031Spinner;
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
          "vspecifier": "@jadmin/ui@1.0.0/jview"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['@jadmin/ui/api', dependency_4], ['@bgroup/ui/form', dependency_5], ['@jadmin/ui/utils', dependency_6], ['@bgroup/ui/empty', dependency_7], ['@bgroup/ui/icons', dependency_8], ['@bgroup/ui/perfect-scrollbar', dependency_9], ['@bgroup/ui/spinner', dependency_10]]);
      brequire('@beyond-js/kernel/styles').styles.register('@jadmin/ui@1.0.0/jview');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 2788989128,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useJViewContext = exports.JViewContext = void 0;
          var _react = require("react");
          const JViewContext = (0, _react.createContext)({});
          exports.JViewContext = JViewContext;
          const useJViewContext = () => (0, _react.useContext)(JViewContext);
          exports.useJViewContext = useJViewContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 3173948521,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = Controller;
          var _core = require("@beyond-js/kernel/core");
          var _api = require("@jadmin/ui/api");
          /*bundle*/
          function Controller(props) {
            const events = new _core.Events({
              bind: this
            });
            const triggerEvent = (event = "change") => events.trigger(event);
            /*
             * {total}  int total rows registries.
             */
            const {
              total,
              rows,
              action
            } = props;
            let current = props.current ? props.current : 1;
            let entries = props.entries ? props.entries : [];
            Object.defineProperty(this, "ready", {
              get: () => !!entries && !!total && !!rows
            });
            let pages;
            if (total <= rows) pages = 1;else pages = Math.ceil(total / rows);
            let pager;
            Object.defineProperty(this, "pages", {
              get: () => pages
            });
            Object.defineProperty(this, "pager", {
              get: () => pager
            });
            Object.defineProperty(this, "rows", {
              get: () => rows
            });
            Object.defineProperty(this, "total", {
              get: () => total
            });
            Object.defineProperty(this, "current", {
              get: () => current,
              set: value => current = value
            });
            Object.defineProperty(this, "entries", {
              get: () => entries.slice(current - 1, current * rows)
            });
            let fetching;
            Object.defineProperty(this, "fetching", {
              get: () => fetching
            });
            const caller = new _api.JCall();
            const ajaxCall = async next => {
              const response = await caller.get(action, {
                next: next,
                limit: rows
              });
              if (response.status !== "ok" || !response.data) {
                console.warn("there is no data");
                return [];
              }
              return response.data;
            };
            /*
             * Este metodo espera recibir la data de la llamada o del metodo que ejecuta
             *
             * @param page
             * @param entries
             * @returns {Promise<void>}
             */
            this.getPage = async (page, entries) => {
              fetching = true;
              triggerEvent();
              pager = false;
              if (page < current) {
                current = page;
                if (props.onPrev && typeof props.onPrev === 'function') {
                  pager = true;
                  await props.onPrev(page);
                }
                ;
                fetching = false;
                triggerEvent();
                return;
              }
              const next = rows * current;
              const localItems = entries.length;
              if (localItems > next) {
                current = page;
                fetching = false;
                triggerEvent();
                return;
              }
              const call = props.onNext ?? ajaxCall;
              const data = await call(next, page);
              entries.push(...data);
              current = page;
              pager = true;
              fetching = false;
              triggerEvent();
            };
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./dates
      ***********************/

      ims.set('./dates', {
        hash: 3678701519,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dates = Dates;
          var _react = require("react");
          var _form = require("@bgroup/ui/form");
          var _utils = require("@jadmin/ui/utils");
          function Dates({
            values,
            error,
            handleChange
          }) {
            return _react.default.createElement("div", {
              className: "container-date"
            }, _react.default.createElement(_form.BeyondInput, {
              type: "date",
              className: "form-control",
              value: values.startDate,
              name: "startDate",
              max: (0, _utils.getCurrentDate)(),
              hasError: !!error?.date,
              errorMessage: error?.date,
              label: "Desde",
              onChange: handleChange
            }), _react.default.createElement(_form.BeyondInput, {
              type: "date",
              className: "form-control form-control-end",
              value: values.endDate,
              max: (0, _utils.getCurrentDate)(),
              hasError: !!error?.date,
              label: "hasta",
              errorMessage: error?.date,
              onChange: handleChange,
              name: "endDate"
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./jview
      ***********************/

      ims.set('./jview', {
        hash: 3637632020,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.JView = JView;
          var _react = require("react");
          var _controller = require("./controller");
          var _context = require("./context");
          var _view = require("./view");
          /*bundle*/
          function JView(props) {
            const {
              rows,
              onPrev,
              onNext,
              action
            } = props;
            const propsController = {
              total: props.total,
              rows,
              action,
              current: props.current,
              entries: props.entries,
              onPrev,
              onNext
            };
            const [state, setState] = (0, _react.useState)({});
            let [total, setTotal] = (0, _react.useState)(props.total);
            let [entries, setEntries] = (0, _react.useState)(props.entries);
            const [current, setCurrent] = (0, _react.useState)(props.currentPage ?? 1);
            const [pages, setPages] = (0, _react.useState)();
            (0, _react.useEffect)(() => {
              const update = (specs = {}) => {
                setState({
                  ...state,
                  ...specs,
                  controller
                });
                const page = typeof controller.current === "string" ? parseInt(controller.current) : controller.current;
                setCurrent(page);
              };
              const controller = new _controller.Controller(propsController);
              controller.bind("change", update);
              update();
              return () => controller.unbind("change", update);
            }, []);
            (0, _react.useEffect)(() => {
              if (props.total !== total) {
                setTotal(props.total);
                if (state.controller) state.controller.current = 1;
                setCurrent(1);
              }
              setTimeout(() => {
                if (props.currentPage) {
                  if (state?.controller) state.controller.current = props.currentPage;
                  const page = typeof props.currentPage === "string" ? parseInt(props.currentPage) : props.currentPage;
                  setCurrent(page);
                }
              }, 500);
              setEntries(props.entries);
            }, [props.total, props.entries, props.currentPage]);
            if (!state.controller) return null;
            const value = {
              ...props,
              state,
              props,
              current,
              pages,
              total,
              entries,
              setPages
            };
            return _react.default.createElement(_context.JViewContext.Provider, {
              value: value
            }, _react.default.createElement(_view.View, null));
          }
          JView.defaultProps = {
            scroll: false,
            animation: false
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./pager
      ***********************/

      ims.set('./pager', {
        hash: 368701377,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Pager = Pager;
          var _react = require("react");
          var _context = require("./context");
          function Pager() {
            const {
              state,
              entries,
              current,
              pages
            } = (0, _context.useJViewContext)();
            const pagesShowed = 4;
            const navigate = event => {
              const target = event.currentTarget;
              const {
                page
              } = target.dataset;
              state.controller.getPage(page ?? parseInt(page), entries);
            };
            const output = [];
            let middle, last, first;
            if (pages <= 1) return null;
            if (pages > 1 && pages >= current) {
              middle = Math.ceil(pagesShowed / 2);
              last = current + middle <= pages ? current + middle : pages;
              first = current > middle ? current - middle : 1;
            }
            for (let i = first; i <= last; ++i) {
              let cls = "pager-item";
              if (i === current) cls += " item-current";
              output.push(_react.default.createElement("li", {
                className: cls,
                "data-page": i,
                key: `item-${i}`,
                onClick: navigate
              }, i));
            }
            if (pages > 1 && current > 2) {
              output.unshift(_react.default.createElement("li", {
                key: "first",
                "data-page": 1,
                onClick: navigate,
                className: "pager-item"
              }, "<<"));
            }
            if (current !== pages && pages > 2 && current !== pages - 1 && current + 2 !== pages) {
              output.push(_react.default.createElement("li", {
                key: "last",
                "data-page": pages,
                onClick: navigate,
                className: "pager-item"
              }, pages));
            }
            return _react.default.createElement("div", {
              className: "jview-component-pager"
            }, _react.default.createElement("ul", null, output));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./rows
      **********************/

      ims.set('./rows', {
        hash: 2351130295,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Rows = Rows;
          var _react = require("react");
          var _empty = require("@bgroup/ui/empty");
          var _context = require("./context");
          function Rows() {
            const {
              total,
              rows,
              entries,
              current,
              state,
              rowProps,
              row,
              isSearch,
              setPages
            } = (0, _context.useJViewContext)();
            (0, _react.useEffect)(() => {
              if (total <= rows) setPages(1);else setPages(Math.ceil(total / rows));
            }, [total, rows]);
            let cropStart = current === 1 ? 0 : (current - 1) * rows;
            const pageEntries = state?.controller?.pager ? entries : entries.slice(cropStart, cropStart + rows);
            const Row = row;
            const output = (0, _react.useMemo)(() => {
              const showedEntries = !!pageEntries.length ? pageEntries : entries;
              return showedEntries.map((item, i) => {
                return _react.default.createElement(Row, {
                  item: item,
                  index: i,
                  key: `${i}-${current}`,
                  ...rowProps
                });
              });
            }, [pageEntries]);
            const text = isSearch ? "No hay elementos en tu busqueda" : "No hay elementos para mostrar";
            return _react.default.createElement(_react.default.Fragment, null, output.length ? _react.default.createElement("div", {
              className: "card"
            }, output) : _react.default.createElement(_empty.BeyondEmpty, {
              text: text,
              icon: "circle-exclamation"
            }));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./search
      ************************/

      ims.set('./search', {
        hash: 2187086498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Search = Search;
          var _react = require("react");
          var _icons = require("@bgroup/ui/icons");
          var _dates = require("./dates");
          var _context = require("./context");
          function Search() {
            const {
              handleSearch,
              handleClear,
              date,
              initValues,
              isSearch
            } = (0, _context.useJViewContext)();
            const init = Object.assign({
              search: '',
              startDate: '',
              endDate: ''
            }, initValues ?? {});
            const [values, setValues] = (0, _react.useState)(init);
            const [error, setError] = (0, _react.useState)({});
            const handleChange = event => {
              const {
                name,
                value
              } = event.currentTarget;
              setValues({
                ...values,
                [name]: value
              });
            };
            const {
              search,
              startDate,
              endDate
            } = values;
            const clearSearch = () => {
              const specs = {};
              Object.keys(init).forEach(item => {
                specs[item] = '';
              });
              setValues({
                ...specs
              });
              setError({});
              handleClear && handleClear();
            };
            (0, _react.useEffect)(() => {
              return () => {
                setValues({
                  ...init
                });
              };
            }, []);
            const handleSubmit = event => {
              event.preventDefault();
              if (!search) return;
              const firstDate = new Date(startDate).getTime();
              const finallyDate = new Date(endDate).getTime();
              if (firstDate > finallyDate && date) {
                setError({
                  date: 'La fecha de inicio no puede ser mayor a la fecha de fin'
                });
                return;
              }
              if (date) handleSearch && handleSearch(event, search.trim(), values);else handleSearch && handleSearch(event, search.trim());
            };
            const disabled = {};
            if (!search) disabled.disabled = true;
            const cls = date ? 'date form-group-jview' : 'form-group-jview';
            return _react.default.createElement("form", {
              onSubmit: handleSubmit,
              className: cls
            }, date && _react.default.createElement(_dates.Dates, {
              values: values,
              error: error,
              handleChange: handleChange
            }), _react.default.createElement("div", {
              id: "search-box"
            }, _react.default.createElement("div", {
              id: "search-form"
            }, _react.default.createElement("input", {
              id: "search-text",
              type: "search",
              className: "form-field",
              name: "search",
              autoComplete: "off",
              value: values.search,
              placeholder: "Buscar",
              onChange: handleChange
            }), (search || isSearch) && _react.default.createElement(_icons.BeyondIconButton, {
              icon: "close",
              className: date && 'date',
              onClick: clearSearch
            }), _react.default.createElement("button", {
              id: "search-button",
              type: "submit"
            }, _react.default.createElement("span", null, "Buscar")))));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2892264546,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************
      INTERNAL MODULE: ./view
      **********************/

      ims.set('./view', {
        hash: 824299433,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _perfectScrollbar = require("@bgroup/ui/perfect-scrollbar");
          var _spinner = require("@bgroup/ui/spinner");
          var _pager = require("./pager");
          var _search = require("./search");
          var _context = require("./context");
          var _rows = require("./rows");
          function View() {
            const {
              header,
              additionalElement,
              state,
              title,
              search,
              props,
              scroll,
              fetching,
              animation
            } = (0, _context.useJViewContext)();
            const Header = header;
            const AdditionalElement = additionalElement;
            let cls = state.controller.fetching || fetching ? "jview-component is-fetching" : "jview-component";
            cls += ` ${animation && "animate__animated animate__fadeInUp"}`;
            const Component = scroll ? _perfectScrollbar.BeyondScrollContainer : "div";
            return _react.default.createElement(Component, {
              "data-perfect-scrollbar": "",
              "data-suppress-scroll-x": "true",
              className: "perfect-scrollbar-view"
            }, _react.default.createElement("div", {
              className: cls
            }, title && _react.default.createElement("h3", {
              className: "jida-table-title"
            }, title), _react.default.createElement("div", {
              className: "jview-component__header__content-search"
            }, AdditionalElement && _react.default.createElement(AdditionalElement, {
              ...props
            }), search && _react.default.createElement(_search.Search, null)), _react.default.createElement("div", {
              className: "jview-component__header"
            }, header && _react.default.createElement(Header, {
              ...props
            })), _react.default.createElement(_rows.Rows, null), _react.default.createElement(_pager.Pager, null), _react.default.createElement("div", {
              className: "jview-fetching"
            }, _react.default.createElement(_spinner.BeyondSpinner, {
              className: "jview-loading",
              color: "var(--primary)"
            }))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./jview",
        "from": "JView",
        "name": "JView"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'JView') && _export("JView", JView = require ? require('./jview').JView : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiSlZpZXdDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImV4cG9ydHMiLCJ1c2VKVmlld0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvcmUiLCJfYXBpIiwiQ29udHJvbGxlciIsInByb3BzIiwiZXZlbnRzIiwiRXZlbnRzIiwiYmluZCIsInRyaWdnZXJFdmVudCIsImV2ZW50IiwidHJpZ2dlciIsInRvdGFsIiwicm93cyIsImFjdGlvbiIsImN1cnJlbnQiLCJlbnRyaWVzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwicGFnZXIiLCJzZXQiLCJ2YWx1ZSIsInNsaWNlIiwiZmV0Y2hpbmciLCJjYWxsZXIiLCJKQ2FsbCIsImFqYXhDYWxsIiwibmV4dCIsInJlc3BvbnNlIiwibGltaXQiLCJzdGF0dXMiLCJkYXRhIiwiY29uc29sZSIsIndhcm4iLCJnZXRQYWdlIiwicGFnZSIsIm9uUHJldiIsImxvY2FsSXRlbXMiLCJsZW5ndGgiLCJjYWxsIiwib25OZXh0IiwicHVzaCIsIl9mb3JtIiwiX3V0aWxzIiwiRGF0ZXMiLCJ2YWx1ZXMiLCJlcnJvciIsImhhbmRsZUNoYW5nZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiQmV5b25kSW5wdXQiLCJ0eXBlIiwic3RhcnREYXRlIiwibmFtZSIsIm1heCIsImdldEN1cnJlbnREYXRlIiwiaGFzRXJyb3IiLCJkYXRlIiwiZXJyb3JNZXNzYWdlIiwibGFiZWwiLCJvbkNoYW5nZSIsImVuZERhdGUiLCJfY29udHJvbGxlciIsIl9jb250ZXh0IiwiX3ZpZXciLCJKVmlldyIsInByb3BzQ29udHJvbGxlciIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsInNldFRvdGFsIiwic2V0RW50cmllcyIsInNldEN1cnJlbnQiLCJjdXJyZW50UGFnZSIsInNldFBhZ2VzIiwidXNlRWZmZWN0IiwidXBkYXRlIiwic3BlY3MiLCJjb250cm9sbGVyIiwicGFyc2VJbnQiLCJ1bmJpbmQiLCJzZXRUaW1lb3V0IiwiUHJvdmlkZXIiLCJWaWV3IiwiZGVmYXVsdFByb3BzIiwic2Nyb2xsIiwiYW5pbWF0aW9uIiwiUGFnZXIiLCJwYWdlc1Nob3dlZCIsIm5hdmlnYXRlIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJvdXRwdXQiLCJtaWRkbGUiLCJsYXN0IiwiZmlyc3QiLCJpIiwiY2xzIiwia2V5Iiwib25DbGljayIsInVuc2hpZnQiLCJfZW1wdHkiLCJSb3dzIiwicm93UHJvcHMiLCJyb3ciLCJpc1NlYXJjaCIsImNyb3BTdGFydCIsInBhZ2VFbnRyaWVzIiwiUm93IiwidXNlTWVtbyIsInNob3dlZEVudHJpZXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0ZXh0IiwiRnJhZ21lbnQiLCJCZXlvbmRFbXB0eSIsImljb24iLCJfaWNvbnMiLCJfZGF0ZXMiLCJTZWFyY2giLCJoYW5kbGVTZWFyY2giLCJoYW5kbGVDbGVhciIsImluaXRWYWx1ZXMiLCJpbml0IiwiYXNzaWduIiwic2VhcmNoIiwic2V0VmFsdWVzIiwic2V0RXJyb3IiLCJjbGVhclNlYXJjaCIsImtleXMiLCJmb3JFYWNoIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmaXJzdERhdGUiLCJEYXRlIiwiZ2V0VGltZSIsImZpbmFsbHlEYXRlIiwidHJpbSIsImRpc2FibGVkIiwib25TdWJtaXQiLCJpZCIsImF1dG9Db21wbGV0ZSIsInBsYWNlaG9sZGVyIiwiQmV5b25kSWNvbkJ1dHRvbiIsIl9wZXJmZWN0U2Nyb2xsYmFyIiwiX3NwaW5uZXIiLCJfcGFnZXIiLCJfc2VhcmNoIiwiX3Jvd3MiLCJoZWFkZXIiLCJhZGRpdGlvbmFsRWxlbWVudCIsInRpdGxlIiwiSGVhZGVyIiwiQWRkaXRpb25hbEVsZW1lbnQiLCJDb21wb25lbnQiLCJCZXlvbmRTY3JvbGxDb250YWluZXIiLCJCZXlvbmRTcGlubmVyIiwiY29sb3IiXSwic291cmNlcyI6WyIvY29kZS90cy9jb250ZXh0LnRzeCIsIi9jb2RlL3RzL2NvbnRyb2xsZXIudHMiLCIvY29kZS90cy9kYXRlcy50c3giLCIvY29kZS90cy9qdmlldy50c3giLCIvY29kZS90cy9wYWdlci50c3giLCIvY29kZS90cy9yb3dzLnRzeCIsIi9jb2RlL3RzL3NlYXJjaC50c3giLCIvdHlwZXMudHMiLCIvY29kZS90cy92aWV3LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBR08sTUFBTUMsWUFBWSxHQUFvQixJQUFBRixNQUFBLENBQUFHLGFBQWEsRUFBQyxFQUFHLENBQUM7VUFBQ0MsT0FBQSxDQUFBRixZQUFBLEdBQUFBLFlBQUE7VUFDekQsTUFBTUcsZUFBZSxHQUFpQkEsQ0FBQSxLQUFjLElBQUFMLE1BQUEsQ0FBQU0sVUFBVSxFQUFDSixZQUFZLENBQUM7VUFBQ0UsT0FBQSxDQUFBQyxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSnBGLElBQUFFLEtBQUEsR0FBQU4sT0FBQTtVQUNBLElBQUFPLElBQUEsR0FBQVAsT0FBQTtVQUdPO1VBQVUsU0FDUlEsVUFBVUEsQ0FBQ0MsS0FBc0I7WUFDdEMsTUFBTUMsTUFBTSxHQUFXLElBQUlKLEtBQUEsQ0FBQUssTUFBTSxDQUFDO2NBQUNDLElBQUksRUFBRTtZQUFJLENBQUMsQ0FBQztZQUMvQyxNQUFNQyxZQUFZLEdBQUdBLENBQUNDLEtBQUEsR0FBZ0IsUUFBUSxLQUFVSixNQUFNLENBQUNLLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDO1lBQzdFOzs7WUFHQSxNQUFNO2NBQUNFLEtBQUs7Y0FBRUMsSUFBSTtjQUFFQztZQUFNLENBQUMsR0FBR1QsS0FBSztZQUNuQyxJQUFJVSxP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