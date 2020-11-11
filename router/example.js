const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
const r=express.Router();
//get请求
r.get("/test",(req,res)=>{

});


module.exports=r;