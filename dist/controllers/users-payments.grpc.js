"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcUserPaymentController = void 0;
//import {_Ticket } from "../protos/dist/";
const express_1 = require("@decorators/express");
const middlewares_1 = require("../middlewares/");
const env_1 = require("../env");
const address = "localhost:" + env_1.Env.GRPCSOnePORT;
let GrpcUserPaymentController = class GrpcUserPaymentController {
    /*  private client =new _Ticket.TicketServiceClient(
        address,
        credentials.createInsecure()
      )*/
    all(res, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(userId);
        });
    }
};
__decorate([
    (0, express_1.Get)(""),
    __param(0, (0, express_1.Res)()),
    __param(1, (0, express_1.Params)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], GrpcUserPaymentController.prototype, "all", null);
GrpcUserPaymentController = __decorate([
    (0, express_1.Controller)("/users/:userId/payments", [middlewares_1.AuthenticateMiddleware])
], GrpcUserPaymentController);
exports.GrpcUserPaymentController = GrpcUserPaymentController;