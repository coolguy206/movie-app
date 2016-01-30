var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : 'views/now-playing.html',
                controller  : 'mainController'
            });

            /*.when('/upcoming', {
                templateUrl : 'views/upcoming.html',
                controller  : 'js/controllers/upcomingController'
            })

            .when('/now-showing', {
                templateUrl : 'views/now-playing.html',
                controller  : 'js/controllers/mainController'
            });*/
    });