<?php
 //1:获取参数
 //2:连接数据库
 @$uname = $_REQUEST['uname']or die("用户名是必须的");
 @$upwd = $_REQUEST['upwd']or die("密码是必须的");
 require("init.php");
 $sql = "SELECT * FROM t_user WHERE uname='$uname' AND upwd = '$upwd'";
 $result = mysqli_query($conn,$sql);
 $row = mysqli_fetch_assoc($result);
 //4:判断并且输出结果
 if($row === null){
   echo "登录失败";
 }else{
   echo "登录成功";
 }
?>