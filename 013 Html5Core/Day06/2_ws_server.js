/**
 * 此文件演示ws服务器端应用
 */
const ws=require("ws");
var server=new ws.Server({port:8090});
server.on("connection",(socket)=>{
    console.log("ws服务器接收到一个客户端连接");
    //套接字孔1:从客户端接收消息
    socket.on("message",(msg)=>{
        console.log("ws服务器接收到消息:",msg);
    });
    //套接字孔2:向客户端发送消息
    var counter=1;
    var timer=setInterval(()=>{
        socket.send("你好,我是ws服务器"+counter);
        counter++;
    },1000);

    //若连接已经断开,则不再继续发送消息
    socket.on("close",()=>{
        clearInterval(timer);
        console.log("客户端连接已经断开");
        timer=null;
    })
});