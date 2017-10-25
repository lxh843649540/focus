<?php
 //11:30-11:40
 //功能:获取用户提交汽车类别 lt8 lt15
 //查询对应汽车列表，返回json
 //1:修改响应头信息json
 header("content-type:application/json;charset=utf-8");
 //2:获取参数 type
 @$type = $_REQUEST['type']or die('{"code":-2,"msg":"类别名是必须的"}');
 //3:连接数据 设置编码
 require("init.php");
 //4:创建sql  发送sql
 $sql = "SELECT * FROM t_car WHERE type='$type'";
 //5:抓取全部记录
 $result = mysqli_query($conn,$sql);
 $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
 //6:转换json字符串
 $str = json_encode($rows);
 //7:发送
 echo $str;
?>