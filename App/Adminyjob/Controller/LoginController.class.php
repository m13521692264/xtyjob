<?php
namespace Adminyjob\Controller;
use       Think\Controller;
class LoginController extends Controller{
	public function index(){
		$this->display('login');
	}

	public function login(){
		if(IS_POST){
			$userTable = M('user');
			$userName = $_POST['admin_username'];
			$userPass = $_POST['admin_pwd'];
			$where['admin_username'] = $userName;
			$userData = $userTable->where($where)->find();
			if($userData && $userData['admin_pwd'] == md5($userPass)){
				session('admin_id',$userData['admin_id']);
				session('admin_username',$userData['admin_username']);
				$this->success('登录成功,正跳往系统首页.....',U('Index/index'));
			}else{
				$this->error('用户名或密码错误！', U('Login/login'),2);
			}
		}else{
			$this->display();
		}
	}

	public function loginout(){
		session_unset('admin_id');
		session_unset('admin_username');
		$this->redirect('Adminyjob/Login/index');
	}
}
?>