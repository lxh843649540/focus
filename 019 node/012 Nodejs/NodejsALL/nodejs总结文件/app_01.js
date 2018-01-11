//第一个中间件
//功能:记录所有请求时间 new Date();
//19:22---19:32
//*1:加载相应模块 http express
//*2:创建服务器 绑定 8080端口
const http = require("http");
const express = require("express");
var app = express();
var server = http.createServer(app);
server.listen(8080);
//3:创建中间件函数 m1
function m1(req,res,next){
  //1:输出当前访时间
  console.log("访问时间是:"+new Date());
  //2:继续向后执行程序
  next();
}
//m1({},{},function(){});
//4:功能记录当前访问时间
//5:应用中间件
app.use(m1);
//*6:实现二个请求   19:33
//*7:get  /       输出html index
//*8:get   /admin 输出html admin page
app.get("/",(req,res)=>{
   res.send("<h1>index</h1>");
});
app.get("/admin",(req,res)=>{
   res.send("<h1>admin page</h1>");
});

