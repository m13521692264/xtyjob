<?php
namespace Adminyjob\Controller;
use  Think\Controller;
class SystemController extends PublicController{
    public function personal_settings(){
        $title = "企业设置";
        $this->assign('title',$title);
        $this->display();
    }
    public function registry_settings(){
        $title = "注册设置";
        $this->assign('title',$title);
        $this->display();
    }
    public function substation_management(){
        $title = "分站管理";
        $this->assign('title',$title);
        $this->display();
    }
}