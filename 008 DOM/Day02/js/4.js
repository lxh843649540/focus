      /**
 * Created by XM-web on 2017/4/19.
 */
var all=document.querySelector(
    "thead>tr input"
);
var checks=document.querySelectorAll(
    "tbody>tr>td:first-child>input"
);
 var allchecks=document.querySelectorAll(
     "table input"
);
var remove=document.getElementsByTagName("button");
all.onclick=function() {
    for(var i=0;i<checks.length;i++){
        checks[i].checked=this.checked;
    }
};
for(var i=0;i<checks.length;i++){
    checks[i].onclick=function () {
        if (!this.checked){
            all.checked=false;
        }else{
            var unchecked=document.querySelectorAll(
                "tbody td:first-child>input:not(:checked)"
            );
            if (unchecked===null)
                all.checked=true;
        }
    }
}
remove.onclick=function(){
   for (var i=0;i<checks.length;i++){
       checks[i].checked=false;
   }
};