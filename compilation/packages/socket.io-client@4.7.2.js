System.register(["engine.io-parser@5.2.1","@socket.io/component-emitter@3.1.0","engine.io-client@6.5.2","socket.io-parser@4.2.4"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.2.1"],["@socket.io/component-emitter","3.1.0"],["engine.io-client","6.5.2"],["socket.io-client","4.7.2"],["socket.io-parser","4.2.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('engine.io-parser@5.2.1', dep), dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep), dep => dependencies.set('engine.io-client@6.5.2', dep), dep => dependencies.set('socket.io-parser@4.2.4', dep)],
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

// .beyond/uimport/socket.io-client.4.7.2.js
var socket_io_client_4_7_2_exports = {};
__export(socket_io_client_4_7_2_exports, {
  Manager: () => Manager,
  Socket: () => Socket,
  connect: () => lookup,
  default: () => socket_io_client_4_7_2_default,
  io: () => lookup,
  protocol: () => import_socket4.protocol
});
module.exports = __toCommonJS(socket_io_client_4_7_2_exports);

// node_modules/socket.io-client/build/esm/url.js
var import_engine = require("engine.io-client@6.5.2");
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
var import_socket = require("socket.io-parser@4.2.4");
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
    this._queueSeq = 0;
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
      id: this._queueSeq++,
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
  _drainQueue(force = false) {
    if (!this.connected || this._queue.length === 0) {
      return;
    }
    const packet = this._queue[0];
    if (packet.pending && !force) {
      return;
    }
    packet.pending = true;
    packet.tryCount++;
    this.flags = packet.flags;
    this.emit.apply(this, packet.args);
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
    this._drainQueue(true);
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
var import_engine2 = require("engine.io-client@6.5.2");
var parser = __toESM(require("socket.io-parser@4.2.4"), 0);
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
    const onError = err => {
      this.cleanup();
      this._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        this.maybeReconnectOnOpen();
      }
    };
    const errorSub = on(socket, "error", onError);
    if (false !== this._timeout) {
      const timeout = this._timeout;
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        onError(new Error("timeout"));
        socket.close();
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
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
    } else if (this._autoConnect && !socket.active) {
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
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
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
var import_socket4 = require("socket.io-parser@4.2.4");
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

// .beyond/uimport/socket.io-client.4.7.2.js
var socket_io_client_4_7_2_default = lookup;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zb2NrZXQuaW8tY2xpZW50LjQuNy4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvYnVpbGQvZXNtL3VybC5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9vbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9zb2NrZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi9iYWNrbzIuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9idWlsZC9lc20vbWFuYWdlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2J1aWxkL2VzbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJzb2NrZXRfaW9fY2xpZW50XzRfN18yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIk1hbmFnZXIiLCJTb2NrZXQiLCJjb25uZWN0IiwibG9va3VwIiwiZGVmYXVsdCIsInNvY2tldF9pb19jbGllbnRfNF83XzJfZGVmYXVsdCIsImlvIiwicHJvdG9jb2wiLCJpbXBvcnRfc29ja2V0NCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfZW5naW5lIiwicmVxdWlyZSIsInVybCIsInVyaSIsInBhdGgiLCJsb2MiLCJvYmoiLCJsb2NhdGlvbiIsImhvc3QiLCJjaGFyQXQiLCJ0ZXN0IiwicGFyc2UiLCJwb3J0IiwiaXB2NiIsImluZGV4T2YiLCJpZCIsImhyZWYiLCJvbiIsImV2IiwiZm4iLCJzdWJEZXN0cm95Iiwib2ZmIiwiaW1wb3J0X3NvY2tldCIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlciIsIlJFU0VSVkVEX0VWRU5UUyIsIk9iamVjdCIsImZyZWV6ZSIsImNvbm5lY3RfZXJyb3IiLCJkaXNjb25uZWN0IiwiZGlzY29ubmVjdGluZyIsIm5ld0xpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJFbWl0dGVyIiwiY29uc3RydWN0b3IiLCJuc3AiLCJvcHRzIiwiY29ubmVjdGVkIiwicmVjb3ZlcmVkIiwicmVjZWl2ZUJ1ZmZlciIsInNlbmRCdWZmZXIiLCJfcXVldWUiLCJfcXVldWVTZXEiLCJpZHMiLCJhY2tzIiwiZmxhZ3MiLCJhdXRoIiwiX29wdHMiLCJhc3NpZ24iLCJfYXV0b0Nvbm5lY3QiLCJvcGVuIiwiZGlzY29ubmVjdGVkIiwic3ViRXZlbnRzIiwic3VicyIsIm9ub3BlbiIsImJpbmQiLCJvbnBhY2tldCIsIm9uZXJyb3IiLCJvbmNsb3NlIiwiYWN0aXZlIiwiX3JlYWR5U3RhdGUiLCJzZW5kIiwiYXJncyIsInVuc2hpZnQiLCJlbWl0IiwiYXBwbHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkVycm9yIiwidG9TdHJpbmciLCJyZXRyaWVzIiwiZnJvbVF1ZXVlIiwidm9sYXRpbGUiLCJfYWRkVG9RdWV1ZSIsInBhY2tldCIsInR5cGUiLCJQYWNrZXRUeXBlIiwiRVZFTlQiLCJkYXRhIiwib3B0aW9ucyIsImNvbXByZXNzIiwibGVuZ3RoIiwiYWNrIiwicG9wIiwiX3JlZ2lzdGVyQWNrQ2FsbGJhY2siLCJpc1RyYW5zcG9ydFdyaXRhYmxlIiwiZW5naW5lIiwidHJhbnNwb3J0Iiwid3JpdGFibGUiLCJkaXNjYXJkUGFja2V0Iiwibm90aWZ5T3V0Z29pbmdMaXN0ZW5lcnMiLCJwdXNoIiwiX2EiLCJ0aW1lb3V0IiwiYWNrVGltZW91dCIsInRpbWVyIiwic2V0VGltZW91dEZuIiwiaSIsInNwbGljZSIsImNhbGwiLCJjbGVhclRpbWVvdXRGbiIsImVtaXRXaXRoQWNrIiwid2l0aEVyciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXJnMSIsImFyZzIiLCJ0cnlDb3VudCIsInBlbmRpbmciLCJlcnIiLCJyZXNwb25zZUFyZ3MiLCJoYXNFcnJvciIsInNoaWZ0IiwiX2RyYWluUXVldWUiLCJmb3JjZSIsIl9wYWNrZXQiLCJfc2VuZENvbm5lY3RQYWNrZXQiLCJDT05ORUNUIiwiX3BpZCIsInBpZCIsIm9mZnNldCIsIl9sYXN0T2Zmc2V0IiwiZW1pdFJlc2VydmVkIiwicmVhc29uIiwiZGVzY3JpcHRpb24iLCJzYW1lTmFtZXNwYWNlIiwic2lkIiwib25jb25uZWN0IiwiQklOQVJZX0VWRU5UIiwib25ldmVudCIsIkFDSyIsIkJJTkFSWV9BQ0siLCJvbmFjayIsIkRJU0NPTk5FQ1QiLCJvbmRpc2Nvbm5lY3QiLCJDT05ORUNUX0VSUk9SIiwiZGVzdHJveSIsIm1lc3NhZ2UiLCJlbWl0RXZlbnQiLCJfYW55TGlzdGVuZXJzIiwibGlzdGVuZXJzIiwic2xpY2UiLCJsaXN0ZW5lciIsInNlbGYiLCJzZW50IiwiZW1pdEJ1ZmZlcmVkIiwiZm9yRWFjaCIsImNsb3NlIiwib25BbnkiLCJwcmVwZW5kQW55Iiwib2ZmQW55IiwibGlzdGVuZXJzQW55Iiwib25BbnlPdXRnb2luZyIsIl9hbnlPdXRnb2luZ0xpc3RlbmVycyIsInByZXBlbmRBbnlPdXRnb2luZyIsIm9mZkFueU91dGdvaW5nIiwibGlzdGVuZXJzQW55T3V0Z29pbmciLCJCYWNrb2ZmIiwibXMiLCJtaW4iLCJtYXgiLCJmYWN0b3IiLCJqaXR0ZXIiLCJhdHRlbXB0cyIsInByb3RvdHlwZSIsImR1cmF0aW9uIiwiTWF0aCIsInBvdyIsInJhbmQiLCJyYW5kb20iLCJkZXZpYXRpb24iLCJmbG9vciIsInJlc2V0Iiwic2V0TWluIiwic2V0TWF4Iiwic2V0Sml0dGVyIiwiaW1wb3J0X2VuZ2luZTIiLCJwYXJzZXIiLCJfX3RvRVNNIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyMiIsIm5zcHMiLCJpbnN0YWxsVGltZXJGdW5jdGlvbnMiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsIkluZmluaXR5IiwicmVjb25uZWN0aW9uRGVsYXkiLCJyZWNvbm5lY3Rpb25EZWxheU1heCIsInJhbmRvbWl6YXRpb25GYWN0b3IiLCJiYWNrb2ZmIiwiX3BhcnNlciIsImVuY29kZXIiLCJFbmNvZGVyIiwiZGVjb2RlciIsIkRlY29kZXIiLCJhdXRvQ29ubmVjdCIsInYiLCJhcmd1bWVudHMiLCJfcmVjb25uZWN0aW9uIiwiX3JlY29ubmVjdGlvbkF0dGVtcHRzIiwiX3JlY29ubmVjdGlvbkRlbGF5IiwiX3JhbmRvbWl6YXRpb25GYWN0b3IiLCJfcmVjb25uZWN0aW9uRGVsYXlNYXgiLCJfdGltZW91dCIsIm1heWJlUmVjb25uZWN0T25PcGVuIiwiX3JlY29ubmVjdGluZyIsInJlY29ubmVjdCIsInNvY2tldCIsInNraXBSZWNvbm5lY3QiLCJvcGVuU3ViRGVzdHJveSIsIm9uRXJyb3IiLCJjbGVhbnVwIiwiZXJyb3JTdWIiLCJhdXRvVW5yZWYiLCJ1bnJlZiIsIm9ucGluZyIsIm9uZGF0YSIsIm9uZGVjb2RlZCIsImFkZCIsImUiLCJuZXh0VGljayIsIl9kZXN0cm95Iiwia2V5cyIsInNvY2tldDIiLCJfY2xvc2UiLCJlbmNvZGVkUGFja2V0cyIsImVuY29kZSIsIndyaXRlIiwiZGVsYXkiLCJvbnJlY29ubmVjdCIsImF0dGVtcHQiLCJjYWNoZSIsInBhcnNlZCIsInNvdXJjZSIsIm5ld0Nvbm5lY3Rpb24iLCJmb3JjZU5ldyIsIm11bHRpcGxleCIsInF1ZXJ5IiwicXVlcnlLZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDhCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsOEJBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLE1BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFDLDhCQUFBO0VBQUFDLEVBQUEsRUFBQUEsQ0FBQSxLQUFBSCxNQUFBO0VBQUFJLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBLENBQUFEO0FBQUE7QUFBQUUsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQWIsOEJBQUE7OztBQ0FBLElBQUFjLGFBQUEsR0FBc0JDLE9BQUE7QUFVZixTQUFTQyxJQUFJQyxHQUFBLEVBQUtDLElBQUEsR0FBTyxJQUFJQyxHQUFBLEVBQUs7RUFDckMsSUFBSUMsR0FBQSxHQUFNSCxHQUFBO0VBRVZFLEdBQUEsR0FBTUEsR0FBQSxJQUFRLE9BQU9FLFFBQUEsS0FBYSxlQUFlQSxRQUFBO0VBQ2pELElBQUksUUFBUUosR0FBQSxFQUNSQSxHQUFBLEdBQU1FLEdBQUEsQ0FBSVYsUUFBQSxHQUFXLE9BQU9VLEdBQUEsQ0FBSUcsSUFBQTtFQUVwQyxJQUFJLE9BQU9MLEdBQUEsS0FBUSxVQUFVO0lBQ3pCLElBQUksUUFBUUEsR0FBQSxDQUFJTSxNQUFBLENBQU8sQ0FBQyxHQUFHO01BQ3ZCLElBQUksUUFBUU4sR0FBQSxDQUFJTSxNQUFBLENBQU8sQ0FBQyxHQUFHO1FBQ3ZCTixHQUFBLEdBQU1FLEdBQUEsQ0FBSVYsUUFBQSxHQUFXUSxHQUFBO01BQ3pCLE9BQ0s7UUFDREEsR0FBQSxHQUFNRSxHQUFBLENBQUlHLElBQUEsR0FBT0wsR0FBQTtNQUNyQjtJQUNKO0lBQ0EsSUFBSSxDQUFDLHNCQUFzQk8sSUFBQSxDQUFLUCxHQUFHLEdBQUc7TUFDbEMsSUFBSSxnQkFBZ0IsT0FBT0UsR0FBQSxFQUFLO1FBQzVCRixHQUFBLEdBQU1FLEdBQUEsQ0FBSVYsUUFBQSxHQUFXLE9BQU9RLEdBQUE7TUFDaEMsT0FDSztRQUNEQSxHQUFBLEdBQU0sYUFBYUEsR0FBQTtNQUN2QjtJQUNKO0lBRUFHLEdBQUEsT0FBTU4sYUFBQSxDQUFBVyxLQUFBLEVBQU1SLEdBQUc7RUFDbkI7RUFFQSxJQUFJLENBQUNHLEdBQUEsQ0FBSU0sSUFBQSxFQUFNO0lBQ1gsSUFBSSxjQUFjRixJQUFBLENBQUtKLEdBQUEsQ0FBSVgsUUFBUSxHQUFHO01BQ2xDVyxHQUFBLENBQUlNLElBQUEsR0FBTztJQUNmLFdBQ1MsZUFBZUYsSUFBQSxDQUFLSixHQUFBLENBQUlYLFFBQVEsR0FBRztNQUN4Q1csR0FBQSxDQUFJTSxJQUFBLEdBQU87SUFDZjtFQUNKO0VBQ0FOLEdBQUEsQ0FBSUYsSUFBQSxHQUFPRSxHQUFBLENBQUlGLElBQUEsSUFBUTtFQUN2QixNQUFNUyxJQUFBLEdBQU9QLEdBQUEsQ0FBSUUsSUFBQSxDQUFLTSxPQUFBLENBQVEsR0FBRyxNQUFNO0VBQ3ZDLE1BQU1OLElBQUEsR0FBT0ssSUFBQSxHQUFPLE1BQU1QLEdBQUEsQ0FBSUUsSUFBQSxHQUFPLE1BQU1GLEdBQUEsQ0FBSUUsSUFBQTtFQUUvQ0YsR0FBQSxDQUFJUyxFQUFBLEdBQUtULEdBQUEsQ0FBSVgsUUFBQSxHQUFXLFFBQVFhLElBQUEsR0FBTyxNQUFNRixHQUFBLENBQUlNLElBQUEsR0FBT1IsSUFBQTtFQUV4REUsR0FBQSxDQUFJVSxJQUFBLEdBQ0FWLEdBQUEsQ0FBSVgsUUFBQSxHQUNBLFFBQ0FhLElBQUEsSUFDQ0gsR0FBQSxJQUFPQSxHQUFBLENBQUlPLElBQUEsS0FBU04sR0FBQSxDQUFJTSxJQUFBLEdBQU8sS0FBSyxNQUFNTixHQUFBLENBQUlNLElBQUE7RUFDdkQsT0FBT04sR0FBQTtBQUNYOzs7QUMxRE8sU0FBU1csR0FBR1gsR0FBQSxFQUFLWSxFQUFBLEVBQUlDLEVBQUEsRUFBSTtFQUM1QmIsR0FBQSxDQUFJVyxFQUFBLENBQUdDLEVBQUEsRUFBSUMsRUFBRTtFQUNiLE9BQU8sU0FBU0MsV0FBQSxFQUFhO0lBQ3pCZCxHQUFBLENBQUllLEdBQUEsQ0FBSUgsRUFBQSxFQUFJQyxFQUFFO0VBQ2xCO0FBQ0o7OztBQ0xBLElBQUFHLGFBQUEsR0FBMkJyQixPQUFBO0FBRTNCLElBQUFzQix3QkFBQSxHQUF5QnRCLE9BQUE7QUFLekIsSUFBTXVCLGVBQUEsR0FBa0JDLE1BQUEsQ0FBT0MsTUFBQSxDQUFPO0VBQ2xDcEMsT0FBQSxFQUFTO0VBQ1RxQyxhQUFBLEVBQWU7RUFDZkMsVUFBQSxFQUFZO0VBQ1pDLGFBQUEsRUFBZTtFQUVmQyxXQUFBLEVBQWE7RUFDYkMsY0FBQSxFQUFnQjtBQUNwQixDQUFDO0FBeUJNLElBQU0xQyxNQUFBLEdBQU4sY0FBcUJrQyx3QkFBQSxDQUFBUyxPQUFBLENBQVE7RUFJaENDLFlBQVl2QyxFQUFBLEVBQUl3QyxHQUFBLEVBQUtDLElBQUEsRUFBTTtJQUN2QixNQUFNO0lBZU4sS0FBS0MsU0FBQSxHQUFZO0lBS2pCLEtBQUtDLFNBQUEsR0FBWTtJQUlqQixLQUFLQyxhQUFBLEdBQWdCLEVBQUM7SUFJdEIsS0FBS0MsVUFBQSxHQUFhLEVBQUM7SUFPbkIsS0FBS0MsTUFBQSxHQUFTLEVBQUM7SUFLZixLQUFLQyxTQUFBLEdBQVk7SUFDakIsS0FBS0MsR0FBQSxHQUFNO0lBQ1gsS0FBS0MsSUFBQSxHQUFPLENBQUM7SUFDYixLQUFLQyxLQUFBLEdBQVEsQ0FBQztJQUNkLEtBQUtsRCxFQUFBLEdBQUtBLEVBQUE7SUFDVixLQUFLd0MsR0FBQSxHQUFNQSxHQUFBO0lBQ1gsSUFBSUMsSUFBQSxJQUFRQSxJQUFBLENBQUtVLElBQUEsRUFBTTtNQUNuQixLQUFLQSxJQUFBLEdBQU9WLElBQUEsQ0FBS1UsSUFBQTtJQUNyQjtJQUNBLEtBQUtDLEtBQUEsR0FBUXJCLE1BQUEsQ0FBT3NCLE1BQUEsQ0FBTyxDQUFDLEdBQUdaLElBQUk7SUFDbkMsSUFBSSxLQUFLekMsRUFBQSxDQUFHc0QsWUFBQSxFQUNSLEtBQUtDLElBQUEsQ0FBSztFQUNsQjtFQWVBLElBQUlDLGFBQUEsRUFBZTtJQUNmLE9BQU8sQ0FBQyxLQUFLZCxTQUFBO0VBQ2pCO0VBTUFlLFVBQUEsRUFBWTtJQUNSLElBQUksS0FBS0MsSUFBQSxFQUNMO0lBQ0osTUFBTTFELEVBQUEsR0FBSyxLQUFLQSxFQUFBO0lBQ2hCLEtBQUswRCxJQUFBLEdBQU8sQ0FDUm5DLEVBQUEsQ0FBR3ZCLEVBQUEsRUFBSSxRQUFRLEtBQUsyRCxNQUFBLENBQU9DLElBQUEsQ0FBSyxJQUFJLENBQUMsR0FDckNyQyxFQUFBLENBQUd2QixFQUFBLEVBQUksVUFBVSxLQUFLNkQsUUFBQSxDQUFTRCxJQUFBLENBQUssSUFBSSxDQUFDLEdBQ3pDckMsRUFBQSxDQUFHdkIsRUFBQSxFQUFJLFNBQVMsS0FBSzhELE9BQUEsQ0FBUUYsSUFBQSxDQUFLLElBQUksQ0FBQyxHQUN2Q3JDLEVBQUEsQ0FBR3ZCLEVBQUEsRUFBSSxTQUFTLEtBQUsrRCxPQUFBLENBQVFILElBQUEsQ0FBSyxJQUFJLENBQUMsRUFDM0M7RUFDSjtFQWtCQSxJQUFJSSxPQUFBLEVBQVM7SUFDVCxPQUFPLENBQUMsQ0FBQyxLQUFLTixJQUFBO0VBQ2xCO0VBV0E5RCxRQUFBLEVBQVU7SUFDTixJQUFJLEtBQUs4QyxTQUFBLEVBQ0wsT0FBTztJQUNYLEtBQUtlLFNBQUEsQ0FBVTtJQUNmLElBQUksQ0FBQyxLQUFLekQsRUFBQSxDQUFHLGtCQUNULEtBQUtBLEVBQUEsQ0FBR3VELElBQUEsQ0FBSztJQUNqQixJQUFJLFdBQVcsS0FBS3ZELEVBQUEsQ0FBR2lFLFdBQUEsRUFDbkIsS0FBS04sTUFBQSxDQUFPO0lBQ2hCLE9BQU87RUFDWDtFQUlBSixLQUFBLEVBQU87SUFDSCxPQUFPLEtBQUszRCxPQUFBLENBQVE7RUFDeEI7RUFnQkFzRSxLQUFBLEdBQVFDLElBQUEsRUFBTTtJQUNWQSxJQUFBLENBQUtDLE9BQUEsQ0FBUSxTQUFTO0lBQ3RCLEtBQUtDLElBQUEsQ0FBS0MsS0FBQSxDQUFNLE1BQU1ILElBQUk7SUFDMUIsT0FBTztFQUNYO0VBa0JBRSxLQUFLN0MsRUFBQSxLQUFPMkMsSUFBQSxFQUFNO0lBQ2QsSUFBSXJDLGVBQUEsQ0FBZ0J5QyxjQUFBLENBQWUvQyxFQUFFLEdBQUc7TUFDcEMsTUFBTSxJQUFJZ0QsS0FBQSxDQUFNLE1BQU1oRCxFQUFBLENBQUdpRCxRQUFBLENBQVMsSUFBSSw0QkFBNEI7SUFDdEU7SUFDQU4sSUFBQSxDQUFLQyxPQUFBLENBQVE1QyxFQUFFO0lBQ2YsSUFBSSxLQUFLNEIsS0FBQSxDQUFNc0IsT0FBQSxJQUFXLENBQUMsS0FBS3hCLEtBQUEsQ0FBTXlCLFNBQUEsSUFBYSxDQUFDLEtBQUt6QixLQUFBLENBQU0wQixRQUFBLEVBQVU7TUFDckUsS0FBS0MsV0FBQSxDQUFZVixJQUFJO01BQ3JCLE9BQU87SUFDWDtJQUNBLE1BQU1XLE1BQUEsR0FBUztNQUNYQyxJQUFBLEVBQU1uRCxhQUFBLENBQUFvRCxVQUFBLENBQVdDLEtBQUE7TUFDakJDLElBQUEsRUFBTWY7SUFDVjtJQUNBVyxNQUFBLENBQU9LLE9BQUEsR0FBVSxDQUFDO0lBQ2xCTCxNQUFBLENBQU9LLE9BQUEsQ0FBUUMsUUFBQSxHQUFXLEtBQUtsQyxLQUFBLENBQU1rQyxRQUFBLEtBQWE7SUFFbEQsSUFBSSxlQUFlLE9BQU9qQixJQUFBLENBQUtBLElBQUEsQ0FBS2tCLE1BQUEsR0FBUyxJQUFJO01BQzdDLE1BQU1oRSxFQUFBLEdBQUssS0FBSzJCLEdBQUE7TUFDaEIsTUFBTXNDLEdBQUEsR0FBTW5CLElBQUEsQ0FBS29CLEdBQUEsQ0FBSTtNQUNyQixLQUFLQyxvQkFBQSxDQUFxQm5FLEVBQUEsRUFBSWlFLEdBQUc7TUFDakNSLE1BQUEsQ0FBT3pELEVBQUEsR0FBS0EsRUFBQTtJQUNoQjtJQUNBLE1BQU1vRSxtQkFBQSxHQUFzQixLQUFLekYsRUFBQSxDQUFHMEYsTUFBQSxJQUNoQyxLQUFLMUYsRUFBQSxDQUFHMEYsTUFBQSxDQUFPQyxTQUFBLElBQ2YsS0FBSzNGLEVBQUEsQ0FBRzBGLE1BQUEsQ0FBT0MsU0FBQSxDQUFVQyxRQUFBO0lBQzdCLE1BQU1DLGFBQUEsR0FBZ0IsS0FBSzNDLEtBQUEsQ0FBTTBCLFFBQUEsS0FBYSxDQUFDYSxtQkFBQSxJQUF1QixDQUFDLEtBQUsvQyxTQUFBO0lBQzVFLElBQUltRCxhQUFBLEVBQWUsQ0FDbkIsV0FDUyxLQUFLbkQsU0FBQSxFQUFXO01BQ3JCLEtBQUtvRCx1QkFBQSxDQUF3QmhCLE1BQU07TUFDbkMsS0FBS0EsTUFBQSxDQUFPQSxNQUFNO0lBQ3RCLE9BQ0s7TUFDRCxLQUFLakMsVUFBQSxDQUFXa0QsSUFBQSxDQUFLakIsTUFBTTtJQUMvQjtJQUNBLEtBQUs1QixLQUFBLEdBQVEsQ0FBQztJQUNkLE9BQU87RUFDWDtFQUlBc0MscUJBQXFCbkUsRUFBQSxFQUFJaUUsR0FBQSxFQUFLO0lBQzFCLElBQUlVLEVBQUE7SUFDSixNQUFNQyxPQUFBLElBQVdELEVBQUEsR0FBSyxLQUFLOUMsS0FBQSxDQUFNK0MsT0FBQSxNQUFhLFFBQVFELEVBQUEsS0FBTyxTQUFTQSxFQUFBLEdBQUssS0FBSzVDLEtBQUEsQ0FBTThDLFVBQUE7SUFDdEYsSUFBSUQsT0FBQSxLQUFZLFFBQVc7TUFDdkIsS0FBS2hELElBQUEsQ0FBSzVCLEVBQUEsSUFBTWlFLEdBQUE7TUFDaEI7SUFDSjtJQUVBLE1BQU1hLEtBQUEsR0FBUSxLQUFLbkcsRUFBQSxDQUFHb0csWUFBQSxDQUFhLE1BQU07TUFDckMsT0FBTyxLQUFLbkQsSUFBQSxDQUFLNUIsRUFBQTtNQUNqQixTQUFTZ0YsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSSxLQUFLeEQsVUFBQSxDQUFXd0MsTUFBQSxFQUFRZ0IsQ0FBQSxJQUFLO1FBQzdDLElBQUksS0FBS3hELFVBQUEsQ0FBV3dELENBQUEsRUFBR2hGLEVBQUEsS0FBT0EsRUFBQSxFQUFJO1VBQzlCLEtBQUt3QixVQUFBLENBQVd5RCxNQUFBLENBQU9ELENBQUEsRUFBRyxDQUFDO1FBQy9CO01BQ0o7TUFDQWYsR0FBQSxDQUFJaUIsSUFBQSxDQUFLLE1BQU0sSUFBSS9CLEtBQUEsQ0FBTSx5QkFBeUIsQ0FBQztJQUN2RCxHQUFHeUIsT0FBTztJQUNWLEtBQUtoRCxJQUFBLENBQUs1QixFQUFBLElBQU0sSUFBSThDLElBQUEsS0FBUztNQUV6QixLQUFLbkUsRUFBQSxDQUFHd0csY0FBQSxDQUFlTCxLQUFLO01BQzVCYixHQUFBLENBQUloQixLQUFBLENBQU0sTUFBTSxDQUFDLE1BQU0sR0FBR0gsSUFBSSxDQUFDO0lBQ25DO0VBQ0o7RUFpQkFzQyxZQUFZakYsRUFBQSxLQUFPMkMsSUFBQSxFQUFNO0lBRXJCLE1BQU11QyxPQUFBLEdBQVUsS0FBS3hELEtBQUEsQ0FBTStDLE9BQUEsS0FBWSxVQUFhLEtBQUs3QyxLQUFBLENBQU04QyxVQUFBLEtBQWU7SUFDOUUsT0FBTyxJQUFJUyxPQUFBLENBQVEsQ0FBQ0MsT0FBQSxFQUFTQyxNQUFBLEtBQVc7TUFDcEMxQyxJQUFBLENBQUs0QixJQUFBLENBQUssQ0FBQ2UsSUFBQSxFQUFNQyxJQUFBLEtBQVM7UUFDdEIsSUFBSUwsT0FBQSxFQUFTO1VBQ1QsT0FBT0ksSUFBQSxHQUFPRCxNQUFBLENBQU9DLElBQUksSUFBSUYsT0FBQSxDQUFRRyxJQUFJO1FBQzdDLE9BQ0s7VUFDRCxPQUFPSCxPQUFBLENBQVFFLElBQUk7UUFDdkI7TUFDSixDQUFDO01BQ0QsS0FBS3pDLElBQUEsQ0FBSzdDLEVBQUEsRUFBSSxHQUFHMkMsSUFBSTtJQUN6QixDQUFDO0VBQ0w7RUFNQVUsWUFBWVYsSUFBQSxFQUFNO0lBQ2QsSUFBSW1CLEdBQUE7SUFDSixJQUFJLE9BQU9uQixJQUFBLENBQUtBLElBQUEsQ0FBS2tCLE1BQUEsR0FBUyxPQUFPLFlBQVk7TUFDN0NDLEdBQUEsR0FBTW5CLElBQUEsQ0FBS29CLEdBQUEsQ0FBSTtJQUNuQjtJQUNBLE1BQU1ULE1BQUEsR0FBUztNQUNYekQsRUFBQSxFQUFJLEtBQUswQixTQUFBO01BQ1RpRSxRQUFBLEVBQVU7TUFDVkMsT0FBQSxFQUFTO01BQ1Q5QyxJQUFBO01BQ0FqQixLQUFBLEVBQU9uQixNQUFBLENBQU9zQixNQUFBLENBQU87UUFBRXNCLFNBQUEsRUFBVztNQUFLLEdBQUcsS0FBS3pCLEtBQUs7SUFDeEQ7SUFDQWlCLElBQUEsQ0FBSzRCLElBQUEsQ0FBSyxDQUFDbUIsR0FBQSxLQUFRQyxZQUFBLEtBQWlCO01BQ2hDLElBQUlyQyxNQUFBLEtBQVcsS0FBS2hDLE1BQUEsQ0FBTyxJQUFJO1FBRTNCO01BQ0o7TUFDQSxNQUFNc0UsUUFBQSxHQUFXRixHQUFBLEtBQVE7TUFDekIsSUFBSUUsUUFBQSxFQUFVO1FBQ1YsSUFBSXRDLE1BQUEsQ0FBT2tDLFFBQUEsR0FBVyxLQUFLNUQsS0FBQSxDQUFNc0IsT0FBQSxFQUFTO1VBQ3RDLEtBQUs1QixNQUFBLENBQU91RSxLQUFBLENBQU07VUFDbEIsSUFBSS9CLEdBQUEsRUFBSztZQUNMQSxHQUFBLENBQUk0QixHQUFHO1VBQ1g7UUFDSjtNQUNKLE9BQ0s7UUFDRCxLQUFLcEUsTUFBQSxDQUFPdUUsS0FBQSxDQUFNO1FBQ2xCLElBQUkvQixHQUFBLEVBQUs7VUFDTEEsR0FBQSxDQUFJLE1BQU0sR0FBRzZCLFlBQVk7UUFDN0I7TUFDSjtNQUNBckMsTUFBQSxDQUFPbUMsT0FBQSxHQUFVO01BQ2pCLE9BQU8sS0FBS0ssV0FBQSxDQUFZO0lBQzVCLENBQUM7SUFDRCxLQUFLeEUsTUFBQSxDQUFPaUQsSUFBQSxDQUFLakIsTUFBTTtJQUN2QixLQUFLd0MsV0FBQSxDQUFZO0VBQ3JCO0VBT0FBLFlBQVlDLEtBQUEsR0FBUSxPQUFPO0lBQ3ZCLElBQUksQ0FBQyxLQUFLN0UsU0FBQSxJQUFhLEtBQUtJLE1BQUEsQ0FBT3VDLE1BQUEsS0FBVyxHQUFHO01BQzdDO0lBQ0o7SUFDQSxNQUFNUCxNQUFBLEdBQVMsS0FBS2hDLE1BQUEsQ0FBTztJQUMzQixJQUFJZ0MsTUFBQSxDQUFPbUMsT0FBQSxJQUFXLENBQUNNLEtBQUEsRUFBTztNQUMxQjtJQUNKO0lBQ0F6QyxNQUFBLENBQU9tQyxPQUFBLEdBQVU7SUFDakJuQyxNQUFBLENBQU9rQyxRQUFBO0lBQ1AsS0FBSzlELEtBQUEsR0FBUTRCLE1BQUEsQ0FBTzVCLEtBQUE7SUFDcEIsS0FBS21CLElBQUEsQ0FBS0MsS0FBQSxDQUFNLE1BQU1RLE1BQUEsQ0FBT1gsSUFBSTtFQUNyQztFQU9BVyxPQUFPQSxNQUFBLEVBQVE7SUFDWEEsTUFBQSxDQUFPdEMsR0FBQSxHQUFNLEtBQUtBLEdBQUE7SUFDbEIsS0FBS3hDLEVBQUEsQ0FBR3dILE9BQUEsQ0FBUTFDLE1BQU07RUFDMUI7RUFNQW5CLE9BQUEsRUFBUztJQUNMLElBQUksT0FBTyxLQUFLUixJQUFBLElBQVEsWUFBWTtNQUNoQyxLQUFLQSxJQUFBLENBQU0rQixJQUFBLElBQVM7UUFDaEIsS0FBS3VDLGtCQUFBLENBQW1CdkMsSUFBSTtNQUNoQyxDQUFDO0lBQ0wsT0FDSztNQUNELEtBQUt1QyxrQkFBQSxDQUFtQixLQUFLdEUsSUFBSTtJQUNyQztFQUNKO0VBT0FzRSxtQkFBbUJ2QyxJQUFBLEVBQU07SUFDckIsS0FBS0osTUFBQSxDQUFPO01BQ1JDLElBQUEsRUFBTW5ELGFBQUEsQ0FBQW9ELFVBQUEsQ0FBVzBDLE9BQUE7TUFDakJ4QyxJQUFBLEVBQU0sS0FBS3lDLElBQUEsR0FDTDVGLE1BQUEsQ0FBT3NCLE1BQUEsQ0FBTztRQUFFdUUsR0FBQSxFQUFLLEtBQUtELElBQUE7UUFBTUUsTUFBQSxFQUFRLEtBQUtDO01BQVksR0FBRzVDLElBQUksSUFDaEVBO0lBQ1YsQ0FBQztFQUNMO0VBT0FwQixRQUFRb0QsR0FBQSxFQUFLO0lBQ1QsSUFBSSxDQUFDLEtBQUt4RSxTQUFBLEVBQVc7TUFDakIsS0FBS3FGLFlBQUEsQ0FBYSxpQkFBaUJiLEdBQUc7SUFDMUM7RUFDSjtFQVFBbkQsUUFBUWlFLE1BQUEsRUFBUUMsV0FBQSxFQUFhO0lBQ3pCLEtBQUt2RixTQUFBLEdBQVk7SUFDakIsT0FBTyxLQUFLckIsRUFBQTtJQUNaLEtBQUswRyxZQUFBLENBQWEsY0FBY0MsTUFBQSxFQUFRQyxXQUFXO0VBQ3ZEO0VBT0FwRSxTQUFTaUIsTUFBQSxFQUFRO0lBQ2IsTUFBTW9ELGFBQUEsR0FBZ0JwRCxNQUFBLENBQU90QyxHQUFBLEtBQVEsS0FBS0EsR0FBQTtJQUMxQyxJQUFJLENBQUMwRixhQUFBLEVBQ0Q7SUFDSixRQUFRcEQsTUFBQSxDQUFPQyxJQUFBO01BQUEsS0FDTm5ELGFBQUEsQ0FBQW9ELFVBQUEsQ0FBVzBDLE9BQUE7UUFDWixJQUFJNUMsTUFBQSxDQUFPSSxJQUFBLElBQVFKLE1BQUEsQ0FBT0ksSUFBQSxDQUFLaUQsR0FBQSxFQUFLO1VBQ2hDLEtBQUtDLFNBQUEsQ0FBVXRELE1BQUEsQ0FBT0ksSUFBQSxDQUFLaUQsR0FBQSxFQUFLckQsTUFBQSxDQUFPSSxJQUFBLENBQUswQyxHQUFHO1FBQ25ELE9BQ0s7VUFDRCxLQUFLRyxZQUFBLENBQWEsaUJBQWlCLElBQUl2RCxLQUFBLENBQU0sMkxBQTJMLENBQUM7UUFDN087UUFDQTtNQUFBLEtBQ0M1QyxhQUFBLENBQUFvRCxVQUFBLENBQVdDLEtBQUE7TUFBQSxLQUNYckQsYUFBQSxDQUFBb0QsVUFBQSxDQUFXcUQsWUFBQTtRQUNaLEtBQUtDLE9BQUEsQ0FBUXhELE1BQU07UUFDbkI7TUFBQSxLQUNDbEQsYUFBQSxDQUFBb0QsVUFBQSxDQUFXdUQsR0FBQTtNQUFBLEtBQ1gzRyxhQUFBLENBQUFvRCxVQUFBLENBQVd3RCxVQUFBO1FBQ1osS0FBS0MsS0FBQSxDQUFNM0QsTUFBTTtRQUNqQjtNQUFBLEtBQ0NsRCxhQUFBLENBQUFvRCxVQUFBLENBQVcwRCxVQUFBO1FBQ1osS0FBS0MsWUFBQSxDQUFhO1FBQ2xCO01BQUEsS0FDQy9HLGFBQUEsQ0FBQW9ELFVBQUEsQ0FBVzRELGFBQUE7UUFDWixLQUFLQyxPQUFBLENBQVE7UUFDYixNQUFNM0IsR0FBQSxHQUFNLElBQUkxQyxLQUFBLENBQU1NLE1BQUEsQ0FBT0ksSUFBQSxDQUFLNEQsT0FBTztRQUV6QzVCLEdBQUEsQ0FBSWhDLElBQUEsR0FBT0osTUFBQSxDQUFPSSxJQUFBLENBQUtBLElBQUE7UUFDdkIsS0FBSzZDLFlBQUEsQ0FBYSxpQkFBaUJiLEdBQUc7UUFDdEM7SUFBQTtFQUVaO0VBT0FvQixRQUFReEQsTUFBQSxFQUFRO0lBQ1osTUFBTVgsSUFBQSxHQUFPVyxNQUFBLENBQU9JLElBQUEsSUFBUSxFQUFDO0lBQzdCLElBQUksUUFBUUosTUFBQSxDQUFPekQsRUFBQSxFQUFJO01BQ25COEMsSUFBQSxDQUFLNEIsSUFBQSxDQUFLLEtBQUtULEdBQUEsQ0FBSVIsTUFBQSxDQUFPekQsRUFBRSxDQUFDO0lBQ2pDO0lBQ0EsSUFBSSxLQUFLcUIsU0FBQSxFQUFXO01BQ2hCLEtBQUtxRyxTQUFBLENBQVU1RSxJQUFJO0lBQ3ZCLE9BQ0s7TUFDRCxLQUFLdkIsYUFBQSxDQUFjbUQsSUFBQSxDQUFLaEUsTUFBQSxDQUFPQyxNQUFBLENBQU9tQyxJQUFJLENBQUM7SUFDL0M7RUFDSjtFQUNBNEUsVUFBVTVFLElBQUEsRUFBTTtJQUNaLElBQUksS0FBSzZFLGFBQUEsSUFBaUIsS0FBS0EsYUFBQSxDQUFjM0QsTUFBQSxFQUFRO01BQ2pELE1BQU00RCxTQUFBLEdBQVksS0FBS0QsYUFBQSxDQUFjRSxLQUFBLENBQU07TUFDM0MsV0FBV0MsUUFBQSxJQUFZRixTQUFBLEVBQVc7UUFDOUJFLFFBQUEsQ0FBUzdFLEtBQUEsQ0FBTSxNQUFNSCxJQUFJO01BQzdCO0lBQ0o7SUFDQSxNQUFNRSxJQUFBLENBQUtDLEtBQUEsQ0FBTSxNQUFNSCxJQUFJO0lBQzNCLElBQUksS0FBS3dELElBQUEsSUFBUXhELElBQUEsQ0FBS2tCLE1BQUEsSUFBVSxPQUFPbEIsSUFBQSxDQUFLQSxJQUFBLENBQUtrQixNQUFBLEdBQVMsT0FBTyxVQUFVO01BQ3ZFLEtBQUt5QyxXQUFBLEdBQWMzRCxJQUFBLENBQUtBLElBQUEsQ0FBS2tCLE1BQUEsR0FBUztJQUMxQztFQUNKO0VBTUFDLElBQUlqRSxFQUFBLEVBQUk7SUFDSixNQUFNK0gsSUFBQSxHQUFPO0lBQ2IsSUFBSUMsSUFBQSxHQUFPO0lBQ1gsT0FBTyxhQUFhbEYsSUFBQSxFQUFNO01BRXRCLElBQUlrRixJQUFBLEVBQ0E7TUFDSkEsSUFBQSxHQUFPO01BQ1BELElBQUEsQ0FBS3RFLE1BQUEsQ0FBTztRQUNSQyxJQUFBLEVBQU1uRCxhQUFBLENBQUFvRCxVQUFBLENBQVd1RCxHQUFBO1FBQ2pCbEgsRUFBQTtRQUNBNkQsSUFBQSxFQUFNZjtNQUNWLENBQUM7SUFDTDtFQUNKO0VBT0FzRSxNQUFNM0QsTUFBQSxFQUFRO0lBQ1YsTUFBTVEsR0FBQSxHQUFNLEtBQUtyQyxJQUFBLENBQUs2QixNQUFBLENBQU96RCxFQUFBO0lBQzdCLElBQUksZUFBZSxPQUFPaUUsR0FBQSxFQUFLO01BQzNCQSxHQUFBLENBQUloQixLQUFBLENBQU0sTUFBTVEsTUFBQSxDQUFPSSxJQUFJO01BQzNCLE9BQU8sS0FBS2pDLElBQUEsQ0FBSzZCLE1BQUEsQ0FBT3pELEVBQUE7SUFDNUIsT0FDSyxDQUNMO0VBQ0o7RUFNQStHLFVBQVUvRyxFQUFBLEVBQUl1RyxHQUFBLEVBQUs7SUFDZixLQUFLdkcsRUFBQSxHQUFLQSxFQUFBO0lBQ1YsS0FBS3NCLFNBQUEsR0FBWWlGLEdBQUEsSUFBTyxLQUFLRCxJQUFBLEtBQVNDLEdBQUE7SUFDdEMsS0FBS0QsSUFBQSxHQUFPQyxHQUFBO0lBQ1osS0FBS2xGLFNBQUEsR0FBWTtJQUNqQixLQUFLNEcsWUFBQSxDQUFhO0lBQ2xCLEtBQUt2QixZQUFBLENBQWEsU0FBUztJQUMzQixLQUFLVCxXQUFBLENBQVksSUFBSTtFQUN6QjtFQU1BZ0MsYUFBQSxFQUFlO0lBQ1gsS0FBSzFHLGFBQUEsQ0FBYzJHLE9BQUEsQ0FBU3BGLElBQUEsSUFBUyxLQUFLNEUsU0FBQSxDQUFVNUUsSUFBSSxDQUFDO0lBQ3pELEtBQUt2QixhQUFBLEdBQWdCLEVBQUM7SUFDdEIsS0FBS0MsVUFBQSxDQUFXMEcsT0FBQSxDQUFTekUsTUFBQSxJQUFXO01BQ2hDLEtBQUtnQix1QkFBQSxDQUF3QmhCLE1BQU07TUFDbkMsS0FBS0EsTUFBQSxDQUFPQSxNQUFNO0lBQ3RCLENBQUM7SUFDRCxLQUFLakMsVUFBQSxHQUFhLEVBQUM7RUFDdkI7RUFNQThGLGFBQUEsRUFBZTtJQUNYLEtBQUtFLE9BQUEsQ0FBUTtJQUNiLEtBQUs5RSxPQUFBLENBQVEsc0JBQXNCO0VBQ3ZDO0VBUUE4RSxRQUFBLEVBQVU7SUFDTixJQUFJLEtBQUtuRixJQUFBLEVBQU07TUFFWCxLQUFLQSxJQUFBLENBQUs2RixPQUFBLENBQVM3SCxVQUFBLElBQWVBLFVBQUEsQ0FBVyxDQUFDO01BQzlDLEtBQUtnQyxJQUFBLEdBQU87SUFDaEI7SUFDQSxLQUFLMUQsRUFBQSxDQUFHLFlBQVksSUFBSTtFQUM1QjtFQWlCQWtDLFdBQUEsRUFBYTtJQUNULElBQUksS0FBS1EsU0FBQSxFQUFXO01BQ2hCLEtBQUtvQyxNQUFBLENBQU87UUFBRUMsSUFBQSxFQUFNbkQsYUFBQSxDQUFBb0QsVUFBQSxDQUFXMEQ7TUFBVyxDQUFDO0lBQy9DO0lBRUEsS0FBS0csT0FBQSxDQUFRO0lBQ2IsSUFBSSxLQUFLbkcsU0FBQSxFQUFXO01BRWhCLEtBQUtxQixPQUFBLENBQVEsc0JBQXNCO0lBQ3ZDO0lBQ0EsT0FBTztFQUNYO0VBTUF5RixNQUFBLEVBQVE7SUFDSixPQUFPLEtBQUt0SCxVQUFBLENBQVc7RUFDM0I7RUFVQWtELFNBQVNBLFFBQUEsRUFBVTtJQUNmLEtBQUtsQyxLQUFBLENBQU1rQyxRQUFBLEdBQVdBLFFBQUE7SUFDdEIsT0FBTztFQUNYO0VBVUEsSUFBSVIsU0FBQSxFQUFXO0lBQ1gsS0FBSzFCLEtBQUEsQ0FBTTBCLFFBQUEsR0FBVztJQUN0QixPQUFPO0VBQ1g7RUFjQXFCLFFBQVFBLE9BQUEsRUFBUztJQUNiLEtBQUsvQyxLQUFBLENBQU0rQyxPQUFBLEdBQVVBLE9BQUE7SUFDckIsT0FBTztFQUNYO0VBWUF3RCxNQUFNTixRQUFBLEVBQVU7SUFDWixLQUFLSCxhQUFBLEdBQWdCLEtBQUtBLGFBQUEsSUFBaUIsRUFBQztJQUM1QyxLQUFLQSxhQUFBLENBQWNqRCxJQUFBLENBQUtvRCxRQUFRO0lBQ2hDLE9BQU87RUFDWDtFQVlBTyxXQUFXUCxRQUFBLEVBQVU7SUFDakIsS0FBS0gsYUFBQSxHQUFnQixLQUFLQSxhQUFBLElBQWlCLEVBQUM7SUFDNUMsS0FBS0EsYUFBQSxDQUFjNUUsT0FBQSxDQUFRK0UsUUFBUTtJQUNuQyxPQUFPO0VBQ1g7RUFtQkFRLE9BQU9SLFFBQUEsRUFBVTtJQUNiLElBQUksQ0FBQyxLQUFLSCxhQUFBLEVBQWU7TUFDckIsT0FBTztJQUNYO0lBQ0EsSUFBSUcsUUFBQSxFQUFVO01BQ1YsTUFBTUYsU0FBQSxHQUFZLEtBQUtELGFBQUE7TUFDdkIsU0FBUzNDLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUk0QyxTQUFBLENBQVU1RCxNQUFBLEVBQVFnQixDQUFBLElBQUs7UUFDdkMsSUFBSThDLFFBQUEsS0FBYUYsU0FBQSxDQUFVNUMsQ0FBQSxHQUFJO1VBQzNCNEMsU0FBQSxDQUFVM0MsTUFBQSxDQUFPRCxDQUFBLEVBQUcsQ0FBQztVQUNyQixPQUFPO1FBQ1g7TUFDSjtJQUNKLE9BQ0s7TUFDRCxLQUFLMkMsYUFBQSxHQUFnQixFQUFDO0lBQzFCO0lBQ0EsT0FBTztFQUNYO0VBS0FZLGFBQUEsRUFBZTtJQUNYLE9BQU8sS0FBS1osYUFBQSxJQUFpQixFQUFDO0VBQ2xDO0VBY0FhLGNBQWNWLFFBQUEsRUFBVTtJQUNwQixLQUFLVyxxQkFBQSxHQUF3QixLQUFLQSxxQkFBQSxJQUF5QixFQUFDO0lBQzVELEtBQUtBLHFCQUFBLENBQXNCL0QsSUFBQSxDQUFLb0QsUUFBUTtJQUN4QyxPQUFPO0VBQ1g7RUFjQVksbUJBQW1CWixRQUFBLEVBQVU7SUFDekIsS0FBS1cscUJBQUEsR0FBd0IsS0FBS0EscUJBQUEsSUFBeUIsRUFBQztJQUM1RCxLQUFLQSxxQkFBQSxDQUFzQjFGLE9BQUEsQ0FBUStFLFFBQVE7SUFDM0MsT0FBTztFQUNYO0VBbUJBYSxlQUFlYixRQUFBLEVBQVU7SUFDckIsSUFBSSxDQUFDLEtBQUtXLHFCQUFBLEVBQXVCO01BQzdCLE9BQU87SUFDWDtJQUNBLElBQUlYLFFBQUEsRUFBVTtNQUNWLE1BQU1GLFNBQUEsR0FBWSxLQUFLYSxxQkFBQTtNQUN2QixTQUFTekQsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSTRDLFNBQUEsQ0FBVTVELE1BQUEsRUFBUWdCLENBQUEsSUFBSztRQUN2QyxJQUFJOEMsUUFBQSxLQUFhRixTQUFBLENBQVU1QyxDQUFBLEdBQUk7VUFDM0I0QyxTQUFBLENBQVUzQyxNQUFBLENBQU9ELENBQUEsRUFBRyxDQUFDO1VBQ3JCLE9BQU87UUFDWDtNQUNKO0lBQ0osT0FDSztNQUNELEtBQUt5RCxxQkFBQSxHQUF3QixFQUFDO0lBQ2xDO0lBQ0EsT0FBTztFQUNYO0VBS0FHLHFCQUFBLEVBQXVCO0lBQ25CLE9BQU8sS0FBS0gscUJBQUEsSUFBeUIsRUFBQztFQUMxQztFQVFBaEUsd0JBQXdCaEIsTUFBQSxFQUFRO0lBQzVCLElBQUksS0FBS2dGLHFCQUFBLElBQXlCLEtBQUtBLHFCQUFBLENBQXNCekUsTUFBQSxFQUFRO01BQ2pFLE1BQU00RCxTQUFBLEdBQVksS0FBS2EscUJBQUEsQ0FBc0JaLEtBQUEsQ0FBTTtNQUNuRCxXQUFXQyxRQUFBLElBQVlGLFNBQUEsRUFBVztRQUM5QkUsUUFBQSxDQUFTN0UsS0FBQSxDQUFNLE1BQU1RLE1BQUEsQ0FBT0ksSUFBSTtNQUNwQztJQUNKO0VBQ0o7QUFDSjs7O0FDMXpCTyxTQUFTZ0YsUUFBUXpILElBQUEsRUFBTTtFQUMxQkEsSUFBQSxHQUFPQSxJQUFBLElBQVEsQ0FBQztFQUNoQixLQUFLMEgsRUFBQSxHQUFLMUgsSUFBQSxDQUFLMkgsR0FBQSxJQUFPO0VBQ3RCLEtBQUtDLEdBQUEsR0FBTTVILElBQUEsQ0FBSzRILEdBQUEsSUFBTztFQUN2QixLQUFLQyxNQUFBLEdBQVM3SCxJQUFBLENBQUs2SCxNQUFBLElBQVU7RUFDN0IsS0FBS0MsTUFBQSxHQUFTOUgsSUFBQSxDQUFLOEgsTUFBQSxHQUFTLEtBQUs5SCxJQUFBLENBQUs4SCxNQUFBLElBQVUsSUFBSTlILElBQUEsQ0FBSzhILE1BQUEsR0FBUztFQUNsRSxLQUFLQyxRQUFBLEdBQVc7QUFDcEI7QUFPQU4sT0FBQSxDQUFRTyxTQUFBLENBQVVDLFFBQUEsR0FBVyxZQUFZO0VBQ3JDLElBQUlQLEVBQUEsR0FBSyxLQUFLQSxFQUFBLEdBQUtRLElBQUEsQ0FBS0MsR0FBQSxDQUFJLEtBQUtOLE1BQUEsRUFBUSxLQUFLRSxRQUFBLEVBQVU7RUFDeEQsSUFBSSxLQUFLRCxNQUFBLEVBQVE7SUFDYixJQUFJTSxJQUFBLEdBQU9GLElBQUEsQ0FBS0csTUFBQSxDQUFPO0lBQ3ZCLElBQUlDLFNBQUEsR0FBWUosSUFBQSxDQUFLSyxLQUFBLENBQU1ILElBQUEsR0FBTyxLQUFLTixNQUFBLEdBQVNKLEVBQUU7SUFDbERBLEVBQUEsSUFBTVEsSUFBQSxDQUFLSyxLQUFBLENBQU1ILElBQUEsR0FBTyxFQUFFLElBQUksTUFBTSxJQUFJVixFQUFBLEdBQUtZLFNBQUEsR0FBWVosRUFBQSxHQUFLWSxTQUFBO0VBQ2xFO0VBQ0EsT0FBT0osSUFBQSxDQUFLUCxHQUFBLENBQUlELEVBQUEsRUFBSSxLQUFLRSxHQUFHLElBQUk7QUFDcEM7QUFNQUgsT0FBQSxDQUFRTyxTQUFBLENBQVVRLEtBQUEsR0FBUSxZQUFZO0VBQ2xDLEtBQUtULFFBQUEsR0FBVztBQUNwQjtBQU1BTixPQUFBLENBQVFPLFNBQUEsQ0FBVVMsTUFBQSxHQUFTLFVBQVVkLEdBQUEsRUFBSztFQUN0QyxLQUFLRCxFQUFBLEdBQUtDLEdBQUE7QUFDZDtBQU1BRixPQUFBLENBQVFPLFNBQUEsQ0FBVVUsTUFBQSxHQUFTLFVBQVVkLEdBQUEsRUFBSztFQUN0QyxLQUFLQSxHQUFBLEdBQU1BLEdBQUE7QUFDZjtBQU1BSCxPQUFBLENBQVFPLFNBQUEsQ0FBVVcsU0FBQSxHQUFZLFVBQVViLE1BQUEsRUFBUTtFQUM1QyxLQUFLQSxNQUFBLEdBQVNBLE1BQUE7QUFDbEI7OztBQ2pFQSxJQUFBYyxjQUFBLEdBQW1FOUssT0FBQTtBQUVuRSxJQUFBK0ssTUFBQSxHQUF3QkMsT0FBQSxDQUFBaEwsT0FBQTtBQUd4QixJQUFBaUwseUJBQUEsR0FBeUJqTCxPQUFBO0FBQ2xCLElBQU1iLE9BQUEsR0FBTixjQUFzQjhMLHlCQUFBLENBQUFsSixPQUFBLENBQVE7RUFDakNDLFlBQVk5QixHQUFBLEVBQUtnQyxJQUFBLEVBQU07SUFDbkIsSUFBSXVELEVBQUE7SUFDSixNQUFNO0lBQ04sS0FBS3lGLElBQUEsR0FBTyxDQUFDO0lBQ2IsS0FBSy9ILElBQUEsR0FBTyxFQUFDO0lBQ2IsSUFBSWpELEdBQUEsSUFBTyxhQUFhLE9BQU9BLEdBQUEsRUFBSztNQUNoQ2dDLElBQUEsR0FBT2hDLEdBQUE7TUFDUEEsR0FBQSxHQUFNO0lBQ1Y7SUFDQWdDLElBQUEsR0FBT0EsSUFBQSxJQUFRLENBQUM7SUFDaEJBLElBQUEsQ0FBSy9CLElBQUEsR0FBTytCLElBQUEsQ0FBSy9CLElBQUEsSUFBUTtJQUN6QixLQUFLK0IsSUFBQSxHQUFPQSxJQUFBO0lBQ1osSUFBQTRJLGNBQUEsQ0FBQUsscUJBQUEsRUFBc0IsTUFBTWpKLElBQUk7SUFDaEMsS0FBS2tKLFlBQUEsQ0FBYWxKLElBQUEsQ0FBS2tKLFlBQUEsS0FBaUIsS0FBSztJQUM3QyxLQUFLQyxvQkFBQSxDQUFxQm5KLElBQUEsQ0FBS21KLG9CQUFBLElBQXdCQyxRQUFRO0lBQy9ELEtBQUtDLGlCQUFBLENBQWtCckosSUFBQSxDQUFLcUosaUJBQUEsSUFBcUIsR0FBSTtJQUNyRCxLQUFLQyxvQkFBQSxDQUFxQnRKLElBQUEsQ0FBS3NKLG9CQUFBLElBQXdCLEdBQUk7SUFDM0QsS0FBS0MsbUJBQUEsRUFBcUJoRyxFQUFBLEdBQUt2RCxJQUFBLENBQUt1SixtQkFBQSxNQUF5QixRQUFRaEcsRUFBQSxLQUFPLFNBQVNBLEVBQUEsR0FBSyxHQUFHO0lBQzdGLEtBQUtpRyxPQUFBLEdBQVUsSUFBSS9CLE9BQUEsQ0FBUTtNQUN2QkUsR0FBQSxFQUFLLEtBQUswQixpQkFBQSxDQUFrQjtNQUM1QnpCLEdBQUEsRUFBSyxLQUFLMEIsb0JBQUEsQ0FBcUI7TUFDL0J4QixNQUFBLEVBQVEsS0FBS3lCLG1CQUFBLENBQW9CO0lBQ3JDLENBQUM7SUFDRCxLQUFLL0YsT0FBQSxDQUFRLFFBQVF4RCxJQUFBLENBQUt3RCxPQUFBLEdBQVUsTUFBUXhELElBQUEsQ0FBS3dELE9BQU87SUFDeEQsS0FBS2hDLFdBQUEsR0FBYztJQUNuQixLQUFLeEQsR0FBQSxHQUFNQSxHQUFBO0lBQ1gsTUFBTXlMLE9BQUEsR0FBVXpKLElBQUEsQ0FBSzZJLE1BQUEsSUFBVUEsTUFBQTtJQUMvQixLQUFLYSxPQUFBLEdBQVUsSUFBSUQsT0FBQSxDQUFRRSxPQUFBLENBQVE7SUFDbkMsS0FBS0MsT0FBQSxHQUFVLElBQUlILE9BQUEsQ0FBUUksT0FBQSxDQUFRO0lBQ25DLEtBQUtoSixZQUFBLEdBQWViLElBQUEsQ0FBSzhKLFdBQUEsS0FBZ0I7SUFDekMsSUFBSSxLQUFLakosWUFBQSxFQUNMLEtBQUtDLElBQUEsQ0FBSztFQUNsQjtFQUNBb0ksYUFBYWEsQ0FBQSxFQUFHO0lBQ1osSUFBSSxDQUFDQyxTQUFBLENBQVVwSCxNQUFBLEVBQ1gsT0FBTyxLQUFLcUgsYUFBQTtJQUNoQixLQUFLQSxhQUFBLEdBQWdCLENBQUMsQ0FBQ0YsQ0FBQTtJQUN2QixPQUFPO0VBQ1g7RUFDQVoscUJBQXFCWSxDQUFBLEVBQUc7SUFDcEIsSUFBSUEsQ0FBQSxLQUFNLFFBQ04sT0FBTyxLQUFLRyxxQkFBQTtJQUNoQixLQUFLQSxxQkFBQSxHQUF3QkgsQ0FBQTtJQUM3QixPQUFPO0VBQ1g7RUFDQVYsa0JBQWtCVSxDQUFBLEVBQUc7SUFDakIsSUFBSXhHLEVBQUE7SUFDSixJQUFJd0csQ0FBQSxLQUFNLFFBQ04sT0FBTyxLQUFLSSxrQkFBQTtJQUNoQixLQUFLQSxrQkFBQSxHQUFxQkosQ0FBQTtJQUMxQixDQUFDeEcsRUFBQSxHQUFLLEtBQUtpRyxPQUFBLE1BQWEsUUFBUWpHLEVBQUEsS0FBTyxTQUFTLFNBQVNBLEVBQUEsQ0FBR2tGLE1BQUEsQ0FBT3NCLENBQUM7SUFDcEUsT0FBTztFQUNYO0VBQ0FSLG9CQUFvQlEsQ0FBQSxFQUFHO0lBQ25CLElBQUl4RyxFQUFBO0lBQ0osSUFBSXdHLENBQUEsS0FBTSxRQUNOLE9BQU8sS0FBS0ssb0JBQUE7SUFDaEIsS0FBS0Esb0JBQUEsR0FBdUJMLENBQUE7SUFDNUIsQ0FBQ3hHLEVBQUEsR0FBSyxLQUFLaUcsT0FBQSxNQUFhLFFBQVFqRyxFQUFBLEtBQU8sU0FBUyxTQUFTQSxFQUFBLENBQUdvRixTQUFBLENBQVVvQixDQUFDO0lBQ3ZFLE9BQU87RUFDWDtFQUNBVCxxQkFBcUJTLENBQUEsRUFBRztJQUNwQixJQUFJeEcsRUFBQTtJQUNKLElBQUl3RyxDQUFBLEtBQU0sUUFDTixPQUFPLEtBQUtNLHFCQUFBO0lBQ2hCLEtBQUtBLHFCQUFBLEdBQXdCTixDQUFBO0lBQzdCLENBQUN4RyxFQUFBLEdBQUssS0FBS2lHLE9BQUEsTUFBYSxRQUFRakcsRUFBQSxLQUFPLFNBQVMsU0FBU0EsRUFBQSxDQUFHbUYsTUFBQSxDQUFPcUIsQ0FBQztJQUNwRSxPQUFPO0VBQ1g7RUFDQXZHLFFBQVF1RyxDQUFBLEVBQUc7SUFDUCxJQUFJLENBQUNDLFNBQUEsQ0FBVXBILE1BQUEsRUFDWCxPQUFPLEtBQUswSCxRQUFBO0lBQ2hCLEtBQUtBLFFBQUEsR0FBV1AsQ0FBQTtJQUNoQixPQUFPO0VBQ1g7RUFPQVEscUJBQUEsRUFBdUI7SUFFbkIsSUFBSSxDQUFDLEtBQUtDLGFBQUEsSUFDTixLQUFLUCxhQUFBLElBQ0wsS0FBS1QsT0FBQSxDQUFRekIsUUFBQSxLQUFhLEdBQUc7TUFFN0IsS0FBSzBDLFNBQUEsQ0FBVTtJQUNuQjtFQUNKO0VBUUEzSixLQUFLOUIsRUFBQSxFQUFJO0lBQ0wsSUFBSSxDQUFDLEtBQUt3QyxXQUFBLENBQVk3QyxPQUFBLENBQVEsTUFBTSxHQUNoQyxPQUFPO0lBQ1gsS0FBS3NFLE1BQUEsR0FBUyxJQUFJMkYsY0FBQSxDQUFBMUwsTUFBQSxDQUFPLEtBQUtjLEdBQUEsRUFBSyxLQUFLZ0MsSUFBSTtJQUM1QyxNQUFNMEssTUFBQSxHQUFTLEtBQUt6SCxNQUFBO0lBQ3BCLE1BQU0wRCxJQUFBLEdBQU87SUFDYixLQUFLbkYsV0FBQSxHQUFjO0lBQ25CLEtBQUttSixhQUFBLEdBQWdCO0lBRXJCLE1BQU1DLGNBQUEsR0FBaUI5TCxFQUFBLENBQUc0TCxNQUFBLEVBQVEsUUFBUSxZQUFZO01BQ2xEL0QsSUFBQSxDQUFLekYsTUFBQSxDQUFPO01BQ1psQyxFQUFBLElBQU1BLEVBQUEsQ0FBRztJQUNiLENBQUM7SUFDRCxNQUFNNkwsT0FBQSxHQUFXcEcsR0FBQSxJQUFRO01BQ3JCLEtBQUtxRyxPQUFBLENBQVE7TUFDYixLQUFLdEosV0FBQSxHQUFjO01BQ25CLEtBQUs4RCxZQUFBLENBQWEsU0FBU2IsR0FBRztNQUM5QixJQUFJekYsRUFBQSxFQUFJO1FBQ0pBLEVBQUEsQ0FBR3lGLEdBQUc7TUFDVixPQUNLO1FBRUQsS0FBSzhGLG9CQUFBLENBQXFCO01BQzlCO0lBQ0o7SUFFQSxNQUFNUSxRQUFBLEdBQVdqTSxFQUFBLENBQUc0TCxNQUFBLEVBQVEsU0FBU0csT0FBTztJQUM1QyxJQUFJLFVBQVUsS0FBS1AsUUFBQSxFQUFVO01BQ3pCLE1BQU05RyxPQUFBLEdBQVUsS0FBSzhHLFFBQUE7TUFFckIsTUFBTTVHLEtBQUEsR0FBUSxLQUFLQyxZQUFBLENBQWEsTUFBTTtRQUNsQ2lILGNBQUEsQ0FBZTtRQUNmQyxPQUFBLENBQVEsSUFBSTlJLEtBQUEsQ0FBTSxTQUFTLENBQUM7UUFDNUIySSxNQUFBLENBQU8zRCxLQUFBLENBQU07TUFDakIsR0FBR3ZELE9BQU87TUFDVixJQUFJLEtBQUt4RCxJQUFBLENBQUtnTCxTQUFBLEVBQVc7UUFDckJ0SCxLQUFBLENBQU11SCxLQUFBLENBQU07TUFDaEI7TUFDQSxLQUFLaEssSUFBQSxDQUFLcUMsSUFBQSxDQUFLLE1BQU07UUFDakIsS0FBS1MsY0FBQSxDQUFlTCxLQUFLO01BQzdCLENBQUM7SUFDTDtJQUNBLEtBQUt6QyxJQUFBLENBQUtxQyxJQUFBLENBQUtzSCxjQUFjO0lBQzdCLEtBQUszSixJQUFBLENBQUtxQyxJQUFBLENBQUt5SCxRQUFRO0lBQ3ZCLE9BQU87RUFDWDtFQU9BNU4sUUFBUTZCLEVBQUEsRUFBSTtJQUNSLE9BQU8sS0FBSzhCLElBQUEsQ0FBSzlCLEVBQUU7RUFDdkI7RUFNQWtDLE9BQUEsRUFBUztJQUVMLEtBQUs0SixPQUFBLENBQVE7SUFFYixLQUFLdEosV0FBQSxHQUFjO0lBQ25CLEtBQUs4RCxZQUFBLENBQWEsTUFBTTtJQUV4QixNQUFNb0YsTUFBQSxHQUFTLEtBQUt6SCxNQUFBO0lBQ3BCLEtBQUtoQyxJQUFBLENBQUtxQyxJQUFBLENBQUt4RSxFQUFBLENBQUc0TCxNQUFBLEVBQVEsUUFBUSxLQUFLUSxNQUFBLENBQU8vSixJQUFBLENBQUssSUFBSSxDQUFDLEdBQUdyQyxFQUFBLENBQUc0TCxNQUFBLEVBQVEsUUFBUSxLQUFLUyxNQUFBLENBQU9oSyxJQUFBLENBQUssSUFBSSxDQUFDLEdBQUdyQyxFQUFBLENBQUc0TCxNQUFBLEVBQVEsU0FBUyxLQUFLckosT0FBQSxDQUFRRixJQUFBLENBQUssSUFBSSxDQUFDLEdBQUdyQyxFQUFBLENBQUc0TCxNQUFBLEVBQVEsU0FBUyxLQUFLcEosT0FBQSxDQUFRSCxJQUFBLENBQUssSUFBSSxDQUFDLEdBQUdyQyxFQUFBLENBQUcsS0FBSzhLLE9BQUEsRUFBUyxXQUFXLEtBQUt3QixTQUFBLENBQVVqSyxJQUFBLENBQUssSUFBSSxDQUFDLENBQUM7RUFDN1A7RUFNQStKLE9BQUEsRUFBUztJQUNMLEtBQUs1RixZQUFBLENBQWEsTUFBTTtFQUM1QjtFQU1BNkYsT0FBTzFJLElBQUEsRUFBTTtJQUNULElBQUk7TUFDQSxLQUFLbUgsT0FBQSxDQUFReUIsR0FBQSxDQUFJNUksSUFBSTtJQUN6QixTQUNPNkksQ0FBQSxFQUFQO01BQ0ksS0FBS2hLLE9BQUEsQ0FBUSxlQUFlZ0ssQ0FBQztJQUNqQztFQUNKO0VBTUFGLFVBQVUvSSxNQUFBLEVBQVE7SUFFZCxJQUFBdUcsY0FBQSxDQUFBMkMsUUFBQSxFQUFTLE1BQU07TUFDWCxLQUFLakcsWUFBQSxDQUFhLFVBQVVqRCxNQUFNO0lBQ3RDLEdBQUcsS0FBS3NCLFlBQVk7RUFDeEI7RUFNQXRDLFFBQVFvRCxHQUFBLEVBQUs7SUFDVCxLQUFLYSxZQUFBLENBQWEsU0FBU2IsR0FBRztFQUNsQztFQU9BaUcsT0FBTzNLLEdBQUEsRUFBS0MsSUFBQSxFQUFNO0lBQ2QsSUFBSTBLLE1BQUEsR0FBUyxLQUFLMUIsSUFBQSxDQUFLakosR0FBQTtJQUN2QixJQUFJLENBQUMySyxNQUFBLEVBQVE7TUFDVEEsTUFBQSxHQUFTLElBQUl4TixNQUFBLENBQU8sTUFBTTZDLEdBQUEsRUFBS0MsSUFBSTtNQUNuQyxLQUFLZ0osSUFBQSxDQUFLakosR0FBQSxJQUFPMkssTUFBQTtJQUNyQixXQUNTLEtBQUs3SixZQUFBLElBQWdCLENBQUM2SixNQUFBLENBQU9uSixNQUFBLEVBQVE7TUFDMUNtSixNQUFBLENBQU92TixPQUFBLENBQVE7SUFDbkI7SUFDQSxPQUFPdU4sTUFBQTtFQUNYO0VBT0FjLFNBQVNkLE1BQUEsRUFBUTtJQUNiLE1BQU0xQixJQUFBLEdBQU8xSixNQUFBLENBQU9tTSxJQUFBLENBQUssS0FBS3pDLElBQUk7SUFDbEMsV0FBV2pKLEdBQUEsSUFBT2lKLElBQUEsRUFBTTtNQUNwQixNQUFNMEMsT0FBQSxHQUFTLEtBQUsxQyxJQUFBLENBQUtqSixHQUFBO01BQ3pCLElBQUkyTCxPQUFBLENBQU9uSyxNQUFBLEVBQVE7UUFDZjtNQUNKO0lBQ0o7SUFDQSxLQUFLb0ssTUFBQSxDQUFPO0VBQ2hCO0VBT0E1RyxRQUFRMUMsTUFBQSxFQUFRO0lBQ1osTUFBTXVKLGNBQUEsR0FBaUIsS0FBS2xDLE9BQUEsQ0FBUW1DLE1BQUEsQ0FBT3hKLE1BQU07SUFDakQsU0FBU3VCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlnSSxjQUFBLENBQWVoSixNQUFBLEVBQVFnQixDQUFBLElBQUs7TUFDNUMsS0FBS1gsTUFBQSxDQUFPNkksS0FBQSxDQUFNRixjQUFBLENBQWVoSSxDQUFBLEdBQUl2QixNQUFBLENBQU9LLE9BQU87SUFDdkQ7RUFDSjtFQU1Bb0ksUUFBQSxFQUFVO0lBQ04sS0FBSzdKLElBQUEsQ0FBSzZGLE9BQUEsQ0FBUzdILFVBQUEsSUFBZUEsVUFBQSxDQUFXLENBQUM7SUFDOUMsS0FBS2dDLElBQUEsQ0FBSzJCLE1BQUEsR0FBUztJQUNuQixLQUFLZ0gsT0FBQSxDQUFReEQsT0FBQSxDQUFRO0VBQ3pCO0VBTUF1RixPQUFBLEVBQVM7SUFDTCxLQUFLaEIsYUFBQSxHQUFnQjtJQUNyQixLQUFLSCxhQUFBLEdBQWdCO0lBQ3JCLEtBQUtsSixPQUFBLENBQVEsY0FBYztJQUMzQixJQUFJLEtBQUsyQixNQUFBLEVBQ0wsS0FBS0EsTUFBQSxDQUFPOEQsS0FBQSxDQUFNO0VBQzFCO0VBTUF0SCxXQUFBLEVBQWE7SUFDVCxPQUFPLEtBQUtrTSxNQUFBLENBQU87RUFDdkI7RUFNQXJLLFFBQVFpRSxNQUFBLEVBQVFDLFdBQUEsRUFBYTtJQUN6QixLQUFLc0YsT0FBQSxDQUFRO0lBQ2IsS0FBS3RCLE9BQUEsQ0FBUWhCLEtBQUEsQ0FBTTtJQUNuQixLQUFLaEgsV0FBQSxHQUFjO0lBQ25CLEtBQUs4RCxZQUFBLENBQWEsU0FBU0MsTUFBQSxFQUFRQyxXQUFXO0lBQzlDLElBQUksS0FBS3lFLGFBQUEsSUFBaUIsQ0FBQyxLQUFLVSxhQUFBLEVBQWU7TUFDM0MsS0FBS0YsU0FBQSxDQUFVO0lBQ25CO0VBQ0o7RUFNQUEsVUFBQSxFQUFZO0lBQ1IsSUFBSSxLQUFLRCxhQUFBLElBQWlCLEtBQUtHLGFBQUEsRUFDM0IsT0FBTztJQUNYLE1BQU1oRSxJQUFBLEdBQU87SUFDYixJQUFJLEtBQUs2QyxPQUFBLENBQVF6QixRQUFBLElBQVksS0FBS21DLHFCQUFBLEVBQXVCO01BQ3JELEtBQUtWLE9BQUEsQ0FBUWhCLEtBQUEsQ0FBTTtNQUNuQixLQUFLbEQsWUFBQSxDQUFhLGtCQUFrQjtNQUNwQyxLQUFLa0YsYUFBQSxHQUFnQjtJQUN6QixPQUNLO01BQ0QsTUFBTXVCLEtBQUEsR0FBUSxLQUFLdkMsT0FBQSxDQUFRdkIsUUFBQSxDQUFTO01BQ3BDLEtBQUt1QyxhQUFBLEdBQWdCO01BQ3JCLE1BQU05RyxLQUFBLEdBQVEsS0FBS0MsWUFBQSxDQUFhLE1BQU07UUFDbEMsSUFBSWdELElBQUEsQ0FBS2dFLGFBQUEsRUFDTDtRQUNKLEtBQUtyRixZQUFBLENBQWEscUJBQXFCcUIsSUFBQSxDQUFLNkMsT0FBQSxDQUFRekIsUUFBUTtRQUU1RCxJQUFJcEIsSUFBQSxDQUFLZ0UsYUFBQSxFQUNMO1FBQ0poRSxJQUFBLENBQUs3RixJQUFBLENBQU0yRCxHQUFBLElBQVE7VUFDZixJQUFJQSxHQUFBLEVBQUs7WUFDTGtDLElBQUEsQ0FBSzZELGFBQUEsR0FBZ0I7WUFDckI3RCxJQUFBLENBQUs4RCxTQUFBLENBQVU7WUFDZixLQUFLbkYsWUFBQSxDQUFhLG1CQUFtQmIsR0FBRztVQUM1QyxPQUNLO1lBQ0RrQyxJQUFBLENBQUtxRixXQUFBLENBQVk7VUFDckI7UUFDSixDQUFDO01BQ0wsR0FBR0QsS0FBSztNQUNSLElBQUksS0FBSy9MLElBQUEsQ0FBS2dMLFNBQUEsRUFBVztRQUNyQnRILEtBQUEsQ0FBTXVILEtBQUEsQ0FBTTtNQUNoQjtNQUNBLEtBQUtoSyxJQUFBLENBQUtxQyxJQUFBLENBQUssTUFBTTtRQUNqQixLQUFLUyxjQUFBLENBQWVMLEtBQUs7TUFDN0IsQ0FBQztJQUNMO0VBQ0o7RUFNQXNJLFlBQUEsRUFBYztJQUNWLE1BQU1DLE9BQUEsR0FBVSxLQUFLekMsT0FBQSxDQUFRekIsUUFBQTtJQUM3QixLQUFLeUMsYUFBQSxHQUFnQjtJQUNyQixLQUFLaEIsT0FBQSxDQUFRaEIsS0FBQSxDQUFNO0lBQ25CLEtBQUtsRCxZQUFBLENBQWEsYUFBYTJHLE9BQU87RUFDMUM7QUFDSjs7O0FDblRBLElBQUF4TyxjQUFBLEdBQXlCSyxPQUFBO0FBNUN6QixJQUFNb08sS0FBQSxHQUFRLENBQUM7QUFDZixTQUFTOU8sT0FBT1ksR0FBQSxFQUFLZ0MsSUFBQSxFQUFNO0VBQ3ZCLElBQUksT0FBT2hDLEdBQUEsS0FBUSxVQUFVO0lBQ3pCZ0MsSUFBQSxHQUFPaEMsR0FBQTtJQUNQQSxHQUFBLEdBQU07RUFDVjtFQUNBZ0MsSUFBQSxHQUFPQSxJQUFBLElBQVEsQ0FBQztFQUNoQixNQUFNbU0sTUFBQSxHQUFTcE8sR0FBQSxDQUFJQyxHQUFBLEVBQUtnQyxJQUFBLENBQUsvQixJQUFBLElBQVEsWUFBWTtFQUNqRCxNQUFNbU8sTUFBQSxHQUFTRCxNQUFBLENBQU9DLE1BQUE7RUFDdEIsTUFBTXhOLEVBQUEsR0FBS3VOLE1BQUEsQ0FBT3ZOLEVBQUE7RUFDbEIsTUFBTVgsSUFBQSxHQUFPa08sTUFBQSxDQUFPbE8sSUFBQTtFQUNwQixNQUFNd0gsYUFBQSxHQUFnQnlHLEtBQUEsQ0FBTXROLEVBQUEsS0FBT1gsSUFBQSxJQUFRaU8sS0FBQSxDQUFNdE4sRUFBQSxFQUFJO0VBQ3JELE1BQU15TixhQUFBLEdBQWdCck0sSUFBQSxDQUFLc00sUUFBQSxJQUN2QnRNLElBQUEsQ0FBSywyQkFDTCxVQUFVQSxJQUFBLENBQUt1TSxTQUFBLElBQ2Y5RyxhQUFBO0VBQ0osSUFBSWxJLEVBQUE7RUFDSixJQUFJOE8sYUFBQSxFQUFlO0lBQ2Y5TyxFQUFBLEdBQUssSUFBSU4sT0FBQSxDQUFRbVAsTUFBQSxFQUFRcE0sSUFBSTtFQUNqQyxPQUNLO0lBQ0QsSUFBSSxDQUFDa00sS0FBQSxDQUFNdE4sRUFBQSxHQUFLO01BQ1pzTixLQUFBLENBQU10TixFQUFBLElBQU0sSUFBSTNCLE9BQUEsQ0FBUW1QLE1BQUEsRUFBUXBNLElBQUk7SUFDeEM7SUFDQXpDLEVBQUEsR0FBSzJPLEtBQUEsQ0FBTXROLEVBQUE7RUFDZjtFQUNBLElBQUl1TixNQUFBLENBQU9LLEtBQUEsSUFBUyxDQUFDeE0sSUFBQSxDQUFLd00sS0FBQSxFQUFPO0lBQzdCeE0sSUFBQSxDQUFLd00sS0FBQSxHQUFRTCxNQUFBLENBQU9NLFFBQUE7RUFDeEI7RUFDQSxPQUFPbFAsRUFBQSxDQUFHbU4sTUFBQSxDQUFPeUIsTUFBQSxDQUFPbE8sSUFBQSxFQUFNK0IsSUFBSTtBQUN0QztBQUdBVixNQUFBLENBQU9zQixNQUFBLENBQU94RCxNQUFBLEVBQVE7RUFDbEJILE9BQUE7RUFDQUMsTUFBQTtFQUNBSyxFQUFBLEVBQUlILE1BQUE7RUFDSkQsT0FBQSxFQUFTQztBQUNiLENBQUM7OztBTnpDRCxJQUFPRSw4QkFBQSxHQUFRRixNQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==