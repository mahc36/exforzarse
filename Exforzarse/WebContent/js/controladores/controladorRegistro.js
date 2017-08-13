app.controller("formularioRegistroCtrl",  ["$scope", function formularioRegistroCtrl($scope) {
	$scope.personaFormulario={};
	
	$scope.agregarPersona=function(personaFormulario){
		alert(personaFormulario.fechaNacimiento);
//		personService.addPerson(person).then(function(message){
//			if(message.data == "OK"){
//				alert("Registrado con éxito");
//				personForLogin={"email":personForm.email,"password":personForm.password};
//				$scope.logIn(personForLogin);
//			}
//			else if(message.data == "EMAILERROR"){
//				alert("El correo ya esta en uso");
//			}
//			else{
//				alert("No se ha podido registrar en nuestra base de datos");
//			}
//		})
	}
	
	
	
}]);