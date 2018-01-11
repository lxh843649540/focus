const http = require("http");
const express = require("express");
const mysql = require("mysql");

var pool = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'',
	database:'jd',
	connectionLimit:5
});

var app = express();
var server = http.createServer(app);
server.listen(80);
app.get("/",(req,res)=>{
	res.sendFile(__dirname+"/public/users.html");
});
app.get("/jquery",(req,res)=>{
	res.sendFile(__dirname+"/public/jquery-1.11.3.js");
});
app.get("/list.do",(req,res)=>{
    pool.getConnection((err,conn)=>{
	    conn.query("select * from jd_user",(err,result)=>{
		    res.json(result);
		});
	});
});
app.get("/add",(req,res)=>{
	res.sendFile(__dirname+"/public/user_add.html");
});
app.get("/add.do",(req,res)=>{
	var u = req.query.uname;
	var p = req.query.upwd;
    pool.getConnection((err,conn)=>{
	    conn.query("insert into jd_user values(null,?,?)",[u,p],(err,result)=>{
		    res.json(result);
		});
	});
});