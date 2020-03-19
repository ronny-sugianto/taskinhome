const express = require('express');
const app = express();
const dotenv = require('dotenv');
const http = require('http');
const routes = require('./src/routes/base');
const logEvent = require('./src/event/myEmitter');
const loggingListener = require('./src/event/loggingListener');
const middleware = require('./src/middleware/app-middleware');
let io = require('socket.io')(http);
let temp = [];

dotenv.config();
loggingListener();
app.use(middleware);
app.use(routes);
app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect',function() {
        console.log('user disconnected');
    });
    socket.on('send_message', (data) => {
        temp.push(data);
        io.emit('receive_message',temp);
         Chat().createChat(data);
        
    });
});


const server = http.createServer(app);

// server.on('error', (err) => {
//     logEvent.emit('APP_ERROR'),{
//         logTitle : '[SERVER ERROR]',
//         logMessage : err
//     }
// });

module.exports = server;
