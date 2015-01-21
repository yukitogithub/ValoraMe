var valorameDirectives = angular.module('valorameDirectives', []);

//Ingresar aquí todos las directivas a utilizar.
valorameDirectives.directive('comentarios', function(){
	return {
		restrict: 'E',
		templateUrl: 'partials/comentarios.html'
	};
});

valorameDirectives.directive('productos', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/productos.html'
	};
});