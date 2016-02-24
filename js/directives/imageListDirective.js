app.directive('imageList', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/image-list.html',
    scope: {
    	images:'=',
    	showElem: '='
    }
  };

});


