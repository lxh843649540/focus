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


// let state = 1;
// function step1(resolve,reject) {
// 	console.log('1.开始洗菜做饭准备');
// 	if(state === 1){
// 		resolve('洗菜做饭准备完成')
// 	}else{
// 		reject('洗菜做菜失败');
// 	}
// }
// function step2(resolve,reject) {
// 	console.log('2.开始吃饭');
// 	if(state === 1){
// 		resolve('吃饭完成')
// 	}else{
// 		reject('吃饭失败');
// 	}
// }
// function step3(resolve,reject) {
// 	console.log('3.开始收拾碗筷');
// 	if(state === 1){
// 		resolve('碗筷收拾完成')
// 	}else{
// 		reject('碗筷收拾失败');
// 	}
// }
// new Promise(step1).then(function (val) {
// 	console.log(val);
// 	return new Promise(step2)
// }).then(function (val) {
// 	console.log(val);
// 	return new Promise(step3)
// }).then(function (val) {
// 	console.log(val);
// });
function printHello (ready) {
	return new Promise(function (resolve, reject) {
		if (ready) {
			resolve("Hello");
		} else {
			reject("Good bye!");
		}
	});
}

function printWorld () {
	alert("World");
}

function printExclamation () {
	alert("!");
}

// printHello(true)
// 	.then(function(message){
// 		alert(message);
// 	})
// 	.then(printWorld)
// 	.then(printExclamation);
printHello(true).then(function (message) {
	return message;
}).then(function (message) {
	return message  + ' World';
}).then(function (message) {
	return message + '!';
}).then(function (message) {
	alert(message);
});