const express = require('express');
const app = express();
const dotenv = require('dotenv');
const http = require('http');
const server = http.createServer(app);

const routes = require('./src/routes/base');

const loggingListener = require('./src/event/loggingListener');
const middleware = require('./src/middleware/app-middleware');

dotenv.config();
loggingListener();
app.use(middleware);
app.use(routes);


// server.on('error', (err) => {
//     logEvent.emit('APP_ERROR'),{
//         logTitle : '[SERVER ERROR]',
//         logMessage : err
//     }
// });

module.exports = server;
