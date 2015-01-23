var valorameControllers = angular.module('valorameControllers', []);

valorameControllers.controller('PortadaController',['$scope', function($scope){
	
}]);

valorameControllers.controller('ListadoController',['$scope', function($scope){
	$scope.data = [{
		'votated': 'Personal',
		'comment': 'La verdad que estoy muy disconforme con la compañía. Deja mucho que desear. Sobretodo la conexión!!!',
		'stars': 0.5,
		'date': new Date(2015,0,16),
		'comentator': 'Fernando Luján'
	},
	{
		'votated': 'Dell',
	 	'comment': 'Realmente no lo recomiendo, tuve una y terminé quemándola. Ahora es un pisapapeles caro',
	 	'stars': 2,
	 	'date': new Date(2015,0,14),
	 	'comentator': 'Kasuki Takemura'
	},
	{
		'votated': 'Coca Cola',
	 	'comment': 'Altamente recomendada, sobretodo cuando hace calor',
	 	'stars': 3.8,
	 	'date': new Date(2015,0,10),
	 	'comentator': 'Pepsi co'
	},
	{
		'votated': 'Personal',
		'comment': 'La verdad que estoy muy disconforme con la compañía. Deja mucho que desear. Sobretodo la conexión!!!',
		'stars': 1.7,
		'date': new Date(2015,0,16),
		'comentator': 'Fernando Luján'
	},
	{
		'votated': 'Dell',
	 	'comment': 'Realmente no lo recomiendo, tuve una y terminé quemándola. Ahora es un pisapapeles caro',
	 	'stars': 2.5,
	 	'date': new Date(2015,0,14),
	 	'comentator': 'Kasuki Takemura'
	},
	{
		'votated': 'Coca Cola',
	 	'comment': 'Altamente recomendada, sobretodo cuando hace calor',
	 	'stars': 5,
	 	'date': new Date(2015,0,10),
	 	'comentator': 'Pepsi co'
	}
	];

	$scope.products = [{
		'name': 'Personal',
		'description': 'Una empresa de telefonía',
		'date': new Date(2015,0,19),
		'owner': 'Alguien'
	},
	{
		'name': 'Dell',
		'description': 'Una empresa de informática',
		'date': new Date(2014,11,14),
		'owner': 'Alguien 2'
	},
	{
		'name': 'Coca Cola',
		'description': 'Una empresa de refrescos',
		'date': new Date(2013,9,10),
		'owner': 'Alguien 3'
	}
	];

	$scope.stars = 0;

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
			'name': $scope.newVotated,
			'description': $scope.description,
			'date': $scope.productDate,
			'owner': $scope.comentator
		}

		$scope.products.push(nuevoProducto);

		$scope.volveraComentario();
		$scope.votated = nuevoProducto.name;
	}

	$scope.criteria = "Any";

	$scope.limpiarComentario = function() {
		$scope.votated = '';
		$scope.comment = '';
		$scope.stars = 0;
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
 		$scope.newVotated = $scope.votated;
 		$scope.radioSearch = 'products'
 	}

 	$scope.limpiarProducto = function() {
		$scope.newVotated = '';
		$scope.votated = '';
		$scope.description = '';
		$scope.productDate = '';
		$scope.comentator = '';
	}

	$scope.volveraComentario = function(){
 		$("#productoForm").hide();
 		$("#comentarioForm").show();
 		$scope.radioSearch = 'comments';
 		$scope.newVotated = '';
 		$scope.description = '';
		$scope.productDate = '';
 	}

 	$scope.radioSearch = 'comments';

 	$scope.viewComments = function(product) {
 		$scope.radioSearch = 'comments';
 		$scope.criteria = 'Product/Service';
 		$scope.search = {'votated': product};
 	};

}]);

valorameControllers.controller('ProfileController', ['$scope', function($scope) {
	$scope.profile = {
		'username' : 'mastodonte',
		'name' : 'John',
		'lastname' : 'Doe',
		'email' : 'johndoe@mastodonte.net',
		'born' : Date(1985,8,14)
	};
	
}]);

valorameControllers.controller('MainController', ['$scope', function($scope) {

	$scope.bestProducts = [{
		'name': 'Personal',
		'avg': 4.2
	},
	{
		'name': 'Dell',
		'avg': 3.9
	},
	{
		'name': 'Coca Cola',
		'avg': 4.7
	},
	{
		'name': 'Ferrari',
		'avg': 3.7
	},
	{
		'name': 'Ticsa',
		'avg': 4.0
	}];

	$scope.worstProducts = [{
		'name': 'Claro',
		'avg': 0.2
	},
	{
		'name': 'HP',
		'avg': 1.4
	},
	{
		'name': 'Manaos',
		'avg': 2.2
	},
	{
		'name': 'Lamborghini',
		'avg': 2.0
	},
	{
		'name': 'Ataco Norte',
		'avg': 1.5
	}];

	$scope.lastComments = [{
		'votated': 'Personal',
		'comment': 'La verdad que estoy muy disconforme con la compañía. Deja mucho que desear. Sobretodo la conexión!!!',
		'stars': 1,
		'date': new Date(2015,0,16),
		'comentator': 'Fernando Luján'
	},
	{
		'votated': 'Dell',
	 	'comment': 'Realmente no lo recomiendo, tuve una y terminé quemándola. Ahora es un pisapapeles caro',
	 	'stars': 2,
	 	'date': new Date(2015,0,14),
	 	'comentator': 'Kasuki Takemura'
	},
	{
		'votated': 'Coca Cola',
	 	'comment': 'Altamente recomendada, sobretodo cuando hace calor',
	 	'stars': 4,
	 	'date': new Date(2015,0,10),
	 	'comentator': 'Pepsi co'
	},
	{
		'votated': 'Personal',
		'comment': 'La verdad que estoy muy disconforme con la compañía. Deja mucho que desear. Sobretodo la conexión!!!',
		'stars': 2,
		'date': new Date(2015,0,16),
		'comentator': 'Fernando Luján'
	},
	{
		'votated': 'Dell',
	 	'comment': 'Realmente no lo recomiendo, tuve una y terminé quemándola. Ahora es un pisapapeles caro',
	 	'stars': 3,
	 	'date': new Date(2015,0,14),
	 	'comentator': 'Kasuki Takemura'
	},
	{
		'votated': 'Coca Cola',
	 	'comment': 'Altamente recomendada, sobretodo cuando hace calor',
	 	'stars': 5,
	 	'date': new Date(2015,0,10),
	 	'comentator': 'Pepsi co'
	}
	];

}]);

