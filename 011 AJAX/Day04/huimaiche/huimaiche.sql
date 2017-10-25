CREATE DATABASE huimaiche CHARSET=utf8;
USE huimaiche;
CREATE TABLE t_car(
 cid INT PRIMARY KEY AUTO_INCREMENT,
 cname VARCHAR(20),
 pic   VARCHAR(20),
 price DOUBLE(10,2),
 buycount INT
);
INSERT INTO t_car VALUES(null,'qq1','1.jpg',10000,0);
INSERT INTO t_car VALUES(null,'qq2','2.jpg',11000,0);
INSERT INTO t_car VALUES(null,'qq3','3.jpg',12000,0);
INSERT INTO t_car VALUES(null,'qq4','4.jpg',13000,0);
INSERT INTO t_car VALUES(null,'qq5','5.jpg',14000,0);
INSERT INTO t_car VALUES(null,'qq6','6.jpg',15000,0);
INSERT INTO t_car VALUES(null,'qq7','7.jpg',16000,0);
INSERT INTO t_car VALUES(null,'qq8','8.jpg',17000,0);

