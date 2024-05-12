"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const UserSchema = new Schema({
    UserId: {
        type: Schema.Types.String,
        required: true
    },
    UserFullName: {
        type: Schema.Types.String,
        required: true
    },
    UserNickname: {
        type: Schema.Types.String,
        required: true
    },
    UserPassword: {
        type: Schema.Types.String,
        required: true
    },
    UserAge: {
        type: Schema.Types.Number,
        required: true
    },
    UserType: {
        type: Schema.Types.String,
        required: true
    },
    UserStatus: {
        type: Schema.Types.String,
        required: true
    }
}, { timestamps: true });
const UserModel = mongoose_1.default.model("UserModel", UserSchema);
exports.default = UserModel;
