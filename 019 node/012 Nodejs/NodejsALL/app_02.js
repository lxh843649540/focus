const http=require("http");
const express=require("express");
const mysql=require("mysql");
//2:创建服务器 绑定 8080端口
var app=express();
var server=http.createServer(app);
server.listen(8080);
//使用express自带中间件访问静态资源
app.use(express.static("public"));
//1:添加留言
//1.1:创建连接池
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"bbs",
    connectionLimit:10
});
//1.2:处理请求  /add添加操作
app.get("/add",(req,res)=>{
    var n=req.query.uname;
    var c=req.query.content;
    //1.3:获取连接
    pool.getConnection((err,conn)=>{
        //1.4:发送sql
       conn.query("INSERT INTO t_msg VALUES(null,?,?,now())",[n,c],(err,result)=>{
           var rs={"code":1,"msg":"留言发表成功"};
           //1.5:添加成功 返回json
           res.json(rs.msg);
           conn.release();
       });
    });
});
//2:显示所有留言
app.get("/getall",(req,res)=>{
   pool.getConnection((err,conn)=>{
       conn.query("SELECT*FROM t_msg",(err,result)=>{
           res.json(result);
           conn.release();
       })
   })
});


