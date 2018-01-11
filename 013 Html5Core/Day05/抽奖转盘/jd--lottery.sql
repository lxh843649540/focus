SET NAMES UTF8;
USE jd;
CREATE TABLE lottery(
    lid INT PRIMARY KEY AUTO_INCREMENT,
    uid INT,
    level VARCHAR(8),
    lotteryTime BIGINT
);
INSERT INTO lottery VALUES(null,5,"三等奖",1326524323);
INSERT INTO lottery VALUES(null,5,"二等奖",1326524322);
INSERT INTO lottery VALUES(null,5,"幸运奖",1326524321);