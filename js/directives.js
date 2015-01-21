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

valorameDirectives.directive('forms',function(){
	return{
		restrict: 'E',
		templateUrl: 'partials/forms.html'
	}
});

valorameDirectives.directive('search',function(){
	return{
		restrict: 'E',
		templateUrl: 'partials/search.html'
	}
});

valorameDirectives.directive('listSelector',function(){
	return{
		restrict:'E',
		templateUrl: 'partials/listSelector.html'
	}
})