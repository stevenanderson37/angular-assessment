angular.module("assessment").service("mainService", function($http) {

  var address = 'http://practiceapi.devmounta.in/products';

  this.getProducts = function() {
    return $http({
			method: 'GET',
			url: address
		});
  };



});
