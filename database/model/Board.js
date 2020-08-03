import mongoose from 'mongoose';

const BoardSchema = new mongoose.Schema({
    image: String, 
    title: String,
    body: String,
    author: String,
    authorNumber:String,

    nickname:String,
    date: { type: Date, default: Date.now },
    latitude: Number,
    longitude : Number,
    votes: { type: Number, default: 0 }
});

const Board = mongoose.model('Board', BoardSchema);

export default Board;