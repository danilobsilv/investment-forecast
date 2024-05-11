"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const UserController_1 = require("./UserController");
router.route("/user").post((req, res, next) => UserController_1.UserController.createUser(req, res, next));
exports.default = router;
