const express = require('express');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('./static'))

io.on('connection', socket => {
    socket.on('new message', commingMessage => {
        io.emit('new message', commingMessage);
    })
});



http.listen(3000, function () {});


require('dns').lookup(require('os').hostname(), function(err,add,fam){
	console.log('listening on '+add+':3000');
});