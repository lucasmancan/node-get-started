const app = require('../src/app');
const http = require('http');
const debug = require('debug')('node-api:server');
var sql = require("mssql");
var models = require('../src/models');

const port = normalizePort(process.env.PORT || '3000');

console.log("API Key: ", global.API_KEY);
const server = http.createServer(app);

models.sequelize.sync().then(function() {
  server.listen(port, function() {
    debug('Server is listening at ' + server.address().port);
  });
  server.on('error', onError);
  server.on('listening', onListening);
});

function normalizePort(val){
    return (!isNaN(parseInt(val,10)) && parseInt(val,10) >= 0) ? parseInt(val,10) : val;
}

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    const bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }