var app = angular.module('vent', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'js/home/homeView.html',
      controller: 'homeController'
    })
    .when('/items', {
      templateUrl: 'js/items/itemsView.html',
      controller: 'itemsController',
    })
    .otherwise({
      redirectTo: '/'
    })

})

