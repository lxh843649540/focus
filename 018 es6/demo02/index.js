let arr = ['割发代首','发顺丰','发生的','士大夫',5,6,7,8,9,10];
// for(let [index, val] of arr.entries()){
// 	console.log(`${index} : ${val}`);
// }
let list = arr.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);