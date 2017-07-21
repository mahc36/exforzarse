app.controller("formularioRegistroCtrl",  ["$scope", function formularioRegistroCtrl($scope) {

	$scope.tipoDocumento ="";
	$scope.mostrarCiertaParte=function(tipoDocumento){
        $scope.tipoDocumento ="";
        if($scope.tipoDocumento == "cedula"){
            alert("va a empezar a mostrar")
            $scope.cedula = true;
            $scope.tarjeta = true;
        }
        $scope.cedula = false;
        $scope.tarjeta = false;
	}
}]);