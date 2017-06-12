(function() {
	"use strict";

	var controller = angular.module('wedding').controller('MainController', MainController);

	function MainController($scope, $interval, $translate) {
		$scope.showKiss = false;

		$interval(function() {
			$scope.kiss();
		}, 3000);

		$scope.kiss = function() {
			$scope.showKiss = !$scope.showKiss;
		};

		$scope.changeLanguage = function(lang) {
			$translate.use(lang);
		};
	}
})();