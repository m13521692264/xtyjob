<?php
namespace Adminyjob\RemoteModel;

class JobRemoteModel extends  BaseRemoteModel
{
    /*
     * 根据调用的方法，加载对应的配置，发送请求api
     * @param string functionName 请求的方法名
     * @param array params 请求的方法所带的参数
     * @return string 返回接口返回的数据
     * */

    public function __call($functionName, $params){
        return $this->send($params, $functionName);
    }
}