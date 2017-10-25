//1:jquery插件:图片轮播版本三:
//1:判断jquery是否加载成功
if(window.$===undefined){
   throw new Error("jquery必须加载");
}
//2:为jquery结象添加插件函数 15:45--15:55
jQuery.fn.scrollspy = function(options){
   //1:   获取options参数中对应target字符串
   var str = options.target;
   //2:   依据字符串获取对象 opt 楼层div
   var opt = $(str);
   //3:   为window对象绑定事件滚动条移动事件
   //     scroll
   $(window).scroll(function(){
    //4:   获取滚动条到页面顶部距离
    var top = $(window).scrollTop();
    //5:   判断 <900       输出"隐藏"
    //6:   判断 900---2000 输出"显示"
    //7:   超过            输出"隐藏"
    if(top<900){
      opt.fadeOut();
    }else if(top<1900){
      opt.fadeIn();//1层--3层之间显示
    }else{
      opt.fadeOut();
    }
    //2:点击当前滚动到楼层开关
    //2.1:获取导航开关 li
    var $liList = opt.find("li");
    //2.2:对导航开关遍历 each
    $liList.each(function(i,li){
    //2.3:获取当前元素下a元素属性href 
    //      楼层id
    var floorId = $(this).children("a").attr("href");
    //2.4:依据楼层id获取当前楼层对象位置
    var floorTop = $(floorId).offset().top;
    //2.5:判断
    //    如果当前楼层位置小于滚动条位置
    //2.6:当前li添加class active
    //  兄弟元素删除所有class active
    if(top>=floorTop){
       $(li).addClass('active')
         .siblings(".active")
         .removeClass("active");
    }
    });
   });
}
