/**
 * Created by bjwsl-001 on 2017/6/7.
 */
var app = angular.module('myApp', ['ng']);

app.service('$show', function () {
  this.showAlert = function () {
    alert('Hello myService');
  };
})

//推断式依赖注入
/*
app.controller('myCtrl', function ($scope,$show) {
  $scope.handleClick = function () {
    //调用自定义服务中的方法
    $show.showAlert();
  }
})*/

//标记式依赖注入
var ctrFunc = function ($scope,$show) {
  $scope.handleClick = function () {
    //调用自定义服务中的方法
    $show.showAlert();
  }
}
//对控制器的处理函数打个标记
ctrFunc.$inject = ['$scope','$show'];

app.controller('myCtrl',ctrFunc);





