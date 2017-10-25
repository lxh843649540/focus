/**
 * Created by XM-web on 2017/4/19.
 */
var sheet=document.styleSheets[1];//找到控制的那个样式表
// var rotateh=sheet.cssRules[6];//第七个keyframes
// var starhour=rotateh.cssRules[0];//第七个keyframes中的第一个
// starhour.style.transform="rotate(90deg)";
//获得sheet中三个keyframes
var Skeyframes=sheet.cssRules[4];
var Mkeyframes=sheet.cssRules[5];
var Hkeyframes=sheet.cssRules[6];
//获得三个keyframes下的内嵌rule
var SStartRule=Skeyframes.cssRules[0];
var SEndRule=Skeyframes.cssRules[1];
var MStartRule=Mkeyframes.cssRules[0];
var MEndRule=Mkeyframes.cssRules[1];
var HStartRule=Hkeyframes.cssRules[0];
var HEndRule=Hkeyframes.cssRules[1];
//计算当前时间对应的三个指针的角度
var now=new Date();
var h=now.getHours();
console.log(h);
var m=now.getMinutes();
console.log(m);
var s=now.getSeconds();
console.log(s);
var hDeg=h*30;
var mDeg=m*6;
var sDeg=s*6;
//设置三个指针起始角度分别为sDeg,mDeg,hDeg
SStartRule.style.transform=
    "rotate("+sDeg+"deg)";
MStartRule.style.transform=
    "rotate("+mDeg+"deg)";
HStartRule.style.transform=
    "rotate("+hDeg+"deg)";
//设置三个指针的结束较为分别为其起始角度+360度
SEndRule.style.transform=
    "rotate("+(sDeg+360)+"deg)";
MEndRule.style.transform=
    "rotate("+(mDeg+360)+"deg)";
HEndRule.style.transform=
    "rotate("+(hDeg+360)+"deg)";