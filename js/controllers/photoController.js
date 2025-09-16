app.controller('photoController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {

	var key = "api_key=af8274b3d5d6b03bdbd0443854a35c7a";
	var apiUrl = 'https://api.themoviedb.org/3/'; 

  $scope.whichMovie = $routeParams.movieID;
  var whichPoster = $routeParams.photoID;
  $scope.pageClass= 'page-photo';

  $scope.whichPerson = $routeParams.personID;
   var whichPic = $routeParams.imageID;
  // console.log(whichPoster);

  var url = $location.url();
  // console.log(url);

  var movie = /movie/i;
  var person = /person/i;

  if(movie.test(url)) {

    $http.get(apiUrl + 'movie/' + $scope.whichMovie + '?' + key + '&append_to_response=images&language=en')
    .success(function(response) { 
      $scope.details = response;
      // console.log($scope.details);

      $scope.image = $scope.details.images.posters[whichPoster].file_path;
      // console.log($scope.poster);

      $scope.alt = $scope.details.title;
              
      }) 
      .error(function(err) { 
        return err; 
      }); 

  } else if(person.test(url)) {

    $http.get(apiUrl + 'person/' + $scope.whichPerson + '?' + key + '&append_to_response=movie_credits,images')
    .success(function(response) { 
      $scope.person = response;
      // console.log($scope.person);
              
      $scope.image = $scope.person.images.profiles[whichPic].file_path;

      $scope.alt = $scope.person.name;

      }) 
      .error(function(err) { 
        return err; 
      }); 
  }


}]);


