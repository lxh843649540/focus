/**
 * Created by XM-web on 2017/5/25.
 */
const http=require("http");
const express=require("express");
var app=express();
var server=http.createServer(app );
server.listen(8080);
//向客户端输出静态资源
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/stat.html");
});
app.get("/jquery",(req,res)=>{
    res.sendFile(__dirname+"/js/jquery-1.11.3.js");
});
//向客户端输出动态资源
app.get("/stat",(req,res)=>{
    //要想客户端输出的数据---js数据
    var data=[
        {label:"部门1",value:400},
        {label:"部门2",value:300},
        {label:"部门3",value:450},
        {label:"部门4",value:250},
        {label:"部门5",value:550},
        {label:"部门6",value:500}
    ];
    //把js数组转换为json字符串,输出给客户端
    res.json(data);
});