app.controller('searchController', ['$scope', '$http', function($scope, $http) { 

	var key = "api_key=af8274b3d5d6b03bdbd0443854a35c7a";
	var apiUrl = 'https://api.themoviedb.org/3/'; 

  angular.element('input').focus();

  $scope.myData =true;
  $scope.views = true;
  $scope.pageClass= 'page-search';

  $scope.change = function() {
    // console.log(encodeURIComponent($scope.search)); 
    var searchString = encodeURIComponent($scope.search);
    // console.log(searchString.query);

    $http.get(apiUrl + 'search/movie?' + key + '&query=' + searchString + '&language=en')
    .success(function(response) { 
      // console.log(response);
      $scope.searchResults = response.results;
      // console.log($scope.searchResults);

      angular.forEach($scope.searchResults, function(key, val){
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
  };

}]);