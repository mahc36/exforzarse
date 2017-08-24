app.controller("controladorTienda",  ["$scope", function controladorTienda($scope) {
    $scope.productos=[];
	$scope.respuesta="";
	
	$scope.obtenerTodosReales = function(){
		$scope.productos=[{id:"2",ruta:"chompa2-1.jpg",ruta2:"chompa2-2.jpg",descripcion:"Chompa exforzarse",color:"Camuflada naranja",tipo:"hombre",indumentaria:"chompa",precio:"75.000"},
				  		  {id:"3",ruta:"chompa3-1.jpg",ruta2:"chompa3-1.jpg",descripcion:"Chompa Exforzarse",color:"Gris oscuro con bordes naranjas",tipo:"hombre",indumentaria:"chompa",precio:"75.000"},
				  		  {id:"4",ruta:"chompa4-1.jpg",ruta2:"chompa4-2.jpg",descripcion:"Chompa Exforzarse",color:"Gris con bordes azules",tipo:"mujer",indumentaria:"chompa",precio:"75.000"},
				  		  {id:"5",ruta:"chompa5-1.jpg",ruta2:"chompa5-2.jpg",descripcion:"Chompa Exforzarse",color:"Camuflada azul",tipo:"mujer",indumentaria:"chompa",precio:"75.000"},
				  		  {id:"7",ruta:"chompa7-1.jpg",ruta2:"chompa7-2.jpg",descripcion:"Chompa Exforzarse",color:"Negra con bordes naranjas",tipo:"hombre",indumentaria:"chompa",precio:"75.000"},
				  		  {id:"8",ruta:"chompa8-1.jpg",ruta2:"chompa8-2.jpg",descripcion:"Chompa Exforzarse",color:"Militar",tipo:"hombre",indumentaria:"chompa",precio:"75.000"},
				  		  {id:"1",ruta:"chompa1-1.jpg",ruta2:"chompa1-2.jpg",descripcion:"Buso de cremallera",color:"Gris",tipo:"hombre",indumentaria:"chompa",precio:"70.000"},
				  		  {id:"6",ruta:"chompa6-1.jpg",ruta2:"chompa6-1.jpg",descripcion:"Buso de cremallera",color:"Negra",tipo:"hombre",indumentaria:"chompa",precio:"70.000"},
				  		  {id:"9",ruta:"sudaderaTela1-1.jpg",ruta2:"sudaderaTela1-2.jpg",descripcion:"Sudadera de tela",color:"Negra",tipo:"hombre",indumentaria:"sudadera",precio:"55.000"},
				  		  {id:"10",ruta:"esqueleto1-1.jpg",ruta2:"esqueleto1-2.jpg",descripcion:"Exqueleto Exforzarse",color:"Camuflada naranja",tipo:"hombre",indumentaria:"camisilla",precio:"35.000"},
				  		  {id:"11",ruta:"esqueleto2-1.jpg",ruta2:"esqueleto2-2.jpg",descripcion:"Exqueleto Exforzarse",color:"Azul oscuro con naranja",tipo:"hombre",indumentaria:"camisilla",precio:"35.000"},
				  		  {id:"12",ruta:"esqueleto3-1.jpg",ruta2:"esqueleto3-2.jpg",descripcion:"Exqueleto Streetworkout",color:"Azul",tipo:"hombre",indumentaria:"camisilla",precio:"30.000"},
				  		  {id:"13",ruta:"esqueleto4-1.jpg",ruta2:"esqueleto4-2.jpg",descripcion:"Exqueleto Streetworkout",color:"Verde",tipo:"hombre",indumentaria:"camisilla",precio:"30.000"},
				  		  {id:"14",ruta:"esqueleto5-1.jpg",ruta2:"esqueleto5-1.jpg",descripcion:"Exqueleto Streetworkout",color:"Naranja",tipo:"hombre",indumentaria:"camisilla",precio:"30.000"},
				  		  ];
	}
}]);