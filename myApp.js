var express = require('express');
var app = express();

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE == "uppercase"){
        res.json({
            message: "Hello json"
          .toUpperCase()});

    }else{
        res.json({
            message: "Hello json"
          });
    }

    
    


} );

app.use("/public",express.static(__dirname + "/public"));





























 module.exports = app;
