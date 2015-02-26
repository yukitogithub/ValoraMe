var profile = angular.module('profile',[]);

profile.controller('ProfileController', ['$scope', function($scope) {
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
