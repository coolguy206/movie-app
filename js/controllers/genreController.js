app.controller('genreController', ['$scope', 'genres', '$http', '$routeParams', function($scope, genres, $http, $routeParams) { 

	var key = "api_key=af8274b3d5d6b03bdbd0443854a35c7a";
	var apiUrl = 'https://api.themoviedb.org/3/'; 

  $scope.title = "Genres";
  $scope.backdrops = [];
  $scope.pageClass= 'page-genre';

  genres.success(function(data){
  	$scope.genres = data.genres;
   
    angular.forEach($scope.genres, function(key, val){
        
      $http.get(apiUrl + 'genre/' + key.id + '/movies?api_key=af8274b3d5d6b03bdbd0443854a35c7a&language=en')
        .success(function(response) { 
          $scope.genreMovies = response.results[0].backdrop_path;
          $scope.backdrops.push($scope.genreMovies);
        }) 
        .error(function(err) { 
          return err; 
        }); 
      });

    });
  
}]);