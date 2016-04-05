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
