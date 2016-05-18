angular.module('profile').controller('ProfileController', function($rootScope, $scope, $stateParams, employeeFactory) {
  // $scope.id = $stateParams.employeeId;
  $scope.currentEmployee = employeeFactory.getEmployeeById($stateParams.employeeId);

  $scope.updateEmployee = function(e){
  	console.log("test");
  	if(employeeFactory.updateProfile(e)){
  		$rootScope.activities.push("Updated " + e.fName );
  	}
  };
});