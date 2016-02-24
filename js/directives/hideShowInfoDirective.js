app.directive('hideShow', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/hide-show-info.html',
    scope: {
    	info: '=',
    	obj: '='
    },

  };

});


