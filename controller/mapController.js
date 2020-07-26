import route from "../routes";
import mongoose from "mongoose";
import fs from 'fs';
import path from 'path';
import jsStringify from 'js-stringify';

const Board = mongoose.model('Board');

export const getHome = async (req, res) => {
    const board = await Board.find({});
    return res.render('map', { pageTitle: "Home", jsStringify, board });
}

export const getBoardWrite = (req, res) => {
    return res.render('write', {pageTitle: "BoardWriting"});
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
    try {
        var posting = await Board.findById(id);

    const {
        body, author, date, votes, image
    } = posting;

    posting.votes++;

    await posting.save();

    return res.render('board', { pageTitle: "board", posting }); 

    } catch (error) {
        console.log(error);
        return res.redirect(route.home);
    };
}

export const getBoardDelete = async (req, res) => {
    const {
        params: { id }
    } = req;
    console.log(id);
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