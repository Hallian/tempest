var irc = require('irc');
var client = new irc.Client('halenstorm.com', 'Nikolas', {
	port : 9876,
	password : "IrkkiTunnus1989"
});

client.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
});

client.addListener('error', function(message) {
    console.log('error: ', message);
});

console.info("tempest server running");