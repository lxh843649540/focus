<?php
header('Content-Type: text/html;charset=UTF-8');
?>
<div id="top-img">
    <img src="images/top.jpg" alt="顶端广告图片">
    <span></span>
</div>
<!--logo 搜索 顶部导航-->
<div id="header">
    <!--顶端商品导航栏-->
    <header id="top">
    <ul>
        <!--电话-->
        <li>
            <a href="#">
                <span class="glyphicon glyphicon-earphone"></span>
                13554223093
            </a>
        </li>
        <!--会员中心-->
        <li id="dropdown">
            <a href="#">
                <span class="glyphicon glyphicon-user"></span>
                会员中心
                <span class="caret"></span>
                <span class="glyphicon glyphicon-triangle-bottom"></span>
            </a>
            <!--弹出框-->
            <ul class="drop-menu">
                <li><a href="#" id="login">&gt;&nbsp;&nbsp;会员登录</a></li>
                <li><a href="register.html" id="register">&gt;&nbsp;&nbsp;会员注册</a></li>
            </ul>
        </li>
        <!--收藏-->
        <li>
            <a href="#">
                <span class="glyphicon glyphicon-heart"></span>
                收藏(0)
            </a>
        </li>
        <!--购物车-->
        <li>
            <a href="#">
                <span class="glyphicon glyphicon-shopping-cart"></span>
                购物车
            </a>
        </li>
        <!--结账-->
        <li>
            <a href="#">
                <span class="glyphicon glyphicon-share-alt"></span>
                结账
            </a>
        </li>
    </ul>
</header>
    <div id="top-main">
        <!--logo-->
        <a href="index.html"><img src="images/logo.png"></a>
        <!--搜索框与购物车-->
        <div class="rt">
            <!--搜索框-->
            <div class="search">
                <input type="text" placeholder="搜索"><a href="#"><span class="glyphicon glyphicon-search"></span></a>
            </div>
            <!--购物车-->
            <div class="cart">
                <a href="#">
                    <span class="glyphicon glyphicon-shopping-cart"></span>
                </a>
                <div>
                    <span class="goods">0个商品 - ¥0.00</span>
                    <span class="glyphicon glyphicon-chevron-down"></span>
                    <ul id="goods-menu">
                        <li><p>您的购物车内没有商品!</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div id="nav">
        <div class="nav-left">
            <h4>全部商品分类</h4>
            <span class="glyphicon glyphicon-menu-hamburger"></span>
        </div>
        <!--中间商品列表-->
        <ul class="nav-middle">
            <li><a href="">生鲜预购<span></span></a></li>
            <li><a href="">新鲜水果<span></span></a></li>
            <li><a href="">水产<span></span></a></li>
            <li><a href="">时令蔬菜<span></span></a></li>
            <li><a href="">肉类<span></span></a></li>
            <li><a href="">生鲜馆<span></span></a></li>
            <li><a href="">野生类<span></span></a></li>
            <li><a href="">海外购</a></li>
            <li><a href="">生态农业</a></li>
        </ul>
    </div>
</div>