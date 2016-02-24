var app = angular.module("myApp", ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
  $routeProvider

    .when('/', {
        templateUrl : 'views/now-playing.html',
        controller  : 'mainController'
    })
    .when('/search', {
        templateUrl : 'views/search.html',
        controller  : 'searchController'
    })
    .when('/about', {
        templateUrl : 'views/about.html',
        controller  : 'aboutController'
    })
    .when('/genre', {
        templateUrl : 'views/genre.html',
        controller  : 'genreController'
    })
    .when('/genre/:genreID', {
        templateUrl : 'views/genre-list.html',
        controller  : 'genreListController'
    })
    .when('/movie/:movieID', {
    		templateUrl: 'views/details.html',
    		controller: 'detailsController'
  	})
  	.when('/movie/:movieID/photo/:photoID', {
        templateUrl: 'views/photo.html',
        controller: 'photoController'
  	})
  	.when('/person/:personID', {
        templateUrl: 'views/person.html',
        controller: 'personController'
  	})
  	.when('/person/:personID/photo/:imageID', {
        templateUrl: 'views/photo.html',
        controller: 'photoController'
  	})
    .otherwise({
        redirectTo: '/'
    });
           
});