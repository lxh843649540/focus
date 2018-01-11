//练习:创建一个简单web服务器
//1:引入http模块
const http = require("http");
//2:创建服务器
var server = http.createServer();
//3:绑定监听端口
//端口:1-65535  范围 
//自己开始程序  可用范围  1023-65535
//80  http 端口
server.listen(80);// 80 默认端口
//4:注册 request
server.on("request",function(req,res){
   console.log(req.method);
   res.setHeader('Content-Type','text/html;charset=utf-8');
   res.write("<h1>hello 80 东东</h1>");
   res.end();//通知客户端响应消息己经结束
});


