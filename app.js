angular.module('profile', []);
angular.module('employee', ['activities']);
angular.module('login', []);
angular.module('activities', []);

var myApp = angular.module('DemoApp', ['ui.router', 'login', 'profile', 'employee']);

myApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/login");

	$stateProvider
		.state('login', {
		   url: '/login',
		   templateUrl: 'templates/login.html',
		   controller: 'LoginController'
		})
		.state('employee', {
		   url: '/employee?userName',
		   templateUrl: 'templates/employee_list.html',
		   controller: 'EmployeeController'
		})
		.state('profile', {
		   url:'/profile',
		   templateUrl: 'templates/profile.html',
		   controller: 'ProfileController'
		});
});