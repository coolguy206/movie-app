app.controller('MainController', ['$scope', 'nowPlaying', 'upcoming', '$routeParams', function($scope,nowPlaying,upcoming, $routeParams) { 
  $scope.title = 'Top Sellers in Books'; 

  nowPlaying.success(function(data){
  	$scope.nowPlaying = data[$routeParams.id];
  });

  upcoming.success(function(obj){
  	$scope.upcoming = obj;
  });

}]);