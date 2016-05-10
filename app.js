angular.module('profile', []);
var myApp = angular.module('DemoApp', ['ngRoute', 'profile']);
myApp.config(function($routeProvider){
	$routeProvider.
		when('/', {
			templateUrl: 'templates/employee_list.html',
			controller: 'EmployeeController'
		}).
		when('/profile', {
			templateUrl: 'templates/profile.html',
			controller: 'ProfileController'
		}).
		when('/logintest', {
			templateUrl: 'templates/logintest.html',
			controller: 'LoginAngularController'
		}).
		otherwise({
			redirectTo: '/logintest'
		});
});