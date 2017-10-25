//获得id为form1的表单
var form=document.forms[0/*form1*/];
//Step1:为name为username和pwd的文本框绑定获得焦点事件
form.username.onfocus=getFocus;
form.pwd.onfocus=getFocus;
function getFocus(){
  //this->当前文本框
  //当前文本框边框加粗
  this.className="txt_focus";
  //清除旁边div的class
  var div=this.parentNode
      .nextElementSibling
      .firstElementChild;
  div.className="";
}
form.username.onblur=function(){
  vali(this,/^\w{1,10}$/);
}
function vali(txt,reg){
  //清除当前文本框的class
  txt.className="";
  //获取旁边div
  var div=txt.parentNode
    .nextElementSibling
    .firstElementChild;
  //用reg测试当前文本框的内容
  //如果通过,就修改div的class为vali_success
  if(reg.test(txt.value)){
    div.className="vali_success";
    return true;
  }else{//否则修改div的class为vali_fail
    div.className="vali_fail";
    return false;
  }
}
form.pwd.onblur=function(){
  vali(this,/^\d{6}$/);
}

//找到提交按钮，绑定单击事件:
form.elements[form.length-2].onclick=function(){
  //验证姓名文本框未通过
  if(!vali(form.username,/^\w{1,10}$/))
    //让姓名文本框获得焦点
    form.username.focus();
  else if(!vali(form.pwd,/^\d{6}$/))
    //验证密码框未通过,让密码框获得焦点
    form.pwd.focus();
  else
    form.submit();
}