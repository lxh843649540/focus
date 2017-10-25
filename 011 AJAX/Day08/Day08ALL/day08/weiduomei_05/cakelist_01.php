<?php
 //0:修改响应头部数据格式
 header("content-type:application/json;charset=utf-8");
 require("init.php");
 $sql = "SELECT * FROM t_cake";
 $result = mysqli_query($conn,$sql);
 $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
 $json = json_encode($rows);
 echo $json;
?>