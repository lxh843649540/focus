/**
 * Created by XM-web on 2017/5/25.
 */
//功能:记录所有请求时间 new Date();
//1:加载相应模块 http express
const http=require("http");
const express=require("express");
//2:创建服务器 绑定 8080端口
var app=express();
var server=http.createServer(app);
server.listen(8080);
//3:创建中间件函数 m1
function m1(req,res,next){
    //1:输出当前访问时间
    console.log("访问时间是:"+new Date());
    //2:继续向后执行程序
    next();
}
//4:功能记录当前访问时间
//5:应用中间件
app.use(m1);
//6:实现二个请求 get get
//7:get  /     输出html  index
app.get("/",(req,res)=>{
    res.send("<h1>index</h1>")
    // sendFile(__dirname+"index.html");
});
//8:get  /admin输出html admin page
app.get("/admin",(req,res)=>{
    res.send("<h1>admin page</h1>");
});