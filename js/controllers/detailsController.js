app.controller('detailsController', ['$scope', '$http', '$routeParams', 'nowPlaying', '$sce', function($scope, $http, $routeParams, nowPlaying, $sce) {

	var key = "api_key=af8274b3d5d6b03bdbd0443854a35c7a";
	var apiUrl = 'http://api.themoviedb.org/3/'; 

  nowPlaying.success(function(data){
    $scope.nowPlaying = data;
    $scope.whichMovie = $routeParams.movieID;
    // console.log($scope.whichMovie);
    // console.log($scope.nowPlaying.results[$scope.whichMovie].id);

    var movieId = $scope.nowPlaying.results[$scope.whichMovie].id;

    $http.get(apiUrl + 'movie/' + movieId + '?' + key + '&append_to_response=images,videos,similar,credits&language=en')
    .success(function(response) { 
              $scope.details = response;
              
              var key = $scope.details.videos.results[0].key;
              var url = 'https://www.youtube.com/embed/' + key;
              $scope.youtube = $sce.trustAsResourceUrl(url);
              
            }) 
            .error(function(err) { 
              return err; 
            }); 

  });


  
  $scope.posters = true;
  $scope.cast = true;
  $scope.similar = true;

  /*$scope.whichMovie = $routeParams.movieID;

  console.log($scope.nowPlaying.results[$scope.whichMovie].id);

  $scope.getMovieId = function(x) {
    console.log(x[$scope.whichMovie].id);
  }*/

  /*$scope.movieId = $scope.nowPlaying.results[$scope.whichMovie].id;

    $http.get(apiUrl + 'movie/' + $scope.movieId + '?' + key + '&append_to_response=images,videos,similar,credits&language=en')
    .success(function(response) { 
              $scope.details = response;
              console.log($scope.details);
            }) 
            .error(function(err) { 
              return err; 
            });*/

}]);


