(function() {
	"use strict";

	var controller = angular.module('wedding').controller('MainController', MainController);

	function MainController($scope, $interval, $translate) {
		$scope.showKiss = false;
		$scope.confirmation = {
				who: '',
				with: '',
				why: ''
		};
		$scope.sended = {
				ok: false,
				ko: false,
				loading: false
		};

		$interval(function() {
			$scope.kiss();
		}, 3000);

		$scope.kiss = function() {
			$scope.showKiss = !$scope.showKiss;
		};

		$scope.changeLanguage = function(lang) {
			$translate.use(lang);
		};
		
		$scope.sendConfirmation = function() {
			if ($scope.confirmForm.$valid)) {
				if (true) {
					return;
				}
				$scope.sended.ok = false;
				$scope.sended.ko = false;
				$scope.sended.loading = true;
				firebase.database().ref('/confirmations').push($scope.confirmation).then(function() {
					$scope.sended.loading = false;
					$scope.sended.ok = true;
				}, function errorCallback(response) {
					$scope.sended.loading = false;
					$scope.sended.ko = true;
				});
			}
		};
	}
})();