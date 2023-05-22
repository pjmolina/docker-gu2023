FROM tomcat:8.0-jre8
LABEL COMPANY=acme.com

ENV GRAILS.ENV production
EXPOSE 8080
WORKDIR /usr/app/

RUN rm -fr /usr/local/tomcat/webapps/
RUN mkdir /usr/local/tomcat/webapps/

COPY SampleWebApp.war /usr/local/tomcat/webapps/ROOT.war

