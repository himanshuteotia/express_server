var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyparser = require("body-parser");
var routes = require("./routes")

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({'extended' : true}));
app.use("/",routes.user);
app.use('/',function(req,res){
    res.send("Welcome to express APP");
})

app.listen(3000);
console.log("Server listining ...")

