/**
 * Created by XM-web on 2017/6/1.
 */
onmessage=function (e) {
  var git=e.data.split(",");
  var a=parseInt(git[0]);
  var b=parseInt(git[1]);
  var result=a+b;
  postMessage(result);
};