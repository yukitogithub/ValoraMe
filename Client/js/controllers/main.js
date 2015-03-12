var main = angular.module('main',[]);

main.controller('MainController', ['$scope', '$http', function($scope, $http) {

	$http.get('http://www.axionline.net/labs/valorame/api/main')
	.success(function (data) {
		$scope.bestProducts = data.Data.bestProducts;
		$scope.worstProducts = data.Data.worstProducts;
		$scope.lastComments = data.Data.recentComments;
	});

	/*$scope.bestProducts = [{
		'id': 147,
		'name': 'Personal',
		'avg': 4.2,
		'comments': 2662347
	},
	{
		'id': 117,
		'name': 'Dell',
		'avg': 3.9,
		'comments': 2632847
	},
	{
		'id': 7,
		'name': 'Coca Cola',
		'avg': 4.7,
		'comments': 2842632
	},
	{
		'id': 747,
		'name': 'Ferrari',
		'avg': 3.7,
		'comments': 2846211
	},
	{
		'id': 57,
		'name': 'Ticsa',
		'avg': 4.0,
		'comments': 1563457
	}];

	$scope.worstProducts = [{
		'id': 18,
		'name': 'Claro',
		'avg': 0.2,
		'comments': 2345847
	},
	{
		'id': 8,
		'name': 'HP',
		'avg': 1.4,
		'comments': 6542847
	},
	{
		'id': 15,
		'name': 'Manaos',
		'avg': 2.2,
		'comments': 2235347
	},
	{
		'id': 771,
		'name': 'Lamborghini',
		'avg': 2.0,
		'comments': 7623847
	},
	{
		'id': 95,
		'name': 'Ataco Norte',
		'avg': 1.5,
		'comments': 2834147
	}];
*/

	// directamente tomar de una restapi específica para esta página
	/*
	$http.get('http://www.axionline.net/labs/valorame/api/lastComments')
	.success(function (data) {
		$scope.lastComments = data;
	});
	*/

/*	$scope.lastComments = [{
		'votated': 'Personal',
		'votatedId' : 234,
		'comment': 'La verdad que estoy muy disconforme con la compañía. Deja mucho que desear. Sobretodo la conexión!!!',
		'stars': 1,
		'date': new Date(2015,0,16),
		'comentator': 'Fernando Luján'
	},
	{
		'votated': 'Dell',
		'votatedId' : 123,
	 	'comment': 'Realmente no lo recomiendo, tuve una y terminé quemándola. Ahora es un pisapapeles caro',
	 	'stars': 2,
	 	'date': new Date(2015,0,14),
	 	'comentator': 'Kasuki Takemura'
	},
	{
		'votated': 'Coca Cola',
		'votatedId' : 25,
	 	'comment': 'Altamente recomendada, sobretodo cuando hace calor',
	 	'stars': 4,
	 	'date': new Date(2015,0,10),
	 	'comentator': 'Pepsi co'
	},
	{
		'votated': 'Personal',
		'votatedId' : 53,
		'comment': 'Recomendado, podría funcionar mejor, o costar menos, pero no me puedo quejar el funcionamiento. Los equipos ofrecidos, de última generación.',
		'stars': 4,
		'date': new Date(2015,0,16),
		'comentator': 'Fernando Luján'
	},
	{
		'votated': 'Dell',
		'votatedId' : 633,
	 	'comment': 'Realmente no lo recomiendo, tuve una y terminé quemándola. Ahora es un pisapapeles caro',
	 	'stars': 3,
	 	'date': new Date(2015,0,14),
	 	'comentator': 'Kasuki Takemura'
	},
	{
		'votated': 'Coca Cola',
		'votatedId' : 25,
	 	'comment': 'Altamente recomendada, sobretodo cuando hace calor',
	 	'stars': 5,
	 	'date': new Date(2015,0,10),
	 	'comentator': 'Pepsi co'
	}
	];*/

}]);
