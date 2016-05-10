angular.module('DemoApp').controller('LoginAngularController', function($rootScope, $scope, $location) {
	
	$scope.login = function() {
		$rootScope.userName = $scope.userName;
		$location.path('/');
	};
});