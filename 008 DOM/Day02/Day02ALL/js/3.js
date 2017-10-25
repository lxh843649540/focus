//获得当前页面第二个样式表文件
var sheet=document.styleSheets[1];
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
var m=now.getMinutes();
var s=now.getSeconds();
var hDeg=(h*3600+m*60+s)/(3600*12)*360;
var mDeg=(m*60+s)/3600*360;
var sDeg=360*s/60;
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
