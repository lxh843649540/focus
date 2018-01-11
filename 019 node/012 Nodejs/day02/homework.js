/**
 * Created by XM-web on 2017/5/19.
 */
const fs=require("fs");
const http=require("http");
var server=http.createServer();
server.listen(8080);
server.on("request",function(req,res){
    res.setHeader("Content-Type","text/html;charset=utf-8");
    if(req.url==="/register.do"){
        fs.readFile("./public/register.html",function(err,data){
            if(err)throw err;
            res.write(data);
            res.end();
        });
    }else if(req.url==="/logout.do"){
        fs.readFile("./public/logout.html",function(err,data){
            if(err)throw err;
            res.write(data);
            res.end();
        });
    }else if(req.url!=="/register.do"&&req.url!=="/login.do"&&req.url!=="/logout.do"){
        fs.readFile("./public/404.html",function(err,data){
            if(err)throw err;
            res.write(data);
            res.end();
        });
    }else {
        fs.readFile("./public/500.html",function(err,data){
            if(err)throw err;
            res.write(data);
            res.end();
        });
    }
});