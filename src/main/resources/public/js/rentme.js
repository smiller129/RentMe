/**
 * Main Angular App configuration.
 * 
 * ngRoute used for partials
 */

var rentmeApp = angular.module('rentmeApp',
		['ngRoute']);
// Configure angular routes.
rentmeApp.config(['$routeProvider', '$locationProvider', '$httpProvider',
    function($routeProvider, $locationProvider, $httpProvider) {
		//Use HTML5
		$locationProvider.html5Mode(true);
		$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
		$routeProvider.
			// Route for the homepage, gets the greeting partial 
			// and sets the controller from controllers.js
			when('/', {
				templateUrl: 'partials/greeting.html',
				controller: 'greetingController',
				controllerAs: 'gc'
			}).
			// Route for the the about page, gets the about partial
			// and sets the controller from controllers.js
			when('/about', {
				templateUrl: 'partials/about.html',
				controller: 'aboutController'
			}).
			when('/login', {
				templateUrl: 'partials/login.html',
				controller: 'loginController',
				controllerAs: 'lc'
			}).
			when('/user', {
				templateUrl: 'partials/user.html',
				controller: 'userController',
				controllerAs: 'uc'
			}).
			when('/admin', {
				templateUrl: 'partials/admin.html',
				controller: 'adminController',
				controllerAs: 'ac'
			}).
			when('/items', {
				templateUrl: 'partials/items.html',
				controller: 'itemController',
				controllerAs: 'ic'
			});
		
}]);