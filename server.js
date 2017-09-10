var express= require("express");
var app= express();


app.get("/",function(req,res){
res.send("This is my first fucking project");
});

var port = process.env.port || 80

app.listen(port,function(req,res){
console.log("Port is listening to 3000");
});