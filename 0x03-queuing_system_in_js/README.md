# 0x03. Queuing System in JS
#### `Back-end` `JavaScript` `ES6` `Redis` `NodeJS` `ExpressJS` `Kue`

![1486e02a78cdf7b4557c](https://github.com/samuelselasi/alx-backend/assets/85158665/097e8d98-a1d8-4880-9a08-dd0819320f55)

## Resources
### Read or watch:

* [Redis quick start](https://redis.io/docs/install/install-redis/)
* [Redis client interface](https://redis.io/docs/connect/cli/)
* [Redis client for Node JS](https://github.com/redis/node-redis)
* [Kue](https://github.com/Automattic/kue) *deprecated but still use in the industry*

## Requirements
* All of your code will be compiled/interpreted on Ubuntu `18.04`, `Node 12.x`, and `Redis 5.0.7`
* All of your files should end with a new line
* A `README.md` file, at the root of the folder of the project, is mandatory
* Your code should use the `js` extension

## Required Files for the Project
### [package.json](./package.json)
### [.babelrc](./.babelrc)
### and...
**Don’t forget to run `$ npm install` when you have the `package.json`**

## Tasks

[0. Install a redis instance](./dump.rdb)

Download, extract, and compile the latest stable `Redis` version (higher than `5.0.7` - [https://redis.io/download/](https://redis.io/download/)):
```
$ wget http://download.redis.io/releases/redis-6.0.10.tar.gz
$ tar xzf redis-6.0.10.tar.gz
$ cd redis-6.0.10
$ make
```
* Start Redis in the background with `src/redis-server`
```
src/redis-server &
```
* Make sure that the server is working with a ping `src/redis-cli ping`
```
PONG
```
* Using the Redis client again, set the value `School` for the key `Holberton`
```
127.0.0.1:[Port]> set Holberton School
OK
127.0.0.1:[Port]> get Holberton
"School"
```
* Kill the server with the process id of the redis-server (hint: use `ps` and `grep`)
```
$ kill [PID_OF_Redis_Server]
```
Copy the `dump.rdb` from the `redis-5.0.7` directory into the root of the Queuing project.

### Requirements:

* Running `get Holberton` in the client, should return `School`
