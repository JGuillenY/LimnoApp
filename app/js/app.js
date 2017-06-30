(function(){
	var app = angular.module('limnoApp', ['ui.router', 'limno.services', 'limno.controllers'])
	
	app.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/portada')
		$stateProvider
			.state('portada', {
				name: 'portada',
				url: '/portada',
				controller: 'portadaController',
				templateUrl: 'views/portada/view.html'
			})
			.state('calculadora', {
				name: 'calculadora',
				url: '/calculadora',
				controller: 'calculadoraController',
				templateUrl: 'views/calculadora/view.html'
			})
			.state('nuevo_lago', {
				name: 'nuevo_lago',
				url: '/nuevo_lago',
				controller: 'nuevo_lagoController',
				templateUrl: 'views/nuevo_lago/view.html'
			})
			.state('lago', {
				name: 'lago',
				url: '/lago',
				controller: 'lagoController',
				templateUrl: 'views/lago/view.html'
			})
	})
})();