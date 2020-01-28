const express = require('express');
const cors = require('cors');

const server = express();
const apiRouter = require('./api/apiRouter.js');

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    return res.send('Server is alive and well.');
})

server.use('/api', apiRouter);

module.exports = server;