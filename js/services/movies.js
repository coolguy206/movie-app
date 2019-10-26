var key = "api_key=af8274b3d5d6b03bdbd0443854a35c7a";
var apiUrl = 'https://api.themoviedb.org/3/';

app.factory('nowPlaying', ['$http', function($http) {
  return $http.get(apiUrl + 'movie/now_playing?' + key + '&language=en')
    .success(function(data) {
      // console.log(data);
      return data;
    })
    .error(function(err) {
      return err;
    });
}]);


app.factory('genres', ['$http', function($http) {
  return $http.get(apiUrl + 'genre/movie/list?' + key + '&language=en')
    .success(function(obj) {
      // console.log(obj);
      return obj;
    })
    .error(function(err) {
      return err;
    });
}]);