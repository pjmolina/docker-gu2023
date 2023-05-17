FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm i

COPY *.js .

ENV PORT 80
EXPOSE 80

CMD [ "node", "index.js"]
