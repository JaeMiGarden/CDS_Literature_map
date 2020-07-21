import route from '../routes';
import express from 'express';
import { getLogin, getSignin, postLogin, postSignin, localLogin } from '../controller/userController';
import { onlyPublic } from '../middleware';

const userRouter = express.Router();


export default userRouter;