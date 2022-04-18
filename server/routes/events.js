import express from 'express';
import auth from "../middleware/auth.js";


import {getEvents, createEvent, updateEvent,deleteEvent,likeEvent} from '../controllers/events.js'
const erouter = express.Router();

erouter.get('/', getEvents);
erouter.post('/',auth,  createEvent);
erouter.patch('/:id', auth, updateEvent);
erouter.delete('/:id', auth, deleteEvent);
erouter.patch('/:id/likeEvent', auth, likeEvent);





export default erouter;