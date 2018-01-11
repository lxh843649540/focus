/**
 * Created by XM-web on 2017/5/19.
 */
//异步写文件中内容
const fs=require("fs");
var str=new Date().toString();
fs.writeFile("./public/4.log",str,function(err){
    console.log(err);
});