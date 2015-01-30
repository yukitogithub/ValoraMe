var valorameControllers = angular.module('valorameControllers', []);

valorameControllers.controller('PortadaController',['$scope', function($scope){
	
}]);

valorameControllers.controller('NavbarController', ['$scope' ,'$location', function($scope, $location){
	$scope.navbarBuscar = '';

	$scope.buscar = function() {
		window.location.href = "#/search/" + $scope.navbarBuscar;
		$scope.navbarBuscar = '';
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
		'born' : new Date(1985,8,14),
		'img' : 'http://fr.cdn.v5.futura-sciences.com/sources/images/dossier/rte/2672_grotte_073.jpg',
		'city' : 'Resistencia',
		'province' : 'Chaco',
		'country' : 'Argentina'
	};

	$scope.pillPrincipal = true;

	$scope.iniciarEditarForm = function() {
		$scope.newName = $scope.profile.name;
		$scope.newLastname = $scope.profile.lastname;
		$scope.newEmail = $scope.profile.email;
		$scope.newBorn = $scope.profile.born;
		$scope.newCity = $scope.profile.city;
		$scope.newProvince = $scope.profile.province;
		$scope.newCountry = $scope.profile.country;
	};

	$scope.iniciarEditarForm();

	$scope.guardarCambiosDatos = function() {
		$scope.profile.name = $scope.newName;
		$scope.profile.lastname = $scope.newLastname;
		$scope.profile.email = $scope.newEmail;
		$scope.profile.born = $scope.newBorn;
		$scope.profile.city = $scope.newCity;
		$scope.profile.province = $scope.newProvince;
		$scope.profile.country = $scope.newCountry;
		$("#editar-datos").modal('hide');
	};

}]);

valorameControllers.controller('MainController', ['$scope', function($scope) {

	$scope.bestProducts = [{
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
		'comment': 'Recomendado, podría funcionar mejor, o costar menos, pero no me puedo quejar el funcionamiento. Los equipos ofrecidos, de última generación.',
		'stars': 4,
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

valorameControllers.controller('ProductController',
	['$scope', '$routeParams', function($scope, $routeParams) {

	$scope.productId = $routeParams.id;

	// Ver si last comments se pone junto con el product, o separado...
	// Yo (Germán) creo que es conveniente que esten separados, así al
	// agregar un nuevo comentario, se refresquen los comentarios para
	// que aparezca también el último. 

	$scope.product = {
		'id' : $scope.productId,
		'name' : 'Personal',
		'category' : 'Telefonía',
		'stars' : 3.2,
		'description' : 'Una empresa radicada en Argentina, dependiente de Telecom, que provee servicios de telefonía celular a sus clientes. Fundada en 1492, cuando Colón descubrió supuestamente América.',
		'addedBy' : 'Cosme Fulanito',
		'img' : 'https://oceanoneuronal.files.wordpress.com/2012/06/logo_personal_nuevo.jpg',
		'web' : 'personal.com.ar',
		'facebook' : 'personalargentina',
		'twitter' : 'personalar',
		'lastComments' : 
			[{
				'stars': 4,
				'comment' : 'Tiene alcance en mi ciudad, el 3g mas o menos, pero anda para mandar Whatsapps.',
				'addedBy' : 'Cosme Fulanito',
				'date' : new Date (2015, 0, 04)
			},{
				'stars': 2,
				'comment' : 'No anda, encima me cobran mas caro de lo que se pacto al comprar el plan!',
				'addedBy' : "John Doe",
				'date' : new Date (2015, 0, 14)
			},{
				'stars': 1,
				'comment' : 'Es basura, sencillamente no sirve.',
				'addedBy' : "Juan Claro Movistar",
				'date' : new Date (2015, 0, 11)
			},{
				'stars': 5,
				'comment' : 'The best, no puede haber algo mejor, es expléndido, fantabuloso.',
				'addedBy' : "Jorge Personal",
				'date' : new Date (2015, 0, 17)
			},{
				'stars': 4,
				'comment' : 'Recomendado, podría funcionar mejor, o costar menos, pero no me puedo quejar el funcionamiento. Los equipos ofrecidos, de última generación.',
				'addedBy' : "Esteban Trabajos",
				'date' : new Date (2014, 11, 30)
			},{
				'stars': 3,
				'comment' : 'Y es lo que hay, podría mejorar, podría ser peor.',
				'addedBy' : "Guillermo Puertas",
				'date' : new Date (2014, 11, 04)
			}],
	};

	}]);

valorameControllers.controller('NewProductController',
	['$scope', function($scope) {

	$('#imgNotFoundAlert').hide();

	$scope.hideAlert = function () {
		$('#imgNotFoundAlert').slideUp(50);
	};

	$scope.new = {};

	// Acá debería ir toda la lógica para agregar un nuevo producto
	$scope.imgButton = function() {
		if ($scope.imagenLink !== "") {
			$scope.new.img = $scope.imagenLink;

			$('#newImg').error(function() {
				$scope.new.img = "";
				$('#imgNotFoundAlert').slideDown(50);
			});

		} else {
			$scope.new.img = "";
		};
	};

	$scope.limpiarCampos = function() {
		$scope.new = {};
		$scope.imagenLink = "";
	}

	}]);

valorameControllers.controller('SearchController',
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
