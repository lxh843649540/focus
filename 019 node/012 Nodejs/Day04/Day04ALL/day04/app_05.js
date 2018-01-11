//:处理不同类型请求
//响应不是类型数据 text/html
//                 file
//                 img
//1:引入http模块 
//2:引入express模块
const http = require("http");
const express = require("express");
//3:创建express应用
//4:创建服务器
var app = express();//Express本质是一个处理请求函数
var server = http.createServer(app);
server.listen(8080);
//5:监听8080 端口  11:35---11:38

//Express请求处理函数默认提供404响应处理

//get 服务器处理客户端get
app.get("/",(req,res)=>{
   res.send("<h1>index page</h1>");
});
app.get("/index",(req,res)=>{
  //express中的req和res继承http模块req,res
  //发送html片段 setHeader()+write()+end()
  res.send("<h1>hello NodeJs</h1>");
});
//读取一个网页  (坑:路径)
app.get("/user/login",(req,res)=>{
  //读取文件将文件内容发送客户端
  //sendFile=readFile+setHeader+write+end 
  //相对路径报错:
  //res.sendFile("./public/login.html");
  //console.log(__dirname);
  //绝对路径:
  res.sendFile(__dirname+'/public/login.html');
});





