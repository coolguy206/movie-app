app.controller('genreListController', ['$scope', '$http', '$routeParams', 'genres', function($scope, $http, $routeParams, genres) {

	var key = "api_key=af8274b3d5d6b03bdbd0443854a35c7a";
	var apiUrl = 'http://api.themoviedb.org/3/'; 

  $scope.genreMovie = $routeParams.genreID;
  $scope.pageClass= 'page-genre-list';

  genres.success(function(data){
    $scope.genres = data.genres;
  });

  $scope.myData = true;
  $scope.views = true;

  $http.get(apiUrl + 'genre/' + $scope.genreMovie + '/movies?' + key + '&language=en')
    .success(function(response) { 
      $scope.titleId = response.id;
      $scope.genreMovieList = response.results;
               
      angular.forEach($scope.genres, function(key,val){
        if ($scope.titleId == key.id) {
          $scope.title = key.name;
          // console.log($scope.title);
        }
      });

      angular.forEach($scope.genreMovieList, function(key, val){
        if (key.overview.length > 150) {
          var str = key.overview.substring(0,150);
          var addOn = '... READ MORE';
          var newStr = str.concat(addOn);
          key.overview = newStr;
        }
      });

    }) 
    .error(function(err) { 
      return err; 
    }); 
  
}]);


