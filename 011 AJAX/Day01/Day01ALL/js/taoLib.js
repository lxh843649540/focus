//1:判断jquery是否加载成功
if(window.$===undefined){
  throw new Error("taoLib依据于jQuery，请先引入jQuery库");
}
//2:在jquery中创建一个对象(命名空间对象)
$.taoLib = {}
//3:在该对象基础上创建一个方法
$.taoLib.arrSum=function(list){
  //4:创建变量保存中间计算结果
  var sum = 0;
  //5:循环循环整个数组中每一个元素
  for(var i=0;i<list.length;i++){
      //6:累加求和
      sum += list[i];
  }
  //7:返回计算的结果
  return sum;
}