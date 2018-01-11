var s1 = {age:10};
var s2 = {age:20};
s2.age++;
var s3 = s1;//?????????
s3.age++;
s3={age:30};//???
console.log(s1.age);//10   11
console.log(s2.age);//21
console.log(s3.age);//30


