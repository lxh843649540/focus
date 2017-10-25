<?php
 //1:创建连接
 $conn = mysqli_connect("127.0.0.1","root","","bbs");
 //2:设置编码
 mysqli_query($conn,"SET NAMES UTF8");
 //3:创建sql,发送sql
 $sql = "SELECT uid,uname,upwd,pic FROM user";
 $result = mysqli_query($conn,$sql);
 //4:获取结果 一次抓取所有记录
 $rows = mysqli_fetch_all($result,MYSQLI_ASSOC); 
?>
<!doctype html>
<html>
  <head>
    <title>hello world</title>
  </head>
  <body>
     <h1>查询结果</h1>
     <table border="1" width="80%">
	  <thead>
	    <tr>
		  <td>用户编号</td>
		  <td>用户名称</td>
		  <td>用户密码</td>
		  <td>用户头像</td>
	    </tr>
	  </thead>
	  <tbody>
	  <?php
	     foreach($rows as $k=>$v){
			 echo "<tr>";
			 echo "<td>$v[uid]</td>";
			 echo "<td>$v[uname]</td>";
			 echo "<td>$v[upwd]</td>";
			 echo "<td>$v[pic]</td>";
			 echo "</tr>";
		 }
	  ?>
	  </tbody>
	 </table>
  </body>
  </html>