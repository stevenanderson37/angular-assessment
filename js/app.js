// INITIALIZE APP
// ============================================================
var app = angular.module("assessment", ['ui.router']);

// CONFIG
// ============================================================
angular.module("assessment")
	.config(function($stateProvider, $urlRouterProvider) {

		// INITIALIZE STATES
		// ============================================================
		$stateProvider

  		// MacBook HOME STATE
      .state('home', {
        url: '/home',
        templateUrl: "../views/home.html"
        // controller: "homeCtrl"
      })

      .state('about', {
        url: '/about',
        templateUrl: "../views/about.html"
        // controller: "aboutCtrl"
      })

      .state('blog', {
        url: '/blog',
        templateUrl: "../views/blog.html"
        // controller: "blogCtrl"
      })

      .state('details', {
        url: '/detail/:id',
        templateUrl: "../views/product-details.html"
        // controller: "detailsCtrl"
      })

      .state('shop', {
        url: '/shop',
        templateUrl: "../views/shop.html",
        controller: "shopCtrl"
      });




		// ASSIGN OTHERWISE
		// ============================================================
		$urlRouterProvider.otherwise('home');
	});
