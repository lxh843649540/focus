SET NAMES UTF8;
DROP DATABASE IF EXISTS dangdang;
CREATE DATABASE dangdang CHARSET=utf8;
USE dangdang;
CREATE TABLE dd_category(
id      INT,
name    VARCHAR(20),
bcount  INT
);
INSERT INTO dd_category VALUES(100,'计算机类',3);
INSERT INTO dd_category VALUES(200,'历史类',2);
INSERT INTO dd_category VALUES(300,'美食类',1);

CREATE TABLE dd_book(
id      INT,
title   VARCHAR(20),
price   DOUBLE(10,2),
pic     VARCHAR(100),
pubdate DATETIME,
did     INT
);
INSERT INTO dd_book VALUES(1,'计算机1',100.22,'1.jpg',now(),100);
INSERT INTO dd_book VALUES(2,'计算机2',100.11,'1.jpg',now(),100);
INSERT INTO dd_book VALUES(3,'计算机3',100.02,'1.jpg',now(),100);
INSERT INTO dd_book VALUES(4,'历史1',101.41,'1.jpg',now(),200);
INSERT INTO dd_book VALUES(5,'历史2',101.23,'1.jpg',now(),200);
INSERT INTO dd_book VALUES(6,'美食',101.74,'1.jpg',now(),300);