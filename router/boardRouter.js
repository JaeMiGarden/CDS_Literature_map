import express from 'express';
import route from '../router/routes';
import { getBoardRead, postBoardWrite, getBoardWrite, getBoardList, boardDelete } from '../controller/mapController';
import { onlyPrivate, uploadPicture } from '../middleware/middleware';

const boardRouter = express.Router();

boardRouter.get(route.write, onlyPrivate, getBoardWrite);
boardRouter.post(route.write, onlyPrivate, uploadPicture, postBoardWrite);

boardRouter.get(route.board_list, onlyPrivate, getBoardList);

boardRouter.get(route.read(), getBoardRead);
boardRouter.delete(route.delete(), onlyPrivate, boardDelete);

export default boardRouter;