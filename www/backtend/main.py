import configparser

from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from loguru import logger
from flask_cors import CORS
from utils import jsonUtil
from utils import requestUtil

app = Flask(__name__)
# 跨域请求
cors = CORS(app, resources={"/api/*": {"origins": "*"}})
config = configparser.ConfigParser()
config.read('/www/backtend/config/my.conf')
# 日志配置
logger.add("/log/backtend.log", rotation="500 MB")
# 数据库配置
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://' + config[
    'database']['sqlalchemy_database_uri']
db = SQLAlchemy(app)

# 路由配置
from api.login import loginBlueprint
app.register_blueprint(loginBlueprint, url_prefix='/api/login')


@app.route("/")
def index():
    return ""


@app.before_request
def before_request():
    # 请求前数据验证
    requestUtil.check(request)


@app.errorhandler(404)
def notFound(error):
    '''
      404错误
    '''
    return jsonUtil.object2Json(0, '', "404 page not found")


@app.errorhandler(500)
def serverError(error):
    '''
      500错误
    '''
    logger.debug(error)
    return jsonUtil.object2Json(0, '', "server error 500")


@app.errorhandler(400)
def badRequest(error):
    '''
      400请求无效
    '''
    return jsonUtil.object2Json(0, '', "400 bad request")


@app.errorhandler(405)
def methodNotAllow(error):
    '''
      405请求方法不允许
    '''
    return jsonUtil.object2Json(0, '', "405 method not allowed")


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
