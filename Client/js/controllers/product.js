var product = angular.module('product',[]);

product.controller('ProductController',
	['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {

	$scope.error = false;

	$scope.productId = $routeParams.id;

	$http.get('http://www.axionline.net/labs/valorame/api/products/' + $scope.productId + '/6')
	.success(function (data){

		$scope.error = false;
		$scope.product = data.Data;

	})
	.error(function (data, status) {

		$scope.error = true;
		$scope.status = status;

	});

	$scope.initComment = function() {
		$scope.newComment = {};
		$scope.newComment.date = new Date();
		//acá debería obtener el usuario activo
		$scope.newComment.addedBy = 'John Doe';
	};

	$scope.initComment();

	$scope.limpiarCampos = function() {
		$scope.initComment();
	};

	// Ver si last comments se pone junto con el product, o separado...
	// Yo (Germán) creo que es conveniente que esten separados, así al
	// agregar un nuevo comentario, se refresquen los comentarios para
	// que aparezca también el último. 

	/*$scope.product = {
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
	};*/

	$scope.addComment = function() {

		var objetoPost = {
			'Stars' : $scope.newComment.stars,
			'Opinion' : $scope.newComment.comment,
			'Date' : new Date()
		};

		var headerconfig = {
			headers: {
				'Content-Type':'application/json; charset=utf8'
			}
		};

		$http.post('http://www.axionline.net/labs/valorame/api/Comments?productid=' + $scope.productId, objetoPost, headerconfig)
		.success(function(data){
			$scope.product.Comments.push(data);
			console.log(data);
		});

		$scope.initComment();
	};

}]);
