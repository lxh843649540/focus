CREATE DATABASE sohu CHARSET=utf8;
USE sohu;
CREATE TABLE t_user(
 uid INT PRIMARY KEY AUTO_INCREMENT,
 uname VARCHAR(20),
 upwd   VARCHAR(32)
);
INSERT INTO t_user VALUES(null,'tom','123');
INSERT INTO t_user VALUES(null,'jerry','123');
INSERT INTO t_user VALUES(null,'james','123');
