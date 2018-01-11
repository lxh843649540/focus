//1:加载相关模块  http express mysql
const http = require("http");
const mysql = require("mysql");
const express = require("express");
console.log(1);
//2:创建连接池
var pool = mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'',
  database:'jd',
  connectionLimit:5   //连接池中对象
});
console.log(2);
//3:创建服务器 
var app = express();
var server = http.createServer(app);
server.listen(8080);
console.log(3);
//4:接收客户端提交的请求 /user/3  /user/5
app.get("/user/:uid",(req,res)=>{
console.log(4);
 //5:获取参数值
 var uids = req.params.uid;
 //6:获取连接发送sql语句
 pool.getConnection((err,conn)=>{
    conn.query("SELECT * FROM jd_user WHERE id = ?",[uids],(err,result)=>{
      //result
      res.json(result[0]);
      //7:释放连接
      console.log(5+result[0]);//NaN
      conn.release();
      });
 
 });

 


});

