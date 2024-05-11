const router = require('express').Router();

import { UserController } from "../Features/UserFeatures/UserController";

router.route("/user").post((req: any, res: any, next: any) => UserController.createUser(req, res, next));

export default router;
