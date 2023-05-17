docker run \
   -d \
   --name hello1 \
   -e DEBUG=yes \
   -p 8080:80 \
   hello-node 