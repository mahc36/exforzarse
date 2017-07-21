app.controller("controladorTienda",  ["$scope", function controladorTienda($scope) {
    $scope.productos=[];
	$scope.respuesta="";
	$scope.obtenerTodos = function(){
        $scope.respuesta="Todos los productos";
        $scope.productos=[{ ruta:"camisetahombre1.jpg",descripcion:"camiseta para hombre azul",tipo:"hombre",indumentaria:"camiseta"},
        				  { ruta:"camisetahombre2.jpg",descripcion:"camiseta para hombre rosa",tipo:"hombre",indumentaria:"camiseta"},
        				  { ruta:"camisetahombre3.jpg",descripcion:"camiseta para hombre rosa",tipo:"hombre",indumentaria:"camiseta"},
        				  { ruta:"camisetahombre4.jpg",descripcion:"camiseta para hombre verde",tipo:"hombre",indumentaria:"camiseta"},
        				  { ruta:"camisetahombre5.jpg",descripcion:"camiseta para hombre verde",tipo:"hombre",indumentaria:"camiseta"},
        				  { ruta:"camisetamujer1.jpg",descripcion:"camiseta para mujer rosa",tipo:"mujer",indumentaria:"camiseta"},
        				  { ruta:"camisetamujer2.jpg",descripcion:"camiseta para mujer negra",tipo:"mujer",indumentaria:"camiseta"},
        				  { ruta:"camisetamujer3.jpg",descripcion:"camiseta para mujer rosa",tipo:"mujer",indumentaria:"camiseta"},
        				  { ruta:"camisetamujer4.jpg",descripcion:"camiseta para mujer negra",tipo:"mujer",indumentaria:"camiseta"},
        				  { ruta:"camisetamujer5.jpg",descripcion:"camiseta para mujer violeta",tipo:"mujer",indumentaria:"camiseta"},
        				  { ruta:"camisillahombre1.jpg",descripcion:"camisilla para hombre negra",tipo:"hombre",indumentaria:"camisilla"},
        				  { ruta:"camisillahombre2.jpg",descripcion:"camisilla para hombre blanca",tipo:"hombre",indumentaria:"camisilla"},
        				  { ruta:"camisillahombre3.jpg",descripcion:"camisilla para hombre azul",tipo:"hombre",indumentaria:"camisilla"},
        				  { ruta:"camisillahombre4.jpg",descripcion:"camisilla para hombre azul",tipo:"hombre",indumentaria:"camisilla"},
        				  { ruta:"camisillamujer1.jpg",descripcion:"camisilla para mujer gris",tipo:"mujer",indumentaria:"camisilla"},
        				  { ruta:"camisillamujer2.jpg",descripcion:"camisilla para mujer morada",tipo:"mujer",indumentaria:"camisilla"},
        				  { ruta:"camisillamujer3.jpg",descripcion:"camisilla para mujer rosa",tipo:"mujer",indumentaria:"camisilla"},
        				  { ruta:"camisillamujer4.jpg",descripcion:"camisilla para mujer negra",tipo:"mujer",indumentaria:"camisilla"},
        				  { ruta:"camisillamujer5.jpg",descripcion:"camisilla para mujer verde azul",tipo:"mujer",indumentaria:"camisilla"},
        				  { ruta:"chompahombre1.jpg",descripcion:"chompa para hombre negra",tipo:"hombre",indumentaria:"chompa"},
        				  { ruta:"chompahombre2.jpg",descripcion:"chompa para hombre amarilla",tipo:"hombre",indumentaria:"chompa"},
        				  { ruta:"chompahombre3.jpg",descripcion:"chompa para hombre negra",tipo:"hombre",indumentaria:"chompa"},
        				  { ruta:"chompahombre4.jpg",descripcion:"chompa para hombre gris-amarilla",tipo:"hombre",indumentaria:"chompa"},
        				  { ruta:"chompahombre5.jpg",descripcion:"chompa para hombre azul claro",tipo:"hombre",indumentaria:"chompa"},
        				  { ruta:"chompahombre6.jpg",descripcion:"chompa para hombre roja",tipo:"hombre",indumentaria:"chompa"},
        				  { ruta:"chompahombre7.png",descripcion:"chompa para hombre azul",tipo:"hombre",indumentaria:"chompa"},
        				  { ruta:"chompamujer1.jpg",descripcion:"chompa para mujer gris azul",tipo:"mujer",indumentaria:"chompa"},
        				  { ruta:"chompamujer2.jpg",descripcion:"chompa para mujer negra",tipo:"mujer",indumentaria:"chompa"},
        				  { ruta:"chompamujer3.jpg",descripcion:"chompa para mujer roja con morado",tipo:"mujer",indumentaria:"chompa"},
        				  { ruta:"chompamujer4.jpg",descripcion:"chompa para mujer verde azul",tipo:"mujer",indumentaria:"chompa"},
        				  { ruta:"chompamujer5.jpg",descripcion:"chompa para mujer roja",tipo:"mujer",indumentaria:"chompa"},
        				  { ruta:"chompamujer6.jpg",descripcion:"chompa para mujer azul",tipo:"mujer",indumentaria:"chompa"},
        				  { ruta:"chompamujer7.jpg",descripcion:"chompa para mujer naranja",tipo:"mujer",indumentaria:"chompa"},
        				  { ruta:"gorrahombre1.jpg",descripcion:"gorra para hombre",tipo:"hombre",indumentaria:"gorra"},
        				  { ruta:"gorrahombre2.jpg",descripcion:"gorra para hombre",tipo:"hombre",indumentaria:"gorra"},
        				  { ruta:"gorrahombre3.jpg",descripcion:"gorra para hombre",tipo:"hombre",indumentaria:"gorra"},
        				  { ruta:"gorrahombre4.jpg",descripcion:"gorra para hombre",tipo:"hombre",indumentaria:"gorra"},
        				  { ruta:"gorrahombre5.jpeg",descripcion:"gorra para hombre",tipo:"hombre",indumentaria:"gorra"},
        				  { ruta:"gorrahombre6.jpg",descripcion:"gorra para hombre",tipo:"hombre",indumentaria:"gorra"},
        				  { ruta:"gorramujer1.jpg",descripcion:"gorra para mujer",tipo:"mujer",indumentaria:"gorra"},
        				  { ruta:"gorramujer2.jpg",descripcion:"gorra para mujer",tipo:"mujer",indumentaria:"gorra"},
        				  { ruta:"gorramujer3.jpg",descripcion:"gorra para mujer",tipo:"mujer",indumentaria:"gorra"},
        				  { ruta:"gorramujer4.jpg",descripcion:"gorra para mujer",tipo:"mujer",indumentaria:"gorra"},
        				  { ruta:"gorramujer5.jpg",descripcion:"gorra para mujer",tipo:"mujer",indumentaria:"gorra"},
        				  { ruta:"gorramujer6.jpg",descripcion:"gorra para mujer",tipo:"mujer",indumentaria:"gorra"},
        				  { ruta:"gorramujer7.jpg",descripcion:"gorra para mujer",tipo:"mujer",indumentaria:"gorra"},
        				  { ruta:"gorramujer8.jpg",descripcion:"gorra para mujer",tipo:"mujer",indumentaria:"gorra"},
        				  { ruta:"gorramujer9.jpg",descripcion:"gorra para mujer",tipo:"mujer",indumentaria:"gorra"},
        				  { ruta:"leggins1.jpg",descripcion:"leggins para mujer",tipo:"mujer",indumentaria:"leggins"},
        				  { ruta:"leggins2.jpg",descripcion:"leggins para mujer",tipo:"mujer",indumentaria:"leggins"},
        				  { ruta:"leggins3.jpg",descripcion:"leggins para mujer",tipo:"mujer",indumentaria:"leggins"},
        				  { ruta:"leggins4.jpg",descripcion:"leggins para mujer",tipo:"mujer",indumentaria:"leggins"},
        				  { ruta:"leggins5.jpg",descripcion:"leggins para mujer",tipo:"mujer",indumentaria:"leggins"},
        				  { ruta:"mediashombre1.jpg",descripcion:"medias para hombre",tipo:"hombre",indumentaria:"medias"},
        				  { ruta:"mediashombre2.jpg",descripcion:"medias para hombre",tipo:"hombre",indumentaria:"medias"},
        				  { ruta:"mediashombre3.jpg",descripcion:"medias para hombre",tipo:"hombre",indumentaria:"medias"},
        				  { ruta:"mediashombre4.jpg",descripcion:"medias para hombre",tipo:"hombre",indumentaria:"medias"},
        				  { ruta:"mediashombre5.jpg",descripcion:"medias para hombre",tipo:"hombre",indumentaria:"medias"},
        				  { ruta:"mediashombre6.jpg",descripcion:"medias para hombre",tipo:"hombre",indumentaria:"medias"},
        				  { ruta:"mediashombre7.jpg",descripcion:"medias para hombre",tipo:"hombre",indumentaria:"medias"},
        				  { ruta:"mediasmujer1.jpg",descripcion:"medias para mujer",tipo:"mujer",indumentaria:"medias"},
        				  { ruta:"mediasmujer2.jpg",descripcion:"medias para mujer",tipo:"mujer",indumentaria:"medias"},
        				  { ruta:"mediasmujer3.JPG",descripcion:"medias para mujer",tipo:"mujer",indumentaria:"medias"},
        				  { ruta:"mediasmujer4.jpg",descripcion:"medias para mujer",tipo:"mujer",indumentaria:"medias"},
        				  { ruta:"mediasmujer5.jpg",descripcion:"medias para mujer",tipo:"mujer",indumentaria:"medias"},
        				  { ruta:"sudaderahombre1.JPG",descripcion:"sudadera para hombre",tipo:"hombre",indumentaria:"sudadera"},
        				  { ruta:"sudaderahombre2.jpg",descripcion:"sudadera para hombre",tipo:"hombre",indumentaria:"sudadera"},
        				  { ruta:"sudaderamujer1.jpg",descripcion:"sudadera para mujer",tipo:"mujer",indumentaria:"sudadera"},
        				  { ruta:"sudaderamujer2.jpg",descripcion:"sudadera para mujer",tipo:"mujer",indumentaria:"sudadera"},
        				  { ruta:"tenismujer1.jpg",descripcion:"tenis para mujer",tipo:"mujer",indumentaria:"tenis"},
        				  { ruta:"tenismujer2.jpg",descripcion:"tenis para mujer",tipo:"mujer",indumentaria:"tenis"},
        				  { ruta:"tenismujer3.jpg",descripcion:"tenis para mujer",tipo:"mujer",indumentaria:"tenis"},
        				  { ruta:"tenismujer4.jpg",descripcion:"tenis para mujer",tipo:"mujer",indumentaria:"tenis"},
        				  { ruta:"tenismujer5.jpg",descripcion:"tenis para mujer",tipo:"mujer",indumentaria:"tenis"},
        				  { ruta:"tenismujer6.jpg",descripcion:"tenis para mujer",tipo:"mujer",indumentaria:"tenis"},
        				  { ruta:"tenishombre1.jpg",descripcion:"tenis para hombre",tipo:"hombre",indumentaria:"tenis"},
        				  { ruta:"tenishombre2.jpg",descripcion:"tenis para hombre",tipo:"hombre",indumentaria:"tenis"},
        				  { ruta:"tenishombre3.jpg",descripcion:"tenis para hombre",tipo:"hombre",indumentaria:"tenis"},
        				  { ruta:"tenishombre4.jpg",descripcion:"tenis para hombre",tipo:"hombre",indumentaria:"tenis"},
        				  { ruta:"tenishombre5.jpg",descripcion:"tenis para hombre",tipo:"hombre",indumentaria:"tenis"}
                         ];
	}
}]);