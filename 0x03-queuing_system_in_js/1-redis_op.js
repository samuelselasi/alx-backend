// script that connects to Redis server on localhost to log messages
/* eslint-disable jest/require-hook */
/* eslint-disable jest/require-hook */
import { createClient } from 'redis';

const client = createClient();

function setNewSchool(schoolName, value, callback) {
  client.on('connect', () => {
    console.log('Redis client connected to the server');
    client.set(schoolName, value, () => {
      console.log(`Value set for ${schoolName}`);
      callback();
    });
  });

  client.on('error', (err) => {
    console.error(`Redis client not connected to the server: ${err}`);
    callback(err);
  });
}

function displaySchoolValue(schoolName, callback) {
  client.on('connect', () => {
    console.log('Redis client connected to the server');
    client.get(schoolName, (err, reply) => {
      if (err) {
        console.error(`Error retrieving value for ${schoolName}: ${err}`);
        callback(err);
      } else {
        console.log(`Value for ${schoolName}: ${reply}`);
        callback(null, reply);
      }
    });
  });

  client.on('error', (err) => {
    console.error(`Redis client not connected to the server: ${err}`);
    callback(err);
  });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
