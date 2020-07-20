import express from 'express';
import cons from 'consolidate';
import path from 'path';
import ejs from 'ejs';

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'templates')))

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/login.html'));
})

app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/login.html'));
})

const handleListening = () => {
    return console.log("START");
}

app.listen(4000, handleListening);