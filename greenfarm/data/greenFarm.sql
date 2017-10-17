SET NAMES UTF8;
DROP DATABASE IF EXISTS greenfarm;
CREATE DATABASE greenfarm CHARSET=utf8;
USE greenfarm;


CREATE TABLE f_menu(
   fid   INT,
   fname VARCHAR(10) NOT NULL DEFAULT '',
   fsimg VARCHAR(100) NOT NULL DEFAULT '',
   fbimg VARCHAR(100) NOT NULL DEFAULT '',
   flimg VARCHAR(100) NOT NULL DEFAULT ''
);
INSERT INTO f_menu VALUES(1,'时令蔬菜','vegetables-20x20.png','vertical-img1.jpg','banner-1.jpg');
INSERT INTO f_menu VALUES(2,'新鲜水果','fruit-20x20.png','vertical-img2.jpg','banner-3.jpg');
INSERT INTO f_menu VALUES(3,'粮油米面','liangyou-20x20.png','vertical-img3.jpg','banner-2.jpg');
INSERT INTO f_menu VALUES(4,'畜牧水产','xia-20x20.png','vertical-img4.jpg','banner-1.jpg');


CREATE TABLE f_detail(
   fdid   INT PRIMARY KEY AUTO_INCREMENT,
   fid    INT,
   fdimg  VARCHAR(100) NOT NULL DEFAULT '',
   fdname VARCHAR(50) NOT NULL DEFAULT '',
   nprice DOUBLE(10,2),
   oprice DOUBLE(10,2)
);
INSERT INTO f_detail VALUES
(null,1,'product-6-200x200.jpg','大东北的优质芹菜',499.00,699.00),
(null,1,'product-1-200x200.jpg','个人种植基地优质西红柿',178.00,288.00),
(null,1,'product-9-200x200.jpg','东升农场 无公害 新鲜蔬菜刺青',899.00,''),
(null,1,'product-7-200x200.jpg','东升品质保证蔬菜 无公害西兰',2500.00,''),
(null,1,'product-2-200x200.jpg','东升品质保证广东绿色菜心 新',120.00,233.00),
(null,1,'product-5-200x200.jpg','老一生鲜】 新鲜迷你小萝卜 小红萝',99.00,122.00),
(null,1,'product-8-1-200x200.jpg','新鲜胡萝卜 青菜萝卜东升品质保证 胡',190.00,220.00),
(null,1,'product-10-200x200.jpg','青城名品小红辣椒野生辣椒',2000.00,''),
(null,2,'product-12-200x200.jpg','新鲜牛奶草莓',499.00,699.00),
(null,2,'product-11-200x200.jpg','水口红 攀枝花石榴 新鲜石榴5斤新鲜水',99.00,220.00),
(null,2,'product-17-200x200.jpg','清谷田园水果夏季草莓1.2斤装免洗新鲜',1500.00,2300.00),
(null,2,'product-13-200x200.jpg','百宝源 智利进口青苹果 青蛇果水果',5999.00,''),
(null,2,'product-14-200x200.jpg','智利绿心奇异果进口猕猴桃新鲜绿',99.00,199.00),
(null,2,'product-15-200x200.jpg','新鲜香蕉 香蕉 云南新鲜水果 3斤 非海',1899.00,2399.00),
(null,2,'product-16-200x200.jpg','悠乐果 南非进口柑橘4斤16个左右 新鲜',2999.00,3999.00),
(null,2,'product-18-200x200.jpg','乡典安岳新鲜水果黄柠檬5斤装17包',3000.00,3450.00),
(null,3,'product-19-200x200.jpg','畲之坊葵花橄榄油5L食用油5l调和油',460.00,700.00),
(null,3,'product-20-200x200.jpg','【买1送1同款】第一坊花生油 清真食用',109.00,299.00),
(null,3,'product-23-200x200.jpg','唯臻农场东北大米黑龙江五常长粒香5K',499.00,599.00),
(null,3,'product-22-200x200.jpg','五常大米稻花香米5kg 大米新米 有机大米',99.00,180.00),
(null,3,'product-21-200x200.jpg','【新米】福临门金典东北大米5KG*2袋',99.00,140.00),
(null,3,'product-25-200x200.jpg','莫利4#直条形意大利面条 进口意粉意面',78.00,125.00),
(null,3,'product-24-200x200.jpg','陈克明热干面挂面凉拌面条热干面武汉',555.00,''),
(null,3,'product-26-200x200.jpg','林记手工挂面武汉热干面面条 碱面 凉面',78.00,120.00),
(null,4,'product-34-200x200.jpg','4斤包邮 小龙虾鲜活500g 活虾批发456',40.00,''),
(null,4,'product-27-200x200.jpg','大连新鲜海鲜活鱼 鲜活牙片鱼',220.00,300.00),
(null,4,'product-1-200x200.jpg','2只土鸡农家散养小公鸡大公鸡未打鸣',99.00,170.00),
(null,4,'product-28-200x200.jpg','养殖基地优质小猪活猪新鲜',200.00,344.00),
(null,4,'product-29-200x200.jpg','琼彬虾皮 淡干小虾米虾仁 北海虾仔',300.00,''),
(null,4,'product-33-200x200.jpg','大名养殖基地鲜活小羊崽',1499.00,1600.00),
(null,4,'product-31-200x200.jpg','野生养殖基地纯种牛肉',200.00,''),
(null,4,'product-32-200x200.jpg','大河现打野生鱼新鲜十足',799.00,1200.00);


CREATE TABLE scrollbanner(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	simg VARCHAR(100) NOT NULL DEFAULT ''
);
INSERT INTO scrollbanner VALUES(null,'carousel-ads-1-585x800.png');
INSERT INTO scrollbanner VALUES(null,'carousel-ads-2-585x800.png');
INSERT INTO scrollbanner VALUES(null,'carousel-ads-3-585x800.png');
INSERT INTO scrollbanner VALUES(null,'carousel-ads-4-585x800.png');
INSERT INTO scrollbanner VALUES(null,'carousel-ads-5-585x800.png');
INSERT INTO scrollbanner VALUES(null,'carousel-ads-6-585x800.png');


CREATE TABLE users(
    uid   INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(16) NOT NULL DEFAULT '',
    upwd  VARCHAR(32) NOT NULL DEFAULT '',
    utime DATETIME NOT NULL DEFAULT 0
);