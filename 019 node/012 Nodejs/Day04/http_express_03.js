/**
 * Created by XM-web on 2017/5/23.
 */
//使用express框架创建一个web服务器,可以向客户提供一个/index响应,
// 内容是一个HTML页面,其中还使用了一个css文件,一个图片,jQuery.JS文件
//1:引入http模块
const http=require("http");
//2:引入express模块
const express=require("express");
//3:创建express应用
var app=express();
//4:创建服务器
var server=http.createServer(app);
//5:监听8080 端口
server.listen(8080);
//接收响应/index
app.get("/index",(req,res)=>{
    //读取文件将文件内容发送客户端
    res.sendFile(__dirname+"/public/index.html");
});
app.get("/index.css",(req,res)=>{
    res.sendFile(__dirname+"/public/index.css");
});
app.get("/banner",(req,res)=>{
    res.sendFile(__dirname+"/public/banner.jpg");
});
app.get("/jquery",(req,res)=>{
    res.sendFile(__dirname+"/public/jquery-1.11.3.js");
});