//1:加载http express框架
//2:创建服务器
const http = require("http");
const express = require("express");
var app = express();
var server = http.createServer(app);
server.listen(8080);
//方式一:参数 /user?uid=10&loc=bj
app.get("/user",(req,res)=>{
  //express为每req对象添加属性query属性
  console.log(req.query.uid);
  console.log(req.query.loc);
});
//方式二:参数/book/jsj/10
app.get("/book/:btype/:bid",(req,res)=>{
  //接收请求地址中参数 params
  console.log(req.params.btype);
  console.log(req.params.bid);
});  //jd/jd_user   15:30---15:40