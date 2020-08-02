import route from '../routes';
import Board from '../database/model/Board';
import fs from 'fs';

export const apiPostBoard = async (req, res) => {
    const result = await Board.findById(req.user._id);
    return res.json(result);
}
