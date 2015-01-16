var valorameControllers = angular.module('valorameControllers', []);

valorameControllers.controller('PortadaController',['$scope', function($scope){
	
}]);

valorameControllers.controller('ListadoController',['$scope', function($scope){
	$scope.data = [{
		'votated': 'Personal',
		'comment': 'La verdad que estoy muy disconforme con la compañía. Deja mucho que desear. Sobretodo la conexión!!!',
		'stars': 1,
		'date': '2015-01-16',
		'comentator': 'Fernando Luján'
	},
	{
		'votated': 'Dell',
	 	'comment': 'Realmente no lo recomiendo, tuve una y terminé quemándola. Ahora es un pisapapeles caro',
	 	'stars': 2,
	 	'date': '2015-01-14',
	 	'comentator': 'Kasuki Takemura'
	},
	{
		'votated': 'Coca Cola',
	 	'comment': 'Altamente recomendada, sobretodo cuando hace calor',
	 	'stars': 5,
	 	'date': '2015-01-10',
	 	'comentator': 'Pepsi co'
	},
	{
		'votated': 'Personal',
		'comment': 'La verdad que estoy muy disconforme con la compañía. Deja mucho que desear. Sobretodo la conexión!!!',
		'stars': 1,
		'date': '2015-01-16',
		'comentator': 'Fernando Luján'
	},
	{
		'votated': 'Dell',
	 	'comment': 'Realmente no lo recomiendo, tuve una y terminé quemándola. Ahora es un pisapapeles caro',
	 	'stars': 2,
	 	'date': '2015-01-14',
	 	'comentator': 'Kasuki Takemura'
	},
	{
		'votated': 'Coca Cola',
	 	'comment': 'Altamente recomendada, sobretodo cuando hace calor',
	 	'stars': 5,
	 	'date': '2015-01-10',
	 	'comentator': 'Pepsi co'
	}
	]
}]);