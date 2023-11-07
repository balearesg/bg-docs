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
      }, _context.meta.url).package('en');
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./txt
      *********************/
      ims.set('./txt', {
        hash: 11019132,
        creator: function (require, exports) {
          exports.txt = {
            "title": "OPERATIONS LIST",
            "product": "Product",
            "date": "Date",
            "status": "Status",
            "active": "Active",
            "inactive": "Inactive",
            "massivePayment": "Massive payment",
            "massApproval": "mass approval",
            "new": "New operation",
            "operationNumber": "Operation number",
            "statusTexts": {
              "2": "Initial",
              "3": "Pending",
              "4": "Approved",
              "5": "Paid",
              "6": "In process",
              "7": "Closed",
              "8": "Cancelled",
              "9": "Payment rejected",
              "10": "Pending payment"
            },
            "state": "State",
            "image": "Image",
            "brand": "Brand",
            "size": "Size",
            "category": "Category",
            "salePrice": "Sale Price",
            "purchasePrice": "Price of the purchase",
            "buyPrice": "Buy price",
            "discountCoupon": "Discount coupon",
            "store": "Store",
            "operator": "Operator",
            "quantity": "Quantity",
            "addComments": "ADD COMMENTS",
            "noComments": "There are no comments",
            "comments": "Comments",
            "edit": {
              "edit": "Edit",
              "operation": "Operation",
              "product": "Product",
              "accept": "Accept"
            },
            "caption": "Caption",
            "empty": "There is no value in this field",
            "approvals": "Do you want to approve the set of operations ?",
            "approval": "Do you want to approve the operation ?",
            "datePayment": "Date payment methods",
            "paymentMethods": "Payment methods",
            "transactionNumber": "Transaction number",
            "titlePayment": "Operation payment",
            "titlePayments": "Operation payment",
            "accept": "Accept",
            "massiveApprovals": "The operations were approved correctly",
            "massiveApproval": "The operation were approved correctly",
            "massivePay": "The operation was paid correctly",
            "massivePays": "The operations were paid correctly",
            "massiveCancel": "The operation was canceled correctly",
            "massiveCancels": "The operations were canceled correctly",
            "details": "Details",
            "find": "Find",
            "selectionPanel": "Selection panel",
            "last4Digits": "Last 4 digits",
            "tax": "Tax",
            "dateTime": "Estimated date",
            "headerApproval": {
              "item": "image",
              "color": "Color",
              "size": "Size",
              "brand": "Brand",
              "quantity": "Quantity"
            },
            "approvalButton": "Approval",
            "card": "Card",
            "waringQuantity": "There are operations with no assigned quantity",
            "add": "Add",
            "errorCard": "The credit card already exists",
            "errorLast4Digits": "Must have four characters"
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