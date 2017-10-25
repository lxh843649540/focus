//查找name属性为username的文本框txtName
var txtName=document.getElementsByName(
  "username"
)[0];
//为txtName绑定获得焦点事件
txtName.onfocus=getFocus;
function getFocus(){
  //this->txtName
  //给自己穿txt_focus类
  this.className="txt_focus";
  //找到旁边的div，清除其class
  this.parentNode
      .nextElementSibling
      .firstElementChild
      .className="";
};
//查找name属性为pwd的文本框txtPwd
var txtPwd=document.getElementsByName(
  "pwd"
)[0];
//为txtPwd绑定获得焦点事件
txtPwd.onfocus=getFocus;

//为txtName绑定失去焦点事件
txtName.onblur=function(){
  //this->txtName
  //定义正则: 1~10个字母，数字或下划线
  //var reg=/^\w{1,10}$/;
  vali(this,/^\w{1,10}$/);
}
function vali(txt,reg){
  //清除自己的class
  txt.className="";
  //查找旁边的div
  var div=txt.parentNode
            .nextElementSibling
            .firstElementChild;
  //用正则验证当前文本框的内容,如果通过，就为旁边的div穿vali_success,否则穿vali_fail
  if(reg.test(txt.value))
    div.className="vali_success";
  else
    div.className="vali_fail";
}
//为txtPwd绑定失去焦点事件
txtPwd.onblur=function(){
  vali(this,/^\d{6}$/);
}
