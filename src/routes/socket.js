var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var Chat = require('../services/chat.service');

let temp;

app.get('/', function(req, res){
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
