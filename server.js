var irc = require('irc');
var client = new irc.Client('halenstorm.com', 'Nikolas', {
	port : 6666,
	password : "MahtiJonnet1",
	lineTerminator : "\n"
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

client.conn.addListener("data", function (chunk) {
console.info("chunk: " + chunk);
});

console.info("tempest server running");