/**
 * Greeting Angular Controller
 */
rentmeApp.controller('greetingController', 
    function ($http) {
	var self = this;
	$http.get('/getGreeting')
	.success(function(data) {
		self.greeting = data;
	});
});