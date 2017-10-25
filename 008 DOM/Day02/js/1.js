/**
 * Created by XM-web on 2017/4/19.
 */
//找到触发元素
var input1=document.getElementsByName("username")[0];
var input2=document.getElementsByName("pwd")[0];
//设置获取焦点的公共函数
function getFocus(){
    this.className="txt_focus";//穿上获取焦点的衣服
    this.parentNode.nextElementSibling.firstElementChild.className="";//拿掉隐藏的衣服
}
input1.onfocus=getFocus;//为input1引用获取焦点函数
input2.onfocus=getFocus;//为input2引用获取焦点函数
//失去焦点函数
input1.onblur=function(){
    this.className="";//清除自己的class
    //定义正则: 1~10个字母，数字或下划线
    var reg=/^\w{1,10}$/;
    if(reg.test(this.value)){
        this.parentNode.nextElementSibling.firstElementChild.className="vali_success";
    }else{
        this.parentNode.nextElementSibling.firstElementChild.className="vali_fail";
    }
};
input2.onblur=function(){
    this.className="";//清除自己的class
    //定义正则: 6个数字
    var reg=/^\d{6}$/;
    if(reg.test(this.value)){
        this.parentNode.nextElementSibling.firstElementChild.className="vali_success";
    }else{
        this.parentNode.nextElementSibling.firstElementChild.className="vali_fail";
    }
};
//失去焦点函数第二种
// input1.onblur=function(){
//     var reg=/^\w{1,10}$/;
//     getblur(this,reg);
// };
// input2.onblur=function(){
//     var reg=/^\d{6}$/;
//     getblur(this,reg)
// };
// function getblur (i,reg){
//     i.className="";//清除自己的class
//     if(reg.test(i.value)){
//         i.parentNode.nextElementSibling.firstElementChild.className="vali_success";
//     }else{
//         i.parentNode.nextElementSibling.firstElementChild.className="vali_fail";
//     }
// }







