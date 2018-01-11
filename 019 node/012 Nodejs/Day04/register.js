/*Created by XM-web on 2017/5/23.*/
const mysql=require("mysql");
const http=require("http");
const url=require("url");
const fs=require("fs");
//2:创建连接池
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"dj",
    connectionLimit:5
});
//3:创建服务器
var server=http.createServer();
server.listen(8080);
//4:为服务器注册事件
// 参数req请求对象(客户信息)
//参数res响应对象(服务器信息)
server.on("request",(req,res)=>{
    //5:解析参数
    var objUrl=url.parse(req.url,true);
    //6:获取请求地址
    var path=objUrl.pathname;
    //7:设置响应头信息格式
    res.setHeader("content-type","text/html;charset=utf-8");
    //8:判断路径
    if(path==="/register"){
        fs.readFile("./public/register.html",(err,data)=>{
            if(err)throw err;
            res.end(data);
        });
    }else if(path==="/register.do"){
        var n=objUrl.query.uname;
        var p=objUrl.query.upwd;
        pool.getConnection((err,conn)=>{
            if(err){
                console.log("从连接池获取链接失败"+err);
            }else{
                conn.query("INSERT INTO dj_user VALUES(null,?,?)",[n,p],(err,result)=>{
                    if(err){
                        console.log(err);
                    }else{
                        console.log(result);
                    }
                });
            }
        });
        res.end("注册成功");
    }
});
