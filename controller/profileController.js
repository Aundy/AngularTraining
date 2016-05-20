angular.module('profile').controller('ProfileController', 
	function($rootScope, $scope, $stateParams, $state, employeeFactory) {
	$scope.actualEmp = {};
	console.log('$stateParams.empId', $stateParams.empId);
	$scope.currentEmployee = employeeFactory.getEmployeeById($stateParams.empId);

	if($scope.currentEmployee){
		angular.copy($scope.currentEmployee, $scope.actualEmp);
	}

	$scope.$watch('currentEmployee', function(o, n){
		console.log('called...');
		if(!$scope.currentEmployee){
			$scope.buttonDisabled = true;
		} else if(angular.equals($scope.currentEmployee, $scope.actualEmp)){
			$scope.buttonDisabled = true;
		} else {
			$scope.buttonDisabled = false;
		}
	}, true);

	$scope.updateEmployee = function(e){
		console.log("test");
		if(employeeFactory.updateProfile(e)){
			$scope.$broadcast('ActivityListener', 'Updated the profile of  ' + e.fName);
			$state.go('employee', {userName: $rootScope.userName, userId: $rootScope.empId});
		}
  };
});