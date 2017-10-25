<?php
  //1:将连接数据库与设置编码程序保存
  //  init.php中
  //2:哪个php需要数据库连接
  // require('init.php');
  //require加载-->init.php
  $conn = mysqli_connect('127.0.0.1','root','','huimaiche');
  $sql = "SET NAMES UTF8";
  mysqli_query($conn,$sql);
?>