<?php
 //0:获取表单中的参数 新闻标题  新闻内容
 $t = $_REQUEST['title'];
 $c = $_REQUEST['content'];

 //1:创建连接
 $conn = mysqli_connect("127.0.0.1","root","",'jd');
 mysqli_query($conn,"SET NAMES UTF8");
 //2:创建sql 发送sql
 $sql = "INSERT INTO t_news VALUES";			$sql .= "(null,'$t','$c',0,now())";
 $result = mysqli_query($conn,$sql);
 //3:判断返回结果
 if($result===true){
   echo "执行成功";
 }else{
   echo "执行失败";
 }
?>