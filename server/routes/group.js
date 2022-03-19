import express from "express";

import {getGroupDetails} from '../controllers/groupCreate.js'


const groupRouter = express.Router();

groupRouter.get("/get-group-details/:groupid", getGroupDetails );


export default groupRouter;