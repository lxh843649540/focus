//jd/jd_dept 示例
//------+-------------
//did   | int(11)
//dname | varchar(20)
//loc   | varchar(100)
//功能:对部门表添加删除更新操作
//*1:引入mysql模块 (添加)
const mysql = require("mysql");
//*2:创建连接
var conn = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'',
  database:'jd',
  port:3306
});
//*3:发送sql 接收返回结果 添加
//conn.query("INSERT INTO jd_dept VALUES(null,?,?)",
  //['财务部','北京'],
  //(err,result)=>{
  //if(err){
    //console.log(err);
  //}else{
    //console.log(result);
  //}
//});

//3:发送sql 接收返回数据  删除
//conn.query("DELETE FROM jd_dept WHERE did = ?",
  //[1],(err,result)=>{
  //if(err){
    //console.log(err);
  //}else{
    //console.log(result);
  //}
//});//9:35--9:40
//*4:关闭连接  更新 did=2 位置'青岛' 
//名称 '网络部'
conn.query("UPDATE jd_dept SET dname=?,loc=? WHERE did=?",
  ['网络部','青岛',2],(err,result)=>{
  if(err){
    console.log(err);
  }else{
    console.log(result);
  }
});

conn.end();