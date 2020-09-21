import express from 'express';
import route from '../router/routes';
import { onlyPublic, onlyPrivate } from '../middleware/middleware';

import { getLogin, postLogin, getSignin, postSignin, getLogout } from '../controller/userController';
import { getHome, getMain } from '../controller/mapController';

const globalRouter = express.Router();

globalRouter.get(route.home, getHome);

globalRouter.get(route.login, onlyPublic,getLogin);
globalRouter.post(route.login, onlyPublic, postLogin);

globalRouter.get(route.signin, onlyPublic, getSignin);
//globalRouter.post(route.signin, onlyPublic, postSignin, postLogin);

globalRouter.get(route.logout, onlyPrivate, getLogout);

globalRouter.get(route.main, getMain);

export default globalRouter;
