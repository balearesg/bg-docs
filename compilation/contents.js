System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0/jsx-runtime", "@bg/docs@1.0.0/components/html", "@bg/docs@1.0.0/code"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, NotFound, CompilacionQch, Plugins, HowToUse, Components, DevelopmentStandards, AuthInstalation, AuthSession, AuthUser, EssentialUi, BeyondUi, Standars, Mailer, Jview, CompilationBackend, CompilationMobile, ConfigureGit, DebugMobileApps, RunningBovino, PrettierSettings, HowToInstallJadmin, GmapsIntegration, ChartComponent, ReactTypes, DeployBgDocs, ImplementUnitTest, data, __beyond_pkg, hmr;
  _export({
    NotFound: void 0,
    CompilacionQch: void 0,
    Plugins: void 0,
    HowToUse: void 0,
    Components: void 0,
    DevelopmentStandards: void 0,
    AuthInstalation: void 0,
    AuthSession: void 0,
    AuthUser: void 0,
    EssentialUi: void 0,
    BeyondUi: void 0,
    Standars: void 0,
    Mailer: void 0,
    Jview: void 0,
    CompilationBackend: void 0,
    CompilationMobile: void 0,
    ConfigureGit: void 0,
    DebugMobileApps: void 0,
    RunningBovino: void 0,
    PrettierSettings: void 0,
    HowToInstallJadmin: void 0,
    GmapsIntegration: void 0,
    ChartComponent: void 0,
    ReactTypes: void 0,
    DeployBgDocs: void 0,
    ImplementUnitTest: void 0,
    data: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react1820JsxRuntime) {
      dependency_1 = _react1820JsxRuntime;
    }, function (_bgDocs100ComponentsHtml) {
      dependency_2 = _bgDocs100ComponentsHtml;
    }, function (_bgDocs100Code) {
      dependency_3 = _bgDocs100Code;
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
          "vspecifier": "@bg/docs@1.0.0/contents"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react/jsx-runtime', dependency_1], ['@bg/docs/components/html', dependency_2], ['@bg/docs/code', dependency_3]]);
      ims = new Map();
      /***********************************************
      INTERNAL MODULE: ./mdx/auth/auth-instalation.mdx
      ***********************************************/
      ims.set('./mdx/auth/auth-instalation.mdx', {
        hash: 3859001443,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@bg/docs/components/html");
          var _code = require("@bg/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              p: "p",
              ul: "ul",
              li: "li",
              code: "code",
              h2: "h2",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "🤓☝ BG-AUTH"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para la instalacion local del environment de bg-auth (el cual incluye auth-models, auth-server y auth-api). Es necesario:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Tener el paquete mailer en local (por ahora viene junto con el environment completo) pero en caso de no hacerlo es tan simple como ir al ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "packages.json"
                    }), " del ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "bg-auth"
                    }), " y agrear ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "la ruta de accesso relative hacia el package.json"
                    }), " del ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "mailer"
                    })]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Cada proyecto es un paquete por lo tanto todos los proyectos del environment bg-auth y el mailer tienen su package.json con sus respectivas dependencias. Es importante que estas dependencias sean instaladas para poder proseguir."
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Y ya estaria!"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Lo unico que faltaria depende de la funcionalidad que vayas a aplicar, por ejemplo, si usas el bg-auth-server tienes que ir al ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "https://workspace.beyondjs.com",
                  children: "workspace"
                }), ", abrir el auth-server y correr su distribucion node, esto no deberia ser necesario con auth-api."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "👀 Implementacion en proyectos externos"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En caso que cualquiera de los paquetes de bg-auth quiera ser implementado en un proyecto externo es bastante simple:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Seguir los pasos de la instalacion del bg-auth environment (en caso que no este hecho)"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["En el proyecto donde se quiere implementar. vamos a llamarlo ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "jadmin"
                    }), " para tener una mejor referencia nos debemos ubicar en su ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "packages.json"
                    }), " y agregar ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "la ruta relativa al package.json"
                    }), " de ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "auth-models"
                    }), ", ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "auth-api"
                    }), " y ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "mailer"
                    }), " (por lo menos en la version actual de BeyondJS 1.0.18)"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Luego dirigirnos al ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "package.json"
                    }), " del jadmin y agregar una entrada ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "libraries"
                    }), " (en caso que no exista) la cual es un objeto que dentro debe tener una entrada ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "imports"
                    }), " la cual es un array de strings donde cada item es el nombre de uno de los paquetes agregados al ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "packages.json"
                    }), " Por ejemplo:"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `"libraries": {
		"imports": [
			"@jadmin/ui",
			"@bg/auth-api",
			"@bg/auth-models",
			"@bg/mailer"
		]
	}`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["con esto ya estaria, en caso que queramos implementar. Por ejemplo el objeto session de la ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                  children: "auth-api"
                }), " lo podemos hacer acudiendo a la importacion comun:"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h1, {
                children: "🤝 Objecto Session"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import {session} from '@bg/auth-api/entitiesa.ts';`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Desde la consola"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `const {session} = await beyond.import('@bg/auth-api/entitiesa.ts');`
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./mdx/auth/auth-session.mdx
      *******************************************/

      ims.set('./mdx/auth/auth-session.mdx', {
        hash: 2920047733,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@bg/docs/components/html");
          var _code = require("@bg/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              p: "p",
              code: "code",
              strong: "strong",
              h2: "h2",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "🎨 Clase de Sessión"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["La clase ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                  children: (0, _jsxRuntime.jsx)(_components.code, {
                    children: "Session"
                  })
                }), " extiende de ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                  children: "ReactiveModel"
                }), " y permite realizar acciones relacionadas con la autenticación de usuario."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h1, {
                children: "Importaciones"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import {session} from '@bg/auth-api/entities.ts';`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Desde la consola"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `const {session} = await beyond.import('@bg/auth-api/entities.ts')
`
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "👏 Propiedades"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "user"
                  }), ": una instancia de la clase ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "User"
                  }), "."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "accessToken"
                  }), ": Un string que representa el token de acceso del usuario."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "userId"
                  }), ": Un string que representa el ID del usuario."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "valid"
                  }), ": un boolean que indica si la sesión actual es válida o no."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "🤠 Métodos"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "login"
                    }), ": Inicia sesión con los parámetros proporcionados y actualiza la\r\n", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "user"
                    }), " property."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "register"
                    }), ": registra un nuevo usuario con los parámetros proporcionados y\r\nactualiza la ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "user"
                    }), " property."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "changePassword"
                    }), ": cambia la contraseña del usuario actual con los\r\nparámetros proporcionados."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "recoverPassword"
                    }), ": recupera la contraseña con los parámetros\r\nproporcionados."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "logout"
                    }), ": cierra la sesión actual y establece la ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "user"
                    }), " property."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "validateCode"
                    }), ": valida un código con los parámetros proporcionados."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "setPassword"
                    }), ": establece la contraseña con los parámetros proporcionados."]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Exports"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Exporta una instancia de la clase ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                  children: "Session"
                }), " llamada ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                  children: "session"
                }), "."]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /****************************************
      INTERNAL MODULE: ./mdx/auth/auth-user.mdx
      ****************************************/

      ims.set('./mdx/auth/auth-user.mdx', {
        hash: 3295536258,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@bg/docs/components/html");
          var _code = require("@bg/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h2: "h2",
              code: "code",
              p: "p",
              h3: "h3",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsxs)(_components.h2, {
                children: ["👽 Clase ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "User"
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Esta clase representa un usuario de la aplicación."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Este objeto puede ser accedido sin problemas desde el objeto ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "session"
                }), ": ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "session.user"
                }), ";"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "📚 Propiedades"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "id"
                  }), ": número, identificador único del usuario."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "user"
                  }), ": string, nombre de usuario."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "identifier"
                  }), ": string, identificador único generado por el sistema."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "active"
                  }), ": número, indica si el usuario está activo o no."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "statusId"
                  }), ": número, identificador del estado del usuario."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "names"
                  }), ": string, nombres del usuario."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "lastNames"
                  }), ": string, apellidos del usuario."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "email"
                  }), ": string, correo electrónico del usuario."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "sex"
                  }), ": número o ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "null"
                  }), ", indica el sexo del usuario (opcional)."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "profileImage"
                  }), ": string o ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "null"
                  }), ", dirección URL de la imagen de perfil del\r\nusuario (opcional)."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "birthday"
                  }), ": string o ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "null"
                  }), ", fecha de nacimiento del usuario (opcional)."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "phone"
                  }), ": string o ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "null"
                  }), ", número de teléfono del usuario (opcional)."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "accountType"
                  }), ": string, tipo de cuenta del usuario."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "facebookAccount"
                  }), ": string o ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "null"
                  }), ", dirección URL de la cuenta de\r\nFacebook del usuario (opcional)."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "accessToken"
                  }), ": string, token de acceso generado por el sistema."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "😁 Método set"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: `set(params: Partial<IUser>)`
                  }), ": Establece los valores de las\r\npropiedades del objeto según los valores proporcionados, recibe un boolean como segundo\r\nparametro para especificar si los valores no modificados deben ser establecidos como ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "\r\nundefined\r\n"
                  }), " ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "params"
                  }), "."]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./mdx/chart-component/chart-component.mdx
      *********************************************************/

      ims.set('./mdx/chart-component/chart-component.mdx', {
        hash: 2891344767,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _code = require("@bg/docs/code");
          var _html = require("@bg/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              h3: "h3",
              ul: "ul",
              li: "li",
              code: "code",
              ol: "ol"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                text: "ChartComponent"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Info, {
                children: (0, _jsxRuntime.jsxs)(_components.p, {
                  children: ["ChartComponent es un componente React que utiliza la librería Chart.js para\r\ngenerar gráficos personalizados en un canvas", " "]
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Props"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "chartData: Objeto con los datos que se van a graficar. Este objeto debe tener la siguiente estructura:"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "type (opcional): Tipo de gráfico que se quiere generar. Los valores posibles son: line, bar, radar, doughnut, pie, polarArea, bubble, scatter, area. El valor por defecto es doughnut."
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Uso"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para utilizar el componente ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "ChartComponent"
                }), ", sigue los siguientes pasos:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Importa el componente en tu archivo de React:"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import { ChartComponent } from '@bg/jadmin/chart';`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "2",
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Crea un objeto con los datos que quieres graficar, este objeto debe tener la siguiente estructura:"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `const data = {
labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
datasets: [
				{
					label: 'Ventas',
					data: [12, 19, 3, 5, 2, 3],
					backgroundColor: [
						'rgba(255, 99, 132, 0.6)', // Enero
						'rgba(54, 162, 235, 0.6)', // Febrero
						'rgba(255, 206, 86, 0.6)', // Marzo
						'rgba(75, 192, 192, 0.6)', // Abril
						'rgba(153, 102, 255, 0.6)', // Mayo
						'rgba(255, 159, 64, 0.6)', // Junio
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)',
					],
					borderWidth: 1,
				},
			],
};
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "3",
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Utiliza el componente ChartComponent en tu renderizado de React:"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `function App() {
	const ref = React.useRef();

return (

<div>
  <h1>Mi gráfico</h1>
  <ChartComponent chartData={data} ref={ref} type="line" />
</div>
); } `
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./mdx/compilacion-qch/compilacion-qch.mdx
      *********************************************************/

      ims.set('./mdx/compilacion-qch/compilacion-qch.mdx', {
        hash: 1409328324,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@bg/docs/components/html");
          var _code = require("@bg/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              p: "p",
              h3: "h3"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "PASOS PARA ACTUALIZAR ENTORNO DE DESARROLLO DE QCH"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["1.- Descargar ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "https://source.cloud.google.com/socites-customers/qch_app",
                  children: "Repositorio"
                }), " branch ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                  children: "master"
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["2.- Ingresar en ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "https://console.cloud.google.com/compute/instances",
                  children: "Cloud"
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["3.- Seleccionar proyecto: ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                  children: "jida-services-apps"
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "4.- Visualizar VM jida-service-dev"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "5.- Ingresar en maquina virtual presionando el boton de SSH"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "6.- Luego de ingresar, escribir el comando sudo su"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "7.- Navegar al directorio de la aplicacion mediante el comando"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "cd /var/www/qch_app/qch_app"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["8.- En el codigo local, validar que no exista la carpeta build dentro del directorio ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                  children: "apps/app"
                }), " y en caso de existir, eliminarla."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["9.- Reiniciar el servicio y entrar en ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "http://localhost:3020/",
                  children: "localhost:3020"
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "10.- Sobre la aplicacion presionar el 2do boton de derecha a izquierda."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "11.- Seleccionar tipo de compilacion \"web\", marcar el radio buttom \"Do you want to compress\" y presionar boton \"Build Client\"."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "12.- Esperar a que el proceso termine (de una vez aparece una modal que dice que ya la compilacion termino, pero en realidad eso es un bug, hay que ir haciendo scroll sobre las lineas que van a apareciendo y al final dice done)."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["13.- Una vez finalizada la compilacion, el codigo compilado se encontrara en el directorio ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                  children: "\"builds/client/web-production/code\""
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "14.- Copiar los archivos de ese directorio y pegarlos en el directorio del repositorio descargado en el 1er paso. VER NOTA 1 Y NOTA 2"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "15.- Luego de pegar los archivos, realizar un push."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "16.- En el cloud, ya parado en el directorio indicado, realizar un git pull origin master. Esto actualizara los archivos y estara lista la compilacion."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "NOTA 1:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Existen unos archivos que se generan en la compilacion los cuales deben ser ajustados, este archivo es el config.js, por lo que este archivo no debe eliminarse del repositorio y tampoco debe copiarse el que se encuentra en el directorio builds a menos que se haya realizado un ajuste que modifique este archivo.\r\nOtros de los archivos que no deben eliminarse del repositorio son: .htaccess, apple-app-site-association, policies y terms."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "NOTA 2:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para asegurarnos de que el codigo estará limpio, es recomendable primero en el repositorio eliminar los archivos y hacer un push, esto limpiar los archivos que esten en el repo) Sin eliminar los archivos que se indican en la NOTA 1."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*****************************************************************************************************
      INTERNAL MODULE: ./mdx/compilation-backend-external-packages/compilation-backend-external-packages.mdx
      *****************************************************************************************************/

      ims.set('./mdx/compilation-backend-external-packages/compilation-backend-external-packages.mdx', {
        hash: 870085818,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@bg/docs/components/html");
          var _code = require("@bg/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              h2: "h2",
              p: "p"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "Compilacion de servicios con importacion de paquetes externos"
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Cuando se debe realizar una compilacion de una distribucion de tipo backend pero se tienen paquetes externos, se debe realizar un tratamiento manual para que el codigo pueda consultar estos paquetes, los pasos a seguir son los siguientes:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "1.- Ingresar en el dashboar de beyond."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "2.- Realizar compilacion de distribucion backend del servicio."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "3.- Realizar compilacion de paquetes externos en tipo npm."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "4.- Realizar npm install sobre el codigo de la compilacion de la distribucion backend."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "5.- Crear directorio con el nombre del paquete externo dentro del directorio node_modules."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "6.- Tomar archivos compilados de los paquetes externos del tipo npm e ingresarlos dentro de la carpeta correspondiente dentro de node_modules."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "7.- Correr servicio de la aplicacion."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Con los pasos antes descritos, notaremos que el backend consigue y consulta correctamente los paquetes externos."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./mdx/components/components.mdx
      ***********************************************/

      ims.set('./mdx/components/components.mdx', {
        hash: 584578671,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@bg/docs/components/html");
          var _code = require("@bg/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                text: "Componentes a ser usados al documetar"
              }), "\n", (0, _jsxRuntime.jsxs)(_html.Info, {
                children: [(0, _jsxRuntime.jsx)(_components.p, {
                  children: "En este documento se explica como importar componentes hechos sobre React en\r\narchivos .mdx así como también que componentes se deben usar para casos\r\nespecíficos y como usarlos; Para poder usar estos components en un archivo\r\n.mdx deben ser importados en dicho archivo."
                }), (0, _jsxRuntime.jsx)("strong", {
                  children: (0, _jsxRuntime.jsx)(_components.p, {
                    children: "importante dejar una linea de separación entre las importaciones y la\r\nimplementación"
                  })
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Componente Title ( Título )"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Componente para ser usado en los títulos y subtítulos de los documentos, para\r\nimportarlo:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import { Title } from "@bg/docs/components/html";`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para usarlo como título:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `<Title text="Esto es un titulo" />`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Resultado:"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                text: "Esto es un titulo"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para usarlo como subtítulo:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `<Title tag="h3" text="Esto es un subtitulo" />`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Resultado:"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Esto es un subtitulo"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Componente Info"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Componente para ser usado en la sección donde se explica el fin del documento o otro tipo de información importante en el, para\r\nimportarlo:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import { Info } from "@bg/docs/components/html";`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para usarlo"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `<Info> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non justo euismod, congue velit vel, tempor quam. Sed id velit vel nibh aliquet congue. Integer euismod enim eget mauris feugiat, a hendrerit nunc interdum. Sed eget libero congue, suscipit quam vel, faucibus magna. Nullam id aliquet velit. Sed euismod, velit vel congue bibendum, dui dui facilisis dui, id volutpat lacus ante a diam. Aliquam erat volutpat. Sed eget lectus suscipit, dictum erat id, dictum sem.:</Info>`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Resultado:"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Info, {
                children: (0, _jsxRuntime.jsx)(_components.p, {
                  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non justo\r\neuismod, congue velit vel, tempor quam. Sed id velit vel nibh aliquet congue.\r\nInteger euismod enim eget mauris feugiat, a hendrerit nunc interdum. Sed eget\r\nlibero congue, suscipit quam vel, faucibus magna. Nullam id aliquet velit. Sed\r\neuismod, velit vel congue bibendum, dui dui facilisis dui, id volutpat lacus\r\nante a diam. Aliquam erat volutpat. Sed eget lectus suscipit, dictum erat id,\r\ndictum sem."
                })
              }), "\n", (0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h3",
                text: "Componente Link"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Componente para ser usado cuando se quiera o necesite colocar un link, para\r\nimportarlo:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import { Link } from "@bg/docs/components/html";`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para usarlo"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `<Link href="https://docs.balearesgroup.com/">Esto es un link<Link />`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Resultado:"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Link, {
                href: "https://docs.balearesgroup.com/",
                children: "Esto es un link"
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./mdx/configure-git/configure-git.mdx
      *****************************************************/

      ims.set('./mdx/configure-git/configure-git.mdx', {
        hash: 1405924261,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              strong: "strong",
              p: "p",
              h2: "h2",
              ol: "ol",
              li: "li",
              em: "em"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsxs)(_components.h1, {
                children: ["Pasos para clonar la documentacion en ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Cloud Source Repositories"
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "[!NOTE]"
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "💻 Primeramente necesitamos saber que configuraremos nuestras credenciales git desde cero para que luego no lo hagamos por cada accion"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Para ello como primer paso debemos situar nuestro cursor con el mouse en la parte derecha superior de nuestra pantalla, exactamente en el boton que dice ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "clone"
                    }), ". luego nos saldra dos opciones: ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "autenticación SSH"
                    }), " y ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "⚪How to setup"
                    }), ". Es necesario que si no tenemos nuestras credenciales configuradas le demos al boton ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "How to setup"
                    }), "."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Al darle click al boton ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "How to setup"
                    }), " nos mostrara un modal el cual nosotros de las tres opciones de arriba que apareceran le demos a ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Credenciales generadas manualmente"
                    }), " y de ahi la primera opcion de abajo que dice ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Generar y almacenar tus credenciales de Git"
                    }), ". Aqui Google pedira que demos nuestro acceso y elijamos la cuenta donde tengamos nuestros permisos. Seguido a eso le daremos a permitir."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Ahi entraremos a una pagina para configurar ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Git"
                    }), " (que es un sistema de control de versiones) que es necesario que tengamos. Siguiendo con los paso veremos dos comandos que se nos presentaran. Copiaremos los dos y los guardaremos en un editor de texto cualquiera. Esto lo haremos para editar la parte ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "%USERPROFILE%"
                    }), " que sale de los comando."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Para editar ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "%USERPROFILE%"
                    }), " primero tenemos que dirijirnos a nuestro disco duro ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "disco local c"
                    }), "💾\r\nahi entraremos en la carpeta usuarios y abriremos la carpeta del usuario que tengamos nosotros. Una vez hecho eso moveremos nuestro cursor a la barra de arriba que nos da la ruta de nuestra carpeta de usuario. Copiamos esa ruta y remplazamos ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "%USERPROFILE%"
                    }), " por la ruta que copiamos, ejemplo: ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "git config --global http.cookiefile \"%USERPROFILE%.gitcookies\""
                    }), " ==> ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "git config --global http.cookiefile \"tu/ruta/de/usuario.gitcookies\""
                    }), ". Una vez hecho eso copiamos ahora si todo el comando que editamos."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Cuando lo copiemos ahi mismo en nuestro disco duro (", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "disco local c"
                    }), "💾) en la carpteta de usuario en donde estemos usaremos ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Git"
                    }), ", con git bash solo tenemos que abrir la terminal de bash presionando click derecho primero y buscaremos la opcion que dice ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Git Bash Here"
                    }), " ahi le daremos y pegaremos el comando y lo ejecutaremos. De igual forma tendremos que hacer con el segundo comando que nos aparece en la pagina de ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "Configure Git"
                    }), " es decir que tenemos que remplazar el ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "%USERPROFILE%"
                    }), " de los dos comandos antes de ejecutarlo en la terminal. Los dos comandos se ejecutan por separado."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Y por ultimo copiaremos la url del repositorio luego abriremos git bash en la carpeta donde queramos clonar nuestro repositorio, una vez ubicados solo abrimos la terminal y pegamos y ejecutamos el comando copiado y listo; ya tendremos clonado el repositorio y habremos configurado las credenciales de git 😃."
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /**********************************************************************
      INTERNAL MODULE: ./mdx/debug-mobile-apps/debug_aplicaciones_moviles.mdx
      **********************************************************************/

      ims.set('./mdx/debug-mobile-apps/debug_aplicaciones_moviles.mdx', {
        hash: 3144596351,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              p: "p",
              h2: "h2",
              h3: "h3",
              ol: "ol",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "Depuración de aplicaciones híbridas de Cordova en Android Studio y Xcode"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En este documento, aprenderás cómo depurar una aplicación híbrida de Cordova en Android Studio y Xcode. La depuración es un proceso importante que te ayudará a encontrar errores en tu aplicación y a solucionarlos. Para depurar una aplicación, necesitarás un dispositivo para probarla, así como Android Studio o Xcode."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "ConfiguraciónConfiguración previa"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Antes de comenzar, asegúrate de que tengas lo siguiente:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Un dispositivo Android o iOS para probar la aplicación.\r\nAndroid Studio o Xcode instalado en tu equipo.\r\nEl SDK de Android o iOS instalado en tu equipo.\r\nDepuración en Android Studio"
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Para depurar una aplicación híbrida de Cordova en Android Studio, sigue estos pasos:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Abre Android Studio y haz clic en \"Open an existing Android Studio project\"."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Busca la carpeta de tu proyecto de Cordova y selecciona la plataforma Android (platforms/android) como la carpeta del proyecto. Si aún no has agregado la plataforma, debes ejecutar el comando cordova platform add android en la terminal en la carpeta raíz de tu proyecto.\r\nAndroid Studio importará el proyecto y lo preparará para la depuración."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Conecta tu dispositivo Android al ordenador mediante un cable USB y asegúrate de que esté habilitado el modo de depuración USB en tu dispositivo."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Haz clic en el botón \"Run\" o \"Debug\" en la barra de herramientas de Android Studio para ejecutar la aplicación en modo de depuración.\r\nAndroid Studio iniciará la aplicación en modo de depuración en el dispositivo conectado y aparecerá el depurador."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Usa las herramientas de depuración de Android Studio para examinar la aplicación y buscar errores. Puedes establecer puntos de interrupción en el código, examinar las variables y las pilas de llamadas, y mucho más."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Depuración en Xcode"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para depurar una aplicación híbrida de Cordova en Xcode, sigue estos pasos:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Abre Xcode y haz clic en \"Open another project\"."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Busca la carpeta de tu proyecto de Cordova y selecciona la plataforma iOS (platforms/ios/[Nombre del proyecto].xcodeproj) como el archivo del proyecto. Si aún no has agregado la plataforma, debes ejecutar el comando cordova platform add ios en la terminal en la carpeta raíz de tu proyecto.\r\nXcode importará el proyecto y lo preparará para la depuración."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Conecta tu dispositivo iOS al ordenador mediante un cable USB."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Haz clic en el botón \"Run\" o \"Debug\" en la barra de herramientas de Xcode para ejecutar la aplicación en modo de depuración.\r\nXcode iniciará la aplicación en modo de depuración en el dispositivo conectado y aparecerá el depurador."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Usa las herramientas de depuración de Xcode para examinar la aplicación y buscar errores. Puedes establecer puntos de interrupción en el código, examinar las variables y las pilas de llamadas, y mucho más."
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./mdx/deploy-bg-docs/deploy-bg-docs.mdx
      *******************************************************/

      ims.set('./mdx/deploy-bg-docs/deploy-bg-docs.mdx', {
        hash: 390167005,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _code = require("@bg/docs/code");
          var _html = require("@bg/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h3: "h3",
              ol: "ol",
              li: "li",
              code: "code",
              p: "p",
              strong: "strong",
              em: "em"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                text: "Como hacer Deploy en BG Docs"
              }), "\n", (0, _jsxRuntime.jsx)(_html.Info, {
                children: "Pasos para tener el deploy continuo en bg-docs con un sitio alojado en Netlify"
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Instalacion de Netlify globalmente"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Aseguremosno de que en nuestro equipo este instalado netlify por ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "npm"
                  }), " de manera global, aqui esta el comando que\r\npodremos ejecutar en la terminal para instalarlo :"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "npm install netlify-cli -g"
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Guardar codigo de compilacion"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "2",
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Como segundo paso, crearemos una carpeta ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "\"compilation\""
                    }), " en la raiz del paquete en donde querramos alojar nuestra\r\nweb."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Una vez hecho, procederemos a compilar nuestro paquete."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Cuando este terminada la compilacion nos iremos en la siguiente ruta de nuestro proyecto:\r\n", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "\"my-project.beyond\\builds\\web\\code\""
                    }), "."]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En esta ruta obtendremos el resultado de nuetsro codigo compilado."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "5",
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Copiaremos la carpeta ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "\"Code\""
                  }), " de nuestro proyecto y la pegaremos en la carpeta compilation que creamos al\r\nprincipio en la raiz de nuestro paquete."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Configuracion para que netlify tome el codigo compilado."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "6",
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Luego, en la raiz de nuestro proyecto crearemos un archivo ", (0, _jsxRuntime.jsx)(_components.em, {
                    children: "\"toml\""
                  }), ", con esa extension exactamente al final, puede\r\ndarle cualquier nombre al archivo, un ejemplo es ", (0, _jsxRuntime.jsx)(_components.em, {
                    children: "\"netlify.toml\""
                  }), ". Y colocaremos lo siguiente :\r\n", (0, _jsxRuntime.jsx)(_code.Code, {
                    children: "[build] publish = \"/nombre-de-mi-carpeta-que-cree-para-compilar\""
                  })]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El comando que se muestra en el archivo TOML de Netlify indica la ubicación de la carpeta que se debe publicar después\r\nde que se complete el proceso de compilación. En este caso, la carpeta se llama\r\n\"nombre-de-mi-carpeta-que-cree-para-compilar\" y se encuentra en la raíz del proyecto. Por lo tanto, después de que\r\nNetlify compile el sitio web, publicará los archivos de la carpeta \"nombre-de-mi-carpeta-que-cree-para-compilar\" en el\r\ndominio correspondiente."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "7",
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Una vez hecho solo tendremos ", (0, _jsxRuntime.jsx)(_components.em, {
                    children: "que guardar los cambios en la rama que hemos escogidos para hacer deploys y hacer git\r\npush"
                  }), "."]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./mdx/gmaps-integration/gmaps-integration.mdx
      *************************************************************/

      ims.set('./mdx/gmaps-integration/gmaps-integration.mdx', {
        hash: 2771017928,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _code = require("@bg/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              h2: "h2",
              ol: "ol",
              li: "li",
              code: "code",
              p: "p",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "Integracion de gmaps"
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Pasos para la integracion 💻 :"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.code, {
                    children: "\"Gmaps\""
                  }), " utiliza la libreria de google maps por tanto se necesita hacer un \"npm install\" de la libreria, instale gmaps en su paquete:"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `@googlemaps/js-api-loader`
              }), "\n", " ", "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "2",
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Una vez hecho proceda a agregar en el ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "\"packages.json\""
                    }), " de su proyecto la ruta relativa de donde tenga el ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "\"package.json\""
                    }), " de gmaps."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Asegurese tambien de que en su ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "\"package.json\""
                    }), " en la entrada ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "\"libraries\""
                    }), " > ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "\"import\""
                    }), " este el scope y nombre de gmaps:"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
"libraries": {
    "imports": [
        "@bgroup/gmaps"
    ]
},`
              }), "\n", " ", "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Y asi estaria terminada la integracion de Gmaps 🔥 !"
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*********************************************************************
      INTERNAL MODULE: ./mdx/how-to-install-jadmin/how-to-install-jadmin.mdx
      *********************************************************************/

      ims.set('./mdx/how-to-install-jadmin/how-to-install-jadmin.mdx', {
        hash: 2373560425,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@bg/docs/components/html");
          var _code = require("@bg/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              ol: "ol",
              li: "li",
              p: "p",
              strong: "strong",
              ul: "ul",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                tag: "h2",
                text: "Como instalar y configurar el Jadmin en un nuevo proyecto💻"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Lo primero que se necesita es tener en su ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "\"packages.json\""
                    }), " la ruta de su proyecto hasta los package.json de los siguientes proyectos 🗺️:"]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "bg-auth/mailer/package.json"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "bg-auth/auth-models/package.json"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "bg/bg-auth/auth-api/package.json"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "reactive-model/package.json"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "jadmin/project/package.json"
                    }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                      children: "jadmin/ui/package.json"
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Una vez hecho lo siguiente es ir al ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "package.json"
                    }), " del proyecto donde quiera implementar el jadmin y agregar las siguientes dependencias:"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `libraries: {
   "imports": [
      "@bg/jadmin",
      "@bg/auth-api",
      "@jadmin/ui",
      "@bg/auth-models"
   ]
}`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "3",
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Luego si no esta especificado copie la carpeta ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "routing "
                    }), " del jadmin y pasela a su proyecto."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Ahora en nuestro proyecto crearemos en ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "modules"
                    }), " una carpeta menu (o como deseemos nombrarla) en esta carpeta crearemos un modulo ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "start"
                    }), " y en nuestro archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "ts"
                    }), " (si no existe lo creamos) importaremos la clase ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "mainLayoutManager"
                    })]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import { Code } from "@bg/docs/code";`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Este en un objeto que nos permitira agregar un arreglos de objetos que seran los elementos de la sidebar de nuestro jadmin. Las estructura seria la siguiente:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `export const MENU_ITEMS = [{name: "label-del-elemento", icon: "icono-del-elemento", path: "/ruta-del-elemento",}]`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Luego al final de nuestro archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "start"
                }), " usaremos el metodo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "\"setMenuItems\""
                }), " de ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "mainLayoutManager"
                }), ". Este metodo nos permitira setear los elemento que agreguemos.\r\nDe esta manera podemos agregar los elementos que necesitemos en nuestra sidebar del jadmin."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "5",
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Asegurese de copiar tambien la carpeta template del jadmin y pasarla a su projecto. 📄"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Y con eso ya esta concluido!!! 🎉."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./mdx/how-to-use/how-to-use.mdx
      ***********************************************/

      ims.set('./mdx/how-to-use/how-to-use.mdx', {
        hash: 11665590,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@bg/docs/components/html");
          var _code = require("@bg/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              p: "p",
              h2: "h2",
              ol: "ol",
              li: "li",
              h3: "h3",
              code: "code",
              ul: "ul",
              strong: "strong"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "📚 Pasos para agregar contenido en bg - docs"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Lo que vamos a ver acontinuacion son los pasos que tenemos que seguir para poder agregar contenido en bg - docs,;\r\ndesde donde agregar tu archivo mdx hasta que pasos seguir para que tu opcion aparezca en el menu como contenido\r\ndisponible!"
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "🛠 Setup de bg-docs"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Antes de comenzar tienes que realizar los pasos acontinuacion listados para poder a manejar el bg-docs:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Clonar el repositorio en tu pc local ejecutando:"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "git clone https://github.com/balearesg/bg-docs.git"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "2",
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Hacer las instalaciones correspondientes:"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "cd project"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "npm i"
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "🔥 Agregar tu contenido"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para agregar la pagina que quieras en bg-docs tu contenido debe seguir unas directrices:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Tiene que estar escrito en ", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://dillinger.io/",
                    children: "markdown"
                  })]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Tiene que estar en formato ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: ".mdx`"
                  })]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Debe seguir los estandares de diseño de bg-docs (usar componentes existentes en caso de ser necesario)"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Unas vez cumplidas estas simples pautas podemos comenzar a listar los pasos a seguir:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Los contenidos en bg-docs se posicionan en ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                  children: "project\\modules\\content\\mdx"
                }), " siguiendo una estructura basada en el contenido propio y dependiendo del caso esta puede ser un conjunto de archivos si el contenido se divide en partes, o si es solo una pagina un simple archivo, veamoslo con ejemplos:"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "🏆 Ejemplo de implementacion con una unica pagina:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Nos dirigimos a la ruta donde se establecen los contenidos (", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "project\\modules\\content\\mdx"
                    }), ")"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["creamos una carpeta con el nombre de nuestro contenido por ejemplo ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "getting-started"
                    })]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["dentro pondremos el contenido en formato ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "mdx"
                    }), " que querramos agregar, entonces quedaria algo asi:"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["mdx", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_components.strong, {
                        children: "getting-started"
                      }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                        children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: (0, _jsxRuntime.jsx)(_components.strong, {
                            children: "el-nombre-de-tu-archivo.mdx"
                          })
                        }), "\n"]
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "🔓 Ejemplo de implementacion con un conjunto de paginas:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Nos dirigimos a la ruta donde se establecen los contenidos (", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "project\\modules\\content\\mdx"
                    }), ")"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["creamos una carpeta con el nombre de nuestro tema a tratar por ejemplo ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "files-naming"
                    })]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["dentro pondremos los contenido en formato ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                      children: "mdx"
                    }), " que querramos agregar, entonces quedaria algo asi:"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["mdx", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_components.strong, {
                        children: "files-naming"
                      }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                        children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: (0, _jsxRuntime.jsx)(_components.strong, {
                            children: "el-nombre-de-tu-archivo.mdx"
                          })
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: (0, _jsxRuntime.jsx)(_components.strong, {
                            children: "el-nombre-de-tu-otro-archivo.mdx"
                          })
                        }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: (0, _jsxRuntime.jsx)(_components.strong, {
                            children: "el-nombre-de-tu-otro-otro-archivo.mdx"
                          })
                        }), "\n"]
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Perfecto!"
                }), " Ya tenemos nuestras paginas listas para ser mostradas solo quedaria disponibilizarlas para ser consumidas"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "🎩 Disponibilizacion de paginas:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Ahora viene la parte en la que hacemos que nuestra pagina forme parte de bg-docs:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Nos dirigimos a ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "project\\modules\\content\\index.ts"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Ahi dentro se encuentras las importaciones y exportaciones de los contenidos de bg-docs."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Lo que debemos hacer es tomar la ubicacion de nuestro/s contenido/s con respecto al archivo ", (0, _jsxRuntime.jsx)(_code.InlineCode, {
                  children: "index.ts"
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Podremos ver que el archivo se divide en dos secciones"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
// Imports
...

// Exports
...
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "2",
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Vamos a irnos a la seccion imports y en el final de las importaciones (justo antes de que comience la seccion ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "// Exports"
                  }), ") vamos a agregar:"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import {default as __gettingStarted } from './mdx/getting-started-folder/getting-started.mdx';`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Donde ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "__gettingStarted"
                }), " es el nombre de nuestro contenido (es necesario mantener los ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "__"
                }), " al principio del nombre), el ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "getting-started-folder"
                }), " es la carpeta que creamos antes (donde esta nuestro contenido) y ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "getting-started.mdx"
                }), " es el nombre de nuestro archivo con formato ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: ".mdx"
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Luego de eso vamos a la seccion ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "// Exports"
                }), " y al final de esta vamos a agregar la exportacion de nuestro/s contenido/s siguiendo las pautas anteriormente marcadas:"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `export /*bundle*/ const GettingStarted = __gettingStarted;`
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "👏 Ya casi estamos! Solo quedaria disponibilizar nuestro contenido en el menu para que pueda ser accedido por otros"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Nos dirigimos a la siguiente ruta ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "project\\modules\\layouts\\main\\ts\\menu\\index.ts"
                  })]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Lo abrimos"
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Nos encontraremos con una constante ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "sidebarItems"
                  }), " que es un arreglo de arreglos."]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Nos vamos a ir al final de la lista de items y crearemos el nuestro siguiendo un patron:"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los items del menu tienen una estructura definida y que puede variar segun el caso, solo hay dos casos disponibles:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Solo se quiere agregar una pagina solo"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Se quiere agregar una pagina con submenues (con sub contenidos)"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Se requiere agregar solo una pagina:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "En este caso el template que debemos usar es el siguiente:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `["Nombre del menu que querramos agregar", "/url-de-nuestra-pagina", []]`
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Se quiere agregar una pagina con submenues (con sub contenidos)"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Estructura de los items de ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "sidebarItems"
                }), ":"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["La primera posicion de estos subarreglos es el label que querramos que se vea en el menu.", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: ["La segunda posicion sera la ruta url de nuestra pagina.", "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                        children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: "La tercera posicion del arreglo es otro arreglo que seran las paginas con submenus o subcontenidos a dentros de estas."
                        }), "\n"]
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `["Nombre del menu que querramos agregar", "/url-de-nuestra-pagina", [["Nombre del submenu", "/url-de-nuestra-subpagina", []]]]`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["el submenu lo podemos repetir cuantas veces como sea necesario cuidando que este dentro de ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "children"
                }), "."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "🏅Listo! Ya tendriamos nuestro contenido en bg-docs!"
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*****************************************************************
      INTERNAL MODULE: ./mdx/implement-unit-test/implement-unit-test.mdx
      *****************************************************************/

      ims.set('./mdx/implement-unit-test/implement-unit-test.mdx', {
        hash: 2979992478,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@bg/docs/components/html");
          var _code = require("@bg/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h2: "h2",
              h4: "h4",
              ol: "ol",
              li: "li",
              strong: "strong",
              p: "p"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h2, {
                children: "Configuración en Beyond para implementar de Pruebas Unitarias con Jest en Tu Proyecto 🔧"
              }), "\n", (0, _jsxRuntime.jsx)(_components.h4, {
                children: "Jest es una libreria de Javascript para crear, ejecutar y estructurar pruebas, Por ello veremos su Integración con BeyondJS 🚀 :"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Primero instalaremos instalaremos la libreria de ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Jest"
                  }), " y tambien ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Babel"
                  }), " :"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `npm install --save-dev jest`
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Si usamos TypeScript debemos instalar tambien :"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `npm install @babel/preset-typescript`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "2",
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["En nuestro proyecto creado, procederemos a crear en el paquete donde haremos las pruebas, un archivo\r\n", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "babel.config.js"
                  }), ". Este archivo contendra la configuracion de Babel de tu version actual de Node"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `module.exports = {presets: [['@babel/preset-env',{targets: {node: 'current',},},],],};`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "3",
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Luego en nuestro package.json de nuestro paquete agregaremos la entrada ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "\"Script\""
                  }), ", asi de esta manera :"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `"scripts": {"test": "jest"},`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Y ya estaria configurado Jest en BeyondJS para proceder a implementar las Pruebas Unitarias a nuestro proyecto 🎉."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "[!NOTE]📌"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Recuerda que si quieres ejecutar tus Test debes acceder al paquete donde tengas tu archivo de tests y ejecutar en la\r\nterminal el comando de :"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `npm run test`
              }), "\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                href: "https://jestjs.io/es-ES/docs/getting-started",
                children: "Documentacion de Jest"
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*************************************
      INTERNAL MODULE: ./mdx/jview/jview.mdx
      *************************************/

      ims.set('./mdx/jview/jview.mdx', {
        hash: 1252073481,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@bg/docs/components/html");
          var _code = require("@bg/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ol: "ol",
              li: "li",
              ul: "ul",
              em: "em",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                text: "Jview."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "A continuacion se explica la forma de implementar el componente Jview para el desarrollo de listados con paginacion."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Importacion, para importarlo"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import {JView} from "@scope/docs/jview.code";`
              }), "\n", (0, _jsxRuntime.jsx)(_html.Info, {
                children: "La rura varia de acuerdo al scope y name del proyecto donde se este utilizando"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "2",
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Armar objeto con las propiedades que necesita el Jview"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "row: (optional) "
                  }), " componente react con la estructura html\r\ndeseada para la fila. Si no se pasa debe haber una propiedad ", (0, _jsxRuntime.jsx)("strong", {
                    children: "keys"
                  })]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "keys: (optional) string[]"
                  }), " Array de strings con las keys que se desean ver en el item, estos keys corresponde a los de los objetos de ", (0, _jsxRuntime.jsx)("strong", {
                    children: "entries"
                  })]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_code.InlineCode, {
                    children: ["entries: (required) ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "array"
                    })]
                  }), " arreglo con los elementos\r\na mostrar en la pagina actual.", " "]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_code.InlineCode, {
                    children: ["pagerNext: (optional) ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "boolean"
                    })]
                  }), " bandera para indicar que\r\nse desea tener paginacion en la lista."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_code.InlineCode, {
                    children: ["total: (required) ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "number"
                    })]
                  }), " numero total de registros que\r\nmanejara el Jview.", " "]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_code.InlineCode, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "dataHead: (optional) Array<{label: string, id: number | string}"
                    }), ">"]
                  }), " Array de objetos, a partir de este se arma el header de la tabla"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_code.InlineCode, {
                    children: ["rows: (required) ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "number"
                    })]
                  }), " numero de filas que se quieren\r\nmostrar en la pagina.", " "]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_code.InlineCode, {
                    children: ["total: (required) ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "number"
                    })]
                  }), " numero total de registros que\r\nmanejara el Jview.", " "]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_code.InlineCode, {
                    children: ["currentPage: (optional) ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "number"
                    })]
                  }), " numero de la pagina donde\r\nse quiere posicionar."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_code.InlineCode, {
                    children: ["search: (optional) ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "boolean"
                    })]
                  }), " bandera para indicar que\r\nse agregue el buscador por defecto del Jview."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_code.InlineCode, {
                    children: ["isSearch: (optional) ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "boolean"
                    })]
                  }), " bandera que indica el estado\r\ndel Jview que se esta realizando una busqueda."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_code.InlineCode, {
                    children: ["handleClear: (optional) ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "function"
                    })]
                  }), " callBack para limpiar\r\nla busqueda."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_code.InlineCode, {
                    children: ["handleSearch: (optional) ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "function"
                    })]
                  }), " callBack para realizar\r\nla busqueda."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_code.InlineCode, {
                    children: ["title: (optional) ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "string"
                    })]
                  }), " valor del titulo para el Jview."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_code.InlineCode, {
                    children: ["onNext: (optional) ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "function"
                    })]
                  }), " callBack para obtener los\r\nelementos de la nueva pagina."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_code.InlineCode, {
                    children: ["onPrev: (optional) ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "function"
                    })]
                  }), " callBack para obtener los\r\nelementos de la pagina anterior, por defecto busca sobre el arreglo que tiene todos\r\nlos elementos existentes dentro del Jview, este metodo onPrev se usa en caso especiales."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsxs)(_code.InlineCode, {
                    children: ["action: (optional) ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "string"
                    })]
                  }), " url del link a consultar para\r\nla paginacion, se realiza una llamada http."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "header: (optional) "
                  }), " componente react con la estructura\r\nhtml deseada para el header del Jview."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_code.InlineCode, {
                    children: "AdditionalElement: (optional) "
                  }), " componente react con la\r\nestructura html deseada como component adicional en el Jview, normalmente se usa\r\ncomo complemento para las busquedas."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El objeto puede recibir mas parametros ademas de los mencionados previamente como textos, callbacks, etc... que puede ser usados por los componentes react agregados en la configuracion."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "3",
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Usar el componente Jview"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `<Jview {...values} />`
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***************************************
      INTERNAL MODULE: ./mdx/mailer/mailer.mdx
      ***************************************/

      ims.set('./mdx/mailer/mailer.mdx', {
        hash: 51648156,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              p: "p",
              h2: "h2",
              ol: "ol",
              li: "li",
              code: "code",
              ul: "ul",
              a: "a"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "bg-mailer"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "bg-mailer es una herramienta para enviar correos electrónicos HTML dinámicos. Con bg-mailer, puedes recibir un token asociado a una aplicación que se guarda en la base de datos y utilizar esa información para personalizar la plantilla HTML antes de enviar el correo electrónico."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Integracion"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Instalar bg-mailer es muy sencillo. Solo debes ejecutar el comando ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "npm i"
                    }), " para instalar todos los paquetes dependientes."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Luego asegurate de que en tu ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "packages.json"
                    }), " este la ruta relativa del bg-mailer y su package.json."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Asegurate tambien de tener en el package.json de tu proyecto el bg-mailer, esta en la entrada \"Libraries\" > \"import :\""
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Funciones principales"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El corazón de bg-mailer es la clase MailManager, que se encarga de administrar el proceso de envío. Hay dos funciones principales que debes conocer para usar bg-mailer:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "hasPermission"
                    }), ": Esta función te dice si el token pasado por argumento pertenece a una aplicación registrada en la base de datos."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "send"
                    }), ": Esta función envía el correo electrónico, recibiendo como parámetros ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "{to, subject, module, data}"
                    }), ". ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "to"
                    }), " es el correo electrónico del destinatario, ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "subject"
                    }), " es el asunto del correo, ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "module"
                    }), " es el módulo a tomar de la base de datos y ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "data"
                    }), " son los valores que se establecerán en el documento HTML."]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Uso"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Para utilizar bg-mailer, primero debes asegurarte de tener una aplicación registrada en la base de datos con un token válido. Luego, puedes utilizar las funciones ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "hasPermission"
                }), " y ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "send"
                }), " para verificar el permiso y enviar el correo electrónico, respectivamente."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Contribución"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Si deseas contribuir a bg-mailer, por favor envíanos un correo electrónico a ", (0, _jsxRuntime.jsx)(_components.a, {
                  href: "mailto:contacto@balearesgroup.com",
                  children: "contacto@balearesgroup.com"
                }), " con tu propuesta."]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "Contacto"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Si tienes alguna pregunta o problema con bg-mailer, por favor envíanos un correo electrónico a ", (0, _jsxRuntime.jsx)(_components.a, {
                  href: "mailto:contacto@balearesgroup.com",
                  children: "contacto@balearesgroup.com"
                }), " o abre un issue en el ", (0, _jsxRuntime.jsx)(_components.a, {
                  href: "https://github.com/bg/bg-mailer",
                  children: "repositorio de GitHub"
                }), "."]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /********************************************************************
      INTERNAL MODULE: ./mdx/mobile-compilations/flujocompilacionmobile.mdx
      ********************************************************************/

      ims.set('./mdx/mobile-compilations/flujocompilacionmobile.mdx', {
        hash: 1138833000,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              p: "p",
              h2: "h2",
              ol: "ol",
              li: "li",
              h3: "h3"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "Compilación de APP local Beyond."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Una de las tantas funciones que realiza beyond es permitir compilar los archivos de aplicaciones o web traduciendo el código fuente a una estructura que puede ser leída y ejecutada tanto para aplicaciones móviles, como para la web, esta acción se puede realizar desde las opciones que disponemos en el dashboard, en la cual podemos elegir tanto el tipo de compilación (sea App o Web), como el ambiente que deseamos compilar esto desde la opción compile client que visualizamos en nuestra aplicación"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "También es posible realizar la compilación de servicios Node.js de nuestra app, como el servicio de una librería (Para ambos casos sólo si disponemos de uno)."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "APPS CON BEYOND-2020"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Como se sabe, disponemos de 2 versiones de beyond y de aplicaciones que corren con una u otra versión, para los casos en que se deba compilar aplicaciones con la versión antigua de beyond (qch, bovino, tabacalera), se detallan los siguientes pasos"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los pasos para realizar una compilación de una app son los siguientes:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Si se tiene una compilación previa, borrar la carpeta build, en caso de que no, proceder con el paso 2."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Ingresamos en el dashboard y buscamos la aplicación que se desea compilar."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Se presiona sobre la opción “compile client”"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Seleccionar el ambiente, el tipo de compilación y si se desea comprimir el archivo y generar las imágenes para los iconos y el splash."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Luego presionar el botón de “build client”."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Luego de haber realizado el build de la aplicación, ingresar dentro de la carpeta “code” la cual normalmente se encuentra en la raíz de la aplicación como tal, la misma está definida con el OS para el que se compiló (iOS, android, web). Dentro de esta carpeta “code”, se encontraran los archivos compilados de la aplicación."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Pasos a seguir para generar el archivo .apk o .ipa"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Luego de haber realizado la compilación de los archivos en beyond, aún falta generar el apk y el ipa, para esto, tenemos en uso una herramienta llamada volt builder, el cual se encarga de tomar los archivos de la compilación y generar como salida el apk o el ipa. Para esto, la herramienta pide una estructura concreta de carpetas las cuales, luego se comprimiran en un zip, siendo este último el que se sube a la herramienta."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La estructura de carpetas es la siguiente:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Carpeta nombre de aplicación: Esta carpeta solo será el contenedor para identificar la compilación (no se comprime)."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Carpeta www: Dentro de esta carpeta, irá todo el código compilado desde beyond.}"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Carpeta resource: Esta carpeta contendrá las imágenes de splash e icono de la aplicación y cualquier otro archivo necesario, ya sea uno de configuracion externa, ejm: google-service-info.plist (archivo que se descarga para la configuración de firebase)."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Carpeta certificates: Esta carpeta contendrá los archivos de certificados, para iOS esto es obligatorio, pero para Android no, solo en el caso de que sea desarrollo, para producción de android si es necesario tener los certificados de la aplicación."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Aparte de la estructura de directorios, también es necesario un archivo llamado voltbuilder.json, este archivo lo que indica son algunos parámetros para la compilación, ya sea, la ubicación y nombre de los certificados, el tipo de compilación y el ambiente. Y no menos importante, a la altura de este archivo, debemos tener el config.xml, archivo que se usa para definir algunos parámetros de la app, como los plugins que usa."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Ya teniendo la estructura de carpeta, solo resta comprimir y subir el zip a la herramienta de voltbuilder, seleccionar el OS que se desea compilar y subir el archivo comprimido, la herramienta los procesará y por último mostrará la aplicación ya compilada para que se pueda descargar o instalar mediante un código QR"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "NOTA: SE DEBE REALIZAR LAS TAREAS ANTERIORES POR CADA OS, ES DECIR, DEBE HABER UNA CARPETA PARA LA APLICACIÓN “APP IOS”, “APP ANDROID” POR SEPARADO Y SUBIR LOS COMPRIMIDOS DE CADA UNA PARA EL OS QUE SE REQUIERE COMPILAR."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "APPS CON BEYOND VERSIÓN NUEVA"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "La compilación de aplicaciones con la versión nueva, no es tan diferente a la version vieja, el cambio más puntualizado es que en la versión nueva se usan distribuciones, las cuales pueden ser de tipo:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Backend"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Node"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Android"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "iOS"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Web"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Npm"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Pero la compilación sigue siendo la misma, beyond tomara los archivos del codigo y los compilara para la distribución elegida."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Ingresamos en el dashboard y presionamos sobre el boton para compilar sobre la app."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Seleccionar la distribucion y presionar boton compilar."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Esperar a que el sistema finalice la compilación de archivos."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El resultado de la compilación, es decir, los archivos generados se encontraran dentro de la carpeta beyond/build/distribution, donde distribution es la distribucion seleccionada."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Luego de esto y para generar los archivos apk e ipa, realizar los mismos pasos descritos en la compilación con beyond-2020."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "OTRAS DISTRIBUCIONES CON BEYOND NUEVA VERSION"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Como se comentó anteriormente, con la nueva versión de beyond se pueden realizar múltiples compilaciones según la distribución elegida o necesaria, siendo estas de tipo web, backend, node."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Distribucion web"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Estos son los pasos a seguir para hacer la compilación y deployment de una web."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Ingresamos en el dashboard y presionamos sobre el boton para compilar sobre la app."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Seleccionar la distribucion y presionar boton compilar."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Esperar a que el sistema finalice la compilación de archivos."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "El resultado de la compilación, es decir, los archivos generados se encontraran dentro de la carpeta beyond/build/distribution, donde distribution es la distribucion seleccionada."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Luego de haberse realizado la compilación, estos archivos subirlos al servidor en donde se encuentre alojado el sitio, ya sea un cpanel, o un cloud, es indiferente."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Distribución backend y node"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los pasos para realizar la compilación de una distribución de tipo node o backend son exactamente los mismos que anteriormente se han descrito, ahora, la diferencia particular de estas distribuciones está en el deployment de las mismas."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Las compilaciones de estos tipos de distribución normalmente se refieren a un codigo node que funciona de backend, es decir, las aplicaciones consultaron estos servicios para ya sea, traer datos o realizar acciones en específico, de ahí la diferencia en la forma en que se desplegan. Para realizar esto es necesario subir los archivos compilados en algun repositorio, configurar un gestor de procesos node (usamos PM2), para que levante y corra nuestro proceso node en un puerto especifico, luego crear un virtualhost con apache o nginx para que escuche las peticiones realizadas a una URL en especifico y mediante un proxy las redirecciones al servicio node con el puerto que se configuró. Leer la siguiente documentacion en la que se explica como hacer todo lo antes mencionado."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "PUBLICACION DE SERVICIO BEYOND MANUALMENTE.docx"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Proc | Procedimiento para actualización de servicios"
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "COMPILACIÓN CON VOLTBUILDER"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Ingresar en https://volt.build/"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Iniciar sesion:"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "user: developersjida@gmail.com"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "pass: JD.v0ltb"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Ingresar en opcion “Upload”."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Seleccionar OS: iOS o Android."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Subir codigo compilado en .zip"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "DESARROLLO:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "En caso de android, descargar el apk y compartirlo o enviarlo."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "En caso de iOS, seleccionar “copy URL for use on device” y enviarla.\r\nPRODUCCIÓN:"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "En caso de android, descargar el bundle y subirlo al market."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "En caso de iOS, el voltbuilder realiza la subida al market automaticamente."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "APLICACIONES YA CON ESTRUCTURA DE CARPETA PARA VOLTBUILDER"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "NOTA IMPORTANTE: Si no hubo cambios en el archivo de configuración (config.js) ni en el index.html, no eliminarlos de la carpeta “www”, es decir, para reemplazar los archivos por los nuevos, eliminar todo excepto: config.js, index.html y main.html"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Repito, dejar estos 3 archivos siempre y no reemplazarlos por los que genera la compilación."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "QCH produccion android"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "https://drive.google.com/drive/u/2/folders/1eepa7qhVKCtJcrpvYt2u5kLhBVETd8xB\r\nQCH desarrollo android"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "https://drive.google.com/drive/u/2/folders/1eepa7qhVKCtJcrpvYt2u5kLhBVETd8xB"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "QCH produccion iOS"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "https://drive.google.com/drive/u/2/folders/1eepa7qhVKCtJcrpvYt2u5kLhBVETd8xB"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "QCH desarrollo iOS"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "https://drive.google.com/drive/u/2/folders/1eepa7qhVKCtJcrpvYt2u5kLhBVETd8xB\r\nBovino produccion"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "https://drive.google.com/drive/u/2/folders/1lhIUDT3rCbCZZIkU43WI5q8m94OJHMhj"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Bovino desarrollo (manga)"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "https://drive.google.com/drive/u/2/folders/1lhIUDT3rCbCZZIkU43WI5q8m94OJHMhj"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Mentora produccion android"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "https://drive.google.com/drive/u/2/folders/17kNepf7qmeXKtvuI6tNScBuLngA-FuIo"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Mentora desarrollo android"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "https://drive.google.com/drive/u/2/folders/17kNepf7qmeXKtvuI6tNScBuLngA-FuIo"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Mentora produccion iOS"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "https://drive.google.com/drive/u/2/folders/17kNepf7qmeXKtvuI6tNScBuLngA-FuIo\r\nMentora desarrollo iOS"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "https://drive.google.com/drive/u/2/folders/17kNepf7qmeXKtvuI6tNScBuLngA-FuIo"
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***********************************
      INTERNAL MODULE: ./mdx/not-found.mdx
      ***********************************/

      ims.set('./mdx/not-found.mdx', {
        hash: 3988554087,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p"
            }, props.components);
            return (0, _jsxRuntime.jsx)(_components.p, {
              children: "No se ha encontrado el recurso solicitado"
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./mdx/plugins/plugins.mdx
      *****************************************/

      ims.set('./mdx/plugins/plugins.mdx', {
        hash: 2993472157,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@bg/docs/components/html");
          var _code = require("@bg/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              ul: "ul",
              li: "li",
              p: "p"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "listado de plugins:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/cordova-plugin-androidx-adapter",
                    children: (0, _jsxRuntime.jsx)(_components.p, {
                      children: "cordova-plugin-androidx-adapter:"
                    })
                  }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Plugin que sirve para integrar aplicaciones que usen la libreria de android support y androidX"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/@goiarlabs/cordova-plugin-file-transfer",
                    children: (0, _jsxRuntime.jsx)(_components.p, {
                      children: "goiarlabs/cordova-plugin-file-transfer:"
                    })
                  }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Plugin que sirve para permitir subidas y descargas de archivos."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/cordova-plugin-geolocation",
                    children: (0, _jsxRuntime.jsx)(_components.p, {
                      children: "cordova-plugin-geolocation:"
                    })
                  }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Plugin que provee informacion sobre la geolocalizacion del dispositivo."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_html.ELink, {
                      href: "https://www.npmjs.com/package/cordova-plugin-media",
                      children: "cordova-plugin-media:"
                    }), " Plugin\r\nque permite grabar y reproducir archivos de audio en el dispositivo."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/cordova-plugin-network-information",
                    children: (0, _jsxRuntime.jsx)(_components.p, {
                      children: "cordova-plugin-network-information:"
                    })
                  }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Plugin que provee la informacion de conexion del dispositivo."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/cordova-plugin-splashscreen",
                    children: (0, _jsxRuntime.jsx)(_components.p, {
                      children: "cordova-plugin-splashscreen:"
                    })
                  }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Este plugin permite mostrar y ocultar el splashscreen mientras la aplicacion esta iniciandose."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/cordova-plugin-vibration",
                    children: (0, _jsxRuntime.jsx)(_components.p, {
                      children: "cordova-plugin-vibration:"
                    })
                  }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "lugin que habilita la vibracion nativa del dispositivo."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/cordova-plugin-startapp",
                    children: (0, _jsxRuntime.jsx)(_components.p, {
                      children: "cordova-plugin-startapp:"
                    })
                  }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Plugin que permite abrir otras aplicaciones dentro de una aplicacion."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_html.ELink, {
                      href: "https://www.npmjs.com/package/cordova-plugin-market",
                      children: "cordova-plugin-market:"
                    }), "\r\nPlugin que habilita la redireccion al market de la aplicacion, ya sea android o ios."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/cordova-plugin-background-mode",
                    children: (0, _jsxRuntime.jsx)(_components.p, {
                      children: "cordova-plugin-background-mode:"
                    })
                  }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Plugin que permite a la app seguir funcionando mientras está en 2do plano."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/cordova-plugin-inappbrowser",
                    children: (0, _jsxRuntime.jsx)(_components.p, {
                      children: "cordova-plugin-inappbrowser:"
                    })
                  }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Plugin que habilita abrir un navegador dentro de la aplicacion."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/cordova-plugin-app-version",
                    children: (0, _jsxRuntime.jsx)(_components.p, {
                      children: "cordova-plugin-app-version:"
                    })
                  }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Plugin que provee informacion de la version de la aplicacion."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/cordova-plugin-local-notification",
                    children: (0, _jsxRuntime.jsx)(_components.p, {
                      children: "cordova-plugin-local-notification:"
                    })
                  }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "--Este Plugin no funciona con cordova-plugin-firebasex Plugin que habilita notificaciones locales,\r\nes decir, habilita notificaciones en 1er plano."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/cordova-plugin-firebasex",
                    children: (0, _jsxRuntime.jsx)(_components.p, {
                      children: "cordova-plugin-firebasex:"
                    })
                  }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Plugin que permite recibir notificaciones push."
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
{
    VERSION: 14.2.1,
    IMPORTANT INFORMATION FOR A ICON IMAGE: https://github.com/dpa99c/cordova-plugin-firebasex#android-default-notification-icon
}
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/cordova-plugin-file-opener2",
                    children: (0, _jsxRuntime.jsx)(_components.p, {
                      children: "cordova-plugin-file-opener2:"
                    })
                  }), "\n", "Plugin que permite la apertura de diversos archivos dentro de la aplicacion."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/cordova-plugin-x-socialsharing",
                    children: (0, _jsxRuntime.jsxs)(_components.p, {
                      children: ["cordova-plugin-x-socialsharing:", ' ']
                    })
                  }), "\n", "Plugin que habilita el compartir nativo del dispositivo para ser usado por la aplicacion."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/cordova-plugin-facebook-connect",
                    children: (0, _jsxRuntime.jsxs)(_components.p, {
                      children: ["cordova-plugin-facebook-connect:", ' ']
                    })
                  }), "\n", "Plugin que permite integrarse con la aplicacion en Facebook, es util para habilitar pixel."]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/cordova-plugin-deeplinks",
                    children: (0, _jsxRuntime.jsxs)(_components.p, {
                      children: ["cordova-plugin-deeplinks:", ' ']
                    })
                  }), "\n", "Plugin que permite la redireccion de deeplinks a la aplicacion."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
        VERSION: 1.1.1,
        IMPORTAN INFORMATION FOR A IMPLEMENTATION:

        IOS: https://www.npmjs.com/package/cordova-plugin-deeplinks#ios-web-integration
        ANDROID: https://www.npmjs.com/package/cordova-plugin-deeplinks#android-web-integration
    `
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_html.ELink, {
                    href: "https://www.npmjs.com/package/cordova-plugin-bluetooth-serial",
                    children: (0, _jsxRuntime.jsx)(_components.p, {
                      children: "cordova-plugin-bluetooth-serial:"
                    })
                  }), "\n", "Plugin que permite conectarse a dispositivos bluetooth"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./mdx/prettier-settings/prettier-settings.mdx
      *************************************************************/

      ims.set('./mdx/prettier-settings/prettier-settings.mdx', {
        hash: 172084607,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _code = require("@bg/docs/code");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              h3: "h3",
              code: "code",
              ol: "ol",
              li: "li",
              strong: "strong",
              p: "p"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "Configuración de prettier🔧"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.h3, {
                children: ["📌El archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "prettier.json"
                }), " se utiliza para definir las preferencias de formato y estilo en el formateador de código Prettier. Aquí tienes un ejemplo de cómo puedes configurar el archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "prettier.json"
                }), " con tus preferencias específicas:"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: [(0, _jsxRuntime.jsx)(_components.strong, {
                    children: "Integración de editor:"
                  }), " Si has instalado la extensión de Prettier en tu editor de código, puedes formatear\r\nautomáticamente el código utilizando el atajo de teclado correspondiente o la opción en el menú del editor."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Link de la extension: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "💻Configuración del formateo al guardar:"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para configurar Prettier para que se ejecute automáticamente cada vez que guardas un archivo, puedes seguir estos pasos:\r\nAsegúrate de tener Prettier y la extensión correspondiente instalados en tu editor de código. Prettier está disponible\r\npara varios editores populares como Visual Studio Code, Atom, Sublime Text, entre otros. Verifica que tienes la\r\nextensión de Prettier instalada en tu editor."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "2",
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Asegúrate de tener Prettier y la extensión correspondiente instalados en tu editor de código. Prettier está\r\ndisponible para varios editores populares como Visual Studio Code, Atom, Sublime Text, entre otros. Verifica que\r\ntienes la extensión de Prettier instalada en tu editor."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Abre la configuración de tu editor. Esto generalmente se hace a través del menú ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "\"Preferences\""
                    }), " (Preferencias) o\r\n\"Settings\" (Configuración) en el editor."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Busca la configuración de Prettier. Puede aparecer como ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "\"Prettier\""
                    }), " o ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "\"Format\""
                    }), " en la configuración del editor.\r\nSelecciona la configuración correspondiente para Prettier."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Dentro de la configuración de Prettier, busca la opción ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "\"Format On Save\""
                    }), " (Formatear al Guardar) y actívala. Esta\r\nopción indica al editor que ejecute automáticamente Prettier cada vez que guardes un archivo."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Luego nos aseguraremos de establecer los valores que necesita nuestro editor de texto segun estos valores :"
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `
  "tabWidth": 4,
  "arrowParens": "avoid",
  "printWidth": 120,
  "proseWrap": "always",
  "useTabs": true,
  "singleQuote": true,
  "bracketSpacing": false,
  "configPath": ""
`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "7",
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Para ello en el buscador de la configuracion del editor buscaremos las propiedades de la estructura de arriba ej :\r\nbuscaremos primero ", (0, _jsxRuntime.jsx)(_components.strong, {
                    children: "tabWidth"
                  }), " y estableceremos su valor como esta arriba en \"4\" y asi seguiremos con las otras\r\npropiedades que buscaremos."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["ejemplo en ", (0, _jsxRuntime.jsx)(_components.strong, {
                  children: "Visual Studio Code"
                }), "👇 :"]
              }), "\n", (0, _jsxRuntime.jsx)("img", {
                src: "./assets/config-prettier.png",
                alt: "image configuration"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "8",
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Despues de haber ajustados los valores en su editor guarda los cambios en la configuración y cierra la ventana de\r\nconfiguración."
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "A partir de ahora, cuando guardes un archivo en tu editor de código, Prettier se ejecutará automáticamente y formateará\r\nel código según las reglas y configuraciones establecidas en tu archivo prettier.json."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./mdx/react-types/react-types.mdx
      *************************************************/

      ims.set('./mdx/react-types/react-types.mdx', {
        hash: 3676762718,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h2: "h2",
              p: "p",
              ul: "ul",
              li: "li",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h2, {
                children: "Types Esenciales"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Cuando creamos componentes y necesitemos tipar la propiedad \"children\" del componente react tengamos en cuenta estos tipos :"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "React.Component"
                    }), ": Este tipo representa un componente de clase en React. Puedes utilizarlo como base para crear tus propios componentes de clase con TypeScript."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "React.FC"
                    }), ": Este tipo representa un componente funcional en React. Es una forma más moderna de definir componentes y se usa con mayor frecuencia en proyectos de React recientes."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "Props"
                    }), ": Define el tipo de las propiedades que se pasan a un componente. Por ejemplo, si tienes un componente llamado MyComponent que espera una prop llamada text,\r\npodrías definir el tipo como Props = ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "{ text: string }"
                    }), "."]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: [(0, _jsxRuntime.jsx)(_components.code, {
                  children: "State"
                }), ": Define el tipo del estado interno de un componente de clase. Puedes usarlo para garantizar que el estado tenga la forma correcta."]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "React.ReactNode"
                    }), ": Este tipo es útil para definir el tipo de contenido que puede estar dentro de un componente de React, como niños (children) en un componente."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "Event Handlers"
                    }), ": Puedes definir tipos específicos para manejadores de eventos, como React.MouseEventHandler para manejar clics del mouse."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "Ref Types"
                    }), ": Para trabajar con referencias a elementos DOM, puedes usar tipos como React.RefObject o React.MutableRefObject."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.code, {
                      children: "Context Types"
                    }), ": Si estás utilizando el contexto de React, puedes definir tipos para los valores de contexto y los objetos de contexto."]
                  }), "\n"]
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./mdx/running-bovino/running-bovino.mdx
      *******************************************************/

      ims.set('./mdx/running-bovino/running-bovino.mdx', {
        hash: 1189153459,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              ol: "ol",
              li: "li",
              p: "p",
              strong: "strong",
              em: "em",
              code: "code",
              pre: "pre",
              ul: "ul",
              h2: "h2"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "🐾Pasos para correr la aplicacion de Bovino"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Clone el repositorio de bovino.📁"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Clonar el repositorio de beyond-2020 en caso de que no lo tenga."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["En el repositorio de ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "\"beyond-2020\""
                    }), " haga ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "\"npm install\""
                    }), " en cada carpeta donde este un ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: " package.json"
                    }), "."]
                  }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "[!NOTE]📌"
                  }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "Se recommienda primero hacer \"npm install\" en todos los \"package.json\" para correr la app pero en muchas ocasiones explotan errores en la consola. Asi que se recommienda lo siguiente antes hacer \"npm install\":"
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["En caso de no tener ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "\"node-sass\""
                    }), " tiene que ejecutar el siguiente codigo en la terminal:"]
                  }), "\n", (0, _jsxRuntime.jsx)(_components.pre, {
                    children: (0, _jsxRuntime.jsx)(_components.code, {
                      className: "language-js",
                      children: "npm install node-sass\n"
                    })
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Tambien asegurese de tener tener instalado la ultima version de ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "python"
                    }), "."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Ahora si haga ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "\"npm install\""
                    }), " en cada carpeta de ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "\"beyond-2020\""
                    }), " donde este un ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "package.json"
                    }), "."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Ahora dirijase a ", (0, _jsxRuntime.jsx)(_components.em, {
                      children: "bovino"
                    }), " y verifique si tiene una carpeta ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: ".beyond📁"
                    }), ", si no la tiene abra el ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Run and bug🐞"
                    }), " y seleccione ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "node"
                    }), " y remplaze el codigo que ya existe ahi por el siguiente:"]
                  }), "\n", (0, _jsxRuntime.jsx)(_components.pre, {
                    children: (0, _jsxRuntime.jsx)(_components.code, {
                      className: "language-json",
                      children: "{\r\n  // Use IntelliSense to learn about possible attributes.\r\n  // Hover to view descriptions of existing attributes.\r\n  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387\r\n  \"version\": \"0.2.0\",\r\n  \"configurations\": [\r\n    {\r\n      \"type\": \"node\",\r\n      \"request\": \"launch\",\r\n      \"name\": \"BeyondJS\",\r\n      \"runtimeExecutable\": \"beyond\",\r\n      \"args\": [\"run\"]\r\n    }\r\n  ]\r\n}\n"
                    })
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["si no sabe abrir el ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "Run and bug🐞"
                    }), " de vscode simplemente en la raiz del proyecto cree una carpeta ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: ".vscode📁"
                    }), " y cree un arhivo ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "launch.json"
                    }), "."]
                  }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                    children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                      children: [(0, _jsxRuntime.jsx)(_components.strong, {
                        children: ".vscode"
                      }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                        children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                          children: (0, _jsxRuntime.jsx)(_components.strong, {
                            children: "launch.json"
                          })
                        }), "\n"]
                      }), "\n"]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Es necesario que haga ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "\"npm install\""
                    }), " en cada carpeta de ", (0, _jsxRuntime.jsx)(_components.strong, {
                      children: "\"beyond-2020\""
                    }), " donde este un ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "package.json"
                    }), "."]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "listo!!! ya puede correr bovino en su maquina🎓🎉."
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./mdx/standards/development-process.mdx
      *******************************************************/

      ims.set('./mdx/standards/development-process.mdx', {
        hash: 67147173,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _html = require("@bg/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              p: "p",
              ul: "ul",
              li: "li"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_html.Title, {
                text: "Manejo de proyectos."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Los proyectos deben manejarse de la siguiente forma:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Manejar un branch master o main para el código puesto en producción."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "El nombramiento de branchs debe realizarse por medio de la nomeclatura\r\ndescriptiva siguiendo un estandar similar al de los commits convencionales:"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Ejemplo:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "\"feature/\", \"fix/\", \"hotfix/\","
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Y se puede especificar"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Branch de desarrollo para las integraciones en entorno de desarrollo."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Branch de calidad para las integraciones en entorno de calidad."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Cada desarrollador va a crear pull request cuando cierre un conjunto de tareas y se haya\r\nprobado adecuadamente."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "El codigo debera ser revisado en equipo o pares e integrado posteriormente a desarrollo."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "En desarrollo se presentará al equipo de análisis quien deberá confirmar la entrega."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "El coordinador del proyecto integrarà al entorno de calidad"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Analisis deberà probar y confirmar."
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "El encargado integrara en produccion."
                }), "\n"]
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /****************************************
      INTERNAL MODULE: ./mdx/training/index.mdx
      ****************************************/

      ims.set('./mdx/training/index.mdx', {
        hash: 0,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {});
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /************************************************
      INTERNAL MODULE: ./mdx/ui-libraries/beyond-ui.mdx
      ************************************************/

      ims.set('./mdx/ui-libraries/beyond-ui.mdx', {
        hash: 1423033858,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _code = require("@bg/docs/code");
          var _html = require("@bg/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              p: "p",
              h2: "h2",
              ul: "ul",
              li: "li",
              h3: "h3"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "🏅 Beyond UI"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Es una libreria de componentes creado con ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "https://beyondjs.com/",
                  children: "BeyondJS"
                }), " por la ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "https://github.com/balearesg",
                  children: "Baleares Group Community"
                }), "\r\nque busca quitar del medio la necesidad de crear los componentes de siempre, haciendo que los desarrolladores se centren en la logica de negocio y los detalles agilizando el proceso de desarrollo de las aplicaciones y por lo tanto reduciendo el tiempo que estas toman"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "🤓☝ Caracteristicas"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Facil implementacion"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Implementable en proyectos con cualquier empaquetador"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Customizacion Simple"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Listos para su uso"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "🎩 Pero, como comenzar?"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Instala BeyondUI usando ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "https://www.npmjs.com/package/@bgroup/ui",
                  children: "npm:"
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `npm i @bgroup/ui`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Luego, importa los componentes que necesites en tu aplicacion:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import { BeyondButton } from "@bgroup/ui/form";`
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Lo tienes! Ahora puedes usar cualquier componente de en tu aplicacion."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "🤝❤ Contribuye"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Estamos felices de recibir contribuciones! Puedes acceder al repo desde ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "https://github.com/balearesg/bgroup-ui",
                  children: "aqui"
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Gracias por usar BeyondUI!"
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./mdx/ui-libraries/essential-ui.mdx
      ***************************************************/

      ims.set('./mdx/ui-libraries/essential-ui.mdx', {
        hash: 3308032480,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _jsxRuntime = require("react/jsx-runtime");
          var _code = require("@bg/docs/code");
          var _html = require("@bg/docs/components/html");
          /*@jsxRuntime automatic @jsxImportSource react*/

          function _createMdxContent(props) {
            const _components = Object.assign({
              h1: "h1",
              p: "p",
              h2: "h2",
              ul: "ul",
              li: "li",
              h3: "h3"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "🔥 Essential UI"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Somos una libreria de componentes creado con ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "https://beyondjs.com/",
                  children: "BeyondJS"
                }), " por ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "https://github.com/veD-tnayrB",
                  children: "Bryant Caballero"
                }), " para ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "https://github.com/Essential-js",
                  children: "EssentialJS"
                }), "\r\nque busca quitar del medio la incomodidad de crear los componentes de siempre y ahorrarte tiempo tanto a ti como a tu equipo, en simples palabras ajilizamos el proceso de desarrollo de tus aplicaciones"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "✨ Caracteristicas principales."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Facil implementacion"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Implementable en proyectos con cualquier empaquetador"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Simple customizacion"
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Listos para su uso"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "🤔 Pero, como comenzar?"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Instala Essential-UI usando ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "https://www.npmjs.com/package/@essential-js/ui",
                  children: "npm:"
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: "npm i @essential-js/ui"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Luego, importa los componentes que necesites en tu aplicacion:"
              }), "\n", (0, _jsxRuntime.jsx)(_code.Code, {
                children: `import { Button } from '@essential-js/ui/buttons';`
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["O si quieres contribuir en la documentacion puedes hacerlo haciendo un fork al ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "https://github.com/Essential-js/ui-docs",
                  children: "repositorio"
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Lo tienes! Ahora puedes usar cualquier componente de en tu aplicacion."
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "📖 Documentacion"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Echale un ojo a la ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "https://essential-ui.netlify.app/",
                  children: "documentacion"
                }), " para mas informacion sobre como puedes implementar los componentes de Essential-UI"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "🤝❤ Contribuye"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Estamos felices de recibir contribuciones de la comunidad! Si lo que buscas es proponer futuros componentes para la libreria puedes hacerlo desde el ", (0, _jsxRuntime.jsx)(_html.ELink, {
                  href: "https://github.com/Essential-js/ui-docs/discussions/1",
                  children: "aqui"
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Gracias por usar Essential-UI!"
              })]
            });
          }
          function MDXContent(props = {}) {
            const {
              wrapper: MDXLayout
            } = props.components || {};
            return MDXLayout ? (0, _jsxRuntime.jsx)(MDXLayout, Object.assign({}, props, {
              children: (0, _jsxRuntime.jsx)(_createMdxContent, props)
            })) : _createMdxContent(props);
          }
          var _default = MDXContent;
          exports.default = _default;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 105983400,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.data = exports.Standars = exports.RunningBovino = exports.ReactTypes = exports.PrettierSettings = exports.Plugins = exports.NotFound = exports.Mailer = exports.Jview = exports.ImplementUnitTest = exports.HowToUse = exports.HowToInstallJadmin = exports.GmapsIntegration = exports.EssentialUi = exports.DevelopmentStandards = exports.DeployBgDocs = exports.DebugMobileApps = exports.ConfigureGit = exports.Components = exports.CompilationMobile = exports.CompilationBackend = exports.CompilacionQch = exports.ChartComponent = exports.BeyondUi = exports.AuthUser = exports.AuthSession = exports.AuthInstalation = void 0;
          var _notFound = require("./mdx/not-found.mdx");
          var _compilacionQch = require("./mdx/compilacion-qch/compilacion-qch.mdx");
          var _plugins = require("./mdx/plugins/plugins.mdx");
          var _howToUse = require("./mdx/how-to-use/how-to-use.mdx");
          var _components = require("./mdx/components/components.mdx");
          var _developmentProcess = require("./mdx/standards/development-process.mdx");
          var _authInstalation2 = require("./mdx/auth/auth-instalation.mdx");
          var _authSession2 = require("./mdx/auth/auth-session.mdx");
          var _authUser2 = require("./mdx/auth/auth-user.mdx");
          var _essentialUi = require("./mdx/ui-libraries/essential-ui.mdx");
          var _beyondUi = require("./mdx/ui-libraries/beyond-ui.mdx");
          var _mailer = require("./mdx/mailer/mailer.mdx");
          var _jview = require("./mdx/jview/jview.mdx");
          var _compilationBackendExternalPackages = require("./mdx/compilation-backend-external-packages/compilation-backend-external-packages.mdx");
          var _flujocompilacionmobile = require("./mdx/mobile-compilations/flujocompilacionmobile.mdx");
          var _configureGit = require("./mdx/configure-git/configure-git.mdx");
          var _debug_aplicaciones_moviles = require("./mdx/debug-mobile-apps/debug_aplicaciones_moviles.mdx");
          var _runningBovino = require("./mdx/running-bovino/running-bovino.mdx");
          var _prettierSettings = require("./mdx/prettier-settings/prettier-settings.mdx");
          var _howToInstallJadmin = require("./mdx/how-to-install-jadmin/how-to-install-jadmin.mdx");
          var _gmapsIntegration = require("./mdx/gmaps-integration/gmaps-integration.mdx");
          var _chartComponent = require("./mdx/chart-component/chart-component.mdx");
          var _reactTypes = require("./mdx/react-types/react-types.mdx");
          var _deployBgDocs = require("./mdx/deploy-bg-docs/deploy-bg-docs.mdx");
          var _implementUnitTest = require("./mdx/implement-unit-test/implement-unit-test.mdx");
          /*bundle*/ // EXPORTS
          const NotFound = _notFound.default;
          exports.NotFound = NotFound;
          /*bundle*/
          const CompilacionQch = _compilacionQch.default;
          exports.CompilacionQch = CompilacionQch;
          /*bundle*/
          const Plugins = _plugins.default;
          exports.Plugins = Plugins;
          /*bundle*/
          const HowToUse = _howToUse.default;
          exports.HowToUse = HowToUse;
          /*bundle*/
          const Components = _components.default;
          exports.Components = Components;
          /*bundle*/
          const DevelopmentStandards = _developmentProcess.default;
          exports.DevelopmentStandards = DevelopmentStandards;
          /*bundle*/
          const AuthInstalation = _authInstalation2.default;
          exports.AuthInstalation = AuthInstalation;
          /*bundle*/
          const AuthSession = _authSession2.default;
          exports.AuthSession = AuthSession;
          /*bundle*/
          const AuthUser = _authUser2.default;
          exports.AuthUser = AuthUser;
          /*bundle*/
          const EssentialUi = _essentialUi.default;
          exports.EssentialUi = EssentialUi;
          /*bundle*/
          const BeyondUi = _beyondUi.default;
          exports.BeyondUi = BeyondUi;
          /*bundle*/
          const Standars = _developmentProcess.default;
          exports.Standars = Standars;
          /*bundle*/
          const Mailer = _mailer.default;
          exports.Mailer = Mailer;
          /*bundle*/
          const Jview = _jview.default;
          exports.Jview = Jview;
          /*bundle*/
          const CompilationBackend = _compilationBackendExternalPackages.default;
          exports.CompilationBackend = CompilationBackend;
          /*bundle*/
          const CompilationMobile = _flujocompilacionmobile.default;
          exports.CompilationMobile = CompilationMobile;
          /*bundle*/
          const ConfigureGit = _configureGit.default;
          exports.ConfigureGit = ConfigureGit;
          /*bundle*/
          const DebugMobileApps = _debug_aplicaciones_moviles.default;
          exports.DebugMobileApps = DebugMobileApps;
          /*bundle*/
          const RunningBovino = _runningBovino.default;
          exports.RunningBovino = RunningBovino;
          /*bundle*/
          const PrettierSettings = _prettierSettings.default;
          exports.PrettierSettings = PrettierSettings;
          /*bundle*/
          const HowToInstallJadmin = _howToInstallJadmin.default;
          exports.HowToInstallJadmin = HowToInstallJadmin;
          /*bundle*/
          const GmapsIntegration = _gmapsIntegration.default;
          exports.GmapsIntegration = GmapsIntegration;
          /*bundle*/
          const ChartComponent = _chartComponent.default;
          exports.ChartComponent = ChartComponent;
          /*bundle*/
          const ReactTypes = _reactTypes.default;
          exports.ReactTypes = ReactTypes;
          /*bundle*/
          const DeployBgDocs = _deployBgDocs.default;
          exports.DeployBgDocs = DeployBgDocs;
          /*bundle*/
          const ImplementUnitTest = _implementUnitTest.default;
          exports.ImplementUnitTest = ImplementUnitTest;
          /*bundle*/
          const data = Array.from(Array(100)).map((_, index) => {
            return {
              user: `lorem ipsum ${index + 1}`,
              email: `lorem ipsum ${index + 1}`,
              id: '1',
              lastName: `lorem ipsum ${index + 1}`
            };
          });
          exports.data = data;
        }
      });

      /********************************
      INTERNAL MODULE: ./mdx/jview/data
      ********************************/

      ims.set('./mdx/jview/data', {
        hash: 1043929055,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.data = void 0;
          const data = Array.from(Array(100)).map((_, index) => {
            return {
              user: `lorem ipsum ${index + 1}`,
              email: `lorem ipsum ${index + 1}`,
              id: "1",
              lastName: `lorem ipsum ${index + 1}`
            };
          });
          exports.data = data;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "NotFound",
        "name": "NotFound"
      }, {
        "im": "./index",
        "from": "CompilacionQch",
        "name": "CompilacionQch"
      }, {
        "im": "./index",
        "from": "Plugins",
        "name": "Plugins"
      }, {
        "im": "./index",
        "from": "HowToUse",
        "name": "HowToUse"
      }, {
        "im": "./index",
        "from": "Components",
        "name": "Components"
      }, {
        "im": "./index",
        "from": "DevelopmentStandards",
        "name": "DevelopmentStandards"
      }, {
        "im": "./index",
        "from": "AuthInstalation",
        "name": "AuthInstalation"
      }, {
        "im": "./index",
        "from": "AuthSession",
        "name": "AuthSession"
      }, {
        "im": "./index",
        "from": "AuthUser",
        "name": "AuthUser"
      }, {
        "im": "./index",
        "from": "EssentialUi",
        "name": "EssentialUi"
      }, {
        "im": "./index",
        "from": "BeyondUi",
        "name": "BeyondUi"
      }, {
        "im": "./index",
        "from": "Standars",
        "name": "Standars"
      }, {
        "im": "./index",
        "from": "Mailer",
        "name": "Mailer"
      }, {
        "im": "./index",
        "from": "Jview",
        "name": "Jview"
      }, {
        "im": "./index",
        "from": "CompilationBackend",
        "name": "CompilationBackend"
      }, {
        "im": "./index",
        "from": "CompilationMobile",
        "name": "CompilationMobile"
      }, {
        "im": "./index",
        "from": "ConfigureGit",
        "name": "ConfigureGit"
      }, {
        "im": "./index",
        "from": "DebugMobileApps",
        "name": "DebugMobileApps"
      }, {
        "im": "./index",
        "from": "RunningBovino",
        "name": "RunningBovino"
      }, {
        "im": "./index",
        "from": "PrettierSettings",
        "name": "PrettierSettings"
      }, {
        "im": "./index",
        "from": "HowToInstallJadmin",
        "name": "HowToInstallJadmin"
      }, {
        "im": "./index",
        "from": "GmapsIntegration",
        "name": "GmapsIntegration"
      }, {
        "im": "./index",
        "from": "ChartComponent",
        "name": "ChartComponent"
      }, {
        "im": "./index",
        "from": "ReactTypes",
        "name": "ReactTypes"
      }, {
        "im": "./index",
        "from": "DeployBgDocs",
        "name": "DeployBgDocs"
      }, {
        "im": "./index",
        "from": "ImplementUnitTest",
        "name": "ImplementUnitTest"
      }, {
        "im": "./index",
        "from": "data",
        "name": "data"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'NotFound') && _export("NotFound", NotFound = require ? require('./index').NotFound : value);
        (require || prop === 'CompilacionQch') && _export("CompilacionQch", CompilacionQch = require ? require('./index').CompilacionQch : value);
        (require || prop === 'Plugins') && _export("Plugins", Plugins = require ? require('./index').Plugins : value);
        (require || prop === 'HowToUse') && _export("HowToUse", HowToUse = require ? require('./index').HowToUse : value);
        (require || prop === 'Components') && _export("Components", Components = require ? require('./index').Components : value);
        (require || prop === 'DevelopmentStandards') && _export("DevelopmentStandards", DevelopmentStandards = require ? require('./index').DevelopmentStandards : value);
        (require || prop === 'AuthInstalation') && _export("AuthInstalation", AuthInstalation = require ? require('./index').AuthInstalation : value);
        (require || prop === 'AuthSession') && _export("AuthSession", AuthSession = require ? require('./index').AuthSession : value);
        (require || prop === 'AuthUser') && _export("AuthUser", AuthUser = require ? require('./index').AuthUser : value);
        (require || prop === 'EssentialUi') && _export("EssentialUi", EssentialUi = require ? require('./index').EssentialUi : value);
        (require || prop === 'BeyondUi') && _export("BeyondUi", BeyondUi = require ? require('./index').BeyondUi : value);
        (require || prop === 'Standars') && _export("Standars", Standars = require ? require('./index').Standars : value);
        (require || prop === 'Mailer') && _export("Mailer", Mailer = require ? require('./index').Mailer : value);
        (require || prop === 'Jview') && _export("Jview", Jview = require ? require('./index').Jview : value);
        (require || prop === 'CompilationBackend') && _export("CompilationBackend", CompilationBackend = require ? require('./index').CompilationBackend : value);
        (require || prop === 'CompilationMobile') && _export("CompilationMobile", CompilationMobile = require ? require('./index').CompilationMobile : value);
        (require || prop === 'ConfigureGit') && _export("ConfigureGit", ConfigureGit = require ? require('./index').ConfigureGit : value);
        (require || prop === 'DebugMobileApps') && _export("DebugMobileApps", DebugMobileApps = require ? require('./index').DebugMobileApps : value);
        (require || prop === 'RunningBovino') && _export("RunningBovino", RunningBovino = require ? require('./index').RunningBovino : value);
        (require || prop === 'PrettierSettings') && _export("PrettierSettings", PrettierSettings = require ? require('./index').PrettierSettings : value);
        (require || prop === 'HowToInstallJadmin') && _export("HowToInstallJadmin", HowToInstallJadmin = require ? require('./index').HowToInstallJadmin : value);
        (require || prop === 'GmapsIntegration') && _export("GmapsIntegration", GmapsIntegration = require ? require('./index').GmapsIntegration : value);
        (require || prop === 'ChartComponent') && _export("ChartComponent", ChartComponent = require ? require('./index').ChartComponent : value);
        (require || prop === 'ReactTypes') && _export("ReactTypes", ReactTypes = require ? require('./index').ReactTypes : value);
        (require || prop === 'DeployBgDocs') && _export("DeployBgDocs", DeployBgDocs = require ? require('./index').DeployBgDocs : value);
        (require || prop === 'ImplementUnitTest') && _export("ImplementUnitTest", ImplementUnitTest = require ? require('./index').ImplementUnitTest : value);
        (require || prop === 'data') && _export("data", data = require ? require('./index').data : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfanN4UnVudGltZSIsImpzeCIsIl9jb21wb25lbnRzIiwiY29kZSIsIl9odG1sIiwiRUxpbmsiLCJfY29kZSIsIklubGluZUNvZGUiLCJzdHJvbmciLCJlbSIsIkNvZGUiLCJqc3hzIiwib2wiLCJwIiwidWwiLCJhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwicmVxdWlyZSIsIl9jcmVhdGVNZHhDb250ZW50IiwicHJvcHMiLCJGcmFnbWVudCIsIk1EWENvbnRlbnQiLCJ3cmFwcGVyIiwiTURYTGF5b3V0IiwiY29tcG9uZW50cyIsImFzc2lnbiIsImNoaWxkcmVuIiwiX2RlZmF1bHQiLCJfbm90Rm91bmQiLCJfY29tcGlsYWNpb25RY2giLCJfcGx1Z2lucyIsIl9ob3dUb1VzZSIsIl9kZXZlbG9wbWVudFByb2Nlc3MiLCJfYXV0aEluc3RhbGF0aW9uMiIsIl9hdXRoU2Vzc2lvbjIiLCJfYXV0aFVzZXIyIiwiX2Vzc2VudGlhbFVpIiwiX2JleW9uZFVpIiwiX21haWxlciIsIl9qdmlldyIsIl9jb21waWxhdGlvbkJhY2tlbmRFeHRlcm5hbFBhY2thZ2VzIiwiX2ZsdWpvY29tcGlsYWNpb25tb2JpbGUiLCJfY29uZmlndXJlR2l0IiwiX2RlYnVnX2FwbGljYWNpb25lc19tb3ZpbGVzIiwiX3J1bm5pbmdCb3Zpbm8iLCJfcHJldHRpZXJTZXR0aW5ncyIsIl9ob3dUb0luc3RhbGxKYWRtaW4iLCJfZ21hcHNJbnRlZ3JhdGlvbiIsIl9jaGFydENvbXBvbmVudCIsIl9yZWFjdFR5cGVzIiwiX2RlcGxveUJnRG9jcyIsIl9pbXBsZW1lbnRVbml0VGVzdCIsIk5vdEZvdW5kIiwiQ29tcGlsYWNpb25RY2giLCJQbHVnaW5zIiwiSG93VG9Vc2UiLCJDb21wb25lbnRzIiwiRGV2ZWxvcG1lbnRTdGFuZGFyZHMiLCJBdXRoSW5zdGFsYXRpb24iLCJBdXRoU2Vzc2lvbiIsIkF1dGhVc2VyIiwiRXNzZW50aWFsVWkiLCJCZXlvbmRVaSIsIlN0YW5kYXJzIiwiTWFpbGVyIiwiSnZpZXciLCJDb21waWxhdGlvbkJhY2tlbmQiLCJDb21waWxhdGlvbk1vYmlsZSIsIkNvbmZpZ3VyZUdpdCIsIkRlYnVnTW9iaWxlQXBwcyIsIlJ1bm5pbmdCb3Zpbm8iLCJQcmV0dGllclNldHRpbmdzIiwiSG93VG9JbnN0YWxsSmFkbWluIiwiR21hcHNJbnRlZ3JhdGlvbiIsIkNoYXJ0Q29tcG9uZW50IiwiUmVhY3RUeXBlcyIsIkRlcGxveUJnRG9jcyIsIkltcGxlbWVudFVuaXRUZXN0IiwiZGF0YSIsIkFycmF5IiwiZnJvbSIsIm1hcCIsIl8iLCJpbmRleCIsInVzZXIiLCJlbWFpbCIsImlkIiwibGFzdE5hbWUiXSwic291cmNlcyI6WyIvbWR4L2F1dGgvbWR4XFxhdXRoXFxhdXRoLWluc3RhbGF0aW9uLm1keCIsIi9tZHgvYXV0aC9tZHhcXGF1dGhcXGF1dGgtc2Vzc2lvbi5tZHgiLCIvbWR4L2F1dGgvbWR4XFxhdXRoXFxhdXRoLXVzZXIubWR4IiwiL21keC9jaGFydC1jb21wb25lbnQvbWR4XFxjaGFydC1jb21wb25lbnRcXGNoYXJ0LWNvbXBvbmVudC5tZHgiLCIvbWR4L2NvbXBpbGFjaW9uLXFjaC9tZHhcXGNvbXBpbGFjaW9uLXFjaFxcY29tcGlsYWNpb24tcWNoLm1keCIsIi9tZHgvY29tcGlsYXRpb24tYmFja2VuZC1leHRlcm5hbC1wYWNrYWdlcy9tZHhcXGNvbXBpbGF0aW9uLWJhY2tlbmQtZXh0ZXJuYWwtcGFja2FnZXNcXGNvbXBpbGF0aW9uLWJhY2tlbmQtZXh0ZXJuYWwtcGFja2FnZXMubWR4IiwiL21keC9jb21wb25lbnRzL21keFxcY29tcG9uZW50c1xcY29tcG9uZW50cy5tZHgiLCIvbWR4L2NvbmZpZ3VyZS1naXQvbWR4XFxjb25maWd1cmUtZ2l0XFxjb25maWd1cmUtZ2l0Lm1keCIsIi9tZHgvZGVidWctbW9iaWxlLWFwcHMvbWR4XFxkZWJ1Zy1tb2JpbGUtYXBwc1xcZGVidWdfYXBsaWNhY2lvbmVzX21vdmlsZXMubWR4IiwiL21keC9kZXBsb3ktYmctZG9jcy9tZHhcXGRlcGxveS1iZy1kb2NzXFxkZXBsb3ktYmctZG9jcy5tZHgiLCIvbWR4L2dtYXBzLWludGVncmF0aW9uL21keFxcZ21hcHMtaW50ZWdyYXRpb25cXGdtYXBzLWludGVncmF0aW9uLm1keCIsIi9tZHgvaG93LXRvLWluc3RhbGwtamFkbWluL21keFxcaG93LXRvLWluc3RhbGwtamFkbWluXFxob3ctdG8taW5zdGFsbC1qYWRtaW4ubWR4IiwiL21keC9ob3ctdG8tdXNlL21keFxcaG93LXRvLXVzZVxcaG93LXRvLXVzZS5tZHgiLCIvbWR4L2ltcGxlbWVudC11bml0LXRlc3QvbWR4XFxpbXBsZW1lbnQtdW5pdC10ZXN0XFxpbXBsZW1lbnQtdW5pdC10ZXN0Lm1keCIsIi9tZHgvanZpZXcvbWR4XFxqdmlld1xcanZpZXcubWR4IiwiL21keC9tYWlsZXIvbWR4XFxtYWlsZXJcXG1haWxlci5tZHgiLCIvbWR4L21vYmlsZS1jb21waWxhdGlvbnMvbWR4XFxtb2JpbGUtY29tcGlsYXRpb25zXFxmbHVqb2NvbXBpbGFjaW9ubW9iaWxlLm1keCIsIi9tZHgvbWR4XFxub3QtZm91bmQubWR4IiwiL21keC9wbHVnaW5zL21keFxccGx1Z2luc1xccGx1Z2lucy5tZHgiLCIvbWR4L3ByZXR0aWVyLXNldHRpbmdzL21keFxccHJldHRpZXItc2V0dGluZ3NcXHByZXR0aWVyLXNldHRpbmdzLm1keCIsIi9tZHgvcmVhY3QtdHlwZXMvbWR4XFxyZWFjdC10eXBlc1xccmVhY3QtdHlwZXMubWR4IiwiL21keC9ydW5uaW5nLWJvdmluby9tZHhcXHJ1bm5pbmctYm92aW5vXFxydW5uaW5nLWJvdmluby5tZHgiLCIvbWR4L3N0YW5kYXJkcy9tZHhcXHN0YW5kYXJkc1xcZGV2ZWxvcG1lbnQtcHJvY2Vzcy5tZHgiLCIvbWR4L3RyYWluaW5nL2luZGV4Lm1keCIsIi9tZHgvdWktbGlicmFyaWVzL21keFxcdWktbGlicmFyaWVzXFxiZXlvbmQtdWkubWR4IiwiL21keC91aS1saWJyYXJpZXMvbWR4XFx1aS1saWJyYXJpZXNcXGVzc2VudGlhbC11aS5tZHgiLCIvaW5kZXgudHMiLCIvbWR4L2p2aWV3L2RhdGEudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdFOzswQkFFRjs7OzsrQkFFSSxpSkFBQUEsV0FBQSxDQUFBQyxHQUFBLEVBQUFDLFdBQUEsQ0FBQUMsSUFBQTtnQ0FBeUk7d0JBQWUsYUFBQUgsV0FBQSxDQUFBQyxHQUFBLEVBQUFDLFdBQUEsQ0FBQUMsSUFBQTtnQ0FBSzt3QkFBUyxrQkFBQUgsV0FBQSxDQUFBQyxHQUFBLEVBQUFDLFdBQUEsQ0FBQUMsSUFBQTtnQ0FBVTt3QkFBbUQsYUFBQUgsV0FBQSxDQUFBQyxHQUFBLEVBQUFDLFdBQUEsQ0FBQUMsSUFBQTtnQ0FBSzs7Ozs7OEJBRXhPOzs7OzBCQUVEOzsyQkFFSCx1SUFBQUgsV0FBQSxDQUFBQyxHQUFBLEVBQUFHLEtBQUEsQ0FBQUMsS0FBQTs7NEJBQTRLO29CQUFpQjs7MEJBRTFMOzswQkFFSDs7Ozs4QkFFSTs7OzsrQkFFQSxxRUFBQUwsV0FBQSxDQUFBQyxHQUFBLEVBQUFLLEtBQUEsQ0FBQUMsVUFBQTtnQ0FBeUU7d0JBQW1CLGtFQUFBUCxXQUFBLENBQUFDLEdBQUEsRUFBQUssS0FBQSxDQUFBQyxVQUFBO2dDQUFzRTt3QkFBMEIsbUJBQUFQLFdBQUEsQ0FBQUMsR0FBQSxFQUFBSyxLQUFBLENBQUFDLFVBQUE7Z0NBQXVCO3dCQUE2QyxZQUFBUCxXQUFBLENBQUFDLEdB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