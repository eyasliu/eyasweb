FROM node:latest

MAINTAINER Eyas<liuyuesongde@163.com>


RUN cd /opt \
 && git clone https://github.com/eyasliu/eyasweb.git \
 && git branch master && git checkout master \
 && cd /opt/eyasweb \
 && npm install -g forever gulp \
 && npm install \
 && cd /opt/eyasweb/app/server \
 && npm install \
 && cd /opt/eyasweb/app/client \
 && npm install \
 && cd /opt/eyasweb \
 && mkdir database 


WORKDIR /opt/eyasweb
ENV NODE_ENV production

RUN ls -al \
 && gulp build \
 && chmod 755 /opt/eyasweb/run

EXPOSE 8000
ENTRYPOINT /opt/eyasweb/run