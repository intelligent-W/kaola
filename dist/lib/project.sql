# Host: localhost  (Version: 5.5.53)
# Date: 2020-03-07 11:24:08
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "email"
#

DROP TABLE IF EXISTS `email`;
CREATE TABLE `email` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `mail` varchar(50) DEFAULT NULL,
  `password` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

#
# Data for table "email"
#

/*!40000 ALTER TABLE `email` DISABLE KEYS */;
INSERT INTO `email` VALUES (1,'qa@163.com','111111'),(2,'qw@163.com','222222'),(3,'za@163.com','000000'),(4,'lm@163.com','123012'),(5,'nh@163.com','333333'),(6,'yt@163.com','123456');
/*!40000 ALTER TABLE `email` ENABLE KEYS */;

#
# Structure for table "tel"
#

DROP TABLE IF EXISTS `tel`;
CREATE TABLE `tel` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `tel` int(11) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

#
# Data for table "tel"
#

/*!40000 ALTER TABLE `tel` DISABLE KEYS */;
INSERT INTO `tel` VALUES (1,8313210,'111111'),(2,8520123,'222222'),(3,8512021,'333333'),(4,8652102,'123456'),(5,8569852,'000000');
/*!40000 ALTER TABLE `tel` ENABLE KEYS */;
