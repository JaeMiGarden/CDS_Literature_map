import route from "../routes";
import mongoose from "mongoose";

const Board = mongoose.model('Board');

export const getHome = async (req, res) => {

    return res.render('map.html');
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
            title, body, author, latitude, longitude, votes
        });
        await board.save();
        return res.redirect(route.home);
    } catch(error){
        console.log(error);
        return res.redirect(route.home);
    }
}

export const getBoardRead = (req, res) => {
    return res.render('read.html');
}
