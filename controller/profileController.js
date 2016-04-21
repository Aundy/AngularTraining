angular.module('profile').controller('ProfileController', function($rootScope, $scope, employeeFactory) {
  $scope.currentEmployee = employeeFactory.sharedProfile;

  $scope.updateEmployee = function(e){
  	console.log("test");
  	if(employeeFactory.updateProfile(e)){
  		$rootScope.activities.push("Updated " + e.fName );
  	}
  };
});