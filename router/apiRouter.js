import express from 'express';
import route from '../routes';
import { apiPostBoard, getImage, apiTest } from '../controller/apiController';
import { onlyPrivate } from '../middleware';

const apiRouter = express.Router();

apiRouter.post(route.mapBoard, apiPostBoard);
apiRouter.get(route.test, apiTest);
export default apiRouter;