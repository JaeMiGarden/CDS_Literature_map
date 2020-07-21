import express from 'express';
import ejs from 'ejs';
import route from './routes';
import globalRouter from './router/globalRouter';
import userRouter from './router/userRouter';
import path from 'path';
import passport from 'passport';
import session from 'express-session';
import cookie_parser from 'cookie-parser';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import './passport'
import { localsMiddleware } from './middleware';
import boardRouter from './router/boardRouter';
import apiRouter from './router/apiRouter';

const app = express();

const CookieStore = MongoStore(session);

app.use(helmet());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "templates/"));
app.engine('html', ejs.renderFile);
app.use(express.static("templates"));
app.use(express.static("files"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookie_parser()); 
app.use(morgan("dev"));

app.use(session({
    secret: 'munhak',
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({mongooseConnection: mongoose.connection })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(localsMiddleware);

app.use(route.home, globalRouter);
app.use(route.user, userRouter);
app.use(route.board, boardRouter);

export default app;