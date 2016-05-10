angular.module('DemoApp').controller('EmployeeController', function($rootScope, $scope, $location, $routeParams, employeeFactory) {

  init();
  
  $scope.userName = $routeParams.empName;
  $rootScope.empId = "E0069";
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
        $rootScope.activities.push("Added new emp " + newEmployee.fName);
        init();
      }
    };

  $scope.delete = function(e) {
    $rootScope.activities.push("Deleted " + e.fName);
    employeeFactory.deleteEmployee(e);
  }

  $scope.seeProfile = function(e) {
    $rootScope.activities.push("See the profile of " + e.fName);
    employeeFactory.updateSharedProfile(e);
    $location.path('/profile');
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

