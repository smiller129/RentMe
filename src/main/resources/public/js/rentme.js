/**
 * Main Angular App configuration.
 * 
 * ngRoute used for partials
 */

var rentmeApp = angular.module('rentmeApp',
		['ngRoute']);
// Configure angular routes.
rentmeApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
		//Use HTML5
		$locationProvider.html5Mode(true);
		$routeProvider.
			// Route for the homepage, gets the greeting partial 
			// and sets the controller from controllers.js
			when('/', {
				templateUrl: 'partials/greeting.html',
				controller: 'greetingController'
			}).
			// Route for the the about page, gets the about partial
			// and sets the controller from controllers.js
			when('/about', {
				templateUrl: 'partials/about.html',
				controller: 'aboutController'
			});
}]);