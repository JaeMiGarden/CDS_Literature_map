import Board from '../database/model/Board';
import User from '../database/model/User';

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
    const result = await Board.find({});
    return res.json(result);
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