import express from 'express';
import route from '../routes';
import path from 'path';
import { getHome } from '../controller/boardController';
import { onlyPublic } from '../middleware';
import { getLogin, postLogin, getSignin, postSignin } from '../controller/userController';

const globalRouter = express.Router();

globalRouter.get(route.home, getHome);

globalRouter.get(route.login, onlyPublic,getLogin);
globalRouter.post(route.login, onlyPublic, postLogin);

globalRouter.get(route.signin, onlyPublic, getSignin);
globalRouter.post(route.signin, onlyPublic,postSignin, postLogin);
export default globalRouter;
