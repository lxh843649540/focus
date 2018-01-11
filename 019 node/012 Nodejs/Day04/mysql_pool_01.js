/**
 * Created by XM-web on 2017/5/23.
 */
const mysql=require("mysql");
var pool=mysql.createPool({
    post:"127.0.0.1",
    user:"root",
    password:"",
    database:"dj",
    connectionLimit:5,
});
pool.getConnection((err,conn)=>{
    if(err){
        console.log(err);
    }else{
        conn.query("SELECT*FROM dj_dept",(err,result,fields)=>{
            console.log(result);
            conn.release();
        })
    }
});