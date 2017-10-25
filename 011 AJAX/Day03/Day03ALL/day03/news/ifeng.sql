USE jd;
CREATE TABLE t_news(
nid     INT PRIMARY KEY AUTO_INCREMENT,
title   VARCHAR(20),
content VARCHAR(500),
count   BIGINT,
pubtime DATETIME
);