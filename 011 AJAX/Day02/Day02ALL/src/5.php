<?php
  //创建数组:
  $arr1 = array(1,2,9,10);//  php5.3-
  $arr2 = [10,30,1000,1]; //  php5.4+
  //echo($arr1); echo 只能输出字符串数字
  var_dump($arr1);  //查看数组元素类型/每个元素值
  echo '<br />';
  $arr2[0] = 10000;
  var_dump($arr2);
  $rs = $arr2[1];
  echo $rs;
?>