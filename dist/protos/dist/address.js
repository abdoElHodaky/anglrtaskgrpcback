"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.174.0
//   protoc               v3.14.0
// source: address.proto
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "";
function createBaseAddress() {
    return { title: "", street: "", city: "", state: "", country: "", ip: "" };
}
exports.Address = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.street !== "") {
            writer.uint32(18).string(message.street);
        }
        if (message.city !== "") {
            writer.uint32(26).string(message.city);
        }
        if (message.state !== "") {
            writer.uint32(34).string(message.state);
        }
        if (message.country !== "") {
            writer.uint32(42).string(message.country);
        }
        if (message.ip !== "") {
            writer.uint32(50).string(message.ip);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.street = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.city = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.state = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.country = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.ip = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            street: isSet(object.street) ? globalThis.String(object.street) : "",
            city: isSet(object.city) ? globalThis.String(object.city) : "",
            state: isSet(object.state) ? globalThis.String(object.state) : "",
            country: isSet(object.country) ? globalThis.String(object.country) : "",
            ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.street !== "") {
            obj.street = message.street;
        }
        if (message.city !== "") {
            obj.city = message.city;
        }
        if (message.state !== "") {
            obj.state = message.state;
        }
        if (message.country !== "") {
            obj.country = message.country;
        }
        if (message.ip !== "") {
            obj.ip = message.ip;
        }
        return obj;
    },
    create(base) {
        return exports.Address.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseAddress();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.street = (_b = object.street) !== null && _b !== void 0 ? _b : "";
        message.city = (_c = object.city) !== null && _c !== void 0 ? _c : "";
        message.state = (_d = object.state) !== null && _d !== void 0 ? _d : "";
        message.country = (_e = object.country) !== null && _e !== void 0 ? _e : "";
        message.ip = (_f = object.ip) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}