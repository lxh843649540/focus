//1:判断jquery是否加载成功
if(window.$===undefined){
  throw new Error("taoLibs库依据于jQuery库");
}
//2:在jQuery.fn添加方法
jQuery.fn.shLi = function(){
  //3:给当前元素绑定点击事件
  //4:给当前元素添加class in
  //插件--->直接
  //this<=>jQuery 
  //选择器中获取对象
  this.click(function(){
     //##在事件处理函数中 this-->dom对象
     $(this).addClass("in");
  });
}
