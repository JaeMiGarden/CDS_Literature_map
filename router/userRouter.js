import route from '../routes';
import express from 'express';
import { getLogin, getSignin } from '../controller/userController';

const userRouter = express.Router();

userRouter.get(route.login, getLogin);

userRouter.get(route.signin, getSignin);

export default userRouter;