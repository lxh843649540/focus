 const fs=require("fs");
var data=fs.readFileSync("./public/2.log");
console.log("开始向文件3.log追加内容2.log");
fs.appendFileSync("./public/3.log",data);
console.log("追加完毕");


