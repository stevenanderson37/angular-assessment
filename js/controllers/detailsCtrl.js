angular.module('assessment')
.controller('detailsCtrl', function($scope, $state, mainService, $stateParams) {

  $scope.productid = $stateParams.id;

  $scope.getProduct = function() {
    mainService.getProduct($stateParams.id).then(function(response) {
      // console.log(response.data);
      $scope.product = response.data;
    })
  }

  $scope.getProduct();


})
