CREATE DATABASE weiduomei CHARSET=utf8;
USE weiduomei;
CREATE TABLE t_cake(
 id      INT PRIMARY KEY AUTO_INCREMENT,
 name    VARCHAR(20) NOT NULL DEFAULT '',
 pic     VARCHAR(20) NOT NULL DEFAULT '',
 price   DOUBLE(10,2) NOT NULL DEFAULT 0
);

CREATE TABLE t_cake_type(
 id      INT PRIMARY KEY AUTO_INCREMENT,
 name    VARCHAR(20) NOT NULL DEFAULT ''
);
INSERT INTO t_cake_type VALUES(10,'巧克力蛋糕');
INSERT INTO t_cake_type VALUES(20,'水果蛋糕');
INSERT INTO t_cake_type VALUES(30,'芝士蛋糕');
