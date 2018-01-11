//使用mysql模块 DML(INSERT/DELETE/UPDATE)
//##mysql启动
//1:加载模块，创建连接
const mysql = require("mysql");
var conn = mysql.createConnection({
  host:"127.0.0.1",
  user:'root',
  password:'',
  database:'jd',
  port:3306
});
//2:发送sql
//conn.query("INSERT INTO jd_user VALUES(null,?,?)",['tom','123'],(err,result)=>{
   //if(err){
     //console.log(err);
   //}else{
     //console.log(result);
   //}
//});

//部门表
//conn.query("INSERT INTO jd_dept VALUES(null,?,?)",['软件部','上海'],(err,result)=>{
   //if(err){
     //console.log(err);
   //}else{
     //console.log(result);
   //}
//});



//雇员表
conn.query("INSERT INTO jd_emp VALUES(null,?,?,now(),?)",['kk',20000,1],(err,result)=>{
   if(err){
     console.log(err);
   }else{
     console.log(result);
   }
});



//3:关闭
conn.end();