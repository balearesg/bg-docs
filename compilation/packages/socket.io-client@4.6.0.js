System.register(["engine.io-parser@5.0.6","@socket.io/component-emitter@3.1.0","engine.io-client@6.4.0","socket.io-parser@4.2.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.0.6"],["@socket.io/component-emitter","3.1.0"],["engine.io-client","6.4.0"],["socket.io-client","4.6.0"],["socket.io-parser","4.2.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('engine.io-parser@5.0.6', dep), dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep), dep => dependencies.set('engine.io-client@6.4.0', dep), dep => dependencies.set('socket.io-parser@4.2.2', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/socket.io-client.4.6.0.js
var socket_io_client_4_6_0_exports = {};
__export(socket_io_client_4_6_0_exports, {
  Manager: () => Manager,
  Socket: () => Socket,
  connect: () => lookup,
  default: () => socket_io_client_4_6_0_default,
  io: () => lookup,
  protocol: () => import_socket4.protocol
});
module.exports = __toCommonJS(socket_io_client_4_6_0_exports);

// node_modules/socket.io-client/build/esm/url.js
var import_engine = require("engine.io-client@6.4.0");
function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri) uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    obj = (0, import_engine.parse)(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}

// node_modules/socket.io-client/build/esm/on.js
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}

// node_modules/socket.io-client/build/esm/socket.js
var import_socket = require("socket.io-parser@4.2.2");
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1
});
var Socket = class extends import_component_emitter.Emitter {
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.recovered = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this._queue = [];
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    this._opts = Object.assign({}, opts);
    if (this.io._autoConnect) this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const io = this.io;
    this.subs = [on(io, "open", this.onopen.bind(this)), on(io, "packet", this.onpacket.bind(this)), on(io, "error", this.onerror.bind(this)), on(io, "close", this.onclose.bind(this))];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    if (this.connected) return this;
    this.subEvents();
    if (!this.io["_reconnecting"]) this.io.open();
    if ("open" === this.io._readyState) this.onopen();
    return this;
  }
  open() {
    return this.connect();
  }
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  emit(ev, ...args) {
    if (RESERVED_EVENTS.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
      this._addToQueue(args);
      return this;
    }
    const packet = {
      type: import_socket.PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
    if (discardPacket) {} else if (this.connected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  _registerAckCallback(id, ack) {
    var _a;
    const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i = 0; i < this.sendBuffer.length; i++) {
        if (this.sendBuffer[i].id === id) {
          this.sendBuffer.splice(i, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    this.acks[id] = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, [null, ...args]);
    };
  }
  emitWithAck(ev, ...args) {
    const withErr = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((resolve, reject) => {
      args.push((arg1, arg2) => {
        if (withErr) {
          return arg1 ? reject(arg1) : resolve(arg2);
        } else {
          return resolve(arg1);
        }
      });
      this.emit(ev, ...args);
    });
  }
  _addToQueue(args) {
    let ack;
    if (typeof args[args.length - 1] === "function") {
      ack = args.pop();
    }
    const packet = {
      id: this.ids++,
      tryCount: 0,
      pending: false,
      args,
      flags: Object.assign({
        fromQueue: true
      }, this.flags)
    };
    args.push((err, ...responseArgs) => {
      if (packet !== this._queue[0]) {
        return;
      }
      const hasError = err !== null;
      if (hasError) {
        if (packet.tryCount > this._opts.retries) {
          this._queue.shift();
          if (ack) {
            ack(err);
          }
        }
      } else {
        this._queue.shift();
        if (ack) {
          ack(null, ...responseArgs);
        }
      }
      packet.pending = false;
      return this._drainQueue();
    });
    this._queue.push(packet);
    this._drainQueue();
  }
  _drainQueue() {
    if (this._queue.length === 0) {
      return;
    }
    const packet = this._queue[0];
    if (packet.pending) {
      return;
    }
    packet.pending = true;
    packet.tryCount++;
    const currentId = this.ids;
    this.ids = packet.id;
    this.flags = packet.flags;
    this.emit.apply(this, packet.args);
    this.ids = currentId;
  }
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  onopen() {
    if (typeof this.auth == "function") {
      this.auth(data => {
        this._sendConnectPacket(data);
      });
    } else {
      this._sendConnectPacket(this.auth);
    }
  }
  _sendConnectPacket(data) {
    this.packet({
      type: import_socket.PacketType.CONNECT,
      data: this._pid ? Object.assign({
        pid: this._pid,
        offset: this._lastOffset
      }, data) : data
    });
  }
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
  }
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace) return;
    switch (packet.type) {
      case import_socket.PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          this.onconnect(packet.data.sid, packet.data.pid);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case import_socket.PacketType.EVENT:
      case import_socket.PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case import_socket.PacketType.ACK:
      case import_socket.PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case import_socket.PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case import_socket.PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  onevent(packet) {
    const args = packet.data || [];
    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
    if (this._pid && args.length && typeof args[args.length - 1] === "string") {
      this._lastOffset = args[args.length - 1];
    }
  }
  ack(id) {
    const self = this;
    let sent = false;
    return function (...args) {
      if (sent) return;
      sent = true;
      self.packet({
        type: import_socket.PacketType.ACK,
        id,
        data: args
      });
    };
  }
  onack(packet) {
    const ack = this.acks[packet.id];
    if ("function" === typeof ack) {
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    } else {}
  }
  onconnect(id, pid) {
    this.id = id;
    this.recovered = pid && this._pid === pid;
    this._pid = pid;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
  }
  emitBuffered() {
    this.receiveBuffer.forEach(args => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach(packet => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  destroy() {
    if (this.subs) {
      this.subs.forEach(subDestroy => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  disconnect() {
    if (this.connected) {
      this.packet({
        type: import_socket.PacketType.DISCONNECT
      });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  close() {
    return this.disconnect();
  }
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyOutgoingListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }
};

// node_modules/socket.io-client/build/esm/contrib/backo2.js
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
Backoff.prototype.reset = function () {
  this.attempts = 0;
};
Backoff.prototype.setMin = function (min) {
  this.ms = min;
};
Backoff.prototype.setMax = function (max) {
  this.max = max;
};
Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

// node_modules/socket.io-client/build/esm/manager.js
var import_engine2 = require("engine.io-client@6.4.0");
var parser = __toESM(require("socket.io-parser@4.2.2"), 0);
var import_component_emitter2 = require("@socket.io/component-emitter@3.1.0");
var Manager = class extends import_component_emitter2.Emitter {
  constructor(uri, opts) {
    var _a;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    (0, import_engine2.installTimerFunctions)(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || parser;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect) this.open();
  }
  reconnection(v) {
    if (!arguments.length) return this._reconnection;
    this._reconnection = !!v;
    return this;
  }
  reconnectionAttempts(v) {
    if (v === void 0) return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }
  reconnectionDelay(v) {
    var _a;
    if (v === void 0) return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }
  randomizationFactor(v) {
    var _a;
    if (v === void 0) return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }
  reconnectionDelayMax(v) {
    var _a;
    if (v === void 0) return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }
  timeout(v) {
    if (!arguments.length) return this._timeout;
    this._timeout = v;
    return this;
  }
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  open(fn) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new import_engine2.Socket(this.uri, this.opts);
    const socket = this.engine;
    const self = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function () {
      self.onopen();
      fn && fn();
    });
    const errorSub = on(socket, "error", err => {
      self.cleanup();
      self._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        self.maybeReconnectOnOpen();
      }
    });
    if (false !== this._timeout) {
      const timeout = this._timeout;
      if (timeout === 0) {
        openSubDestroy();
      }
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        socket.close();
        socket.emit("error", new Error("timeout"));
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  connect(fn) {
    return this.open(fn);
  }
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  ondecoded(packet) {
    (0, import_engine2.nextTick)(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  onerror(err) {
    this.emitReserved("error", err);
  }
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket(this, nsp, opts);
      this.nsps[nsp] = socket;
    }
    if (this._autoConnect) {
      socket.connect();
    }
    return socket;
  }
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];
      if (socket2.active) {
        return;
      }
    }
    this._close();
  }
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i = 0; i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }
  cleanup() {
    this.subs.forEach(subDestroy => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
    if (this.engine) this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(reason, description) {
    this.cleanup();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const self = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self.skipReconnect) return;
        this.emitReserved("reconnect_attempt", self.backoff.attempts);
        if (self.skipReconnect) return;
        self.open(err => {
          if (err) {
            self._reconnecting = false;
            self.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
  }
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
};

// node_modules/socket.io-client/build/esm/index.js
var import_socket4 = require("socket.io-parser@4.2.2");
var cache = {};
function lookup(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;
  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup, {
  Manager,
  Socket,
  io: lookup,
  connect: lookup
});

// .beyond/uimport/temp/socket.io-client.4.6.0.js
var socket_io_client_4_6_0_default = lookup;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3NvY2tldC5pby1jbGllbnQuNC42LjAuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9lc20vdXJsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL29uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL3NvY2tldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL2JhY2tvMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9tYW5hZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL2luZGV4LmpzIl0sIm5hbWVzIjpbInNvY2tldF9pb19jbGllbnRfNF82XzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiTWFuYWdlciIsIlNvY2tldCIsImNvbm5lY3QiLCJsb29rdXAiLCJkZWZhdWx0Iiwic29ja2V0X2lvX2NsaWVudF80XzZfMF9kZWZhdWx0IiwiaW8iLCJwcm90b2NvbCIsImltcG9ydF9zb2NrZXQ0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9lbmdpbmUiLCJyZXF1aXJlIiwidXJsIiwidXJpIiwicGF0aCIsImxvYyIsIm9iaiIsImxvY2F0aW9uIiwiaG9zdCIsImNoYXJBdCIsInRlc3QiLCJwYXJzZSIsInBvcnQiLCJpcHY2IiwiaW5kZXhPZiIsImlkIiwiaHJlZiIsIm9uIiwiZXYiLCJmbiIsInN1YkRlc3Ryb3kiLCJvZmYiLCJpbXBvcnRfc29ja2V0IiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyIiwiUkVTRVJWRURfRVZFTlRTIiwiT2JqZWN0IiwiZnJlZXplIiwiY29ubmVjdF9lcnJvciIsImRpc2Nvbm5lY3QiLCJkaXNjb25uZWN0aW5nIiwibmV3TGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsIkVtaXR0ZXIiLCJjb25zdHJ1Y3RvciIsIm5zcCIsIm9wdHMiLCJjb25uZWN0ZWQiLCJyZWNvdmVyZWQiLCJyZWNlaXZlQnVmZmVyIiwic2VuZEJ1ZmZlciIsIl9xdWV1ZSIsImlkcyIsImFja3MiLCJmbGFncyIsImF1dGgiLCJfb3B0cyIsImFzc2lnbiIsIl9hdXRvQ29ubmVjdCIsIm9wZW4iLCJkaXNjb25uZWN0ZWQiLCJzdWJFdmVudHMiLCJzdWJzIiwib25vcGVuIiwiYmluZCIsIm9ucGFja2V0Iiwib25lcnJvciIsIm9uY2xvc2UiLCJhY3RpdmUiLCJfcmVhZHlTdGF0ZSIsInNlbmQiLCJhcmdzIiwidW5zaGlmdCIsImVtaXQiLCJhcHBseSIsImhhc093blByb3BlcnR5IiwiRXJyb3IiLCJ0b1N0cmluZyIsInJldHJpZXMiLCJmcm9tUXVldWUiLCJ2b2xhdGlsZSIsIl9hZGRUb1F1ZXVlIiwicGFja2V0IiwidHlwZSIsIlBhY2tldFR5cGUiLCJFVkVOVCIsImRhdGEiLCJvcHRpb25zIiwiY29tcHJlc3MiLCJsZW5ndGgiLCJhY2siLCJwb3AiLCJfcmVnaXN0ZXJBY2tDYWxsYmFjayIsImlzVHJhbnNwb3J0V3JpdGFibGUiLCJlbmdpbmUiLCJ0cmFuc3BvcnQiLCJ3cml0YWJsZSIsImRpc2NhcmRQYWNrZXQiLCJub3RpZnlPdXRnb2luZ0xpc3RlbmVycyIsInB1c2giLCJfYSIsInRpbWVvdXQiLCJhY2tUaW1lb3V0IiwidGltZXIiLCJzZXRUaW1lb3V0Rm4iLCJpIiwic3BsaWNlIiwiY2FsbCIsImNsZWFyVGltZW91dEZuIiwiZW1pdFdpdGhBY2siLCJ3aXRoRXJyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhcmcxIiwiYXJnMiIsInRyeUNvdW50IiwicGVuZGluZyIsImVyciIsInJlc3BvbnNlQXJncyIsImhhc0Vycm9yIiwic2hpZnQiLCJfZHJhaW5RdWV1ZSIsImN1cnJlbnRJZCIsIl9wYWNrZXQiLCJfc2VuZENvbm5lY3RQYWNrZXQiLCJDT05ORUNUIiwiX3BpZCIsInBpZCIsIm9mZnNldCIsIl9sYXN0T2Zmc2V0IiwiZW1pdFJlc2VydmVkIiwicmVhc29uIiwiZGVzY3JpcHRpb24iLCJzYW1lTmFtZXNwYWNlIiwic2lkIiwib25jb25uZWN0IiwiQklOQVJZX0VWRU5UIiwib25ldmVudCIsIkFDSyIsIkJJTkFSWV9BQ0siLCJvbmFjayIsIkRJU0NPTk5FQ1QiLCJvbmRpc2Nvbm5lY3QiLCJDT05ORUNUX0VSUk9SIiwiZGVzdHJveSIsIm1lc3NhZ2UiLCJlbWl0RXZlbnQiLCJfYW55TGlzdGVuZXJzIiwibGlzdGVuZXJzIiwic2xpY2UiLCJsaXN0ZW5lciIsInNlbGYiLCJzZW50IiwiZW1pdEJ1ZmZlcmVkIiwiZm9yRWFjaCIsImNsb3NlIiwib25BbnkiLCJwcmVwZW5kQW55Iiwib2ZmQW55IiwibGlzdGVuZXJzQW55Iiwib25BbnlPdXRnb2luZyIsIl9hbnlPdXRnb2luZ0xpc3RlbmVycyIsInByZXBlbmRBbnlPdXRnb2luZyIsIm9mZkFueU91dGdvaW5nIiwibGlzdGVuZXJzQW55T3V0Z29pbmciLCJCYWNrb2ZmIiwibXMiLCJtaW4iLCJtYXgiLCJmYWN0b3IiLCJqaXR0ZXIiLCJhdHRlbXB0cyIsInByb3RvdHlwZSIsImR1cmF0aW9uIiwiTWF0aCIsInBvdyIsInJhbmQiLCJyYW5kb20iLCJkZXZpYXRpb24iLCJmbG9vciIsInJlc2V0Iiwic2V0TWluIiwic2V0TWF4Iiwic2V0Sml0dGVyIiwiaW1wb3J0X2VuZ2luZTIiLCJwYXJzZXIiLCJfX3RvRVNNIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyMiIsIm5zcHMiLCJpbnN0YWxsVGltZXJGdW5jdGlvbnMiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsIkluZmluaXR5IiwicmVjb25uZWN0aW9uRGVsYXkiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsInJhbmRvbWl6YXRpb25GYWN0b3IiLCJiYWNrb2ZmIiwiX3BhcnNlciIsImVuY29kZXIiLCJFbmNvZGVyIiwiZGVjb2RlciIsIkRlY29kZXIiLCJhdXRvQ29ubmVjdCIsInYiLCJhcmd1bWVudHMiLCJfcmVjb25uZWN0aW9uIiwiX3JlY29ubmVjdGlvbkF0dGVtcHRzIiwiX3JlY29ubmVjdGlvbkRlbGF5IiwiX3JhbmRvbWl6YXRpb25GYWN0b3IiLCJfcmVjb25uZWN0aW9uRGVsYXlNYXgiLCJfdGltZW91dCIsIm1heWJlUmVjb25uZWN0T25PcGVuIiwiX3JlY29ubmVjdGluZyIsInJlY29ubmVjdCIsInNvY2tldCIsInNraXBSZWNvbm5lY3QiLCJvcGVuU3ViRGVzdHJveSIsImVycm9yU3ViIiwiY2xlYW51cCIsImF1dG9VbnJlZiIsInVucmVmIiwiY2xlYXJUaW1lb3V0Iiwib25waW5nIiwib25kYXRhIiwib25kZWNvZGVkIiwiYWRkIiwiZSIsIm5leHRUaWNrIiwiX2Rlc3Ryb3kiLCJrZXlzIiwic29ja2V0MiIsIl9jbG9zZSIsImVuY29kZWRQYWNrZXRzIiwiZW5jb2RlIiwid3JpdGUiLCJkZWxheSIsIm9ucmVjb25uZWN0IiwiYXR0ZW1wdCIsImNhY2hlIiwicGFyc2VkIiwic291cmNlIiwibmV3Q29ubmVjdGlvbiIsImZvcmNlTmV3IiwibXVsdGlwbGV4IiwicXVlcnkiLCJxdWVyeUtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsOEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw4QkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsTUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsOEJBQUE7RUFBQUMsRUFBQSxFQUFBQSxDQUFBLEtBQUFILE1BQUE7RUFBQUksUUFBQSxFQUFBQSxDQUFBLEtBQUFDLGNBQUEsQ0FBQUQ7QUFBQTtBQUFBRSxNQUFBLENBQUFDLE9BQUEs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