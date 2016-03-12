var app = angular.module("routingDirectives");

app.controller("hobbiesCtrl", function($scope, hobbies, pokemon) { //matches property on resolve object in app.js

  $scope.hobbies = hobbies;
  $scope.pokemon = pokemon;

});
