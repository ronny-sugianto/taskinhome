
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);



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
        
    });
});

http.listen(8001, function() {
    console.log('socket listening on port 8001');
});


module.exports = app;


