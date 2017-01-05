$(function(){
	$(".draw").click(function(){
		$("#list").show();
		$("#option ul li.draw .tb").show();
		$("#option ul li.draw p").css("color","#ffffff");
		$("#option ul li.draw").css("background","#cd1818");
		$("#option ul li.charge").css("background","#d82828");
		$("#list1").hide();
		$("#option ul li.charge .tb").hide();
		$("#option ul li.charge p").css("color","#ffdc73");
	})
	$(".charge").click(function(){
		$("#list").hide();
		$("#option ul li.draw .tb").hide();
		$("#option ul li.draw p").css("color","#ffdc73");
		$("#option ul li.charge").css("background","#cd1818");
		$("#option ul li.draw").css("background","#d82828");
		$("#list1").show();
		$("#option ul li.charge .tb").show();
		$("#option ul li.charge p").css("color","#ffffff");
		
	})
})
