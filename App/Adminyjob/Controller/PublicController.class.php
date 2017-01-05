<?php
namespace Adminyjob\Controller;
use Think\Controller;
class PublicController extends Controller{
    public function _initialize(){
    	$user = isset($_SESSION['admin_username']) ? $_SESSION['admin_username'] : null;
    	if(!$user){
    		$this->error('未登录，请登录',U('Login/login'),3);
    	}
    }
	public function post_curl_json($url){
		$ch = curl_init();
		curl_setopt($ch,CURLOPT_URL,$url);
		curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
		$result = curl_exec($ch);
		if(curl_error($ch)){
			print_r(curl_error($ch));
		} 
		curl_close($ch);
		return json_decode($result,TRUE);
	}
}