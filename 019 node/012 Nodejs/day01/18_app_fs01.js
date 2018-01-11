/**
 * Created by XM-web on 2017/5/19.
 */
const fs=require("fs");
console.log("1:开始读取文件内容");
fs.readFile("./public/2.log",function(err,data){
    if(err){console.log("文件读取出现错误");
        if(err.code==="ENOENT"){
            console.log("文件不存在");
        }
    }else{
        console.log("文件读取成功");
        console.log(data.toString());
    }
});