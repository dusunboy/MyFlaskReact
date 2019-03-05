FROM alpine:3.8

# Copy python requirements file
# COPY requirements.txt /tmp/requirements.txt
# 替换阿里云的源
RUN echo "http://mirrors.aliyun.com/alpine/latest-stable/main/" > /etc/apk/repositories
RUN echo "http://mirrors.aliyun.com/alpine/latest-stable/community/" >> /etc/apk/repositories

RUN apk add --no-cache \
    python3 \
    bash \
    nginx \
    uwsgi \
    uwsgi-python3 \
    supervisor openssh-server tzdata && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptools && \
    # pip3 install -r /tmp/requirements.txt && \
    rm /etc/nginx/conf.d/default.conf && \
    rm -r /root/.cache && \
	addgroup -S www && \
    adduser -D -S -h /home/www -s /sbin/nologin -G www www && \
    cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    sed -i "s/#PermitRootLogin.*/PermitRootLogin yes/g" /etc/ssh/sshd_config && \
    ssh-keygen -t rsa -P "" -f /etc/ssh/ssh_host_rsa_key && \
    ssh-keygen -t ecdsa -P "" -f /etc/ssh/ssh_host_ecdsa_key && \
    ssh-keygen -t ed25519 -P "" -f /etc/ssh/ssh_host_ed25519_key && \
    echo "root:admin" | chpasswd

# Copy the Nginx global conf
# COPY nginx.conf /etc/nginx/
# Copy the Flask Nginx site conf
# COPY flask-site-nginx.conf /etc/nginx/conf.d/
# COPY default.conf /etc/nginx/conf.d/
# Copy the base uWSGI ini file to enable default dynamic uwsgi process number
# COPY uwsgi.ini /etc/uwsgi/
# Custom Supervisord config
# COPY supervisord.conf /etc/supervisord.conf

# Add demo app
# COPY ./app /app
# WORKDIR /app

# CMD ["/usr/bin/supervisord"]