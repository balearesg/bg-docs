System.register(["engine.io-parser@5.2.1","@socket.io/component-emitter@3.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.2.1"],["@socket.io/component-emitter","3.1.0"],["engine.io-client","6.5.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('engine.io-parser@5.2.1', dep), dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep)],
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

// .beyond/uimport/engine.io-client.6.5.2.js
var engine_io_client_6_5_2_exports = {};
__export(engine_io_client_6_5_2_exports, {
  Socket: () => Socket,
  Transport: () => Transport,
  installTimerFunctions: () => installTimerFunctions,
  nextTick: () => nextTick,
  parse: () => parse,
  protocol: () => protocol2,
  transports: () => transports
});
module.exports = __toCommonJS(engine_io_client_6_5_2_exports);

// node_modules/engine.io-client/build/esm/globalThis.browser.js
var globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();

// node_modules/engine.io-client/build/esm/util.js
function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
var NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
var NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
  }
}
var BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c = 0,
    length2 = 0;
  for (let i2 = 0, l = str.length; i2 < l; i2++) {
    c = str.charCodeAt(i2);
    if (c < 128) {
      length2 += 1;
    } else if (c < 2048) {
      length2 += 2;
    } else if (c < 55296 || c >= 57344) {
      length2 += 3;
    } else {
      i2++;
      length2 += 4;
    }
  }
  return length2;
}

// node_modules/engine.io-client/build/esm/contrib/parseqs.js
function encode(obj) {
  let str = "";
  for (let i2 in obj) {
    if (obj.hasOwnProperty(i2)) {
      if (str.length) str += "&";
      str += encodeURIComponent(i2) + "=" + encodeURIComponent(obj[i2]);
    }
  }
  return str;
}
function decode(qs) {
  let qry = {};
  let pairs = qs.split("&");
  for (let i2 = 0, l = pairs.length; i2 < l; i2++) {
    let pair = pairs[i2].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}

// node_modules/engine.io-client/build/esm/transport.js
var import_engine = require("engine.io-parser@5.2.1");
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var TransportError = class extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
};
var Transport = class extends import_component_emitter.Emitter {
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.socket = opts.socket;
  }
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  open() {
    this.readyState = "opening";
    this.doOpen();
    return this;
  }
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    } else {}
  }
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  onData(data) {
    const packet = (0, import_engine.decodePacket)(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
  pause(onPause) {}
  createUri(schema, query = {}) {
    return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
  }
  _hostname() {
    const hostname = this.opts.hostname;
    return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
  }
  _port() {
    if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
      return ":" + this.opts.port;
    } else {
      return "";
    }
  }
  _query(query) {
    const encodedQuery = encode(query);
    return encodedQuery.length ? "?" + encodedQuery : "";
  }
};

// node_modules/engine.io-client/build/esm/contrib/yeast.js
var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
  length = 64,
  map = {};
var seed = 0,
  i = 0,
  prev;
function encode2(num) {
  let encoded = "";
  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);
  return encoded;
}
function decode2(str) {
  let decoded = 0;
  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }
  return decoded;
}
function yeast() {
  const now = encode2(+new Date());
  if (now !== prev) return seed = 0, prev = now;
  return now + "." + encode2(seed++);
}
for (; i < length; i++) map[alphabet[i]] = i;

// node_modules/engine.io-client/build/esm/contrib/has-cors.js
var value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {}
var hasCORS = value;

// node_modules/engine.io-client/build/esm/transports/xmlhttprequest.browser.js
function XHR(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {}
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {}
  }
}
function createCookieJar() {}

// node_modules/engine.io-client/build/esm/transports/polling.js
var import_engine2 = require("engine.io-parser@5.2.1");
var import_component_emitter2 = require("@socket.io/component-emitter@3.1.0");
function empty() {}
var hasXHR2 = function () {
  const xhr = new XHR({
    xdomain: false
  });
  return null != xhr.responseType;
}();
var Polling = class extends Transport {
  constructor(opts) {
    super(opts);
    this.polling = false;
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
    }
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
    if (this.opts.withCredentials) {
      this.cookieJar = createCookieJar();
    }
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this.polling || !this.writable) {
      let total = 0;
      if (this.polling) {
        total++;
        this.once("pollComplete", function () {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function () {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  poll() {
    this.polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  onData(data) {
    const callback = packet => {
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      if ("close" === packet.type) {
        this.onClose({
          description: "transport closed by the server"
        });
        return false;
      }
      this.onPacket(packet);
    };
    (0, import_engine2.decodePayload)(data, this.socket.binaryType).forEach(callback);
    if ("closed" !== this.readyState) {
      this.polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this.poll();
      } else {}
    }
  }
  doClose() {
    const close = () => {
      this.write([{
        type: "close"
      }]);
    };
    if ("open" === this.readyState) {
      close();
    } else {
      this.once("open", close);
    }
  }
  write(packets) {
    this.writable = false;
    (0, import_engine2.encodePayload)(packets, data => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  uri() {
    const schema = this.opts.secure ? "https" : "http";
    const query = this.query || {};
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
  request(opts = {}) {
    Object.assign(opts, {
      xd: this.xd,
      cookieJar: this.cookieJar
    }, this.opts);
    return new Request(this.uri(), opts);
  }
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
};
var Request = class extends import_component_emitter2.Emitter {
  constructor(uri, opts) {
    super();
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.method = opts.method || "GET";
    this.uri = uri;
    this.data = void 0 !== opts.data ? opts.data : null;
    this.create();
  }
  create() {
    var _a;
    const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this.opts.xd;
    const xhr = this.xhr = new XHR(opts);
    try {
      xhr.open(this.method, this.uri, true);
      try {
        if (this.opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i2 in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i2)) {
              xhr.setRequestHeader(i2, this.opts.extraHeaders[i2]);
            }
          }
        }
      } catch (e) {}
      if ("POST" === this.method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {}
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e) {}
      (_a = this.opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this.opts.withCredentials;
      }
      if (this.opts.requestTimeout) {
        xhr.timeout = this.opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        var _a2;
        if (xhr.readyState === 3) {
          (_a2 = this.opts.cookieJar) === null || _a2 === void 0 ? void 0 : _a2.parseCookies(xhr);
        }
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this.onLoad();
        } else {
          this.setTimeoutFn(() => {
            this.onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this.data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this.onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }
  onError(err) {
    this.emitReserved("error", err, this.xhr);
    this.cleanup(true);
  }
  cleanup(fromError) {
    if ("undefined" === typeof this.xhr || null === this.xhr) {
      return;
    }
    this.xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {}
    }
    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }
    this.xhr = null;
  }
  onLoad() {
    const data = this.xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this.cleanup();
    }
  }
  abort() {
    this.cleanup();
  }
};
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i2 in Request.requests) {
    if (Request.requests.hasOwnProperty(i2)) {
      Request.requests[i2].abort();
    }
  }
}

// node_modules/engine.io-client/build/esm/transports/websocket-constructor.browser.js
var nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return cb => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
var WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
var usingBrowserWebSocket = true;
var defaultBinaryType = "arraybuffer";

// node_modules/engine.io-client/build/esm/transports/websocket.js
var import_engine3 = require("engine.io-parser@5.2.1");
var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
var WS = class extends Transport {
  constructor(opts) {
    super(opts);
    this.supportsBinary = !opts.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) {
      return;
    }
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType;
    this.addEventListeners();
  }
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = closeEvent => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = ev => this.onData(ev.data);
    this.ws.onerror = e => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      (0, import_engine3.encodePacket)(packet, this.supportsBinary, data => {
        const opts = {};
        if (!usingBrowserWebSocket) {
          if (packet.options) {
            opts.compress = packet.options.compress;
          }
          if (this.opts.perMessageDeflate) {
            const len = "string" === typeof data ? Buffer.byteLength(data) : data.length;
            if (len < this.opts.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }
        try {
          if (usingBrowserWebSocket) {
            this.ws.send(data);
          } else {
            this.ws.send(data, opts);
          }
        } catch (e) {}
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }
  uri() {
    const schema = this.opts.secure ? "wss" : "ws";
    const query = this.query || {};
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
  check() {
    return !!WebSocket;
  }
};

// node_modules/engine.io-client/build/esm/transports/webtransport.js
var import_engine4 = require("engine.io-parser@5.2.1");
var WT = class extends Transport {
  get name() {
    return "webtransport";
  }
  doOpen() {
    if (typeof WebTransport !== "function") {
      return;
    }
    this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    this.transport.closed.then(() => {
      this.onClose();
    }).catch(err => {
      this.onError("webtransport error", err);
    });
    this.transport.ready.then(() => {
      this.transport.createBidirectionalStream().then(stream => {
        const decoderStream = (0, import_engine4.createPacketDecoderStream)(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
        const reader = stream.readable.pipeThrough(decoderStream).getReader();
        const encoderStream = (0, import_engine4.createPacketEncoderStream)();
        encoderStream.readable.pipeTo(stream.writable);
        this.writer = encoderStream.writable.getWriter();
        const read = () => {
          reader.read().then(({
            done,
            value: value2
          }) => {
            if (done) {
              return;
            }
            this.onPacket(value2);
            read();
          }).catch(err => {});
        };
        read();
        const packet = {
          type: "open"
        };
        if (this.query.sid) {
          packet.data = `{"sid":"${this.query.sid}"}`;
        }
        this.writer.write(packet).then(() => this.onOpen());
      });
    });
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      this.writer.write(packet).then(() => {
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    var _a;
    (_a = this.transport) === null || _a === void 0 ? void 0 : _a.close();
  }
};

// node_modules/engine.io-client/build/esm/transports/index.js
var transports = {
  websocket: WS,
  webtransport: WT,
  polling: Polling
};

// node_modules/engine.io-client/build/esm/contrib/parseuri.js
var re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function parse(str) {
  const src = str,
    b = str.indexOf("["),
    e = str.indexOf("]");
  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
  }
  let m = re.exec(str || ""),
    uri = {},
    i2 = 14;
  while (i2--) {
    uri[parts[i2]] = m[i2] || "";
  }
  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g,
    names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == "/" || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

// node_modules/engine.io-client/build/esm/socket.js
var import_component_emitter3 = require("@socket.io/component-emitter@3.1.0");
var import_engine5 = require("engine.io-parser@5.2.1");
var Socket = class extends import_component_emitter3.Emitter {
  constructor(uri, opts = {}) {
    super();
    this.binaryType = defaultBinaryType;
    this.writeBuffer = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      uri = parse(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query) opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parse(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = opts.transports || ["polling", "websocket", "webtransport"];
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      addTrailingSlash: true,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: false
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
    if (typeof this.opts.query === "string") {
      this.opts.query = decode(this.opts.query);
    }
    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;
    this.pingTimeoutTimer = null;
    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        this.beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this.beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close", {
            description: "network connection lost"
          });
        };
        addEventListener("offline", this.offlineEventListener, false);
      }
    }
    this.open();
  }
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = import_engine5.protocol;
    query.transport = name;
    if (this.id) query.sid = this.id;
    const opts = Object.assign({}, this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[name]);
    return new transports[name](opts);
  }
  open() {
    let transport;
    if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
      transport = "websocket";
    } else if (0 === this.transports.length) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }
    this.readyState = "opening";
    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }
    transport.open();
    this.setTransport(transport);
  }
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", reason => this.onClose("transport close", reason));
  }
  probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    Socket.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed) return;
      transport.send([{
        type: "ping",
        data: "probe"
      }]);
      transport.once("packet", msg => {
        if (failed) return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport) return;
          Socket.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed) return;
            if ("closed" === this.readyState) return;
            cleanup();
            this.setTransport(transport);
            transport.send([{
              type: "upgrade"
            }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed) return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = err => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    if (this.upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
      this.setTimeoutFn(() => {
        if (!failed) {
          transport.open();
        }
      }, 200);
    } else {
      transport.open();
    }
  }
  onOpen() {
    this.readyState = "open";
    Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
    if ("open" === this.readyState && this.opts.upgrade) {
      let i2 = 0;
      const l = this.upgrades.length;
      for (; i2 < l; i2++) {
        this.probe(this.upgrades[i2]);
      }
    }
  }
  onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      this.resetPingTimeout();
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this.sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this.onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    } else {}
  }
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.maxPayload = data.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState) return;
    this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);
    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen);
    this.prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this.getWritablePackets();
      this.transport.send(packets);
      this.prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i2 = 0; i2 < this.writeBuffer.length; i2++) {
      const data = this.writeBuffer[i2].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i2 > 0 && payloadSize > this.maxPayload) {
        return this.writeBuffer.slice(0, i2);
      }
      payloadSize += 2;
    }
    return this.writeBuffer;
  }
  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = void 0;
    }
    if ("function" === typeof options) {
      fn = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn) this.once("flush", fn);
    this.flush();
  }
  close() {
    const close = () => {
      this.onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  onError(err) {
    Socket.priorWebsocketSuccess = false;
    this.emitReserved("error", err);
    this.onClose("transport error", err);
  }
  onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (typeof removeEventListener === "function") {
        removeEventListener("beforeunload", this.beforeunloadEventListener, false);
        removeEventListener("offline", this.offlineEventListener, false);
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }
  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i2 = 0;
    const j = upgrades.length;
    for (; i2 < j; i2++) {
      if (~this.transports.indexOf(upgrades[i2])) filteredUpgrades.push(upgrades[i2]);
    }
    return filteredUpgrades;
  }
};
Socket.protocol = import_engine5.protocol;

// node_modules/engine.io-client/build/esm/index.js
var protocol2 = Socket.protocol;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9lbmdpbmUuaW8tY2xpZW50LjYuNS4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2dsb2JhbFRoaXMuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS91dGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvcGFyc2Vxcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vY29udHJpYi95ZWFzdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS9jb250cmliL2hhcy1jb3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL3RyYW5zcG9ydHMveG1saHR0cHJlcXVlc3QuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3BvbGxpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vdHJhbnNwb3J0cy93ZWJzb2NrZXQtY29uc3RydWN0b3IuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnNvY2tldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL3dlYnRyYW5zcG9ydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L2J1aWxkL2VzbS90cmFuc3BvcnRzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2NvbnRyaWIvcGFyc2V1cmkuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9idWlsZC9lc20vc29ja2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvYnVpbGQvZXNtL2luZGV4LmpzIl0sIm5hbWVzIjpbImVuZ2luZV9pb19jbGllbnRfNl81XzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiU29ja2V0IiwiVHJhbnNwb3J0IiwiaW5zdGFsbFRpbWVyRnVuY3Rpb25zIiwibmV4dFRpY2siLCJwYXJzZSIsInByb3RvY29sIiwicHJvdG9jb2wyIiwidHJhbnNwb3J0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJnbG9iYWxUaGlzU2hpbSIsInNlbGYiLCJ3aW5kb3ciLCJGdW5jdGlvbiIsInBpY2siLCJvYmoiLCJhdHRyIiwicmVkdWNlIiwiYWNjIiwiayIsImhhc093blByb3BlcnR5IiwiTkFUSVZFX1NFVF9USU1FT1VUIiwic2V0VGltZW91dCIsIk5BVElWRV9DTEVBUl9USU1FT1VUIiwiY2xlYXJUaW1lb3V0Iiwib3B0cyIsInVzZU5hdGl2ZVRpbWVycyIsInNldFRpbWVvdXRGbiIsImJpbmQiLCJjbGVhclRpbWVvdXRGbiIsIkJBU0U2NF9PVkVSSEVBRCIsImJ5dGVMZW5ndGgiLCJ1dGY4TGVuZ3RoIiwiTWF0aCIsImNlaWwiLCJzaXplIiwic3RyIiwiYyIsImxlbmd0aDIiLCJpMiIsImwiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwiZW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGVjb2RlIiwicXMiLCJxcnkiLCJwYWlycyIsInNwbGl0IiwicGFpciIsImRlY29kZVVSSUNvbXBvbmVudCIsImltcG9ydF9lbmdpbmUiLCJyZXF1aXJlIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyIiwiVHJhbnNwb3J0RXJyb3IiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwicmVhc29uIiwiZGVzY3JpcHRpb24iLCJjb250ZXh0IiwidHlwZSIsIkVtaXR0ZXIiLCJ3cml0YWJsZSIsInF1ZXJ5Iiwic29ja2V0Iiwib25FcnJvciIsImVtaXRSZXNlcnZlZCIsIm9wZW4iLCJyZWFkeVN0YXRlIiwiZG9PcGVuIiwiY2xvc2UiLCJkb0Nsb3NlIiwib25DbG9zZSIsInNlbmQiLCJwYWNrZXRzIiwid3JpdGUiLCJvbk9wZW4iLCJvbkRhdGEiLCJkYXRhIiwicGFja2V0IiwiZGVjb2RlUGFja2V0IiwiYmluYXJ5VHlwZSIsIm9uUGFja2V0IiwiZGV0YWlscyIsInBhdXNlIiwib25QYXVzZSIsImNyZWF0ZVVyaSIsInNjaGVtYSIsIl9ob3N0bmFtZSIsIl9wb3J0IiwicGF0aCIsIl9xdWVyeSIsImhvc3RuYW1lIiwiaW5kZXhPZiIsInBvcnQiLCJzZWN1cmUiLCJOdW1iZXIiLCJlbmNvZGVkUXVlcnkiLCJhbHBoYWJldCIsIm1hcCIsInNlZWQiLCJpIiwicHJldiIsImVuY29kZTIiLCJudW0iLCJlbmNvZGVkIiwiZmxvb3IiLCJkZWNvZGUyIiwiZGVjb2RlZCIsImNoYXJBdCIsInllYXN0Iiwibm93IiwiRGF0ZSIsInZhbHVlIiwiWE1MSHR0cFJlcXVlc3QiLCJlcnIiLCJoYXNDT1JTIiwiWEhSIiwieGRvbWFpbiIsImUiLCJjb25jYXQiLCJqb2luIiwiY3JlYXRlQ29va2llSmFyIiwiaW1wb3J0X2VuZ2luZTIiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIyIiwiZW1wdHkiLCJoYXNYSFIyIiwieGhyIiwicmVzcG9uc2VUeXBlIiwiUG9sbGluZyIsInBvbGxpbmciLCJsb2NhdGlvbiIsImlzU1NMIiwieGQiLCJmb3JjZUJhc2U2NCIsInN1cHBvcnRzQmluYXJ5Iiwid2l0aENyZWRlbnRpYWxzIiwiY29va2llSmFyIiwibmFtZSIsInBvbGwiLCJ0b3RhbCIsIm9uY2UiLCJkb1BvbGwiLCJjYWxsYmFjayIsImRlY29kZVBheWxvYWQiLCJmb3JFYWNoIiwiZW5jb2RlUGF5bG9hZCIsImRvV3JpdGUiLCJ1cmkiLCJ0aW1lc3RhbXBSZXF1ZXN0cyIsInRpbWVzdGFtcFBhcmFtIiwic2lkIiwiYjY0IiwicmVxdWVzdCIsIk9iamVjdCIsImFzc2lnbiIsIlJlcXVlc3QiLCJmbiIsInJlcSIsIm1ldGhvZCIsIm9uIiwieGhyU3RhdHVzIiwicG9sbFhociIsImNyZWF0ZSIsIl9hIiwiZXh0cmFIZWFkZXJzIiwic2V0RGlzYWJsZUhlYWRlckNoZWNrIiwic2V0UmVxdWVzdEhlYWRlciIsImFkZENvb2tpZXMiLCJyZXF1ZXN0VGltZW91dCIsInRpbWVvdXQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJfYTIiLCJwYXJzZUNvb2tpZXMiLCJzdGF0dXMiLCJvbkxvYWQiLCJkb2N1bWVudCIsImluZGV4IiwicmVxdWVzdHNDb3VudCIsInJlcXVlc3RzIiwiY2xlYW51cCIsImZyb21FcnJvciIsImFib3J0IiwicmVzcG9uc2VUZXh0IiwiYXR0YWNoRXZlbnQiLCJ1bmxvYWRIYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlcm1pbmF0aW9uRXZlbnQiLCJpc1Byb21pc2VBdmFpbGFibGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNiIiwidGhlbiIsIldlYlNvY2tldCIsIk1veldlYlNvY2tldCIsInVzaW5nQnJvd3NlcldlYlNvY2tldCIsImRlZmF1bHRCaW5hcnlUeXBlIiwiaW1wb3J0X2VuZ2luZTMiLCJpc1JlYWN0TmF0aXZlIiwibmF2aWdhdG9yIiwicHJvZHVjdCIsInRvTG93ZXJDYXNlIiwiV1MiLCJjaGVjayIsInByb3RvY29scyIsImhlYWRlcnMiLCJ3cyIsImFkZEV2ZW50TGlzdGVuZXJzIiwib25vcGVuIiwiYXV0b1VucmVmIiwiX3NvY2tldCIsInVucmVmIiwib25jbG9zZSIsImNsb3NlRXZlbnQiLCJvbm1lc3NhZ2UiLCJldiIsIm9uZXJyb3IiLCJsYXN0UGFja2V0IiwiZW5jb2RlUGFja2V0Iiwib3B0aW9ucyIsImNvbXByZXNzIiwicGVyTWVzc2FnZURlZmxhdGUiLCJsZW4iLCJCdWZmZXIiLCJ0aHJlc2hvbGQiLCJpbXBvcnRfZW5naW5lNCIsIldUIiwiV2ViVHJhbnNwb3J0IiwidHJhbnNwb3J0IiwidHJhbnNwb3J0T3B0aW9ucyIsImNsb3NlZCIsImNhdGNoIiwicmVhZHkiLCJjcmVhdGVCaWRpcmVjdGlvbmFsU3RyZWFtIiwic3RyZWFtIiwiZGVjb2RlclN0cmVhbSIsImNyZWF0ZVBhY2tldERlY29kZXJTdHJlYW0iLCJNQVhfU0FGRV9JTlRFR0VSIiwicmVhZGVyIiwicmVhZGFibGUiLCJwaXBlVGhyb3VnaCIsImdldFJlYWRlciIsImVuY29kZXJTdHJlYW0iLCJjcmVhdGVQYWNrZXRFbmNvZGVyU3RyZWFtIiwicGlwZVRvIiwid3JpdGVyIiwiZ2V0V3JpdGVyIiwicmVhZCIsImRvbmUiLCJ2YWx1ZTIiLCJ3ZWJzb2NrZXQiLCJ3ZWJ0cmFuc3BvcnQiLCJyZSIsInBhcnRzIiwic3JjIiwiYiIsInN1YnN0cmluZyIsInJlcGxhY2UiLCJtIiwiZXhlYyIsInNvdXJjZSIsImhvc3QiLCJhdXRob3JpdHkiLCJpcHY2dXJpIiwicGF0aE5hbWVzIiwicXVlcnlLZXkiLCJyZWd4IiwibmFtZXMiLCJzbGljZSIsInNwbGljZSIsIiQwIiwiJDEiLCIkMiIsImltcG9ydF9jb21wb25lbnRfZW1pdHRlcjMiLCJpbXBvcnRfZW5naW5lNSIsIndyaXRlQnVmZmVyIiwicHJldkJ1ZmZlckxlbiIsImFnZW50IiwidXBncmFkZSIsInJlbWVtYmVyVXBncmFkZSIsImFkZFRyYWlsaW5nU2xhc2giLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJjbG9zZU9uQmVmb3JldW5sb2FkIiwiaWQiLCJ1cGdyYWRlcyIsInBpbmdJbnRlcnZhbCIsInBpbmdUaW1lb3V0IiwicGluZ1RpbWVvdXRUaW1lciIsImJlZm9yZXVubG9hZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJvZmZsaW5lRXZlbnRMaXN0ZW5lciIsImNyZWF0ZVRyYW5zcG9ydCIsIkVJTyIsInByaW9yV2Vic29ja2V0U3VjY2VzcyIsInNoaWZ0Iiwic2V0VHJhbnNwb3J0Iiwib25EcmFpbiIsInByb2JlIiwiZmFpbGVkIiwib25UcmFuc3BvcnRPcGVuIiwibXNnIiwidXBncmFkaW5nIiwiZmx1c2giLCJmcmVlemVUcmFuc3BvcnQiLCJlcnJvciIsIm9uVHJhbnNwb3J0Q2xvc2UiLCJvbnVwZ3JhZGUiLCJ0byIsInJlbW92ZUxpc3RlbmVyIiwib2ZmIiwicmVzZXRQaW5nVGltZW91dCIsIm9uSGFuZHNoYWtlIiwiSlNPTiIsInNlbmRQYWNrZXQiLCJjb2RlIiwiZmlsdGVyVXBncmFkZXMiLCJtYXhQYXlsb2FkIiwiZ2V0V3JpdGFibGVQYWNrZXRzIiwic2hvdWxkQ2hlY2tQYXlsb2FkU2l6ZSIsInBheWxvYWRTaXplIiwicHVzaCIsImNsZWFudXBBbmRDbG9zZSIsIndhaXRGb3JVcGdyYWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbHRlcmVkVXBncmFkZXMiLCJqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw4QkFBQTtBQUFBQyxRQUFBLENBQUFELDhCQUFBO0VBQUFFLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVosOEJBQUE7OztBQ0FPLElBQU1hLGNBQUEsSUFBa0IsTUFBTTtFQUNqQyxJQUFJLE9BQU9DLElBQUEsS0FBUyxhQUFhO0lBQzdCLE9BQU9BLElBQUE7RUFDWCxXQUNTLE9BQU9DLE1BQUEsS0FBVyxhQUFhO0lBQ3BDLE9BQU9BLE1BQUE7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QUEsQ0FBYSxTQUFTaUQsR0FBRztJQUM5QixLQUFLM0MsT0FBQSxDQUFRLG1CQUFtQjJDLEdBQUc7RUFDdkM7RUFNQTNDLFFBQVFmLE1BQUEsRUFBUUMsV0FBQSxFQUFhO0lBQ3pCLElBQUksY0FBYyxLQUFLVSxVQUFBLElBQ25CLFdBQVcsS0FBS0EsVUFBQSxJQUNoQixjQUFjLEtBQUtBLFVBQUEsRUFBWTtNQUUvQixLQUFLeEMsY0FBQSxDQUFlLEtBQUttUSxnQkFBZ0I7TUFFekMsS0FBSzNELFNBQUEsQ0FBVTZELGtCQUFBLENBQW1CLE9BQU87TUFFekMsS0FBSzdELFNBQUEsQ0FBVTlKLEtBQUEsQ0FBTTtNQUVyQixLQUFLOEosU0FBQSxDQUFVNkQsa0JBQUEsQ0FBbUI7TUFDbEMsSUFBSSxPQUFPa0MsbUJBQUEsS0FBd0IsWUFBWTtRQUMzQ0EsbUJBQUEsQ0FBb0IsZ0JBQWdCLEtBQUtuQyx5QkFBQSxFQUEyQixLQUFLO1FBQ3pFbUMsbUJBQUEsQ0FBb0IsV0FBVyxLQUFLakMsb0JBQUEsRUFBc0IsS0FBSztNQUNuRTtNQUVBLEtBQUs5TixVQUFBLEdBQWE7TUFFbEIsS0FBS3VOLEVBQUEsR0FBSztNQUVWLEtBQUt6TixZQUFBLENBQWEsU0FBU1QsTUFBQSxFQUFRQyxXQUFXO01BRzlDLEtBQUt5TixXQUFBLEdBQWMsRUFBQztNQUNwQixLQUFLQyxhQUFBLEdBQWdCO0lBQ3pCO0VBQ0o7RUFPQXVDLGVBQWUvQixRQUFBLEVBQVU7SUFDckIsTUFBTXdDLGdCQUFBLEdBQW1CLEVBQUM7SUFDMUIsSUFBSTlSLEVBQUEsR0FBSTtJQUNSLE1BQU0rUixDQUFBLEdBQUl6QyxRQUFBLENBQVNwUCxNQUFBO0lBQ25CLE9BQU9GLEVBQUEsR0FBSStSLENBQUEsRUFBRy9SLEVBQUEsSUFBSztNQUNmLElBQUksQ0FBQyxLQUFLakMsVUFBQSxDQUFXd0YsT0FBQSxDQUFRK0wsUUFBQSxDQUFTdFAsRUFBQSxDQUFFLEdBQ3BDOFIsZ0JBQUEsQ0FBaUJKLElBQUEsQ0FBS3BDLFFBQUEsQ0FBU3RQLEVBQUEsQ0FBRTtJQUN6QztJQUNBLE9BQU84UixnQkFBQTtFQUNYO0FBQ0o7QUFDQXRVLE1BQUEsQ0FBT0ssUUFBQSxHQUFXK1EsY0FBQSxDQUFBL1EsUUFBQTs7O0FDL2tCWCxJQUFNQyxTQUFBLEdBQVdOLE1BQUEsQ0FBT0ssUUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=