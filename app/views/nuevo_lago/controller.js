angular.module('limno.controllers')
.controller('nuevo_lagoController', function($scope, $location) {
	$scope.toPortada = () => {$location.url('/portada')}
	$scope.lago = {nombre : '', origen : '', lc : 0, area: 0, volumen: 0, pm: 0}
})