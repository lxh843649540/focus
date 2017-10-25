<?php
   //关联数组
   //声明
   $arr = ['eid'=>101,'ename'=>'jerry'];
   //添加修改元素
   $arr['phone'] = 13999999999;
   $arr['addr'] = 'beijing';
   var_dump($arr);
   //循环遍历
   foreach($arr as $k=>$v){
	   echo "$k - $v <br />";
   }
   echo "<hr />";
   //注意下述代码
   $book = ['title'=>'php 大全'];
   echo $book['title'];   //正确写法
   //echo $book[title];     //错误写法
   //echo "书名 $book['title']"; //错误写法
   //!!!!
   //坑 "" 去除关联数组中单引号 ok
   echo "书名 $book[title]"; //正确写法
   echo '书名'.$book['title'];//正确写法











?>