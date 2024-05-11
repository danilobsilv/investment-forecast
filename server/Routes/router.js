"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
const UserRouter_1 = __importDefault(require("../Features/UserFeatures/UserRouter"));
exports.router.use("/", UserRouter_1.default);
module.exports = exports.router;
