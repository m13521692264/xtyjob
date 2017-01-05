<?php
namespace Adminyjob\Controller;
use Think\Controller;
class IndexController extends PublicController {
    public function index(){
        $title = "系统首页";
        $this->assign("title",$title);
        $this->display();
    }
}