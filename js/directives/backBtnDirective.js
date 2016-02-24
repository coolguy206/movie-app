app.directive('backBtn', ['$window', function($window) {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/back-btn.html',
    link: function(scope){
      scope.back = function(){
        $window.history.back();
      };
    }
  };

}]);


