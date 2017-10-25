<?php
   //echo "1<br/>";
   //die('当前程序出现故障');  //终止当前php运行
   //echo "2<br/>";
   //@$id = $_REQUEST['nid'];
   //echo $id;
   $conn =    mysqli_connect('127.0.0.1','root','','bbs');
   $sql = "INSERT INTO user VALUES(null,'a','a','1.jpg',0,now())";
   $result = mysqli_query($conn,$sql);
   if($result===true){
        $id = mysqli_insert_id($conn);
        echo '新增记录编号是'.$id.'<br />';
		$size = mysqli_affected_rows($conn);
		echo '影响记录数'.$size;
   }

   $sql = "SELECT * FROM user";
   $result = mysqli_query($conn,$sql);
   $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
   echo "<hr/>";
   foreach($rows as $k=>$v){
        //echo $k.'<br />';
        echo $v['uid'].$v['uname'].$v['pic'].'<br />';
   }
?>