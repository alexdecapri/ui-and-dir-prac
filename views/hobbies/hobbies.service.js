//service and using resolve to get hobbies in controller to put in review
var app = angular.module("routingDirectives");

app.service("hobbiesService", function($q, $http) {

  var hobbies = [
    "soccer",
    "coding",
    "hiking",
    "climbing",
    "snowboarding"
  ];

  this.getHobbies = function() {
    var deferred = $q.defer();
    deferred.resolve(hobbies);
    return deferred.promise;
  }

  this.getPokemon = function() {
    var deferred = $q.defer();
    $http({
      method: "GET",
      url: "http://pokeapi.co/api/v2/pokemon/"
    }).then(function(response) {
      var data = response.data.results;
      // console.log(data);
      deferred.resolve(data);

    })
    return deferred.promise;
  }


});
