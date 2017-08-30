#!/bin/bash

date > last-deploy
docker service update --image paiboon15721/hackathon2017-reports-api hackathon_hackathon2017-reports-api
echo "Deploy successful!"