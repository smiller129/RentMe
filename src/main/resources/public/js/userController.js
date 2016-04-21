rentmeApp.controller('userController',
	function($rootScope, $http, $location, $route) {
	if($rootScope.authenticated) {
		var self = this;
		self.user = $rootScope.loggedInUser;
		self.type = self.user.principal.authorities[0].authority;
		if(self.type == "ROLE_manager") {
			$location.path("/admin");
		}
	}
	else {
		$location.path("/login");
	}
});