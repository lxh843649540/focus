/**
 * Created by XM-web on 2017/5/23.
 */
//使用http模块创建web服务器
//监听8080端口
//使用express作为请求处理工具
//!express请求处理默认提供404处理
//1:引入http模块
const http=require("http");
//2:引入express模块
const express=require("express");
//3:创建app应用
var app=express();
//4:创建服务器
var server=http.createServer(app);
//5:监听指点端口
server.listen(8080);