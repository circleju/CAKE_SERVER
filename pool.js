//引入mysql模块
const mysql=require('mysql');
//创建连接池对象
const  pool = mysql.createPool({
  // 数据库服务器的地址127.0.0.1
  host: '',
  // 数据库服务器的端口号
  port: 3306,
  // 数据库用户的用户名
  user: 'root',
  // 数据库用户的密码
  password: '',
  // 数据库名称xzqa
  database: '',
  // 编码方式
  charset: 'utf8',
  // 最大连接数
  connectionLimit: 20
});
module.exports=pool;