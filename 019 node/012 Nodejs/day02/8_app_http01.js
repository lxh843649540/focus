/**
 * Created by XM-web on 2017/5/19.
 */
//1:加载http模块 http
const http=require("http");
//2:创建http服务器
var server=http.createServer();
//3:为服务器绑定监听端口 8080
//端口有效范围:1023--65535
server.listen(8080);
//4:为http服务器注册事件 request
server.on("request",function(req,res){
    //解析客户端发来的请求消息
    console.log("请求方法"+req.method);
    console.log("请求地址"+req.url);
    console.log("协议版本"+req.httpVersion);
    console.log("请求头部"+req.headers);
    res.statusCode=200;//设置服务器响应状态码
    res.setHeader("Content-Type","text/html");
    res.write("<body><h1>hello nodejs</h1></body>");
    res.end();//##通知客户端,响应消息结束
});
