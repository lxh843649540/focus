SET NAMES UTF8;
DROP DATABASE IF EXISTS dj;
CREATE DATABASE dj CHARSET=UTF8;
USE dj;
CREATE TABLE dj_dept(
    did INT PRIMARY KEY AUTO_INCREMENT,
    dname VARCHAR(20) NOT NULL DEFAULT "",
    loc   VARCHAR(100) NOT NULL DEFAULt ""
);
INSERT INTO dj_dept VALUES(null,'测量组','宁德');
INSERT INTO dj_dept VALUES(null,'工程部','福州');
INSERT INTO dj_dept VALUES(null,'实验室','厦门');
CREATE TABLE dj_emp(
    eid INT PRIMARY KEY AUTO_INCREMENT,
    ename VARCHAR(20)  NOT NULL DEFAULT "",
    alary  DECIMAL(10,2) NOT NULL DEFAULt 0,
    hireDate BIGINT NOT NULL DEFAULt 0,
    deptId  INT
);
INSERT INTO dj_emp VALUES(null,'张三',10000,now(),1);
INSERT INTO dj_emp VALUES(null,'李四',11000,now(),2);
INSERT INTO dj_emp VALUES(null,'王五',12000,now(),1);
INSERT INTO dj_emp VALUES(null,'赵六',13000,now(),3);
INSERT INTO dj_emp VALUES(null,'邓七',14000,now(),null);
CREATE TABLE dj_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(20)  NOT NULL DEFAULT "",
    upwd  VARCHAR(20)  NOT NULL DEFAULT ""
);