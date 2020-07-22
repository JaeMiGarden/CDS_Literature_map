import express from 'express';
import route from '../routes';
import { getBoardRead, postBoardWrite, getBoardWrite, getBoardDelete } from '../controller/mapController';
import { onlyPrivate, uploadPicture } from '../middleware';

const boardRouter = express.Router();

boardRouter.get(route.write, onlyPrivate, getBoardWrite);
boardRouter.post(route.write, onlyPrivate, uploadPicture, postBoardWrite);

boardRouter.get(route.read(), getBoardRead);

boardRouter.get(route.delete(), onlyPrivate,getBoardDelete);
export default boardRouter;