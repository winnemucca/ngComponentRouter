// angular
// 	.module('myApp.components.notFound')
// 	.component('notFound',NotFoundComponentOptions);

// 	// bindToController is now bindings
// 	// transclude true is now a default
// 	// scope: {} is now a default
// 	// controller is angular.noop
// 	// controllerAs: 'home'
// 	// 
// 	var NotFoundComponentOptions = {
// 		bindings: {  
// 			title: '@'
// 		},
// 		templateUrl: 'components/notFound/notFound.html'
		    
// 	}

(function() {
	'use strict;'

	angular.module('myApp.components.notFound', [])
	.directive('notfound',NotFound);

	function NotFound() {
		return {
			restrict: 'E',
			scope: {
				title: '@'
			},
			templateUrl: 'components/notFound/notFound.html',
			controller: notFoundController,
			controllerAs: 'vm',
			bindToController: true
		}
	}


	function notFoundController() {
		var vm = this;
	}

	notFoundController.prototype.$routeronActivate = function() {
		this.name = toRoute.params.name;
	}
})();