/*
Navicat MySQL Data Transfer

Source Server         : yjobdb
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : xtadmin

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2016-12-21 11:20:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for xt_news
-- ----------------------------
DROP TABLE IF EXISTS `xt_news`;
CREATE TABLE `xt_news` (
  `news_id` int(4) NOT NULL AUTO_INCREMENT,
  `news_title` varchar(255) NOT NULL,
  `news_content` varchar(255) NOT NULL,
  `news_obj` varchar(40) DEFAULT NULL COMMENT '推送对象',
  `news_way` varchar(40) DEFAULT NULL COMMENT '推送方式',
  PRIMARY KEY (`news_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xt_news
-- ----------------------------
INSERT INTO `xt_news` VALUES ('1', 'ewqeq', 'qweq', null, null);
INSERT INTO `xt_news` VALUES ('2', '', '', null, null);
INSERT INTO `xt_news` VALUES ('3', 'ewqeqq', 'qweqq', null, null);
INSERT INTO `xt_news` VALUES ('4', '1', '1', null, null);
INSERT INTO `xt_news` VALUES ('5', '', '', null, null);
INSERT INTO `xt_news` VALUES ('6', '1', '1', '1', null);
INSERT INTO `xt_news` VALUES ('7', '2', '2', '1', null);
INSERT INTO `xt_news` VALUES ('8', '1', '1', '兼职,督导', null);
INSERT INTO `xt_news` VALUES ('9', '泪滴大嘎嘎', '嘎嘎嘎啊嘎嘎', '兼职,督导,BD,企业', '站内,APP,短信,微信');
INSERT INTO `xt_news` VALUES ('10', '萨达', '萨达啊', '兼职,BD', '站内,APP');

-- ----------------------------
-- Table structure for xt_user
-- ----------------------------
DROP TABLE IF EXISTS `xt_user`;
CREATE TABLE `xt_user` (
  `admin_id` tinyint(4) NOT NULL AUTO_INCREMENT COMMENT '管理员ID',
  `admin_username` varchar(20) NOT NULL COMMENT '管理员用户名',
  `admin_pwd` varchar(70) NOT NULL COMMENT '管理员密码',
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xt_user
-- ----------------------------
INSERT INTO `xt_user` VALUES ('5', 'admin', '21232f297a57a5a743894a0e4a801fc3');
