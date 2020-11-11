// 加载Express模块
const express = require('express');
//引入路由器组件
//const userRouter=require('./router/user.js');
const bodyParser = require('body-parser')
// 加载CORS模块
const cors = require('cors');
// 创建WEB服务器实例
const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
// 将CORS作为Server的中间件
server.use(cors({
  origin: ['http://localhost:8080', 'http://127.0.0.1:8080']
}));
// 指定WEB服务器监听的端口
server.listen(3000);
// 路由组件注入
// app.use( '/user',userRouter );
