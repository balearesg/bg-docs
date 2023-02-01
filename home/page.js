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
          "vspecifier": "@bg/docs@1.0.0/home/page"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@bg/docs/contents', dependency_4]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-page",
        "vspecifier": "@bg/docs@1.0.0/home/page",
        "is": "page",
        "route": "/${content}"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/docs@1.0.0/home/page');
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
        hash: 1328245005,
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
            const contentId = !content ? DEFAULT_CONTENT : content;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBRU87VUFBVSxNQUNYQSxVQUFXLFNBQVFDLCtCQUF5QjtZQUM5QyxJQUFJQyxNQUFNO2NBQ04sT0FBT0MsV0FBSTtZQUNmOztVQUNIQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSRDtVQUNBO1VBRUEsTUFBTUMsZUFBZSxHQUFHLFVBQVU7VUFFM0I7VUFBVSxTQUNSRixJQUFJLENBQUM7WUFBRUc7VUFBRyxDQUFFO1lBQ3BCLE1BQU1DLE9BQU8sR0FBR0QsR0FBRyxDQUFDRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDdkMsTUFBTUMsU0FBUyxHQUFHLENBQUNILE9BQU8sR0FBR0YsZUFBZSxHQUFHRSxPQUFPO1lBRXRELE1BQU1JLE9BQU8sR0FBSUMsSUFBSSxJQUFLQSxJQUFJLENBQUNELE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFQSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVcsRUFBRSxDQUFDO1lBQ3RFLE1BQU1DLElBQUksR0FBR0osU0FBUyxDQUFDSyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsQ0FBQ0wsT0FBTyxDQUFDLENBQUNNLElBQUksQ0FBQyxFQUFFLENBQUM7WUFFdkQsTUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNMLElBQUksQ0FBQyxJQUFJSyxRQUFRLENBQUNkLGVBQWUsQ0FBQztZQUUzRCxPQUNDZTtjQUFLQyxTQUFTLEVBQUM7WUFBaUIsR0FDL0JELG9CQUFDRixPQUFPLE9BQUcsQ0FDTjtVQUVSIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIkRFRkFVTFRfQ09OVEVOVCIsInVyaSIsImNvbnRlbnQiLCJ2YXJzIiwiZ2V0IiwiY29udGVudElkIiwicmVwbGFjZSIsInRleHQiLCJ0b1VwcGVyQ2FzZSIsIm5hbWUiLCJzcGxpdCIsIm1hcCIsImpvaW4iLCJDb250ZW50IiwiQ29udGVudHMiLCJSZWFjdCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsid2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJ3aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=