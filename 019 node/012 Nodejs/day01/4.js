//exam:99乘法口诀表
var str = '';
for(var i=1;i<10;i++){
  for(var j=1;j<=i;j++){
     //ES6新特性，在nodejs中不存兼容性问题
     str += `${j}*${i}=${i*j} `;
  }
     // \r\n  换行  不是<br />网页
     str += '\r\n';
}
console.log(str);