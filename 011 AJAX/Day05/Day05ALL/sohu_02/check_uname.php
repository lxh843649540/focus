<?php
 @$uname= $_REQUEST['uname']or die("用户名是必须的");
 require("init.php");
 $sql = "SELECT * FROM t_user WHERE uname='$uname'";
 $result = mysqli_query($conn,$sql);
 $row = mysqli_fetch_assoc($result);
 if($row===null){
   echo "1";
 }else{
   echo "-1";
 }
?>