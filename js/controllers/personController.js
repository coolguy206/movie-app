app.controller('personController', ['$scope', '$http', '$routeParams','$filter', function($scope, $http, $routeParams, $filter) {

	var key = "api_key=af8274b3d5d6b03bdbd0443854a35c7a";
	var apiUrl = 'https://api.themoviedb.org/3/'; 

  $scope.whichPerson = $routeParams.personID;

  // $scope.bio = true;
  $scope.bio = {
    title: 'Biography',
    show: false,
    glyphicon: true
  }

  $scope.images = {
    title: 'Images',
    show: false,
    glyphicon: true
  }

  $scope.movies = {
    title: 'Movies',
    show: false,
    glyphicon: true
  }
  // $scope.similar = true;
  // $scope.images = true;
  $scope.pageClass= 'page-person';

  $http.get(apiUrl + 'person/' + $scope.whichPerson + '?' + key + '&append_to_response=movie_credits,images')
    .success(function(response) { 
      $scope.person = response;
      // console.log($scope.person);
              
      var birthyear = $filter('date')($scope.person.birthday, 'yyyy');
      var d = new Date();
      var n = d.getFullYear();
      // console.log(birthyear);
      $scope.age = n - birthyear;
      // console.log($scope.age);

      }) 
      .error(function(err) { 
        return err; 
      }); 

}]);


