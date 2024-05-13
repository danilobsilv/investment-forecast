"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const UserRouter_1 = __importDefault(require("../Features/UserFeatures/UserRouter"));
router.use("/", UserRouter_1.default);
exports.default = router;
