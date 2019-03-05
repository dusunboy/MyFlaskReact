from flask import jsonify


def object2Json(status, object, msg):
    '''
        object转化为字符串
    '''
    if isinstance(object, list):
        fields = []
        for item in object:
            record = {}
            record = props(item)
            fields.append(record)
        return parseData(status, fields, msg)
    elif isinstance(object, dict):
        return parseData(status, object, msg)
    else:
        record = {}
        record = props(object)
        return parseData(status, record, msg)


def props(obj):
    '''
        object转化为dict
    '''
    pr = {}
    for name in dir(obj):
        value = getattr(obj, name)
        # 过滤无用的属性方法
        if not name.startswith('__') and not name.startswith(
                '_') and not callable(value) and not hasattr(
                    obj.__getattribute__(name),
                    '__call__') and name != 'metadata' and name != 'query':
            pr[name] = value
    return pr


def parseData(status, data, msg):
    json = {'status': status, 'data': data, 'msg': msg}
    return jsonify(json)
