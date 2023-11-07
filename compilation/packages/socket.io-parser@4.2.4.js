System.register(["@socket.io/component-emitter@3.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@socket.io/component-emitter","3.1.0"],["socket.io-parser","4.2.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep)],
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

// .beyond/uimport/socket.io-parser.4.2.4.js
var socket_io_parser_4_2_4_exports = {};
__export(socket_io_parser_4_2_4_exports, {
  Decoder: () => Decoder,
  Encoder: () => Encoder,
  PacketType: () => PacketType,
  protocol: () => protocol
});
module.exports = __toCommonJS(socket_io_parser_4_2_4_exports);

// node_modules/socket.io-parser/build/esm/is-binary.js
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}

// node_modules/socket.io-parser/build/esm/binary.js
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return {
    packet: pack,
    buffers
  };
}
function _deconstructPacket(data, buffers) {
  if (!data) return data;
  if (isBinary(data)) {
    const placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data) return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}

// node_modules/socket.io-parser/build/esm/index.js
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var RESERVED_EVENTS = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
var protocol = 5;
var PacketType;
(function (PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
var Encoder = class {
  constructor(replacer) {
    this.replacer = replacer;
  }
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
      }
    }
    return [this.encodeAsString(obj)];
  }
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    if (null != obj.id) {
      str += obj.id;
    }
    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
};
function isObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}
var Decoder = class extends import_component_emitter.Emitter {
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  decodeString(str) {
    let i = 0;
    const p = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p.type] === void 0) {
      throw new Error("unknown packet type " + p.type);
    }
    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start = i + 1;
      while (str.charAt(++i) !== "-" && i != str.length) {}
      const buf = str.substring(start, i);
      if (buf != Number(buf) || str.charAt(i) !== "-") {
        throw new Error("Illegal attachments");
      }
      p.attachments = Number(buf);
    }
    if ("/" === str.charAt(i + 1)) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if ("," === c) break;
        if (i === str.length) break;
      }
      p.nsp = str.substring(start, i);
    } else {
      p.nsp = "/";
    }
    const next = str.charAt(i + 1);
    if ("" !== next && Number(next) == next) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if (null == c || Number(c) != c) {
          --i;
          break;
        }
        if (i === str.length) break;
      }
      p.id = Number(str.substring(start, i + 1));
    }
    if (str.charAt(++i)) {
      const payload = this.tryParse(str.substr(i));
      if (Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return isObject(payload);
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || isObject(payload);
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }
};
var BinaryReconstructor = class {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zb2NrZXQuaW8tcGFyc2VyLjQuMi40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvYnVpbGQvZXNtL2lzLWJpbmFyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2J1aWxkL2VzbS9iaW5hcnkuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9idWlsZC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsic29ja2V0X2lvX3BhcnNlcl80XzJfNF9leHBvcnRzIiwiX19leHBvcnQiLCJEZWNvZGVyIiwiRW5jb2RlciIsIlBhY2tldFR5cGUiLCJwcm90b2NvbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJ3aXRoTmF0aXZlQXJyYXlCdWZmZXIiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsIm9iaiIsImJ1ZmZlciIsInRvU3RyaW5nIiwiT2JqZWN0IiwicHJvdG90eXBlIiwid2l0aE5hdGl2ZUJsb2IiLCJCbG9iIiwiY2FsbCIsIndpdGhOYXRpdmVGaWxlIiwiRmlsZSIsImlzQmluYXJ5IiwiaGFzQmluYXJ5IiwidG9KU09OIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImwiLCJsZW5ndGgiLCJhcmd1bWVudHMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImRlY29uc3RydWN0UGFja2V0IiwicGFja2V0IiwiYnVmZmVycyIsInBhY2tldERhdGEiLCJkYXRhIiwicGFjayIsIl9kZWNvbnN0cnVjdFBhY2tldCIsImF0dGFjaG1lbnRzIiwicGxhY2Vob2xkZXIiLCJfcGxhY2Vob2xkZXIiLCJudW0iLCJwdXNoIiwibmV3RGF0YSIsIkRhdGUiLCJyZWNvbnN0cnVjdFBhY2tldCIsIl9yZWNvbnN0cnVjdFBhY2tldCIsImlzSW5kZXhWYWxpZCIsIkVycm9yIiwiaW1wb3J0X2NvbXBvbmVudF9lbWl0dGVyIiwicmVxdWlyZSIsIlJFU0VSVkVEX0VWRU5UUyIsIlBhY2tldFR5cGUyIiwiY29uc3RydWN0b3IiLCJyZXBsYWNlciIsImVuY29kZSIsInR5cGUiLCJFVkVOVCIsIkFDSyIsImVuY29kZUFzQmluYXJ5IiwiQklOQVJZX0VWRU5UIiwiQklOQVJZX0FDSyIsIm5zcCIsImlkIiwiZW5jb2RlQXNTdHJpbmciLCJzdHIiLCJKU09OIiwic3RyaW5naWZ5IiwiZGVjb25zdHJ1Y3Rpb24iLCJ1bnNoaWZ0IiwiaXNPYmplY3QiLCJ2YWx1ZSIsIkVtaXR0ZXIiLCJyZXZpdmVyIiwiYWRkIiwicmVjb25zdHJ1Y3RvciIsImRlY29kZVN0cmluZyIsImlzQmluYXJ5RXZlbnQiLCJCaW5hcnlSZWNvbnN0cnVjdG9yIiwiZW1pdFJlc2VydmVkIiwiYmFzZTY0IiwidGFrZUJpbmFyeURhdGEiLCJwIiwiTnVtYmVyIiwiY2hhckF0Iiwic3RhcnQiLCJidWYiLCJzdWJzdHJpbmciLCJjIiwibmV4dCIsInBheWxvYWQiLCJ0cnlQYXJzZSIsInN1YnN0ciIsImlzUGF5bG9hZFZhbGlkIiwicGFyc2UiLCJlIiwiQ09OTkVDVCIsIkRJU0NPTk5FQ1QiLCJDT05ORUNUX0VSUk9SIiwiaW5kZXhPZiIsImRlc3Ryb3kiLCJmaW5pc2hlZFJlY29uc3RydWN0aW9uIiwicmVjb25QYWNrIiwiYmluRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsOEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw4QkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUiw4QkFBQTs7O0FDQUEsSUFBTVMscUJBQUEsR0FBd0IsT0FBT0MsV0FBQSxLQUFnQjtBQUNyRCxJQUFNQyxN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QUEsR0FBTixNQUEwQjtFQUN0QnpCLFlBQVlyQixNQUFBLEVBQVE7SUFDaEIsS0FBS0EsTUFBQSxHQUFTQSxNQUFBO0lBQ2QsS0FBS0MsT0FBQSxHQUFVLEVBQUM7SUFDaEIsS0FBS3FFLFNBQUEsR0FBWXRFLE1BQUE7RUFDckI7RUFTQWlELGVBQWVzQixPQUFBLEVBQVM7SUFDcEIsS0FBS3RFLE9BQUEsQ0FBUVMsSUFBQSxDQUFLNkQsT0FBTztJQUN6QixJQUFJLEtBQUt0RSxPQUFBLENBQVFOLE1BQUEsS0FBVyxLQUFLMkUsU0FBQSxDQUFVaEUsV0FBQSxFQUFhO01BRXBELE1BQU1OLE1BQUEsR0FBU2EsaUJBQUEsQ0FBa0IsS0FBS3lELFNBQUEsRUFBVyxLQUFLckUsT0FBTztNQUM3RCxLQUFLb0Usc0JBQUEsQ0FBdUI7TUFDNUIsT0FBT3JFLE1BQUE7SUFDWDtJQUNBLE9BQU87RUFDWDtFQUlBcUUsdUJBQUEsRUFBeUI7SUFDckIsS0FBS0MsU0FBQSxHQUFZO0lBQ2pCLEtBQUtyRSxPQUFBLEdBQVUsRUFBQztFQUNwQjtBQUNKIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvcHJvamVjdC9vdXQifQ==