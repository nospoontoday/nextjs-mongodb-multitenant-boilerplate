#!/bin/bash

# Load environment variables from .env file
set -o allexport
source .env
set +o allexport

# Check the value of NODE_ENV and run the appropriate docker-compose command
if [ "$NODE_ENV" = "production" ]
then
  echo "Starting in production mode"
  docker-compose -f docker-compose.yml up --build --force-recreate
elif [ "$NODE_ENV" = "development" ]
then
  echo "Starting in development mode"
  docker-compose -f docker-compose.dev.yml up --build
else
  echo "Invalid NODE_ENV value. Set it to either 'production' or 'development'."
  exit 1
fi
