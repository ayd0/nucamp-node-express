const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express(); // returns express server application

app.use(morgan('dev')); // middleware function: Express term
app.use(express.static(__dirname + '/public')); // serves static files from public folder

app.use((req, res) => { 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});