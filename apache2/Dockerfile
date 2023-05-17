# Ejemplo de dockerizacion ded Apache2
FROM ubuntu:14.04
MAINTAINER Pedro J. Molina

LABEL Author pjmolina
RUN apt-get update && apt-get install -y apache2
# ENV APACHE_LOG_DIR /var/log/apache2
EXPOSE 80

CMD ["/usr/sbin/apache2", "-D", "FOREGROUND"]
