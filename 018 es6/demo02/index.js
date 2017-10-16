// console.log(Object);
// console.log(Number);
// console.log(Array);

//  es6 数据结构   map，json，set（类似数组但不是数组）


// let arr = ['割发代首','发顺丰','发生的','士大夫',5,6,7,8,9,10];
// for(let [index, val] of arr.entries()){
// 	console.log(`${index} : ${val}`);
// }
// let list = arr.entries();
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);


// // for in 和 for of 的区别   for in 用于对象得到索引值/键值， for of 用于数组得到值
// let arr1=['jspang','技术胖','大胖逼逼叨'];
// 		//---获取数组的值---
// for (let val of arr1) {
// 	console.log(val);
// }
//         //---获取索引值  typeof 为 number
// for (let index of arr1.keys()){
// 	console.log(index, typeof index);
// }
// 		//---获取键值/索引值
// let obj = {1:'hha',2:'doing',你好: 'detected'};
// for (let index in obj) {
// 	console.log(index, typeof index); //得到 “1  2  你好”
// }
// console.log(1 in obj);

// let arr2=['jspang','技术胖','前端教程'];
// arr2.some((a, index)=>console.log(a,index));
// let pro = new Proxy({
// 	add: (a,b) => {return a+b},
// 	name: '我叫李小辉'
// },{
// 	get: (target,key, property) => {
// 		console.log(target);
// 		console.log(key);
// 		console.log(property);
// 		return target[key];
// 	}
// });
// console.log(pro.add(1,2));


 class Coder {
	name (val) {
		console.log(val);
		return val;
	}
	skill (val) {
		console.log(this.name('李小辉')+':skill'+':'+val)
	}
	constructor (a, b) {
		this.a = a;
		this.b = b;
	}
	add () {
		return this.a+this.b;
	}
}
// let jspan = new Coder(1,2);
// jspan.skill('web');
// console.log(jspan.add());
class Htmler extends Coder {}
let lxh = new Htmler(1,2);
console.log(lxh.add());
