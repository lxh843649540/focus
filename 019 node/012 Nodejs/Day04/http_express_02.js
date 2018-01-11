/**
 * Created by XM-web on 2017/5/23.
 */
//处理不同类型请求
//响应不是类型数据 text/html
//                 file
//                 img
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
//express请求处理函数默认提供404响应处理
app.get("/",(req,res)=>{
    res.send("<h1>Index page</h1>");
});
app.get("/index",(req,res)=>{
    //express中的req和res继承http模块 req,res
    //发送html片段 setHeader()+write()+end()
    res.send("<h1>hello Nodejs</h1>");
});
//读取一个网页(坑路径)
app.get("/login",(req,res)=>{
    //读取文件将文件内容发送客户端
    //sendFile=readFile+setHeader+write+end
    res.sendFile(__dirname+"/public/login.html");
});
app.get("/register.do",(req,res)=>{
    res.send("<h1>登录成功</h1>");
});
