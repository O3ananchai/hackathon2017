#!/bin/bash

date > last-deploy
docker service update --image paiboon15721/hackathon2017-bookings-api hackathon_hackathon2017-bookings-api
echo "Deploy successful!"