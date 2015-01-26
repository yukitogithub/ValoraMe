var valorame = angular.module('valorame',[
	'ngRoute',
	'valorameControllers',
	'valorameDirectives'
	]);

valorame.config(['$routeProvider',
	function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'partials/portada.html',
			/*controller: 'PortadaController'*/
		})
		.when('/index', {
			templateUrl: 'partials/main.html',
			controller: 'MainController'
		})
		.when('/listado', {
			templateUrl: 'partials/listado.html',
			controller: 'ListadoController'
		})
		.when('/profile', {
			templateUrl: 'partials/profile.html',
			controller: 'ProfileController'
		})
		.when('/search/:query', {
			templateUrl: 'partials/queryresults.html',
			controller: 'SearchController'
		})
		.otherwise({
			redirectTo: '/'
		});
	}]);
