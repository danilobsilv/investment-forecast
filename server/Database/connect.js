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
exports.db_conn = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const uri = "mongodb+srv://danilobsilv:kdqq4W1ZPKOo1HxV@test-cluster.kpwralm.mongodb.net/?retryWrites=true&w=majority&appName=test-cluster";
//const uri = process.env.CONN_STRING_TEST_CLUSTER
function db_conn() {
    return __awaiter(this, void 0, void 0, function* () {
        const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
        try {
            mongoose_1.default.set("strictQuery", true);
            yield mongoose_1.default.connect(uri);
            console.log("connected to Database");
        }
        catch (error) {
            console.error(`Error connecting to the database: ${error}`);
        }
    });
}
exports.db_conn = db_conn;
