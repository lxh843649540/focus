<?php
//1:创建一个空数组
//2:向数组中(末尾)添加新元素,该元素是一本书信息
//(关联数组)
//[图书编号,书名,价格,图片]
//3:添加3本书信息
$list = [];
$list[] = ['bid'=>1,'name'=>'php','price'=>100,'pic'=>'1.jpg'];
$list[] = ['bid'=>2,'name'=>'mysql','price'=>100,'pic'=>'2.jpg'];
$list[] = ['bid'=>3,'name'=>'apache','price'=>100,'pic'=>'3.jpg'];

//循环数组中每一个元素
//foreach($list as $k=>$v){
    //echo $v['bid'].$v['name'].$v['price'].'<br />';
//}
//练习2:转换表格形式  17:05--17:10 
?>
<!doctype html>
<html>
  <head>
    <title>hello world</title>
  </head>
  <body>
   <table width="80%" border="1">
     <thead>
	   <tr>
	     <td>编号</td>
	     <td>书名</td>
	     <td>价格</td>
	     <td>图片</td>
	   </tr>
	 </thead>
	 <tbody>
	   <?php
	     foreach($list as $k=>$v){
		    echo '<tr>';
			echo '<td>'.$v['bid'].'</td>';
			echo '<td>'.$v['name'].'</td>';
			echo '<td>'.$v['price'].'</td>';
			echo '<td>'.$v['pic'].'</td>';
			echo '</tr>';
		 }  
	   ?>
	 </tbody>
   </table>
  </body>
  </html>

