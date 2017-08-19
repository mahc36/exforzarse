app.controller("controladorEnvioCorreo",  ["$scope",  "servicioCorreo", function ($scope, servicioCorreo) {
	$scope.usuario = {};
	$scope.enviarCorreo = function(usuario){	
		servicioCorreo.enviarCorreo(usuario).then(function (message){
			alert(message.data);
		})
	}
}]);