if(!window.jQuery){
  throw new Error('jd_index.js依赖于jQuery！');
}

/**
 * 轮播广告插件函数，调用方法形如：
 * $('#slider').carousel();
 * HTML结构形如：
 * <div id="slider">
 *     <img class="active" src="01.jpg">
 *     <img src="02.jpg">
 *     <ul>
 *       <li class="active">1</li>
 *       <li>2</li>
 *     </ul>
 *  </div>
 * **/
jQuery.fn.carousel = function(){
  var interval = 3000;    //每隔多久轮换一张
  var duration = 500;     //每次轮换动画的持续时间
  var $imgList = this.children('img'); //所有的img组成的类数组对象
  var $liList = this.find('li'); //所有的li组成的类数组对象
  var cur = 0;  //当前显示的广告的序号
  var next = 1; //下次即将要显示的广告的序号


  //开启一个定时器，每隔interval时长启动一次轮换
  setInterval(function(){
    lunHuan()
  }, interval);

  //为每个li添加事件监听，单击后直接显示指定的广告
  $liList.click(function(){
    //cur 0    next 1       点击4后
    //cur 0    next 4
    var i = $liList.index(this);//点击的li在所有li中的序号
    next = i;
    //点击后立即开始广告轮换
    lunHuan();
  });

  //进行广告轮换
  function lunHuan(){
    //让第next个li圆饼添加.active，其兄弟删除.active
    $liList.eq(next).addClass('active').siblings('.active').removeClass('active');
    //让当前显示的广告启动动画向左滑动，滑出去后，删除.active
    $imgList.eq(cur).animate({left:'-100%'},duration,function(){
      $(this).removeClass('active');
    });
    //让即将要显示的下一张广告添加.active，出现在最右侧，开始动画慢慢向左滑动
    $imgList.eq(next).addClass('active').css('left','100%').animate({left: '0'},duration);
    //修改cur和next变量的值,第cur张移走后next张移入
    cur = next;  //<=0     <=1
    next++;
    if(next>=$imgList.length){
      next = 0;
    }
  }
};


/**
 * 滚动监听插件
 * $(window).scrollspy(options)
 */
jQuery.fn.scrollspy = function(options){
  var $liList = $(options.target).find('li');

  //点击附加导航中的某个超链接时，页面主体滚动到指定楼层位置
  $liList.on('click','a', function(e){
    e.preventDefault();
    //this => a
    //根据a的href属性，找到其对应的楼层的距离页面顶部的偏移量
    var floorId = $(this).attr('href');
    var top = $(floorId).offset().top;
    //让页面主体滚动到指定的高度
    $('body').animate({scrollTop: top}, 500);
  });

  //监听页面的滚动事件，进行楼层开关的点亮
  //window.onscroll = function(){}
  $(window).scroll(function(){
    var top = $(window).scrollTop();//获取window距离滚动条顶部滚动的距离
    //console.log(top);
    if(top<1000){ //现在滚动到1楼上方
      $(options.target).fadeOut();
    }else if(top>1940){   //现在滚动到3楼下方
      $(options.target).fadeOut();
    }else { //现在滚动到1楼和3楼之间
      $(options.target).fadeIn();

      //点亮当前滚动到的楼层的开关
      //思路：遍历每个楼层开关，查看当前window滚动偏移量超过哪个楼层的偏移量
      $liList.each(function(i, li){
        //li => a .href  =>  div.floor => offset().top
        var floorId = $(this).children('a').attr('href');
        var floorTop = $(floorId).offset().top;//每个楼层距离页面顶部的偏移量
        if(top>=floorTop){ //窗口已经滚动到特定的楼层
          $(li).addClass('active').siblings('.active').removeClass('active');
        }
      });
    }
  })
};






