import express from "express";
const router = express.Router();

import { userrequest} from "../controllers/user.js";


router.post("/userrequest", userrequest);



export default router;