# Nodejs-RabbitMQ

A simple example and demonstration of RabbitMQ with nodejs, which allows for low latency and complex message distributions. There is a publisher that will iterate over a list of numbers and place them in a proper queue for the approprate consumers to listen to.

This project was coded a long time ago and has sit on my computer since. I now added some enhancements and best development practices to support extending and expanding this example, if needed.

## Required

- nodejs ^v20.x (for local execution)
- npm ^10.x.x (for local execution)
- Docker Desktop

# Get Started
- Clone repo using the following command `git clone git@github.com:rvansant2/nodejs-rabbitmq.git`.
- Change into clone repoe directory via command `cd nodejs-rabbitmq`.
- Copy `.env.example` file as a `.env` file and replace `#FILL_ME_IN` with the appropiate details.
- Once the `.env` file is created and filled, you can start the application via command `docker compose up --build`.
- A local `logs` directory will be created and you can see the outputs of the application.
    - The `publisher.log` should output where each number will be published to which queue based on the odd/even evaluation logic.
    - The `consumer-odd.log` and `consumer-even.log` should receive the appropriate distributed published messages from their appropriate queues.

