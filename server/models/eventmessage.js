import mongoose from 'mongoose';

const EventSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    groupid:String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var EventMessage = mongoose.model('EventMessage', EventSchema);

export default EventMessage;