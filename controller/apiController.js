import Board from "../database/model/Board"

export const getLoadPosting = async (req, res) => {
    const board = await Board.find({});
    console.log(board);
    return res.send(board);
}