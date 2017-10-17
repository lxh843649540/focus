<?php
header("Content-Type:application/json;charset=utf-8");
@$fid=$_REQUEST["fid"] OR die('{"code":-1,"msg":"楼层的值是必须的"}');
$conn=mysqli_connect("127.0.0.1","root","","greenfarm");
mysqli_query($conn,"SET NAMES UTF8");
$sql="SELECT*FROM f_detail WHERE fid=$fid";
$result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($rows);
?>