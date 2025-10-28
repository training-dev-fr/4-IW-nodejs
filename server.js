const http = require('http');
const app = require('./app');

const server = http.createServer(app);
const PORT = 3000;

server.on('listening',() => {
    console.log('Server listening on port ' + PORT);
});

server.listen(PORT);