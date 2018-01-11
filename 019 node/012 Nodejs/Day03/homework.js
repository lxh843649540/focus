/**
 * Created by XM-web on 2017/5/19.
 */
const fs=require("fs");
const http=require("http");
const url=require("url");
var server=http.createServer();
server.listen(8080);
server.on("request",function(req,res){
    var objUrl=url.parse(req.url,true);
    var path=objUrl.pathname;
    res.setHeader("Content-Type","text/html;charset=utf-8");
    if(path==="/register"){
        fs.readFile("./public/register.html",function(err,data){
            if (err)throw err;
            //res.wirte(data);
            res.end(data);
        });
    }else if(path==="/register.do"){
        //console.log(objUrl.query);
        var n=objUrl.query.uname;
        var p=objUrl.query.upwd;
        var data=n+"-"+p+"\r\n";
        fs.appendFile("./public/user.do",data,function(err){
            res.end("<h1>注册成功</h1>");
        });
    }
});