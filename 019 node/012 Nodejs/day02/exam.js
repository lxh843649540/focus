const http=require("http");
var server=http.createServer();
server.listen(8080);
server.on("request",function(req,res){
    res.setHeader("Content-Type","text/html;charset=utf-8");
    res.write("<body><h1>hello nodejs哈哈</h1></body>");
    res.end();//##通知客户端,响应消息结束
});