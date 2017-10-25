<!doctype html>
<html>
  <head>
    <title>hello world</title>
	<style>
	  .nav{
	    list-style:none;
		margin:0;
		padding:0;
		margin-left:-15px;
	  }
	  .nav li{
	     display:inline-block;
		 padding:10px 15px;
	  }
	</style>
  </head>
  <body>
      <h1>i18n国际化</h1>
      <div id="header">..</div>
	  <div id="main">
	    <h3>首页</h3>
		<p>
    <span>
      <a href="http://www.yunos.com">YunOS</a></span>
    <b>|</b>
    <span>
      <a href="http://www.aliqin.cn/">阿里通信</a></span>
    <b>|</b>
    <span>
      <a href="http://www.etao.com/">一淘</a></span>
    <b>|</b>
    <span>
      <a href="http://www.net.cn">万网</a></span>
    <b>|</b>
    <span>
      <a href="http://www.autonavi.com/">高德</a></span>
    <b>|</b>
    <span>
      <a href="http://www.uc.cn/">UC</a></span>
    <b>|</b>
    <span>		  
		</p>
	  </div>
      <div id="footer">..</div>
    <script src="jquery-1.11.3.js">
    </script>
	<script>
	 //1:页面元素加载成功后，发送异步请求
	 $(function(){
	    //页面元素 dom加载成自动
		$("#header").load("header_01.php",{id:10});
		$("#footer").load("footer_01.php");
	 });


     //事件绑定  error li动态创建
	 //$("#header li").click(function(e){
     //  e.preventDefault();
	 //  alert($(this).html());
	 //});

     //事件绑定  ok
	 $("#header").on("click","li",function(e){
       e.preventDefault();
	   alert($(this).html());	 
	 });

	</script>
  </body>
  </html>