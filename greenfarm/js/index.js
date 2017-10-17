/**
 * Created by XM-web on 2017/6/3.
 */
$(function(){
    //页头页尾数据动态加载
    $("#head").load("data/header.php");
    $("#foot").load("data/footer.php");
    //楼层数据动态加载
    $("#floor ul.floorRight").each(function (i,dom) {
        var fid=i+1;
        $.ajax({
                type:'POST',
                url:'data/floor-detail.php',
                data:{fid:fid},
                success:function (data) {
                    var lis='';
                    $.each(data,function (i,obj) {
                        lis+=`
                            <li>
                                <a href=""><img src="images/${obj.fdimg}" alt=""></a>
                                <a href="" class="dName">${obj.fdname}</a>
                                <div class="price"><span>¥${obj.nprice}</span><s>¥${obj.oprice}</s></div>
                                <button>
                                    <span class="glyphicon glyphicon-shopping-cart"></span>
                                    加入购物车
                                </button>
                            </li>
                        `
                    });
                    $(dom).html(lis);
                }
            });
    });

    //底部轮播广告数据动态加载
    $.ajax({
        type:'GET',
        url:'data/scrollbanner.php',
        success:function (data) {
            var html='';
            $.each(data,function (i,obj) {
                html+=`
                    <li>
            <a href="">
                <img src="images/${obj.simg}" alt="">
            </a>
        </li>
                `
            });
            $("#scrollBanner>ul.imgS").html(html);
        }
    });

$("#head").on("click","#top-img>span", function () {
        $(this).parent().animate({height:0},500,function () {
            $("#top-img").remove();
        });
    }
);
//向右弹出菜单
$("#ad>ul>li").each(function (i,dom) {
    $(dom).hover(function () {
        $(this).children("div").css("display","block").animate({opacity:1,left:261},500);
    },function () {
        $(this).children("div").css({
            display:"none",
            left:310,
            opacity:0
        });
        $(":animated").stop(true);
    });
});
// 广告轮播
function lunBo(){
    //创建需要的变量
    var index=0;
    var $imgS=$("#ad>div.slide img");
    var $liS=$("#ad>div.slide>ul>li");
    var $slide=$("#ad>div.slide");
    //创建定时器函数
    function move(){
        $imgS.removeClass();
        $imgS.eq(index).addClass("active");
        $liS.removeClass();
        $liS.eq(index).addClass("active");
        index++;
        if(index===$imgS.length){
            index=0;
        }
    }
    //创建定时器
    var timer=setInterval(move,3000);
    //鼠标进入停止定时器
    $slide.mouseenter(
        function () {
            clearInterval(timer);
            timer=null;
        }
    );
    //鼠标移出启动定时器
    $slide.mouseleave(function () {
        timer=setInterval(move,3000);
    });
    //点击黑点跳转相应的图片
    $liS.each(function (i,dom) {
        $(dom).click(
            function () {
                $imgS.removeClass();
                $imgS.eq(i).addClass("active");
                $liS.removeClass();
                $liS.eq(i).addClass("active");
            }
        )
    })
}
lunBo();
//四张小图透明遮罩层
$("#bannerFour>a").hover(
    function () {
        $(this).children("div[class=leftTop]").animate({width:262,height:152,opacity:0.3},500);
    },
    function () {
        $(this).children("div").animate({width:0,height:0,opacity:0},500);
    }
);

//楼层间广告的遮罩层
    $("#floor").on('mouseenter','div.middle-banner',function () {
        $(this).find("div").animate({width:1170,height:112,opacity:0.3},500)
    });
    $("#floor").on('mouseleave','div.middle-banner',function () {
        $(this).find("div").animate({width:0,height:0,opacity:0},500);
    });


//底部滚动广告
function scroll() {
    var leftA=-18;//起始的left;
    function move() {
        var $ulA=$("#scrollBanner>ul.imgS");
        var $liA=$("#scrollBanner>ul.imgS>li");
        $ulA.append($liA[0]);
    }
    var timer=setInterval(move,2000);
    //鼠标移入清除定时器,移出启动定时器
    $("#scrollBanner").hover(
        function () {
           clearInterval(timer);
           timer=null;
        },
        function () {
            timer=setInterval(move,2000);
        }
    );
}
scroll();

//回到顶部按钮的显示与实现回到顶部的效果
    $(window).scroll(function () {
        if ($(this).scrollTop()<=200) {
            $("#backTop").css("display","none");
        } else {
            $("#backTop").css("display","block");
        }
    });
    $("#backTop").click(function () {
        $("body,html").animate({scrollTop: 0}, 800);
    });
//侧边QQ咨询点击弹出缩进
var zo=0;
$("#talkAbout").click(function () {
    if(zo===0){
        $("#talkAbout>div.leftQQ").css("background-position","0 -374px");
        $("#talkAbout>div.rightQQ").animate({width:130},300);
        zo=1;
    }else {
        $("#talkAbout>div.leftQQ").css("background-position","0 -374px");
        $("#talkAbout>div.rightQQ").animate({width:0},300);
        zo=0;
    }
});
//登录模态框
    $("#login").click(function (e) {
        e.preventDefault();
        $("#modal").css("display","block");
    });
    $("#modal-close").click(function () {
        $("#modal").css("display","none");
    });


    //点击登录按钮绑定事件
    $("#bt-login").click(function(){
        //2.1:获取用户名，密码
        var n = $("[name='uname']").val();
        var p = $("[name='upwd']").val();
        $.ajax({
            type:'POST',
            url:'data/login.php',
            data:{uname:n,upwd:p},
            success:function(data){
                if(data.code<0){
                    $('p.alert').html(data.msg);
                }else{
                    $("#modal").hide();
                    // loginUid = data.uid;
                    // loginUname = data.uname;
                }
            }
        });
    });
});





