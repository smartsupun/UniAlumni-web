import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
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

var EventMessage = mongoose.model('EventMessage', eventSchema);

export default EventMessage;