<?php
 //1:连接数据库,设置编码
 //2:创建sql语句,发送sql
 require("init.php");
 $sql = "SELECT uid,email,regtime FROM t_user";
 $result = mysqli_query($conn,$sql);
 $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
 //3:抓取多条记录   
?>
<!doctype html>
<html>
  <head>
    <title>hello world</title>
  </head>
  <body>
     <h1>用户列表</h1>
	 <table border="1" width="100%">
	  <thead>
	    <tr>
		  <td>编号</td>
		  <td>邮件地址</td>
		  <td>注册时间</td>
		  <td>操作</td>
		</tr>
	  </thead>
	  <tbody id="tb1">
	   <?php
	     foreach($rows as $k=>$v){
            echo "<tr>";
			echo "<td>$v[uid]</td>";
			echo "<td>$v[email]</td>";
			echo "<td>$v[regtime]</td>";
			echo "<td>
			<a href='$v[uid]' 
			class='btn-delete'>删除</a>
			</td>";
			echo "</tr>";
		 }
	   ?>
	  </tbody>
	 </table>
    <script src="jquery-1.11.3.js"></script>
    <script>
	  //1:获取删除按钮
	  //2:绑定点击事件
	  // 2.1:获取href id
	  // 2.2:跳转  user_delete.php?uid=
      $(".btn-delete").click(function(e){
	     e.preventDefault();
		 var id = $(this).attr("href");

		 var rs = window.confirm("你确认要删除用户信息码?");
		 if(rs){
		  location.href = 'user_delete.php?uid='+id;
		 }
	  
	  });
	</script>
	</body>
	</html>
