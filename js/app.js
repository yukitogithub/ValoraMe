var valorame = angular.module('valorame',[
	'ngRoute',
	'valorameControllers',
	'valorameDirectives'
	]);

valorame.config(['$routeProvider',
	function($routeProvider){
		$routeProvider
		.when('/index', {
			templateUrl: 'partials/portada.html',
			/*controller: 'PortadaController'*/
		})
		.when('/listado', {
			templateUrl: 'partials/listado.html',
			controller: 'ListadoController'
		})
		.when('/profile', {
			templateUrl: 'partials/profile.html',
			controller: 'ProfileController'
		})
		.otherwise({
			redirectTo: '/index'
		});
	}]);