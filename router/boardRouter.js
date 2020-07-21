import express from 'express';
import route from '../routes';
import { getBoardRead, postBoardWrite } from '../controller/mapController';
import { onlyPrivate } from '../middleware';

const boardRouter = express.Router();

boardRouter.get(route.read, getBoardRead);

boardRouter.post(route.write,onlyPrivate,  postBoardWrite);
export default boardRouter;