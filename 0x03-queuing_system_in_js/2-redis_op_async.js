// script that connects to Redis server on localhost to log messages
/* eslint-disable jest/require-hook */
import { createClient } from 'redis';
import util from 'util';

const client = createClient();
client.get = util.promisify(client.get);

// Use a Promise to ensure proper handling of asynchronous operations
const connectToRedis = () => new Promise((resolve, reject) => {
  client.on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err}`);
    reject(err);
  });

  client.on('connect', () => {
    console.log('Redis client connected to the server');
    resolve();
  });
});

const setNewSchool = (schoolName, value) => new Promise((resolve, reject) => {
  client.set(schoolName, value, (err) => {
    if (err) {
      console.error(`Error setting value for ${schoolName}: ${err}`);
      reject(err);
    } else {
      console.log(`Value set for ${schoolName}`);
      resolve();
    }
  });
});

const displaySchoolValue = async (schoolName) => {
  try {
    const value = await client.get(schoolName);
    console.log(`Value for ${schoolName}: ${value}`);
  } catch (error) {
    console.error(`Error retrieving value for ${schoolName}: ${error}`);
  }
};

// Ensure that asynchronous operations are completed before exiting
(async () => {
  try {
    await connectToRedis();
    await displaySchoolValue('Holberton');
    await setNewSchool('HolbertonSanFrancisco', '100');
    await displaySchoolValue('HolbertonSanFrancisco');
    // Optionally, close the Redis client when done
    client.quit();
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Optionally, close the Redis client in case of an error
    client.quit();
  }
})();
