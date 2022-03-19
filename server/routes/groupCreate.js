import express from "express";
const router = express.Router();

import { groupauth} from "../controllers/groupCreate.js";

router.post("/", groupauth);



export default router;