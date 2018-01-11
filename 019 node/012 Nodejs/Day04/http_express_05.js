/**
 * Created by XM-web on 2017/5/23.
 */
const http=require("http");
const express=require("express");
const mysql=require("mysql");
//2:创建连接池
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"dj",
    connectionLimit:5
});
//3:创建服务器
var app=express();
var server=http.createServer(app);
server.listen(8080);
//4:接收客户端提交的请求
app.get("/user/:uid",(req,res)=>{
    //5:获取参数值
    var uids=req.params.uid;
    //6:获取连接发送sql语句
    pool.getConnection((err,conn)=>{
        conn.query("SELECT*FROM dj_user WHERE uid=?",[uids],(err,result)=>{
            //result
            res.json(result[0]);
            //7:释放连接
            conn.release();
        });
    });
});
