var app = angular.module("routingDirectives", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state("hobbies", {
      url: "/hobbies",
      templateUrl: "views/hobbies/hobbies.html",
      controller: "hobbiesCtrl"
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
