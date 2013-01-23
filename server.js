var irc = require('irc');
var client = new irc.Client('halenstorm.com', 'Nikolas', {
	port : 6666,
	password : "MahtiJonnet1"
});

client.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
});

client.addListener('error', function(message) {
    console.log('error: ', message);
});

client.addListener('raw', function(message) {
    console.log('raw: ', message);
});

console.info("tempest server running");