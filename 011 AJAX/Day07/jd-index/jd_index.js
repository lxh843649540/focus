

//1:js图片轮播版本一:函数 纯js dom
//17:10--17:30 完成图片轮播
//1:页面元素加载成功后执行后继代码
window.onload = function(){
//2:获取最外层 div id=slider
var slider = document.getElementById("slider");
//3:获取所有图片列表
var aImg = slider.getElementsByTagName("img");
//4:获取所有数字列表
var aNum = slider.getElementsByTagName("li");
//5:创建变量保存定时器
var timer = null;
//6:创建变量保存下标
var index = 0;
//7:创建函数 show
 function show(){
  //7.0:下标自增并且判断是否越界
  index++;
  (index>4)&&(index=0);
  //7.1:清除所有图片列中元素class
  for(var i=0;i<aImg.length;i++){
      aImg[i].className = "";
  }
  //7.2:当前图片元素添加class active
  aImg[index].className = "active"
  //7.3:清除所有数字列中元素class
  for(var i=0;i<aNum.length;i++){
      aNum[i].className = "";
  }
  //7.4:当前数字 元素添加class active
  aNum[index].className = "active";
 }
//8:通过定时器调用函数 show
 timer = setInterval(show,1500);
}