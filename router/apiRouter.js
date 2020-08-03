import express from 'express';
import route from '../routes';
import { apiPostBoard, apiGetTotalBoard } from '../controller/apiController';

const apiRouter = express.Router();

apiRouter.post(route.mapBoard, apiPostBoard);
apiRouter.get(route.totalBoard, apiGetTotalBoard);
export default apiRouter;
