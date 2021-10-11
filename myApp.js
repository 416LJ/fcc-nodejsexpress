var express = require('express');
var app = express();


console.log("Hello World");

app.get("/", (req, res) => {
    
    res.sendFile(__dirname + "/public/index.html");

} );





























 module.exports = app;
