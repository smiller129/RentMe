/**
 * Angular Controllers.  Used to communicate with the server.
 * 
 * Revision history:
 * 
 * 4/5/16 - Dan Rogers - Initial Version
 * 4/20/16 - Jeff Wentz - Added itemController
 */
rentmeApp.controller('greetingController', ['$scope', '$http',
  function ($scope, $http) {
	$http.get('/greeting')
		.success(function(data) {
			$scope.greeting = data;
		});
}]);

rentmeApp.controller('aboutController', ['$scope', '$http',
    function ($scope, $http) {
		$http.get('/getMembers')
			.success(function(data) {
				$scope.members = data;
			});
}]);

rentmeApp.controller('itemController', ['$scope', '$http',
    function ($scope, $http) {
		$http.get('/items')
			.success(function(data) {
				$scope.items = data;
			});
		/* TODO: Add
		/item
		/reserveItem
		/updateItem
		/admin-update-item
		*/
}]);
