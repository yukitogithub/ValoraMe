var valorame = angular.module('valorame',[
	'ngRoute',
	'ngAnimate',
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
		.when('/view/:id', {
			templateUrl: 'partials/viewProduct.html',
			controller: 'ProductController'
		})
		.when('/comments/:id', {
			templateUrl: 'partials/viewAllComments.html',
			controller: 'CommentsController'
		})
		/*	Faltaría lo siguiente
			.when('/comments/:id', {
				templateUrl: '.....',
				controller: '.....'
			})
		*/
		.when('/newproduct', {
			templateUrl: 'partials/newProduct.html',
			controller: 'NewProductController'
		})
		.otherwise({
			redirectTo: '/'
		});
	}]);
