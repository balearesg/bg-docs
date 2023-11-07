System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, txt, __beyond_pkg, hmr;
  _export("txt", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
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
          "vspecifier": "@bg/docs@1.0.0/layout/main",
          "multibundle": true
        },
        "type": "txt"
      }, _context.meta.url).package('es');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 321675982,
        creator: function (require, exports) {
          exports.txt = {
            "title": "LISTADO DE OPERACIONES",
            "product": "Producto",
            "date": "Fecha",
            "status": "Estado",
            "active": "Activo",
            "inactive": "Inactivo",
            "massivePayment": "Pago masivo",
            "massApproval": "Aprobación masiva",
            "new": "Nueva operación",
            "operationNumber": "Número de operación",
            "statusTexts": {
              "2": "Inicial",
              "3": "Pendiente",
              "4": "Aprobada",
              "5": "Pagada",
              "6": "En proceso",
              "7": "Cerrada",
              "8": "Cancelada",
              "9": "Pago rechazado",
              "10": "Pendiente de pago "
            },
            "salePrice": "Precio de venta",
            "purchasePrice": "Precio de compra",
            "buyPrice": "Precio de compra",
            "discountCoupon": "Cupón de descuento",
            "state": "Estado",
            "image": "Imagen",
            "brand": "Marca",
            "size": "Talla",
            "category": "Categoría",
            "store": "Tienda",
            "operator": "Operador",
            "quantity": "Cantidad",
            "addComments": "AGREGAR COMENTARIOS",
            "noComments": "No existen comentarios",
            "comments": "Comentarios",
            "edit": {
              "edit": "Editar",
              "operation": "de operación ",
              "product": "Producto",
              "accept": "Aceptar"
            },
            "caption": "Leyendas",
            "empty": "No posee valor en este campo",
            "approvals": "¿Desea aprobar el conjunto de operaciones?",
            "approval": "¿Desea aprobar la operación?",
            "datePayment": "Fecha métodos de pago",
            "paymentMethods": "Métodos de pago",
            "transactionNumber": "Número de transacción",
            "titlePayment": "Pago de operación",
            "titlePayments": "Pago de operaciones",
            "accept": "Aceptar",
            "massiveApprovals": "Las operaciones fueron aprobadas correctamente",
            "massiveApproval": "La operación fue aprobada correctamente",
            "massivePay": "La operación fue pagada correctamente",
            "massivePays": "Las operaciones fueron pagadas correctamente",
            "massiveCancel": "La operación fue cancelada correctamente",
            "massiveCancels": "Las operaciones fueron canceladas correctamente",
            "details": "Detalles",
            "find": "Buscar",
            "selectionPanel": "Panel de selección",
            "last4Digits": "Últimos 4 dígitos",
            "tax": "Impuesto",
            "dateTime": "Fecha estimada",
            "declinedPayment": "Pago rechazado correctamente",
            "declinedPayments": "Los pagos fueron rechazadas correctamente",
            "headerApproval": {
              "item": "Imagen",
              "color": "Color",
              "size": "Talla",
              "brand": "Marca",
              "quantity": "Cantidad"
            },
            "approvalButton": "Aprobar",
            "card": "Tarjeta",
            "waringQuantity": "Hay operaciones sin cantidad asignada",
            "add": "Añadir",
            "errorCard": "La tarjeta de crédito ya existe",
            "errorLast4Digits": "Debe tener cuatro caracteres"
          };
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./txt",
        "from": "txt",
        "name": "txt"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'txt') && _export("txt", txt = require ? require('./txt').txt : value);
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