const PI=3.14;
var getSize=function(r){
	console.log(PI*r*r);
};
var getPerimeter=function(r){
	return 2*PI*r;
};

//导出当前模块  方式一
exports.Size=getSize;
exports.Perimeter=getPerimeter;
//方式二
//module.exports.Size=getSize;
//module.exports.Perimeter=getPerimeter;