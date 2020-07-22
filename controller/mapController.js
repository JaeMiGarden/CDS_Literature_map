import route from "../routes";
import mongoose from "mongoose";

const Board = mongoose.model('Board');

export const getHome = async (req, res) => {
    const board = await Board.find({});
    return res.render('map.html', {pageTitle:"Home", board});
}

export const getBoardWrite = (req, res) => {
    return res.render('write.html', {pageTitle: "BoardWriting"});
}

export const postBoardWrite = async (req, res) => {
    const {
        body: { title, body, author, latitude, longitude },
        file: { filename }
    } = req;
    const votes = 0;
    try {
        const board = await new Board({
            title, body, author, latitude, longitude,
            image:filename
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
        params: { id }
    } = req;
    console.log(id);
    try {
        var posting = await Board.findById(id);
        console.log(posting);
    const {
        body, author, date, votes, image
    } = posting;

    posting.votes++;

    await posting.save();

    return res.render('board.html', { pageTitle: "board", posting }); 

    } catch (error) {
        console.log(error);
        return res.redirect(route.home);
    };
}
