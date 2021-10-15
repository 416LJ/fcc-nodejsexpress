const { json } = require('body-parser');
var express = require('express');
var app = express();
// reusable middleware function
const middleware = (req, res, next) => {
    req.time = new Date().toString();
    next();
  };
// chained middleware with reusable function
  app.get("/now", middleware, (req, res) => {
    res.send({
      time: req.time
    });
  });

//



app.use((req, res, next)=>{
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})


// serve html file
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });
                
  
  // serve json on specific route with .env file
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



//serve static assets
app.use("/public",express.static(__dirname + "/public"));





 module.exports = app;
