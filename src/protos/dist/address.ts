// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.174.0
//   protoc               v3.14.0
// source: address.proto

/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Address {
  title: string;
  street: string;
  city: string;
  state: string;
  country: string;
  ip: string;
}

function createBaseAddress(): Address {
  return { title: "", street: "", city: "", state: "", country: "", ip: "" };
}

export const Address = {
  encode(message: Address, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Address {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

  fromJSON(object: any): Address {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      street: isSet(object.street) ? globalThis.String(object.street) : "",
      city: isSet(object.city) ? globalThis.String(object.city) : "",
      state: isSet(object.state) ? globalThis.String(object.state) : "",
      country: isSet(object.country) ? globalThis.String(object.country) : "",
      ip: isSet(object.ip) ? globalThis.String(object.ip) : "",
    };
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<Address>, I>>(base?: I): Address {
    return Address.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Address>, I>>(object: I): Address {
    const message = createBaseAddress();
    message.title = object.title ?? "";
    message.street = object.street ?? "";
    message.city = object.city ?? "";
    message.state = object.state ?? "";
    message.country = object.country ?? "";
    message.ip = object.ip ?? "";
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
