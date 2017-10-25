if(window.$===undefined){throw new Error("请引用jQuery库")};
window.onload=function(){
	var imgList=document.querySelectorAll("#slider img");
	var liList=document.querySelectorAll("#slider li");
	var i=index=0;
	var timer=play=null;
	function show(a){
		//1:将参数中的a值保存index变量中
		index=a;
		//2:创建变量保存透明度 alpha=0
		var alpha=0;
		//3:清除所有页码class
		for(i=0;i<liList.length;i++)
		//4:当前index小标页码添加class active
		//000:提前清除淡入效果定时器
		//5:将所有图片透明度=0
		//6:启动定时器(淡入效果)
		//7:alpha+=0;
		//8:alpha>100定时器
		//9:给index图片元素修改透明 alpha
	};
};