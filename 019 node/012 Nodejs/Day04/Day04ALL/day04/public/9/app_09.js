//处理客户post请求
//*1:加载相应模块 http express querystring
//*2:创建web服务器
//*3:监听端口8080
const http = require("http");
const express = require("express");
const qs = require("querystring");

var app = express();
var server = http.createServer(app);
server.listen(8080);

//16:35--16:45
//*4:创建表单 public/9/index.html [用户名密码]
//*5:添加 jquery代码提交表单内容 post
//*6:添加 get请求 /index /jquery
app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/9/index.html");
});
app.get("/jquery",(req,res)=>{
  res.sendFile(__dirname+"/public/9/jquery-1.11.3.js");
});

//7:接收post请求,获了用户数据
app.post("/user",(req,res)=>{
  //接收客户端请求主体数据
  req.on('data',(buf)=>{
     console.log(buf);
     console.log(buf.toString());
     var obj = qs.parse(buf.toString());
     console.log(obj.uname);
     console.log(obj.upwd);
     res.send("<h1>ok</h1>");
  });
});