//1:加载相应的模块 http url fs mysql
const http = require("http");
const url = require("url");
const fs = require("fs");
const mysql = require("mysql");
//2:创建连接池 
var pool = mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'',
  database:'jd',
  connectionLimit:5  //连接池大小
});
//3:创建服务器
var server = http.createServer();
server.listen(80);
//4:为服务器注册事件request
//参数 req 请求对象(客户信息)
//参数 res 响应对象(服务器信息)
server.on('request',(req,res)=>{
//5:解析参数
var objUrl = url.parse(req.url,true);
//6:获取请求地址 
var path = objUrl.pathname;
//7:设置响应头信息格式 
res.setHeader('content-type','text/html;charset=utf-8');
//8:判断路径
if(path==='/register'){
  //9:异步读取文件
  fs.readFile("./public/register.html",(err,data)=>{
      if(err)throw err;
      res.end(data);
  });
}else if(path==='/register.do'){
  var n = objUrl.query.uname;
  var p = objUrl.query.upwd;
  //10:从连接池中获取一个连接
  pool.getConnection((err,conn)=>{
      if(err){
        console.log("从连接池中获取连接失败");
      }else{
        //11:发送sql语句
        conn.query("INSERT INTO jd_user VALUES(null,?,?)",
          [n,p],(err,result)=>{
          if(err){
            console.log("sql语句执行失败");
          }else{
            console.log("执行成功");
          } 
          //12:释放连接
          conn.release();
        });
      }
  });

}

});


//4:解析参数如果请求 register 返回register.html
//5:                 register 添加数据库