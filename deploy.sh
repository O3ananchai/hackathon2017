#!/bin/bash

date > last-deploy
docker service update --image paiboon15721/hackathon2017-owners-api hackathon_hackathon2017-owners-api
echo "Deploy successful!"