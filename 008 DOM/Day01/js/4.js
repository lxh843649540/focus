/**
 * Created by XM-web on 2017/4/18.
 */
//查找触发事件的元素(class为tree下的li的span)
var spans=document.querySelectorAll(
    ".tree>li>span"
);
//遍历spans中每个span
for(var i=0;i<spans.length;i++){
    //为当前span绑定单击事件处理函数
    spans[i].onclick=function(){
        //this为当前单击的span
        //如果当前span的class是open的
        if (this.className==="open")
        {this.className=""
        }//清除当前span的class
            else//否则
        {var othSpan=document.querySelector(".tree>li>span.open")}//选择class为tree下的li下的class为open的span
        if (othSpan!==null)//如果找到
        {othSpan.className="";//清空其他span的class
       }
        this.className="open"//将当前span的class设置为open
    }
}