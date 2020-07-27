import express from 'express';
import route from '../routes';
import { apiPostBoard } from '../controller/apiController';
import { onlyPrivate } from '../middleware';

const apiRouter = express.Router();

apiRouter.post(route.mapBoard, apiPostBoard);
export default apiRouter;