#  Ejemplos


# 1. construir la imagen
docker build -t v1 .

# 2. construir el volumen d1
docker volume create d1

# 3. crear contenedores enganchados al volumen d1
docker run --name c1 -v d1:/datos  -d  v1
docker run --name c2 -v d1:/datos  -d  v1


# 4. parar/arrancar/reaarancar contenedor
docker stop c1 c2 
docker start c1 c2 
docker restart c1 c2 


# 5. destruir contenedor
docker rm c1 c2 -f

# 6. borrar volumen
docker volume rm d1
