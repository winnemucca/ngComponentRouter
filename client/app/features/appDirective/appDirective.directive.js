(function() {
	'use strict';

	angular
		.module('myApp.appDirective')
		.directive('appDirective', appDirective);

		function AppDirective() {
			return {
				restrict: 'E',
				templateUrl: 'appDirective/appDirective.html',
				controller: ['$router', AppDirectiveController]
			};
		}

		function AppDirectiveController($router) {
			console.log('configuring routers');

			$router.config([
				{
					path: '/',
					component: 'home',
					name: 'Home'
				}
			]);
		}
})();