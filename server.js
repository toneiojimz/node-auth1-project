const express = require('express');
const cors = require('cors');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const server = express();
const apiRouter = require('./api/apiRouter.js');

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    return res.send('HERE WE GO!');
})

server.use('/api', apiRouter);

module.exports = server;