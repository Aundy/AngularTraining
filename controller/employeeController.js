angular.module('employee').controller('EmployeeController', 
  function($rootScope, $scope, $state, $stateParams, employeeFactory) {

  init();
  
  $scope.userName = $stateParams.userName;
  $rootScope.empId = $stateParams.userId;
  console.log('$stateParams.userName', $stateParams.userName);

  $rootScope.activities = [];
  $scope.employees = employeeFactory.employees; 

  $scope.addEmployee = function() {
      var newEmployee = {
        id: $scope.employees.length + 1,
        fName: $scope.emp.fName,
        role: $scope.emp.role,
        project: {
          name: $scope.emp.project.name,
          location: $scope.emp.project.location,
        }
      };
      if(employeeFactory.addEmployee(newEmployee)){
        $scope.$broadcast('ActivityListener', {data: 'Added new emp ' + newEmployee.fName});
        init();
      }
    };

  $scope.$on('SuccessListener', function(ev, args) {
    console.log('SuccessListener - Successfully added from Child');
  });

  $scope.delete = function(e) {
    $scope.$broadcast('ActivityListener', 'Deleted the profile of  ' + e.fName);
    employeeFactory.deleteEmployee(e);
  }

  $scope.seeProfile = function(e) {
    // $rootScope.activities.push("See the profile of " + e.fName);
    $scope.$broadcast('ActivityListener', 'See the profile of  ' + e.fName);
    employeeFactory.updateSharedProfile(e);
    //$location.path('/profile');
    // $state.go('profile', {employeeId: e.id});
  }

  function init() {
    $scope.fName = "";
    $scope.role = "";
    $scope.project = "";
  };

  // if ($scope.employees && $scope.employees.length > 0) {
  //   $scope.seeProfile($scope.employees[0]);
  // }
});

