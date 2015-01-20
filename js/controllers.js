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
	];

	$scope.products = [{
		'name': 'Personal',
		'description': 'Una empresa de telefonía',
		'date': '2015-01-19',
		'owner': 'Alguien'
	},
	{
		'name': 'Dell',
		'description': 'Una empresa de informática',
		'date': '2014-12-14',
		'owner': 'Alguien 2'
	},
	{
		'name': 'Coca Cola',
		'description': 'Una empresa de refrescos',
		'date': '2013-10-10',
		'owner': 'Alguien 3'
	}
	]

	$scope.agregarComentario = function() {
		var nuevoComentario = {
			'votated' : $scope.votated,
			'comment' : $scope.comment,
			'stars' : $scope.stars,
			'date' : $scope.date,
			'comentator' : $scope.comentator,
		};

		$scope.data.push(nuevoComentario);

		$scope.limpiarComentario();
	};

	$scope.agregarProducto = function(){
		var nuevoProducto = {
			'name': $scope.votated,
			'description': $scope.description,
			'date': $scope.productDate,
			'owner': $scope.comentator
		}

		$scope.products.push(nuevoProducto);

		$scope.volveraComentario();
	}

	$scope.criteria = "Any";

	$scope.limpiarComentario = function() {
		$scope.votated = '';
		$scope.comment = '';
		$scope.stars = '';
		$scope.date = '';
		$scope.comentator = '';
	}

	$scope.select = false;
	$scope.selected = function(){
		$scope.votated = $(this)[0].item.name;
		$scope.select = true;
 	}

 	$scope.crearProducto = function(){
 		$("#comentarioForm").hide();
 		$("#productoForm").show();
 	}

 	$scope.limpiarProducto = function() {
		$scope.votated = '';
		$scope.description = '';
		$scope.productDate = '';
		$scope.comentator = '';
	}

	$scope.volveraComentario = function(){
 		$("#productoForm").hide();
 		$("#comentarioForm").show();
 		$scope.description = '';
		$scope.productDate = '';
 	}
}]);