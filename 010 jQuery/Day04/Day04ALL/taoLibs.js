/**
 * Created by XM-web on 2017/5/4.
 */
if(window.$===undefined){
    throw new Error("taoLibs库依赖于jQuery库,请先引入jQuery!")
}
//2:在jQuery.fn添加方法
jQuery.fn.shLi=function () {
    //3:给当前元素绑定点击事件
    //4:给当前元素添加class in
    //插件--->直接 this<==>jQuery
    //选择器中获取对象
    this.click(function () {
        //在事件处理函数中 this--->dom对象
        $(this).toggleClass("in");
    })
};