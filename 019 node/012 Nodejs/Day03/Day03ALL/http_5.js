//#使用nodejs编写动态的web服务器
//1:加载需要模块  fs http url
const fs = require("fs");
const http = require("http");
const url = require("url");

//2:创建web服务器
//3:绑定端口
var server = http.createServer();
server.listen(8080);
//4:注册事件 request
server.on("request",(req,res)=>{
//5:解析路径,解析参数(true目标解析参数)
var objUrl = url.parse(req.url,true);
//6:path保存请求地址  /index /register
var path = objUrl.pathname;
//7:设置响应默认头部数据格式
res.setHeader('content-type','text/html;charset=utf-8');
//8:判断路径
if(path==="/register"){
  //读取静态文件 /public/register.html 发送客户端
  fs.readFile("./public/register.html",function(err,data){
    if(err)throw err;
    //res.write(data);
    res.end(data);//end() 也可以向客户端输出
  });

}else if(path==="/register.do"){
  //解析客户端提交的请求参数，写入文件
  //public/user.do 14:13---14:16  
  var n = objUrl.query.uname;//用户名
  var p = objUrl.query.upwd; //用户密码
  var data = n+"-"+p+"\r\n"; //回车换行
  fs.appendFile('./public/user.do',data,(err)=>{
      res.end("<h1>注册成功</h1>");
  });
}
});
