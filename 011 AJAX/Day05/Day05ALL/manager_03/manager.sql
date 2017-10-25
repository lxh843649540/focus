CREATE DATABASE manager CHARSET=utf8;
USE manager;
CREATE TABLE t_user(
 uid INT PRIMARY KEY AUTO_INCREMENT,
 email  VARCHAR(50),
 upwd   VARCHAR(32),
 regtime DATETIME,
 lasttime DATETIME
);
INSERT INTO t_user VALUES(null,'tom1@tom.cn','123',now(),now());
INSERT INTO t_user VALUES(null,'tom2@tom.cn','123',now(),now());
INSERT INTO t_user VALUES(null,'tom3@tom.cn','123',now(),now());
