System.register(["@beyond-js/widgets@0.1.2/render", "@beyond-js/kernel@0.1.7/bundle", "@beyond-js/react-widgets@18.21.1/page", "react@18.2.0", "@bg/docs@1.0.0/contents"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets012Render) {
      dependency_0 = _beyondJsWidgets012Render;
    }, function (_beyondJsKernel017Bundle) {
      dependency_1 = _beyondJsKernel017Bundle;
    }, function (_beyondJsReactWidgets18211Page) {
      dependency_2 = _beyondJsReactWidgets18211Page;
    }, function (_react) {
      dependency_3 = _react;
    }, function (_bgDocs100Contents) {
      dependency_4 = _bgDocs100Contents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-widgets", "18.21.1"], ["@bgroup/ui", "0.0.28"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["socket.io-client", "4.5.4"], ["@bg/docs", "1.0.0"], ["@bg/docs", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bg/docs@1.0.0/home/subpage"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@bg/docs/contents', dependency_4]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "sub-page",
        "vspecifier": "@bg/docs@1.0.0/home/subpage",
        "is": "page",
        "route": "/${content}/${sub}"
      }]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3638196390,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-widgets/page");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2055006803,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var Contents = require("@bg/docs/contents");
          const DEFAULT_CONTENT = 'NotFound';
          /*bundle*/
          function View({
            uri
          }) {
            const content = uri.vars.get('content');
            const sub = uri.vars.get('sub');
            // Here goes th default place
            const contentId = !sub ? content : `${content}-${sub}`;
            const replace = text => text.replace(text[0], text[0].toUpperCase());
            const name = contentId.split('-').map(replace).join('');
            const Content = Contents[name] || Contents[DEFAULT_CONTENT];
            return React.createElement("div", {
              className: "page__container"
            }, React.createElement(Content, null));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFFTztVQUFVLE1BQ1hBLFVBQVcsU0FBUUMsK0JBQXlCO1lBQzlDLElBQUlDLE1BQU07Y0FDTixPQUFPQyxXQUFJO1lBQ2Y7O1VBQ0hDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JEO1VBQ0E7VUFFQSxNQUFNQyxlQUFlLEdBQUcsVUFBVTtVQUUzQjtVQUFVLFNBQ1JGLElBQUksQ0FBQztZQUFFRztVQUFHLENBQUU7WUFDcEIsTUFBTUMsT0FBTyxHQUFHRCxHQUFHLENBQUNFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUN2QyxNQUFNQyxHQUFHLEdBQUdKLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQy9CO1lBQ0EsTUFBTUUsU0FBUyxHQUFHLENBQUNELEdBQUcsR0FBR0gsT0FBTyxHQUFHLEdBQUdBLE9BQU8sSUFBSUcsR0FBRyxFQUFFO1lBRXRELE1BQU1FLE9BQU8sR0FBSUMsSUFBSSxJQUFLQSxJQUFJLENBQUNELE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFQSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVcsRUFBRSxDQUFDO1lBQ3RFLE1BQU1DLElBQUksR0FBR0osU0FBUyxDQUFDSyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsQ0FBQ0wsT0FBTyxDQUFDLENBQUNNLElBQUksQ0FBQyxFQUFFLENBQUM7WUFFdkQsTUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNMLElBQUksQ0FBQyxJQUFJSyxRQUFRLENBQUNmLGVBQWUsQ0FBQztZQUUzRCxPQUNDZ0I7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQy9CRCxvQkFBQ0YsT0FBTyxPQUFHLENBQ047VUFFUiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJERUZBVUxUX0NPTlRFTlQiLCJ1cmkiLCJjb250ZW50IiwidmFycyIsImdldCIsInN1YiIsImNvbnRlbnRJZCIsInJlcGxhY2UiLCJ0ZXh0IiwidG9VcHBlckNhc2UiLCJuYW1lIiwic3BsaXQiLCJtYXAiLCJqb2luIiwiQ29udGVudCIsIkNvbnRlbnRzIiwiUmVhY3QiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb250cm9sbGVyLnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19