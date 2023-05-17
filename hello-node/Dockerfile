FROM node:20-alpine

LABEL Author=abc
LABEL Version=1.2.3


WORKDIR /app

COPY package.json .

RUN npm i

COPY *.js .

ENV PORT 80
ENV DEBUG no

EXPOSE 80

CMD [ "node", "index.js"]
