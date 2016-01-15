
angular.module('myApp.home', [])
	.directive('home',Home);

	function Home() {
		return {
			restrict: 'E',
			scope: {
				title: '@'
			},
			templateUrl: 'components/home/home.html',
			controller: HomeController,
			controllerAs: 'vm',
			bindToController: true
		}
	}


function HomeController() {
	var vm = this;
}

HomeController.prototype.$routeronActivate = function() {
	this.name = toRoute.params.name;
}
//**************************** this is a interesting example to test once up and running


	// bindToController is now bindings
	// transclude true is now a default
	// scope: {} is now a default
	// controller is angular.noop
	// controllerAs: 'home'
	// 


	// (function() {
	// 	'use strict;'
	// 	angular
	// 		.module('myApp.components.home')
	// 		.component('home',HomeComponentOptions);

	// 		var HomeComponentOptions = {
	// 			bindings: {  
	// 				title: '@'
	// 			},
	// 			templateUrl: 'components/home/home.html'
				    
	// 		}
	// })();