System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@socket.io/component-emitter","3.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@socket.io/component-emitter.3.1.0.js
var component_emitter_3_1_0_exports = {};
__export(component_emitter_3_1_0_exports, {
  Emitter: () => Emitter
});
module.exports = __toCommonJS(component_emitter_3_1_0_exports);

// node_modules/@socket.io/component-emitter/index.mjs
function Emitter(obj) {
  if (obj) return mixin(obj);
}
function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}
Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
  return this;
};
Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }
  on.fn = fn;
  this.on(event, on);
  return this;
};
Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }
  var callbacks = this._callbacks["$" + event];
  if (!callbacks) return this;
  if (1 == arguments.length) {
    delete this._callbacks["$" + event];
    return this;
  }
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  if (callbacks.length === 0) {
    delete this._callbacks["$" + event];
  }
  return this;
};
Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1),
    callbacks = this._callbacks["$" + event];
  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }
  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }
  return this;
};
Emitter.prototype.emitReserved = Emitter.prototype.emit;
Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks["$" + event] || [];
};
Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9Ac29ja2V0LmlvL2NvbXBvbmVudC1lbWl0dGVyLjMuMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0Bzb2NrZXQuaW8vY29tcG9uZW50LWVtaXR0ZXIvaW5kZXgubWpzIl0sIm5hbWVzIjpbImNvbXBvbmVudF9lbWl0dGVyXzNfMV8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkVtaXR0ZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwib2JqIiwibWl4aW4iLCJrZXkiLCJwcm90b3R5cGUiLCJvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImZuIiwiX2NhbGxiYWNrcyIsInB1c2giLCJvbmNlIiwib2ZmIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsZW5ndGgiLCJjYWxsYmFja3MiLCJjYiIsImkiLCJzcGxpY2UiLCJlbWl0IiwiYXJncyIsIkFycmF5Iiwic2xpY2UiLCJsZW4iLCJlbWl0UmVzZXJ2ZWQiLCJsaXN0ZW5lcnMiLCJoYXNMaXN0ZW5lcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLCtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsK0JBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwsK0JBQUE7OztBQ01PLFNBQVNFLFFBQVFJLEdBQUEsRUFBSztFQUMzQixJQUFJQSxHQUFBLEVBQUssT0FBT0MsS0FBQSxDQUFNRCxHQUFHO0FBQzNCO0FBVUEsU0FBU0MsTUFBTUQsR0FBQSxFQUFLO0VBQ2xCLFNBQVNFLEdBQUEsSUFBT04sT0FBQSxDQUFRTyxTQUFBLEVBQVc7SUFDakNILEdBQUEsQ0FBSUUsR0FBQSxJQUFPTixPQUFBLENBQVFP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QUFBLEdBQU1SLFNBQUEsQ0FBVUQsTUFBQSxFQUFRRyxDQUFBLEdBQUlNLEdBQUEsRUFBSyxFQUFFTixDQUFBLEVBQUc7TUFDcERGLFNBQUEsQ0FBVUUsQ0FBQSxFQUFHUixLQUFBLENBQU0sTUFBTVcsSUFBSTtJQUMvQjtFQUNGO0VBRUEsT0FBTztBQUNUO0FBR0EzQixPQUFBLENBQVFPLFNBQUEsQ0FBVXdCLFlBQUEsR0FBZS9CLE9BQUEsQ0FBUU8sU0FBQSxDQUFVbUIsSUFBQTtBQVVuRDFCLE9BQUEsQ0FBUU8sU0FBQSxDQUFVeUIsU0FBQSxHQUFZLFVBQVN0QixLQUFBLEVBQU07RUFDM0MsS0FBS0UsVUFBQSxHQUFhLEtBQUtBLFVBQUEsSUFBYyxDQUFDO0VBQ3RDLE9BQU8sS0FBS0EsVUFBQSxDQUFXLE1BQU1GLEtBQUEsS0FBVSxFQUFDO0FBQzFDO0FBVUFWLE9BQUEsQ0FBUU8sU0FBQSxDQUFVMEIsWUFBQSxHQUFlLFVBQVN2QixLQUFBLEVBQU07RUFDOUMsT0FBTyxDQUFDLENBQUUsS0FBS3NCLFNBQUEsQ0FBVXRCLEtBQUssRUFBRVcsTUFBQTtBQUNsQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=