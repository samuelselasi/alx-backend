// script that connects to Redis server on localhost to log messages
/* eslint-disable jest/require-hook */
import { createClient } from 'redis';

const client = createClient({
  host: 'localhost',
  port: 6379,
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err}`);
});
