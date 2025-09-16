app.controller('detailsController', ['$scope', '$http', '$routeParams', '$sce', function($scope, $http, $routeParams, $sce) {

	var key = "api_key=af8274b3d5d6b03bdbd0443854a35c7a";
	var apiUrl = 'https://api.themoviedb.org/3/'; 

  $scope.whichMovie = $routeParams.movieID;
  var whichPoster = $routeParams.photoID;
  // console.log($scope.whichMovie);
  $scope.posters = {
    title: 'Posters',
    show: false,
    glyphicon: true
  };

  $scope.cast = {
    title: 'Cast',
    show: false,
    glyphicon: true
  };

  $scope.crew = {
    title: 'Crew',
    show: false,
    glyphicon: true
  };

  $scope.similar = {
    title: 'Similar Movies',
    show: false,
    glyphicon: true
  };
  
  $scope.pageClass= 'page-details';


  $http.get(apiUrl + 'movie/' + $scope.whichMovie + '?' + key + '&append_to_response=images,videos,similar,credits&language=en')
    .success(function(response) { 
      $scope.details = response;
      // console.log($scope.details);

      if(angular.equals($scope.details.videos.results[0], undefined)){
        var key = '';
      } else {
        var key = $scope.details.videos.results[0].key;
      }       
      var url = 'https://www.youtube.com/embed/' + key;
      $scope.youtube = $sce.trustAsResourceUrl(url);
              
      angular.forEach($scope.details.credits.crew, function(key, val){
        if(angular.equals(key.profile_path, null)){
          key.profile_path = 'https://assets.tmdb.org/assets/649ae87ebcf4285d2c45e94407adb382/images/no-profile-w45.jpg'
          // console.log('its null');

        } else {
          key.profile_path = 'http://image.tmdb.org/t/p/w185' + key.profile_path;
        }
      });

      angular.forEach($scope.details.credits.cast, function(key, val){
        if(angular.equals(key.profile_path, null)){
          key.profile_path = 'https://assets.tmdb.org/assets/649ae87ebcf4285d2c45e94407adb382/images/no-profile-w45.jpg'
          // console.log('its null');

        } else {
          key.profile_path = 'http://image.tmdb.org/t/p/w185' + key.profile_path;
        }
      });

      angular.forEach($scope.details.similar.results, function(key, val){
        if(angular.equals(key.poster_path, null)){
          key.poster_path = 'http://ia.media-imdb.com/images/G/01/imdb/images/nopicture/32x44/film-3119741174._CB379391527_.png'
          // console.log('its null');

        } else {
          key.poster_path = 'http://image.tmdb.org/t/p/w185' + key.poster_path;
        }
      });

    }) 
    .error(function(err) { 
      return err; 
    }); 

}]);


