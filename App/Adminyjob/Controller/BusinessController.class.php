<?php
namespace Adminyjob\Controller;
use Think\Controller;
class BusinessController extends PublicController{
    public function enterprise_certification(){
        $title = "企业认证";
        $this->assign('title',$title);
        $this->display();
    }
}