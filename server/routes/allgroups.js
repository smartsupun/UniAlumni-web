import express from "express";

import {getallGroupDetails} from '../controllers/groupCreate.js'


const allgroupRouter = express.Router();

allgroupRouter.get("/get-all-group-details", getallGroupDetails );


export default allgroupRouter;