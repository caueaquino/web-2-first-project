const http = require('http');
const fs = require('fs');
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
var html;
var css;

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/mongo-calendar", {
    useNewUrlParser: true
});
app.use("/api", require("./routes/index"));
app.listen(9999);

http.createServer(function (req, res) {    
    switch (req.url) {

        case '/login':
            html = './view/index.html';
            css = './view/styles.css';
            break;

        case '/calendar':
            html = './view/calendar/index.html';
            css = './view/calendar/styles.css';
            break;

        case '/register':
            html = './view/register/index.html';
            css = './view/register/styles.css';
            break;    
    }

    if (req.headers['accept'].search('text/html') >= 0) {
        fs.readFile(html, function (err, data) {
            res.setHeader('Content-type', 'text/html');
            res.write(data);
            res.end();
        });
    } else {
        fs.readFile(css, function (err, data) {
            res.setHeader('Content-type', 'text/css');
            res.write(data);
            res.end();
        });
    }
}).listen(1234);