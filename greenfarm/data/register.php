<?php
header("content-type:application/json;charset=utf-8");
@$uname = $_REQUEST['uname'] or die('{"code":-2,"msg":"用户名未填写"}');
  @$upwd = $_REQUEST['upwd'] or die('{"code":-3,"msg":"用户密码未填写"}');
    $conn = mysqli_connect("127.0.0.1","root","","greenfarm");
	mysqli_query($conn,"SET NAMES UTF8");
	$sql="SELECT * FROM users WHERE uname='$uname'";
	$result = mysqli_query($conn,$sql);
	$row = mysqli_fetch_assoc($result);
	if($row===null){
        $sql="INSERT INTO users VALUES(null,'$uname','$upwd',now())";
        $result = mysqli_query($conn,$sql);
        if($result===true){
            echo '{"code":1,"msg":"恭喜注册成功"}';
        }
	}else {
	    echo '{"code":-1,"msg":"该用户名已被使用"}';
	}
?>