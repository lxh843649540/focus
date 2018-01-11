//(function(exports,require,module,__filename,__dirname){
 var age = 10;
 var stop = function(){
  console.log("stop");
 };
//console.log(__filename);
//console.log(__dirname);

//方式一:向外导出成员
//exports.age = age;
//exports.stop = stop;

//方式二:真正向外导出成员对象
module.exports.age = age;
module.exports.stop = stop;
//Node.js底层有一行代码:
// exports =  module.exports
//所以: exports.age = 10;
//      module.exports.age = 10;  完全等价

//非常特殊情况-》不要使用 
//    exports = {age:10};
//变化:exports不再向外导出成员只是一个普通对象
//});