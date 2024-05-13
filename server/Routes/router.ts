const router = require('express').Router();


import UserRouter from "../Features/UserFeatures/UserRouter";
router.use("/", UserRouter)

export default router;
