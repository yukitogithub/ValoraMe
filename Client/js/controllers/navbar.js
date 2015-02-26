var navbar = angular.module('navbar',[]);

navbar.controller('NavbarController', ['$scope' ,'$location', function($scope, $location){
	$scope.navbarBuscar = '';

	$scope.buscar = function() {
		if ($scope.navbarBuscar !== '') {
			window.location.href = "#/search/" + $scope.navbarBuscar;
			$scope.navbarBuscar = '';
		}
	};

	$scope.menu = [{
		'title': 'Inicio',
		'link': '/index'
	},
	{
		'title': 'Perfil',
		'link': '/profile'
	},{
		'title': 'Nuevo',
		'link' : '/newproduct'
	}];

	$scope.isActive = function(route) {
		return route === $location.path();
	};

}]);
