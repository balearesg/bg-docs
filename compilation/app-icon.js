System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@bgroup/ui@0.0.34/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, AppIconButton, AppIcon, __beyond_pkg, hmr;
  _export({
    AppIconButton: void 0,
    AppIcon: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_bgroupUi0034Icons) {
      dependency_2 = _bgroupUi0034Icons;
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
          "vspecifier": "@bg/docs@1.0.0/app-icon"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@bgroup/ui/icons', dependency_2]]);
      ims = new Map();
      /*********************************
      INTERNAL MODULE: ./app-icon-button
      *********************************/
      ims.set('./app-icon-button', {
        hash: 1846008168,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppIconButton = void 0;
          var _react = require("react");
          var _icons = require("@bgroup/ui/icons");
          var _icons2 = require("./icons");
          /*bundle*/
          const AppIconButton = (0, _react.forwardRef)((props, ref) => {
            const icons = _icons2.APP_ICONS;
            const {
              icon
            } = props;
            const attrs = Object.assign({}, props);
            delete attrs.icon;
            if (!icons.hasOwnProperty(icon)) {
              attrs.icon = icon;
            } else {
              attrs.icon = icons[icon].icon;
              attrs.viewBox = icons[icon].viewBox;
            }
            return _react.default.createElement(_icons.BeyondIconButton, {
              ref: ref,
              ...attrs
            });
          });
          exports.AppIconButton = AppIconButton;
        }
      });

      /**********************
      INTERNAL MODULE: ./icon
      **********************/

      ims.set('./icon', {
        hash: 855167717,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppIcon = void 0;
          var _react = require("react");
          var _icons = require("@bgroup/ui/icons");
          var _icons2 = require("./icons");
          /*bundle*/
          const AppIcon = props => {
            const icons = _icons2.APP_ICONS;
            const {
              icon
            } = props;
            const attrs = Object.assign({}, props);
            delete attrs.icon;
            if (!icons.hasOwnProperty(icon)) {
              attrs.icon = icon;
            } else {
              attrs.icon = icons[icon].icon;
              attrs.viewBox = icons[icon].viewBox;
            }
            return _react.default.createElement(_icons.BeyondIcon, {
              ...attrs
            });
          };
          exports.AppIcon = AppIcon;
        }
      });

      /***********************
      INTERNAL MODULE: ./icons
      ***********************/

      ims.set('./icons', {
        hash: 3621778175,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.APP_ICONS = void 0;
          const APP_ICONS = {
            chart: {
              icon: `<g>
      <defs>
        <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0.137" stop-color="#004959"/>
          <stop offset="0.925" stop-color="#438c9f"/>
        </linearGradient>
      </defs>
      <path id="Trazado_1325" data-name="Trazado 1325" d="M0,0H24V24H0Z" fill="none"/>
      <path id="Trazado_1326" data-name="Trazado 1326" d="M11,2V22A10.056,10.056,0,0,1,11,2Zm2.03,0v8.99H22A10.044,10.044,0,0,0,13.03,2Zm0,11.01V22A10.035,10.035,0,0,0,22,13.01Z" fill="url(#linear-gradient)"/>
    </g>`,
              viewBox: "0 0 24 24"
            },
            expand: {
              icon: `<g>
    <g id="Group_2" data-name="Group 2" transform="translate(0.75 1.061)">
      <path id="Shape" d="M4.016,2.767,2.767,4.016a.863.863,0,0,1-1.25,0L.268,2.767a.863.863,0,0,1,0-1.249L1.517.268a.863.863,0,0,1,1.25,0L4.016,1.517a.863.863,0,0,1,0,1.249Z" transform="translate(11.334 2.231)"  stroke-linecap="round" stroke-width="1.5"/>
      <path id="Shape-2" data-name="Shape" d="M.089,8.746,4.462,4.462,0,0" transform="translate(2.767)"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Shape-3" data-name="Shape" d="M4.373,8.746,0,4.462,4.462,0" transform="translate(19.723)"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Shape-4" data-name="Shape" d="M0,0H6.247" transform="translate(19.812 4.373)"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Shape-5" data-name="Shape" d="M0,0H6.248" transform="translate(0 4.373)"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
  </g>`,
              viewBox: "0 0 27.559 10.867"
            },
            'angle-down': {
              viewBox: "0 0 10.867 6.273",
              icon: `<g viewBox="0 0 10.867 6.273">
            <g id="Shape" transform="translate(1.061 1.061)">
              <path id="Shape-2" data-name="Shape" d="M.089,0,4.462,4.284,0,8.746" transform="translate(8.746) rotate(90)"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
            </g>
          </g>`
            },
            "angle-up": {
              viewBox: "0 0 10.867 6.273",
              icon: `<g >
            <g id="Shape" transform="translate(1.061 0.75)">
              <path id="Shape-2" data-name="Shape" d="M.089,8.746,4.462,4.462,0,0" transform="translate(0 4.462) rotate(-90)"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
            </g>
          </g>
      `
            },
            "sun": {
              viewBox: '0 0 19.24 19.238',
              icon: `<g xmlns="http://www.w3.org/2000/svg">
    <g id="Componente_4_5" data-name="Componente 4 – 5" transform="translate(0.75 0.75)">
      <path id="Shape" d="M0,8.186A4.1,4.1,0,0,0,4.09,4.093,4.1,4.1,0,0,0,0,0" transform="translate(8.87 4.776)" />
      <path id="Shape-2" data-name="Shape" d="M4.09,8.186A4.093,4.093,0,1,0,0,4.093,4.09,4.09,0,0,0,4.09,8.186Z" transform="translate(4.78 4.776)"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Shape-3" data-name="Shape" d="M0,0H2.05" transform="translate(15.69 8.869)"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Shape-4" data-name="Shape" d="M0,0H2.05" transform="translate(0 8.869)"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Shape-5" data-name="Shape" d="M0,0V2.047" transform="translate(8.87 15.691)"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Shape-6" data-name="Shape" d="M0,0V2.047" transform="translate(8.87)"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Shape-7" data-name="Shape" d="M1.44,0,0,1.432" transform="translate(13.71 2.593)"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Shape-8" data-name="Shape" d="M1.44,1.433,0,0" transform="translate(13.64 13.644)"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Shape-9" data-name="Shape" d="M1.43,1.433,0,0" transform="translate(2.73 2.729)"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path id="Shape-10" data-name="Shape" d="M1.44,0,0,1.432" transform="translate(2.59 13.713)"  stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
  </g>`
            },
            "reports": {
              viewBox: "0 0 24 24",
              icon: `<g>
    <defs>
      <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
        <stop offset="0.137" stop-color="#004959"/>
        <stop offset="0.925" stop-color="#438c9f"/>
      </linearGradient>
    </defs>
    <path id="Trazado_152" data-name="Trazado 152" d="M0,0H24V24H0Z" fill="none"/>
    <path id="Trazado_153" data-name="Trazado 153" d="M19,3H14.82A2.988,2.988,0,0,0,9.18,3H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3ZM12,3a1,1,0,1,1-1,1A1,1,0,0,1,12,3Zm2,14H7V15h7Zm3-4H7V11H17Zm0-4H7V7H17Z" fill="url(#linear-gradient)"/>
  </g>`
            },
            person: {
              viewBox: "0 0 24 24",
              icon: `<g>
    <defs>
      <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
        <stop offset="0.137" stop-color="#004959"/>
        <stop offset="0.925" stop-color="#438c9f"/>
      </linearGradient>
    </defs>
    <path id="Trazado_2203" data-name="Trazado 2203" d="M12,12A4,4,0,1,0,8,8,4,4,0,0,0,12,12Zm0,2c-2.67,0-8,1.34-8,4v2H20V18C20,15.34,14.67,14,12,14Z" fill="url(#linear-gradient)"/>
    <path id="Trazado_2204" data-name="Trazado 2204" d="M0,0H24V24H0Z" fill="none"/>
  </g>
  `
            },
            "chat": {
              viewBox: "0 0 24 24",
              icon: `<g id="baseline-question_answer-24px" >
    <defs>
      <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
        <stop offset="0.137" stop-color="#004959"/>
        <stop offset="0.925" stop-color="#438c9f"/>
      </linearGradient>
    </defs>
    <path id="Trazado_408" data-name="Trazado 408" d="M0,0H24V24H0Z" fill="none"/>
    <path id="Trazado_409" data-name="Trazado 409" d="M21,6H19v9H6v2a1,1,0,0,0,1,1H18l4,4V7A1,1,0,0,0,21,6Zm-4,6V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V17l4-4H16A1,1,0,0,0,17,12Z" fill="url(#linear-gradient)"/>
  </g>`
            },
            conf: {
              viewBox: '0 0 24 24',
              icon: `<g id="baseline-tune-24px">
    <defs>
      <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
        <stop offset="0.137" stop-color="#004959"/>
        <stop offset="0.925" stop-color="#438c9f"/>
      </linearGradient>
    </defs>
    <path id="Trazado_1783" data-name="Trazado 1783" d="M0,0H24V24H0Z" fill="none"/>
    <path id="Trazado_1784" data-name="Trazado 1784" d="M3,17v2H9V17ZM3,5V7H13V5ZM13,21V19h8V17H13V15H11v6ZM7,9v2H3v2H7v2H9V9Zm14,4V11H11v2ZM15,9h2V7h4V5H17V3H15Z" fill="url(#linear-gradient)"/>
  </g>`
            },
            persons: {
              viewBox: "0 0 24 24",
              icon: `<g id="people_alt-24px">
    <defs>
      <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
        <stop offset="0.137" stop-color="#004959"/>
        <stop offset="0.925" stop-color="#438c9f"/>
      </linearGradient>
    </defs>
    <g id="Bounding_Box">
      <rect id="Rectángulo_362" data-name="Rectángulo 362" width="24" height="24" fill="none"/>
    </g>
    <g id="Flat">
      <g id="Grupo_522" data-name="Grupo 522">
        <path id="Trazado_6522" data-name="Trazado 6522" d="M16.67,13.13A4.651,4.651,0,0,1,19,17v3h4V17C23,14.82,19.43,13.53,16.67,13.13Z" fill="url(#linear-gradient)"/>
        <path id="Trazado_6523" data-name="Trazado 6523" d="M15,12a4,4,0,0,0,0-8,4.178,4.178,0,0,0-1.33.24,5.98,5.98,0,0,1,0,7.52A4.178,4.178,0,0,0,15,12Z" fill="url(#linear-gradient)"/>
        <path id="Trazado_6524" data-name="Trazado 6524" d="M9,12A4,4,0,1,0,5,8,4,4,0,0,0,9,12ZM9,6A2,2,0,1,1,7,8,2.006,2.006,0,0,1,9,6Z" fill="url(#linear-gradient)"/>
        <path id="Trazado_6525" data-name="Trazado 6525" d="M9,13c-2.67,0-8,1.34-8,4v3H17V17C17,14.34,11.67,13,9,13Zm6,5H3v-.99C3.2,16.29,6.3,15,9,15s5.8,1.29,6,2Z" fill="url(#linear-gradient)"/>
      </g>
    </g>
  </g>`
            },
            profiles: {
              viewBox: "0 0 24 24",
              icon: `<g id="outline-contact_mail-24px" >
    <defs>
      <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
        <stop offset="0.137" stop-color="#004959"/>
        <stop offset="0.925" stop-color="#438c9f"/>
      </linearGradient>
    </defs>
    <g id="Bounding_Boxes">
      <rect id="Rectángulo_111" data-name="Rectángulo 111" width="24" height="24" fill="none"/>
    </g>
    <g id="Outline">
      <g id="Grupo_176" data-name="Grupo 176">
        <path id="Trazado_2714" data-name="Trazado 2714" d="M22,3H2A2.006,2.006,0,0,0,0,5V19a2.006,2.006,0,0,0,2,2H22a2,2,0,0,0,1.99-2L24,5A2.006,2.006,0,0,0,22,3Zm0,16H2V5H22Z" fill="url(#linear-gradient)"/>
        <path id="Trazado_2715" data-name="Trazado 2715" d="M21,6H14V9h7ZM20,7.2,17.5,8.25,15,7.2V6.6l2.5,1.05L20,6.6Z" fill="url(#linear-gradient)"/>
        <path id="Trazado_11006" data-name="Trazado 11006" d="M21,6H14V9h7ZM20,7.2,17.5,8.25,15,7.2V6.6l2.5,1.05L20,6.6Z" transform="translate(0 4)" fill="url(#linear-gradient)"/>
        <path id="Trazado_2716" data-name="Trazado 2716" d="M9,12A3,3,0,1,0,6,9,3.009,3.009,0,0,0,9,12ZM9,8A1,1,0,1,1,8,9,1,1,0,0,1,9,8Z" fill="url(#linear-gradient)"/>
        <path id="Trazado_2717" data-name="Trazado 2717" d="M15,16.59c0-2.5-3.97-3.58-6-3.58s-6,1.08-6,3.58V18H15ZM5.48,16A7.113,7.113,0,0,1,9,15a7.042,7.042,0,0,1,3.52,1Z" fill="url(#linear-gradient)"/>
      </g>
    </g>
  </g>`
            },
            work: {
              viewBox: "0 0 24 24",
              icon: `<g>
    <defs>
      <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
        <stop offset="0.137" stop-color="#004959"/>
        <stop offset="0.925" stop-color="#438c9f"/>
      </linearGradient>
    </defs>
    <path id="Trazado_591" data-name="Trazado 591" d="M14,6V4H10V6ZM4,8V19H20V8ZM20,6a1.993,1.993,0,0,1,2,2V19a1.993,1.993,0,0,1-2,2H4a1.993,1.993,0,0,1-2-2L2.01,8A1.985,1.985,0,0,1,4,6H8V4a1.993,1.993,0,0,1,2-2h4a1.993,1.993,0,0,1,2,2V6Z" fill-rule="evenodd" fill="url(#linear-gradient)"/>
    <path id="Trazado_592" data-name="Trazado 592" d="M0,0H24V24H0Z" fill="none"/>
  </g>`
            },
            phone: {
              viewBox: "0 0 512 512",
              icon: `<g >
          <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
      </g>`
            },
            bell: {
              viewBox: "0 0 448 512",
              icon: `<g>
              <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/>
          </g>`
            },
            "circle-xmark": {
              viewBox: "0 0 512 512",
              icon: `<g>
          <path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
      </g>`
            },
            "circle": {
              viewBox: "0 0 512 512",
              icon: `<g>
              <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
          </g>`
            },
            down: {
              viewBox: "0 0 10.867 6.273",
              icon: `<g xmlns="http://www.w3.org/2000/svg"  >
    <g id="Shape" transform="translate(1.061 1.061)">
      <path id="Shape-2" data-name="Shape" d="M.089,0,4.462,4.284,0,8.746" transform="translate(8.746) rotate(90)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </g>
  </g>
  `
            }
          };
          exports.APP_ICONS = APP_ICONS;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./app-icon-button",
        "from": "AppIconButton",
        "name": "AppIconButton"
      }, {
        "im": "./icon",
        "from": "AppIcon",
        "name": "AppIcon"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AppIconButton') && _export("AppIconButton", AppIconButton = require ? require('./app-icon-button').AppIconButton : value);
        (require || prop === 'AppIcon') && _export("AppIcon", AppIcon = require ? require('./icon').AppIcon : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIkFwcEljb25CdXR0b24iLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJpY29ucyIsIkFQUF9JQ09OUyIsImljb24iLCJhdHRycyIsIk9iamVjdCIsImFzc2lnbiIsImhhc093blByb3BlcnR5Iiwidmlld0JveCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQmV5b25kSWNvbkJ1dHRvbiIsImV4cG9ydHMiLCJBcHBJY29uIiwiQmV5b25kSWNvbiIsImNoYXJ0IiwiZXhwYW5kIiwicGVyc29uIiwiY29uZiIsInBlcnNvbnMiLCJwcm9maWxlcyIsIndvcmsiLCJwaG9uZSIsImJlbGwiLCJkb3duIl0sInNvdXJjZXMiOlsiL2NvZGUvdHMvYXBwLWljb24tYnV0dG9uLnRzeCIsIi9jb2RlL3RzL2ljb24udHN4IiwiL2NvZGUvdHMvaWNvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFXQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFpQk87VUFBVyxNQUFNRyxhQUFhLEdBRWpDLElBQUFKLE1BQUEsQ0FBQUssVUFBVSxFQUFDLENBQUNDLEtBQVksRUFBRUMsR0FBMkIsS0FBaUI7WUFDekUsTUFBTUMsS0FBSyxHQUFHTCxPQUFBLENBQUFNLFNBQVM7WUFFdkIsTUFBTTtjQUFFQztZQUFJLENBQUUsR0FBR0osS0FBSztZQUN0QixNQUFNSyxLQUFLLEdBQVVDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLEVBQUUsRUFBRVAsS0FBSyxDQUFDO1lBQzdDLE9BQU9LLEtBQUssQ0FBQ0QsSUFBSTtZQUVqQixJQUFJLENBQUNGLEtBQUssQ0FBQ00sY0FBYyxDQUFDSixJQUFJLENBQUMsRUFBRTtjQUNoQ0MsS0FBSyxDQUFDRCxJQUFJLEdBQUdBLElBQUk7YUFDakIsTUFBTTtjQUNOQyxLQUFLLENBQUNELElBQUksR0FBR0YsS0FBSyxDQUFDRSxJQUFJLENBQUMsQ0FBQ0EsSUFBSTtjQUM3QkMsS0FBSyxDQUFDSSxPQUFPLEdBQUdQLEtBQUssQ0FBQ0UsSUFBSSxDQUFDLENBQUNLLE9BQU87O1lBR3BDLE9BQU9mLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZixNQUFBLENBQUFnQixnQkFBZ0I7Y0FBQ1gsR0FBRyxFQUFFQSxHQUFHO2NBQUEsR0FBTUk7WUFBSyxFQUFJO1VBQ2pELENBQUMsQ0FBQztVQUFDUSxPQUFBLENBQUFmLGFBQUEsR0FBQUEsYUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Q0gsSUFBQUosTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBU087VUFBVyxNQUFNbUIsT0FBTyxHQUFJZCxLQUFZLElBQWlCO1lBQy9ELE1BQU1FLEtBQUssR0FBV0wsT0FBQSxDQUFBTSxTQUFTO1lBRS9CLE1BQU07Y0FBRUM7WUFBSSxDQUFFLEdBQUdKLEtBQUs7WUFDdEIsTUFBTUssS0FBSyxHQUFVQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxFQUFFLEVBQUVQLEtBQUssQ0FBQztZQUM3QyxPQUFPSyxLQUFLLENBQUNELElBQUk7WUFFakIsSUFBSSxDQUFDRixLQUFLLENBQUNNLGNBQWMsQ0FBQ0osSUFBSSxDQUFDLEVBQUU7Y0FDaENDLEtBQUssQ0FBQ0QsSUFBSSxHQUFHQSxJQUFJO2FBQ2pCLE1BQU07Y0FDTkMsS0FBSyxDQUFDRCxJQUFJLEdBQUdGLEtBQUssQ0FBQ0UsSUFBSSxDQUFDLENBQUNBLElBQUk7Y0FDN0JDLEtBQUssQ0FBQ0ksT0FBTyxHQUFHUCxLQUFLLENBQUNFLElBQUksQ0FBQyxDQUFDSyxPQUFPOztZQUdwQyxPQUFPZixNQUFBLENBQUFnQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2YsTUFBQSxDQUFBbUIsVUFBVTtjQUFBLEdBQUtWO1lBQUssRUFBSTtVQUNqQyxDQUFDO1VBQUNRLE9BQUEsQ0FBQUMsT0FBQSxHQUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCSyxNQUFNWCxTQUFTLEdBQVc7WUFDL0JhLEtBQUssRUFBRTtjQUNMWixJQUFJLEVBQUU7Ozs7Ozs7OztTQVNEO2NBQ0xLLE9BQU8sRUFBRTthQUNWO1lBQ0RRLE1BQU0sRUFBRTtjQUNOYixJQUFJLEVBQUU7Ozs7Ozs7O09BUUg7Y0FDSEssT0FBTyxFQUFFO2FBQ1Y7WUFDRCxZQUFZLEVBQUU7Y0FDWkEsT0FBTyxFQUFFLGtCQUFrQjtjQUMzQkwsSUFBSSxFQUFFOzs7OzthQUtQO1lBQ0QsVUFBVSxFQUFFO2NBQ1ZLLE9BQU8sRUFBRSxrQkFBa0I7Y0FDM0JMLElBQUksRUFBRTs7Ozs7O2FBTVA7WUFDRCxLQUFLLEVBQUU7Y0FDTEssT0FBTyxFQUFFLGtCQUFrQjtjQUMzQkwsSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7OzthQWNQO1lBQ0QsU0FBUyxFQUFFO2NBQ1RLLE9BQU8sRUFBRSxXQUFXO2NBQ3BCTCxJQUFJLEVBQUU7Ozs7Ozs7Ozs7YUFVUDtZQUNEYyxNQUFNLEVBQUU7Y0FDTlQsT0FBTyxFQUFFLFdBQVc7Y0FDcEJMLElBQUksRUFBRTs7Ozs7Ozs7Ozs7YUFXUDtZQUNELE1BQU0sRUFBRTtjQUNOSyxPQUFPLEVBQUUsV0FBVztjQUNwQkwsSUFBSSxFQUFFOzs7Ozs7Ozs7O2FBVVA7WUFDRGUsSUFBSSxFQUFFO2NBQ0pWLE9BQU8sRUFBRSxXQUFXO2NBQ3BCTCxJQUFJLEVBQUU7Ozs7Ozs7Ozs7YUFVUDtZQUNEZ0IsT0FBTyxFQUFFO2NBQ1BYLE9BQU8sRUFBRSxXQUFXO2NBQ3BCTCxJQUFJLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFtQlA7WUFDRGlCLFFBQVEsRUFBRTtjQUNSWixPQUFPLEVBQUUsV0FBVztjQUNwQkwsSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQW9CUDtZQUNEa0IsSUFBSSxFQUFFO2NBQ0piLE9BQU8sRUFBRSxXQUFXO2NBQ3BCTCxJQUFJLEVBQUU7Ozs7Ozs7Ozs7YUFVUDtZQUVEbUIsS0FBSyxFQUFFO2NBQ0xkLE9BQU8sRUFBRSxhQUFhO2NBQ3RCTCxJQUFJLEVBQUU7OzthQUdQO1lBQ0RvQixJQUFJLEVBQUU7Y0FDSmYsT0FBTyxFQUFFLGFBQWE7Y0FDdEJMLElBQUksRUFBRTs7O2FBR1A7WUFDRCxjQUFjLEVBQUc7Y0FDZkssT0FBTyxFQUFFLGFBQWE7Y0FDdEJMLElBQUksRUFBRTs7O2FBR1A7WUFDRCxRQUFRLEVBQUU7Y0FDUkssT0FBTyxFQUFFLGFBQWE7Y0FDdEJMLElBQUksRUFBRTs7O2FBR1A7WUFDRHFCLElBQUksRUFBRTtjQUNKaEIsT0FBTyxFQUFFLGtCQUFrQjtjQUMzQkwsSUFBSSxFQUFFOzs7Ozs7O1dBT1Q7VUFBQ1MsT0FBQSxDQUFBVixTQUFBLEdBQUFBLFNBQUEifQ==