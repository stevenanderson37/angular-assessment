angular.module('assessment')
.controller('shopCtrl', function($scope, mainService) {

  $scope.getProducts = function() {
    mainService.getProducts().then(function(response) {
      // console.log(response.data);
      $scope.products = response.data;
    })
  }

  $scope.getProducts();


})
