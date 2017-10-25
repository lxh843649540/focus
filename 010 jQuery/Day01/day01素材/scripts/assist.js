  /*
	��������
	1,�Զ�����
	2,��Ԫ����Ӷ���
  */
  
  $(document).ready(function(){
       //�ֶ�����ҳ��Ԫ��
	  $("#reset").click(function(){
		  $("*").removeAttr("style");
		   $("div[class=none]").css({"display":"none"}); 
	  });
	  //�ж��Ƿ��Զ�����
	   $("input[type=button]").click(function(){
		  if($("#isreset").is(":checked")){
			   $("#reset").click();
		   }
	  });
      //��idΪmover��Ԫ����Ӷ���.
	   function animateIt() {
		  $("#mover").slideToggle("slow", animateIt);
	    }
		animateIt();
 })