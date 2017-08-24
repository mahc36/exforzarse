app.factory("servicioPersona", function($q, $http) {
	return {
		agregarPersona: function(person){			
			return $http.put('http://localhost:8080/Exforzarse/rest/personaServicio/agregarPersona/', person).then(function(data){
				var received=angular.fromJson(data);				
				return received;
			}).catch(function(data){
				console.log(data);
			});
		}
	}
});