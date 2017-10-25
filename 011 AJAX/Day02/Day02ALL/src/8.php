<?php
  //1:连接数据库
  $conn = mysqli_connect('127.0.0.1','root','','dangdang');
  //转换php发送sql乱码问题
  mysqli_query($conn,"SET NAMES UTF8");
  //2:发送sql语句
  $sql = "INSERT INTO dd_category VALUES(100,'js大全',1)";
  $result = mysqli_query($conn,$sql);
  //3:读取返回结果判断
  if($result===true){
    echo "执行成功";
  }else{
    echo "执行失败";
  }
?>