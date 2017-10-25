<?php
 //1:获取参数 
 //cname/pic/buycount/price
 @$cname = $_REQUEST['cname'] or die('汽车名称是必须是');
 @$pic = $_REQUEST['pic'] or die('汽车图片是必须是');
 @$buycount = $_REQUEST['buycount'];
 @$price = $_REQUEST['price'] or die('汽车价格是必须是');
 if($buycount===''){
    die("汽车数量是必须的");
 }


 //1:创建连接
 //2:设置编码
 require("init.php");
 //3:创建sql 发送sql
 $sql = "INSERT INTO t_car VALUES(null,'$cname','$pic',$price,$buycount)";
 $result = mysqli_query($conn,$sql);
 if($result===true){
	  echo "添加成功";
 }else{
      echo "添加失败";
 }
?>