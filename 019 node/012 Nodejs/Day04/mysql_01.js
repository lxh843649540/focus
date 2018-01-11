/**
 * Created by XM-web on 2017/5/23.
 */
const mysql=require("mysql");
var conn=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"dj",
    port:3306
});
//添加数据
// conn.query("INSERT INTO dj_dept VALUES(null,?,?)",["计划部","北京"],(err,result)=>{
//     if(err){console.log(err);}else{console.log(result);}
// });
//删除数据
// conn.query("DELETE FROM dj_dept WHERE did=?",[1],(err,result)=>{
//     if(err){console.log(err);}else{console.log(result);}
// });
//更新数据
conn.query("UPDATE dj_dept SET loc=?,dname=? WHERE did=?",["青岛","网络部",2],(err,result)=>{
    if(err){console.log(err);}else{console.log(result);}
});
conn.end();

