var valorame = angular.module('valorame',[
	'ngRoute',
	'valorameControllers'
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
		.otherwise({
			redirectTo: '/index'
		});
	}]);