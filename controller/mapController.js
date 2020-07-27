import route from "../routes";
import mongoose from "mongoose";
import fs from 'fs';
import path from 'path';

const Board = mongoose.model('Board');

export const getHome = async (req, res) => {
    const board = await Board.find({});
    var user,
        auth = false;
    if (req.isAuthenticated()) {
        auth = true;
        user = req.user;
    }
    return res.render('map', { pageTitle: "Home", board, auth, user});
}

export const getBoardWrite = (req, res) => {
    const user = req.user;
    return res.render('write', {pageTitle: "BoardWriting", user});
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
    const user = req.user;
    try {
        var posting = await Board.findById(id);

    const {
        body, author, date, votes, image
    } = posting;

    posting.votes++;

    await posting.save();

    return res.render('board', { pageTitle: "board", posting , user}); 

    } catch (error) {
        console.log(error);
        return res.redirect(route.home);
    };
}

export const getBoardDelete = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const board = await Board.findById(id);
        
        await Board.deleteOne({
            _id:id
        });
        fs.unlink(`${path.join(__dirname, "../uploads/pictures/") + board.image}`, (err) => {
            console.log(err);
        }); 
        return res.redirect(route.home);

    } catch (error) {
        console.log(error);
        return res.redirect(route.home);
    }
}

export const getBoardList = async (req, res) => {
    const {
        name
    } = req.user;
    const user = req.user;
    try {
        const board = await Board.find({ author:name });
        return res.render('myboard', { pageTitle: 'BoardList', board, user });
    } catch (error) {
        console.log(error);
        return res.redirect(route.home);
    }
}
