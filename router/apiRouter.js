import express from 'express';
import route from '../routes';
import { apiPostBoard, getImage } from '../controller/apiController';
import { onlyPrivate } from '../middleware';

const apiRouter = express.Router();

apiRouter.post(route.mapBoard, onlyPrivate,apiPostBoard);

apiRouter.get(route.image(), getImage);
export default apiRouter;