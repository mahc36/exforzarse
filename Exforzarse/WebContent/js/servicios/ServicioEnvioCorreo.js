app.factory("servicioCorreo", function($q, $http) {
	return {
		enviarCorreo : function(personaRegistrar){
			return $http.put('http://localhost:8080/Exforzarse/rest/servicioCorreo/enviarCorreo', personaRegistrar).then(function(data){
				var receiveddata = angular.fromJson(data);			
				return receiveddata;
			}).catch(function(data){
				console.log(data);
			});
		},
		
	}
});