angular.module('activities').controller('ActivityController', 
	function($rootScope, $scope, activityService) {
		$rootScope.activities = activityService.get();

		$scope.$on('ActivityListener', function(ev, args) {
			$rootScope.activities.push(args.data);
			$scope.$emit('SuccessListener');
		});
	});