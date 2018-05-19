var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var coord = [];

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket) {
    for (var i in coord) {
        io.socket.emit('stacir nkary', coord[i]);
    }

    socket.on("send pic", function (data) {
        coord.push(data);
        io.socket.emit('stacir nkary', data);
    })
});