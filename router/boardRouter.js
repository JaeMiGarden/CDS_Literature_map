import express from 'express';
import route from '../routes';
import { getBoardRead, postBoardWrite, getBoardWrite, getBoardDelete, getBoardList } from '../controller/mapController';
import { onlyPrivate, uploadPicture } from '../middleware';

const boardRouter = express.Router();

boardRouter.get(route.write, onlyPrivate, getBoardWrite);
boardRouter.post(route.write, onlyPrivate, uploadPicture, postBoardWrite);

boardRouter.get(route.board_list, onlyPrivate, getBoardList);

boardRouter.get(route.delete(), onlyPrivate, getBoardDelete);
boardRouter.get(route.read(), getBoardRead);

export default boardRouter;