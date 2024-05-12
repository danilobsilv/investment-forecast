"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
class UserDTO {
    constructor() {
        this.UserId = "";
        this.UserFullName = "";
        this.UserNickname = "";
        this.UserPassword = "";
        this.UserAge = 0;
        this.UserType = "";
        this.UserStatus = "";
    }
    checkPasswordLen() {
        return !!(this.UserPassword && this.UserPassword.length >= 6);
    }
}
exports.UserDTO = UserDTO;
