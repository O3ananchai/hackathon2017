#!/bin/bash

date > last-deploy
docker service update --image paiboon15721/hackathon2017-auth-api hackathon_hackathon2017-auth-api
echo "Deploy successful!"