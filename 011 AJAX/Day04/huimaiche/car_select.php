<?php
  require("init.php");
  $sql = "SELECT * FROM t_car";
  $result = mysqli_query($conn,$sql);
  $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
?>
<!doctype html>
<html>
  <head>
    <title>hello world</title>
  </head>
  <body>
     <h1>汽车列表</h1>
	 <table border="1" width="100%">
	  <thead>
	    <tr>
		  <td>汽车图片</td>
		  <td>汽车名称</td>
		  <td>汽车价格</td>
		  <td>操作</td>
		</tr>
	  </thead>
	  <tbody id="tb1">
	   <?php
	     foreach($rows as $k=>$v){
            echo "<tr>";
			echo "<td><img style='width:100px;height:100px' src='img/$v[pic]' /></td>";
			echo "<td>$v[cname]</td>";
			echo "<td>$v[price]</td>";
			echo "<td><a href='$v[cid]' class='btn-delete'>删除</a></td>";
			echo "</tr>";
		 }
	   ?>
	  </tbody>
	 </table>
    <script src="jquery-1.11.3.js"></script>
    <script>
	  //1:获取所有删除按钮
	  //2:绑定点击事件
	  $(".btn-delete").click(function(e){
      //3:阻止事件默认行为
	        e.preventDefault();
			//4:获取汽车id
            var id = $(this).attr("href");
			//5:显示确认信息
			var rs = window.confirm("您确定要删除吗?");
			if(rs){
			  //6:自动跳转删除php程序
			  location.href = 'car_delete.php?cid='+id;
			}
	  });
	</script>