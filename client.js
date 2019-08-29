
var net = require('net');

var client = new net.Socket();

client.connect(1337, 'bank', function() {
	console.log('Connected');
	client.write(process.argv[2]+' '+process.argv[3]);
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});