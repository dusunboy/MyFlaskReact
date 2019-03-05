# Flask-Sqlacodegen 快速生成Model

## 生成表Model

``` bash
flask-sqlacodegen --outfile D:\Python\HnaCargoOfPythonWeb\www\backtend\model\employeeModel.py --table EMPLOYEE --flask mysql+pymysql://root:123456@127.0.0.1:13306/test2018 #window环境
#根目录下执行
flask-sqlacodegen --outfile /www/backtend/model/employeeModel.py --table EMPLOYEE --flask mysql+pymysql://root:123456@127.0.0.1:13306/test2018 #linux环境
```

## 参数介绍

``` txt
-h, --help            show this help message and exit
--version             print the version number and exit
--schema SCHEMA       load tables from an alternate schema
--tables TABLES       tables to process (comma-separated, default: all)
--noviews             ignore views
--noindexes           ignore indexes
--noconstraints       ignore constraints
--nojoined            don't autodetect joined table inheritance
--noinflect           don't try to convert tables names to singular form
--noclasses           don't generate classes, only tables
--outfile OUTFILE     file to write output to (default: stdout)
--nobackrefs          don't include backrefs
--flask               use Flask-SQLAlchemy columns
--ignore-cols IGNORE_COLS
                        Don't check foreign key constraints on specified
                        columns (comma-separated)
```
