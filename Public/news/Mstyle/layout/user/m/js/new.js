$(document).ready(function() {
	//	密码登录及手机登录
	$(".sjdl-sj").hover(function() {
		$(".zw-sj").show();
		$(".zw-mima").hide();
		$(".dl-xxkt1").css("display", "none");
		$(".dl-xxkt2").css("display", "block");
		$(".sjdl-mima").css("color", "#AAAAAA");
		$(".sjdl-sj").css("color", "#333333");
		$("#type").val(200);
	})
	$(".sjdl-mima ").hover(function() {
			$(".zw-sj").hide()
			$(".zw-mima").show();
			$(".dl-xxkt1").css("display", "block");
			$(".dl-xxkt2").css("display", "none");
			$(".sjdl-sj").css("color", "#AAAAAA");
			$(".sjdl-mima").css("color", "#333333");
			$("#type").val(100);
		})
		//密码切换
	$(".user-eyek").click(function() {
			if($(this).hasClass("user-eyek")) {
				$(this).removeClass("user-eyek").addClass("user-eye");
				$(".mcmm").prop("type", "text");
			} else {
				$(this).removeClass("user-eye").addClass("user-eyek");
				$(".mcmm").prop("type", "password");
			}
		})
		//清除号码
	$(".qchm").click(function() {
		$(".mobel").val("");
		$(".qchm").css("display", "none");
	})
	$(".mobel").keyup(function() {
		if($(".mobel").val() != '') {
			$(".qchm").css("display", "block");
		} else {
			$(".qchm").css("display", "none");
		}
	});
	//选型卡手机登录清除号码
	$(".qchm1").click(function() {
		$(".mobel1").val("");
		$(".qchm1").css("display", "none");
	})
	$(".mobel1").keyup(function() {
		if($(".mobel1").val() != '') {
			$(".qchm1").css("display", "block");
		} else {
			$(".qchm1").css("display", "none");
		}
	});


	// mc 用户登录
	$('#submit').click(function () {
		var type = $('#type').val();
		// 手机号、密码登录
		if(type == 100){
			var m_phone = $('#m_phone1').val();
			var m_pass = $('#m_pass').val();
			$.ajax({
				'type': 'POST',
				'url': "/Home/Login/login",
				'data': {
					type: type,
					m_phone: m_phone,
					m_pass: m_pass
				},
				success:function (data) {
					if(data.code == 1){
						window.location.href = "/Home/Index/index";
					}else if(data.code == 3){
						alert(data.msg);
						window.location.href = "/Home/Perredcenter/index";
					}else{
						alert(data.msg);
					}
				}
			})
		}else{
			var m_phone = $('#m_phone2').val();
			var code = $('#code').val();
			$.ajax({
				'type': 'POST',
				'url': '/Home/Login/login',
				'data': {
					type: 200,
					m_phone: m_phone,
					code: code
				},
				success:function (data) {
					if(data.code == 1){
						window.location.href = "/Home/Index/index";
					}else{
						alert(data.msg);
					}
				}
			});
		}
	});
	
	// mc 用户注册
	$('#gr_register_btn').click(function(){
		var gr_register_phone = $('#gr_register_phone').val();
		var gr_register_code = $('#gr_register_code').val();
		var gr_register_pass = $('#gr_register_pass').val();
		var gr_register_invite_code = $('#gr_register_invite_code').val();
		$.ajax({
			'url': '/Home/Register/index',
			'type': 'POST',
			'data': {
				register_phone: gr_register_phone,
				register_code: gr_register_code,
				register_pass: gr_register_pass,
				register_invite_code: gr_register_invite_code,
				register_type: 100
			},
			success:function(data){
				// console.log(data);
				// return false;
				if(data.code == 1){
					window.location.href = "/Home/Index/index";
				}else{
					alert(data.msg);
				}
			}
		});
	})

	$('#qy_register_btn').click(function(){
		var qy_register_phone = $('#qy_register_phone').val();
		var qy_register_code = $('#qy_register_code').val();
		var qy_register_pass = $('#qy_register_pass').val();
		var qy_register_invite_code = $('#qy_register_invite_code').val();
		$.ajax({
			'url': '/Home/Register/index',
			'type': 'POST',
			'data': {
				register_phone: qy_register_phone,
				register_code: qy_register_code,
				register_pass: qy_register_pass,
				register_invite_code: qy_register_invite_code,
				register_type: 200
			},
			success:function(data){
				if(data.code == 1){
					window.location.href = "/Home/Perredcenter/index";
				}else{
					alert(data.msg);
				}
			}
		});
	})

	// mc 用户重置密码
	$('#reset_btn').click(function(){
		var phone = $('#reset_phone').val();
		var pass = $('#reset_pass').val();
		var code = $('#reset_code').val();
		$.ajax({
			'url': '/Home/Resetpass/resetpass',
			'type': 'POST',
			'data': {
				phone: phone,
				pass: pass,
				code: code
			},
			success: function (data) {
				if(data.code == 1){
					$('#mask').show();
					$('#chg_dialog').show();
				}else{
					alert(data.msg);
				}
			}
		})
	})
});