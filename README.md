# Flask + Nginx + React + Uwsgi 部署环境

## 安装源码

* [使用脚手架生成项目**fw-cli**](https://github.com/dusunboy/fw-cli)
* 可下载项目直接使用

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

[**前端React项目**](https://github.com/dusunboy/MyFlaskReact/blob/master/www/frontend/README.md)

[**后端Python项目**](https://github.com/dusunboy/MyFlaskReact/blob/master/www/backtend/README.md)
