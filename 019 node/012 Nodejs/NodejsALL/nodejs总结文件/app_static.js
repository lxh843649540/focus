const http = require('http');
const express = require('express');
const msg = require('./msg_dao');

var app = express();
http.createServer(app).listen(8080);

//使用中间件向客户端返回静态内容
app.use(express.static('public/10'));

//定义路由，向客户端返回动态内容
app.post('/add', msg.add);
app.get('/getall', msg.getAll);






