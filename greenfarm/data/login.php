<?php
    header("Content-Type:application/json;charset=utf-8");
      @$uname = $_REQUEST['uname']or die('{"code":-2,"msg":"未填写用户名"}');
      @$upwd = $_REQUEST['upwd']or die('{"code":-3,"msg":"未填写密码"}');
      $conn=mysqli_connect('127.0.0.1','root','','greenfarm');
      $sql = " SELECT * FROM users WHERE uname='$uname' AND upwd = '$upwd'";
      $result = mysqli_query($conn,$sql);
      $row = mysqli_fetch_assoc($result);
      if($row===null){
        echo '{"code":-1,"msg":"用户名或密码有误"}';
      }else{
    	$uid = $row['uid'];
    	$uname = $row['uname'];
    	$output = ["code"=>1,"uid"=>$uid,"uname"=>$uname];
        echo json_encode($output);
      }
?>