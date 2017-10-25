<?php
 //1:获取指定参数
 //2:连接数据库 指定编码
 @$email = $_REQUEST['email'] or die("邮件是必须的");
 @$upwd = $_REQUEST['upwd'] or die("密码是必须的");
 require('init.php');
 //3:创建sql语句 发送sql语句
 $sql = "INSERT INTO t_user VALUES(null,'$email','$upwd',now(),0)";
 $result = mysqli_query($conn,$sql);
 //4:判断是否注册成功
 if($result===true){
   echo "用户添加成功";
 }else{
   echo "用户添加失败";
 }
?>