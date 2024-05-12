"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDTO_1 = require("./UserDTO");
const UserModel_1 = __importDefault(require("./UserModel"));
class UserService {
    createUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userDTO = new UserDTO_1.UserDTO();
                userDTO.UserId = req.body.UserId;
                userDTO.UserFullName = req.body.UserFullName;
                userDTO.UserNickname = req.body.UserNickname;
                userDTO.UserPassword = req.body.UserPassword;
                userDTO.UserAge = req.body.UserAge;
                userDTO.UserType = req.body.UserType;
                userDTO.UserStatus = req.body.UserStatus;
                const newUser = yield UserModel_1.default.create(userDTO);
                return res.status(201).json({ newUser, message: "User successfully created." });
            }
            catch (error) {
                console.log(error.message);
                return res.status(500).json({ Error: error.message });
            }
        });
    }
    deleteUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getAllUsers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getUserById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    updateUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = UserService;
