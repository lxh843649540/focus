/**
 * Created by XM-web on 2017/5/22.
 */
const mysql=require("mysql");
var conn=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"dj",
    port:3306
});
conn.query("INSERT INTO dj_user VALUES(null,?,?)",["kune","520"],function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
});
conn.end();