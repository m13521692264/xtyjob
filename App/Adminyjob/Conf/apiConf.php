<?php
// $requestUrl = 'http://ac.yjob.net';
//$urls['httpClient']['jobList']['url'] = $requestUrl . '/job/list';
//$urls['httpClient']['jobList']['method'] = 'post';
//$urls['httpClient']['jobList']['charset'] = 'utf-8';
//$urls['httpClient']['jobInfo']['url'] = $requestUrl . '/job/info/103';
//$urls['httpClient']['jobInfo']['method'] = 'get';
//$urls['httpClient']['jobInfo']['charset'] = 'utf-8';


/*
*	封装路由规则
*	@param requestUrl string 接口http地址
*	@param funcData array 由接口方法和接口路径封装在请求方式中的二维数组
*	@param charset string 默认字符集
*	return array 返回由请求方式、请求地址、字符编码构成的数组
*/
function apiConfig($requestUrl, $funcData, $charset = 'utf-8'){
	$urls['httpClient'] = array();
	foreach($funcData as $k => $v){
		foreach($v as $funcKey => $pathValue){
			if($k == 'post'){
				$urls['httpClient'][$funcKey]['method'] = 'post';
			}else{
				$urls['httpClient'][$funcKey]['method'] = 'get';
			}
				$urls['httpClient'][$funcKey]['url'] = $requestUrl . $pathValue;
				$urls['httpClient'][$funcKey]['charset'] = $charset;
		}
	}
	return $urls;
}

/*
*	配置函数名，调用接口 ==> 构造路由
*	@param string 请求方式 ==> 接口路径
*/ 
$funcData = array(
	'post' => array(
		'jobList' 		=> '/job/list',
		'jobPast' 		=> '/job/past',
		'jobStatistics' => '/job/statistics',
	),
	'get' => array(
		'jobInfo' => '/job/info'
	)
);

$requestUrl = 'http://ac.yjob.net';
$urls = apiConfig($requestUrl, $funcData);
return $urls;