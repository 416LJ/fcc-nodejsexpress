const { json } = require('body-parser');
var express = require('express');
var app = express();

const middleware = (req, res, next) => {
    req.time = new Date().toString();
    next();
  };

  app.get("/now", middleware, (req, res) => {
    res.send({
      time: req.time
    });
  });


  app.get("/:word/echo", (req, res) => {
      const { word } = req.params;
      res.json({
          echo : word
      })
  });

  app.get("/name", (req, res) => {
      const first = req.query.first;
      const last= req.query.last;   


      res,json({
          name: `${first} ${last}`

      });
  })

app.use((req, res, next)=>{
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });
                      
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
