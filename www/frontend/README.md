# 前端React项目结构(umi + dva)

``` txt
├── dist                         // 输出目录
├── mock                         // 本地模拟数据
├── node_modules                 // 依赖模块
├── src                          // 源码目录
│   ├── assets                   // 公共文件，编译时copy至dist目录
│   ├── components               // 全局组件
│   ├── config                   // 项目配置
│   ├── layouts                  // 全局布局
│   ├── models                   // 全局dva model
│   ├── pages                    // 页面目录，里面的文件即路由
│   ├── services                 // 服务类目录
│   └── utils                    // 工具类目录
├── .env                         // 环境变量文件
├── .umirc.js                    // 配置文件
├── .umirc.local.js              // 本地配置文件
└── README.md                    // 项目说明
```

## 更新新版本UmiJs

frontend目录下

``` bash
npm i umi
```
