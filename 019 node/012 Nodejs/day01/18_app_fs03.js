/**
 * Created by XM-web on 2017/5/19.
 */
const fs=require("fs");
fs.readFile("./public/4.log",function(err,data){
    if(err){
        console.log("读取失败");
        console.log(err);
    }else{
        fs.writeFile("./public/5.log",data,function(err){
            if(err){
                console.log("写入操作失败");
            }
        });
    }
});