/*Created by XM-web on 2017/5/19*/
//querystring 原生模块
const qs=require("querystring");
var str="uname=tom&upwd=123&pno=36&kw=js";
//把客户端传给node.JS服务器的查询字符串解析
//容易使用对象
var obj=qs.parse(str);
console.log(obj);
console.log(obj.uname);
//把一个js对象转换为查询字符串
var obj1={ename:"强东",age:20,address:"beijing"};
var str1=qs.stringify(obj1);
console.log(str1);