SET NAMES UTF8;
DROP DATABASE IF EXISTS jd;
CREATE DATABASE jd CHARSET=UTF8;
USE jd;

CREATE TABLE jd_user(
  uid   INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25) NOT NULL DEFAULT '',
  upwd  VARCHAR(32) NOT NULL DEFAULT ''
);
INSERT INTO jd_user VALUES(5,'qiangdong','123456');
INSERT INTO jd_user VALUES(6,'naicha','123456');

CREATE TABLE jd_product(
   pid   INT PRIMARY KEY AUTO_INCREMENT,
   pname VARCHAR(50) NOT NULL DEFAULT '',
   price DOUBLE(10,2) NOT NULL DEFAULT 0,
   pic   VARCHAR(100) NOT NULL DEFAULT ''
);
INSERT INTO jd_product VALUES
(1,'小米 Note 全网通 白色 移动联通电信4G手机 双卡双待',1199.00,'images/phone/phone_01.jpg'),
(2,'Apple iPhone 6s (A1700) 16G 玫瑰金色 移动联通电信4G手机',3999.00,'images/phone/phone_02.jpg'),
(3,'PPO R9 4GB+64GB内存版 玫瑰金 全网通4G手机 双卡',2499.00,'images/phone/phone_03.jpg'),
(4,'小米 红米 3S 高配全网通 3GB内存 32GB ROM 经典金色',899.00,'images/phone/phone_04.jpg'),
(5,'金立M6 Plus 香槟金 4GB+64GB版 移动联通电信4G手机 双卡双待',2999.00,'images/phone/phone_05.jpg'),
(6,'Apple iPhone 6s Plus (A1699) 64G 玫瑰金色 移动联通电信4G手机',5799.00,'images/phone/phone_06.jpg'),
(7,'vivo X7 全网通 4GB+64GB 移动联通电信4G手机 双卡双待',2499.00,'images/phone/phone_07.png'),
(8,'小米 红米Note3 高配全网通版 3GB+32GB 金色 移动联通电信4G手机',1099.00,'images/phone/phone_08.jpg'),
(9,'【六个月碎屏换新】荣耀8 4GB+32GB 全网通版 魅海蓝 双镜头，双2.5D玻璃',2499.00,'images/phone/phone_09.jpg'),
(10,'荣耀7 (PLK-AL10) 3GB+64GB内存版 荣耀金 移动联通电信4G手机',1799.00,'images/phone/phone_10.jpg'),
(11,'荣耀 V8 全网通 高配版 4GB+64GB 香槟金 移动联通电信4G手机 双卡双待双通',2799.00,'images/phone/phone_11.jpg'),
(12,'荣耀 畅玩5X 3GB内存版 落日金 移动联通电信4G手机 双卡双待 炫酷指纹',1099.00,'images/phone/phone_12.jpg'),
(13,'Apple iPhone 6 (A1586) 64GB 金色 移动联通电信4G手机',4199.00,'images/phone/phone_13.jpg'),
(14,'TCL 初现 750 雅金 移动联通电信4G手机 双卡双待 后置1600万摄像，美姿拍照！',4199.00,'images/phone/phone_14.jpg'),
(15,'华为 P9 plus 64GB 琥珀灰 移动联通电信4G手机 双卡双待',3988.00,'images/phone/phone_15.jpg'),
(16,'Apple iPhone 5s (A1530) 16GB 金色 移动联通4G手机',2198.00,'images/phone/phone_16.jpg'),
(17,'vivo X7Plus 全网通 4GB+64GB 移动联通电信4G手机 双卡双待 金色',2798.00,'images/phone/phone_17.jpg'),
(18,'华为 畅享5S 金色 移动联通电信4G手机 双卡双待 10万好评手机！',1099.00,'images/phone/phone_18.jpg'),
(19,'Apple iPhone 6 Plus (A1524) 16GB 银色 移动联通电信4G手机',3899.00,'images/phone/phone_19.jpg'),
(20,'华为 麦芒5 全网通 4GB+64GB版 香槟金 移动联通电信4G手机 双卡双待',2599.00,'images/phone/phone_20.jpg'),
(21,'小米5 全网通 标准版 3GB内存 32GB ROM 白色 移动联通电信4G手机',1799.00,'images/phone/phone_21.jpg'),
(22,'华为 P9 全网通 3GB+32GB版 流光金 移动联通电信4G手机 双卡双待 麒麟955',3188.00,'images/phone/phone_22.jpg'),
(23,'金立 金钢 标准版 爵士金 移动联通电信4G手机 双卡双待 4G全网通',999.00,'images/phone/phone_23.jpg'),
(24,'360手机 N4 全网通 4GB+32GB 阳光白 移动联通电信4G手机 双卡双待',999.00,'images/phone/phone_24.jpg'),
(25,'小米 Max 全网通 标准版 3GB内存 32GB ROM 金色 移动联通电信4G手机',1299.00, 'images/phone/phone_25.jpg'),
(26,'华为 P9 全网通 4GB+64GB版 金色 移动联通电信4G手机 双卡双待 后置1200万',3688.00, 'images/phone/phone_26.jpg'),
(27,'乐视（Le）乐2（X620）32GB 原力金 移动联通电信4G手机 双卡双待 5.5英寸',988.00,'images/phone/phone_27.jpg'),
(28,'努比亚(nubia)【3+64GB】小牛5 Z11mini 黑色 移动联通电信4G手机',1299.00, 'images/phone/phone_28.jpg'),
(29,'乐视（Le）乐2Pro 32GB 金色 移动联通电信4G手机 双卡双待 5.5英寸In-Cell屏',1399.00,'images/phone/phone_29.jpg'),
(30,'华为 Mate 8 3GB+32GB版 玫瑰金 移动联通电信4G手机 双卡双待 麒麟950芯片',2799.00, 'images/phone/phone_30.jpg'),
(31,'小米 4c 标准版 全网通 白色 移动联通电信4G手机 双卡双待 高通骁龙808畅销机',799.00,'images/phone/phone_31.jpg'),
(32,'vivo X7 全网通 4GB+64GB 移动联通电信4G手机 双卡双待 星空灰 vivox7',2498.00, 'images/phone/phone_32.jpg'),
(33,'联想 乐檬3 （K32C36）16GB 金色 移动4G手机 双卡双待 刀锋致敬经典',599.00,'images/phone/phone_33.jpg'),
(34,'华为 荣耀 畅玩4X 晨曦金 移动联通电信4G手机 双卡双待 5.5英寸大屏看片利器',749.00,'images/phone/phone_34.jpg'),
(35,'三星 Galaxy On5（G5500）金色 移动联通4G手机 真皮质感后盖，2600毫安大容量',699.00,'images/phone/phone_35.jpg'),
(36,'OPPO A37 2GB+16GB内存版 玫瑰金 全网通4G手机 双卡双待 【赠品任你选】',1299.00,'images/phone/phone_36.jpg');

CREATE TABLE jd_order(
  oid INT PRIMARY KEY AUTO_INCREMENT,
  rcvName VARCHAR(32),
  price DECIMAL(10,2),
  payment TINYINT,  /*1-在线支付 2-货到付款 3-京东白条*/
  orderTime BIGINT,
  status TINYINT,   /*1-等待付款  2-备货中  3-运输中  4-已签收*/
  userId INT
);
INSERT INTO jd_order VALUES
(913431801,'强东爸',1500, 1, 1401234567890,1, 5),
(NULL,'强东妈',100, 2, 1411234567891,2, 5),
(NULL,'强东爷',1100, 3, 1421234567892,3, 5),
(NULL,'强东奶',500, 1, 1431234567893,4, 5),
(NULL,'强东哥',300, 2, 1441234567894,1, 5),
(NULL,'强东弟',1500, 1, 1451234567895,2, 5),
(NULL,'强东',1500, 1, 1461234567890,1, 5),
(NULL,'强东',200, 3, 1471234567890,4, 5),
(NULL,'强东爸',1500, 3, 1481234567890,1, 5),
(NULL,'强东',300, 3, 1491234567890,3, 5),
(NULL,'强东妈',1500, 1, 1401234567890,1, 5),
(NULL,'强东',400, 1, 1411234567890,1, 5),
(NULL,'强东奶',1500, 1, 1421234567890,1, 5),
(NULL,'强东',400, 2, 1431234567890,3, 5),
(NULL,'强东姑',1500, 1, 1441234567890,2, 5),
(NULL,'强东',900, 2, 1451234567890,2, 5),
(NULL,'强东',800, 1, 1461234567890,1, 5),
(NULL,'强东叔',1500, 1, 1471234567890,1, 5),
(NULL,'强东爷',100, 1, 1491234567890,1, 5),
(NULL,'强东',200, 3, 1401234567890,4, 5),
(NULL,'强东舅',1500, 2, 1431234567890,2, 5),
(NULL,'强东妈',300, 2, 1421234567890,3, 5),
(NULL,'强东爸',500, 1, 1451234567890,1, 5);

CREATE TABLE jd_order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  orderId INT,
  productId INT,
  count INT
);
INSERT INTO jd_order_detail VALUES
(NULL, 913431801, 10, 1),
(NULL, 913431801, 15, 3),
(NULL, 913431802, 3, 2),
(NULL, 913431803, 5, 1),
(NULL, 913431803, 7, 2),
(NULL, 913431803, 13, 4),
(NULL, 913431804, 22, 2),
(NULL, 913431804, 15, 3),
(NULL, 913431805, 9, 1),
(NULL, 913431806, 31, 2),
(NULL, 913431806, 32, 1),
(NULL, 913431807, 18, 1),
(NULL, 913431808, 19, 1),
(NULL, 913431809, 12, 2),
(NULL, 913431809, 16, 3),
(NULL, 913431810, 10, 1),
(NULL, 913431810, 12, 2),
(NULL, 913431811, 25, 2),
(NULL, 913431812, 13, 1),
(NULL, 913431813, 15, 3),
(NULL, 913431814, 8, 5),
(NULL, 913431815, 17, 3),
(NULL, 913431816, 11, 1),
(NULL, 913431817, 18, 1),
(NULL, 913431818, 20, 2),
(NULL, 913431819, 22, 3),
(NULL, 913431819, 17, 1),
(NULL, 913431820, 10, 2),
(NULL, 913431821, 18, 1),
(NULL, 913431821, 19, 1),
(NULL, 913431821, 30, 1),
(NULL, 913431822, 15, 1),
(NULL, 913431823, 18, 1),
(NULL, 913431823, 19, 1);
