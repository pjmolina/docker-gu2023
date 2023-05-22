# Notas


## Arquitectura con balanceo de carga

servicio: calendario
            /ping
            /metrics

```
navegador --> 443 TLS load_balancer   -->   instancia1  10.0.0.1:80   -->      consul:8500 / etc / zookeeper   -->   prometheus
              (nginx / ha-proxy)            instancia2  10.0.0.2:80
                                            instancia3  10.0.0.3:80
                                            instancia4  10.0.0.40:6543
```

## Rolling update

No tener perdida de servicio.

SLA 95%  30min

```
navegador --> 443 TLS load_balancer   -->   
              (nginx / ha-proxy)            
                                            instancia3  10.0.0.3:80      v2
                                            instancia4  10.0.0.40:6543   v2
                                            instancia5  10.0.0.1:80      v2 
                                            instancia6  10.0.0.2:80      v2

```

## Mascotas, vacas, baterias

## Infraestructra inmutable

- descrito en codigo
- contrtol de codigo fuente (git)
- reproducible

Terraform / Pulumi -> determinta
Chef / Ansible


                                            