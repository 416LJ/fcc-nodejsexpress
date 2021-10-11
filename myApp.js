var express = require('express');
var app = express();


console.log("Hello World");

app.get("/", (req, res) => {
    res.send("Hello Express");
    res.sendFile(__dirname + "/public/index.html");

} );





























 module.exports = app;
