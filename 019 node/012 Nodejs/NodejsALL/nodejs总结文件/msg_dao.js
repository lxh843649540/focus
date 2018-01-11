const mysql = require('mysql');
const qs = require('querystring');

//数据库连接池
var pool = mysql.createPool({
  user: 'root',
  database: 'bbs',
  password:'',
  connectionLimit: 5
});

module.exports = {
  add: (req, res)=>{
    req.on("data",(data)=>{
    var obj = qs.parse(data.toString());
    pool.getConnection((err, conn)=>{
      var u = obj.uname;
      var c = obj.content;
      conn.query('INSERT INTO t_msg VALUES(null,?,?,now())',[u,c],(err, result)=>{
        //把查询结果集转换为JSON字符串，输出给客户端
        var rs = {"code":1,"mid":result.insertId};
        res.json(rs);
        conn.release();//释放连接回连接池
      })
    });
   });//data end

  },
  getAll: (req, res)=>{
    pool.getConnection((err, conn)=>{
      conn.query('SELECT * FROM t_msg', (err, result)=>{
        res.json(result); //只需要向客户端返回一个JSON对象即可，无需返回数组
        conn.release();
      })
    })
  }
};