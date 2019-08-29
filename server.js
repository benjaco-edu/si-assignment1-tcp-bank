
var net = require('net');

let accounts = [0,0,0]

var server = net.createServer(function(socket) {
    socket.on('data', function(data) {
        let [account, diff] = data.toString().split(" ");
        accounts[parseInt(account)] = accounts[parseInt(account)] + parseFloat(diff);

        socket.write("New balance, "+ accounts[parseInt(account)])
        socket.destroy();
    });

});

server.listen(1337, '0.0.0.0');