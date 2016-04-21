rentmeApp.controller('adminController',
	function($rootScope, $http, $location, $route) {
	var self = this;
	self.user = $rootScope.loggedInUser;
	if($rootScope.authenticated) {
		type = self.user.principal.authorities[0].authority;
		if(type == "ROLE_manager") {
			
		}
		else {
			$location.path("/")
		}
	}
	else {
		$location.path("/login");
	}
});