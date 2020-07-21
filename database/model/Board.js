import mongoose from 'mongoose';

const BoardSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: String,
    date: { type: Date, default: Date.now },
    latitude: Number,
    longitude : Number,
    votes: Number
});

const Board = mongoose.model('Board', BoardSchema);

export default Board;