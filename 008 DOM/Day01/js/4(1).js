/**
 * Created by XM-web on 2017/4/18.
 */
//找到触发的元素span
var spans=document.body.querySelectorAll(
    ".tree>li>span"
);
//遍历spans中的每个span
for(var i=0;i<spans.length;i++){
    //为span设置触发函数
    spans[i].onclick=function () {
        if (this.className==="open")
        {this.className=""}
        else{
            this.className="open";
        }
    }//function
}//for