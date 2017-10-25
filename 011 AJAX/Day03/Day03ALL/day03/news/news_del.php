<?php
 //0:获取参数 
 $nid =  $_REQUEST['nid'];
 //1:创建连接
 $conn = mysqli_connect("127.0.0.1","root","","jd");
 mysqli_query($conn,"SET NAMES UTF8");
 //2:创建sql 发送sql
 $sql  = "DELETE FROM t_news WHERE nid = $nid";
 $result = mysqli_query($conn,$sql);
 //3:判断
 if($result===false){
  echo "执行失败";
 }else{
  echo "执行成功 <a href='news_del_input.html'>返回上一页</a>";
 }
?>