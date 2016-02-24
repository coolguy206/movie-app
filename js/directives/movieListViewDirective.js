app.directive('movieListView', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/movie-list-view.html',
    scope: {
    	scope: '='
    }
   };
});