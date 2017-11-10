var socketio = require('socket.io');
var io = socketio();
var socketApi = {}

socketApi.io = io;

io.on('connection', function(socket){
    console.log('A user connected');
});

socketApi.emit = (data) => {
    io.sockets.emit('line', {data: data});
}
module.exports = socketApi;