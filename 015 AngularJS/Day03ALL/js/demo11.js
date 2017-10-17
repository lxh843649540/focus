/**
 * Created by bjwsl-001 on 2017/6/7.
 */

var app = angular.module('myApp', ['ng']);

//创建一个自定义服务
app.factory('$Debug', function () {
  return {
    debugSwitch:true,
    log: function (msg) {
     if(this.debugSwitch)
     {
       console.log(msg);
     }
    }
  }
});

//推断式（猜测）
/*app.controller('myCtrl', function ($scope,$Debug) {
  $Debug.log('Hello DI');
})*/

//行内式依赖注入
app.controller('myCtrl',['$scope','$Debug',
  function ($scope,$Debug) {
  $Debug.log('Hello Dependency Injection');
}]);






