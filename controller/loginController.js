angular.module('login').controller('LoginController', function($rootScope, $scope, $state) {
	
	$scope.login = function() {
		//$rootScope.userName = $scope.userName;
		//$location.path('/emp/' + $scope.userName + '/' + $scope.password);
		$state.go('employee', {userName: $scope.userName, userId: $scope.password});
	};
});