var key = "api_key=af8274b3d5d6b03bdbd0443854a35c7a";
var apiUrl = 'http://api.themoviedb.org/3/';

app.factory('nowPlaying', ['$http', function($http) { 
  return $http.get(apiUrl + 'movie/now_playing?' + key) 
            .success(function(data) { 
            	console.log(data);
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);

app.factory('upcoming', ['$http', function($http) { 
  return $http.get(apiUrl + 'movie/upcoming?' + key) 
            .success(function(obj) { 
            	console.log(obj);
              return obj; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);