angular.module('limno.controllers')
.controller('calculadoraController', function($scope, $location, formulas) {
	$scope.toPortada = () => {$location.url('/portada')}
	$scope.calc_menu = false
	$scope.selected_option = ''
	
	$scope.var1 = 0
	$scope.var2 = 0
	$scope.var3 = 0

	$scope.result = 0

	$scope.f = {
							DLC : {nombre:'DLC', descripcion:'Desarrollo de Linea de Costa', inputs:[{var : 'Linea de Costa (Lc)', u : 'm.'}, {var : 'Area (A)', u : 'm2.'}], content: ''}, 
							Pm : {nombre:'Pm', descripcion: 'Pendiente Media', inputs:[{var : 'Profundidad Maxima (Zm)', u : 'm.'}, {var : 'Area (A)', u : 'm2.'}, {var : 'Desviacion Estandar', u : ''}], content: ''}, 
							Dv : {nombre:'Dv', descripcion: 'Desarrollo de Volumen', inputs:[{var : 'Profundidad Media (Zp)', u : 'm.'}, {var : 'Profundidad Maxima (Zm)', u : 'm.'}], content: ''}, 
							V : {nombre:'V', descripcion: 'Volumen', inputs:[{var : 'Area (A)', u : 'm2.'}, {var : 'Profundidad Media (Zp)', u : 'm.'}], content: ''}, 
							Pd : {nombre:'Pd', descripcion: 'Proporcion Dinamica', inputs:[{var : 'Profundidad Media (Zp)', u : 'm.'}, {var : 'Area (A)', u : 'm2.'}], content: ''}, 
							Zr : {nombre:'Zr', descripcion: 'Profundidad Relativa', inputs:[{var : 'Profundidad Maxima (Zm)', u : 'm.'}, {var : 'Area (A)', u : 'm2.'}], content: ''}, 
							Q : {nombre:'Q', descripcion: 'Caudal', inputs:[{var : 'Volumen (V)', u : 'm3.'}, {var : 'Tiempo (T)', u : 'd.'}], content: ''}, 
							TRH : {nombre:'TRH', descripcion: 'Tiempo de Residencia Hidráulica de los contaminantes', inputs:[{var : 'Volumen (V)', u : 'd.'}, {var : 'Caudal (Q)', u : 'm3/d.'}], content: ''}, 
							TSI : {nombre:'TSI', descripcion: 'Indice de Estado Trofico', inputs:[{var : 'Clorofila A (Cla)', u : ''}, {var : 'Fosforo Total (Pt)', u : ''}, {var : 'Ds (Disco de Secchi)', u : ''}], content: ['En esta fórmula se usan los datos de clorofila, fosforo y de la medición de disco de Secchi. Los resultados se ven en porcentaje.', 'Estas fórmulas nos indican que tan limpio está un cuerpo lacustre y con solo dos o uno de estos tres podemos dictaminar eso.']}
						}
	
	$scope.select = (option) =>{
		$scope.selected_option = option
		//$scope.calc_menu = !$scope.calc_menu
	}

	$scope.calculate = () =>{
		switch($scope.selected_option){
			case 'TSI':
				$scope.result = formulas.TSI($scope.var1,$scope.var2, $scope.var3)
				break
			case 'Pm':
				$scope.result = formulas.Pm($scope.var1,$scope.var2, $scope.var3)
				break
			case 'DLC':
				$scope.result = formulas.DLC($scope.var1,$scope.var2)
				break
			case 'Dv':
				$scope.result = formulas.Dv($scope.var1,$scope.var2)
				break
			case 'V':
				$scope.result = formulas.V($scope.var1,$scope.var2)
				break
			case 'Pd':
				$scope.result = formulas.Pd($scope.var1,$scope.var2)
				break
			case 'Zr':
				$scope.result = formulas.Zr($scope.var1,$scope.var2)
				break
			case 'Q':
				$scope.result = formulas.Q($scope.var1,$scope.var2)
				break
			case 'TRH':
				$scope.result = formulas.TRH($scope.var1,$scope.var2)
				break
		}
	}
})