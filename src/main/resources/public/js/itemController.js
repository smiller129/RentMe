/*
Controller for the items and item pages

Revision History:
4/21/16 - Jeffrey Wentz - Initial Version
*/

rentmeApp.controller('itemController', ['$scope', '$http',
    function ($scope, $http) {
    $scope.item = {id: 0, name: "", description: ""};
    
		$http.get('/getItems')
			.success(function(data) {
				$scope.items = data;
			});
			
		$scope.getItem = function(itemid) {
		  $http.get('/getItem?id=' + itemid)
		    .success(function(data) {
		      $scope.item = data;
		  });
		}
		/* TODO: Add
		/reserveItem
		/updateItem
		/admin-update-item
		*/
}]);
