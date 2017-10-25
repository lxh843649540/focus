<?php
// int/float/bool
$age = 10;         //整型
$price = 10000.50; //浮点
$rs = false;        //布尔 true echo 1 false 
echo $age.'<br />';
echo $price.'<br />';
echo $rs.'<br />';

//php字符中 单引号和双引号均可使用
//区别:  ""中添加变量名称，自动获取变量值转换
//       ''中添加变量名称，不会自动转换
$ename = 'tom';
$age = 20; //15:54--15:59
$info = "姓名:$ename 年龄 $age <br />";
echo $info.'<br/>';
$info = '姓名:$ename 年龄 $age <br />';
echo $info;
//如果单引与变量获取值只能拼接 .
$info = '姓名:'.$ename.'年龄'.$age.'<br />';
echo $info;


?>