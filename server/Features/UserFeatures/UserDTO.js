"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
class UserDTO {
    constructor() {
        this.userId = undefined;
        this.UserFullName = undefined;
        this.UserNickname = undefined;
        this.UserPassword = undefined;
        this.UserAge = undefined;
        this.UserType = undefined;
        this.UserStatus = undefined;
    }
    checkPasswordLen() {
        return !(this.UserPassword && this.UserPassword.length < 6);
    }
}
exports.UserDTO = UserDTO;
