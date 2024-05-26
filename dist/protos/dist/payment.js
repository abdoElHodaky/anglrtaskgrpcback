"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.174.0
//   protoc               v3.14.0
// source: payment.proto
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentServiceClient = exports.PaymentServiceService = exports.GetPayResultRes = exports.GetPayResultReq = exports.GetAllPayRes = exports.GetAllPayReq = exports.CreatePayRes = exports.CreatePayReq = exports.PaymentResult = exports.Payment = exports.paymentStatusToJSON = exports.paymentStatusFromJSON = exports.PaymentStatus = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const address_1 = require("./address");
const any_1 = require("./google/protobuf/any");
exports.protobufPackage = "";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["PAYMENT_DEFAULT"] = 0] = "PAYMENT_DEFAULT";
    PaymentStatus[PaymentStatus["PAYMENT_PENDING"] = 1] = "PAYMENT_PENDING";
    PaymentStatus[PaymentStatus["PAYMENT_PAID"] = 2] = "PAYMENT_PAID";
    PaymentStatus[PaymentStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PaymentStatus = exports.PaymentStatus || (exports.PaymentStatus = {}));
function paymentStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "PAYMENT_DEFAULT":
            return PaymentStatus.PAYMENT_DEFAULT;
        case 1:
        case "PAYMENT_PENDING":
            return PaymentStatus.PAYMENT_PENDING;
        case 2:
        case "PAYMENT_PAID":
            return PaymentStatus.PAYMENT_PAID;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PaymentStatus.UNRECOGNIZED;
    }
}
exports.paymentStatusFromJSON = paymentStatusFromJSON;
function paymentStatusToJSON(object) {
    switch (object) {
        case PaymentStatus.PAYMENT_DEFAULT:
            return "PAYMENT_DEFAULT";
        case PaymentStatus.PAYMENT_PENDING:
            return "PAYMENT_PENDING";
        case PaymentStatus.PAYMENT_PAID:
            return "PAYMENT_PAID";
        case PaymentStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.paymentStatusToJSON = paymentStatusToJSON;
function createBasePayment() {
    return {
        id: 0,
        title: undefined,
        date: undefined,
        status: 0,
        amount: 0,
        currency: "",
        address: undefined,
        transR: undefined,
        userId: 0,
    };
}
exports.Payment = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        if (message.title !== undefined) {
            writer.uint32(18).string(message.title);
        }
        if (message.date !== undefined) {
            writer.uint32(26).string(message.date);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.amount !== 0) {
            writer.uint32(40).int32(message.amount);
        }
        if (message.currency !== "") {
            writer.uint32(50).string(message.currency);
        }
        if (message.address !== undefined) {
            address_1.Address.encode(message.address, writer.uint32(58).fork()).ldelim();
        }
        if (message.transR !== undefined) {
            writer.uint32(66).string(message.transR);
        }
        if (message.userId !== 0) {
            writer.uint32(72).int32(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePayment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.id = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.date = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.amount = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.currency = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.address = address_1.Address.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.transR = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.userId = reader.int32();
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
            id: isSet(object.id) ? globalThis.Number(object.id) : 0,
            title: isSet(object.title) ? globalThis.String(object.title) : undefined,
            date: isSet(object.date) ? globalThis.String(object.date) : undefined,
            status: isSet(object.status) ? paymentStatusFromJSON(object.status) : 0,
            amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
            currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
            address: isSet(object.address) ? address_1.Address.fromJSON(object.address) : undefined,
            transR: isSet(object.transR) ? globalThis.String(object.transR) : undefined,
            userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== 0) {
            obj.id = Math.round(message.id);
        }
        if (message.title !== undefined) {
            obj.title = message.title;
        }
        if (message.date !== undefined) {
            obj.date = message.date;
        }
        if (message.status !== 0) {
            obj.status = paymentStatusToJSON(message.status);
        }
        if (message.amount !== 0) {
            obj.amount = Math.round(message.amount);
        }
        if (message.currency !== "") {
            obj.currency = message.currency;
        }
        if (message.address !== undefined) {
            obj.address = address_1.Address.toJSON(message.address);
        }
        if (message.transR !== undefined) {
            obj.transR = message.transR;
        }
        if (message.userId !== 0) {
            obj.userId = Math.round(message.userId);
        }
        return obj;
    },
    create(base) {
        return exports.Payment.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBasePayment();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.title = (_b = object.title) !== null && _b !== void 0 ? _b : undefined;
        message.date = (_c = object.date) !== null && _c !== void 0 ? _c : undefined;
        message.status = (_d = object.status) !== null && _d !== void 0 ? _d : 0;
        message.amount = (_e = object.amount) !== null && _e !== void 0 ? _e : 0;
        message.currency = (_f = object.currency) !== null && _f !== void 0 ? _f : "";
        message.address = (object.address !== undefined && object.address !== null)
            ? address_1.Address.fromPartial(object.address)
            : undefined;
        message.transR = (_g = object.transR) !== null && _g !== void 0 ? _g : undefined;
        message.userId = (_h = object.userId) !== null && _h !== void 0 ? _h : 0;
        return message;
    },
};
function createBasePaymentResult() {
    return { paymentId: 0, result: undefined };
}
exports.PaymentResult = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.paymentId !== 0) {
            writer.uint32(8).int32(message.paymentId);
        }
        if (message.result !== undefined) {
            any_1.Any.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePaymentResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.paymentId = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.result = any_1.Any.decode(reader, reader.uint32());
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
            paymentId: isSet(object.paymentId) ? globalThis.Number(object.paymentId) : 0,
            result: isSet(object.result) ? any_1.Any.fromJSON(object.result) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.paymentId !== 0) {
            obj.paymentId = Math.round(message.paymentId);
        }
        if (message.result !== undefined) {
            obj.result = any_1.Any.toJSON(message.result);
        }
        return obj;
    },
    create(base) {
        return exports.PaymentResult.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePaymentResult();
        message.paymentId = (_a = object.paymentId) !== null && _a !== void 0 ? _a : 0;
        message.result = (object.result !== undefined && object.result !== null)
            ? any_1.Any.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseCreatePayReq() {
    return { payment: undefined };
}
exports.CreatePayReq = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.payment !== undefined) {
            exports.Payment.encode(message.payment, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePayReq();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.payment = exports.Payment.decode(reader, reader.uint32());
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
        return { payment: isSet(object.payment) ? exports.Payment.fromJSON(object.payment) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.payment !== undefined) {
            obj.payment = exports.Payment.toJSON(message.payment);
        }
        return obj;
    },
    create(base) {
        return exports.CreatePayReq.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreatePayReq();
        message.payment = (object.payment !== undefined && object.payment !== null)
            ? exports.Payment.fromPartial(object.payment)
            : undefined;
        return message;
    },
};
function createBaseCreatePayRes() {
    return { payment: undefined };
}
exports.CreatePayRes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.payment !== undefined) {
            exports.Payment.encode(message.payment, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePayRes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.payment = exports.Payment.decode(reader, reader.uint32());
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
        return { payment: isSet(object.payment) ? exports.Payment.fromJSON(object.payment) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.payment !== undefined) {
            obj.payment = exports.Payment.toJSON(message.payment);
        }
        return obj;
    },
    create(base) {
        return exports.CreatePayRes.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreatePayRes();
        message.payment = (object.payment !== undefined && object.payment !== null)
            ? exports.Payment.fromPartial(object.payment)
            : undefined;
        return message;
    },
};
function createBaseGetAllPayReq() {
    return { userId: 0 };
}
exports.GetAllPayReq = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== 0) {
            writer.uint32(8).int32(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAllPayReq();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.userId = reader.int32();
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
        return { userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== 0) {
            obj.userId = Math.round(message.userId);
        }
        return obj;
    },
    create(base) {
        return exports.GetAllPayReq.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetAllPayReq();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseGetAllPayRes() {
    return { userId: 0, payments: [] };
}
exports.GetAllPayRes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== 0) {
            writer.uint32(8).int32(message.userId);
        }
        for (const v of message.payments) {
            exports.Payment.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAllPayRes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.userId = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.payments.push(exports.Payment.decode(reader, reader.uint32()));
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
            userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
            payments: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.payments) ? object.payments.map((e) => exports.Payment.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.userId !== 0) {
            obj.userId = Math.round(message.userId);
        }
        if ((_a = message.payments) === null || _a === void 0 ? void 0 : _a.length) {
            obj.payments = message.payments.map((e) => exports.Payment.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetAllPayRes.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetAllPayRes();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : 0;
        message.payments = ((_b = object.payments) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Payment.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGetPayResultReq() {
    return { result: undefined };
}
exports.GetPayResultReq = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            exports.PaymentResult.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPayResultReq();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = exports.PaymentResult.decode(reader, reader.uint32());
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
        return { result: isSet(object.result) ? exports.PaymentResult.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.result !== undefined) {
            obj.result = exports.PaymentResult.toJSON(message.result);
        }
        return obj;
    },
    create(base) {
        return exports.GetPayResultReq.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetPayResultReq();
        message.result = (object.result !== undefined && object.result !== null)
            ? exports.PaymentResult.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseGetPayResultRes() {
    return { result: undefined };
}
exports.GetPayResultRes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            exports.PaymentResult.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPayResultRes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = exports.PaymentResult.decode(reader, reader.uint32());
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
        return { result: isSet(object.result) ? exports.PaymentResult.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.result !== undefined) {
            obj.result = exports.PaymentResult.toJSON(message.result);
        }
        return obj;
    },
    create(base) {
        return exports.GetPayResultRes.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetPayResultRes();
        message.result = (object.result !== undefined && object.result !== null)
            ? exports.PaymentResult.fromPartial(object.result)
            : undefined;
        return message;
    },
};
exports.PaymentServiceService = {
    all: {
        path: "/PaymentService/all",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetAllPayReq.encode(value).finish()),
        requestDeserialize: (value) => exports.GetAllPayReq.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetAllPayRes.encode(value).finish()),
        responseDeserialize: (value) => exports.GetAllPayRes.decode(value),
    },
    result: {
        path: "/PaymentService/result",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetPayResultReq.encode(value).finish()),
        requestDeserialize: (value) => exports.GetPayResultReq.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetPayResultRes.encode(value).finish()),
        responseDeserialize: (value) => exports.GetPayResultRes.decode(value),
    },
};
exports.PaymentServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.PaymentServiceService, "PaymentService");
function isSet(value) {
    return value !== null && value !== undefined;
}