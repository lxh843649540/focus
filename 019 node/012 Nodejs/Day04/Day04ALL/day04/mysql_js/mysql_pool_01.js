//使用mysql模块执行sql
//创建连接池 
//#执行程序会一直在运行..
//1:创建连接池
const mysql = require("mysql");
var pool = mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'',
  database:'jd',
  connectionLimit:5      //池中连接对象数量
});
//2:从连接池中获取连接
pool.getConnection((err,conn)=>{
  if(err){
    console.log(err);
  }else{
    //连接获取成功
    //3:发送sql语句,获取结果集中数据
    conn.query("SELECT * FROM jd_dept",
      (err,result,fields)=>{
        
        console.log(result);
       //4:释放连接
       conn.release();
    });
  }

});


