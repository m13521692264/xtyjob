<?php
 function _getpage($count,$pagesize = 8){
		$p = new \Think\Page($count, $pagesize);
		$p -> setConfig('header', '');
		$p -> setConfig('prev', '上一页');
		$p -> setConfig('next', '下一页');
		$p -> setConfig('last', '末页');
		$p -> setConfig('first', '首页');
		$p -> setConfig('theme', '%FIRST%%UP_PAGE%%LINK_PAGE%%DOWN_PAGE%%END%');
		$p -> lastSuffix = false;
		//最后一页不显示为总页数
		return $p;
	}
?>