System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@bgroup/ui@0.0.34/icons", "prismjs@1.29.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, CodeBox, Code, InlineCode, __beyond_pkg, hmr;
  _export({
    CodeBox: void 0,
    Code: void 0,
    InlineCode: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_bgroupUi0034Icons) {
      dependency_3 = _bgroupUi0034Icons;
    }, function (_prismjs) {
      dependency_4 = _prismjs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/auth-api", "1.0.0"], ["@bg/auth-models", "1.0.0"], ["@bg/mailer", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.20.4"], ["@bgroup/ui", "0.0.34"], ["@mdx-js/mdx", "2.3.0"], ["@mdx-js/react", "2.3.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/backend", "0.1.9"], ["@bg/docs", "1.0.0"], ["@bg/docs", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bg/docs@1.0.0/code"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@bgroup/ui/icons', dependency_3], ['prismjs', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/docs@1.0.0/code');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./clipboard
      ***************************/
      ims.set('./clipboard', {
        hash: 3796031801,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Clipboard = Clipboard;
          var React = require("react");
          var _icons = require("@bgroup/ui/icons");
          function Clipboard({
            text,
            message
          }) {
            const ref = React.useRef(null);
            const polyfill = text => {
              const textArea = document.createElement('textarea');
              textArea.value = text;
              // Avoid scrolling to bottom
              textArea.style.top = '0';
              textArea.style.left = '0';
              textArea.style.position = 'fixed';
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              try {
                const successful = document.execCommand('copy');
                const msg = successful ? 'successful' : 'unsuccessful';
              } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
              }
            };
            const onClick = async event => {
              const target = event.currentTarget;
              const text = target.dataset.text;
              if (!navigator.clipboard) {
                return polyfill(text);
              }
              try {
                await navigator.clipboard.writeText(text);
                const span = ref.current.querySelector('.action-copied');
                span.classList.add('show');
                window.setTimeout(() => {
                  span.classList.add('hide');
                  window.setTimeout(() => span.classList.remove('show', 'hide'), 300);
                }, 500);
              } catch (e) {
                console.error('some error', e);
              }
            };
            return React.createElement("div", null, React.createElement("div", {
              className: "clipboard__container",
              "data-text": text,
              ref: ref,
              onClick: onClick
            }, React.createElement(_icons.BeyondIconButton, {
              icon: "copy"
            }), React.createElement("span", {
              className: "action-copied"
            }, "Copied")));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./code-box
      **************************/

      ims.set('./code-box', {
        hash: 1569805653,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CodeBox = CodeBox;
          var React = require("react");
          var _code = require("./code");
          var _clipboard = require("./clipboard");
          /*bundle*/
          function CodeBox({
            title,
            language,
            children
          }) {
            return React.createElement("div", {
              className: "code__box"
            }, React.createElement("header", null, React.createElement("div", {
              className: "tab active"
            }, title), React.createElement(_clipboard.Clipboard, {
              text: children,
              message: ""
            })), React.createElement("section", {
              className: "box__code"
            }, React.createElement(_code.Code, {
              language: language,
              clipboard: false
            }, children)));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./code
      **********************/

      ims.set('./code', {
        hash: 3186956624,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Code = Code;
          var React = require("react");
          var Prism = require("prismjs");
          var _clipboard = require("./clipboard");
          /*bundle*/
          function Code({
            language = 'typescript',
            children,
            clipboard = true
          }) {
            const createMarkup = () => {
              if (!children) {
                return {
                  __html: ''
                };
              }
              const html = Prism.highlight(children, Prism.languages.javascript, language);
              return {
                __html: html
              };
            };
            const cls = `code-container${clipboard ? ' has-clipboard' : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement("pre", null, React.createElement("code", {
              className: `regular__code language-${language}`,
              dangerouslySetInnerHTML: createMarkup()
            })), clipboard && React.createElement(_clipboard.Clipboard, {
              text: children,
              message: ""
            }));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./inline
      ************************/

      ims.set('./inline', {
        hash: 2676581642,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InlineCode = InlineCode;
          var React = require("react");
          /*bundle*/
          function InlineCode({
            children
          }) {
            return React.createElement("code", {
              className: "inline__code"
            }, children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./code-box",
        "from": "CodeBox",
        "name": "CodeBox"
      }, {
        "im": "./code",
        "from": "Code",
        "name": "Code"
      }, {
        "im": "./inline",
        "from": "InlineCode",
        "name": "InlineCode"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CodeBox') && _export("CodeBox", CodeBox = require ? require('./code-box').CodeBox : value);
        (require || prop === 'Code') && _export("Code", Code = require ? require('./code').Code : value);
        (require || prop === 'InlineCode') && _export("InlineCode", InlineCode = require ? require('./inline').InlineCode : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfaWNvbnMiLCJDbGlwYm9hcmQiLCJ0ZXh0IiwibWVzc2FnZSIsInJlZiIsInVzZVJlZiIsInBvbHlmaWxsIiwidGV4dEFyZWEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsInN0eWxlIiwidG9wIiwibGVmdCIsInBvc2l0aW9uIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZm9jdXMiLCJzZWxlY3QiLCJzdWNjZXNzZnVsIiwiZXhlY0NvbW1hbmQiLCJtc2ciLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJvbkNsaWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNwYW4iLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJlIiwiY2xhc3NOYW1lIiwiQmV5b25kSWNvbkJ1dHRvbiIsImljb24iLCJfY29kZSIsIl9jbGlwYm9hcmQiLCJDb2RlQm94IiwidGl0bGUiLCJsYW5ndWFnZSIsImNoaWxkcmVuIiwiQ29kZSIsIlByaXNtIiwiY3JlYXRlTWFya3VwIiwiX19odG1sIiwiaHRtbCIsImhpZ2hsaWdodCIsImxhbmd1YWdlcyIsImphdmFzY3JpcHQiLCJjbHMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIklubGluZUNvZGUiXSwic291cmNlcyI6WyIvdHMvY2xpcGJvYXJkLnRzeCIsIi90cy9jb2RlLWJveC50c3giLCIvdHMvY29kZS50c3giLCIvdHMvaW5saW5lLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFB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