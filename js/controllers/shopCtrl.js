angular.module('assessment')
.controller('shopCtrl', function($scope, mainService, $stateParams) {

  $scope.getProducts = function() {
    mainService.getProducts().then(function(response) {
      // console.log($stateParams.id);
      $scope.products = response.data;
    })
  }

  $scope.getProducts();


})
