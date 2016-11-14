/**
 * Originally based on AngularJS Tutorial 1 by Nick Kaye
 * 
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/backpanel", {templateUrl: "partials/backpanel.html", controller: "PageCtrl"})
    .when("/frontpanel", {templateUrl: "partials/frontpanel.html", controller: "PageCtrl"})
    // Other Panels
    .when("/otherpanels", {templateUrl: "partials/otherpanels.html", controller: "OtherPanelCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "OtherPanelCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);


/**
 * Controls the Blog
 */
app.controller('OtherPanelCtrl', function (/* $scope, $location, $http */) {
  console.log("OtherPanelCtrl Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});