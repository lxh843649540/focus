//使用http模块创建web服务器
//监听8080端口
//使用express作为请求处理工具
//!express请求处理默认提供404处理
//1:引入http模块
//2:引入express模块   //11:30---11:35
const http = require("http");
const express = require("express");
//3:创建app 应用
var app = express();
//4:创建服务器
var server = http.createServer(app);
//5:监听指定端口
server.listen(8080);