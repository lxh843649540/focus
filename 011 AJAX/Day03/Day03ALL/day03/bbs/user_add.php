<?php
 //0:获取表单中的参数 新闻标题  新闻内容
 $u = $_REQUEST['uname'];
 $p = $_REQUEST['upwd'];
 $c = $_REQUEST['pic'];


 //1:创建连接
 $conn = mysqli_connect("127.0.0.1","root","",'bbs');
 mysqli_query($conn,"SET NAMES UTF8");
 //2:创建sql 发送sql
 $sql = "INSERT INTO user VALUES";
 $sql .= "(null,'$u','$p','$c',0,now())";

 //如果出现 执行失败 99% sql
 //解决
 //echo $sql;
 $result = mysqli_query($conn,$sql);
 //3:判断返回结果
 if($result===true){
   echo "执行成功";
 }else{
   echo "执行失败";
 }
?>