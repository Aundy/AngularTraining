angular.module('employee').controller('EmployeeController', 
  function($rootScope, $scope, $state, $stateParams, $location, employeeFactory) {

  init();
  
  $rootScope.userName = $stateParams.userName;
  $rootScope.empId = $stateParams.userId;
  console.log('$stateParams.userName', $stateParams.userName);

  $rootScope.activities = [];
  $scope.employees = employeeFactory.employees; 
  $scope.hasListener = false;

 $scope.$watch(function(){ 
    return $scope.employees.length; 
  }, function(newVal, oldVal){
      if(newVal !== oldVal){
        if(newVal > oldVal){
          console.log('Added Successfully');
        } else {
          console.log('Deleted Successfully');
        }
      }

    });

 $scope.$watch(function(){ return $scope.hasListener; }, function(o, n){
    console.log('$scope.hasListener');
    if($scope.hasListener){
      $scope.myStyle = {
      "background-color" : "red",
      "color" : "white"
      };
    } else {
      $scope.myStyle = {
      "background-color" : "blue",
      "color" : "white"
      };
    }
  }); 

  $scope.$on('SuccessListener', function(ev, args) {
    console.log('SuccessListener - Successfully added from Child');
  });

  $scope.addEmployee = function() {
      var newEmployee = {
        id: $scope.employees.length + 1,
        fName: $scope.emp.fName,
        role: $scope.emp.role,
      };

      if($scope.emp.project){
        newEmployee.project = {
          name: $scope.emp.project.name,
          location: $scope.emp.project.location
        }
      }

      if(employeeFactory.addEmployee(newEmployee)){
        $scope.hasListener = false;
        $scope.$broadcast('ActivityListener', {data: 'Added new emp ' + newEmployee.fName});
        init();
      }
    };

  $scope.delete = function(e) {
    $scope.$broadcast('ActivityListener', 'Deleted the profile of  ' + e.fName);
    employeeFactory.deleteEmployee(e);
    $scope.hasListener = false;
  }

  $scope.seeProfile = function(e) {
    // $rootScope.activities.push("See the profile of " + e.fName);
    $scope.$broadcast('ActivityListener', 'See the profile of  ' + e.fName);
    employeeFactory.updateSharedProfile(e);
    $scope.hasListener = true;
    //$location.path('/profile/' + e.id);
    $state.go('profile', {empId: e.id});
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

