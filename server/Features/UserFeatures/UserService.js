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
const mongoose_1 = __importDefault(require("mongoose"));
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
            try {
                const userId = req.params.userId;
                if (!mongoose_1.default.Types.ObjectId.isValid(userId)) {
                    return res.status(400).json({ msg: "Invalid User Id" });
                }
                const user = yield UserModel_1.default.findById(userId);
                if (!user) {
                    return res.status(404).json({ msg: "User Not Found" });
                }
                const deletedUser = yield UserModel_1.default.findByIdAndDelete(userId);
                return res.status(204).json({ user: deletedUser, msg: "User Successfully Deleted" });
            }
            catch (error) {
                console.log("Error: ", error.message);
                return res.status(500).json({ msg: error.message });
            }
        });
    }
    getAllUsers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield UserModel_1.default.find();
                if (!users) {
                    return res.status(404).json({ msg: "There Are No Users" });
                }
                res.json(users);
            }
            catch (error) {
                res.status(500).json({ InternalServerError: error.message });
            }
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
