#!/bin/bash

date > last-deploy
docker service update --image paiboon15721/hackathon2017-frontend hackathon_hackathon2017-frontend
echo "Deploy successful!"