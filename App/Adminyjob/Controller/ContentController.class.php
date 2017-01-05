<?php
namespace Adminyjob\Controller;
use Think\Controller;
class ContentController extends PublicController{
    public function add_content(){
        $title = "内容添加";
        $this->assign('title',$title);
        $this->display();
    }
    public function content_management(){
        $title = '内容管理';
        $this->assign('title',$title);
        $this->display();
    }
    public function opinion_suggest(){
        $title = "意见反馈";
        $this->assign('title',$title);
        $this->display();
    }
}