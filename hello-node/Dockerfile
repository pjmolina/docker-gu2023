FROM node:20-alpine

LABEL Author=abc
LABEL Version=1.2.3

WORKDIR /app
RUN adduser usernode -D

RUN apk update && apk add curl


COPY --chown=usernode package.json .

RUN npm i

COPY --chown=usernode *.js .

ENV PORT 80
ENV DEBUG no
# ENV PASSWORD abracadabra

EXPOSE 80

VOLUME /app/datos

STOPSIGNAL SIGTERM

USER usernode

HEALTHCHECK --interval=3s --timeout=1s --start-period=5s --retries=3 CMD [ "curl", "http://localhost:80/ping" ]

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

