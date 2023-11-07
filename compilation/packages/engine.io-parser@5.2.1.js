System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.2.1"]]);
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

// .beyond/uimport/engine.io-parser.5.2.1.js
var engine_io_parser_5_2_1_exports = {};
__export(engine_io_parser_5_2_1_exports, {
  createPacketDecoderStream: () => createPacketDecoderStream,
  createPacketEncoderStream: () => createPacketEncoderStream,
  decodePacket: () => decodePacket,
  decodePayload: () => decodePayload,
  encodePacket: () => encodePacket,
  encodePayload: () => encodePayload,
  protocol: () => protocol
});
module.exports = __toCommonJS(engine_io_parser_5_2_1_exports);

// node_modules/engine.io-parser/build/esm/commons.js
var PACKET_TYPES = /* @__PURE__ */Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = /* @__PURE__ */Object.create(null);
Object.keys(PACKET_TYPES).forEach(key => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = {
  type: "error",
  data: "parser error"
};

// node_modules/engine.io-parser/build/esm/encodePacket.browser.js
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
var encodePacket = ({
  type,
  data
}, supportsBinary, callback) => {
  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  }
  return callback(PACKET_TYPES[type] + (data || ""));
};
var encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function () {
    const content = fileReader.result.split(",")[1];
    callback("b" + (content || ""));
  };
  return fileReader.readAsDataURL(data);
};
function toArray(data) {
  if (data instanceof Uint8Array) {
    return data;
  } else if (data instanceof ArrayBuffer) {
    return new Uint8Array(data);
  } else {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }
}
var TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
  if (withNativeBlob && packet.data instanceof Blob) {
    return packet.data.arrayBuffer().then(toArray).then(callback);
  } else if (withNativeArrayBuffer && (packet.data instanceof ArrayBuffer || isView(packet.data))) {
    return callback(toArray(packet.data));
  }
  encodePacket(packet, false, encoded => {
    if (!TEXT_ENCODER) {
      TEXT_ENCODER = new TextEncoder();
    }
    callback(TEXT_ENCODER.encode(encoded));
  });
}

// node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
var encode = arraybuffer => {
  let bytes = new Uint8Array(arraybuffer),
    i,
    len = bytes.length,
    base64 = "";
  for (i = 0; i < len; i += 3) {
    base64 += chars[bytes[i] >> 2];
    base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
    base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
    base64 += chars[bytes[i + 2] & 63];
  }
  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + "=";
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + "==";
  }
  return base64;
};
var decode = base64 => {
  let bufferLength = base64.length * 0.75,
    len = base64.length,
    i,
    p = 0,
    encoded1,
    encoded2,
    encoded3,
    encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup[base64.charCodeAt(i)];
    encoded2 = lookup[base64.charCodeAt(i + 1)];
    encoded3 = lookup[base64.charCodeAt(i + 2)];
    encoded4 = lookup[base64.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};

// node_modules/engine.io-parser/build/esm/decodePacket.browser.js
var withNativeArrayBuffer2 = typeof ArrayBuffer === "function";
var decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};
var decodeBase64Packet = (data, binaryType) => {
  if (withNativeArrayBuffer2) {
    const decoded = decode(data);
    return mapBinary(decoded, binaryType);
  } else {
    return {
      base64: true,
      data
    };
  }
};
var mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      if (data instanceof Blob) {
        return data;
      } else {
        return new Blob([data]);
      }
    case "arraybuffer":
    default:
      if (data instanceof ArrayBuffer) {
        return data;
      } else {
        return data.buffer;
      }
  }
};

// node_modules/engine.io-parser/build/esm/index.js
var SEPARATOR = String.fromCharCode(30);
var encodePayload = (packets, callback) => {
  const length = packets.length;
  const encodedPackets = new Array(length);
  let count = 0;
  packets.forEach((packet, i) => {
    encodePacket(packet, false, encodedPacket => {
      encodedPackets[i] = encodedPacket;
      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
var decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i = 0; i < encodedPackets.length; i++) {
    const decodedPacket = decodePacket(encodedPackets[i], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
function createPacketEncoderStream() {
  return new TransformStream({
    transform(packet, controller) {
      encodePacketToBinary(packet, encodedPacket => {
        const payloadLength = encodedPacket.length;
        let header;
        if (payloadLength < 126) {
          header = new Uint8Array(1);
          new DataView(header.buffer).setUint8(0, payloadLength);
        } else if (payloadLength < 65536) {
          header = new Uint8Array(3);
          const view = new DataView(header.buffer);
          view.setUint8(0, 126);
          view.setUint16(1, payloadLength);
        } else {
          header = new Uint8Array(9);
          const view = new DataView(header.buffer);
          view.setUint8(0, 127);
          view.setBigUint64(1, BigInt(payloadLength));
        }
        if (packet.data && typeof packet.data !== "string") {
          header[0] |= 128;
        }
        controller.enqueue(header);
        controller.enqueue(encodedPacket);
      });
    }
  });
}
var TEXT_DECODER;
function totalLength(chunks) {
  return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
}
function concatChunks(chunks, size) {
  if (chunks[0].length === size) {
    return chunks.shift();
  }
  const buffer = new Uint8Array(size);
  let j = 0;
  for (let i = 0; i < size; i++) {
    buffer[i] = chunks[0][j++];
    if (j === chunks[0].length) {
      chunks.shift();
      j = 0;
    }
  }
  if (chunks.length && j < chunks[0].length) {
    chunks[0] = chunks[0].slice(j);
  }
  return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
  if (!TEXT_DECODER) {
    TEXT_DECODER = new TextDecoder();
  }
  const chunks = [];
  let state = 0;
  let expectedLength = -1;
  let isBinary = false;
  return new TransformStream({
    transform(chunk, controller) {
      chunks.push(chunk);
      while (true) {
        if (state === 0) {
          if (totalLength(chunks) < 1) {
            break;
          }
          const header = concatChunks(chunks, 1);
          isBinary = (header[0] & 128) === 128;
          expectedLength = header[0] & 127;
          if (expectedLength < 126) {
            state = 3;
          } else if (expectedLength === 126) {
            state = 1;
          } else {
            state = 2;
          }
        } else if (state === 1) {
          if (totalLength(chunks) < 2) {
            break;
          }
          const headerArray = concatChunks(chunks, 2);
          expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
          state = 3;
        } else if (state === 2) {
          if (totalLength(chunks) < 8) {
            break;
          }
          const headerArray = concatChunks(chunks, 8);
          const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
          const n = view.getUint32(0);
          if (n > Math.pow(2, 53 - 32) - 1) {
            controller.enqueue(ERROR_PACKET);
            break;
          }
          expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
          state = 3;
        } else {
          if (totalLength(chunks) < expectedLength) {
            break;
          }
          const data = concatChunks(chunks, expectedLength);
          controller.enqueue(decodePacket(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
          state = 0;
        }
        if (expectedLength === 0 || expectedLength > maxPayload) {
          controller.enqueue(ERROR_PACKET);
          break;
        }
      }
    }
  });
}
var protocol = 4;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9lbmdpbmUuaW8tcGFyc2VyLjUuMi4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvYnVpbGQvZXNtL2NvbW1vbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vZW5jb2RlUGFja2V0LmJyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vY29udHJpYi9iYXNlNjQtYXJyYXlidWZmZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vZGVjb2RlUGFja2V0LmJyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vaW5kZXguanMiXSwibmFtZXMiOlsiZW5naW5lX2lvX3BhcnNlcl81XzJfMV9leHBvcnRzIiwiX19leHBvcnQiLCJjcmVhdGVQYWNrZXREZWNvZGVyU3RyZWFtIiwiY3JlYXRlUGFja2V0RW5jb2RlclN0cmVhbSIsImRlY29kZVBhY2tldCIsImRlY29kZVBheWxvYWQiLCJlbmNvZGVQYWNrZXQiLCJlbmNvZGVQYXlsb2FkIiwicHJvdG9jb2wiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUEFDS0VUX1RZUEVTIiwiT2JqZWN0IiwiY3JlYXRlIiwiUEFDS0VUX1RZUEVTX1JFVkVSU0UiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIkVSUk9SX1BBQ0tFVCIsInR5cGUiLCJkYXRhIiwid2l0aE5hdGl2ZUJsb2IiLCJCbG9iIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwid2l0aE5hdGl2ZUFycmF5QnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJpc1ZpZXciLCJvYmoiLCJidWZmZXIiLCJzdXBwb3J0c0JpbmFyeSIsImNhbGxiYWNrIiwiZW5jb2RlQmxvYkFzQmFzZTY0IiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJjb250ZW50IiwicmVzdWx0Iiwic3BsaXQiLCJyZWFkQXNEYXRhVVJMIiwidG9BcnJheSIsIlVpbnQ4QXJyYXkiLCJieXRlT2Zmc2V0IiwiYnl0ZUxlbmd0aCIsIlRFWFRfRU5DT0RFUiIsImVuY29kZVBhY2tldFRvQmluYXJ5IiwicGFja2V0IiwiYXJyYXlCdWZmZXIiLCJ0aGVuIiwiZW5jb2RlZCIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwiY2hhcnMiLCJsb29rdXAiLCJpIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsImFycmF5YnVmZmVyIiwiYnl0ZXMiLCJsZW4iLCJiYXNlNjQiLCJzdWJzdHJpbmciLCJkZWNvZGUiLCJidWZmZXJMZW5ndGgiLCJwIiwiZW5jb2RlZDEiLCJlbmNvZGVkMiIsImVuY29kZWQzIiwiZW5jb2RlZDQiLCJ3aXRoTmF0aXZlQXJyYXlCdWZmZXIyIiwiZW5jb2RlZFBhY2tldCIsImJpbmFyeVR5cGUiLCJtYXBCaW5hcnkiLCJjaGFyQXQiLCJkZWNvZGVCYXNlNjRQYWNrZXQiLCJwYWNrZXRUeXBlIiwiZGVjb2RlZCIsIlNFUEFSQVRPUiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhY2tldHMiLCJlbmNvZGVkUGFja2V0cyIsIkFycmF5IiwiY291bnQiLCJqb2luIiwiZW5jb2RlZFBheWxvYWQiLCJkZWNvZGVkUGFja2V0IiwicHVzaCIsIlRyYW5zZm9ybVN0cmVhbSIsInRyYW5zZm9ybSIsImNvbnRyb2xsZXIiLCJwYXlsb2FkTGVuZ3RoIiwiaGVhZGVyIiwiRGF0YVZpZXciLCJzZXRVaW50OCIsInZpZXciLCJzZXRVaW50MTYiLCJzZXRCaWdVaW50NjQiLCJCaWdJbnQiLCJlbnF1ZXVlIiwiVEVYVF9ERUNPREVSIiwidG90YWxMZW5ndGgiLCJjaHVua3MiLCJyZWR1Y2UiLCJhY2MiLCJjaHVuayIsImNvbmNhdENodW5rcyIsInNpemUiLCJzaGlmdCIsImoiLCJzbGljZSIsIm1heFBheWxvYWQiLCJUZXh0RGVjb2RlciIsInN0YXRlIiwiZXhwZWN0ZWRMZW5ndGgiLCJpc0JpbmFyeSIsImhlYWRlckFycmF5IiwiZ2V0VWludDE2IiwibiIsImdldFVpbnQzMiIsIk1hdGgiLCJwb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDhCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsOEJBQUE7RUFBQUUseUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx5QkFBQTtFQUFBQyx5QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHlCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFYLDhCQUFBOzs7QUNBQSxJQUFNWSxZQUFBLEdBQWUsZUFBQUMsTUFBQSxDQUFPQyxNQUFBLENBQU8sSUFBSTtBQUN2Q0YsWUFBQSxDQUFhLFVBQVU7QUFDdkJBLFlBQUEsQ0FBYSxXQUFXO0FBQ3hCQSxZQUFBLENBQWEsVUFBVTtBQUN2QkEsWUFBQSxDQUFhLFVBQVU7QUFDdkJBLFlBQUEsQ0FBYSxhQUFhO0FBQzFCQSxZQUFBLENBQWEsYUFBYTtBQUMxQkEsWUFBQSxDQUFhLFVBQVU7QUFDdkIsSUFBTUcsb0JBQUEsR0FBdUIsZUFBQUYsTUFBQSxDQUFPQyxNQUFBLENBQU8sSUFBSTtBQUMvQ0QsTUFBQSxDQUFPRyxJQUFBLENBQUtKLFlBQVksRUFBRUssT0FBQSxDQUFRQyxHQUFBLElBQU87RUFDckNILG9CQUFBLENBQXFCSCxZQUFBLENBQWFNLEdBQUEsS0FBUUEsR0FBQTtBQUM5QyxDQUFDO0FBQ0QsSUFBTUMsWUFBQSxHQUFlO0VBQUVDLElBQUEsRUFBTTtFQUFTQyxJQUFBLEVBQU07QUFB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QUEsR0FBUTtVQUNaLE9BQ0s7WUFDREEsS0FBQSxHQUFRO1VBQ1o7UUFDSixXQUNTQSxLQUFBLEtBQVUsR0FBaUM7VUFDaEQsSUFBSVosV0FBQSxDQUFZQyxNQUFNLElBQUksR0FBRztZQUN6QjtVQUNKO1VBQ0EsTUFBTWMsV0FBQSxHQUFjVixZQUFBLENBQWFKLE1BQUEsRUFBUSxDQUFDO1VBQzFDWSxjQUFBLEdBQWlCLElBQUlyQixRQUFBLENBQVN1QixXQUFBLENBQVl2RixNQUFBLEVBQVF1RixXQUFBLENBQVkxRSxVQUFBLEVBQVkwRSxXQUFBLENBQVk3RCxNQUFNLEVBQUU4RCxTQUFBLENBQVUsQ0FBQztVQUN6R0osS0FBQSxHQUFRO1FBQ1osV0FDU0EsS0FBQSxLQUFVLEdBQWlDO1VBQ2hELElBQUlaLFdBQUEsQ0FBWUMsTUFBTSxJQUFJLEdBQUc7WUFDekI7VUFDSjtVQUNBLE1BQU1jLFdBQUEsR0FBY1YsWUFBQSxDQUFhSixNQUFBLEVBQVEsQ0FBQztVQUMxQyxNQUFNUCxJQUFBLEdBQU8sSUFBSUYsUUFBQSxDQUFTdUIsV0FBQSxDQUFZdkYsTUFBQSxFQUFRdUYsV0FBQSxDQUFZMUUsVUFBQSxFQUFZMEUsV0FBQSxDQUFZN0QsTUFBTTtVQUN4RixNQUFNK0QsQ0FBQSxHQUFJdkIsSUFBQSxDQUFLd0IsU0FBQSxDQUFVLENBQUM7VUFDMUIsSUFBSUQsQ0FBQSxHQUFJRSxJQUFBLENBQUtDLEdBQUEsQ0FBSSxHQUFHLEtBQUssRUFBRSxJQUFJLEdBQUc7WUFFOUIvQixVQUFBLENBQVdTLE9BQUEsQ0FBUWxGLFlBQVk7WUFDL0I7VUFDSjtVQUNBaUcsY0FBQSxHQUFpQkksQ0FBQSxHQUFJRSxJQUFBLENBQUtDLEdBQUEsQ0FBSSxHQUFHLEVBQUUsSUFBSTFCLElBQUEsQ0FBS3dCLFNBQUEsQ0FBVSxDQUFDO1VBQ3ZETixLQUFBLEdBQVE7UUFDWixPQUNLO1VBQ0QsSUFBSVosV0FBQSxDQUFZQyxNQUFNLElBQUlZLGNBQUEsRUFBZ0I7WUFDdEM7VUFDSjtVQUNBLE1BQU0vRixJQUFBLEdBQU91RixZQUFBLENBQWFKLE1BQUEsRUFBUVksY0FBYztVQUNoRHhCLFVBQUEsQ0FBV1MsT0FBQSxDQUFRakcsWUFBQSxDQUFhaUgsUUFBQSxHQUFXaEcsSUFBQSxHQUFPaUYsWUFBQSxDQUFhdEMsTUFBQSxDQUFPM0MsSUFBSSxHQUFHb0QsVUFBVSxDQUFDO1VBQ3hGMEMsS0FBQSxHQUFRO1FBQ1o7UUFDQSxJQUFJQyxjQUFBLEtBQW1CLEtBQUtBLGNBQUEsR0FBaUJILFVBQUEsRUFBWTtVQUNyRHJCLFVBQUEsQ0FBV1MsT0FBQSxDQUFRbEYsWUFBWTtVQUMvQjtRQUNKO01BQ0o7SUFDSjtFQUNKLENBQUM7QUFDTDtBQUNPLElBQU1YLFFBQUEsR0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3Byb2plY3Qvb3V0In0=