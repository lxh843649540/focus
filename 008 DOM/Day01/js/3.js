/**
 * Created by XM-web on 2017/4/18.
 */
//------------------------修改数量功能---------------------------
var table=document.getElementById("data");
var btns=table.getElementsByTagName("button");
//遍历所有button
for (var i=0,len=btns.length;i<len;i++){
    //为当前按钮绑定单击事件处理函数
    btns[i].onclick=function(){
        //this当前单击的按钮
        //找要操作的元素: 按钮旁边的span
        var span=this.innerHTML==="-"?
            this.nextElementSibling :
            this.previousElementSibling;
        //获得span的内容，转为整数，保存在n中
        var n=parseInt(span.innerHTML);
        if(this.innerHTML==="+")//如果点的button是+
            {n++}//则 n+1
        else if(n>0)n--;
        //修改: 设置span的内容为n
        span.innerHTML=n;
        //----------------计算小计-------------------
        var price=
            this.parentNode.previousElementSibling.innerHTML.slice(1);//截掉¥符号
        var sum=price*n;
        this.parentNode.nextElementSibling.innerHTML="¥"+sum.toFixed(2);
        //------------------计算总计------------------
        //查找tbody中每行最后一个td
        var tds=table.querySelectorAll(
            "tbody td:last-child"
        );
        for(var i=0,total=0;i<tds.length;i++){
            //将当前td的内容去掉¥,转为浮点数，累加到total上
            total+=parseInt(tds[i].innerHTML.slice(1));
        }//(遍历结束)
        //设置tfoot中最后一个td的内容为¥+total按2位小数四舍五入
        table.querySelector(
            "tfoot td:last-child"
        ).innerHTML="¥"+total.toFixed(2);
    }
}

