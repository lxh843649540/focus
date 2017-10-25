<?php
  //1:创建连接
  $conn = mysqli_connect("127.0.0.1","root","","bbs");
  //2:设置编码
  mysqli_query($conn,"SET NAMES UTF8");
  //3:创建sql,发送sql
  $sql = "SELECT * FROM user";
  $result = mysqli_query($conn,$sql);
  //4:获取返回结果
  //5:抓取一行记录 关联数组
  //while(true){
   //$row = mysqli_fetch_assoc($result);
   //echo $row['uid'].$row['uname'].'<br/>';
   //if($row===NULL){
      //break;
   //}
  //}
  //6: 抓取一行记录，索引数组
  while(true){
    $row = mysqli_fetch_row($result);
	echo $row[0].$row[1].'<br />';
	if($row===NULL){
	 break;
	}
  }

?>