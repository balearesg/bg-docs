System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, ELink, Info, Link, Title, __beyond_pkg, hmr;
  _export({
    ELink: void 0,
    Info: void 0,
    Link: void 0,
    Title: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_beyondJsKernel019Routing) {
      dependency_2 = _beyondJsKernel019Routing;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
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
          "vspecifier": "@bg/docs@1.0.0/components/html"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/docs@1.0.0/components/html');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./external
      **************************/
      ims.set('./external', {
        hash: 196804591,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ELink = ELink;
          var React = require("react");
          /*bundle*/
          function ELink(props) {
            const {
              href
            } = props;
            return React.createElement("a", {
              href: href,
              target: "_blank",
              ...props,
              "data-algo": "algo"
            }, props.children);
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./info
      **********************/

      ims.set('./info', {
        hash: 3620021091,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Info = Info;
          var React = require("react");
          /*bundle */
          function Info({
            children
          }) {
            return React.createElement("div", {
              className: "docs__info"
            }, children);
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./link
      **********************/

      ims.set('./link', {
        hash: 1624987153,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Link = Link;
          var React = require("react");
          /*bundle*/
          function Link(props) {
            return React.createElement("a", {
              href: props.href,
              target: "_blank",
              className: "link"
            }, props.children);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./title
      ***********************/

      ims.set('./title', {
        hash: 1639511971,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Title = Title;
          var React = require("react");
          /*bundle*/
          function Title(props) {
            const {
              children,
              tag = "h1",
              text
            } = props;
            const Selector = tag;
            const content = text ?? children;
            let specs = {
              ...props
            };
            delete specs.children;
            delete specs.tag;
            delete specs.text;
            const replace = {
              á: "a",
              é: "e",
              í: "i",
              ó: "o",
              ú: "u",
              Á: "A",
              É: "E",
              Í: "I",
              Ó: "O",
              Ú: "U"
            };
            let id = content.trim().replace(/[áéíóúÁÉÍÓÚ]/g, match => replace[match] || "");
            id = `${id.trim().replace(/[^a-zA-Z0-9 ]/g, "")}`.replace(/ /g, "-").toLowerCase();
            specs.id = id;
            return React.createElement(Selector, {
              className: "title-doc",
              ...specs
            }, content);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./external",
        "from": "ELink",
        "name": "ELink"
      }, {
        "im": "./info",
        "from": "Info",
        "name": "Info"
      }, {
        "im": "./link",
        "from": "Link",
        "name": "Link"
      }, {
        "im": "./title",
        "from": "Title",
        "name": "Title"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ELink') && _export("ELink", ELink = require ? require('./external').ELink : value);
        (require || prop === 'Info') && _export("Info", Info = require ? require('./info').Info : value);
        (require || prop === 'Link') && _export("Link", Link = require ? require('./link').Link : value);
        (require || prop === 'Title') && _export("Title", Title = require ? require('./title').Title : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJFTGluayIsInByb3BzIiwiaHJlZiIsImNyZWF0ZUVsZW1lbnQiLCJ0YXJnZXQiLCJjaGlsZHJlbiIsIkluZm8iLCJjbGFzc05hbWUiLCJMaW5rIiwiVGl0bGUiLCJ0YWciLCJ0ZXh0IiwiU2VsZWN0b3IiLCJjb250ZW50Iiwic3BlY3MiLCJyZXBsYWNlIiwiw6EiLCLDqSIsIsOtIiwiw7MiLCLDuiIsIsOBIiwiw4kiLCLDjSIsIsOTIiwiw5oiLCJpZCIsInRyaW0iLCJtYXRjaCIsInRvTG93ZXJDYXNlIl0sInNvdXJjZXMiOlsiL2NvZGUvdHMvZXh0ZXJuYWwudHN4IiwiL2NvZGUvdHMvaW5mby50c3giLCIvY29kZS90cy9saW5rLnRzeCIsIi9jb2RlL3RzL3RpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFPTztVQUFVLFNBQ1JDLEtBQUtBLENBQUNDLEtBQWE7WUFDM0IsTUFBTTtjQUFFQztZQUFJLENBQUUsR0FBR0QsS0FBSztZQUN0QixPQUNDSCxLQUFBLENBQUFLLGFBQUE7Y0FBR0QsSUFBSSxFQUFFQSxJQUFJO2NBQUVFLE1BQU0sRUFBQyxRQUFRO2NBQUEsR0FBS0gsS0FBSztjQUFBLGFBQVk7WUFBTSxHQUN4REEsS0FBSyxDQUFDSSxRQUFRLENBQ1o7VUFFTjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQSxJQUFBUCxLQUFBLEdBQUFDLE9BQUE7VUFDTztVQUFXLFNBQVVPLElBQUlBLENBQUM7WUFBRUQ7VUFBUSxDQUFFO1lBQ3pDLE9BQU9QLEtBQUEsQ0FBQUssYUFBQTtjQUFLSSxTQUFTLEVBQUM7WUFBWSxHQUFFRixRQUFRLENBQU87VUFDdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSEEsSUFBQVAsS0FBQSxHQUFBQyxPQUFBO1VBV087VUFBVSxTQUNSUyxJQUFJQSxDQUFDUCxLQUFLO1lBRWYsT0FDSUgsS0FBQSxDQUFBSyxhQUFBO2NBQUlELElBQUksRUFBRUQsS0FBSyxDQUFDQyxJQUFJO2NBQUVFLE1BQU0sRUFBQyxRQUFRO2NBQUNHLFNBQVMsRUFBQztZQUFNLEdBQ2pETixLQUFLLENBQUNJLFFBQVEsQ0FDZjtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBUCxLQUFBLEdBQUFDLE9BQUE7VUFRTztVQUFVLFNBQVVVLEtBQUtBLENBQUNSLEtBQVk7WUFDekMsTUFBTTtjQUFFSSxRQUFRO2NBQUVLLEdBQUcsR0FBRyxJQUFJO2NBQUVDO1lBQUksQ0FBRSxHQUFHVixLQUFLO1lBQzVDLE1BQU1XLFFBQVEsR0FBR0YsR0FBRztZQUNwQixNQUFNRyxPQUFPLEdBQVdGLElBQUksSUFBSU4sUUFBUTtZQUN4QyxJQUFJUyxLQUFLLEdBQVE7Y0FBRSxHQUFHYjtZQUFLLENBQUU7WUFFN0IsT0FBT2EsS0FBSyxDQUFDVCxRQUFRO1lBQ3JCLE9BQU9TLEtBQUssQ0FBQ0osR0FBRztZQUNoQixPQUFPSSxLQUFLLENBQUNILElBQUk7WUFFakIsTUFBTUksT0FBTyxHQUFHO2NBQ1pDLENBQUMsRUFBRSxHQUFHO2NBQ05DLENBQUMsRUFBRSxHQUFHO2NBQ05DLENBQUMsRUFBRSxHQUFHO2NBQ05DLENBQUMsRUFBRSxHQUFHO2NBQ05DLENBQUMsRUFBRSxHQUFHO2NBQ05DLENBQUMsRUFBRSxHQUFHO2NBQ05DLENBQUMsRUFBRSxHQUFHO2NBQ05DLENBQUMsRUFBRSxHQUFHO2NBQ05DLENBQUMsRUFBRSxHQUFHO2NBQ05DLENBQUMsRUFBRTthQUNOO1lBRUQsSUFBSUMsRUFBRSxHQUFHYixPQUFPLENBQUNjLElBQUksRUFBRSxDQUFDWixPQUFPLENBQUMsZUFBZSxFQUFHYSxLQUFLLElBQUtiLE9BQU8sQ0FBQ2EsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pGRixFQUFFLEdBQUcsR0FBR0EsRUFBRSxDQUFDQyxJQUFJLEVBQUUsQ0FBQ1osT0FBTyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUNBLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUNjLFdBQVcsRUFBRTtZQUVsRmYsS0FBSyxDQUFDWSxFQUFFLEdBQUdBLEVBQUU7WUFFYixPQUFPNUIsS0FBQSxDQUFBSyxhQUFBLENBQUNTLFFBQVE7Y0FBQ0wsU0FBUyxFQUFDLFdBQVc7Y0FBQSxHQUFLTztZQUFLLEdBQUdELE9BQU8sQ0FBWTtVQUMxRSJ9