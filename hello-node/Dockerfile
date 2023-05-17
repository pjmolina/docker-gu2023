FROM node:20-alpine

LABEL Author=abc
LABEL Version=1.2.3

WORKDIR /app
RUN adduser usernode -D

COPY --chown=usernode package.json .

RUN npm i

COPY --chown=usernode *.js .

ENV PORT 80
ENV DEBUG no

EXPOSE 80

VOLUME /app/datos

USER usernode

CMD [ "node", "index.js"]



# SMTP 25
# HTTP 80 HSTS
# HTTPS 443 / SSL/TLS 1.2   nginx  ha-proxy traefik       DNS https://app1.acme.com -> IP
# SSH 22

# apache   jboss

# nginx/443 (cert)  --> app1.internal:80   -->  db  redis rabbitmq
#                       app2.internal:80
#                       app3.internal:80
#                       app4.internal:80

# websockets
# browser 1.2.3.4  --- 3.4.5.6  app2
# set cookie s=2
# sticky

