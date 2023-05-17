docker rm hello1 -f

docker run \
   -d \
   --name hello1 \
   -e DEBUG=yes \
   -p 8080:80 \
   hello-node 

VOL1=/app/datos/

# docker run \
#    -d \
#    --name hello1 \
#    -e DEBUG=yes \
#    -p 8080:80 \
#    -v 'c/cursos/docker-guadaltel2023/hello-node/datos-es/:${VOL1}:ro' \
#    hello-node 