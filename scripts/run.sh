#!/bin/sh
set -e

[ -f ./env ] && source ./env
yarn start:prod
