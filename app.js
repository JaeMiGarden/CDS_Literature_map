import express from 'express';
import cons from 'consolidate';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
    return res.render('map');
})

app.get('/login', (req, res) => {
    return res.status(200).sendFile(__dirname + '/templates/login.html');
})

app.get('/signin', (req, res) => {
    return res.status(200).sendFile(__dirname + '/templates/signin.html');
})

const handleListening = () => {
    return console.log("START");
}

app.listen(4000, handleListening);