<?php
 //1:修改响应头格式 json
 header("content-type:application/json;charset=utf-8");
 //2:接收参数 类别名字
 @$name = $_REQUEST['name']or die('{"code":-2,"msg":"类型名是必须的"}');
 //3:连接数据库 ，设置编码
 require('init.php');
 //4:创建sql      发送sql
 $sql = "INSERT INTO t_cake_type VALUES(null,'$name')";
 $result = mysqli_query($conn,$sql);
 if($result===true){
   echo '{"code":1,"msg":"添加成功"}';
 }else{
   echo '{"code":-1,"msg":"添加失败"}';
 }
?>