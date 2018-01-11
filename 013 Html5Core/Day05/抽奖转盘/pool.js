/***
 *负责创建数据库连接池
 */
const mysql = require('mysql');
var pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'jd',
  connectionLimit: 5
});
module.exports = pool;