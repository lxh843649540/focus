const http = require('http');
const express = require('express');
const pool = require('./pool');
const qs = require('querystring');

//客户端请求处理函数
var app = express();
//Web Server
http.createServer(app).listen(8080);



//处理客户端的静态资源请求
app.use(express.static('public'));

//处理客户端的动态资源请求
//1.接收客户端提交的uid，返回其抽奖统计
app.get('/lottery',(req, res)=>{
  //请求消息： GET /lottery?uid=5
  //响应消息： {uid:5, total:10,  used:3}
  var uid = req.query.uid;
  //从连接池中获取连接，向数据库服务器发送SQL命令
  pool.getConnection((err, conn)=>{
    conn.query('SELECT COUNT(*) AS c FROM lottery WHERE uid=?',[uid], (err, result)=>{
      //console.log(result); [{c:3}]
      var data = {uid:uid, total: 10, used:result[0].c};
      res.json(data);//向客户端输出JSON字符串
      conn.release();
    });
  });
});

//2 接收客户端POST请求，uid、level，返回该用户的抽奖统计
//请求消息：POST /lottery   主体：uid=5&level=二等奖
//响应消息：{uid:5, total:10, used:4}
app.post('/lottery', (req, res)=>{
  req.on('data', (buf)=>{
    //把请求主体解析为Object
    var obj = qs.parse(buf.toString());
    //从数据库连接池中得到连接，发送SQL命令
    pool.getConnection((err, conn)=>{
      conn.query('INSERT INTO lottery VALUES(NULL,?,?,?)',[obj.uid, obj.level, new Date().getTime()], (err, result)=>{
        //TODO: 此处应该检验一下INSERT操作是否成功
        //再次执行查询操作，获取已经抽奖的次数
        conn.query('SELECT COUNT(*) AS c FROM lottery WHERE uid=?',[obj.uid],(err, result)=>{
          var data = {uid: obj.uid, total:10, used:result[0].c};
          res.json(data);
          conn.release();
        })
      })
    })
  })
});