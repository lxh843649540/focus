//创建一个数组:保存5学生成绩 
//循环
var scoreList = [78,100,97,100,87];
//方式一:
for(var i=0;i<scoreList.length;i++){
  console.log(i+"=>"+scoreList[i]);
}
//方式二:ES5 i下标
for(var i in scoreList){
   console.log(i+"=>"+scoreList[i]);
}
//方式三:ES6  i值
for(var i of scoreList){
  console.log(i);
}