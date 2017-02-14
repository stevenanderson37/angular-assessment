angular.module("assessment")
.directive('productDir', function() {

  return {
    restrict: 'AE',
    templateUrl: './views/product-tmpl.html',
    controller: function($scope, mainService, $state, $rootScope) {

      $(document).ready(function() {
        $("#"+$scope.product.id).click(function() {
          var clicks = $(this).data("clicks");
          if (clicks) {
            // odd clicks
            $(".image"+$scope.product.id).css({
              "display":"block"
            });
            $(".showimage"+$scope.product.id).css({
              "display":"none"
            });
          } else {
            // even clicks
            $(".image"+$scope.product.id).css({
              "display":"none"
            });
            $(".showimage"+$scope.product.id).css({
              "display":"block"
            });
          }
          $(this).data("clicks", !clicks);
        });
      });
    }
  }


});
