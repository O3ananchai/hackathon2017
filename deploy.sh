#!/bin/bash

date > last-deploy
docker stack deploy -c ./docker-stack.yml hackathon
echo "Deploy successful!"