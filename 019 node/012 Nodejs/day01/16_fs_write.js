//1:加载对应文件模块
const fs=require("fs");
//2:将日期字符串写入文件中
var str=new Date().toString();
console.log("开始文件写入操作");
//如果当前文件不存在,自动创建
fs.writeFileSync("./public/1.log",str);
console.log("写入完成");

