(function() {
	'use strict';

	angular
		.module('myApp.features.appDirective')
		.directive('app', App);

		function App() {
			return {
				restrict: 'E',
				templateUrl: 'app/features/appDirective/appDirective.html',
				controller: AppController,
				controllerAs: 'vm',
				bindToController: true
			};
		}

		function AppController($router) {
			console.log('configuring routers');

			$router.config([
				{
					path: '/',
					component: 'home',
					name: 'Home'
				},
				{
					path: '/**',
					component: 'notFound',
					name: 'NotFound'
				}
			]);
		}
})();