import mongoose from 'mongoose';
import EventMessage from '../models/eventMessage.js';


export const getEvents = async (req, res) => { 
    try {
        const eventMessages = await EventMessage.find();
        console.log(eventMessages)
                
        res.status(200).json(eventMessages);
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message });
    }
}

export const createEvent = async (req, res) => {
    const event = req.body;
    
    const newEventMessage = new EventMessage({ ...event, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newEventMessage.save();

        res.status(201).json(newEventMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const updateEvent = async (req, res) => {
    const { id:_id } = req.params;
    const event = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No event with id: `);

    const updatedEvent = await EventMessage.findByIdAndUpdate(_id, event, { new: true });

    res.json(updatedEvent);
}


export const deleteEvent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);

    await EventMessage.findByIdAndRemove(id);

    res.json({ message: "Event deleted successfully." });
}


export const likeEvent = async (req, res) => {
    const { id } = req.params;

    
    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);
    
    const event = await EventMessage.findById(id);
    const index = event.likes.findIndex((id) => id ===String(req.userId));

    if (index === -1) {
        event.likes.push(req.userId);
      } else {
        event.likes = event.likes.filter((id) => id !== String(req.userId));
      }

      const updatedEvent = await EventMessage.findByIdAndUpdate(id, event, { new: true });

    
    res.json(updatedEvent);
}
