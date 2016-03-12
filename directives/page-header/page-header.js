var directivesApp = angular.module("Directives");

directivesApp.directive("adPageHeader", function() {
  return {
    restrict: "EA",
    templateUrl: "directives/page-header/page-header.html",
    scope: {
      name: "@"
    }
  };
});
