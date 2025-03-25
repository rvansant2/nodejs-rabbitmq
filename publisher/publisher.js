const amqp = require('amqplib');

const inputNums = process.env.INPUT_NUMBERS || process.argv[2];

if (!inputNums) {
  console.error('No input numbers provided.');
  process.exit(1);
}

async function connect() {
  try {
    // Connect to RabbitMQ
    const connection = await amqp.connect(process.env.AMQP_CONNECT_SERVER);
    // Create a channel
    const channel = await connection.createChannel();
    // Create an odd and even queue
    await channel.assertQueue('odd');
    await channel.assertQueue('even');

    console.log('Start publishing');
    // Iterate over numbers list and determine if the number is odd and even and place in the proper queue.
    await Promise.all(
        inputNums.split(',').map(async num => {
          const queueName = parseInt(num) % 2 ? "odd" : "even";
          console.log(`Publishing number: ${num} to queueName: ${queueName}`);
          return await channel.sendToQueue(queueName, Buffer.from(JSON.stringify({ number: num })));
        })
    );

    console.log('End publishing');
    // Close connection
    await channel.close();
    await connection.close();
  } catch (ex) {
    console.error(ex);
  }
}

connect();
