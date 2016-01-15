(function() {
	'use strict';
	angular
		.module('myApp.components.about')
		.directive('about',About);

	function About() {
		return {
			restrict: 'EA',
			scope: {
				title: '@'
			},
			templateUrl: 'app/components/about/about.html',
			controller: AboutController,
			controllerAs: 'vm',
			bindToController: true
		}
	}

	function AboutController() {
		console.log('about controller');
		var vm = this;
	}

	AboutController.prototype.$routeronActivate = function() {
		this.name = toRoute.params.name;
	}

})();