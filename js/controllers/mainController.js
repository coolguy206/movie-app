app.controller('mainController', ['$scope', 'nowPlaying', 'upcoming', function($scope,nowPlaying,upcoming) { 
  $scope.title = 'Top Sellers in Books'; 

  nowPlaying.success(function(data){
  	$scope.nowPlaying = data;
  });

  upcoming.success(function(obj){
  	$scope.upcoming = obj;
  });

}]);