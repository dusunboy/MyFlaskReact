from flask import Blueprint, request

from main import db
from model.roleModel import Role
from utils import jsonUtil
import random
from sqlalchemy.exc import InvalidRequestError

loginBlueprint = Blueprint('loginBlueprint', __name__)


@loginBlueprint.route("/add", methods=['POST'])
def login():
    test_role1 = Role()
    test_role1.name = 'supervisol'
    test_role1.id = 10
    test_role1.name_cn = '超超超超级管理员哦'
    db.session.add(test_role1)
    db.session.commit()
    return "用户登录"


@loginBlueprint.route("/info", methods=['POST'])
def register():
    try:
        list = Role.query.all()
        db.session.commit()
        return jsonUtil.object2Json(1, list, '')
    except InvalidRequestError as e:
        db.session.rollback()
        return jsonUtil.object2Json(0, e, '')
    except Exception as e:
        return jsonUtil.object2Json(0, e, '')


@loginBlueprint.route("/update", methods=['POST'])
def update():
    try:
        item = Role.query.first()
        db.session.commit()
        return jsonUtil.object2Json(1, item, '')
    except InvalidRequestError as e:
        db.session.rollback()
        return jsonUtil.object2Json(0, e, '')
    except Exception as e:
        return jsonUtil.object2Json(0, e, '')


@loginBlueprint.route("/randoms", methods=['POST'])
def randoms():
    response = {'randomNumber': random.randint(1, 100)}
    return jsonUtil.parseData(1, response, '')
