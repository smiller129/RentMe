var rentmeApp = angular.module('rentmeApp',
		['ngRoute']);
rentmeApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider.
			when('/', {
				templateUrl: 'partials/greeting.html',
				controller: 'greetingController'
			}).
			when('/about', {
				templateUrl: 'partials/about.html',
				controller: 'aboutController'
			});
}]);