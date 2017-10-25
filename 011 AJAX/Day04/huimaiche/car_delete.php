<?php
  //127.0.0.1/car_delete.php?cid=3
  //1:获取参数
  @$cid = $_REQUEST['cid'] or die("编号是必须的");
  //2:连接数据库 设置编码
  require("init.php");
  //3:创建sql    发送sql
  $sql = "DELETE FROM t_car WHERE cid=$cid";
  $result = mysqli_query($conn,$sql);
  //4:判断
  if($result===true){
	   echo "删除成功";
  }else{
       echo "删除失败";
  }
?>