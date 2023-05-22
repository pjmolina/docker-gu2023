# Empaqueta un frontal SPA con nginx

FROM nginx:1.23.4-alpine

COPY ./dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443