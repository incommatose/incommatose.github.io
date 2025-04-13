---
title: "2025-04-12-Dockerlabs-LittlePivoting"
permalink: /-/
tags:
  - Hacking
categories:
  - writeup
  - hacking
toc: true
toc_label: Topics
toc_sticky: 
sidebar: main
seo_tittle: "2025-04-12-Dockerlabs-LittlePivoting"
seo_description: "2025-04-12-Dockerlabs-LittlePivoting"
excerpt: "2025-04-12-Dockerlabs-LittlePivoting"
---


![image-center](/assets/images/posts/<% tp.file.title.split("-").toLowerCase()[4] %>-<%tp.file.title.split("-").toLowerCase()[3] %>.png)
{: .align-center}

**Habilidades: ** {{skills}}
{: .notice--primary}

# Introducción

<% tp.file.title.split("-")[4] %> es una máquina {{OS}} de dificultad {{difficult}} en <% tp.file.title.split("-")[3] %>

<br>

# Reconocimiento
---
Enviaremos una traza ICMP para comprobar que la máquina víctima se encuentre activa

~~~ bash
ping -c 1 <IP>
~~~


## Nmap Scanning 

~~~ bash
# Escaneo de puertos abiertos
nmap --open -p- --min-rate 5000 -n -sS -Pn $ip -oG openPorts
~~~

- `--open`: Mostrar únicamente los puertos abiertos
- `-p-`: Hacer un escaneo del total de puertos **(65535)**
- `--min-rate 5000`: Enviar mínimo **5000 paquetes por segundo**
- `-n`: No aplicar **resolución DNS**, lo que acelera el escaneo
- `-sS`: Modo de **escaneo TCP SYN**, no concluye la conexión, lo que hace el escaneo más ágil
- `-Pn`: Omitir el **descubrimiento de host (ARP)**
- `-oG`: Exportar en formato `grepable`

~~~ bash
# Escaneo de servicios
nmap -sVC -p {ports} $ip -oN services
~~~

- `-p`: Especificar puertos
- `-sV`: Identificar la versión del servicio 
- `-sC`: Uso de scripts de reconocimiento
- `-oN`: Exportar la salida en formato normal


<br>
# Intrusión / Explotación
---

~~~ bash
# Enter commands here
~~~


<br>
# Escalada de Privilegios
---

~~~ bash
# Enter commands here
~~~
