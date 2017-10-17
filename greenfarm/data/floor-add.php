<?php
	header("content-type:application/json;charset=utf-8");
	$conn = mysqli_connect("127.0.0.1","root","","greenfarm");
	mysqli_query($conn,"SET NAMES UTF8");
	$sql="SELECT * FROM f_menu";
	$result = mysqli_query($conn,$sql);
	$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
	echo json_encode($rows);
?>