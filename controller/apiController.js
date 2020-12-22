import Board from '../database/model/Board';
import User from '../database/model/User';
import pdfDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

import route from '../router/routes';

export const apiPostBoard = async (req, res) => {
    if (req.isAuthenticated()) {
        const result = await Board.find({
        author: req.user.name,
    authorNumber : req.user.studentNumber});
    return res.json(result);

    }
    else {
        return res.sendStatus(200);
    }
}

export const apiGetTotalBoard = async (req, res) => {
    const {
        start, end
    } = req.query;
    try {
        var result = {};
        if (!start || !end) {
            result = await Board.find({});
        }  else {
            result = await Board.find({}).skip(start).limit(end - start);
        }
        return res.json(result);
    } catch (error) {
        console.log(error);
        res.sendStatus(502);
    };
}

export const apiGetUserExist = async (req, res) => {
    const {
        id
    } = req.body;
    const isUser = User.verifyId(id);
    if (isUser === true) {
        return res.json({
            status: true
        });
    } else {
        return res.json({
            status: false
        });
    }
}

export const apiGetPdfCreate = async (req, res) => {
    const doc = new pdfDocument();
    
    const {
        id
    } = req.params;

    try {
        var posting = await Board.findById(id);

    const {
        body, author, date, votes, image, title,
    } = posting;

    // doc.pipe(fs.createWriteStream(`uploads/${title}.pdf`));
        doc.info.Title = title;
        doc.info.Author = author;
        doc.info.date = date;

        doc.pipe(res);
        const imagePath = path.join(__dirname, `../uploads/${image}`);
            doc.image(imagePath, {
                fit: [300, 300],
                align: 'center',
                valign:'center'
            })
        doc.fontSize(25).text(`Title : ${title}`);
        doc.fontSize(15).text(`Body : ${body}`);
        doc.fontSize(10).text(`Author : ${author} Date : ${date}`);

    doc.end();
    } catch (error) {
        console.log(error);
        return res.redirect(route.home);
    };

}

export const apiGetBoardList = async (req, res) => {
    const {
        name
    } = req.user;
    
    try {
        const board = await Board.find({ author:name });
        return res.json({
            board
        });
    } catch (error) {
        console.log(error);
        return res.redirect(route.home);
    }
}