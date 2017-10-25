<?php
//功能:完成国际化操作
//1:修改响应头格式
header("Content-Type:application/javascript;charset=utf-8");
//2:读取读求消息所有头部
$list = getallheaders();
//3:读取 浏览器首选语言
$lang = $list['Accept-Language'];
//4:读取前二个字母
$start2 = substr($lang,0,2);
//5:根据客户端首选语言不同，返回不同形式欢迎消息
if($start2==='zh'){
  echo "var msg ='你好';alert(msg);";
}else if($start2==='en'){
  echo "var msg = 'hello';alert(msg);";
}else{
  echo "var msg = 'hello';alert(msg);";
}
//如果客户端 中文   返回 
//如果客户端 英文   返回 hello
?>