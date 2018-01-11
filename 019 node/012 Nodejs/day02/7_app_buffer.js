/*Created by XM-web on 2017/5/19*/
//Buffer模块全局模块,可直接使用无需引入
//1:创建大小为1024字节的缓冲区
var buf1=Buffer.alloc(1024);
console.log(buf1);
console.log(buf1.length);
//2:创建3KB大小缓冲区
var buf2=Buffer.alloc(1024*3);
console.log(buf2);
console.log(buf2.length);
//3:创建一个数组缓冲区
var buf3=Buffer.from([1,2,3,4,5]);
console.log(buf3);
console.log(buf3.length);
//4:创建一个字符串缓冲区
var buf4=Buffer.from("一二三");
console.log(buf4);
console.log(buf4.length);
console.log(buf4.toString());
console.log(buf4.toString().length);
