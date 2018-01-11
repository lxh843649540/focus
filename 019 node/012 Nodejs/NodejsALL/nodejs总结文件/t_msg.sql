SET NAMES UTF8;
DROP DATABASE IF EXISTS bbs;
CREATE DATABASE bbs CHARSET=UTF8;
USE bbs;

CREATE TABLE t_msg(
  mid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  content varchar(200),
  pubtime datetime
);
insert into t_msg values(
 null,'qd','hi1',now()
),(
 null,'qd','hi2',now()
),(
 null,'qd','hi3',now()
);
