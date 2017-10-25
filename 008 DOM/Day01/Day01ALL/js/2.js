//遍历指定父节点下所有后代节点
//方法一: 递归遍历,2步:
//Step1: 先仅遍历直接子节点
//Step2: 对每个直接子节点调用和父节点完全相同的操作
function getChildren1(parent){
  //如果不是文本节点，就输出节点名
  //否则输出文本节点的内容
  console.log(parent.nodeType!=3?
    parent.nodeName:parent.nodeValue);
  //获得parent的直接子节点childNodes
  var childNodes=parent.childNodes;
  //遍历parent的直接子节点
  for(var i=0,len=childNodes.length;i<len;i++){
    arguments.callee(childNodes[i]);
  }
}
//方法2: 用循环代替递归
function getChildren2(parent){
  //创建迭代器对象:
  var iterator=
    document.createNodeIterator(
      parent,NodeFilter.SHOW_ALL,
      null,false
    );
  //循环调用iterator的nextNode()
  do{
    var node=iterator.nextNode();
    if(node!=null)
      console.log(node.nodeType!=3?
        node.nodeName:node.nodeValue);
    else break;
  }while(true);
}
getChildren2(document.body);
/*测试程序的执行时间:
* console.time("name")
* 要执行的程序
* console.timeEnd("name")
* //会输出程序执行耗费的时间(ns)
*
* 比如:
* console.time("get1");
 getChildren1(document.body);
 console.timeEnd("get1");
 console.time("get2");
 getChildren2(document.body);
 console.timeEnd("get2");
* */