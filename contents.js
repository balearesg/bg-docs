System.register(["@beyond-js/kernel@0.1.7/bundle", "react@18.2.0/jsx-runtime"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, NotFound, CompilacionQch, Plugins, HowToUse, __beyond_pkg, hmr;
  _export({
    NotFound: void 0,
    CompilacionQch: void 0,
    Plugins: void 0,
    HowToUse: void 0
  });
  return {
    setters: [function (_beyondJsKernel017Bundle) {
      dependency_0 = _beyondJsKernel017Bundle;
    }, function (_react1820JsxRuntime) {
      dependency_1 = _react1820JsxRuntime;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-widgets", "18.21.1"], ["@bgroup/ui", "0.0.28"], ["@mdx-js/mdx", "2.2.1"], ["@mdx-js/react", "2.2.1"], ["socket.io-client", "4.5.4"], ["@bg/docs", "1.0.0"], ["@bg/docs", "1.0.0"]]);
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
      __pkg.dependencies.update([['react/jsx-runtime', dependency_1]]);
      ims = new Map();
      /*********************************************************
      INTERNAL MODULE: ./mdx/compilacion-qch/compilacion-qch.mdx
      *********************************************************/
      ims.set('./mdx/compilacion-qch/compilacion-qch.mdx', {
        hash: 118881579,
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
              a: "a",
              code: "code",
              h3: "h3"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "PASOS PARA ACTUALIZAR ENTORNO DE DESARROLLO DE QCH"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["1.- Descargar ", (0, _jsxRuntime.jsx)(_components.a, {
                  href: "https://source.cloud.google.com/socites-customers/qch_app",
                  children: "respositorio"
                }), " branch ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "master"
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["2.- Ingresar en ", (0, _jsxRuntime.jsx)(_components.a, {
                  href: "https://console.cloud.google.com/compute/instances",
                  children: "clound"
                })]
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["3.- Seleccionar proyecto: ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "jida-services-apps"
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "4.- Visualizar VM jida-service-dev"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "5.- Ingresar en maquina virtual presionando el boton de SSH"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "6.- Luego de ingresar, escribir el comando sudo su"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "7.- Navegar al directorio de la aplicacion mediante el comando cd /var/www/qch_app/qch_app"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "8.- En el codigo local, validar que no exista la carpeta build dentro del directorio apps/app y en caso de existir, eliminarla."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "9.- Reiniciar el servicio y entrar en localhost:3020"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "10.- Sobre la aplicacion presionar el 2do boton de derecha a izquierda."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "11.- Seleccionar tipo de compilacion \"web\", marcar el radio buttom \"Do you want to compress\" y presionar boton \"Build Client\"."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "12.- Esperar a que el proceso termine (de una vez aparece una modal que dice que ya la compilacion termino, pero en realidad eso es un bug, hay que ir haciendo scroll sobre las lineas que van a apareciendo y al final dice done)."
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "13.- Una vez finalizada la compilacion, el codigo compilado se encontrara en el directorio \"builds/client/web-production/code\"."
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

      /***********************************************
      INTERNAL MODULE: ./mdx/how-to-use/how-to-use.mdx
      ***********************************************/

      ims.set('./mdx/how-to-use/how-to-use.mdx', {
        hash: 4051544630,
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
              a: "a",
              h3: "h3",
              ul: "ul",
              strong: "strong",
              pre: "pre"
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
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.code, {
                  children: "git clone https://github.com/balearesg/bg-docs.git"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "2",
                children: ["\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Hacer las instalaciones correspondientes:"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.code, {
                  children: "cd project"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.code, {
                  children: "npm i"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.h2, {
                children: "🔥 Agregar tu contenido"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Para agregar la pagina que quieras en bg-docs tu contenido debe seguir unas directrices:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Tiene que estar escrito en ", (0, _jsxRuntime.jsx)(_components.a, {
                    href: "https://dillinger.io/",
                    children: "markdown"
                  })]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Tiene que estar en formato ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: ".mdx"
                  })]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Debe seguir los estandares de diseño de bg-docs (usar componentes existentes en caso de ser necesario)"
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Unas vez cumplidas estas simples pautas podemos comenzar a listar los pasos a seguir:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Los contenidos en bg-docs se posicionan en ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "project\\modules\\content\\mdx"
                }), " siguiendo una estructura basada en el contenido propio y dependiendo del caso esta puede ser un conjunto de archivos si el contenido se divide en partes, o si es solo una pagina un simple archivo, veamoslo con ejemplos:"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Ejemplo de implementacion con una unica pagina:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Nos dirigimos a la ruta donde se establecen los contenidos (", (0, _jsxRuntime.jsx)(_components.code, {
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
                    children: ["dentro pondremos el contenido en formato ", (0, _jsxRuntime.jsx)(_components.code, {
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
                children: "Ejemplo de implementacion con un conjunto de paginas:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["Nos dirigimos a la ruta donde se establecen los contenidos (", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "project\\modules\\content\\mdx"
                    }), ")"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["creamos una carpeta con el nombre de nuestro tema a tratar por ejemplo ", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "files-naming"
                    })]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["dentro pondremos los contenido en formato ", (0, _jsxRuntime.jsx)(_components.code, {
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
                children: "⛏ Disponibilizacion de paginas:"
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Ahora viene la parte en la que hacemos que nuestra pagina forme parte de bg-docs:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Nos dirigimos a ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "project\\modules\\content\\index.ts"
                  }), "."]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Ahi dentro se encuentras las importaciones y exportaciones de los contenidos de bg-docs."
              }), "\n", (0, _jsxRuntime.jsxs)(_components.p, {
                children: ["Lo que debemos hacer es tomar la ubicacion de nuestro/s contenido/s con respecto al archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                  children: "index.ts"
                })]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: "Podremos ver que el archivo se divide en dos secciones"
              }), "\n", (0, _jsxRuntime.jsx)(_components.pre, {
                children: (0, _jsxRuntime.jsx)(_components.code, {
                  children: "// Imports\r\n...\r\n\r\n// Exports\r\n...\n"
                })
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                start: "2",
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Vamos a irnos a la seccion imports y en el final de las importaciones (justo antes de que comience la seccion ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "// Exports"
                  }), ") vamos a agregar:"]
                }), "\n"]
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.code, {
                  children: "import {default as __gettingStarted } from ./mdx/getting-started-folder/getting-started.mdx"
                })
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
              }), "\n", (0, _jsxRuntime.jsx)(_components.p, {
                children: (0, _jsxRuntime.jsx)(_components.code, {
                  children: "export /*bundle*/ const GettingStarted = __gettingStarted;"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Ya casi estamos! Solo quedaria disponibilizar nuestro contenido en el menu para que pueda ser accedido por otros"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ol, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Nos dirigimos al archivo ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "project\\project.json"
                  })]
                }), "\n", (0, _jsxRuntime.jsx)(_components.li, {
                  children: "Lo abrimos"
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["Nos vamos a la linea ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "16"
                  }), "como podemos ver nos encontraremos una propiedad ", (0, _jsxRuntime.jsx)(_components.code, {
                    children: "sidebarItems"
                  }), " que es un array que contiene los items que aparecen en el menu"]
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
              }), "\n", (0, _jsxRuntime.jsx)(_components.pre, {
                children: (0, _jsxRuntime.jsx)(_components.code, {
                  children: "{\"label\": \"Nombre del menu que querramos agregar\", \"path\": \"/getting-started\"}\n"
                })
              }), "\n", (0, _jsxRuntime.jsx)(_components.h3, {
                children: "Se quiere agregar una pagina con submenues (con sub contenidos)"
              }), "\n", (0, _jsxRuntime.jsx)(_components.pre, {
                children: (0, _jsxRuntime.jsx)(_components.code, {
                  children: "{\r\n    \"label\": \"Nombre del menu que querramos agregar\",\r\n    \"path\": \"path de la pagina que queremso que aparezca cuando cliqueemos la opcion, puede ser otra pagina o una pagina introductoria\",\r\n    \"children\": [\r\n        {\r\n            label: 'Nombre de Sub pagina',\r\n            path: \"/primera-parte-del-nombre-del-export\",\r\n            \"subPath\": \"/  segunda-parte-del-nombre-del-export\"\r\n        }\r\n    ]\r\n}\n"
                })
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
        hash: 4193754557,
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
              ul: "ul",
              li: "li",
              p: "p",
              strong: "strong",
              pre: "pre",
              code: "code"
            }, props.components);
            return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)(_components.h1, {
                children: "listado de plugins:"
              }), "\n", (0, _jsxRuntime.jsxs)(_components.ul, {
                children: ["\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "cordova-plugin-androidx-adapter:"
                    }), " https://www.npmjs.com/package/cordova-plugin-androidx-adapter\r\nPlugin que sirve para integrar aplicaciones que usen la libreria de android support y androidX"]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "goiarlabs/cordova-plugin-file-transfer:"
                    }), " https://www.npmjs.com/package/@goiarlabs/cordova-plugin-file-transfer\r\nPlugin que sirve para permitir subidas y descargas de archivos."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "cordova-plugin-geolocation:"
                    }), " https://www.npmjs.com/package/cordova-plugin-geolocation\r\nPlugin que provee informacion sobre la geolocalizacion del dispositivo."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "cordova-plugin-media:"
                    }), " https://www.npmjs.com/package/cordova-plugin-media\r\nPlugin que permite grabar y reproducir archivos de audio en el dispositivo."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "cordova-plugin-network-information:"
                    }), " https://www.npmjs.com/package/cordova-plugin-network-information\r\nPlugin que provee la informacion de conexion del dispositivo."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "cordova-plugin-splashscreen:"
                    }), " https://www.npmjs.com/package/cordova-plugin-splashscreen\r\nEste plugin permite mostrar y ocultar el splashscreen mientras la aplicacion esta iniciandose."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "cordova-plugin-vibration:"
                    }), " https://www.npmjs.com/package/cordova-plugin-vibration\r\nlugin que habilita la vibracion nativa del dispositivo."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "cordova-plugin-startapp:"
                    }), " https://www.npmjs.com/package/cordova-plugin-startapp\r\nPlugin que permite abrir otras aplicaciones dentro de una aplicacion."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "cordova-plugin-market:"
                    }), " https://www.npmjs.com/package/cordova-plugin-market\r\nPlugin que habilita la redireccion al market de la aplicacion, ya sea android o ios."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "cordova-plugin-background-mode:"
                    }), " https://www.npmjs.com/package/cordova-plugin-background-mode\r\nPlugin que permite a la app seguir funcionando mientras está en 2do plano."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "cordova-plugin-inappbrowser:"
                    }), " https://www.npmjs.com/package/cordova-plugin-inappbrowser\r\nPlugin que habilita abrir un navegador dentro de la aplicacion."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "cordova-plugin-app-version:"
                    }), " https://www.npmjs.com/package/cordova-plugin-app-version\r\nPlugin que provee informacion de la version de la aplicacion."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "cordova-plugin-local-notification:"
                    }), " https://www.npmjs.com/package/cordova-plugin-local-notification --Este Plugin no funciona con cordova-plugin-firebasex\r\nPlugin que habilita notificaciones locales, es decir, habilita notificaciones en 1er plano."]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: [(0, _jsxRuntime.jsx)(_components.strong, {
                      children: "cordova-plugin-firebasex:"
                    }), " https://www.npmjs.com/package/cordova-plugin-firebasex\r\nPlugin que permite recibir notificaciones push."]
                  }), "\n", (0, _jsxRuntime.jsx)(_components.pre, {
                    children: (0, _jsxRuntime.jsx)(_components.code, {
                      children: "{\r\n    VERSION: 14.2.1,\r\n    IMPORTAN INFORMATION FOR A ICON IMAGE :https://github.com/dpa99c/cordova-plugin-firebasex#android-default-notification-icon\r\n}\n"
                    })
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "cordova-plugin-file-opener2: https://www.npmjs.com/package/cordova-plugin-file-opener2\r\nPlugin que permite la apertura de diversos archivos dentro de la aplicacion."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "cordova-plugin-x-socialsharing: https://www.npmjs.com/package/cordova-plugin-x-socialsharing\r\nPlugin que habilita el compartir nativo del dispositivo para ser usado por la aplicacion."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "cordova-plugin-facebook-connect: https://www.npmjs.com/package/cordova-plugin-facebook-connect\r\nPlugin que permite integrarse con la aplicacion en Facebook, es util para habilitar pixel."
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsxs)(_components.p, {
                    children: ["cordova-plugin-deeplinks: https://www.npmjs.com/package/cordova-plugin-deeplinks\r\nPlugin que permite la redireccion de deeplinks a la aplicacion.\r\n", (0, _jsxRuntime.jsx)(_components.code, {
                      children: "{ VERSION: 1.1.1, IMPORTAN INFORMATION FOR A IMPLEMENTATION: IOS:https://www.npmjs.com/package/cordova-plugin-deeplinks#ios-web-integration ANDROID:https://www.npmjs.com/package/cordova-plugin-deeplinks#android-web-integration }"
                    })]
                  }), "\n"]
                }), "\n", (0, _jsxRuntime.jsxs)(_components.li, {
                  children: ["\n", (0, _jsxRuntime.jsx)(_components.p, {
                    children: "cordova-plugin-bluetooth-serial: https://www.npmjs.com/package/cordova-plugin-bluetooth-serial\r\nPlugin que permite conectarse a dispositivos bluetooth"
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

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 92784614,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Plugins = exports.NotFound = exports.HowToUse = exports.CompilacionQch = void 0;
          var _notFound = require("./mdx/not-found.mdx");
          var _compilacionQch = require("./mdx/compilacion-qch/compilacion-qch.mdx");
          var _plugins = require("./mdx/plugins/plugins.mdx");
          var _howToUse = require("./mdx/how-to-use/how-to-use.mdx");
          /*bundle*/ // IMPORTS

          // EXPORTS
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFBRTs7MkJBRUY7OzRCQUFlO29CQUF3RTs7OzsyQkFFdkY7OzRCQUFpQjs7OzJCQUVqQjs7OzswQkFFQTs7MEJBRUE7OzBCQUVBOzswQkFFQTs7MEJBRUE7OzBCQUVBOzswQkFFQTs7MEJBRUE7OzBCQUVBOzswQkFFQTs7MEJBRUE7OzBCQUVBOzswQkFFQTs7MEJBRUk7OzBCQUVKOzswQkFHSTs7MEJBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJDekNFOzswQkFFRjs7MEJBSUc7OzBCQUVIOzs7NEJBRUc7Ozs7Ozs7Ozs0QkFJQTs7Ozs7Ozs7Ozs7MEJBTUE7OzBCQUVIOzs7NkJBRUc7OzhCQUE0Qjs7OzZCQUM1Qjs7Ozs0QkFDQTs7OzBCQUVIOzsyQkFFQTs7b0JBQXdFOzswQkFFcEU7Ozs7K0JBRUQ7O3dCQUF5Rjs7OzsrQkFFekY7Ozs7OzsrQkFFQTs7d0JBQThDOzs7Ozs2QkFFN0M7OztrQ0FDTTs7OztzQ0FDSTs7Ozs7Ozs7MEJBRVg7Ozs7K0JBRUE7O3dCQUF5Rjs7OzsrQkFFekY7Ozs7OzsrQkFFQTs7d0JBQStDOzs7Ozs2QkFFOUM7OztrQ0FDTTs7OztzQ0FDSTs7OztzQ0FDQTs7OztzQ0FDQTs7Ozs7Ozs7OzRCQUVaO29CQUFXOzswQkFFVDs7MEJBRUo7Ozs2QkFFRzs7c0JBQWtEOzs7MEJBRXJEOzsyQkFFQTs7OzswQkFFQTs7Ozs7Ozs7NkJBVUc7O3NCQUEwSDs7Ozs7OzsyQkFJN0g7O29CQUF3Qjs7b0JBQWtFOztvQkFBc0Q7O29CQUF1Rjs7OzsyQkFFdk87O29CQUE0Qzs7Ozs7OzBCQUl4Qzs7OzZCQUVEOzs7OzRCQUNBOzs2QkFDQTs7c0JBQXlCOztzQkFBK0Q7OzRCQUN4Rjs7OzBCQUVIOzs7NEJBRUk7OzRCQUNBOzs7MEJBRUE7OzBCQUVKOzs7Ozs7MEJBTUk7Ozs7OzsyQkFnQko7O29CQUFxRzs7MEJBRWpHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkNoSUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQ0FFOzs7OztnQ0FFSTt3QkFBa0M7Ozs7O2dDQUdsQzt3QkFBeUM7Ozs7O2dDQUd6Qzt3QkFBNkI7Ozs7O2dDQUc3Qjt3QkFBdUI7Ozs7O2dDQUV2Qjt3QkFBcUM7Ozs7O2dDQUVyQzt3QkFBOEI7Ozs7O2dDQUU5Qjt3QkFBMkI7Ozs7O2dDQUczQjt3QkFBMEI7Ozs7O2dDQUUxQjt3QkFBd0I7Ozs7O2dDQUV4Qjt3QkFBaUM7Ozs7O2dDQUVqQzt3QkFBOEI7Ozs7O2dDQUU5Qjt3QkFBNkI7Ozs7O2dDQUU3Qjt3QkFBb0M7Ozs7O2dDQUVwQzt3QkFBMkI7Ozs7Ozs7OzhCQVE3Qjs7Ozs4QkFFQTs7Ozs4QkFFQTs7OzsrQkFFQTs7Ozs7OzhCQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JESjtVQUNBO1VBQ0E7VUFDQTtVQUdPLFdBUFA7O1VBTUE7VUFDa0IsTUFBTUEsUUFBUSxHQUFHQyxpQkFBVTtVQUFDQztVQUN2QztVQUFXLE1BQU1DLGNBQWMsR0FBR0MsdUJBQWdCO1VBQUNGO1VBQ25EO1VBQVcsTUFBTUcsT0FBTyxHQUFHQyxnQkFBUztVQUFDSjtVQUNyQztVQUFXLE1BQU1LLFFBQVEsR0FBR0MsaUJBQVU7VUFBQ04iLCJuYW1lcyI6WyJOb3RGb3VuZCIsIl9fbm90Rm91bmQiLCJleHBvcnRzIiwiQ29tcGlsYWNpb25RY2giLCJfX2NvbXBpbGFjaW9uUWNoIiwiUGx1Z2lucyIsIl9fcGx1Z2lucyIsIkhvd1RvVXNlIiwiX19ob3dUb1VzZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsibWR4L2NvbXBpbGFjaW9uLXFjaC9tZHhcXGNvbXBpbGFjaW9uLXFjaFxcY29tcGlsYWNpb24tcWNoLm1keCIsIm1keC9ob3ctdG8tdXNlL21keFxcaG93LXRvLXVzZVxcaG93LXRvLXVzZS5tZHgiLCJtZHgvbWR4XFxub3QtZm91bmQubWR4IiwibWR4L3BsdWdpbnMvbWR4XFxwbHVnaW5zXFxwbHVnaW5zLm1keCIsImluZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=