//ios
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
   //alert(navigator.userAgent); 
   
   //add a new meta node of viewport in head node
	head = document.getElementsByTagName('head');
	viewport = document.createElement('meta');
	viewport.name = 'viewport';
	viewport.content = 'target-densitydpi=device-dpi, width=' + 750 + 'px, user-scalable=no';
	head.length > 0 && head[head.length - 1].appendChild(viewport);    
   
}


$(function(){
	/*04BD+锟介长锟斤拷锟斤拷页 选锟筋卡锟斤拷锟斤拷锟斤拷锟斤拷*/
	function loadCardTabrr(){
		if($('.bd_view .head ul li.selected').size()<=0){
			return false;
		}
		var navSelected = $('.bd_view .head ul li.selected');
		$('.bd_view .head .f-line').css({left: navSelected[0].offsetLeft + 'px','width':navSelected.width()});
		
 		$('.bd_view .head li').hover(function(){
			$('.bd_view .head li').removeClass('selected');
			$(this).addClass('selected');
			$('.bd_view .body').hide().eq($(this).index()).show();
			$('.bd_view .head .f-line').stop().animate({left: $(this)[0].offsetLeft + 'px','width':$(this).width()},200);
		});
	}	
	/*load*/
	loadCardTabrr();/*锟斤拷锟斤拷锟斤拷锟斤拷*/	
})

$(function(){
	/*a_锟斤拷锟斤拷锟斤拷签锟斤拷 选锟筋卡锟斤拷锟斤拷锟斤拷锟斤拷*/
	function loadCardTabr(){
		if($('.card_tabr .head ul li.selected').size()<=0){
			return false;
		}
		var navSelected = $('.card_tabr .head ul li.selected');
		$('.card_tabr .head .f-line').css({left: navSelected[0].offsetLeft + 'px','width':navSelected.width()});
		
 		$('.card_tabr .head li').hover(function(){
			$('.card_tabr .head li').removeClass('selected');
			$(this).addClass('selected');
			$('.card_tabr .body').hide().eq($(this).index()).show();
			$('.card_tabr .head .f-line').stop().animate({left: $(this)[0].offsetLeft + 'px','width':$(this).width()},200);
		});
	}	
	/*load*/
	loadCardTabr();/*锟斤拷锟斤拷锟斤拷锟斤拷*/	
	
	//pie
	if($('.mypie').size()>0){
		$('.mypie').circliful();
	}
	
	/*锟斤拷锟角╋拷锟?/
	$('.card_dialog .img i').click(function(){
		$(this).parent().fadeOut(function(){
			$(this).remove();
		});
	})
	
	//锟斤拷锟桔癸拷锟斤拷
	$('.comment_list li').each(function(){
		var obj = $(this);
		obj.find('.ico').click(function(){
			if(obj.hasClass('selected')){
				obj.removeClass('selected');
			}
			else{
				obj.addClass('selected');
			}
		})
	})
	
	$('.comment_list .bd dd').each(function(){
		var obj = $(this);
		obj.find('i').click(function(){
			var i = $(this).index();
			obj.find('i').removeClass('selected');
			obj.find('i:lt('+ (i+1) +')').addClass('selected');
			
			if(i==0){
				var txt = '锟杰诧拷';
			}
			if(i==1){
				var txt = '锟斤拷';
			}
			if(i==2){
				var txt = '一锟斤拷';
			}
			if(i==3){
				var txt = '锟斤拷';
			}
			if(i==4){
				var txt = '锟杰猴拷';
			}
			obj.find('span').html(txt);
		})
	})
	
	//锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷示
	$('.comment_list .txtarea').each(function(){
		var max = 16;
		var obj = $(this);
		obj.find('textarea').keyup(function(){
			var l = $(this).val().length;
			var l2 = max-l > 0 ? max-l :0;
			if(l2==0){
				var num=$(this).val().substr(0,max);
				$(this).val(num); 
			}
			obj.find('h4 i').html(l2);
		})
	})
	
	//签锟斤拷锟斤拷锟斤拷
	$('.sign_mgr_d .body li').each(function(){
		
		var obj = $(this);
		obj.find('.ico').click(function(){
			if($('.layout').hasClass('dojs')) return false;
			
			if($(this).hasClass('selected')){
				$(this).removeClass('selected');
				obj.find('.ico h4').html('取锟斤拷锟斤拷');
				obj.find('.txt h5').html('锟斤拷锟斤拷锟轿拷鸥锟斤拷锟?);
			}
			else{
				$(this).addClass('selected');
				obj.find('.ico h4').html('锟脚革拷锟斤拷');
				obj.find('.txt h5').html('锟睫硷拷录');
			}
		})
	})
	
	$('.sign_mgr_t .body li').each(function(){
		
		var obj = $(this);
		obj.find('.ico').click(function(){
			if($('.layout').hasClass('dojs')) return false;
			
			if($(this).hasClass('selected')){
				$(this).removeClass('selected');
				obj.find('.ico h4').html('取锟斤拷锟斤拷');
				obj.find('.txt h5').html('锟斤拷锟斤拷锟轿拷锟斤拷锟?);
			}
			else{
				$(this).addClass('selected');
				obj.find('.ico h4').html('锟斤拷锟斤拷');
				obj.find('.txt h5').html('锟睫硷拷录');
			}
		})
	})
	//签锟斤拷锟斤拷选锟斤拷
	var updateSignMgrSize = function(){
		if($('.sign_mgr').size()>0){
			var n = $('.sign_mgr .body input:checked').size();
			$('#yx').html(n);
		}
	}
	updateSignMgrSize();
	$('.sign_mgr .body input').change(function(){
		updateSignMgrSize();
	})
	
	//全选
	$('.sign_mgr #qx').change(function(){
		if($(this).is(':checked')){
			$('.sign_mgr .body input').attr('checked','checked');
		}
		else{
			$('.sign_mgr .body input').removeAttr('checked');
		}
		updateSignMgrSize();
	})
	
	//签锟斤拷锟介看锟斤拷式
	$('#qdfs').change(function(){
		var obj = $(this);
		var v = $(this).val();
		
		$('.sign_mgr .body dd').each(function(){
			if(v=='all'){
				$(this).show();
			}
			else if(v=='yes'){
				if($(this).find('input').is(':checked')){
					$(this).show();
				}
				else{
					$(this).hide();
				}
			}
			else if (v=='no'){
				if($(this).find('input').is(':checked')){
					$(this).hide();
				}
				else{
					$(this).show();
				}
			}
			else if (v=='link'){
				window.location.href = obj.data('url');
			}
		})
	})
	
	//签锟斤拷状态
	$('.sign_mgr .body dd').each(function(){
		var obj = $(this);
		
		obj.find('.c3').click(function(){
			
			if($('.layout').hasClass('dojs')) return false;
			
			if($(this).hasClass('c3_1')){
				var c = 'c3_2';
			}
			else if($(this).hasClass('c3_2')){
				var c = 'c3_3';
			}
			else if($(this).hasClass('c3_3')){
				var c = 'c3_1';
			}
			$(this).removeClass().addClass('c3 '+ c);
			
			//状态2
			if(c=='c3_1' || c=='c3_3'){
				obj.find('input').removeAttr('checked');
			}
			else{
				obj.find('input').attr('checked','checked');
			}
		})
	})
	//锟斤拷锟斤拷锟斤拷锟斤拷
	$('#pl').click(function(){
		if($('.layout').hasClass('dojs')){
			$('.layout').removeClass('dojs');
			$(this).html('锟斤拷锟斤拷锟斤拷锟斤拷');
			$('.sign_mgr input').attr('disabled','disabled');
			 //$('.sign_mgr form').reset();
			window.location.reload();
		}
		else{
			$('.layout').addClass('dojs');
			$(this).html('取锟斤拷');
			$('.sign_mgr input').removeAttr('disabled');
			
		}
	})
	//签锟斤拷锟斤拷锟?锟斤拷
	$('.sign_info .body .tels').change(function(){
		var v = $(this).val();
		$('.sign_info .body .tele').attr('href', 'tel:'+v);
	})
	
	//签锟斤拷图片
	$('.sign_list .head .ico').click(function(){
		
		if($(this).hasClass('all')){
			var c = 'yes';
		}
		else if($(this).hasClass('yes')){
			var c = 'no';
		}
		else if($(this).hasClass('no')){
			var c = 'all';
		}
		
		$(this).removeClass().addClass('ico '+ c);
		
		$('.sign_mgr .body dd').each(function(){
			var obj = $(this);
			
			obj.show();
			if(c=='yes'){
				
				if(obj.find('input').is(':checked')){
					
				}
				else{
					obj.hide();
				}
			}
			else if(c=='no'){
				if(obj.find('input').is(':checked')){
					obj.hide();
				}
				else{
					
				}
			}
			else if (c=='all'){
				
			}
		})
		return false;
	})
	
	//签锟斤拷锟介看图片
	$('.sign_list .body .img').click(function(){
		$('#ifm').attr('src',$(this).attr('href')).show();
		return false;
	})
	
	//锟斤拷锟斤拷锟斤拷签锟斤拷锟介看图片
	$('.card_list .addr').click(function(){
		$('#ifm').attr('src',$(this).attr('href')).show();
		return false;
	})
	
	//锟斤拷锟桔癸拷锟斤拷
	$('#zk').click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open').html('全锟斤拷展锟斤拷');
			$('.comment_list li').removeClass('selected');
		}
		else{
			$(this).addClass('open').html('全锟斤拷锟秸猴拷');
			$('.comment_list li').addClass('selected');
			
		}
	})
	
	//锟斤拷锟桔查看锟斤拷式
	$('#pjfs').change(function(){
		var obj = $(this);
		var v = $(this).val();
		if(v=='all'){
			$('.comment_list li').show();
		}
		else if(v=='yes'){
			$('.comment_list li').hide();
			$('.comment_list li.replyed').show();
		}
		else if (v=='no'){
			$('.comment_list li').hide();
			$('.comment_list li').not('.replyed').show();
		}
		else if (v=='link'){
			window.location.href = obj.data('url');
		}
	})
	
	
	$('.pic_view .slides').css('height', parseInt($(window).height())-90);
	//图片锟介看锟斤拷
	if($('.pic_view').size()>0){
		setTimeout(function(){
		var glide = $('.pic_view').glide({

			//autoplay:true,//锟角凤拷锟皆讹拷锟斤拷锟斤拷 默锟斤拷值 true锟斤拷锟斤拷锟揭拷锟斤拷锟斤拷么锟街?

			animationTime:500, //锟斤拷锟斤拷锟斤拷锟叫э拷锟街伙拷械锟斤拷锟斤拷锟斤拷支锟斤拷CSS3锟斤拷时锟斤拷锟斤拷效

			arrows:false, //锟角凤拷锟斤拷示锟斤拷锟揭碉拷锟斤拷锟斤拷
			//arrowsWrapperClass: "arrowsWrapper",//锟斤拷锟斤拷锟酵凤拷锟斤拷锟斤拷锟斤拷獠緿IV锟斤拷锟斤拷
			//arrowMainClass: "slider-arrow",//锟斤拷锟斤拷锟酵凤拷锟斤拷锟斤拷锟斤拷锟?
			//arrowRightClass:"slider-arrow--right",//锟斤拷锟斤拷锟揭硷拷头锟斤拷锟斤拷
			//arrowLeftClass:"slider-arrow--left",//锟斤拷锟斤拷锟斤拷锟酵凤拷锟斤拷锟?
			arrowRightText:"",//锟斤拷锟斤拷锟斤拷锟揭碉拷锟斤拷锟斤拷锟斤拷锟街伙拷锟竭凤拷锟揭诧拷锟斤拷锟斤拷锟斤拷锟?
			arrowLeftText:"",

			nav:false, //锟斤拷锟斤拷锟斤拷锟斤拷也锟斤拷锟角憋拷锟斤拷锟斤拷锟斤拷示锟斤拷小锟斤拷锟斤拷
			navCenter:true, //锟斤拷锟斤拷锟斤拷锟斤拷位锟斤拷锟角凤拷锟斤拷锟?
			navClass:"slider-nav",//锟斤拷锟斤拷锟斤拷锟斤拷锟解部div锟斤拷锟斤拷
			navItemClass:"slider-nav__item", //锟斤拷锟斤拷锟斤拷小锟斤拷锟斤拷锟斤拷锟绞?
			navCurrentItemClass:"slider-nav__item--current" //锟斤拷选锟叫猴拷锟斤拷锟绞?
		});
		},10)
	}
	
	$('.pic_view li').click(function(){
		var obj = $(this);
		f = $(this).parent().parent().parent();
		if(obj.hasClass('jshow')){
			obj.removeClass('jshow');
			f.find('.pic_desc').slideDown();
			f.find('.user_head').slideDown();
		}
		else{
			obj.addClass('jshow');
			f.find('.pic_desc').slideUp();
			f.find('.user_head').slideUp();
		}
	})
	
	//锟斤拷锟斤拷
	$('.user_head .ico_prev').not('.nojs').click(function(){
		
		history.back();
	})
})




//锟津开碉拷锟斤拷
function openDiv(id){
	$('#'+ id).show();
	return false;
}
//锟截闭碉拷锟斤拷
function closeDiv(id){
	$('#'+ id).hide();
	return false;
}





