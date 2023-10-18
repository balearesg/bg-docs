System.register(["@beyond-js/widgets@0.1.3/render", "@beyond-js/kernel@0.1.8/bundle", "@beyond-js/react-widgets@18.20.4/page", "react@18.2.0", "@beyond-js/kernel@0.1.8/routing", "@bg/docs@1.0.0/contents", "@bg/docs@1.0.0/hooks", "@beyond-js/kernel@0.1.8/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets013Render) {
      dependency_0 = _beyondJsWidgets013Render;
    }, function (_beyondJsKernel018Bundle) {
      dependency_1 = _beyondJsKernel018Bundle;
    }, function (_beyondJsReactWidgets18204Page) {
      dependency_2 = _beyondJsReactWidgets18204Page;
    }, function (_react) {
      dependency_3 = _react;
    }, function (_beyondJsKernel018Routing) {
      dependency_4 = _beyondJsKernel018Routing;
    }, function (_bgDocs100Contents) {
      dependency_5 = _bgDocs100Contents;
    }, function (_bgDocs100Hooks) {
      dependency_6 = _bgDocs100Hooks;
    }, function (_beyondJsKernel018Styles) {
      dependency_7 = _beyondJsKernel018Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@bg/auth-api", "1.0.0"], ["@bg/auth-models", "1.0.0"], ["@bg/mailer", "1.0.0"], ["@jadmin/ui", "1.0.0"], ["@beyond-js/react-widgets", "18.20.4"], ["@bgroup/ui", "0.0.31"], ["@mdx-js/mdx", "2.3.0"], ["@mdx-js/react", "2.3.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.0"], ["@beyond-js/kernel", "0.1.8"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/backend", "0.1.4"], ["@bg/docs", "1.0.0"], ["@bg/docs", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bg/docs@1.0.0/main-page"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@beyond-js/kernel/routing', dependency_4], ['@bg/docs/contents', dependency_5], ['@bg/docs/hooks', dependency_6], ['@beyond-js/kernel/styles', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "main-page",
        "vspecifier": "@bg/docs@1.0.0/main-page",
        "is": "page",
        "route": "/${content}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@bg/docs@1.0.0/main-page');
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

      /**********************************
      INTERNAL MODULE: ./views/card/index
      **********************************/

      ims.set('./views/card/index', {
        hash: 2985166785,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Card = Card;
          var React = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          function Card({
            title,
            children,
            href
          }) {
            const attrs = {};
            const onNavigate = () => {
              _routing.routing.pushState(href);
            };
            if (href) attrs.onClick = onNavigate;
            return React.createElement("section", {
              className: "card",
              ...attrs
            }, React.createElement("header", null, React.createElement("h3", null, title)), children);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/home
      ****************************/

      ims.set('./views/home', {
        hash: 3757132136,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Home = Home;
          var React = require("react");
          var _card = require("./card");
          function Home() {
            return React.createElement("div", {
              className: "home"
            }, React.createElement("h1", null, "Bienvenidos a la documentaci\u00F3n Oficial de Baleares Group"), React.createElement("p", null, "En esta documentacion vas a poder encontrar informacion sobre los procesos desarrollados en Baleares Group, asi como la documentacion de los proyectos que usamos en el dia a dia a la hora de hacer aplicaciones de calidad"), React.createElement("div", {
              className: "card__container"
            }, React.createElement(_card.Card, {
              title: "C\u00F3mo p\u00FAblicar",
              href: "/how-to-use"
            }, "Revisa la informaci\u00F3n de c\u00F3mo agregar contenido a la documentaci\u00F3n"), React.createElement(_card.Card, {
              title: "Proceso de desarrollo",
              href: "/development/standards"
            }, "Estandar de desarrollo definido para el equipo de la factory."), React.createElement(_card.Card, {
              title: "BG Auth",
              href: "/auth-instalation"
            }, "Pasos para la implementacion de bg-auth en aplicaciones."), React.createElement(_card.Card, {
              title: "Beyond UI",
              href: "/how-to-use"
            }, "Implementacion de Beyond UI para la construccion de interfaces."), React.createElement(_card.Card, {
              title: "Essential IU",
              href: "/how-to-use"
            }, "Implementacion de Essential-UI para la construccion de interfaces."), React.createElement(_card.Card, {
              title: "Entrenamiento",
              href: "/trainee"
            }, "Implementacion de Essential-UI para la construccion de interfaces."), React.createElement(_card.Card, {
              title: "Jview",
              href: "/jview"
            }, "Implementacion de Jview para la construccion de interfaces.")));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3365866598,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var Contents = require("@bg/docs/contents");
          var _home = require("./home");
          const DEFAULT_CONTENT = 'Home';
          /*bundle*/
          function View({
            uri
          }) {
            const content = uri.vars.get('content');
            const contentId = !content ? DEFAULT_CONTENT : content;
            if (!content) {
              return React.createElement("div", {
                className: "page__container"
              }, React.createElement(_home.Home, null));
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiUmVhY3QiLCJfcm91dGluZyIsIkNhcmQiLCJ0aXRsZSIsImNoaWxkcmVuIiwiaHJlZiIsImF0dHJzIiwib25OYXZpZ2F0ZSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJvbkNsaWNrIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIl9jYXJkIiwiSG9tZSIsIkNvbnRlbnRzIiwiX2hvbWUiLCJERUZBVUxUX0NPTlRFTlQiLCJ1cmkiLCJjb250ZW50IiwidmFycyIsImdldCIsImNvbnRlbnRJZCIsInJlcGxhY2UiLCJ0ZXh0IiwidG9VcHBlckNhc2UiLCJuYW1lIiwic3BsaXQiLCJtYXAiLCJqb2luIiwiQ29udGVudCJdLCJzb3VyY2VzIjpbIi93aWRnZXQvdHMvY29udHJvbGxlci50cyIsIi93aWRnZXQvdHMvdmlld3MvY2FyZC9pbmRleC50c3giLCIvd2lkZ2V0L3RzL3ZpZXdzL2hvbWUudHN4IiwiL3dpZGdldC90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUM5QyxJQUFJQyxNQUFNQSxDQUFBO2NBQ04sT0FBT0gsTUFBQSxDQUFBSSxJQUFJO1lBQ2Y7O1VBQ0hDLE9BQUEsQ0FBQUosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JELElBQUFLLEtBQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLFFB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