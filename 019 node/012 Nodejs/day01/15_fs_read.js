//功能:使用同步方法读取文件内容
//1:加载文件模块
const fs=require("fs");
//2:读取文件内容
var data=fs.readFileSync("./public/1.html");
//3:输出内容
console.log("文件读取完成");
console.log(data);
console.log(data.toString());