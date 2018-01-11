/**
 * Created by XM-web on 2017/5/23.
 */
//处理客户post请求
//1:加载对应模块
const http=require("http");
const express=require("express");
const qs=require("querystring");
//2:创建web服务器
var app=express();
var server=http.createServer(app);
//3:监听端口
server.listen(8080);
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/9/index.html");
});
app.get("/jquery",(req,res)=>{
    res.sendFile(__dirname+"/public/jquery-1.11.3.js");
});
//7:接收'post'请求,获得用户数据
app.post("/user",(req,res)=>{
    //接收客户端请求主体数据
    req.on("data",(buf)=>{
        console.log(buf);
        console.log(buf.toString());
        var obj=qs.parse(buf.toString());
        console.log(obj.uname);
        console.log(obj.upwd);
        res.send("<h1>OK</h1>");
    });
});
