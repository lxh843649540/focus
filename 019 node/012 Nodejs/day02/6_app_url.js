/**
 * Created by XM-web on 2017/5/19.
 */
//加载url模块
// 1:加载url,模块
const url=require("url");
var u="https://www.jd.com:443/ad/index?uname=qd";
//将url解析js对象
var obj=url.parse(u);
console.log(obj);
//true:指定querystring.parse 对url查询字符串进一步
var obj2=url.parse(u,true);
console.log(obj2);