// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.174.0
//   protoc               v3.14.0
// source: payment.proto

/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Address } from "./address";

export const protobufPackage = "";

export enum PaymentStatus {
  PAYMENT_DEFAULT = 0,
  PAYMENT_PENDING = 1,
  PAYMENT_PAID = 2,
  UNRECOGNIZED = -1,
}

export function paymentStatusFromJSON(object: any): PaymentStatus {
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

export function paymentStatusToJSON(object: PaymentStatus): string {
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

export interface Payment {
  id: number;
  title: string;
  date: string;
  status: PaymentStatus;
  amount: number;
  currency: string;
  address: Address | undefined;
  transR: string;
  userId: number;
}

function createBasePayment(): Payment {
  return { id: 0, title: "", date: "", status: 0, amount: 0, currency: "", address: undefined, transR: "", userId: 0 };
}

export const Payment = {
  encode(message: Payment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.date !== "") {
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
      Address.encode(message.address, writer.uint32(58).fork()).ldelim();
    }
    if (message.transR !== "") {
      writer.uint32(66).string(message.transR);
    }
    if (message.userId !== 0) {
      writer.uint32(72).int32(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Payment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.status = reader.int32() as any;
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

          message.address = Address.decode(reader, reader.uint32());
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

  fromJSON(object: any): Payment {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      date: isSet(object.date) ? globalThis.String(object.date) : "",
      status: isSet(object.status) ? paymentStatusFromJSON(object.status) : 0,
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
      address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
      transR: isSet(object.transR) ? globalThis.String(object.transR) : "",
      userId: isSet(object.userId) ? globalThis.Number(object.userId) : 0,
    };
  },

  toJSON(message: Payment): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.date !== "") {
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
      obj.address = Address.toJSON(message.address);
    }
    if (message.transR !== "") {
      obj.transR = message.transR;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Payment>, I>>(base?: I): Payment {
    return Payment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Payment>, I>>(object: I): Payment {
    const message = createBasePayment();
    message.id = object.id ?? 0;
    message.title = object.title ?? "";
    message.date = object.date ?? "";
    message.status = object.status ?? 0;
    message.amount = object.amount ?? 0;
    message.currency = object.currency ?? "";
    message.address = (object.address !== undefined && object.address !== null)
      ? Address.fromPartial(object.address)
      : undefined;
    message.transR = object.transR ?? "";
    message.userId = object.userId ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}