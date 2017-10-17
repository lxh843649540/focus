/**
 * Created by XM-web on 2017/6/20.
 */
$(function () {
    var ok1=false;
    var ok2=false;
    var ok3=false;
    //验证注册表单
    var nameReg=/^[a-z0-9_-]{3,16}$/;
    var pwdReg=/^[a-z0-9_-]{6,18}$/;
    $("#uname").blur(function(){
        if(nameReg.test($(this).val())){
            $(this).next().html("用户名格式正确").removeClass("red").addClass("blue");
            ok1=true;
        }else{
            $(this).next().html("用户名格式不正确").removeClass("blue").addClass("red");
            ok1=false
        }
    });
    $("#upwd").blur(function(){
        if(pwdReg.test($(this).val())){
            $(this).next().html("密码格式正确").removeClass("red").addClass("blue");
            ok2=true;
        }else{
            $(this).next().html("密码格式不正确").removeClass("blue").addClass("red");
            ok2=false
        }
    });
    $("#upwd2").blur(function(){
        if($(this).val()===""){
            $(this).next().html("请输入确认密码").removeClass("blue").addClass("red");
            ok3=false;
        }else if($("#upwd").val()===$(this).val()){
            $(this).next().html("密码输入正确").removeClass("red").addClass("blue");
            ok3=true;
        }else{
            $(this).next().html("两次密码不相同").removeClass("blue").addClass("red");
            ok3=false
        }
    });


    //为点击注册按钮绑定事件
    $("#inter>input[type=button]").click(function(){
        if(ok1&&ok2&&ok3){
            var n=$("#uname").val();
            var p=$("#upwd").val();
            $.ajax({
                type:"POST",
                url:"data/register.php",
                data:{uname:n,upwd:p},
                success:function (data) {
                    if(data.code<0){
                        $("#underlying p.tip").html(data.msg);
                    }else{
                        $("#underlying p.tip").html(data.msg);
                        location.href="index.html";
                    }
                }
            })
        }else{$("#underlying p.tip").html("用户名或者密码格式不正确");}
    })
});