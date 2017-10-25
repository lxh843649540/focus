/**
 * Created by XM-web on 2017/5/4.
 */
if(window.$===undefined){
    throw new Error("JD-carousel.js依赖于jQuery库,请先引用jQuery库!")
}
jQuery.fn.carousel=function () {
    let index=0;
    function show(){
        //7.0:下标自增并且判断是否越界
        index++;
        (index>4)&&(index=0);
        //7.1:清除所有图片列中元素class
        $("#slider>img").removeClass();
        //7.2:当前图片元素添加class active
        $("#slider>img:nth-child("+index+")").addClass("active");
        //7.3:清除所有数字列中元素class
            $("#slider li").removeClass();
        //7.4:当前数字 元素添加class active
        $("#slider li:nth-child("+index+")").addClass("active");
    }
    //8:通过定时器调用函数 show
    let timer=setInterval(show,1500);
    $("#slider>img").hover(function () {
        clearInterval(timer);
        timer=null;
    },function () {
        timer=setInterval(show,1500);
    })
};