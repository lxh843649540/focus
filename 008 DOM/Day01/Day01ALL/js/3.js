//找触发事件的元素: id为data下的所有button
var table=
  document.getElementById("data");
var btns=
  table.getElementsByTagName("button");
//遍历所有button
for(var i=0,len=btns.length;i<len;i++){
  //为当前按钮绑定单击事件处理函数
  btns[i].onclick=function(){
    //this当前单击的按钮
    /*修改数量*/
    //找要操作的元素: 按钮旁边的span
    var span=this.innerHTML=="-"?
      this.nextElementSibling:
      this.previousElementSibling;
    //获得span的内容，转为整数，保存在n中
    var n=parseInt(span.innerHTML);
    if(this.innerHTML=="+")//如果点的是+
      n++;//就n+1
    else if(n>1)//否则，如果n>1时
      n--;//才n-1
    //修改: 设置span的内容为n
    span.innerHTML=n;

    /*计算小计:单价*数量*/
    //查找当前按钮父元素td的前一个兄弟的内容，选取1位置到结尾的子内容，转为浮点数，保存在price;
    var price=parseFloat(
      this.parentNode
        .previousElementSibling
        .innerHTML
        .slice(1)
    );
    //计算小计:
    var subtotal=price*n;
    //修改当前按钮的父元素的下一个兄弟的内容为: ¥+subtotal按2位小数四舍五入
    this.parentNode
        .nextElementSibling
        .innerHTML=
          "¥"+subtotal.toFixed(2);
    /*计算总计:*/
    //查找tbody中每行最后一个td
    var tds=table.querySelectorAll(
      "tbody td:last-child"
    );
    //遍历tds中每个td，同时定义total为0
    for(var i=0,total=0;i<tds.length;i++){
      //将当前td的内容去掉¥,转为浮点数，累加到total上
      total+=parseFloat(
        tds[i].innerHTML.slice(1)
      );
    }//(遍历结束)
    //设置tfoot中最后一个td的内容为¥+total按2位小数四舍五入
    table.querySelector(
      "tfoot td:last-child"
    ).innerHTML="¥"+total.toFixed(2);
  }
}