<?php
 //0:修改响应头部数据格式
 header("content-type:application/xml;charset=utf-8");
 require("init.php");
 $sql = "SELECT * FROM t_cake";
 $result = mysqli_query($conn,$sql);
 $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
 
 //拼接xml文件
 $str = "<?xml version='1.0' encoding='utf-8'?>";
 $str .= "<cakelist>";
 foreach($rows as $k=>$v){
	 $str .= "<cake>";
	 $str .= "<id>$v[id]</id>";
	 $str .= "<pic>$v[pic]</pic>";
	 $str .= "<price>$v[price]</price>";
	 $str .= "</cake>";
 }
 $str .= "</cakelist>";
 echo $str;
?>