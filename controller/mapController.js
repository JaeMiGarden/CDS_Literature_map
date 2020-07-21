import route from "../routes";
import mongoose from "mongoose";

const Board = mongoose.model('Board');

export const getHome = async (req, res) => {
    const board = await Board.find({});
    console.log(board);
    return res.render('map.html', {pageTitle:"Home", board});
}

export const getBoardWrite = (req, res) => {
    return res.render('write.html');
}

export const postBoardWrite = async (req, res) => {
    const {
        body: { title, body, author, latitude, longitude}
    } = req;
    const votes = 0;
    try {
        const board = await new Board({
            title, body, author, latitude, longitude
        });
        await board.save();
        return res.redirect(route.home);
    } catch(error){
        console.log(error);
        return res.redirect(route.home);
    }
}

export const getBoardRead = async (req, res) => {
    const {
        body: { title }
    } = req;

    const posting = await Board.find({
        title
    });

    const {
        body, author, date, votes
    } = posting;

    console.log(posting);
    posting.votes++;

    await posting.save();

    return res.render('board.html', { pageTitle: "board", posting }); 
}
