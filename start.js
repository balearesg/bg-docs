System.register(["@beyond-js/kernel@0.1.7/bundle", "@beyond-js/kernel@0.1.7/transversals", "@beyond-js/widgets@0.1.2/render"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_beyondJsKernel017Transversals) {
      dependency_1 = _beyondJsKernel017Transversals;
    }, function (_beyondJsWidgets012Render) {
      dependency_2 = _beyondJsWidgets012Render;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "main-page",
        "vspecifier": "@bg/docs@1.0.0/home/page",
        "is": "page",
        "route": "/${content}"
      }, {
        "name": "sub-page",
        "vspecifier": "@bg/docs@1.0.0/home/subpage",
        "is": "page",
        "route": "/${content}/${sub}"
      }, {
        "name": "main-layout",
        "vspecifier": "@bg/docs@1.0.0/layout/main",
        "is": "layout"
      }]);
      bundles = [];
      __beyond_transversal.initialise(bundles);
    }
  };
});