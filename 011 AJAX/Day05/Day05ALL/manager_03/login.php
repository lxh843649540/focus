<?php
  //1:获取参数
  //2:连接数据库 设置编码
  @$email = $_REQUEST['email'] or die('邮件是必须的');  
  @$upwd = $_REQUEST['upwd'] or die('密码是必须的');
  //3:创建sql    发送SQL
  require('init.php');
  //4:抓取一行
  $sql =  " SELECT * FROM t_user";
  $sql .= " WHERE email='$email' AND";
  $sql .= " upwd='$upwd'";
  echo $sql;
  $result = mysqli_query($conn,$sql);
  $row = mysqli_fetch_assoc($result);
  //5:判断如果用户登录成功自动跳转 
  //user_select.php
  if($row!=null){
    //location.href = 'user_select.php';
	//php添加js功能
	echo "<script>";
	echo "location.href='user_select.php'";
	echo "</script>";
  }
?>