/**
 * About Angular Controller.
 */
rentmeApp.controller('aboutController', ['$scope', '$http',
                                         function ($scope, $http) {
	$http.get('/getMembers')
	.success(function(data) {
		$scope.members = data;
	});
}]);

