"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = __importDefault(require("./UserService"));
exports.UserController = {
    createUser: new UserService_1.default().createUser,
    deleteUser: new UserService_1.default().deleteUser,
    updateUser: new UserService_1.default().updateUser,
    getAllUsers: new UserService_1.default().getAllUsers,
    getUserById: new UserService_1.default().getUserById
};
