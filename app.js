import express from 'express';
import cons from 'consolidate';
import ejs from 'ejs';
import route from './routes';
import globalRouter from './router/globalRouter';
import userRouter from './router/userRouter';
import path from 'path';

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "templates/"));
app.engine('html', ejs.renderFile);
app.use(express.static("templates"));
app.use(express.static("files"));

app.use(route.home, globalRouter);
app.use(route.user, userRouter);


export default app;