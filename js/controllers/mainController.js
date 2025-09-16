app.controller('mainController', ['$scope', 'nowPlaying', '$http', function($scope, nowPlaying, $http) { 

	var key = "api_key=af8274b3d5d6b03bdbd0443854a35c7a";
	var apiUrl = 'https://api.themoviedb.org/3/'; 

  nowPlaying.success(function(data){
  	$scope.nowPlaying = data.results;
    // console.log($scope.nowPlaying);

    angular.forEach($scope.nowPlaying, function(key, val){
        if (key.overview.length > 150) {
          var str = key.overview.substring(0,150);
          var addOn = '... READ MORE';
          var newStr = str.concat(addOn);
          key.overview = newStr;
        }
      });

  });

  $scope.pageClass= 'page-home';
  $scope.myData = true;
  $scope.views = true;

  $scope.change = function(e){
  	angular.element('.header-btns div').removeClass('active');
  	angular.element(e.target).addClass('active');
    var x = angular.element(e.target).data('name');
  	// console.log(x);
    if (x == 'upcoming') {
      $http.get(apiUrl + 'movie/upcoming?' + key) 
            .success(function(data) { 
              // console.log(data);
              $scope.nowPlaying = data.results;

              angular.forEach($scope.nowPlaying, function(key, val){
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
    } else if ( x == 'now_playing') {
      $http.get(apiUrl + 'movie/now_playing?' + key) 
            .success(function(data) { 
              // console.log(data);
              $scope.nowPlaying = data.results;

              angular.forEach($scope.nowPlaying, function(key, val){
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
    } else if ( x == 'popular') {
      $http.get(apiUrl + 'movie/popular?' + key) 
            .success(function(data) { 
              // console.log(data);
              $scope.nowPlaying = data.results; 

              angular.forEach($scope.nowPlaying, function(key, val){
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
    }
  };

}]);