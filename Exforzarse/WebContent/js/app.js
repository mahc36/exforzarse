var app = angular.module("app",["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../paginas/parciales/pecho.html'
        })
        .when('/pecho', {
            templateUrl: '../paginas/parciales/pecho.html'
        })
        .when('/hombros', {
            templateUrl: '../paginas/parciales/hombros.html'
        })
        .when('/espalda', {
            templateUrl: '../paginas/parciales/espalda.html'
        })
        .when('/triceps', {
            templateUrl: '../paginas/parciales/triceps.html'
        })
        .when('/muslos', {
            templateUrl: '../paginas/parciales/muslos.html'
        })
        .when('/pantorrillas', {
            templateUrl: '../paginas/parciales/pantorrillas.html'
        })
        .when('/abdomen', {
            templateUrl: '../paginas/parciales/abdomen.html'
        })
        .when('/biceps', {
            templateUrl: '../paginas/parciales/biceps.html'
        })
        .when('/antebrazo', {
            templateUrl: '../paginas/parciales/antebrazos.html'
        });
    
});

// create the controller and inject Angular's $scope
app.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});