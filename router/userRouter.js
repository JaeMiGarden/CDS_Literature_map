import route from '../routes';
import express from 'express';
import { onlyPublic } from '../middleware';

const userRouter = express.Router();


export default userRouter;