---
title: I bought a VPS! and Now I am Self-hosting everything someone stop me
date: 2026-03-22T08:49:00.000+05:30
author: Osaf Ali Sayed
tags:
  - devops
  - selfhosting
  - docker
  - containerization
image: /uploads/gemini_generated_image_7z6vhe7z6vhe7z6v.webp
views: "0"
---
A lot of you, who are reading this from LinkedIn and are following me, know that I bought a VPS server a while back. I paid for a year so that I don't have to worry about it until next year.

For a while, this server was just sitting there eating dust, not doing anything significant because I could not get around doing anything about it.

This is what I did once I got time to fix it.

![Architecture Diagram](/uploads/diagram-export-3-22-2026-7_28_19-am.webp "Architecture Diagram for VPS Server.")

Firstly, I set up a reverse proxy using [traefik](https://traefik.io/traefik). I use this reverse proxy to make sure everything is centralized to my VPS server. Any traffic that comes to my VPS will get routed by Traefik. It rejects everything that is unnecessary, offering a small layer of protection for natural scans that hit your applications.

This step sounds easy and very fun to do, but OMG! what a nightmare. I couldn't set this up properly for a week. When I had it running, I thought the dashboard needed to be exposed, and it would make my reverse proxy journey easier. After bypassing all the security TRAEFIK set up to make sure we DO NOT SELF HOST THE dashboard on production, I did so anyway, and luckily found it in the documentation that this is not how you are supposed to do it. STOP USING AI, and write the Docker file yourself, you bafoon.

Anyways, after struggling for a month with Traefik's documentation, I started to realize how things are actually working. \
\
You basically set up a container for Traefik, and then THAT's it. Later on, when you are making the applications, you go and expose them using **labels**. These labels will allow you to do all sorts of stuff, like create a load balancer for an application, making sure the traffic from a specific subdomain reaches this specific container, generate certifications for your application, and a lot more.

```yaml
name: traefik

services:
  traefik:
    image: traefik:latest
    restart: unless-stopped
    command:
      # Logging
      - '--log.level=INFO'
      - '--accesslog=true'
      
      # Docker provider
      - '--providers.docker=true'
      - '--providers.docker.exposedbydefault=false'
      - '--providers.docker.network=traefik'
      
      # Entrypoints
      - '--entrypoints.web.address=:80'
      - '--entrypoints.websecure.address=:443'
      
      # SSL Configuration
      - '--certificatesresolvers.letsencrypt.acme.tlschallenge=true'
      - '--certificatesresolvers.letsencrypt.acme.email=youremail@gmail.com'
      - '--certificatesresolvers.letsencrypt.acme.storage=/letsencrypt/acme.json'
      
      # Global HTTP to HTTPS redirect (disabled for testing)
      - '--entrypoints.web.http.redirections.entrypoint.to=websecure'
      - '--entrypoints.web.http.redirections.entrypoint.scheme=https'
      - '--entrypoints.web.http.redirections.entrypoint.permanent=true'
    
    volumes:
      - '/var/run/docker.sock:/var/run/docker.sock:ro'
      - './data/letsencrypt:/letsencrypt'
      - './data/traefik:/etc/traefik'
    
    labels:
      # Enable Traefik for this service
      - "traefik.enable=true"
      
    ports:
      - "80:80"     # HTTP
      - "443:443"   # HTTPS  
    
    networks:
      - traefik

networks:
  traefik: 
    name: traefik
```

This simple config does the following things:

1. It makes sure any HTTP requests are redirected to HTTPS endpoints
2. **SSL Configuration**: A general configuration for all the applications. This is the email it will use while generating the certificates. You should be familiar with this if you have ever maintained a production server manually or if you automated the SSL certification process.
3. Enables Docker provider, which will come in handy later when we expose our containers using labels
4. You mount permanent volumes to maintain the certification and data information for Traefik; this is similar to what nginx does in its config file.
5. Exposes the right ports for usage.
6. Creates a Docker network called **traefik**. Now this network is important. You need at least one network upon which you should be able to connect your applications. This is how Traefik actually discovers your containers, by a common network. Of course, you can have an application-specific network and connect the above configuration to that network.

Once you set up this proxy, your life becomes easy. You start feeling invincible. Deploying services, applications, custom websites, everything is just a piece of a YAML file😂.

## N8N

At this point, I was ready to self-host some applications that are production-ready and can help me automate some tasks. The first thing I self-hosted was N8N!

This is the YAML file I wrote for it:

```yaml
name: n8n

services:
  n8n:
    image: n8nio/n8n:latest
    restart: unless-stopped

    environment:
      - N8N_HOST=n8n.osafalisayed.com
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - WEBHOOK_URL=https://n8n.osafalisayed.com/

      # security
      - N8N_EDITOR_BASE_URL=https://n8n.osafalisayed.com
      - NODE_ENV=production

      # timezone
      - TZ=UTC

    volumes:
      - ./data/n8n:/home/node/.n8n

    labels:
      - "traefik.enable=true"

      # router
      - "traefik.http.routers.n8n.rule=Host(`n8n.osafalisayed.com`)"
      - "traefik.http.routers.n8n.entrypoints=websecure"
      - "traefik.http.routers.n8n.tls.certresolver=letsencrypt"

      # service
      - "traefik.http.services.n8n.loadbalancer.server.port=5678"

    networks:
      - traefik

networks:
  traefik:
    external: true
```

Clearly, it simply uses labels to generate the SSL certifications, and simply runs a load balancer on the service (this is not needed for applications you will use for yourself, of course). Notice how it is exposed to the same network that I created earlier, if you miss this, you will scratch your head until you go BALD.

and Viola we have N8N!

![N8N home screen](/uploads/screenshot-from-2026-03-15-03-00-55.webp "N8N home screen")

\
After the right setup It becomes extremely easy to deploy applications, I took the liberty to deploy [Portainer](https://www.portainer.io/), [Firefly-iii](https://firefly-iii.org/).

## Future plans

I have lots and lots of plans for this server for example:

1. I will self host my full-stack applications I have created here. For a client this will become an interactive demo. Meaning they will have no doubts in my capability of making production grade software.
2. I do not need Vercel anymore for deploying the applications on staging, I can temporarily deploy them on my custom server and get a nice feedback from my client.
3. I want to somehow take backup for all my dockerized data on the VPS to my local system. This will allow to replicate the entire thing without losing my data again on another server.
