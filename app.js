import express from 'express';
import route from './router/routes';
import path from 'path';
import passport from 'passport';
import session from 'express-session';
import cookie_parser from 'cookie-parser';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import './auth/passport'
import { localsMiddleware } from './middleware/middleware';

import globalRouter from './router/globalRouter';
import boardRouter from './router/boardRouter';
import apiRouter from './router/apiRouter';

import { stream } from './config/winston';

const app = express();

const CookieStore = MongoStore(session);

app.use(helmet());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "templates/"));
app.use(express.static(path.join(__dirname, "/templates")));
app.use(express.static(path.join(__dirname, "/stylesheets")));
app.use(express.static(path.join(__dirname, "/semantic")));
app.use('/uploads', express.static(path.join(__dirname, "/uploads")));
app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.use('/stylesheets', express.static(path.join(__dirname, '/templates/stylesheets')));
app.use('/files', express.static(path.join(__dirname, '/templates/files')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookie_parser()); 
app.use(morgan('HTTP/:http-version :method :remote-addr :url :remote-user :status :res[content-length] :referrer :user-agent :response-time ms', { stream }));

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
app.use(route.board, boardRouter);
app.use(route.api, apiRouter);
export default app;
