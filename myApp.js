
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
//11. install body parser in json package file



// 7. root level logger
app.use((req, res, next)=>{
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});


//1. meet the node console
console.log("hello laxsan");

//2. working express server
/** app.get("/", (req, res) => {
    res.send("Hello Express");
  });
**/


// 3. serve html file
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });
                
// 4. serve static assets
app.use("/public",express.static(__dirname + "/public"));

// 5 and 6. serve json on specific route with .env file
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

// 8. create time server with reusable function
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

// 9 . get route parameter from user

app.get("/:word/echo", (req, res) => {
    const { word } = req.params;
    res.json({
        echo : word
    })
});

// 10. get parameter query

app.get("/name", (req, res) => {
  const first = req.query.first;
  const last= req.query.last;   
  const { first: firstName, last: lastName } = req.query;
  res.send({
      name : `${firstName} ${lastName}`
  });
});









 module.exports = app;
