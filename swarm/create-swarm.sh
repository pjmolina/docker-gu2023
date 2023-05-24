docker swarm init

docker service create --replicas 1 --name helloworld alpine ping docker.com

docker service rm helloworld


docker service create --replicas 2 --name helloworld alpine ping docker.com

