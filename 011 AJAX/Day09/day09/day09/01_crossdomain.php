<!doctype html>
<html>
 <head>
   <title>跨域</title>
   <meta charset="utf-8">
 </head>
 <body>
   <h1>错误跨域访问</h1>
   <script>
      //var xhr = new XMLHttpRequest();
	  //xhr.onreadystatechange = function(){}
	  //xhr.open("GET","http://localhost/day09/02//_crossdomain.php",true);
	  //xhr.send(null);
   </script>
   <h1>jsonp跨域访问</h1>


   <script>
    //1:准备函数
	function callback(data){
		 console.log("服务器返回数据"+data);
	}
	//2:创建script标签
    var s = document.createElement("script");
	s.src = "http://localhost/day09/02_crossdomain.php";
	s.async = true;//异步
	document.head.appendChild(s);

   </script>

 </body>
</html>