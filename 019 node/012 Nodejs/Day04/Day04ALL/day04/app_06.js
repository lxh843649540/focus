//功能一:创建web服务器
const http = require("http");
const express = require("express");

var app = express();
var server = http.createServer(app);
server.listen(8080);
//功能二:接收响应/index
app.get("/index",(req,res)=>{
  res.sendFile(__dirname+"/public/6/index.html");
});
//功能三:接收响应/index.css
app.get("/index.css",(req,res)=>{
  res.sendFile(__dirname+"/public/6/index.css");
});
//功能四:接收响应/logo
app.get("/logo",(req,res)=>{
  res.sendFile(__dirname+"/public/6/logo.png");
});
//功能五:接收响应
app.get("/jquery",(req,res)=>{
  res.sendFile(__dirname+"/public/6/jquery-1.11.3.js");
});