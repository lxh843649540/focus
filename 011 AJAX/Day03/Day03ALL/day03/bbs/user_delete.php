<?php
 //0:获取参数 
 $uid =  $_REQUEST['uid'];
 //1:创建连接
 $conn = mysqli_connect("127.0.0.1","root","","bbs");
 mysqli_query($conn,"SET NAMES UTF8");
 //2:创建sql 发送sql
 $sql  = "DELETE FROM user WHERE uid = $uid";
 $result = mysqli_query($conn,$sql);
 //3:判断
 if($result===false){
  echo "执行失败";
 }else{
  echo "执行成功 <a href='user_delete_input.html'>返回上一页</a>";
 }
?>