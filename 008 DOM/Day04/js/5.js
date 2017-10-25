/**
 * Created by XM-web on 2017/4/21.
 */
var pop=document.getElementById("pop");
pop.addEventListener(
    "click",
    function () {
        alert("今晚308");
    }
);
var psize=200,
    maxt=innerHeight-psize,
    maxl=innerWidth-psize;
// var t=parseInt(Math.random()*(maxt+1)),
//     l=parseInt(Math.random()*(maxl+1));
//     pop.style.cssText="top:"+t+"px;left:"+l+"px";
//为pop绑定鼠标进入事件
pop.addEventListener(
    "mouseover",
    function(e){
        while (true){
            var t=parseInt(Math.random()*(maxt+1)),
                l=parseInt(Math.random()*(maxl+1));
            var x=e.clientX,y=e.clientY;
            //如果新位置不包含鼠标的位置
            if (!(x>=l&&x<=l+psize&&y>=t&&y<=t+psize)){
                pop.style.cssText="top:"+t+"px;left:"+l+"px";break;
            }
        }
    }
);