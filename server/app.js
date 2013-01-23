/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , io = require('socket.io');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

var server = http.createServer(app);

io = io.listen(server);

server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

var irc = require('irc');
var client = new irc.Client('halenstorm.com', 'Nikolas', {
  port : 6666,
  password : "MahtiJonnet1",
  lineTerminator : "\n"
});

io.sockets.on("connection", function (socket)
{
  socket.emit("message", "socket.io says hi!");

  client.addListener('message', function (from, to, message) {
      socket.emit("message", from + ' => ' + to + ': ' + message);
  });
});


client.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);

});

client.addListener('error', function(message) {
    console.log('error: ', message);
});

console.info("tempest server running");