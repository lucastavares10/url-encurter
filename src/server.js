const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const server = express();
const config = require('config');
require('./utils/schedule');
require('./database/pgsql');

server.use(express.json());
server.use(cors());
server.use(routes);

module.exports = server;