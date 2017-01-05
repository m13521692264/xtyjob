<?php
namespace Admin\Model;
use Think\Model;
class LoginModel extends Model{
	protected $_validate = array(
		array('admin_username','require','用户名不能为空!'),
		array('admin_username', '', '该用户名已被注册！', 0, 'unique', 1),
		array('admin_pwd','/^([a-zA-Z0-9@*#]{6,22})$/','密码格式不正确,请重新输入',0),
		array('admin_repwd','admin_pwd','确认密码不正确',0,'confirm'),
	);
	protected $_auto     = array(
		array('admin_pwd','md5',3,'funtion'),
	); 
}
?>