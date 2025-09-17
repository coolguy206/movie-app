app.controller('homeController', ['$scope', 'Page', '$http', function($scope, Page, $http) { 

	var key = "api_key=af8274b3d5d6b03bdbd0443854a35c7a";
	var apiUrl = 'https://api.themoviedb.org/3/'; 

  $scope.titleTab = Page;

}]);