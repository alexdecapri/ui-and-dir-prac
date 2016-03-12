//service and using resolve to get hobbies in controller to put in review
var app = angular.module("routingDirectives");

app.service("hobbiesService", function($q) {

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


});
