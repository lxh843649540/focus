var array=[10,30,10,20]
var sum=function(arr){
	var add=0;
	for(var i=0;i<arr.length;i++){
		add+=arr[i]
	};
	console.log(add);
};
var avg=function(arr){
	var add=0;
	for(var i=0;i<arr.length;i++){
		add+=arr[i]
	};
		console.log(add/arr.length);
};
module.exports.array=array;
module.exports.sum=sum;
module.exports.avg=avg;
