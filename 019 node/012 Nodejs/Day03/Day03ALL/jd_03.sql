#15:00:--15:05
#*1:设置当前操作窗口为utf8编码
#*2:删除当前库jd
#*3:创建库jd并且指定编码为utf8
#*4:进入到jd库中
SET NAMES UTF8;
DROP DATABASE IF EXISTS jd;
CREATE DATABASE jd CHARSET=UTF8;
USE jd;
#*5:创建表部门信息表 jd_dept
#  did   部门编号
#  dname 部门名称
#  loc   部门位置
CREATE TABLE jd_dept(
  did INT PRIMARY KEY AUTO_INCREMENT,
  dname VARCHAR(20) NOT NULL DEFAULT '',
  loc   VARCHAR(100) NOT NULL DEFAULT ''
);
INSERT INTO jd_dept VALUES(null,'市场部','北京');
INSERT INTO jd_dept VALUES(null,'研发部','上海');
INSERT INTO jd_dept VALUES(null,'运营部','广州');

#如果数据量超过1w条件不要用
#INSERT INTO jd_dept VALUES
#(null,'市场部','北京'),
#(null,'研发部','上海'),
#(null,'运营部','广州');
#6:添加三条部门记录
#7:创建员工表 jd_emp 
#  eid   ename salary[工资] hiredate(入职时间)
#  deptid(所属部门)
CREATE TABLE jd_emp(
  eid INT PRIMARY KEY AUTO_INCREMENT,
  ename VARCHAR(20) NOT NULL DEFAULT '',
  salary DECIMAL(10,2) NOT NULL DEFAULT 0,
  hiredate DATETIME NOT NULL DEFAULT 0,
  deptid INT 
);
#8:添加5条记录
INSERT INTO jd_emp VALUES(null,'tom1',10000,now(),1);
INSERT INTO jd_emp VALUES(null,'tom2',11000,now(),2);
INSERT INTO jd_emp VALUES(null,'tom3',12000,now(),1);
INSERT INTO jd_emp VALUES(null,'tom4',13000,now(),1);
INSERT INTO jd_emp VALUES(null,'tom5',14000,now(),NULL);


#查询jd_emp表,员工编号和员工名称
SELECT eid,ename FROM jd_emp;
#查询jd_emp表,所有列
SELECT * FROM jd_emp;
#查询jd_emp表,给列取别名
SELECT eid AS empnum FROM jd_emp;
#查询jd_emp表,部门编号
SELECT deptid FROM jd_emp;
#查询jd_emp表,部门编号(去重)
SELECT DISTINCT deptid FROM jd_emp;
#查询jd_emp表,薪水涨20%
SELECT salary,salary*1.2 FROM jd_emp;
#条件判断
#相等  大小等于 不相等 在某个范围之间 在
#查询jd_emp表,条件雇员编号等于5
SELECT * FROM jd_emp WHERE eid = 5;
#查询jd_emp表,条件雇员工资大于等于11000
SELECT * FROM jd_emp WHERE salary >=11000;
#查询jd_emp表,条件雇员部门编号不等于1
SELECT * FROM jd_emp WHERE deptid != 1;
#查询jd_emp表,条件雇员工资 10000-12000 之间
SELECT * FROM jd_emp WHERE salary>=10000 AND 
                           salary<=12000;
SELECT * FROM jd_emp WHERE 
   salary BETWEEN 10000 AND 12000;
#查询jd_emp表,条件雇员部门编号是 1或者2
SELECT * FROM jd_emp WHERE 
   deptid = 1 OR deptid = 2;
SELECT * FROM jd_emp WHERE 
   deptid  IN (1,2);

#查询jd_emp表,条件雇员工资大于10000并且部门编号
 大于1
SELECT * FROM jd_emp
WHERE salary > 10000 AND deptid >1;
#查询jd_emp表,条件雇员工资大于10000或者部门编号
 大于1
SELECT * FROM jd_emp
WHERE salary > 10000 OR deptid >1;
#查询jd_emp表,条件雇员部门编号不是2
SELECT * FROM jd_emp
WHERE deptid != 2;
#查询jd_emp表,条件雇员名称 t开头
SELECT * FROM jd_emp
WHERE ename LIKE 't%';
#查询jd_emp表,条件工资升序排列
SELECT ename,salary FROM jd_emp
ORDER BY salary;
#查询jd_emp表,条件工资降序排列
SELECT ename,salary FROM jd_emp
ORDER BY salary DESC;
#查询jd_emp表,条件工资升序,部门编号降序排列
SELECT ename,salary,deptid FROM jd_emp
ORDER BY salary,deptid DESC;

#查询jd_emp表,部门(分组)计算工资总和
SELECT deptid,sum(salary) FROM jd_emp
GROUP BY deptid;

#查询jd_emp表,部门分组计算工资最高工资
SELECT deptid,max(salary) FROM jd_emp
GROUP BY deptid;
#查询jd_emp表,部门分组计算工资最低工资
SELECT deptid,min(salary) FROM jd_emp
GROUP BY deptid;
#查询属于'研发部'所有雇员信息
SELECT did FROM jd_dept WHERE dname = '研发部';

SELECT * FROM jd_emp 
WHERE deptid = (SELECT did FROM jd_dept
WHERE dname = '研发部');

#查询雇员名称，雇员工资，部门名称
简洁
1:表名 from jd_emp   jd_dept;
2:别名           e   d 
3:条件 e.deptid = d.did;

SELECT e.ename,e.salary,d.dname
FROM jd_emp e,jd_dept d
WHERE e.deptid = d.did;

特殊情况
左连接:16:51---16:52 (了解)
SELECT e.ename,e.salary,d.dname
FROM jd_emp e LEFT JOIN jd_dept d
ON e.deptid = d.did;
#变化: ON--->WHERE 
#(表名雇员)LEFT JOIN(表名部名)
#查询以左侧表为准,
#即使(不满足条件)也要查询出来
右边接:
SELECT e.ename,e.salary,d.dname
FROM jd_emp e RIGHT JOIN jd_dept d
ON e.deptid = d.did;







#存储过程:mysql数据库内部一种编程序语言
#函数
#通常情况下程序功能完全可以用sql完成.
#SELECT 过度复杂查询(SQL)
#100 张表 10-20
#1-2   3-4  5-6  7-8 9-10
#     1          1   1
#           1  1
#	    1
#
#创建程序 
delimiter //
CREATE PROCEDURE insertuser1(
  IN uname VARCHAR(32),
  IN upwd  VARCHAR(32)
)
BEGIN
  INSERT INTO jd_user VALUES(null,uname,upwd);
END //
delimiter ;
#调用程序
call insertuser1('james','1234567');
call insertuser1('tom','1234567');
#
CREATE TABLE jd_user(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(20) NOT NULL DEFAULT '',
  upwd  VARCHAR(100) NOT NULL DEFAULT ''
);
















