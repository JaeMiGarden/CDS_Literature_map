import route from '../routes';
import Board from '../database/model/Board';
import fs from 'fs';

export const apiPostBoard = async (req, res) => {
    const result = await Board.find({
        author: req.user.name,
    authorNumber : req.user.studentNumber});
    return res.json(result);
}
