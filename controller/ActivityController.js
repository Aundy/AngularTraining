angular.module('activities').controller('ActivityController', function($rootScope, $scope, $state) {
	$scope.$on('ActivityListener', function(ev, args) {
		$rootScope.activities.push(args.data);
		$scope.$emit('SuccessListener');
	});
});