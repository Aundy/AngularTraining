angular.module('DemoApp').controller('LoginController', function($rootScope, $scope, $location) {
	
	$scope.login = function() {
		//$rootScope.userName = $scope.userName;
		$location.path('/emp/' + $scope.userName);
	};
});