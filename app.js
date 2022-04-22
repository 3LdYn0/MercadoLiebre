const express = require ('express');

const path = require ('path');

const app = express ();

app.use(express.static('public'));

app.listen(4040, () => {
    console.log('Server running at port 4040');
});

app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get ('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});

app.get ('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});