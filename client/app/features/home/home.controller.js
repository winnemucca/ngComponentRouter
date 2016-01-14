(function() {
	'use strict';

	angular
		.module('myApp.features.home')
		.controller('HomeController', HomeController);

		function HomeController($router) {

			$router.config([
				{
					path: '/home',
					name: 'home'
				}
			]);
			console.log('home');
			var vm = this;
		}

		// function AppController($router) {
		//   $router.config([
		//     { path: '/',              redirectTo: '/welcome' },
		//     { path: '/welcome',       component: 'welcome' },
		//     { path: '/flickr',        component: 'flickr' },
		//     { path: '/settings',      component: 'settings' }
		//   ]);
		// }

})();