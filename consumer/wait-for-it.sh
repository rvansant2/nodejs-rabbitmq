#!/bin/sh

# wait-for-it.sh host port -- command args
# Credits: https://github.com/eficode/wait-for

set -e

HOST="$1"
PORT="$2"

shift 2

# Make sure we skip the "--" explicitly
if [ "$1" = "--" ]; then
  shift
fi

echo "Waiting for $HOST:$PORT to become available..."

while ! nc -z "$HOST" "$PORT"; do
  sleep 1
done

echo "$HOST:$PORT is available, executing: $@"
exec "$@"
