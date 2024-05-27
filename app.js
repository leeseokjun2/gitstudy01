const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('<h1>반갑다</h1>');
});


const server = http.createServer(app);
server.listen(3000, () => {
    console.log('Run on server http://localhost:3000');
});