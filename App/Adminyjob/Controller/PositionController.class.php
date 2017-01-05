<?php
namespace Adminyjob\Controller;
use Think\Controller;
class PositionController extends PublicController{
	public function job_listings(){
    //获取数据并展示到页面
		$usage = "http://ac.yjob.net/job/list"; 	                //获取数据的url
		$public= A('Public');										//A方法用于在内部实例化控制器
		$data  = $public->post_curl_json($usage);                  //获取到url里的数据
		$list  = $data['data']['list'];						        //获取到数组list下的数据
		//后台分页
		$count = count($list);										//查询数据所有条数
		$Page  = _getpage($count,C('XT_PAGENUM'));	                //实例化分页类 传入总记录数和每页显示的记录数
		$list  = array_slice($list,$Page->firstRow,$Page->listRows);//使用array_slice函数在数组中根据条件取出一段值
		$show  = $Page->show();										//分页显示输出
		$title = "职位列表";
		$this->assign('data',$list);
		$this->assign('page',$show);
		$this->assign('title',$title);
		$this->display();
  }
  public function job_update(){
  	$usage 	= "http://ac.yjob.net/job/list"; 
  	$public = A('Public');	
  	$data   = $public->post_curl_json($usage);
  	$list 	= $data['data']['list'];
  	$count 	= count($list);
  	$i      = 0;
  	for($i;$i<$count;$i++){
		$a = $list[$i]['id'];
		$c = $list[$i];	
  	}
	
	
	$jobid 	= intval($_GET['id']);
	print_r('<pre>');
	print_r($jobid);
//	print_r('<pre>');
//	print_r($count);
//	exit;
//	$this->display();
  }
}