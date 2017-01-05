<?php
namespace Adminyjob\Controller;
use Think\Controller;
class MemberController extends PublicController{
    public function bd_lib(){
        $title = "BD列表";
        $this->assign('title',$title);
        $this->display();
    }
    public function name_authentication(){
        $title = "实名认证";
        $this->assign('title',$title);
        $this->display();
    }
    public function part_time_lib(){
        $title = "兼职列表";
        $this->assign('title',$title);
        $this->display();
    }
    public function supervisor_lib(){
        $title = "督导列表";
        $this->assign('title',$title);
        $this->display();
    }
}