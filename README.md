# Flask + Nginx + Vue + Uwsgi 部署环境

## 安装步骤

安装前准备Docker Compose环境以及Npm环境

* 镜像环境构建

根目录下执行命令

``` bash
docker-compose build #自动构建镜像
docker-compose up #更新的compose文件构建应用程序
```

* React安装依赖模块

/www/frontend目录下执行

``` bash
npm install #安装依赖模块
npm run build #生成生产环境 输出目录/www/frontend/dist
```

* 验证环境部署成功

前端访问:127.0.0.1:10081
后端访问:127.0.0.1:10080

## 目录介绍

``` txt
├── flask                       // flask Docker容器脚本
├── log                         // 服务器日志
├── mysql                       // 数据库目录
├── www                         // 站点目录
│   ├── frontend                // 前端项目
│   └── backtend                // 后端项目
├── docker-compose.yml          // 多容器启动脚本
└── README.md                   // 项目说明
```

[**前端React项目**](http://10.20.143.38:8090/hnacargo/hnacargoofpythonweb/blob/master/www/frontend/README.md)

[**后端Python项目**](http://10.20.143.38:8090/hnacargo/hnacargoofpythonweb/blob/master/www/backtend/README.md)

## 开发规范

[**Python编码规范**](http://10.20.143.38:8090/hnacargo/hnacargoofpythonweb/wikis/Python%E7%BC%96%E7%A0%81%E8%A7%84%E8%8C%83)

[**ES6 编码规范**](http://10.20.143.38:8090/hnacargo/hnacargoofpythonweb/wikis/ES6-%E7%BC%96%E7%A0%81%E8%A7%84%E8%8C%83)

[**React/JSX 编码规范**](http://10.20.143.38:8090/hnacargo/hnacargoofpythonweb/wikis/React-JSX-%E7%BC%96%E7%A0%81%E8%A7%84%E8%8C%83)