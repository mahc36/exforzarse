app.factory("servicioCorreo", function($q, $http) {
	return {
		enviarCorreo : function(usuario){
			return $http.put('http://localhost:8080/Exforzarse/rest/servicioCorreo/enviarCorreo', usuario).then(function(data){
				var receiveddata = angular.fromJson(data);			
				return receiveddata;
			}).catch(function(data){
				console.log(data);
			});
		},
		
	}
});