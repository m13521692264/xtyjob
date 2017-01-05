<?php
namespace Adminyjob\Controller;
use Think\Controller;
class InstrumentController extends PublicController{
    public function bank_card(){
        $title = "银行卡查询";
        $this->assign('title',$title);
        $this->display();
    }
    public function Being_pushed(){

        $title = "消息推送";
        $this->assign('title',$title);
        $this->display();
    }
    public function Being_pushed_submit(){
    	$being = M('news');
    	$data['news_title']     = I('post.news_title');
    	$data['news_content']   = I('post.news_content');
        $data['news_obj']       = implode(',',I('post.news_obj'));
        $data['news_way']       = implode(',',I('post.news_way'));
        $ret = $being->add($data);
        if($ret){
        	redirect(U('Adminyjob/Instrument/Being_pushed'),2,'添加成功，返回继续添加');
		echo	"添加成功";
        }else{
        	"添加失败";
        }
    }
    public function generalize_query(){
        $title = "推广查询";
        $this->assign('title',$title);
        $this->display();
    }
    public function hbgl(){
        $title = "红包管理";
        $this->assign('title',$title);
        $this->display();
    }
    public function hbpz(){
        $title = "红包配置";
        $this->assign('title',$title);
        $this->display();
    }
    public function hjmd(){
        $title = "获奖名单";
        $this->assign('title',$title);
        $this->display();
    }
}