$(function(){



//功能点2:为登录按包绑定事件监听
//15:50--16:05
//1:获取登录按钮
//2:绑定点击事件
$("#bt-login").click(function(){
 //2.1:获取用户名，密码
 var n = $("[name='uname']").val();
 var p = $("[name='upwd']").val();
 //2.2:发送ajax $.ajax();
 $.ajax({
   type:'POST',
   url:'data/user_login_01.php',
   data:{uname:n,upwd:p},
   success:function(data){
      if(data.code<0){
        $('p.alert').html(data.msg);
      }else{
        //隐藏模态框
        $(".modal").hide();
      }
   }
 });
});






//功能点3:发起异步请求，获取产品列表
function loadProduct(){
   //1:发送ajax请求
   //2:接收服务器返回数据
   $.ajax({
     type:'POST',
     url:'data/product_list_02.php',
     success:function(data){
      //3:接字符串      
      var html = "";
      $.each(data,function(i,p){
        html += `
<li>
    <a href=""><img src="${p.pic}" alt=""/></a>
    <p>￥${p.price}</p>
    <h1><a href="">${p.pname}</a></h1>
    <div>
        <a href="" class="contrast"><i></i>对比</a>
        <a href="" class="p-operate"><i></i>关注</a>
        <a href="${p.pid}" class="addcart"><i></i>加入购物车</a>
    </div>
</li>
        `;   
      });
      $("#plist ul").html(html);

     }
   });
}
loadProduct();




});//$() end;