/**
 * Created by XM-web on 2017/5/23.
 */
//1:加载对应模块
const http=require("http");
const express=require("express");
const mysql=require("mysql");
const qs=require("querystring");
//2:创建web服务器
var app=express();
var server=http.createServer(app);
//3:监听端口
server.listen(8080);
var pool=mysql.createPool({
    post:"127.0.0.1",
    user:"root",
    password:"",
    database:"dj",
    connectionLimit:5,
});
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/users.html");
});
app.get("/jquery",(req,res)=>{
    res.sendFile(__dirname+"/public/jquery-1.11.3.js");
});
app.post("/add",(req,res)=>{
    //接收客户端请求主体数据
    req.on("data",(buf)=>{
        var obj=qs.parse(buf.toString());
        res.send("<h1>OK</h1>");
    });
});