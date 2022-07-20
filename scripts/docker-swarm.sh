#!/bin/bash

sudo docker swarm init > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "Swarm already initialized"
    exit 0
else
    echo "Swarm initialized"
fi