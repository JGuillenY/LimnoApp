angular.module('limno.controllers')
.controller('portadaController', function($scope, $interval, $timeout) {
	console.log('on')
	$scope.no = Math.floor((Math.random() * 5) + 1)
	$scope.img_url_bt = 'img/background' + $scope.no + '.jpg'
	$scope.img_url_up = $scope.img_url_bt
	$scope.fac = true

	$interval(() => {
		var new_no = Math.floor((Math.random() * 5) + 1)
		while(true){
			if(new_no != $scope.no){
				$scope.no = new_no
				break
			}else{
				new_no = Math.floor((Math.random() * 5) + 1)
			}
		}
		if($scope.fac){
			$scope.img_url_bt = 'img/background' + $scope.no + '.jpg'
			$('#bottom').removeClass('hidden')
	    $('#top').addClass('hidden')
	    $('#bottom').addClass('up')
	    $('#bottom').removeClass('bt')
	    $('#top').addClass('bt')
	    $('#top').removeClass('up')
	    $scope.fac = false
		}else{
			$scope.img_url_up = 'img/background' + $scope.no + '.jpg'
			$('#top').removeClass('hidden')
	    $('#bottom').addClass('hidden')
	    $('#top').addClass('up')
	    $('#top').removeClass('bt')
	    $('#bottom').addClass('bt')
	    $('#bottom').removeClass('up')
	    $scope.fac = true
		}
	}, 5000);	
})