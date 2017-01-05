document.addEventListener('DOMContentLoaded',function () {
	// 设置首页html字体
	(function(win,doc){
	    win.addEventListener('resize',change,false);
	    change();
	    function change() {
	        doc.documentElement.style.fontSize=20/320*doc.documentElement.clientWidth+'px';
	    }
	})(window,document);

	//红包点击事件
	(function () {
		var oUl = document.querySelector('.timing');
		var aLi = oUl.children;
		var oHideDetail = document.querySelector('.hide-detail');
		var oOuterDetail = document.querySelector('.outer-detail');
		var oClose = document.querySelector('.close');
		var oKRadius = document.querySelector('.k-radius');
		var oLookDetail = document.querySelector('.look-detail');
		var oCloseLook = document.querySelector('.d-b a:nth-Child(2)')
		for(var i=0; i<aLi.length; i++){
			aLi[i].addEventListener('click',function () {
				oHideDetail.style.display = 'block';
				oOuterDetail.style.display = 'block';
			},false)
		}
		//点击关闭
		oClose.addEventListener('click',function () {
			oHideDetail.style.display = 'none';
			oOuterDetail.style.display = 'none';
		},false)

		oCloseLook.addEventListener('click',function () {
			oHideDetail.style.display = 'none';
			oLookDetail.style.display = 'none';
		},false)
		//点击开旋转，旋转完毕自动打开
		oKRadius.addEventListener('click',function () {
			oKRadius.style.WebkitAnimation = 'run 0.5s linear infinite';
			setTimeout(function () {
				oOuterDetail.style.display = 'none';
				oLookDetail.style.display = 'block';
				oKRadius.style.WebkitAnimation = '';
			},1500)
		},false)
	})();
	//红包奖品比例
	(function () {
		var n1 = document.querySelector('.num-outer i:nth-child(1)');
		var n2 = document.querySelector('.num-outer i:nth-child(3)');
		var scale = parseInt(n1.innerHTML)/parseInt(n2.innerHTML);
		var oSpan = document.querySelector('.inner-span');

		oSpan.style.width = scale*4.5+'rem';
	})();
    
},false)

