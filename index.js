const server = require('./server.js');
const port = process.env.PORT || 5353;

server.listen(port, () => {
    console.log(`\n Server is listening on port: ${port}`);
})