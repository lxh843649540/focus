<?php
 //1:获取参数 uid
 @$uid = $_REQUEST['uid'] or die("用户的编码是必须的");
 //2:连接数据库 设置编码 
 require("init.php");
 //3:创建sql  发送sql
 $sql = "DELETE FROM t_user WHERE uid = $uid";
 $result = mysqli_query($conn,$sql);
 //4:判断
 if($result===true){
   echo "删除成功";
 }else{
   echo "删除失败";
 }
?>