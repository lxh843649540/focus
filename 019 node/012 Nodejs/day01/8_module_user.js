//用户模块文件
var userCount=98;
var userLogout=function(){
	console.log("userLogout");
};
//对外公开自己一些内部成员
exports.userCount=userCount;
exports.userLogout=userLogout;