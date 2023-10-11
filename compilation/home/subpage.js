System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-widgets@18.20.4/page", "react@18.2.0", "@bg/docs@1.0.0/contents"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReactWidgets18204Page) {
      dependency_2 = _beyondJsReactWidgets18204Page;
    }, function (_react) {
      dependency_3 = _react;
    }, function (_bgDocs100Contents) {
      dependency_4 = _bgDocs100Contents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/auth-api", "1.0.0"], ["@bg/auth-models", "1.0.0"], ["@bg/mailer", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.20.4"], ["@bgroup/ui", "0.0.34"], ["@mdx-js/mdx", "2.3.0"], ["@mdx-js/react", "2.3.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/backend", "0.1.9"], ["@bg/docs", "1.0.0"], ["@bg/docs", "1.0.0"]]);
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
        "route": "/${content}/${sub}",
        "layout": "main-layout"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiUmVhY3QiLCJDb250ZW50cyIsIkRFRkFVTFRfQ09OVEVOVCIsInVyaSIsImNvbnRlbnQiLCJ2YXJzIiwiZ2V0Iiwic3ViIiwiY29udGVudElkIiwicmVwbGFjZSIsInRleHQiLCJ0b1VwcGVyQ2FzZSIsIm5hbWUiLCJzcGxpdCIsIm1hcCIsImpvaW4iLCJDb250ZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSJdLCJzb3VyY2VzIjpbIi93aWRnZXQvdHMvY29udHJvbGxlci50cyIsIi93aWRnZXQvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkseUJBQXlCO1lBQzlDLElBQUlDLE1BQU1BLENBQUE7Y0FDTixPQUFPSCxNQUFBLENBQUFJLElBQUk7WUFDZjs7VUFDSEMsT0FBQSxDQUFBSixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkQsSUFBQUssS0FBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsUUFBQSxHQUFBUixPQUFBO1VBRUEsTUFBTVMsZUFBZSxHQUFHLFVBQVU7VUFFM0I7VUFBVSxTQUNSSixJQUFJQSxDQUFDO1lBQUVLO1VBQUcsQ0FBRTtZQUNwQixNQUFNQyxPQUFPLEdBQUdELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQ3ZDLE1BQU1DLEdBQUcsR0FBR0osR0FBRyxDQUFDRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDL0I7WUFDQSxNQUFNRSxTQUFTLEdBQUcsQ0FBQ0QsR0FBRyxHQUFHSCxPQUFPLEdBQUcsR0FBR0EsT0FBTyxJQUFJRyxHQUFHLEVBQUU7WUFFdEQsTUFBTUUsT0FBTyxHQUFJQyxJQUFJLElBQUtBLElBQUksQ0FBQ0QsT0FBTyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUVBLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxFQUFFLENBQUM7WUFDdEUsTUFBTUMsSUFBSSxHQUFHSixTQUFTLENBQUNLLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDTCxPQUFPLENBQUMsQ0FBQ00sSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUV2RCxNQUFNQyxPQUFPLEdBQUdmLFFBQVEsQ0FBQ1csSUFBSSxDQUFDLElBQUlYLFFBQVEsQ0FBQ0MsZUFBZSxDQUFDO1lBRTNELE9BQ0NGLEtBQUEsQ0FBQWlCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQy9CbEIsS0FBQSxDQUFBaUIsYUFBQSxDQUFDRCxPQUFPLE9BQUcsQ0FDTjtVQUVSIn0=