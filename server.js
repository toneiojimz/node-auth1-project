const express = require('express');
const cors = require('cors');

const server = express();
const apiRouter = require('./api/apiRouter.js');

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    return res.send('HERE WE GO!');
})

server.use('/api', apiRouter);

module.exports = server;