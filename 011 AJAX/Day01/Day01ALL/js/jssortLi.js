//1:判断jquey是否加成功
if(window.$===undefined){
  throw new Error("请加载 jquery库");
}
//2:创建方法 sortLi
jQuery.fn.sortLi = function(){
var rows = [];
//3:获取列表中元素
var $lis = this.children("li");
//4:拆分元素内容保存数组
$lis.each(function(i,dom){
   rows.push($(dom).html()); 
});
//5:数组排序
rows.sort();
//6:将数组中内容转字符串
var html = "<li>"+rows.join("</li><li>")+"</li>";
//7:保存原来列表中
this.html(html);
}