DROP DATABASE IF EXISTS taobao;
CREATE DATABASE taobao CHARSET=utf8;
USE taobao;
CREATE TABLE t_product(
id      INT,
name    VARCHAR(20),
pic     VARCHAR(20),
regTime DATETIME,
price   DOUBLE(10,2),
did     INT
);
CREATE TABLE t_ptype(
id INT,
name   VARCHAR(20),
pcount INT
);
INSERT INTO t_ptype VALUES(1,'book',3);
INSERT INTO t_ptype VALUES(2,'dvd',3);
INSERT INTO t_ptype VALUES(3,'cd',1);

INSERT INTO t_product VALUES(1,'b1','1.jpg',now(),100,1);
INSERT INTO t_product VALUES(2,'b2','1.jpg',now(),100,1);
INSERT INTO t_product VALUES(3,'b3','1.jpg',now(),100,1);

INSERT INTO t_product VALUES(4,'dvd1','1.jpg',now(),100,2);
INSERT INTO t_product VALUES(5,'dvd2','1.jpg',now(),100,2);
INSERT INTO t_product VALUES(6,'dvd3','1.jpg',now(),100,2);

INSERT INTO t_product VALUES(7,'cd','1.jpg',now(),100,3);
