import route from '../routes';
import Board from '../database/model/Board';
import fs from 'fs';

export const apiPicture = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
    } catch (error) {
        console.log(error);
        return res.redirect(route.home);
    }
}

export const apiPostBoard = async (req, res) => {
    const result = await Board.find({});
    return res.json(result);
}

export const apiTest = (req, res) => {
    return res.render('nav', { pageTitle: 'nav' });
}