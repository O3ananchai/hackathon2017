#!/bin/bash

date > last-deploy
docker service update --image paiboon15721/hackathon2017-rooms-api hackathon_hackathon2017-rooms-api
echo "Deploy successful!"