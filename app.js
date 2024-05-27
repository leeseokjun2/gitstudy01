const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('<h1>Hello Worid!</h1>');
});

app.get('/home', (req, res) => {
    res.end('<h1>하하핳 하하하!</h1>');
});

app.get('/shop', (req, res) => {
    res.end('<h1>Hello shopping mall!!</h1>');
});

const server = http.createServer(app);
server.listen(3000, () => {
    console.log('Run on server http://localhost:3000');
});