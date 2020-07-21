import express from 'express';
import route from '../routes';
import path from 'path';

const globalRouter = express.Router();

globalRouter.get(route.home, (req, res) => {
    return res.sendFile("home.html");
})

export default globalRouter;
