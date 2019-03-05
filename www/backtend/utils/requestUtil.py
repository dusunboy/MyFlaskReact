from loguru import logger


def check(request):
    '''
        校验请求过来的数据
    '''
    logger.debug(request.url)
    logger.debug(request.headers)
    logger.debug(request.form)
