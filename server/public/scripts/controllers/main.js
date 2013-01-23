'use strict';

app.controller('MainCtrl', function($scope, socket) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];

  $scope.msg = "not connected :(";

  socket.on("message", function (data) {
  	$scope.msg = data;
  });
});
