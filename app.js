angular.module('profile', []);
var myApp = angular.module('DemoApp', ['ngRoute', 'profile']);
myApp.config(function($routeProvider){
	$routeProvider.
		when('/emp/:empName', {
			templateUrl: 'templates/employee_list.html',
			controller: 'EmployeeController'
		}).
		when('/profile', {
			templateUrl: 'templates/profile.html',
			controller: 'ProfileController'
		}).
		when('/login', {
			templateUrl: 'templates/login.html',
			controller: 'LoginController'
		}).
		otherwise({
			redirectTo: '/login'
		});
});