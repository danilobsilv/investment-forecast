"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const connect_1 = require("./Database/connect");
const router_1 = require("./Routes/router");
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use("/api", router_1.router);
app.use((0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: true,
    legacyHeaders: false
}));
(0, connect_1.db_conn)().then(() => {
    const PORT = process.env.PORT || 80;
    app.listen(PORT, () => {
        console.log("Server running on port " + PORT);
    });
}).catch((error) => {
    console.error(`Failed to connect to the database: ${error}`);
});
