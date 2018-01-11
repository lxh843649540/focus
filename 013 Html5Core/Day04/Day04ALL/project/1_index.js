const http = require('http');
const express = require('express');

var app = express(); //HTTP请求处理函数
http.createServer(app).listen(8080);//创建Web服务器，监听指定端口

//处理客户端的静态资源请求，如html/css/js/jpg...
app.use(express.static('./public'));

//处理客户端的动态资源请求，如json/xml...
app.get('/stat', (req, res)=>{
  var data = [
    {label:'HTML', value:3},
    {label:'CSS', value:5},
    {label:'JS', value:7},
    {label:'DOM', value:6.5},
    {label:'jQuery', value:6},
    {label:'DB', value:5},
    {label:'PHP', value:6},
    {label:'AJAX', value:8},
    {label:'Node.js', value:6},
    {label:'HTML5', value:5.5}
  ];
  res.json(data);
})


