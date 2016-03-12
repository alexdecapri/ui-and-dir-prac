var app = angular.module("routingDirectives");

app.controller("hobbiesCtrl", function($scope, hobbies) { //matches property on resolve object in app.js

  $scope.hobbies = hobbies;

});
