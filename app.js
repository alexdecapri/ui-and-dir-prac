//use these concepts: transclusion, resolve, $q, nested directives, event listeners in directives

var app = angular.module("routingDirectives", ["ui.router", "Directives"]);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state("hobbies", {
      url: "/hobbies",
      templateUrl: "views/hobbies/hobbies.html",
      controller: "hobbiesCtrl",
      resolve: { //view won't load until this is "resolved"
        hobbies: function(hobbiesService) {
          return hobbiesService.getHobbies(); //hobbies is whatever gets resolved from this function... has to return a promise
        },
        pokemon: function(hobbiesService) {
          return hobbiesService.getPokemon();
        }
      }
    })
    .state("main", {
      url: "/",
      templateUrl: "views/main/main.html",
      controller: "mainCtrl"
    })
    .state("personalInfo", {
      url: "/personal-info",
      templateUrl: "views/personal-info/personal-info.html",
      controller: "personalInfoCtrl"
    })

  $urlRouterProvider
    .otherwise("/")

});
