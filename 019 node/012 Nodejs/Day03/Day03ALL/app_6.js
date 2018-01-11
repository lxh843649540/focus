//##引入不同类别模块

//1:文件类型模块(nodejs 里一个js文件)
//方式一: m1.js
//#注意   require('./m1');
//        require('./m1.js');
const m1 = require('./m1');
console.log(m1);
//2:目录类型模块(nodejs 里一个目录有一个js文件)
//方式一:
//1:创建目录  m2
//2:创建文件  index.js 固定名称不允许改变
const m2 = require("./m2");
console.log(m2);
//方式二:
//1:创建目录 m4
//2:创建文件 package.json  "main":"./4.js"
//3:创建文件 4.js
const m4 = require("./m4");
console.log(m4);
//方式三:
//1:创建目录 node_modules  固定名称不允许改变
//2:在此目录创建自己的目录 m3***
//3:在m3目录下创建文件     package.json
//4:在package.json添加属性 "main":"./index.js"
//  指定当前目录模中主要js文件名称
//5:创建index.js    14:33---14:35
const m3 = require("m3");//m3自定义目录名称
console.log(m3);
