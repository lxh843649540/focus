//查找class为tree下的li下的span
var spans=document.querySelectorAll(
  ".tree>li>span"
);
//遍历spans中每个span
for(var i=0;i<spans.length;i++){
  //为当前span绑定单击事件处理函数
  spans[i].onclick=function(){
    //this->当前单击的span
    //如果当前span的class是open的
    if(this.className=="open")
      //清除当前span的class
      this.className="";
    else{//否则
      //选择class为tree下的li下的class为open的span
      var othSpan=
        document.querySelector(
          ".tree>li>span.open"
        );
      if(othSpan!==null)//如果找到
        //清空其他span的class
        othSpan.className="";
      //将当前span的class设置为open
      this.className="open";
    }
  }
}