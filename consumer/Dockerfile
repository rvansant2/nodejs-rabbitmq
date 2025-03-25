FROM node:20-slim

WORKDIR /app

# Install netcat for wait-for.sh
RUN apt-get update && apt-get install -y netcat-openbsd && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x wait-for-it.sh

CMD ["./wait-for-it.sh", "rabbitmq-server", "5672", "--", "node", "consumer.js", "odd"]
