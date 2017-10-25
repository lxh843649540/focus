<?php
 //删除用户功能
 //1:获取参数
 //2:连接数据库 设置编码 
 @$uid = $_REQUEST['uid'] or die('用户编号是必须的');
 require('init.php');
 //3:创建sql DELETE FROM t_user WHERE uid = 
 $sql = "DELETE FROM t_user WHERE uid = $uid";
 $result = mysqli_query($conn,$sql);
 //4:判断
 if($result===false){
   echo "删除失败";
 }else{
   echo "删除成功";
 }
?>