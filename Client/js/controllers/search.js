var search = angular.module('search',[]);

search.controller('SearchController',
	['$scope', '$routeParams', function($scope, $routeParams) {
	
	$scope.busqueda = $routeParams.query;

	//inicialización del orden del filtro
	$scope.selectOrder = "name";

	//inicialización del filtro de estrellas
	$scope.stars = {};
	$scope.stars.min = 0;
	$scope.stars.max = 5;

	$scope.data = {
		categorias: [
				{name: "Electrónicos"},
				{name: "Servicios de Medicina"},
				{name: "Restaurants"},
				{name: "Alimentos"}
			],
		resultados: [
			{
				id: 542,
				name: "Nokia Lumia 710",
				categoria: "Electrónicos",
				stars: 3.8
			},
			{
				id: 237,
				name: "Dell Studio 1557",
				categoria: "Electrónicos",
				stars: 2.4
			},
			{
				id: 98,
				name: "Dell",
				categoria: "Electrónicos",
				stars: 3.9
			},
			{
				id: 442,
				name: "Dr. Londero",
				categoria: "Servicios de Medicina",
				stars: 4.1
			},
			{
				id: 1551,
				name: "Centro de Salud Nordeste",
				categoria: "Servicios de Medicina",
				stars: 3.3
			},
			{
				id: 197,
				name: "Miraflores",
				categoria: "Restaurants",
				stars: 4.0
			},
			{
				id: 902,
				name: "San Jose",
				categoria: "Restaurants",
				stars: 4.1
			},
			{
				id: 444,
				name: "La Bianca",
				categoria: "Restaurants",
				stars: 4.5
			},
			{
				id: 3,
				name: "Coca Cola",
				categoria: "Alimentos",
				stars: 4.8
			},
			{
				id: 55,
				name: "Paty Finitas",
				categoria: "Alimentos",
				stars: 4.5
			}
		]
	};

	//para mayor y menor igual en la búsqueda de estrellas.
	$scope.greaterThan = function(prop, val){
		return function(item){
			if (item[prop] >= val) return true;
    	};
    };

	$scope.lessThan = function(prop, val){
		return function(item){
			if (item[prop] <= val) return true;
    	};
	};

	$scope.limpiarFiltros = function() {
		$scope.stars.min = 0;
		$scope.stars.max = 5;
		$scope.filtro.categoria = "";
	};
}]);
