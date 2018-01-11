/**
 * Created by XM-web on 2017/5/23.
 */
const http=require("http");
const express=require("express");
var app=express();
var server=http.createServer(app);
server.listen(8080);
//方式一
app.get("/user",(req,res)=>{
    //express为每个req对象添加属性query属性
    console.log(req.query.uid);
    console.log(req.query.loc);

});
//方式二:参数/book/jsj/10
app.get("/book/:btype/:bid",(req,res)=>{
    //接收请求地址中的参数 params
    console.log(req.params.btype);
    console.log(req.params.bid);
});