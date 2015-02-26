var newProduct = angular.module('newProduct',[]);

newProduct.controller('NewProductController',
	['$scope', '$http', function($scope, $http) {

	$('#imgNotFoundAlert').hide();

	$scope.hideAlert = function () {
		$('#imgNotFoundAlert').slideUp(50);
	};

	$scope.new = {};

	// Acá debería ir toda la lógica para agregar un nuevo producto
	$scope.imgButton = function() {
		if ($scope.imagenLink !== "") {
			$scope.new.img = $scope.imagenLink;
			$('#imgNotFoundAlert').slideUp(50);
			
			$('#newImg').error(function() {
				$scope.new.img = "";
				$('#imgNotFoundAlert').slideDown(50);
			});

		} else {
			$scope.new.img = "";
		}
	};

	$scope.limpiarCampos = function() {
		$scope.new = {};
		$scope.imagenLink = "";
	};

	$http.get('http://www.axionline.net/labs/valorame/api/categories').success(function(data){

		$scope.categorias = data;

	});

	$scope.crearProducto = function() {

		var objetoPost = {
			product: {
				Name : $scope.new.name,
				Description : $scope.new.description,
				ImageUrl : $scope.new.img,
				CategoryId: $scope.new.category
			},
			socials: [
				{
					Name : 'WWW',
					Link : 'http://www.' + $scope.new.web
				},
				{
					Name : 'Facebook',
					Link : 'http://www.facebook.com/' + $scope.new.facebook
				},
				{
					Name : 'Twitter',
					Link : 'http://www.twitter.com/' + $scope.new.twitter
				}
			]
		};

		var headerconfig = {
			headers: {
				'Content-Type':'application/json; charset=utf8'
			}
		};

		$http.post('http://www.axionline.net/labs/valorame/api/products', objetoPost, headerconfig)
		.success(function(data){
			$scope.limpiarCampos();
			console.log(data);
		});
	};
}]);
