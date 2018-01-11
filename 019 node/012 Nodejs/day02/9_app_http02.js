/*Created by XM-web on 2017/5/19*/
const http=require("http");
const fs=require("fs");
var server=http.createServer();
server.listen(8080);
server.on("request",function(req,res){
    //解析客户端发来的请求消息
    res.setHeader("Content-Type","text/html;charset=utf-8");
    if(req.url==="/index"){
        fs.readFile("./public/index.html",function(err,data){
            if(err)throw err;
            res.write(data);
            res.end();
        });
    }else if(req.url==="/news"){
        fs.readFile("./public/news.html",function(err,data){
            if(err)throw err;
            res.write(data);
            res.end();
        });
    }else{
        fs.readFile("./public/404.html",function(err,data){
            if(err)throw err;
            res.write(data);
            res.end();
        });
    }
});