import express from 'express';
import route from '../routes';
import path from 'path';
import { getHome } from '../controller/boardController';

const globalRouter = express.Router();

globalRouter.get(route.home, getHome);

export default globalRouter;
