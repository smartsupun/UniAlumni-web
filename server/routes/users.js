import express from "express";
const router = express.Router();

import { signin, signup,joinrequest,requeststatus,requeststatusreject } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/joinrequest", joinrequest);
router.post("/requeststatus", requeststatus);
router.post("/requeststatusreject", requeststatusreject);



export default router;