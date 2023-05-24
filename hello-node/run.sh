docker rm hello1 -f

# docker run \
#    -d \
#    --name hello1 \
#    -e DEBUG=yes \
#    -p 8080:80 \
#    hello-node 

VOL1=/app/datos/

docker run \
   -d \
   --name hello1 \
   -e DEBUG=yes \
   -p 8080:80 \
   --mount src='/c/cursos/docker-guadaltel2023/hello-node/datos-es/',dst=${VOL1},type=bind \
   hello-node 

# # red bridge
# docker run \
#    -d \
#    --name hello1 \
#    --network bridge \
#    -e PORT=80 \
#    -e DEBUG=yes \
#    --mount src='/c/cursos/docker-guadaltel2023/hello-node/datos-es/',dst=/app/datos/,type=bind \
#    hello-node 

# # red host
# docker run \
#    -d \
#    --name hello1 \
#    --network host \
#    -e PORT=8080 \
#    -e DEBUG=yes \
#    --mount src='/c/cursos/docker-guadaltel2023/hello-node/datos-es/',dst=/app/datos/,type=bind \
#    -p "8080:8080" \
#    hello-node 