//var path = "/index";
//var path = "/search";
var path = "/login";

//if(path==="/index"){
   //fnIndex();
//}else if(path==="/search"){
   //fnSearch();
//}else{
   //fnLogin();
//}
switch(path){
  case "/index":
  fnIndex();
  break;
  case "/search":
  fnSearch();
  break;
  default:
  fnLogin();
}



function fnIndex(){
  console.log("index");
}
function fnSearch(){
  console.log("search");
}
function fnLogin(){
  console.log("login");
}