import express from 'express';
import route from '../router/routes';

import { apiPostBoard, apiGetTotalBoard, apiGetUserExist, getPdfCreate, apiGetPdfCreate } from '../controller/apiController';

const apiRouter = express.Router();

apiRouter.post(route.mapBoard, apiPostBoard);
apiRouter.get(route.totalBoard, apiGetTotalBoard);
apiRouter.get(route.verifyId, apiGetUserExist);
apiRouter.get(route.pdfCreate, apiGetPdfCreate);

export default apiRouter;
